# Work-Day-Swagonizer

## General Info


## Adding the Current Date
To add the current date to the top of the page, I used moment() to get the current date data. I linked the moment data to the currentDay id to get the date onto the page and I formatted it dddd, MMMM Do to show the date as day of the week, month, and the ordinal number of the date. 

![linking moment data to currentDay id to get date onto the page](./Develop/assets/images/currentdateprocess.png)



## Creating the Planner
My first step towards creating the planner was to create an array of all the hours to be used in the planner (9AM to 5PM)called workHours. After this was set I created a function to iterate from 0 to less than workHours.length and create new divs on each iteration. Also created on each iterations were: a p element to house the hour in the day, a text area that the user could edit, and a button for the user to save their inputs. 

![]()

As each new element was created I also added classes and an ID to style the elements according to the given CSS.

![]()


## Making the Planner Functional
To make the planner functional in displaying past, present, and future events I needed to 

### Saving Daily Tasks
To save the users text inputs, I had to first return the buttons created through the createPlanner function. I did this by grabbing all of the elements with the class of 'saveBtn' because each of my created buttons would have this class while still having a different id. I set this to var button so that when I set an on click event it would apply to all of my created save buttons. 

![]()

To ensure the user's inputs persisted, I created the function saveText to trigger when any of the save buttons were clicked. This was done by first setting up the function getButtonClass to return from the document all of the elements with the class of saveBtn. This data was set in a separate variable of button. 

![]()

To save the user inputs into local storage I got the id of the button pressed using event.target.id. After finding the button's id I found the button's index by getting the last character of the id using .charAt(buttonId.length - 1). I was able to do this because when the hour-row elements were created, the index was appended to the end as each was iterated.

![]()

After getting the button's index I grabbed the text area next to the clicked button using the jquery method of $(this).siblings.

![]()

With the button's index and the text area connected to the same button, I stored them to local storage by setting the key value to be the value of workHours at the button's index (this will set the key to one of the hour rows created for the user to edit) and then using JSON.stringify to turn the textId (text area content) into a string to be parsed later on. 

![]()

To allow the user's data to persist, my next step was to

## How to Color-Code to Indicate Time


## Links