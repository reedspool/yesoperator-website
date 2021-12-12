#+TITLE: Yes Operator Website

[![Netlify Status](https://api.netlify.com/api/v1/badges/b3dac31e-a357-4a01-866e-dff861f4fe17/deploy-status)](https://app.netlify.com/sites/frosty-khorana-da68bf/deploys)

# Technology

- Hugo (Extended binary for PostCSS support, `hugo v0.90.1-48907889+extended linux/amd64 BuildDate=2021-12-10T10:56:41Z VendorInfo=gohugoio`
- Node + npm
- Tailwind CSS
- Netlify

# Log

1. `hugo new site <name>`
2. `hugo new theme yesoperator`
3. In config.toml, add `theme = 'yesoperator'`
4. Followed this guide to integrate Tailwind and Hugo https://www.brycewray.com/posts/2021/11/making-tailwind-jit-work-hugo/
   1. `npm init -y` in project root, not theme root
   2. Copied scripts from the guide into package.json
   3. Modified `tw.css -> tw-input.css` and `index.css -> tw-output.css` for clarity
   4. Merged `partials/head.html` from https://dakotaleemartinez.com/tutorials/hugo-and-tailwind-css/#configuring-tailwindcss-with-postcss

# Dev environment setup

1. Clone this repo
2. `npm install`
3. `npm start` to run hugo dev server and Tailwind Jit file-watcher

# Production build

1. `npm run build`
2. Static files built to `public/` 
