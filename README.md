web-dev-class-prototypes
========================

> You should have a description of your prototype here…

##Description of Files
- **Gemfile** - holds the list of dependencies (things we need) for this project
- **config.ru** - configures our "rack" application for serving our web page
- **public** - the public files for our prototype

##Starting the Server
In order to see what you are working on, or preview things start your rack server from the root of your project, type in the terminal:

    rackup


##Dealing with Git

[This is a helpful page](https://help.github.com/articles/what-are-other-good-resources-for-using-git-or-github) for learning more about using git. Here are some basics

    git status -s
    
Use this to check the status of your files (which files are new, added, modified, etc.)

    git add .
    
Use this to add all the files in your repository TO your repository.

    git commit -m "TYPE AN INFORMATIVE MESSAGE!"
    
Use this to commit your code to your repository, make sure to write a good message!

    git push origin master
    
Use this to "push" your code up to Github.

    git pull origin master
    
Use this to "pull" the code down from Github (you would use this when you've merged in things that someone else has helped you with)