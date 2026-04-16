import puppeteer from "puppeteer";
import ejs from "ejs";
import path from "path";
import fs from "fs";

export const generatePDF = async (data: any): Promise<Buffer> => {
  const templatePath = path.resolve(__dirname, "templates/dashboard.ejs");

  const logoFile = path.resolve(process.cwd(), "public/assets/komdigi.png");
  const logoBase64 = fs.readFileSync(logoFile).toString("base64");
  const logoPath = `data:image/png;base64,${logoBase64}`;

  const dashboardSlide = data.slides.find((s: any) => s.type === "dashboard");
  if (!dashboardSlide) {
    throw new Error("Dashboard slide data not found in the payload.");
  }

  const html = await ejs.renderFile(templatePath, {
    meta: data.meta,
    leftCol: dashboardSlide.leftCol,
    rightCol: dashboardSlide.rightCol,
    logoPath: logoPath,
  });

  const browser = await puppeteer.launch({
    headless: true,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-web-security",
    ],
  });

  try {
    const page = await browser.newPage();

    await page.setContent(html, { waitUntil: "networkidle2", timeout: 30000 });

    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
      displayHeaderFooter: false,
      preferCSSPageSize: true,
    });

    return pdfBuffer;
  } catch (error) {
    console.error("PDF Generation Error:", error);
    throw error;
  } finally {
    await browser.close();
  }
};
