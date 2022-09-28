var execButton = document.querySelector("div#executeButton")
execButton.addEventListener('click', 

function calculateTabuada(){
    var index = Number(document.querySelector("input#tabuadaIndex").value)
    
    if (index==0){
        window.alert('Utilize algum valor.')
        document.body.querySelector(`select#tabuadaShowcase`).innerHTML = ""
    }else{
    
    for (let i = 1; i <= 10; i++) {
        document.body.querySelector(`option#d${i}iv`).innerHTML = (`${index}  ×  ${i}  =  ${index*i}`)        
    }
    }
})



var salve = document.createElement("div")
var texto = document.createTextNode("salvim")
salve.appendChild(texto)