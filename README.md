# General Assembly Project 1:  Country Quiz!

This browser-based game presents the user with a stripped down map where they guess the country shown, and can 
get hints by adding more information to the map.

###Tech

At a minimum, this project will use the MapBox API to display custom map styles and provide maop interaction.  
Javascript will be used to manipulate the HTML with some CSS styling.

###Approach

The idea for this came from how easily editable MapBox maps are using the developer tools they provide on their site.

When presented with a full-page map on the screen showing the outline of a country and a general background, the game should address the following user stories.

**User Stories**

- A user can click on a button to start so the game can be played.
- A user can choose from a list of possible names of the country shown so a guess can be made.
- A user, if stumped, can press a button for a hint, which will add additional map information so a more informed guess can be made:
	- neighboring country names
	- capital city
	- lnguages spoken
	- other features
- A user can "give up" and be shown the answer to end the game.
- A user can get a score based on whether they guess with no hints, or one or two, so a relative measure of progress can be shown.
- A user can give her initials if she wants to see the high scores and her score in relation to them so she can see how she rates to other players.

**Design Tracking and Process Flow**
The process of building this project is tracked in [Trello](https://trello.com/b/ovDydmcl/wdi29-project-one-quountry-quiz).  
The programming flow of the Javascript is sketched out in [Evernote](https://www.evernote.com/shard/s125/sh/7e51f285-20e0-4088-a398-33d678b2ba67/26bbc292172ac24c596f53d54d7e086a).  
The design will conform to a screen structure outlined in this wireframe:
![wireframe](https://github.com/mnorelli/project-1/blob/bootstrap/images/wireframe2.png)

###Install

Runs in browser!  Play it now through [Github Pages](https://mnorelli.github.io/project-1). 
If forking this repo, _please_ register for and replace my code with your own access token from [MapBox](https://www.mapbox.com/studio/account/tokens/).

###Unsolved Problems

Bootstrap seems to be turning off MapBox navigation.  Map pan and zoom don't work after the start of the game.

New map elements are shown by swapping out a whole MapBox style with another containing one or two changes authored in MapBox Studio.  A better method would be to add JSON objects of just one elemet, like capital cities, directly into the map, smoothing the transition.

Finding an appropriate hosted data source for map details proved challenging.  To get the project to completion without AJAX calls, a JSON object containing all world coutries in with multiple attributes is included in the Javascript file.  Clearly, AJAX calls would be better. 
 
Can the opening screen be a map that is moving?

The developer struggled with CSS elements and the MapBox API. Transitoning the project into Bootstrap took time away from developing the basic game logic.  The MapBox API is vast, and chasing interesting elements and testing them also took time away from basic development.  These turned out to be less fruitful choices.

