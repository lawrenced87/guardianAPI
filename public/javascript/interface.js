
storyFactory = new StoryFactory(Story);

function printStories(array) {
  array.forEach(function(story, index){
    printStory(index, story);
  });
}

function printStory(id, story) {
  prettyPrinter.createDiv(id);
  prettyPrinter.createTitle(id, story.title);
  prettyPrinter.createImg(id, story.img);
  prettyPrinter.createBody(id, story.body);
  prettyPrinter.createLink(id, story.url);
}

var sports = "https://spy-api.herokuapp.com/apis?api-key=b202a9029f8b54415a7cb0e2e775536c00920833&json=AllSport";


function getAllStories(url) {
  getStories(url).then(function(response) {
    var storiesURLs = storiesList(response);
     storiesURLs.forEach(function(url) {
       getStories(url).then(function(response){
         var story = storyFactory.parse(response);
         console.log(story);
         printStory(Math.random(), story);
  });
});
});
}

getAllStories(sports);
