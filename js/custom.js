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
function alignElement(element,elementType){
    if(elementType === "left"){
        document.getElementById("text-left").classList.add("active");
        document.getElementById("formated-text").style.textAlign="left";
    }else if(elementType === "center"){
        document.getElementById("text-left").classList.remove("active");
        document.getElementById("text-center").classList.add("active");
        document.getElementById("formated-text").style.textAlign="center";
    }else if(elementType === "right"){
        document.getElementById("text-left").classList.remove("active");
        document.getElementById("text-center").classList.remove("active");
        document.getElementById("text-right").classList.add("active");
        document.getElementById("formated-text").style.textAlign="right";
    }
    
}
