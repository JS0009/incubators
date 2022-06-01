#!/bin/bash

rm -rf docs build 
react-scripts build 
mv build docs 
sed 's/.\/static/\/incubators\/static/g ' -i docs/index.html 
git add . 
git commit -am deploy 
git push origin react
