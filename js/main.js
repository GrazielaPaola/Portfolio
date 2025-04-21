const projectsData = [
    {
        id: 1,
        name: 'E-commerce',
        description: 'Sistema de e-commerce desenvolvido em Python e Django com funcionalidades de loja, pedidos, perfil de usuário e gerenciamento de produtos.',
        image: 'images/ec.png',
        tags: ['Python', 'Django', 'SQLite'],
        github: 'https://github.com/GrazielaPaola/e-commerce',
        demo: '#',
        category: 'backend'
    },
    {
        id: 2,
        name: 'App Facul - School Reserve',
        description: 'Aplicativo mobile desenvolvido com Flutter para um sistema de reservas escolares.',
        image: 'images/login1.jpg',
        tags: ['Flutter', 'Dart', 'Mobile'],
        github: 'https://github.com/GrazielaPaola/app_facul',
        demo: '#',
        category: 'mobile'
    },
];


let typed;

window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.classList.add('hidden');
    }

    initTyped();
    initMobileMenu();
    initScrollAnimations();
    initBackToTop();
    initContactForm();
    loadGitHubProjects();
    initProjectFilter();
    initSmoothScroll();
    initNavbarScroll();
});

function initTyped() {
    typed = new Typed('.typed-text', {
        strings: ['Backend','Mobile'],
        typeSpeed: 80,
        backSpeed: 60,
        backDelay: 2000,
        loop: true
    });
}

function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-link');
    
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    navLinksItems.forEach(item => {
        item.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}

function initScrollAnimations() {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.from('.about-image', {
        scrollTrigger: {
            trigger: '.about',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        x: -100,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out'
    });
    
    gsap.from('.about-text', {
        scrollTrigger: {
            trigger: '.about',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        x: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.3
    });
    
    gsap.from('.skill-card', {
        scrollTrigger: {
            trigger: '.skills',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out'
    });
    
    gsap.from('.project-card', {
        scrollTrigger: {
            trigger: '.projects',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out'
    });
    
    gsap.from('.contact-card', {
        scrollTrigger: {
            trigger: '.contact',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        x: -50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out'
    });
    
    gsap.from('.contact-form', {
        scrollTrigger: {
            trigger: '.contact',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        x: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.3
    });
}

function initBackToTop() {
    const backToTopButton = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('active');
        } else {
            backToTopButton.classList.remove('active');
        }
    });
    
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
    
        const formData = new FormData(contactForm);
        const formValues = Object.fromEntries(formData.entries());

        contactForm.innerHTML = `
            <div class="form-success">
                <i class="fas fa-check-circle"></i>
                <h3>Mensagem Enviada!</h3>
                <p>Obrigado por entrar em contato, ${formValues.name}. Responderei o mais breve possível.</p>
            </div>
        `;
    });
}


async function loadGitHubProjects() {
    try {
        renderProjects(projectsData);
        
    } catch (error) {
        console.error('Erro ao carregar projetos:', error);
    }
}

function renderProjects(projects) {
    const projectsGrid = document.querySelector('.projects-grid');
    
    projectsGrid.innerHTML = '';
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = `project-card ${project.category}`;
        
        projectCard.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.name}">
                <div class="project-overlay">
                    <div class="project-links">
                        <a href="${project.github}" target="_blank" title="Ver no GitHub">
                            <i class="fab fa-github"></i>
                        </a>
                        <a href="${project.demo}" target="_blank" title="Ver Demo">
                            <i class="fas fa-external-link-alt"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div class="project-content">
                <h3>${project.name}</h3>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
    
    initProjectAnimations();
}

function initProjectAnimations() {
    gsap.from('.project-card', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out'
    });
}

function initProjectFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            let filteredProjects;
            
            if (filterValue === 'all') {
                filteredProjects = projectsData;
            } else {
                filteredProjects = projectsData.filter(project => project.category === filterValue);
            }

            renderProjects(filteredProjects);
        });
    });
}

function initSmoothScroll() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function initNavbarScroll() {
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}
