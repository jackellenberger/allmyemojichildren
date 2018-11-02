#!/bin/bash

sed -i '/<!--start emoji-->/Q' README.md >> README.md
echo "<!--start emoji-->" >> README.md

while read emoji; do
  echo "![$emoji](./emoji/$emoji)" >> README.md
done <<< "$(ls emoji)"
