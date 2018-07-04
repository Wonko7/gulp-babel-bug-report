#! /bin/sh

# ./node_modules/.bin/babel -s true src/ -d dist/; => won't go in src sub directories

for f in `find src -name \*.js`; do
  echo $f
  d=$(dirname $f | sed s/^src/dist-babel/);
  mkdir -p $d;
  ./node_modules/.bin/babel -s true $f -d $d;
done
