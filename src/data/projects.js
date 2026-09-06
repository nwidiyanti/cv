import dataEntryImg from '../assets/images/data_entry.jpg';
import inventoryImg from '../assets/images/it_inventory.jpg';
import helpdeskImg from '../assets/images/helpdesk.jpg';
import socialMediaImg from '../assets/images/social_media.jpg';

export const projects = [
  {
    id: 1,
    name: "Automated Data Entry & Validation System",
    description: "Mengembangkan workflow otomatis menggunakan n8n untuk mengumpulkan, memvalidasi, dan memasukkan data operasional secara langsung ke dalam Google Sheets, mengurangi kesalahan input manual hingga 90%.",
    image: dataEntryImg,
    technologies: ["n8n", "Google Workspace", "Data Validation", "Automation"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: 2,
    name: "IT Asset & Inventory Management",
    description: "Membangun sistem pelacakan aset IT dan inventaris barang masuk/keluar. Mengelola pencatatan stok dan memberikan laporan ketersediaan secara real-time untuk mendukung kelancaran operasional.",
    image: inventoryImg,
    technologies: ["Database Management", "Google Sheets", "Administrative Support"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: 3,
    name: "Helpdesk & IT Support Reporting",
    description: "Menyusun dokumentasi teknis dan sistem pelaporan gangguan jaringan/perangkat. Melakukan verifikasi data laporan untuk mempercepat proses penanganan masalah (troubleshooting) oleh tim teknis.",
    image: helpdeskImg,
    technologies: ["IT Support", "Information Systems", "Data Management"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: 4,
    name: "Modern Social Media Content Strategy",
    description: "Merancang dan mengeksekusi pembuatan konten visual digital yang modern, estetis, dan interaktif. Berperan dalam meningkatkan engagement dengan audiens melalui storytelling yang relevan dengan tren masa kini.",
    image: socialMediaImg,
    technologies: ["Content Creation", "Social Media", "Creative Strategy", "Copywriting"],
    githubUrl: "#",
    liveUrl: "#"
  }
];
