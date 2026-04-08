import { ReportData } from './types';

export const dashboardData: ReportData = {
    meta: {
        title: "KEMENTERIAN TERATAS",
        subtitle: "Laporan Harian, Senin 30 Maret 2026",
        footerText: "Data diambil pada Minggu 29 Maret 2026 | Pukul 00.00 - 23.59"
    },
    slides: [
        {
            type: 'dashboard',
            leftCol: {
                title: 'MEDIA SOSIAL',
                chartTitle: 'Porsi Percakapan Kementerian',
                items: [
                    { name: 'Kementerian Komunikasi dan\nDigital', alias: 'KEMKOMDIGI', value: 6654, text: 'Postingan serta komentar publik terkait Kemkomdigi resmi memberlakukan pembatasan medsos anak mulai 28 Maret 2026.', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Logo_of_Kementerian_Komunikasi_dan_Informatika_Republik_Indonesia.png/800px-Logo_of_Kementerian_Komunikasi_dan_Informatika_Republik_Indonesia.png' },
                    { name: 'Kementerian Sosial', alias: 'KEMENSOS', value: 2729, text: 'Pemerintah melalui Kemensos menyalurkan bansos PKH.', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Logo_Kementerian_Sosial_Republik_Indonesia.png/800px-Logo_Kementerian_Sosial_Republik_Indonesia.png' },
                    { name: 'Kementerian Pariwisata', alias: 'KEMENPAR', value: 745, text: 'Warganet men-tag Kemenpar terkait harga tiket objek wisata yang mencekik di libur lebaran.', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Logo_Kementerian_Pariwisata.png/800px-Logo_Kementerian_Pariwisata.png' },
                    { name: 'Kementerian Sekretariat Negara', alias: 'KEMENSETNEG', value: 346, text: 'Kemensetneg mengamplifikasi dokumentasi kegiatan aparatur negara selama sepekan.', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Logo_Kementerian_Sekretariat_Negara.png/800px-Logo_Kementerian_Sekretariat_Negara.png' },
                    { name: 'Kementerian Pertanian', alias: 'KEMENTAN', value: 161, text: 'Kementan mendukung inovasi penyimpanan pangan BRIN and BULOG.', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Logo_Kementerian_Pertanian.png/800px-Logo_Kementerian_Pertanian.png' },
                    { name: 'Kementerian Kesehatan', alias: 'KEMENKES', value: 145, text: 'Kemenkes terus berupaya meningkatkan layanan kesehatan bagi masyarakat.', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Logo_Kementerian_Kesehatan.png/800px-Logo_Kementerian_Kesehatan.png' },
                    { name: 'Kementerian Agama', alias: 'KEMENAG', value: 132, text: 'Kemenag memperkuat moderasi beragama di seluruh lapisan masyarakat.', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Logo_Kementerian_Agama_Republik_Indonesia.png/800px-Logo_Kementerian_Agama_Republik_Indonesia.png' }
                ]
            },
            rightCol: {
                title: 'MEDIA ONLINE',
                chartTitle: 'Porsi Pemberitaan Kementerian',
                items: [
                    { name: 'Kementerian Komunikasi dan\nDigital', alias: 'KEMKOMDIGI', value: 250, text: 'Kemkomdigi resmi memberlakukan pembatasan medsos anak mulai 28 Maret 2026.', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Logo_of_Kementerian_Komunikasi_dan_Informatika_Republik_Indonesia.png/800px-Logo_of_Kementerian_Komunikasi_dan_Informatika_Republik_Indonesia.png' },
                    { name: 'Kementerian Sosial', alias: 'KEMENSOS', value: 185, text: 'Pemda Tapanuli Utara menyerahkan bantuan bagi penyintas bencana Sumatra.', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Logo_Kementerian_Sosial_Republik_Indonesia.png/800px-Logo_Kementerian_Sosial_Republik_Indonesia.png' },
                    { name: 'Kementerian Kesehatan', alias: 'KEMENKES', value: 174, text: 'Kemenkes akan evaluasi implementasi PP Tunas terhadap mental anak.', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Logo_Kementerian_Kesehatan.png/800px-Logo_Kementerian_Kesehatan.png' },
                    { name: 'Kementerian Agama', alias: 'KEMENAG', value: 163, text: 'Kemenag memperkuat literasi digital di Pesantren dan Madrasah setelah PP Tunas mulai berlaku.', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Logo_Kementerian_Agama_Republik_Indonesia.png/800px-Logo_Kementerian_Agama_Republik_Indonesia.png' },
                    { name: 'Kementerian Pekerjaan\nUmum', alias: 'KEM PU', value: 153, text: 'Menteri PU menyiapkan strategi untuk hadapi kemarau panjang jaga ketahanan pangan.', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Logo_Kementerian_Pekerjaan_Umum.png/800px-Logo_Kementerian_Pekerjaan_Umum.png' },
                    { name: 'Kementerian Pendidikan', alias: 'KEMENDIKBUD', value: 142, text: 'Kemendikbud terus mendorong inovasi dalam sistem pendidikan nasional.', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Logo_Kementerian_Pendidikan_dan_Kebudayaan.png/800px-Logo_Kementerian_Pendidikan_dan_Kebudayaan.png' },
                    { name: 'Kementerian Perhubungan', alias: 'KEMENHUB', value: 128, text: 'Kemenhub memastikan kelancaran arus transportasi logistik nasional.', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Logo_Kementerian_Perhubungan.png/800px-Logo_Kementerian_Perhubungan.png' }
                ]
            }
        }
    ]
};
