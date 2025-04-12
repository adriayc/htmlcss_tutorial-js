GIT AND GITHUB WORKFLOW

* Git (URL: https://git-scm.com/)
    - Install and Setup
        $ git config --global user.name "john doe"
        $ git config --global user.email "johndoe@example.com"

    - Commands
        - GIT --VERSION - show version
        - GIT INIT - initialize as github repo
        - GIT ADD . - add files to staging area
        - GIT COMMIT -M "INITIAL COMMIT" - commit

        Example:
        $ git init
        $ git add .
        $ git commit -m "initial commit"

        $ git log

        Push github
        $ git remote add origin https://github.com/{{USERNANE}}/{{REPO_NAME}}.git
        $ git push -u origin master

        Clone
        $ git clone {{SSL/HTTPS_URL}}
        $ git remove -v

* GitHub (URL: https://github.com/)
    - Sign up and Sign in
    - Create "New repository"
        > Owner: {{OWNER}}
        > Repository name: temp-gitandgithub
        > Description: 
        > Public
        Click "Create repository"

* Benefits
    1. BACKUP
    2. VERSION CONTROL
    3. PUBLIC ACCESS