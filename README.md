# Work-Day-Swagonizer

## General Info


## Adding the Current Date
To add the current date to the top of the page, I used moment() to get the current date data. I linked the moment data to the currentDay id to get the date onto the page and I formatted it dddd, MMMM Do to show the date as day of the week, month, and the ordinal number of the date. 

![linking moment data to currentDay id to get date onto the page](./Develop/assets/images/currentdateprocess.png)



## Creating the Planner
My first step towards creating the planner was to create an array of all the hours to be used in the planner (9AM to 5PM)called workHours. After this was set I created a function to iterate from 0 to less than workHours.length and create new divs on each iteration. Also created on each iterations were: a p element to house the hour in the day, a text area that the user could edit, and a button for the user to save their inputs. 

![]()

As each new element was created I also added classes and an ID to style the elements according to the given CSS.

## Making the Planner Functional


### Saving Daily Tasks
To save the users text inputs, I had to first return the buttons created through the createPlanner function. I did this by grabbing all of the elements with the class of 'saveBtn' because each of my created buttons would have this class while still having a different id. I set this to var button so that when I set an on click event it would apply to all of my created save buttons. 

![]()



## How to Color-Code to Indicate Time