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
  tags: ['Происшествия', 'Законы', 'Интересное', 'Еда', 'Погода'],
};

dream.customType('article:description', (helper) => helper.chance.sentence({ words: config.descriptionLength }));
dream.customType('article:article', (helper) => helper.chance.sentence({ words: config.articleLength }));
dream.customType('article:title', (helper) => helper.chance.sentence({ words: config.titleLength }));
dream.customType('article:tag', (helper) => helper.oneOf(config.tags));
dream.customType('randomId', uuid.v4);

dream.schema('article', {
  title: 'article:title',
  description: 'article:description',
  article: 'article:article',
  tag: 'article:tag',
  id: 'randomId',
});

mkdirp('./public', (err) => {
  err || dream.useSchema('article')
    .generateRnd(config.amount)
    .output((error, result) => jsonfile.writeFile(config.path, result));
});
