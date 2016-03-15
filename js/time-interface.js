var datetime = null;
var date = null;

var update = function(){
  date = moment(new Date())
  datetime.html(date.format("dddd, h:mm:ss a"));
}

$(document).ready (function(){
  $('#time').text(moment().format("h:m:s a"));
  // $('#time').text(moment().format("YYYY-MM-DDTHH:mm"));
  datetime = $('#time')
  update();
  setInterval(update, 1000);

$("form#time_form").submit(function(event){
  event.preventDefault();
  var alarm_time = $("input#set_alarm").val();

  $('#alarm_set_for').append(alarm_time);

  setInterval(function(){
    var current_time = moment().format("YYYY-MM-DDTHH:mm");
     if(alarm_time === current_time){
       $(".buzzer").toggle();
      //  var current_time = moment().format("YYYY-MM-DDTHH:mm");
     }else{
       $(".buzzer").hide();
     }
   }, 500);
});

});
