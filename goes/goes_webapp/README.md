# This code use browserfy

[![alt text][1]][2]

[1]: https://github.com/rtp-gcp/node_testy/blob/main/pics/goes_ss.png
[2]: https://www.timeanddate.com/astronomy/moon/light.html?month=3&day=20&year=2040&hour=19&min=00&sec=0&n=64&ntxt=Chicago&earth=0



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


# CSS reference

w3.schools or whatever it is  called, is not as nice as this reference

https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-end


