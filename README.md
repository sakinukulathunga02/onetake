# One Take — Website

One-page website for One Take video production, built with React + Vite.

## Run it

```bash
npm install      # first time only
npm run dev      # opens a local preview at http://localhost:5173
npm run build    # makes the final site in the dist/ folder
```

## Change the content

All text, contact details, images and portfolio items are in **`src/data/siteData.js`**.
Search that file for `TODO: replace` to find every placeholder.

- **Phone / email / WhatsApp / location:** edit `contact`. The WhatsApp number is digits only, with the country code (e.g. `94771234567`).
- **Social links:** edit `socials`.
- **Portfolio:** each item has a `title`, `client`, `category`, `image` and `videoUrl`. Paste a YouTube link into `videoUrl` and it plays in a popup. While it's empty, the popup says "Video coming soon".
- **Hero background video:** put an `.mp4` link in `hero.video`.
- **Your own images:** put them in the `public/` folder and use `'/my-photo.jpg'` as the image value.

## Contact form

Until you set it up, the form opens the visitor's email app with their message filled in.
To get messages straight to your inbox:

1. Create a free form at https://formspree.io.
2. Copy its form ID (the part after `/f/`).
3. Paste it into `contact.formspreeId` in `siteData.js`.

## Put it online (free)

- **Vercel:** push this folder to GitHub, then import it at https://vercel.com. It detects Vite on its own.
- **Netlify:** run `npm run build` and drag the `dist/` folder onto https://app.netlify.com/drop.
