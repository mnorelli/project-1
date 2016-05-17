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
	- major roads
	- other features
- A user can "give up" and be shown the answer to end the game.
- A user can get a score based on whether they guess with no hints, or one or two, so a relative measure of progress can be shown.
- A user can give her initals if she wants to see the high scores and her score in relation to them so she can see how she rates to other players.


The design will conform to a screen structure outlined in this wireframe:
![wireframe](https://github.com/mnorelli/project-1/blob/bootstrap/images/wireframe2.png)

###Install

Runs in browser!  Click https://mnorelli.github.io/project-1

###Unsolved Problems

Can a MapBox map be made to fly to a country boundary?  If not, should it be made to work by passing in the center point and zoom level for each country, perhaps using an array of values?

Will making that array be too time-consuming to do?

Can the Earth be made to spin from country to country?

Can the opening screen be a map that is moving?

