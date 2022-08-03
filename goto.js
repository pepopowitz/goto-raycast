const { resolver } = require('./resolver.js');

const rawArgs = process.argv.slice(2)[0];
const query = rawArgs.replaceAll('%20', ' ');

const defaultUrl = `https://google.com/search?q=${rawArgs}`;
const url = resolver(query) || defaultUrl;

const { exec } = require('child_process');

exec(`open "${url}"`);
