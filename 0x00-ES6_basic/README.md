# 0x00-ES6_basic
![arrow meme](https://s3.amazonaws.com/alx-intranet.hbtn.io/uploads/medias/2019/12/08806026ef621f900121.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUSBVO6H7D%2F20220404%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220404T235618Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=9ae55b6315b20d63a5d6abdc3599a0308296a6cf48e66e48990d87d465c4c91d)
[Software Linter](https://alx-intranet.hbtn.io/concepts/542)
## Resources
- [ECMAScript 6 - ECMAScript 2015](https://www.w3schools.com/js/js_es6.asp)
- [Statements and declarations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements)
- [Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [Default parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)
- [Rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
- [Javascript ES6 — Iterables and Iterators](https://towardsdatascience.com/javascript-es6-iterables-and-iterators-de18b54f4d4)
## General
- All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All your files should end with a new line
- A README.md file, at the root of the folder of the project, is mandatory
- Your code should use the js extension
- Your code will be tested using the Jest Testing Framework
- Your code will be analyzed using the linter ESLint along with specific rules that we’ll provide
- All of your functions must be exported
## Setup
### Install NodeJS 12.11.x
In home directory
```
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```
```
$ nodejs -v
v12.11.1
$ npm -v
6.11.3
```
### Install Jest, Babel, and ESLint
- Install Jest using: ```npm install --save-dev jest```
- Install Babel using: ```npm install --save-dev babel-jest @babel/core @babel/preset-env```
- Install ESLint using: ```npm install --save-dev eslint```
## Configuration files
- package.json
- babel.config.js
- .eslintrc.js
### Finally…
Don’t forget to run npm install from the terminal of your project folder to install all necessary project dependencies.
