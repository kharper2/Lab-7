function init(){
  function al(){
    var e = document.getElementById('entryinput');
    var t = document.getElementById('textoutput');
    t.innerHTML = e.value;
    alert('Kathryn Harper: ' + e.value);
  }
  var b = document.getElementById('entrybutton');
  b.addEventListener('click', al);
}
window.addEventListener('load', init);
