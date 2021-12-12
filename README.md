# Yes Operator Website

# Technology

- Hugo Extended binary for PostCSS support, `hugo v0.90.1-48907889+extended linux/amd64 BuildDate=2021-12-10T10:56:41Z VendorInfo=gohugoio`
- Node + npm
- Tailwind CSS
- Netlify (Live at https://optimistic-mahavira-e63b9e.netlify.app/)

# Log

1. `hugo new site <name>`
1. `hugo new theme yesoperator`
1. In config.toml, add `theme = 'yesoperator'`
1. Followed this guide to integrate Tailwind and Hugo https://www.brycewray.com/posts/2021/11/making-tailwind-jit-work-hugo/
   1. `npm init -y` in project root, not theme root
   1. Copied scripts from the guide into package.json
   1. Modified `tw.css -> tw-input.css` and `index.css -> tw-output.css` for clarity
   1. Merged `partials/head.html` from https://dakotaleemartinez.com/tutorials/hugo-and-tailwind-css/#configuring-tailwindcss-with-postcss

# Dev environment setup

1. Clone this repo
1. `npm install`
1. `npm start` to run hugo dev server and Tailwind Jit file-watcher

# Production build

1. `npm run build`
1. Static files built to `public/` 

# Deploy

1. Push or Pull Request to main branch on GitHub. Netlify does the rest.
1. Check Deployment status at https://app.netlify.com/sites/optimistic-mahavira-e63b9e/deploys
1. Visit Netlify deployment at https://optimistic-mahavira-e63b9e.netlify.app/
