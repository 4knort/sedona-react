const dream = require('dreamjs');
const jsonfile = require('jsonfile');
const uuid = require('node-uuid');
const mkdirp = require('mkdirp');

const config = {
  path: './public/articles.json',
  amount: 50,
  titleLength: 3,
  descriptionLength: 10,
  articleLength: 500,
};

dream.customType('article:description', (helper) => helper.chance.sentence({ words: config.descriptionLength }));
dream.customType('article:article', (helper) => helper.chance.sentence({ words: config.articleLength }));
dream.customType('article:title', (helper) => helper.chance.sentence({ words: config.titleLength }));

dream.schema('article', {
  title: 'article:title',
  description: 'article:description',
  article: 'article:article'
});

mkdirp('./public', (err) => {
  err || dream.useSchema('article')
    .generateRnd(config.amount)
    .output((error, result) => jsonfile.writeFile(config.path, result));
});
