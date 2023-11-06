// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
const SaveBtn = $('.saveBtn')
var today = dayjs();
$('#currentDay').text(today.format('MMM D, YYYY'));
/// Above is the current date formatted for the project


$(document).ready (function () {

  SaveBtn.on('click', function(){
    let write = $(this).siblings('.description').val();
    let hour = $(this).parent().attr("id");
    localStorage.setItem(hour, write)
    console.log(write)
   })
  },


  
// CURRENT PROJECT BELOW - FIGURE OUT TIME LOOP TO ADDRESS COLORS
  function timeLoop (){
    currentTime = dayjs().hour()
    if (currentTime === ){

    }
  },

/// Can use Parse Integer, parseInt() to allow an integer from a string or ID (so i can make a number)
/// need to figure out how to seperate all of the IDS
 
  

  $("#hour-9 .description").val(localStorage.getItem("hour-9")),
  $("#hour-10 .description").val(localStorage.getItem("hour-10")),
  $("#hour-11 .description").val(localStorage.getItem("hour-11")),
  $("#hour-12 .description").val(localStorage.getItem("hour-12")),
  $("#hour-13 .description").val(localStorage.getItem("hour-13")),
  $("#hour-14 .description").val(localStorage.getItem("hour-14")),
  $("#hour-15 .description").val(localStorage.getItem("hour-15")),
  $("#hour-16 .description").val(localStorage.getItem("hour-16")),
  $("#hour-17 .description").val(localStorage.getItem("hour-17")),

  ); 

timeLoop()

// Above is the working save button modification


    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //





    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.


  /// Potentially use toggleClass in conjuction with day JS to change colors on the fly for each block?
  /// Use local storage to save on click event - Can I use the ID of each hour to pull on page load?
  /// 
