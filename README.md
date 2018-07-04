```
gulp build
gulp build-concat
./build.sh

node dist/index.js        => not using src/ in stacktrace
node dist-concat/index.js => not using src/ in stacktrace
node dist-babel/index.js  => correctly using src/ in stacktrace
```
