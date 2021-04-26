// Todo -- Take the data that is typed in Documner Textarea and store it inside some variable
// Create a function that get the user input that he pressed

let userText = "";

window.onload = function(){
    document.getElementById("unformatted-text").addEventListener("keydown",getUserText);
    // document.getElementsByClassName("btn").addEventListener("click",styleEditor);
}
function getUserText(){
    userText = document.getElementById("unformatted-text").value;
    document.getElementById("formated-text").value = userText;
    return userText;
}
function textBold(elem){
    elem.classList.toggle("active");
    document.getElementById("formated-text").classList.toggle("bold");
}
function textItalic(element){
    element.classList.toggle("active");
    document.getElementById("formated-text").classList.toggle("italic");
}
function underLineElement(element){
    element.classList.add("active");
    document.getElementById("formated-text").classList.toggle("underline-element");
}
function alignLeftElement(element){
    element.classList.add("active");
    document.getElementById("formated-text").classList.toggle("align-left");
}
function alignCenterElement(element){
    element.classList.add("active");
    document.getElementById("formated-text").classList.toggle("align-center");
}
function alignRightElement(element){
    element.classList.add("active");
    document.getElementById("formated-text").classList.toggle("align-right");
}