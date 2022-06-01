#!/bin/bash

rm -rf docs build 
npm run build 
mv build docs 
sed 's/.\/static/\/incubators\/static/g ' -i docs/index.html 
git add . 
git commit -am "Deploy `date --iso`" 
git push origin react
