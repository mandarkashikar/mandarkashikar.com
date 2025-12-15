document.addEventListener('DOMContentLoaded', () => {

    const modal = document.getElementById('project-modal');
    const closeBtn = document.querySelector('.close-modal');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-description');

    // Data populated from user's extracted timeline
    // Data populated from timeline_data.js
    const timelineList = document.getElementById('timeline-list');

    // Dynamically generate timeline items
    timelineData.forEach(item => {
        const li = document.createElement('li');
        li.className = 'news-item';
        li.setAttribute('data-project', item.id);

        li.innerHTML = `
            <span class="date">${item.year}</span>
            <span class="content">${item.content}</span>
        `;

        timelineList.appendChild(li);

        // Add click event listener to the new item
        li.addEventListener('click', (e) => {
            // If the user clicked a link, allow default navigation and do NOT open modal
            if (e.target.tagName === 'A' || e.target.closest('a')) {
                return;
            }

            // Find the latest data for this item
            // This ensures we have the most up-to-date object from the global array
            const currentItem = timelineData.find(t => t.id === item.id) || item;

            // If the item has a direct external link, navigate to it
            if (currentItem.link) {
                window.open(currentItem.link, '_blank');
                return;
            }

            modalTitle.textContent = currentItem.title;
            modalDesc.textContent = currentItem.desc;
            if (currentItem.image) {
                modalImage.src = currentItem.image;
                modalImage.style.display = 'block';
            } else {
                modalImage.style.display = 'none';
            }
            modal.style.display = 'block';
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target == modal) {
            modal.style.display = 'none';
        }
    });

    // Theme Toggle Logic
    const themeToggle = document.getElementById('theme-toggle');

    // Check for saved user preference
    const savedTheme = localStorage.getItem('theme');
    // Default to dark mode (if saved is 'dark' or null)
    if (savedTheme !== 'light') {
        document.body.classList.add('dark-mode');
        themeToggle.checked = true;
    }

    themeToggle.addEventListener('change', (e) => {
        if (e.target.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    });
});
