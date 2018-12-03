window.onload = toc;

function toc(){
  var table = document.createElement('table');
  var h1 = document.getElementsByTagName('h1');
  var h2 = document.getElementsByTagName('h2');
  var body = document.getElementsByTagName('body')

  for (var i = 0; i < body.length; i++) {
    var tr = document.createElement('tr');
    var a = document.createElement('a');


    if (h1[i].id == "") {
      var id = h1[i].innerHTML;
      h1[i].setAttribute("id",id);
      a.setAttribute("href","#" + id);
    }
    else {
      h1[i].setAttribute("id",h1[i].id);
      a.setAttribute("href","#" + h1[i].id);
    }

    a.innerHTML = h1[i].innerHTML;

    a.addEventListener("mouseover", function(){
      document.getElementById(this.getAttribute("href").slice(1)).setAttribute("style","background-color:red;");
    })

    a.addEventListener("mouseleave", function(){
      document.getElementById(this.getAttribute("href").slice(1)).setAttribute("style","");
    })


    tr.appendChild(a);
    table.appendChild(tr);

  }
  document.body.insertBefore(table,document.body.firstChild);
}