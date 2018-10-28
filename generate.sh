#!/bin/bash
. ~/.nvm/nvm.sh
date=`date +%Y-%m-%d`

if [ "$#" -eq 3 ]; then
  if [ ! -d "emojme" ]; then
    git clone git@github.com:jackellenberger/emojme.git
  else
    cd emojme && git pull && cd -
  fi

  cd emojme \
    && nvm use 10 || nvm install 10 \
    && npm install \
    && node emojme.js download --user "$1" --subdomain $2 --token $3

  cp -r ./emojme/build/$2/"$1"/. ../emoji
  ls emoji > $date
  sed -i '/<!--start emoji-->/Q' README.md >> README.md
  echo "<!--start emoji-->" >> README.md

  while read emoji; do
    echo "![$emoji](./emoji/$emoji)" >> README.md
  done < $date
else
  echo 'Usage: generate.sh USER SUBDOMAIN TOKEN'
fi
