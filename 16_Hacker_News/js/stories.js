"use strict";

// This is the global list of the stories, an instance of StoryList
let storyList;

/** Get and show stories when site first loads. */

async function getAndShowStoriesOnStart() {
  storyList = await StoryList.getStories();
  $storiesLoadingMsg.remove();

  putStoriesOnPage();
}

/**
 * A render method to render HTML for an individual Story instance
 * - story: an instance of Story
 *
 * Returns the markup for the story.
 */

function generateStoryMarkup(story) {
    let favoriteClass = '';
    //console.debug("generateStoryMarkup_", story);
    if(currentUser){
        if(currentUser.favorites.find(e => e.storyId == story.storyId)){
            console.debug('favorite story added to DOM');
            favoriteClass='favorite';
        }
    }
    

    const hostName = story.getHostName();
    return $(`
        <li id="${story.storyId}">
        <p class='story-star ${favoriteClass}'>&#x2605;</p>
        <a href="${story.url}" target="a_blank" class="story-link">
          ${story.title}
        </a>
        <small class="story-hostname">(${hostName})</small>
        <small class="story-author">by ${story.author}</small>
        <small class="story-user">posted by ${story.username}</small>
      </li>
    `);
    
    
}

/** Gets list of stories from server, generates their HTML, and puts on page. */

function putStoriesOnPage() {
  console.debug("putStoriesOnPage");

  $allStoriesList.empty();

  // loop through all of our stories and generate HTML for them
  for (let story of storyList.stories) {
    const $story = generateStoryMarkup(story);
    $allStoriesList.append($story);
  }
  console.debug('allStoriesList_');
  console.debug($allStoriesList);
  $star = $('.story-star');
  $allStoriesList.show();
  
}

function favoriteStoryClick(e){
    console.debug('favoriteStoryClick');
    console.debug(e);
    //get the id
    console.debug(e.target.parentElement.id);
    
    const storyID = e.target.parentElement.id;
    try{
        if(e.target.classList.contains('favorite')){
            removeFavorite(currentUser.loginToken, currentUser.username, storyID);
        }
        else{
            addFavorite(currentUser.loginToken, currentUser.username, storyID);
        }
        //currentUser.favorites = getFavorites(currentUser.loginToke, currentUser.username);
        //turn star yellow
        e.target.classList.toggle('favorite');
    }
    catch{
        console.error("error handling favorite");
    }
    
}
$allStoriesList.on('click', '.story-star', favoriteStoryClick)

async function submitStory(e){
    e.preventDefault();
    console.debug('enter submitStory(e)');
    console.log('submit form_');
    
    const title = $('#add-title').val();
    const url = $('#add-url').val();
    const author = $('#add-author').val();
    const token = currentUser.loginToken;
    
    const response = await axios({
        url:`${BASE_URL}/stories`,
        method: 'POST',
        data: {
            token: token,
            story:{
                author: author,
                title: title,
                url: url,
            }
        }
    });
    
    
    
    $submitForm.hide();
    putStoriesOnPage();
    
    return response;
}

$submitForm.on('submit',submitStory);