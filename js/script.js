function init(){
  var button = document.getElementById('entrybutton');

  function showMeText(){
    var textbox = document.getElementById('textentry');
    var alertMessage = "Curtis McEwen: " + textbox.value;
    alert(alertMessage);
    document.getElementById('textoutput').innerHTML = textbox.value;
  }

  button.addEventListener('click', showMeText);
  }
  
window.addEventListener('load', init);
