/// Below: Code will set current day, year, and month to the heading of the page landing.

const SaveBtn = $('.saveBtn')
var today = dayjs();
$('#currentDay').text(today.format('MMM D, YYYY'));

function timeLoop(context) {
  let currentTime = dayjs().hour()
  const todos = $(".todo").each(function(i,el){
    let elId = $(el).attr("id")
    if (currentTime < elId){
      // give past class
    }
    else if (currentTime == elId){
      // give current class
    }
    else {
      // give future class
    }
  });
  // let hour = $(context).parent().attr("id")
  //   if (currentTime === hour) {
  //     $(this).removeClass("past")
  //     $(this).removeClass("future")
  //     $(this).addClass("present")
  //   }
  console.log(currentTime)
  console.log(todos)
  // console.log(hour)
}

/// Below: Code will allow the document to fully load before executing, will allow the user to save individual text areas
$(document).ready(function () {
  let _this = this
  SaveBtn.on('click', function () {
    let write = $(this).siblings('.description').val();
    let hour = $(this).parent().attr("id");
    localStorage.setItem(hour, write)
    console.log(write)
  })

  $("#9 .description").val(localStorage.getItem("9")),
  $("#10 .description").val(localStorage.getItem("10")),
  $("#11 .description").val(localStorage.getItem("11")),
  $("#12 .description").val(localStorage.getItem("12")),
  $("#13 .description").val(localStorage.getItem("13")),
  $("#14 .description").val(localStorage.getItem("14")),
  $("#15 .description").val(localStorage.getItem("15")),
  $("#16 .description").val(localStorage.getItem("16")),
  $("#17 .description").val(localStorage.getItem("17")),

  timeLoop(_this)
});



// Above is the working save button modification


// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "x" id of the
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
