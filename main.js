// number function
function displayContent(content){
    result.value += content
}

// clear 

function clrcal(){
    result.value = ""
}

// result

function calOut(){
    result.value = eval(result.value)
}

// backspace

function removeLast(){
    result.value = result.value.slice(0,-1)
}