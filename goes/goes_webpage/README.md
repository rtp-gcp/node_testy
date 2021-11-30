# Install 

Steps to install

```
mkdir goes_webapp
cd goes_webapp
npm init -y
npm install express
npm install --save-dev nodemon
npm install @dendra-science/goes-pseudo-binary
npm i ejs
```

# First Steps - setup nodemon
Nodemon allows for the server to restart when a file is modified.


Modify the package.json so that the existing script is removed and replace with as shown

before
```

 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```


after
```

 "scripts": {
    "devStart": "nodemon server.js"
  },
```
Create a file named server.js. Don't worry aboutindex.js for now

## Auto rerun code changes
Rather than type `npm start` or `node server.js`, use nodemon to restart the 
server each time a file write occurs.  (It seems it monitors the file system below
the current directory.)

```
$ npm run devStart
```

# browserfy
This code uses browserfy.  The makefile will take the `public/js/script.js` and
converts it to `public/js/bundle.js`.  The `views/index.ejs` references 
the `bundle.js`


# CSS reference

w3.schools or whatever it is  called, is not as nice as this reference

https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-end

# a grid reference


https://github.com/kevin-powell/learn-grid-the-easy-way

# button reference
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button

# Aside: Screen reference

Start a screen session
```
$ screen
```

Create a Side by Side Split   

```
ctrl-a shift-\   
```


Create a Stacked Split

```
CTRL-a shift s
```

Other hotkeys
*`ctrl-a tab` Switch focus to next screen
*`ctrl-a c` Create a new screen
*`ctrl-d` Delete a screen

Screen interactive commands

Type `ctrl a :` to enter an interactive command.

Type `:resize 20%` to resize the current screen to be 30% of total available space.





