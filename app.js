var btnTranslate = document.querySelector("#btn-translate")
var txtInput = document.querySelector("#txt-input")
var outputDiv = document.querySelector("#output-div")

btnTranslate.addEventListener("click", clickHandler)

var URL = "https://api.funtranslations.com/translate/minion.json"


function getURL(text){
    let mainURL = URL + "?text=" + text
    return URL + "?text= " + text
}

function errorHandler(error){
    outputDiv.innerHTML = "Opps, seems like you reached your limit"
    outputDiv.getElementsByClassName.fontWeight = "bold"
}


function clickHandler(){
    let text = txtInput.value
    fetch(getURL(text))
    .then(resp => resp.json())
    .then(json => getTranslation((json.contents.translated)))
    .catch(errorHandler)
}


function getTranslation(input){
    outputDiv.innerHTML = input
}
