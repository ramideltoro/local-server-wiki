import fs from 'node:fs';
const topics=JSON.parse(fs.readFileSync(new URL('../src/data/topics.json',import.meta.url)));
const ids=new Set();for(const t of topics){if(ids.has(t.slug))throw Error('Duplicate topic '+t.slug);ids.add(t.slug);for(const m of ['summary','technical','expert']){if(!t[m]||t[m].length<250)throw Error(`Incomplete ${m}: ${t.slug}`);if(!t[m].includes('## '))throw Error('Missing section headings');}if(new Set([t.summary,t.technical,t.expert]).size!==3)throw Error('Reading versions must be distinct');}
console.log(`Validated ${topics.length} topics and ${topics.length*3} reading versions`);
