// Toggle Navbar on Menu Icon Click
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark'); // Change icon to 'x' when menu is open
    menuIcon.classList.toggle('fa-bars'); // Change back to bars when closed
    navbar.classList.toggle('active');
};

// Close Navbar when a link is clicked (for mobile view)
document.querySelectorAll('.navbar a').forEach(link => {
    link.onclick = () => {
        if (window.innerWidth <= 995) { // Only close on mobile
            menuIcon.classList.remove('fa-xmark');
            menuIcon.classList.add('fa-bars');
            navbar.classList.remove('active');
        }
    };
});

// Highlight Active Nav Link on Scroll
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.navbar a');

window.onscroll = () => {
    // Active link based on scroll position
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });

    // Sticky Header
    let header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(13, 13, 13, 0.98)';
        header.style.boxShadow = '0 0.5rem 1rem rgba(0, 0, 0, 0.3)';
    } else {
        header.style.background = 'rgba(13, 13, 13, 0.95)';
        header.style.boxShadow = '0 0.5rem 1rem rgba(0, 0, 0, 0.2)';
    }
};

// Text Typing Animation (using Typed.js)
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Typed.js
    const typed = new Typed('.text-animation', {
        strings: ["Web Developer", "UI/UX Designer", "Data Analyst", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        backDelay: 2000,
        loop: true,
        cursorChar: '|',
        smartBackspace: true
    });

    // Modal functionality for services
    const serviceButtons = document.querySelectorAll('.btn-service');
    const serviceModal = document.getElementById('service-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    const closeModal = document.querySelector('.close-modal');

    // Data for service modals
    const serviceData = {
        'web-development': {
            title: 'Pengembangan Web',
            content: `
                <p>Saya menawarkan layanan pengembangan web yang komprehensif dengan fokus pada:</p>
                <ul>
                    <li><strong>Website Responsif:</strong> Membangun website yang tampil optimal di semua perangkat</li>
                    <li><strong>Single Page Applications:</strong> Mengembangkan aplikasi web modern menggunakan React.js</li>
                    <li><strong>E-commerce Solutions:</strong> Membuat toko online dengan fitur lengkap</li>
                    <li><strong>CMS Custom:</strong> Mengembangkan sistem manajemen konten yang disesuaikan</li>
                    <li><strong>Optimasi Performa:</strong> Memastikan website loading cepat dan efisien</li>
                    <li><strong>SEO Friendly:</strong> Membangun website dengan struktur ramah SEO</li>
                </ul>
                <p><strong>Teknologi:</strong> HTML5, CSS3, JavaScript, React.js, Node.js, Express.js, MongoDB</p>
            `
        },
        'ui-ux': {
            title: 'Desain UI/UX',
            content: `
                <p>Layanan desain UI/UX saya mencakup:</p>
                <ul>
                    <li><strong>User Research:</strong> Analisis kebutuhan pengguna dan riset kompetitor</li>
                    <li><strong>Wireframing & Prototyping:</strong> Membuat kerangka dan prototipe interaktif</li>
                    <li><strong>UI Design:</strong> Desain antarmuka yang estetis dan sesuai brand identity</li>
                    <li><strong>UX Design:</strong> Mengoptimalkan alur pengguna untuk meningkatkan engagement</li>
                    <li><strong>Design Systems:</strong> Membuat sistem desain yang konsisten</li>
                    <li><strong>Usability Testing:</strong> Pengujian dengan pengguna untuk identifikasi masalah</li>
                </ul>
                <p><strong>Tools:</strong> Figma, Adobe XD, Sketch, Canva</p>
            `
        },
        'data-analyst': {
             title: 'Project Data Analyst',
             content: `
                <p>Layanan data analyst saya mencakup:</p>
                 <ul>
                    <li><strong>Data Cleaning & Preparation:</strong> Memproses dan menyiapkan data mentah untuk dianalisis</li>
                    <li><strong>Exploratory Data Analysis (EDA):</strong> Mengidentifikasi pola, tren, dan anomali dalam data</li>
                    <li><strong>Data Visualization:</strong> Membuat dashboard dan laporan visual yang informatif (charts, graphs)</li>
                    <li><strong>Statistical Analysis:</strong> Menerapkan metode statistik untuk menguji hipotesis dan mendapatkan insight</li>
                    <li><strong>Reporting & Insight Generation:</strong> Menyusun laporan analitis dengan rekomendasi yang dapat ditindaklanjuti</li>
                    <li><strong>Project Support:</strong> Memberikan dukungan berbasis data untuk pengambilan keputusan proyek</li>
                </ul>
                <p><strong>Teknologi & Tools:</strong> SQL, Excel/Google Sheets, Statistik</p>
    `
        }
    };

    // Open modal when service button is clicked
    serviceButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const service = button.getAttribute('data-service');
            
            if (serviceData[service]) {
                modalTitle.textContent = serviceData[service].title;
                modalBody.innerHTML = serviceData[service].content;
                serviceModal.style.display = 'flex';
                
                // Prevent body scrolling when modal is open
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Close modal
    function closeServiceModal() {
        serviceModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    closeModal.addEventListener('click', closeServiceModal);

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === serviceModal) {
            closeServiceModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && serviceModal.style.display === 'flex') {
            closeServiceModal();
        }
    });

    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                message: document.getElementById('message').value
            };
            
            // Simple validation
            if (!formData.name || !formData.email || !formData.message) {
                alert('Mohon lengkapi semua field yang wajib diisi!');
                return;
            }
            
            // Email validation
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(formData.email)) {
                alert('Mohon masukkan alamat email yang valid!');
                return;
            }
            
            // In a real application, you would send this data to a server
            // For now, we'll just log it and show a success message
            console.log('Contact Form Data:', formData);
            
            // Show success message
            alert('Pesan Anda telah berhasil dikirim! Saya akan menghubungi Anda segera.');
            
            // Reset form
            contactForm.reset();
            
            // Optional: Send email using a service like EmailJS
            // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
            //     .then(() => alert('Message sent successfully!'))
            //     .catch(error => alert('Error sending message: ' + error));
        });
    }

    // Download CV button
    const downloadCV = document.querySelector('.download-cv');
    if (downloadCV) {
        downloadCV.addEventListener('click', (e) => {
            e.preventDefault();
            
            // In a real application, this would download a PDF file
            // For demonstration, we'll create a placeholder
            const link = document.createElement('a');
            link.href = '#';
            link.download = 'CV_Mugni_Asfi_Asfiya.pdf';
            link.textContent = 'CV Mugni Asfi Asfiya';
            
            // Simulate download
            alert('CV Mugni Asfi Asfiya akan diunduh. (Simulasi)');
            
            // Uncomment the line below for real download
            // link.click();
        });
    }

    // Smooth scroll for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scroll animations with Intersection Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);

    // Observe elements for animations
    const elementsToAnimate = document.querySelectorAll(
        '.service-box, .skill-category, .education-item, .experience-item, .info-item'
    );
    
    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });

    // Back to top button functionality
    const backToTopBtn = document.querySelector('.footer-iconTop a');
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Add animation classes for CSS animations
    const animatedElements = document.querySelectorAll(
        '.home-content, .home-img, .about-content, .service-box, .skill-category'
    );
    
    animatedElements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.2}s`;
    });
});

// Initialize animations on window load
window.addEventListener('load', () => {
    // Add loaded class to body for any post-load animations
    document.body.classList.add('loaded');
    
    // Optional: Remove preloader if you have one
    // const preloader = document.querySelector('.preloader');
    // if (preloader) {
    //     preloader.style.display = 'none';
    // }
});

// Handle window resize
window.addEventListener('resize', () => {
    // Close navbar on desktop if it's open
    if (window.innerWidth > 995 && navbar.classList.contains('active')) {
        navbar.classList.remove('active');
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
    }
});

// Optional: Add CSS for animation classes
// This could also be added to your CSS file
const style = document.createElement('style');
style.textContent = `
    .animate {
        animation: fadeInUp 0.6s ease forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .loaded .home-content,
    .loaded .home-img {
        animation-play-state: running;
    }
`;
document.head.appendChild(style);

// CV Modal Functionality
document.addEventListener('DOMContentLoaded', function() {
    // ... (kode yang sudah ada sebelumnya) ...
    
    // CV Modal Functionality
    const downloadCVBtn = document.querySelector('.download-cv');
    const cvModal = document.getElementById('cv-modal');
    const closeCvModal = document.querySelector('.close-cv-modal');
    const closeCvBtn = document.querySelector('.close-cv-btn');
    const downloadCvBtn = document.querySelector('.download-cv-btn');
    
    // Open CV Modal when download button is clicked
    if (downloadCVBtn) {
        downloadCVBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Show CV modal
            cvModal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            
            // Animate skill bars
            setTimeout(() => {
                document.querySelectorAll('.skill-bar').forEach(bar => {
                    bar.style.width = bar.style.width;
                });
            }, 300);
        });
    }
    
    // Close CV Modal functions
    function closeCVModal() {
        cvModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    
    if (closeCvModal) {
        closeCvModal.addEventListener('click', closeCVModal);
    }
    
    if (closeCvBtn) {
        closeCvBtn.addEventListener('click', closeCVModal);
    }
    
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === cvModal) {
            closeCVModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && cvModal.style.display === 'flex') {
            closeCVModal();
        }
    });
    
    // Download CV directly (alternative)
    if (downloadCvBtn) {
        downloadCvBtn.addEventListener('click', function(e) {
            // Don't prevent default - let the download happen
            // Close modal after download starts
            setTimeout(() => {
                closeCVModal();
            }, 1000);
        });
    }
    
    // Also update service data for new service (Data Analyst)
    const serviceData = {
        'web-development': {
            title: 'Pengembangan Web',
            content: `
                <p>Saya menawarkan layanan pengembangan web yang komprehensif dengan fokus pada:</p>
                <ul>
                    <li><strong>Website Responsif:</strong> Membangun website yang tampil optimal di semua perangkat</li>
                    <li><strong>Single Page Applications:</strong> Mengembangkan aplikasi web modern menggunakan React.js</li>
                    <li><strong>E-commerce Solutions:</strong> Membuat toko online dengan fitur lengkap</li>
                    <li><strong>CMS Custom:</strong> Mengembangkan sistem manajemen konten yang disesuaikan</li>
                    <li><strong>Optimasi Performa:</strong> Memastikan website loading cepat dan efisien</li>
                    <li><strong>SEO Friendly:</strong> Membangun website dengan struktur ramah SEO</li>
                </ul>
                <p><strong>Teknologi:</strong> HTML5, CSS3, JavaScript, Node.js, Express.js</p>
            `
        },
        'ui-ux': {
            title: 'Desain UI/UX',
            content: `
                <p>Layanan desain UI/UX saya mencakup:</p>
                <ul>
                    <li><strong>User Research:</strong> Analisis kebutuhan pengguna dan riset kompetitor</li>
                    <li><strong>Wireframing & Prototyping:</strong> Membuat kerangka dan prototipe interaktif</li>
                    <li><strong>UI Design:</strong> Desain antarmuka yang estetis dan sesuai brand identity</li>
                    <li><strong>UX Design:</strong> Mengoptimalkan alur pengguna untuk meningkatkan engagement</li>
                    <li><strong>Design Systems:</strong> Membuat sistem desain yang konsisten</li>
                    <li><strong>Usability Testing:</strong> Pengujian dengan pengguna untuk identifikasi masalah</li>
                </ul>
                <p><strong>Tools:</strong> Figma, Photoshop, Sketch, Canva</p>
            `
        },
        'data-analyst': {
            title: 'Project Data Analyst',
            content: `
                <p>Layanan analisis data yang saya tawarkan:</p>
                <ul>
                    <li><strong>Data Cleaning & Preprocessing:</strong> Membersihkan dan mempersiapkan data untuk analisis</li>
                    <li><strong>Exploratory Data Analysis:</strong> Menganalisis pola dan tren dalam data</li>
                    <li><strong>Data Visualization:</strong> Membuat visualisasi data yang informatif dan menarik</li>
                    <li><strong>Predictive Modeling:</strong> Membangun model prediksi menggunakan teknik statistik</li>
                    <li><strong>Business Insights:</strong> Memberikan wawasan bisnis berdasarkan analisis data</li>
                    <li><strong>Reporting:</strong> Membuat laporan analisis yang komprehensif dan mudah dipahami</li>
                </ul>
                <p><strong>Tools:</strong> Python, Excel, SQL</p>
            `
        }
    };
    
    // Make sure the Data Analyst service button works
    const dataAnalystBtn = document.querySelector('[data-service="data-analyst"]');
    if (dataAnalystBtn && !serviceData['data-analyst']) {
        serviceData['data-analyst'] = {
            title: 'Project Data Analyst',
            content: `
                <p>Layanan analisis data yang saya tawarkan:</p>
                <ul>
                    <li><strong>Data Cleaning & Preprocessing:</strong> Membersihkan dan mempersiapkan data untuk analisis</li>
                    <li><strong>Exploratory Data Analysis:</strong> Menganalisis pola dan tren dalam data</li>
                    <li><strong>Data Visualization:</strong> Membuat visualisasi data yang informatif dan menarik</li>
                    <li><strong>Business Insights:</strong> Memberikan wawasan bisnis berdasarkan analisis data</li>
                    <li><strong>Reporting:</strong> Membuat laporan analisis yang komprehensif</li>
                </ul>
            `
        };
    }
    
    // ... (sisa kode yang sudah ada) ...
});