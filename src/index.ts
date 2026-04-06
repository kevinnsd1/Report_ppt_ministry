import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import multer from 'multer';
import { generatePDF } from './generator';
import { dashboardData } from './data';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Setup folder statik agar file bisa di-download via URL
const downloadsDir = path.join(__dirname, '../public/downloads');
if (!fs.existsSync(downloadsDir)) {
    fs.mkdirSync(downloadsDir, { recursive: true });
}
app.use('/downloads', express.static(downloadsDir));

// Setup folder untuk upload gambar
const uploadsDir = path.join(__dirname, '../public/uploads');
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
}
app.use('/uploads', express.static(uploadsDir));

// Konfigurasi Multer untuk penyimpanan file
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadsDir);
    },
    filename: (req, file, cb) => {
        // Nama file unik: timestamp + angka acak
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({ 
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // limit 5MB
});

app.get('/', (req: Request, res: Response) => {
    res.send('PPT Generator Backend (TypeScript) is Running!');
});

// Handler logika untuk menyimpan ke file statik lalu memberikan link
const handleGenerate = async (req: Request, res: Response) => {
    try {
        const payload = req.body && req.body.slides ? req.body : dashboardData;
        const buffer = await generatePDF(payload);

        const fileName = `Report_Kementerian_${Date.now()}.pdf`;
        const filePath = path.join(downloadsDir, fileName);
        
        // Simpan file buffer ke dalam folder /public/downloads
        fs.writeFileSync(filePath, buffer);
        
        // Buat link download
        const downloadUrl = `${req.protocol}://${req.get('host')}/downloads/${fileName}`;

        // Return JSON
        res.json({
            success: true,
            message: "Berhasil membuat laporan PDF",
            fileName: fileName,
            downloadLink: downloadUrl
        });

    } catch (error) {
        console.error("Error generating PDF:", error);
        res.status(500).json({ success: false, error: "Failed to generate PDF" });
    }
};

app.get('/generate-pdf', handleGenerate);
app.post('/generate-pdf', handleGenerate);

// Endpoint untuk upload gambar
app.post('/upload', upload.single('image'), (req: Request, res: Response) => {
    if (!req.file) {
        return res.status(400).json({ success: false, message: 'No file uploaded' });
    }

    const fileUrl = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
    
    res.json({
        success: true,
        message: 'File uploaded successfully',
        url: fileUrl,
        fileName: req.file.filename
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`Generate PDF at http://localhost:${PORT}/generate-pdf`);
});
