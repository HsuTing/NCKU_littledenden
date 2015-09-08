# NCKU little den den
NCKU freshman camp

## Start

Install npm:
```
sudo apt-get install npm
```

Install node modules and bower components:
```
./func init
```
This will exacute `npm install -i` and `bower install -i` in dist folder.
If you get a warning about `/usr/bin/env: node:...`, you can try `sudo ln -s /usr/bin/nodejs /usr/bin/node`.

## Func

Use npm:
```
./func npm (argument)
```

Use bower:
```
./func bower (argument)
```

Use other function:
- Transform jsx to js - `./func jsx`
- Exacute browserify - `./func bro`
- minify javascript - `./func min`

Notice:

Please put jsx file in src folder, and jsx will transform file to dist folder. bro will browserify file in dist folder to js.
Final, min will minify file in js. If you need to add new file to browserify, you just need to do `vim func` and add your file name in `js array`.
On the other hand, if you need to add new file to minify, you also need to do `vim func` and add you file name in `minjs array`.
