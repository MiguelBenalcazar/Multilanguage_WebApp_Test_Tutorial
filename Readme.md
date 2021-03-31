This code helps us to create a basic multi-language web app 

It runs under nodejs, if you do not have installed nodejs and npm js I invited you to install them.

Windows:
- You can download the required file from teh following link
    https://nodejs.org/en/download/
- If you need a guidance to install the previous requirement please refers to the following link.
    https://phoenixnap.com/kb/install-node-js-npm-on-windows

Linux:
- To install  nodejs in linux please follow these steps:
    1.- Open your terminal or press Ctrl + Alt + T.
    2.- To install node.js use the following command:
    
        sudo apt install nodejs
        
    3.- Once installed, verify it by checking the installed version using the following command:
    
        node -v 

    Note: It is recommended to install Node Package Manager(NPM) with Node.js. NPM is an open source library of Node.js packages.
    To install NPM, use the following commands:
    
    sudo apt install npm
    
    
    --> To verified the installed version
    
    npm -v    

If you face any issue installing the packages on linux please execute first the following commands in the terminal

    sudo apt-get update
    sudo apt-get upgrade

If face any inconvenience you can follow the steps from the following web page

Run the server:
   Open Terminal Ctrl + T
   execute node index.js --> You can also install nodemon to execute the server
   
   Open your browser 
   http://localhost::8081/en or http://localhost::8081/es


Enjoy it.!!!!
If you face any inconvinient executing this project or need a tutorial please refer to the following link 
- https://phrase.com/blog/posts/nodejs-tutorial-on-creating-multilingual-web-app/

do not forget to create language folder and inside of it the languages your system is going to switch, in this case two files were created
en.json -- for english version
es.json -- for spanish version

Language folder must be created in the root as well as the index.html





