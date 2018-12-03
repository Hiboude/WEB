window.onload = toc;

function toc(){ // main function 
  let a,tr;
  var table = document.createElement('table'); //table like html
  var tag = document.body.firstChild;
  console.log(tag);

  while(tag){
    if (tag.tagName === 'H1' || tag.tagName === 'H2') {
      tr = document.createElement('tr');
      a = document.createElement('a');

      if(tag.id === ""){
        tag.setAttribute("id",tag.innerHTML);
      }

      a.innerHTML = tag.innerHTML;
      a.setAttribute("href","#" + tag.id);
      eventListener(a,tag.tagName);

      tr.appendChild(a);
      table.appendChild(tr);
    }
    tag = tag.nextSibling;
  }
  document.body.insertBefore(table,document.body.firstChild); //put in html
}

function eventListener(node,tagName){
  var background;
  if (tagName === "H1") {
    background = "background-color:red;" //Etape 4
  }
  else {
    background = "background-color:green;" //Etape 4

  }
  node.addEventListener('mouseover',function(){
    document.getElementById(node.getAttribute("href").slice(1)).setAttribute("style",background);})
  node.addEventListener('mouseleave',function(){
    document.getElementById(node.getAttribute("href").slice(1)).removeAttribute("style",background);})
}