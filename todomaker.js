var list = document.querySelector('ol');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

var moja_lista = document.getElementsByTagName("LI");
var i;
for (i = 0; i < moja_lista.length; i++) {
  var krzyzyk = document.createElement("SPAN");
  var znak = document.createTextNode("\u00D7");
  krzyzyk.className = "zamknij";
  krzyzyk.appendChild(znak);
  moja_lista[i].appendChild(krzyzyk);
}

var zamknij = document.getElementsByClassName("zamknij");
var i;
for (i = 0; i < zamknij.length; i++) {
  zamknij[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

function dodaj_nowy() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("okno").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("numerowana").appendChild(li);
  }
  document.getElementById("okno").value = "";

  var krzyzyk = document.createElement("SPAN");
  var znak = document.createTextNode("\u00D7");
  krzyzyk.className = "zamknij";
  krzyzyk.appendChild(znak);
  li.appendChild(krzyzyk);

  for (i = 0; i < zamknij.length; i++) {
    zamknij[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}