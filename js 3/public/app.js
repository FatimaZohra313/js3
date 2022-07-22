var screen  = document.getElementById("screen");
var isCalculated;
function btnfunction(val){
   if (isCalculated == true && val == "number"){
    clearall();
   }
   screen.value += val;
   isCalculated = false;
    

}
function clearall(){
    screen.value="";
}
function calculate(){
    isCalculated = true;
    var val = screen.value;
    var finalValue= eval(val);
    screen.value= finalValue; 
}
function btnclick(){
    var parent = document.getElementsByClassName('');
   
}
var ci = 1;
displaysildes(ci);
function sslide(num){
    displaysildes(ci += num);
}
function displaysildes(num){
    var i;
    var slides= document.getElementsByClassName("images");
    if (num > slides.length){
        ci = 1;
    }
    if (num < 1){
        ci = slides.length;
    }
    for (i = 0; i<slides.length;i++){
        slides[i].style.display = "none"

    }
    slides[ci - 1].style.display= "block";
}