document.addEventListener('DOMContentLoaded', () => {

    const modal = document.getElementById('project-modal');
    const closeBtn = document.querySelector('.close-modal');
    const timelineList = document.getElementById('timeline-list');

    // Dynamically generate timeline items
    timelineData.forEach(item => {
        const li = document.createElement('li');
        li.className = 'news-item';
        li.setAttribute('data-project', item.id);

        // Create the 3-column layout structure

        let detailsHtml = `<div class="details">
            <span class="role">${item.role}</span>
            <span class="content-text">${item.content.replace(/<span class="highlight-link">.*?<\/span>/g, item.role).replace(item.role, '')}</span>`;

        if (item.bullets && item.bullets.length > 0) {
            detailsHtml += `<ul class="timeline-bullets">`;
            item.bullets.forEach(bullet => {
                detailsHtml += `<li>${bullet}</li>`;
            });
            detailsHtml += `</ul>`;
        }
        detailsHtml += `</div>`;

        // Refined rendering using the new explicit fields
        // We'll prefer the cleanest output

        li.innerHTML = `
            <span class="date">${item.year}</span>
            <span class="company">${item.company}</span>
            <div class="details">
                <span class="role">${item.role}</span>
                ${!item.bullets ? `<span class="content-text">${item.desc}</span>` : ''} 
                ${item.bullets ? `<ul class="timeline-bullets">${item.bullets.map(b => `<li>${b}</li>`).join('')}</ul>` : ''}
            </div>
        `;

        // Refined rendering to avoid duplicating content if we just want title/bullets
        // Using the new explicit fields
        li.innerHTML = `
            <span class="date">${item.year}</span>
            <span class="company">${item.company}</span>
            <div class="details">
                <span class="role">${item.role}</span>
                ${!item.bullets ? `<span class="content-text">${item.desc}</span>` : ''} 
                ${item.bullets ? `<ul class="timeline-bullets">${item.bullets.map(b => `<li>${b}</li>`).join('')}</ul>` : ''}
            </div>
        `;

        timelineList.appendChild(li);

        // Add click event listener to the new item
        li.addEventListener('click', (e) => {
            // Prevent triggering if clicking a link inside the item
            if (e.target.tagName === 'A' || e.target.closest('a')) {
                return;
            }

            const projectId = li.getAttribute('data-project');
            const selectedItem = timelineData.find(d => d.id === projectId);

            if (selectedItem) {
                // Check if rich data is available
                if (selectedItem.richId && typeof timelineDataRich !== 'undefined') {
                    const richItem = timelineDataRich.find(r => r.id === selectedItem.richId);
                    if (richItem) {
                        openRichModal(richItem);
                        return;
                    }
                }

                // Fallback: If no rich data, check for external link
                if (selectedItem.link) {
                    window.open(selectedItem.link, '_blank');
                    return;
                }

                // Fallback: Default simple modal logic (or alert)
                // Since we replaced the modal HTML, we should use openRichModal with a simple object
                openRichModal({
                    role: selectedItem.title,
                    company: '',
                    year: selectedItem.year,
                    summary: selectedItem.desc,
                    responsibilities: selectedItem.bullets || [],
                    projects: [],
                    skills: []
                });
            }
        });
    });

    function openRichModal(data) {
        // Header
        document.getElementById('modal-title').textContent = data.role;
        document.getElementById('modal-subtitle').textContent = data.company ? `${data.company} | ${data.year}` : data.year;

        // Overview
        document.getElementById('modal-description').textContent = data.summary || '';

        const achievementsList = document.getElementById('modal-achievements');
        achievementsList.innerHTML = '';

        const bullets = data.responsibilities && data.responsibilities.length > 0 ? data.responsibilities : (data.achievements || []);

        if (bullets.length > 0) {
            bullets.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                achievementsList.appendChild(li);
            });
        }

        // Projects (STAR Stories)
        const projectsGrid = document.getElementById('modal-projects');
        const projectsSection = projectsGrid.parentElement.parentElement; // Need to verify DOM path if hiding sections

        projectsGrid.innerHTML = '';

        if (data.projects && data.projects.length > 0) {
            // projectsSection.style.display = 'block'; // Ensure section is visible
            data.projects.forEach(project => {
                const card = document.createElement('div');
                card.className = 'project-card';

                let starContent = '';
                if (project.star) {
                    starContent = `
                        <div class="star-grid">
                            <div class="star-item"><strong>Situation</strong> ${project.star.situation}</div>
                            ${project.star.task ? `<div class="star-item"><strong>Task</strong> ${project.star.task}</div>` : ''}
                            <div class="star-item"><strong>Action</strong> ${project.star.action}</div>
                            <div class="star-item"><strong>Result</strong> ${project.star.result}</div>
                        </div>
                    `;
                }

                card.innerHTML = `
                    <h4>${project.title}</h4>
                    ${starContent}
                `;
                projectsGrid.appendChild(card);
            });
        } else {
            // Optional: Hide section if empty
            // projectsSection.style.display = 'none';
        }

        // Skills
        const skillsContainer = document.getElementById('modal-skills');

        skillsContainer.innerHTML = '';

        if (data.skills && data.skills.length > 0) {
            data.skills.forEach(skill => {
                const chip = document.createElement('span');
                chip.className = 'skill-chip';
                chip.textContent = skill;
                skillsContainer.appendChild(chip);
            });
        }

        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Disable scroll
    }

    // Close Modal Logic
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target == modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Theme Toggle Logic
    const themeToggle = document.getElementById('theme-toggle');
    const savedTheme = localStorage.getItem('theme');

    // Default to dark mode logic
    if (savedTheme !== 'light') {
        document.body.classList.add('dark-mode');
        if (themeToggle) themeToggle.checked = true;
    }

    if (themeToggle) {
        themeToggle.addEventListener('change', (e) => {
            if (e.target.checked) {
                document.body.classList.add('dark-mode');
                localStorage.setItem('theme', 'dark');
            } else {
                document.body.classList.remove('dark-mode');
                localStorage.setItem('theme', 'light');
            }
        });
    }
});
