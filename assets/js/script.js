var body = document.body;

var timeBlocks = document.getElementsByClassName("container");

var currentDay = document.querySelector("#currentDay");
var currentDate = moment();
currentDay.textContent = currentDate.format("dddd, MMMM Do");

var body = document.body;

var timeContainer = document.querySelector("#container");

// having difficulty getting storage data back out, trying to use return to use that variable in the getItem spot
// var persistInput = getItem;

var workHours = [
  "9AM",
  "10AM",
  "11AM",
  "12PM",
  "1PM",
  "2PM",
  "3PM",
  "4PM",
  "5PM",
];

var createPlanner = function () {
  for (var i = 0; i < workHours.length; i++) {
    var hourRow = document.createElement("div");
    hourRow.classList = "row time-block";

    var editArea = document.createElement("textarea");
    editArea.classList = "text-area col-9";
    editArea.setAttribute("id", "textarea" + i);
    // pull stored data to populate planner rows-> data persists on refresh
    // put getItem here
    localStorage.getItem('textSave');
    console.log('textSave' + " get item spot")

    // refer to hour times as index of array when setting block colors, ex: if on certain indices # when moment is at certain time then color will be "something"

    // get current time, convert to an index and compare to index of workHours

    // 3 levels: less than, equal to, greater than (past present future)

    var hourNumber = document.createElement("p");
    hourNumber.classList = "hour col-2 description";
    hourNumber.textContent = workHours[i];
    console.log(workHours[i]);

    var saveButton = document.createElement("button");
    saveButton.classList = "saveBtn col-1";
    saveButton.setAttribute("id", "saveButton" + i);

    hourRow.append(hourNumber, editArea, saveButton);

    timeContainer.append(hourRow);
    console.log(hourRow);
  }
};

createPlanner();

function getButtonClass() {
  return document.getElementsByClassName("saveBtn");
}

var button = getButtonClass();
console.log(button);

$(button).click(function saveText(event) {
  // get id from button
  var buttonId = event.target.id;
  console.log(buttonId);
  // grab index from button ID
  var buttonIndex = buttonId.charAt(buttonId.length - 1);
  console.log(buttonIndex + "stupendous") ;

  // grab text area ID
  var textId = $(this).siblings(".text-area").val();
  console.log(textId + " this is text id");

  // grab correct text area
  // var textKey = textId + buttonIndex;
  // console.log(textKey + "burrito");
  // save text area value
var keySave = workHours[buttonIndex];

  window.localStorage.setItem(keySave, JSON.stringify(textId));
console.log(keySave + " call me textSave");
 var getItem = JSON.parse(localStorage.getItem('keySave'));
 console.log(getItem + " here is getItem");
 return getItem;
});

var currentDay = document.querySelector("#currentDay");
var currentDate = moment();
currentDay.textContent = currentDate.format("dddd, MMMM Do");
