// "use strict";

var i:int = 180; //3分固定
function count():void {
  if(i <= 0){
      document.getElementById("output").innerHTML = "完成!";
    }else{
        document.getElementById("output").innerHTML = i + "s";
      }
        i -= 1;
}
window.onload = function(): void{
  setInterval("count()", 1000);
};
