var datetime = null;
var date = null;

var update = function(){
  date = moment(new Date())
  datetime.html(date.format("dddd, h:m:ss a"));
}

$(document).ready (function(){
  // $('#time').text(moment().format("h:m:s a"));
  datetime = $('#time')
  update();
  setInterval(update, 1000);

  var alarm_time = ($input#set_alarm).val();

  event.preventDefault();
});
