/*
  ABHIJITH'S PORTFOLIO CONTENT
  Update this file when you add new work, qualifications, or social links.
*/
const CLOUDINARY = 'https://res.cloudinary.com/dpiozpaqo';
const cloudImage = id => `${CLOUDINARY}/image/upload/f_auto,q_auto/${id}`;
const cloudVideo = id => `${CLOUDINARY}/video/upload/q_auto/${id}.mp4`;

window.PORTFOLIO = {
  name: 'Abhijith K',
  location: 'Kasaragod, Kerala',
  initials: 'AK',
  profileImage: cloudImage('abhijith-profile'),
  heroImage: cloudImage('abhijith-hero'),
  bio: 'I’m Abhijith K. I completed my Diploma in Computer Engineering and I’m currently studying at GTEC Kasaragod. I work across After Effects and Photoshop, building edits and visual manipulations with a strong interest in cinematic storytelling.',
  email: 'abhijithaj08@gmail.com',
  contactCopy: 'For video edits, Photoshop work, or a creative freelance project, send me the brief and let’s make something worth seeing.',
  primaryContact: 'https://www.instagram.com/zenin.edit_?obrf=eHU2dmlkbjFuY2Q0',
  stats: [
    { value: '4', label: 'VIDEO EDITS' },
    { value: '2', label: 'PS PIECES' },
    { value: '✓', label: 'DIPLOMA COMPLETED' }
  ],
  services: [
    { number: '01', title: 'Creative Posters', text: 'Concept posters and image manipulations built from separate visual elements.', tags: 'COMPOSITE · POSTER · RETOUCH' },
    { number: '02', title: 'Instagram Reels', text: 'Short-form edits with pace, sound, transitions, and a clear visual hook.', tags: 'CUTS · RHYTHM · SOUND' },
    { number: '03', title: 'Video Editing', text: 'Turning footage into a focused sequence with a clear mood and rhythm.', tags: 'EDITING · STORY · DELIVERY' },
    { number: '04', title: 'Freelance Work', text: 'Available for editing and Photoshop projects through Fiverr and Instagram.', tags: 'BRIEF · REVISE · EXPORT' }
  ],
  afterEffects: [
    { number: '01', type: 'FEATURED EDIT / AFTER EFFECTS', title: 'Breaking Bad — Audio Edit', text: 'A series edit with the opening section selected from 00:26. Edited for a stronger audio-led flow and cinematic impact.', accent: 'sunset', media: cloudVideo('abhijith-breaking-bad'), start: 26 },
    { number: '02', type: 'CAR EDIT / AFTER EFFECTS', title: 'Zenin — Car Edit', text: 'A car edit focused on movement, atmosphere, and a sharp visual rhythm.', accent: 'cobalt', media: cloudVideo('abhijith-car-edit') },
    { number: '03', type: 'COLLEGE EDIT / AFTER EFFECTS', title: 'Memories Edit', text: 'A college memories edit built around personal moments, music, and the feeling of looking back.', accent: 'lime', media: cloudVideo('abhijith-memories-edit') },
    { number: '04', type: 'LEARNING EDIT / AFTER EFFECTS', title: 'BMW Edit', text: 'An early learning project from the editing process. Included last as a record of progress and practice.', accent: 'sunset', media: cloudVideo('abhijith-bmw-learning') }
  ],
  photoshop: [
    { number: '01', type: 'CONCEPT POSTER / PHOTOSHOP', title: 'Dark Fantasy Concept Poster', text: 'A concept poster combining characters, atmosphere, lighting, and a dramatic fantasy composition.', accent: 'sunset', media: cloudImage('abhijith-concept-poster') },
    { number: '02', type: 'IMAGE MANIPULATION / PHOTOSHOP', title: 'Moonlit House Manipulation', text: 'A Photoshop manipulation built around a night-time environment, colour treatment, and cinematic mood.', accent: 'cobalt', media: cloudImage('abhijith-ps-manipulation') }
  ],
  qualifications: [
    { period: 'COMPLETED', title: 'Diploma in Computer Engineering', detail: 'Completed Diploma in Computer Engineering.' },
    { period: 'CURRENTLY STUDYING', title: 'GTEC Kasaragod', detail: 'Currently studying at GTEC Kasaragod.' },
    { period: 'ONGOING PRACTICE', title: 'After Effects & Photoshop', detail: 'Building practical experience through personal edits, visual experiments, and freelance-ready work.' },
    { period: 'FREELANCE', title: 'Editing & Photoshop Projects', detail: 'Open to video editing and Photoshop manipulation briefs through Fiverr and social platforms.' }
  ],
  tools: ['After Effects', 'Photoshop', 'Premiere Pro', 'Motion graphics', 'Audio remix'],
  socials: [
    { label: 'FIVERR / FREELANCE', icon: 'fiverr', url: 'https://www.fiverr.com/s/d00wArY' },
    { label: 'INSTAGRAM / PHOTOSHOP', icon: 'instagram', url: 'https://www.instagram.com/_ajeditz__?xtok=dzdjcWl2cW9iaW93' },
    { label: 'INSTAGRAM / VIDEO EDITS', icon: 'instagram', url: 'https://www.instagram.com/zenin.edit_?obrf=eHU2dmlkbjFuY2Q0' }
  ]
};

