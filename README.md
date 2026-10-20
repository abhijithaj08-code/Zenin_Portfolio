# Abhijith K — Editorial Portfolio

A clean, responsive static portfolio for Abhijith K, focused on After Effects edits, Photoshop work, freelance services, qualifications, and contact links.

## Deploy with Vercel

This is a framework-free static site. Import `abhijithaj08-code/Zenin_Portfolio` into Vercel and keep the default settings:

- Framework preset: Other
- Build command: leave empty
- Output directory: `.`
- Install command: leave empty

`vercel.json` adds clean URLs and long-lived caching for local portfolio assets.

## Media

The profile, hero, cursor, Photoshop work, and the car, Memories, and BMW videos are delivered from Cloudinary with automatic quality optimization. The sunset and sea banner images are included as optimized local copies because their original uploads exceeded Cloudinary's image limit. The Breaking Bad video is referenced by the Cloudinary public ID `abhijith-breaking-bad`; upload the optimized file with that public ID to activate it.

Edit `content.js` to add future work. Keep media URLs public and use the existing media structure so the full-size preview and one-video-at-a-time playback continue to work.

## Run locally

The project has no build step. Open `index.html` directly, or use any static server. Vercel serves the project root as a static site.

