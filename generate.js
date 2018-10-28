'use strict'

const emojme = require('emojme');
const fs = require('fs');
const exec = require('child_process').execSync;

try {
  let subdomain = process.argv[2];
  let token = process.argv[3];
  let options = {
    save: process.argv[4],
    output: true
  };

  return emojme.download(subdomain, token, options).then(results => {
    if (!results || !results[subdomain] || !results[subdomain].saveResults) {
      throw new Error(`unable to retrieve results for ${subdomain}`);
    }
    const savedEmoji = results[subdomain].saveResults;
    const emojiList = savedEmoji.map(emojiPath => emojiPath.split('/').slice(-1));
    const date = new Date().toISOString().slice(0,10);
    fs.writeFileSync(date, emojiList.toString().split(',').join('\n'));
    return savedEmoji[0].split('/').slice(0,-1).join('/');
  }).then(srcPath => {
    return exec(`mv ${srcPath.replace(/(\s+|\(|\))/g, "\\$1")}/* emoji/`);;
  });
} catch(err) {
  console.log(err);
  throw new Error('Usage: node generate.js USER SUBDOMAIN TOKEN');
}
