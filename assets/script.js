/// Below: Code will set current day, year, and month to the heading of the page landing.

const SaveBtn = $('.saveBtn')
var today = dayjs();
$('#currentDay').text(today.format('MMM D, YYYY'));

// Below: Code will loop over itself, will use ID to compare to current house of day.JS and apply the correct class to the saved user info. 

function timeLoop(context) {
  let currentTime = dayjs().hour()
  const todos = $(".todo").each(function(i,el){
    let elId = $(el).attr("id")
    if (currentTime > elId){
      // give past class
      $(el).addClass("past")
    }
    else if (currentTime == elId){
      // give current class
      $(el).addClass("present")
    }
    else {
      // give future class
      $(el).addClass("future")
    }
  });

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

// Below: Grabs saved User input on the page load to its coresponding text-area

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
})