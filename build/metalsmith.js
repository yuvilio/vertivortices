//basic html generation

var Metalsmith = require('metalsmith');
// var drafts = require('metalsmith-drafts');
var metadata = require('metalsmith-metadata');
var markdown = require('metalsmith-markdown');
var permalinks = require('metalsmith-permalinks');
var layouts = require('metalsmith-layouts');
var collections = require('metalsmith-collections');
// var serve = require('metalsmith-serve');
var watch = require('metalsmith-watch');
// var assets = require('metalsmith-assets');
var nunjucks = require('nunjucks');
var nunjucksDate = require('nunjucks-date');
var metalsmith = Metalsmith(__dirname);


//configure templating engine you'll use with defaults
//and filters
var nunjucksEnv = nunjucks
  .configure(
    './_layouts',
    {
    watch: false,
    autoescape: false, //prevent metalsmith-markdown results being escaped
    noCache: true
  });

  //nunjucks plugins
  var nunjucksDate = require('nunjucks-date');
  nunjucksDate.setDefaultFormat('MMMM Do, YYYY');
  nunjucksEnv.addFilter('date', nunjucksDate)
  nunjucksDate.setDefaultFormat('MMMM Do, YYYY');

//metalsmith options
var options = {

};

// Metadata to be passed to templates
var metadata_opts = {

};

// Page collections like all pages or all posts
var site_collections = {
};

// Run Metalsmith
metalsmith
  .use( metadata( metadata_opts ) )
  .source('../content')
  .clean(true)
  .use(collections(site_collections))
  .use(markdown())
  .use(permalinks({
      pattern: ':title'
    }))
  .use(layouts({
      engine: 'nunjucks',
      directory: '../_layouts'
  }))
  .destination('../dist')
  .build(function (err, files) {
    if (err) {
      console.log('Error!');
      console.log(err);
      throw err;
    }
  });
console.log("metalsmith generating site")
