function addProduct() {
  var serial = document.createElement("P");
  var button = document.createElement("button");
  var div = document.createElement("div");
  var node = document.createElement("P");
  var list = document.getElementById("list");
  var name = document.getElementById("name").value;
  var index = list.childNodes.length;
  button.setAttribute("onClick","removeName()")
  node.innerHTML = name;
  serial.innerHTML = index;
  serial.setAttribute("class","number");
  serial.setAttribute("id",index);
  if(checkName(name,list)){
    button.setAttribute("class","button");
    button.setAttribute("value",index);
    div.appendChild(serial);
    div.appendChild(node);
    div.appendChild(button);
    div.setAttribute("class","node");
    div.setAttribute("id",index);
    list.appendChild(div);
  }
}
  //check name
function checkName(name,list){
  if(name.trim().length > 0){
    if(name.trim().length > 20){
      alert("Do not exceed 20 characters");
      return false;
    }
    else
      if(checkMakingup(name,list))
      return true;
  }
  else{
    alert("input must not be empty");
    return false;
  }
  //check the same name
function checkMakingup(name,list){
  for(var i = 0 ; i < list.children.length ; i++)
    if(list.children[i].children[1].innerHTML == name){
      alert("Name already exists");
      return false;
    }
    return true;
}
}
//reMove
function removeName(x){
  x = x || window.event;
  x = x.target || x.srcElement;
  var items = document.getElementById(x.value);
  items.parentNode.removeChild(items);
  resetSerial();
}
//Re-create the order
function resetSerial(){
  var list = document.getElementById("list");
  for(var i = 0 ; i < list.children.length ; i++)
    list.children[i].children[0].innerHTML = i + 1;
}