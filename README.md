# Techolution Bootcamp: Angular 4
Techolution Bootcamp Labs For Angular 4
## Requirements
- An IDE that will work with typescript.  It is recommended to use Visual Studio Code: https://code.visualstudio.com/
- Nodejs.  You should use the LTS version: https://nodejs.org/en/
- angular-cli. Install: `npm install -g @angular/cli`
## Installation
1. Clone the repo: `git clone https://github.com/Techolution/TB-Angular4.git`
2. install dependencies `npm install`
3. Start: `npm start`
4. Open up: localhost:4200 in a browser to verify things are working.

## Labs
This git repo contains a serious of tags on the master branch.  At the beginning of each lab you will issue a command to checkout the lab as a branch: `git checkout -b l2 lab2`, for example.  You will then write your code for the lab in that branch. Before leaving that branch you must commit your code locally.  No code is ever pushed to the main github repo. 

If you are not very familiar with git this is how you can commit your code: 

```
git add .
git commit -m 'my special commit message'
```

If you find that you get stuck and need to see the solution you may checkout the solution but make sure that you commit all of your code in the local lab branch first. Solutions are all tagged with '-solution' so the solution for lab2 would be checked like `git checkout -b l2s lab2-solution`.

If you are not very familiar with git, type `git branch` when you're working in one of the labs and you will see a list of branches (one for each lab that you have created so far) with a little asterik by the lab you are currently working on. You will notice a branch called `master`.  This is the main line of code.  Do not make any code changes while you are on this master branch. This will keep everything clean.

If you end up returning to a lab that you have previously completed you do not need to rerun the original command.  Instead, just run `git checkout [labBranchName]`.  So, if you created a branch named `l2` for the lab2 tag you would just run `git checkout l2`.  Easy peasy. 

Each lab will give you the git command to run before starting the lab even though you could guess it using the conventions explained.
