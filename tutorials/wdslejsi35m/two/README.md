## Installation

```
npm init -y
npm i express
npm i  --save-dev nodemon
```

## First Steps
Modify the package.json so that the existing script is removed
and replace with as shown

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

Create a file named server.js.  Don't worry aboutindex.js for now

Run
```
$ npm run devStart
```

## Screen aside
```
screen
ctrl-a ctrl-\
ctrl-a tab
ctrl-a c
npm run devStart
```


# when using render()
When using render(), add a directory called views and place in the directory a file named `index.html`.  Later you rename this file to `index.ejs`.

## install ejs for render
You can use ejs or pug

```
$npm i ejs
```

