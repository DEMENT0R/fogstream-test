var key = "local_plus_one";
if (!localStorage.getItem(key)){
  localStorage.setItem(key, 0 + 0);
}
var value = localStorage.getItem(key);
//alert(value);

$( "#local_plus_one" ).click(function() {
  //value = parseInt(value) + 1;
  value = +value + 1;
  localStorage.setItem(key, value);
});

$( "#local_reset" ).click(function() {
  localStorage.setItem(key, 0);
});

setInterval(function() {
  value = localStorage.getItem(key);
  $("#local_result").text(value);
}, 100);