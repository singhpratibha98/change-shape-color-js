var color = [
    "purple",
    "green",
    "cyan",
    "black",
    "orange",
    "blue",
    "yellow",
    "red",
    "voilet",
    "lightgreen",
    "lemon",
  ];
  var index = 0;
  var isTriangle = false;
  
  var cShape = document.getElementById("change-shape");
  var cColor = document.getElementById("change-color");
  
  cShape.addEventListener("click", changeShape);
  cColor.addEventListener("click", changeColor);
  
  function changeColor() {
  //   console.log(index);
    if (index === color.length) {
      index = 0;
    }
    document.getElementById("circle").style.backgroundColor = color[index];
    index++;
  }
  
  function changeShape() {
    if (!isTriangle) {
      var i = document.getElementsByClassName("inner")[0];
      i.className = "triangle-bottom-left";
      isTriangle = true;
    }else{
      var i = document.getElementsByClassName("triangle-bottom-left")[0];
      i.className = "inner";
      isTriangle = false;
    }
  }
  
// const d1  =document.querySelector("#div-1");
// const d2 =document.querySelector("#div-2");
// console.log(d1);
// console.log(d2);


