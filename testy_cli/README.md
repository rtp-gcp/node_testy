# This is a commandline variant

Run like so:

```
$ node decoder_readline.js
and then paste the buffer
```


## Using this as a guide for readline

* https://www.codecademy.com/articles/getting-user-input-in-node-js
* https://sebhastian.com/javascript-readline/


## Using this as a guide for command line args

* https://stackoverflow.com/questions/19718669/how-to-take-in-text-input-from-a-keyboard-and-store-it-into-a-variable 


## some guy showed me how to use this online IDE

* https://codesandbox.io/s/cranky-brown-l80jo?file=/src/index.js


## some other js urls

* https://codeburst.io/the-only-nodejs-introduction-youll-ever-need-d969a47ef219
* https://nodejs.dev/learn/understanding-javascript-promises
* https://nodejs.org/api/readline.html#rlquestionquery-options-callback_1

## other

list packages in current directory?

```
npm list
```

## notes on how to install a package?
https://docs.npmjs.com/downloading-and-installing-packages-locally#installing-a-private-package

## GOES buffer

```
CKDS@[AKCBEO@N~@@@CQRBKEF@CAKCCET@N~@@@CQRB_DH@JAYCCEZ@N}@@@CQRB`DD@BAYCDE`@N}@@@CQRB[DK@KAICCEB@N}@@@CQRBTEF@NBOCCEE@N}@@@CQRBVCN@KBKCEEL@N~@@@CQRBFED@NAZCCEI@N}@@@CQRBFBN@IANCDEB@N~@@@CQRBTCR@KASCFED@N~@@@CQRCADL@MBMCDET@N~@@@CQRB}DW@]AICDE~@N~@@@CQRBG
```

### decode result

```
480.4,412.3,4803,33.5,958,0,520.2,70.9,0.003,4803,443.6,958,0,520.2,198.8,-10,5699,444.2,957,0,520.2,205.2,0.02,5699,3.52,957,0,520.2,173.2,-410.7,4675,441.8,957,0,520.2,128.5,0.014,96.3,442.1,957,0,520.2,141.1,-0.011,70.7,44.28,958,0,520.2,38.9,0.14,5763,442.5,957,0,520.2,38.6,-0.009
```

## reorder decode result

```
platform ID C6401F68
Date 2021-11-17
Time 20:31:20

Entry  Note
 0               480.4,
 1               412.3,
 2               4803,
 3               33.5,
 4               958,0,
 5               520.2,
 6               70.9,
 7               0.003,
 8               4803,
 9               443.6,
10               958,
11      Zero     0,
12               520.2,
13               198.8,
14               -10,5699,
15               444.2,
16               957,0,
17               520.2,
18               205.2,
19               0.02,
20               5699,
21               3.52,
22               957,
23       Zero    0,
24               520.2,
25               173.2,
26               -410.7,
27               4675,
28               441.
29               8,
20               957,
30       Zero    0,
31               520.2,
32               128.
33               5,
34               0.014,
35               96.3,
36               442.1,
37               957,
38       Zero    0,
39               520.2,
40               141.1,
41               -0.011,
42               70.7,
43               44.28,
44               958,
45       Zero    0,
46               520.2,
47               38.9,
48               0.14,
49               5763,
50               442.5,
51               957,
52       Zero    0,
53               520.2,
54               38.6,
55               -0.009
```
