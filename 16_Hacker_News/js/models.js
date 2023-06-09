"use strict";

const BASE_URL_PRODUCTION = "https://hack-or-snooze-v3.herokuapp.com"; //production url
const BASE_URL_TEST = "https://private-anon-e5833de9d0-hackorsnoozev3.apiary-proxy.com/"; //debug proxy url
const BASE_URL_MOCK = "https://private-anon-e5833de9d0-hackorsnoozev3.apiary-mock.com"; //mock url

const BASE_URL = BASE_URL_TEST;

/******************************************************************************
 * Story: a single story in the system
 */

class Story {

  /** Make instance of Story from data object about story:
   *   - {title, author, url, username, storyId, createdAt}
   */

  constructor({ storyId, title, author, url, username, createdAt }) {
    this.storyId = storyId;
    this.title = title;
    this.author = author;
    this.url = url;
    this.username = username;
    this.createdAt = createdAt;
  }

  /** Parses hostname out of URL and returns it. */

  getHostName() {
    return new URL(this.url).hostname;
  }
}


/******************************************************************************
 * List of Story instances: used by UI to show story lists in DOM.
 */

class StoryList {
  constructor(stories) {
    this.stories = stories;
  }

  /** Generate a new StoryList. It:
   *
   *  - calls the API
   *  - builds an array of Story instances
   *  - makes a single StoryList instance out of that
   *  - returns the StoryList instance.
   */

  static async getStories() {
    //console.debug('enter getStories()');
    // Note presence of `static` keyword: this indicates that getStories is
    //  **not** an instance method. Rather, it is a method that is called on the
    //  class directly. Why doesn't it make sense for getStories to be an
    //  instance method?

    // query the /stories endpoint (no auth required)
    const response = await axios({
      url: `${BASE_URL}/stories`,
      method: "GET",
    });

    // turn plain old story objects from API into instances of Story class
    //story{author, createdAt, storyId, title, url, username}
    const stories = response.data.stories.map(story => new Story(story));
    //console.debug('stories_');
    //console.debug(stories);
    
    // build an instance of our own class using the new array of stories
    return new StoryList(stories);
  }

  /** Adds story data to API, makes a Story instance, adds it to story list.
   * - user - the current instance of User who will post the story
   * - obj of {title, author, url}
   *
   * Returns the new Story instance
   */
//use example: let newStory = await storyList.addStory(user,{title: "Test", author: "Me", url: "http://meow.com"});
  async addStory(user, newStory) {
    const response = await axios({
        url:`${BASE_URL}/stories`,
        method: 'POST',
        params:{token:user.loginToken,story:newStory}
    });
  }
}


/******************************************************************************
 * User: a user in the system (only used to represent the current user)
 */

class User {
  /** Make user instance from obj of user data and a token:
   *   - {username, name, createdAt, favorites[], ownStories[]}
   *   - token
   */

  constructor({
                username,
                name,
                createdAt,
                favorites = [],
                ownStories = []
              },
              token) {
    this.username = username;
    this.name = name;
    this.createdAt = createdAt;

    // instantiate Story instances for the user's favorites and ownStories
    this.favorites = favorites.map(s => new Story(s));
    this.ownStories = ownStories.map(s => new Story(s));

    // store the login token on the user so it's easy to find for API calls.
    this.loginToken = token;
  }

  /** Register new user in API, make User instance & return it.
   *
   * - username: a new username
   * - password: a new password
   * - name: the user's full name
   */

  static async signup(username, password, name) {
    const response = await axios({
      url: `${BASE_URL}/signup`,
      method: "POST",
      data: { user: { username, password, name } },
    });

    let { user } = response.data

    return new User(
      {
        username: user.username,
        name: user.name,
        createdAt: user.createdAt,
        favorites: user.favorites,
        ownStories: user.stories
      },
      response.data.token
    );
  }

  /** Login in user with API, make User instance & return it.

   * - username: an existing user's username
   * - password: an existing user's password
   */

  static async login(username, password) {
    const response = await axios({
      url: `${BASE_URL}/login`,
      method: "POST",
      data: { user: { username, password } },
    });

    let { user } = response.data;

    return new User(
      {
        username: user.username,
        name: user.name,
        createdAt: user.createdAt,
        favorites: user.favorites,
        ownStories: user.stories
      },
      response.data.token
    );
  }

  /** When we already have credentials (token & username) for a user,
   *   we can log them in automatically. This function does that.
   */

  static async loginViaStoredCredentials(token, username) {
    try {
      const response = await axios({
        url: `${BASE_URL}/users/${username}`,
        method: "GET",
        params: { token },
      });

      let { user } = response.data;

      return new User(
        {
          username: user.username,
          name: user.name,
          createdAt: user.createdAt,
          favorites: user.favorites,
          ownStories: user.stories
        },
        token
      );
    } catch (err) {
      //console.error("loginViaStoredCredentials failed", err);
      return null;
    }
  }
  
  static async getFavorites(token, username){
    try {
        const response = await axios({
          url: `${BASE_URL}/users/${username}`,
          method: "GET",
          params: { token },
        });
  
        let { user } = response.data;
  
        return user.favorites;
        
      } catch (err) {
        //console.error("loginViaStoredCredentials failed", err);
        return null;
      }
  }
  
    static async addFavorite(token, username, storyID){
        try{
            //console.debug('try addFavorite');
            //console.debug('token: '+token);
            const response = await axios({
                url: `${BASE_URL}/users/${username}/favorites/${storyID}`,
                method: "POST",
                params: { token },
                });
            //console.log(response);
            
            let { user } = response.data;
            const tempUser = new User(
                {
                username: user.username,
                name: user.name,
                createdAt: user.createdAt,
                favorites: user.favorites,
                ownStories: user.stories
                },
                token
            );
            //console.debug('tempUser_');
            //console.debug(tempUser);
            
            return tempUser;
        }
        catch(err){
            //console.error('error adding favorite',err);
            return 0;
        }
    }
  
    static async removeFavorite(token, username, storyID){
        try{
            //console.debug('try removeFavorite');
            //console.debug('token: '+token);
            const response = await axios({
                url: `${BASE_URL}/users/${username}/favorites/${storyID}`,
                method: "DELETE",
                params: { token },
                });
                
            let { user } = response.data;
            const tempUser = new User(
                {
                    username: user.username,
                    name: user.name,
                    createdAt: user.createdAt,
                    favorites: user.favorites,
                    ownStories: user.stories
                },
                token
                );
            return tempUser;   
        }
        catch{
            //console.error('error removing favorite');
            return 0;
        }
    }
}

async function deleteStory(token, username, storyID){
    //console.debug('deleteStory');
    //console.debug('token: '+token);
    const response = await axios({
        url: `${BASE_URL}/stories/${storyID}`,
        method: "DELETE",
        params: { token },
        });
    
    getAndShowStoriesOnStart();
    //console.log(response);
    return 1;   
}