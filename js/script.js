function init(){
  var button = document.getElementById('entrybutton');

  function showMeText(){
    var textBox = document.getElementById('text_input');
    var alertMessage = "Curtis McEwen: " + textBox.value;
    alert(alertMessage);
    document.getElementById('textoutput').innerHTML = textBox.value;
  }

  button.addEventListener('click', showMeText);
  }
  
window.addEventListener('load', init);
