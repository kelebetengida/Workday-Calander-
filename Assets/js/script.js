//Declare the "curentDate"
$(document).ready(function(){


//What is today's date in the following format: Jan 1st, 1999?
var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));


//Decalre the "currentHour" to compare the curent our to the block time so that the calander know what time it is.

// save text area to local storage

$('.saveBtn').on ("click", function(){
    var time= $(this).attr("id")
    var text=$(this).siblings("textarea").val()
    localStorage.setItem(time,text)
})
//pull from local storage

$("#8").siblings("textarea" ).val(localStorage.getItem("8")) 
$("#9").siblings("textarea" ).val(localStorage.getItem("9")) 
$("#10").siblings("textarea" ).val(localStorage.getItem("10")) 
$("#11").siblings("textarea" ).val(localStorage.getItem("11")) 
$("#12").siblings("textarea" ).val(localStorage.getItem("12")) 
$("#1").siblings("textarea" ).val(localStorage.getItem("1")) 
$("#2").siblings("textarea" ).val(localStorage.getItem("2")) 
$("#3").siblings("textarea" ).val(localStorage.getItem("3")) 
$("#4").siblings("textarea" ).val(localStorage.getItem("4")) 
$("#5").siblings("textarea" ).val(localStorage.getItem("5")) 
$("#6").siblings("textarea" ).val(localStorage.getItem("6")) 
$("#7").siblings("textarea" ).val(localStorage.getItem("7")) 
$("#8").siblings("textarea" ).val(localStorage.getItem("8")) 




})




