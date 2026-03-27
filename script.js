/* ──────────────────────────────────────────
   mandark.dev — main script
────────────────────────────────────────── */
(function () {
  'use strict';

  /* ── Theme ─────────────────────────────── */
  const root = document.documentElement;
  const themeBtn = document.getElementById('theme-toggle');
  const saved = localStorage.getItem('theme');

  function applyTheme(t) {
    root.setAttribute('data-theme', t);
    localStorage.setItem('theme', t);
  }

  // Default: light unless saved as dark
  applyTheme(saved === 'dark' ? 'dark' : 'light');

  themeBtn && themeBtn.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(next);
  });

  /* ── Build experience list ─────────────── */
  const list = document.getElementById('exp-list');

  if (list && typeof timelineDataRich !== 'undefined') {
    timelineDataRich.forEach(item => {
      const li = document.createElement('li');
      li.className = 'exp-item';
      li.setAttribute('data-id', item.id);
      li.innerHTML = `
        <span class="exp-year">${item.year}</span>
        <div class="exp-body">
          <div class="exp-role">${item.role}</div>
          <div class="exp-co">${item.company}</div>
          <div class="exp-summary">${item.summary}</div>
          <span class="exp-arrow">View details <i class="fas fa-arrow-right fa-xs"></i></span>
        </div>
      `;
      li.addEventListener('click', () => openModal(item));
      list.appendChild(li);
    });
  }

  /* ── Modal ─────────────────────────────── */
  const bg       = document.getElementById('modal-bg');
  const modal    = document.getElementById('modal');
  const closeBtn = document.getElementById('modal-close');

  function openModal(data) {
    document.getElementById('m-role').textContent    = data.role;
    document.getElementById('m-meta').textContent    = `${data.company} · ${data.year}`;
    document.getElementById('m-summary').textContent = data.summary || '';

    /* Responsibilities */
    const respBlock = document.getElementById('m-resp-block');
    const respList  = document.getElementById('m-resp');
    const bullets   = data.responsibilities || data.achievements || [];
    respList.innerHTML = '';
    if (bullets.length) {
      bullets.forEach(b => {
        const li = document.createElement('li');
        li.textContent = b;
        respList.appendChild(li);
      });
      respBlock.style.display = 'block';
    } else {
      respBlock.style.display = 'none';
    }

    /* Projects */
    const projBlock = document.getElementById('m-proj-block');
    const projWrap  = document.getElementById('m-projects');
    projWrap.innerHTML = '';
    if (data.projects && data.projects.length) {
      data.projects.forEach(p => {
        const card = document.createElement('div');
        card.className = 'proj-card';
        let starHtml = '';
        if (p.star) {
          const rows = [
            { k: 'Situation', v: p.star.situation },
            { k: 'Task',      v: p.star.task },
            { k: 'Action',    v: p.star.action },
            { k: 'Result',    v: p.star.result },
          ].filter(r => r.v);
          starHtml = `<div class="star-row">${rows.map(r =>
            `<div class="star-item"><strong>${r.k}</strong>${r.v}</div>`
          ).join('')}</div>`;
        }
        card.innerHTML = `<h4>${p.title}</h4>${starHtml}`;
        projWrap.appendChild(card);
      });
      projBlock.style.display = 'block';
    } else {
      projBlock.style.display = 'none';
    }

    /* Skills */
    const skillsBlock = document.getElementById('m-skills-block');
    const skillsWrap  = document.getElementById('m-skills');
    skillsWrap.innerHTML = '';
    if (data.skills && data.skills.length) {
      data.skills.forEach(s => {
        const span = document.createElement('span');
        span.className = 'pill';
        span.textContent = s;
        skillsWrap.appendChild(span);
      });
      skillsBlock.style.display = 'block';
    } else {
      skillsBlock.style.display = 'none';
    }

    bg.classList.add('open');
    bg.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    bg.classList.remove('open');
    bg.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  closeBtn && closeBtn.addEventListener('click', closeModal);

  bg && bg.addEventListener('click', e => {
    if (e.target === bg) closeModal();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });
})();
