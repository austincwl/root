"use strict";

/******************************************************************************
 * Handling navbar clicks and updating navbar
 */

/** Show main list of all stories when click site name */

function navAllStories(evt) {
  console.debug("navAllStories", evt);
  hidePageComponents();
  if(storyList.home){storyList.stories = storyList.home;}
  putStoriesOnPage();
}

$body.on("click", "#nav-all", navAllStories);

/** Show login/signup on click on "login" */

function navLoginClick(evt) {
  console.debug("navLoginClick", evt);
  hidePageComponents();
  $loginForm.show();
  $signupForm.show();
}

$navLogin.on("click", navLoginClick);

/** When a user first logins in, update the navbar to reflect that. */

function updateNavOnLogin() {
  console.debug("updateNavOnLogin");
  $(".main-nav-links").show();
  $navLogin.hide();
  $navLogOut.show();
  $loginForm.hide();
  $signupForm.hide();
  $navUserProfile.text(`${currentUser.username}`).show();
}

//submit
function navSubmitClick(){
    console.debug('navSubmitClick');
    hidePageComponents();
    $submitForm.show();
}
$navSubmit.on('click', navSubmitClick);

//favorites
function navFavoritesClick(){
    console.debug('navFavoritesClick');
    //hidePageComponents();
    storyList.home = storyList.stories;
    storyList.stories = currentUser.favorites;
    putStoriesOnPage();
}
$navFavorites.on('click',navFavoritesClick);

//my stories
function navMyStoriesClick(){
    console.debug('navMyStoriesClick');
}
$navMyStories.on('click',navMyStoriesClick);


;