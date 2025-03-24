BACKROADS TOUR COMPANY

* Color Shades
    - Shade Generator (URL: https://www.shadegenerator.com/)
    - Color Shade Generator (URL: https://mdigi.tools/color-shades/)

    - Color Shade in Bootstrap (URL: https://getbootstrap.com/docs/5.0/customize/color/)
    - Color Shade in TailwindCSS (URL: https://tailwindcss.com/docs/colors)

*  Logo
    - Design logo in figma (URL: https://www.figma.com/)

* Favicon
    - Favicon.io (URL: https://favicon.io/)

* VSCode Extensions
    - Autoprefixer
        > CTRL + SHIFT + P -> "> Autoprefixer: Run"

* Deploy to Netlify (URL: https://www.netlify.com/)
    - GitHub
        + Create new repository
            > Repository name: temp-backroads
            > Public
            Click "Create repository"
        + Repository
            $ rm -rf .git
            $ git init
            $ git add .
            $ git commit -m "first commit"
        + Push an existing repository
            > SSH
            $ git remote add origin https://github.com/{{USERNAME}}/{{REPO_NAME}}.git
            $ git branch -M main
            $ git push -u origin main
            $ git remote -v
        + Clone repository
            $ git clone {{SSL/HTTPS_URL}}
            $ git remove -v
    - Netlify
        > Team overview -> Add new site | Import an existing project -> Connect to Git provider | GitHub -> Pick a repository from GitHub | Search repos... "temp-backroads"
            Site setting for {{USERNAME_GITHUB}}/{{REPO_NAME}}
            > Owner: {{USERNAME_GITHUB}}'s team
            > Branch to deploy: main
            Click "Deploy site"
        > Select {{PROJECT}} -> Site sittings -> Site information | Change site name
            Change site name
            > Site name: backroads-tours
            Click 'Save'