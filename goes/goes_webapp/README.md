# This code use browserfy

```
mkdir foo
cd foo
npm init
npm install @dendra-science/goes-pseudo-binary


# The script.js code uses node

As a result, you need an ability to permit node require() command to be done in a browser which
does not run node.  Consquently, use the browserfy tool to convert the js code into node.js code.

That is a novice thing to say, but it has something to do with modules yadda yadda yadda.

In order to bundle the scripts, you need to install browserfy

```
$ sudo npm install -g browserify
```

Build the bundle.js from the script.js using the makefile.  It is basically a wrapper like so

```
$ browserify script.js -o bundle.js
```

Include the bundle.js in the HTML file.
