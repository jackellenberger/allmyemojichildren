'use strict'

const emojme = require('emojme');

try {
  let subdomain = process.argv[2];
  let token = process.argv[3];
  let options = {
    save: process.argv[4],
    output: true
  };

  emojme.download(subdomain, token, options).then(results => {
    debugger;
    results.forEach(subdomainResult => {
      debugger;
      subdomainResult.forEach(userResult => {
        debugger;
      });
    });
  });
} catch {
  throw new Error('Usage: node generate.js USER SUBDOMAIN TOKEN');
}
