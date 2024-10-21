const outPut = document.getElementById("show");


window.onload = function(){
    let savedValue = localStorage.getItem('calculatorDisplay');
    if(savedValue){
        outPut.value = savedValue
    }
}


function display(show){
    outPut.value += show;
}

function clearOutput(){
    outPut.value = "";
    console.log("pressed");
    
    localStorage.removeItem('calculatorDisplay');
}

function equal(){
    try{
        outPut.value = eval(outPut.value);
        localStorage.setItem('calculatorDisplay', outPut.value)
    }   catch(error){
        outPut.value ="⚠️ error"
    }
    
}
 
function del(){
    outPut.value = outPut.value.slice(0,-1);
}
 


 