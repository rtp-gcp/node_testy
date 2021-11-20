# demo 001 notes

Run the code sample via 

```
$ node .
```

or 

```
$ node index.js
```

or open browser and use file://....somepath/index.html

Then use developers tools in chrome to see log.  In safari, use safari->prefs advanced tab, enable developer menu item.  In safari->develop select show javascript console log.

# Regarding the code.

This will load the javascript code as soon as the line is parsed.
```
<script src="./index.js"></script>

This will wait until the entire html is loaded and then the javascipt code is run.
```
```
<script src="./index.js"></script>
```


