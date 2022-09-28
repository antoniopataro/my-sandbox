list = []

function joinList(){
    var num = document.querySelector("input#numberInput")
    var numToAdd = num.value
    var selectDisplay = document.querySelector("select#selectDisplay")
    var verifiedState = document.querySelector("div#verifiedState")

    if (numToAdd==''){
        verifiedState.innerHTML = "[ERRO] Você deve adicionar algum valor!"
        num.focus()
        return
    }else if (numToAdd>100 || numToAdd<0){
        verifiedState.innerHTML = "[ERRO] Você deve digitar um valor entre 0 e 100!"
        num.focus()
        num.innerHTML="null"
        return
    }else{
        verifiedState.innerHTML = ""

    }

    for (item in list){
        if (list[item]==numToAdd){
            verifiedState.innerHTML = "[ERRO] Você não pode adicionar o mesmo valor novamente!"
            return
        }
        else{
            verifiedState.innerHTML = ""
        }
    }

    list.push(numToAdd)

    var createOption = document.createElement("option")
    var createOptionText = document.createTextNode(`Valor ${numToAdd} adicionado.`)

    createOption.appendChild(createOptionText)
    selectDisplay.appendChild(createOption)

    Information.innerHTML=''
}


function endInformation(){

    Information.innerHTML=''

    var createDiv1 = document.createElement("div")
    var createDiv2 = document.createElement("div")
    var createDiv3 = document.createElement("div")
    var createDiv4 = document.createElement("div")
    var createDiv5 = document.createElement("div")


    

    let length = list.length
    let greater = list.sort()[list.length-1]
    let smallest = list.sort()[0]
    var sum = 0;
        for (i in list){
            list[i] = Number(list[i])
            sum += list[i]
        }
    let average = sum/length

    var createDiv1Text = document.createTextNode(`Ao todo, temos ${length} valores cadastrados.`)
    var createDiv2Text = document.createTextNode(`O maior valor informado foi ${greater}.`)
    var createDiv3Text = document.createTextNode(`O menor valor informado foi ${smallest}.`)
    var createDiv4Text = document.createTextNode(`Somado todos os valores, tem-se ${sum}.`)
    var createDiv5Text = document.createTextNode(`A média dos valores digitados é ${average}.`)

    createDiv1.appendChild(createDiv1Text)
    createDiv2.appendChild(createDiv2Text)
    createDiv3.appendChild(createDiv3Text)
    createDiv4.appendChild(createDiv4Text)
    createDiv5.appendChild(createDiv5Text)

    Information.appendChild(createDiv1)
    Information.appendChild(createDiv2)
    Information.appendChild(createDiv3)
    Information.appendChild(createDiv4)
    Information.appendChild(createDiv5)
}