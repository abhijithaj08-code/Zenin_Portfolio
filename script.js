(function () {
  'use strict';
  const data = window.PORTFOLIO || {};
  const $ = (selector, context = document) => context.querySelector(selector);
  const $$ = (selector, context = document) => [...context.querySelectorAll(selector)];
  const safe = (value, fallback = '') => value || fallback;
  const name = safe(data.name, 'Abhijith K');

  $('#navName').textContent = name.toUpperCase();
  $('#footerName').textContent = name.toUpperCase();
  $('#heroLocation').textContent = safe(data.location, 'Kasaragod, Kerala').toUpperCase();
  $('#initials').textContent = safe(data.initials, name.split(' ').map(part => part[0]).join('').slice(0, 2)).toUpperCase();
  if (data.profileImage) $('#profileImage').src = data.profileImage;
  if (data.heroImage) $('#heroImage').src = data.heroImage;
  $('#bioText').textContent = safe(data.bio);
  $('#contactCopy').textContent = safe(data.contactCopy);
  if (data.primaryContact) $('#primaryContact').href = data.primaryContact;

  const email = safe(data.email, 'abhijithaj08@gmail.com');
  const emailLink = $('#contactEmail');
  emailLink.href = `mailto:${email}`;
  emailLink.firstChild.textContent = `${email} `;

  $('#stats').innerHTML = (data.stats || []).map(stat => `<div><strong>${safe(stat.value, '—')}</strong><small>${safe(stat.label)}</small></div>`).join('');
  $('#serviceList').innerHTML = (data.services || []).map(service => `<article class="service"><span class="service-number mono">${safe(service.number)}</span><h3>${safe(service.title)}</h3><p>${safe(service.text)}</p><span class="service-tags">${safe(service.tags)}</span></article>`).join('');
  function renderWorkCard(work) {
    const media = work.media && /\.(mp4|webm|ogg)$/i.test(work.media)
      ? `<video src="${work.media}" data-start="${safe(work.start, 0)}" controls playsinline preload="metadata" aria-label="${safe(work.title)} preview"></video>`
      : `<img src="${work.media}" alt="${safe(work.title)}" loading="lazy">`;
    return `<article class="work-card"><div class="work-media ${safe(work.accent, 'sunset')}">${media}</div><span class="work-type">${safe(work.type)}</span><h3>${safe(work.title)}</h3><p>${safe(work.text)}</p><button class="work-link media-open" type="button">${work.media && /\.(mp4|webm|ogg)$/i.test(work.media) ? 'OPEN FULL PREVIEW' : 'OPEN FULL IMAGE'} <span>↗</span></button></article>`;
  }
  $('#aeGrid').innerHTML = (data.afterEffects || []).map(renderWorkCard).join('');
  $('#psGrid').innerHTML = (data.photoshop || []).map(renderWorkCard).join('');
  $('#timeline').innerHTML = (data.qualifications || []).map(item => `<article class="timeline-item"><span class="period mono">${safe(item.period)}</span><h3>${safe(item.title)}</h3><p>${safe(item.detail)}</p></article>`).join('');
  $('#toolTags').innerHTML = (data.tools || []).map(tool => `<span>${safe(tool)}</span>`).join('');
  const socialIcon = type => type === 'instagram'
    ? '<svg class="social-icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17.5" cy="6.5" r="1"></circle></svg>'
    : '<span class="fiverr-mark" aria-hidden="true">fi</span>';
  $('#socials').innerHTML = (data.socials || []).filter(item => item.url).map(item => `<a href="${item.url}" target="_blank" rel="noreferrer">${socialIcon(item.icon)}<span>${safe(item.label)}</span><b>↗</b></a>`).join('');

  const loader = $('#pageLoader');
  const finishLoading = () => loader.classList.add('done');
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => setTimeout(finishLoading, 80), { once: true });
  else setTimeout(finishLoading, 80);
  setTimeout(finishLoading, 700);

  const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('in'); observer.unobserve(entry.target); } }), { threshold: .14 });
  $$('.reveal').forEach(el => observer.observe(el));

  const menu = $('#mobileNav');
  const toggle = $('#menuToggle');
  toggle.addEventListener('click', () => { const open = menu.classList.toggle('open'); toggle.setAttribute('aria-expanded', String(open)); });
  $$('.mobile-nav a').forEach(link => link.addEventListener('click', () => { menu.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); }));

  const pauseOtherVideos = activeVideo => $$('video').forEach(video => { if (video !== activeVideo) video.pause(); });
  const bindVideo = video => video.addEventListener('play', () => pauseOtherVideos(video));

  $$('.work-media video').forEach(video => {
    video.addEventListener('loadedmetadata', () => {
      const start = Number(video.dataset.start || 0);
      if (start > 0 && Number.isFinite(start) && start < video.duration) video.currentTime = start;
    });
    bindVideo(video);
    video.addEventListener('error', () => { video.replaceWith(Object.assign(document.createElement('span'), { className: 'media-label', textContent: 'PREVIEW UNAVAILABLE' })); });
  });

  $$('.work-media img').forEach(image => {
    image.addEventListener('error', () => { image.replaceWith(Object.assign(document.createElement('span'), { className: 'media-label', textContent: 'IMAGE UNAVAILABLE' })); });
  });

  const mediaModal = $('#mediaModal');
  const mediaModalContent = $('#mediaModalContent');
  const mediaModalCaption = $('#mediaModalCaption');
  const closeMedia = () => {
    const activeVideo = $('video', mediaModalContent);
    if (activeVideo) activeVideo.pause();
    mediaModalContent.replaceChildren();
    mediaModal.classList.remove('open');
    mediaModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
  };
  const openMedia = card => {
    const source = $('.work-media video, .work-media img', card);
    if (!source) return;
    const fullMedia = source.cloneNode(true);
    fullMedia.removeAttribute('loading');
    fullMedia.removeAttribute('muted');
    if (fullMedia.tagName === 'VIDEO') { fullMedia.controls = true; fullMedia.autoplay = false; fullMedia.currentTime = 0; bindVideo(fullMedia); }
    mediaModalContent.replaceChildren(fullMedia);
    mediaModalCaption.textContent = `${$('h3', card).textContent} / ${$('.work-type', card).textContent}`;
    mediaModal.classList.add('open');
    mediaModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
  };
  $$('.media-open').forEach(button => button.addEventListener('click', () => openMedia(button.closest('.work-card'))));
  $$('.work-media img').forEach(image => image.addEventListener('click', () => openMedia(image.closest('.work-card'))));
  $('#mediaModalClose').addEventListener('click', closeMedia);
  $$('[data-close-media]').forEach(element => element.addEventListener('click', closeMedia));
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && mediaModal.classList.contains('open')) closeMedia(); });

  const customCursor = $('#customCursor');
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
  if (customCursor && finePointer.matches) {
    document.body.classList.add('has-custom-pointer');
    let clickTimer;
    const movePointer = event => {
      customCursor.style.left = `${event.clientX}px`;
      customCursor.style.top = `${event.clientY}px`;
      customCursor.classList.remove('is-outside');
    };
    window.addEventListener('pointermove', movePointer, { passive: true });
    document.addEventListener('pointerleave', () => customCursor.classList.add('is-outside'));
    document.addEventListener('pointerdown', event => {
      if (event.button !== 0 || !event.target.closest('a, button, .work-card, .work-media, .service, .contact')) return;
      customCursor.classList.add('is-clicking');
      clearTimeout(clickTimer);
      clickTimer = setTimeout(() => customCursor.classList.remove('is-clicking'), 650);
    });
  }
}());

