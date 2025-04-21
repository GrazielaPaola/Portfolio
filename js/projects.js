document.addEventListener('DOMContentLoaded', () => {
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

    const projectsGrid = document.querySelector('.projects-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');

    function renderProjects(projects) {
        projectsGrid.innerHTML = '';

        projects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.classList.add('project-card', project.category);
            projectCard.setAttribute('data-category', project.category);
            projectCard.innerHTML = `
                <div class="project-image">
                    <img src="${project.image}" alt="${project.name}">
                    <div class="project-overlay">
                        <div class="project-links">
                            <a href="${project.github}" target="_blank"><i class="fab fa-github"></i></a>
                            <a href="${project.demo}" target="_blank"><i class="fas fa-external-link-alt"></i></a>
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
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');

            const filteredProjects = filter === 'all'
                ? projectsData
                : projectsData.filter(p => p.category === filter);

            renderProjects(filteredProjects);
        });
    });

    renderProjects(projectsData);
});
