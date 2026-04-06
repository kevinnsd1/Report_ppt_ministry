import puppeteer from 'puppeteer';
import ejs from 'ejs';
import path from 'path';
import fs from 'fs';

/**
 * Generates a high-quality PDF report from a JSON payload using Puppeteer.
 * Renders an A4 Portrait layout based on the dashboard design.
 * 
 * @param data The report data containing metadata and slides.
 * @returns A Buffer containing the generated PDF file.
 */
export const generatePDF = async (data: any): Promise<Buffer> => {
    // 1. Locate the EJS template
    const templatePath = path.resolve(__dirname, 'templates/dashboard.ejs');

    // 2. Prepare the local logo path as a Base64 Base64 Data URI
    const logoFile = path.resolve(process.cwd(), 'public/assets/komdigi.png');
    const logoBase64 = fs.readFileSync(logoFile).toString('base64');
    const logoPath = `data:image/png;base64,${logoBase64}`;

    // 3. Extract the dashboard slide data
    const dashboardSlide = data.slides.find((s: any) => s.type === 'dashboard');
    if (!dashboardSlide) {
        throw new Error("Dashboard slide data not found in the payload.");
    }

    // 4. Render HTML using EJS
    const html = await ejs.renderFile(templatePath, {
        meta: data.meta,
        leftCol: dashboardSlide.leftCol,
        rightCol: dashboardSlide.rightCol,
        logoPath: logoPath
    });

    // 5. Launch Headless Browser (Puppeteer)
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-web-security']
    });

    try {
        const page = await browser.newPage();

        // Wait until network is idle to ensure all remote images (logos) are loaded
        await page.setContent(html, { waitUntil: 'networkidle2', timeout: 30000 });

        // 6. Generate PDF Buffer
        const pdfBuffer = await page.pdf({
            format: 'A4',
            printBackground: true,
            displayHeaderFooter: false,
            preferCSSPageSize: true
        });

        return pdfBuffer;
    } catch (error) {
        console.error("PDF Generation Error:", error);
        throw error;
    } finally {
        await browser.close();
    }
};