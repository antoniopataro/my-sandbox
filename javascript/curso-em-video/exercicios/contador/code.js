function execCounter(){
    /*DOM*/
    let display = document.querySelector("div#Result")
    let from = Number(document.querySelector("input#countFromInput").value)
    let to = Number(document.querySelector("input#countToInput").value)
    let jumper = Number(document.querySelector("input#jumperInput").value)

    /*display reset*/
    display.innerHTML = ""

    /* inputVerifier */

        if (from==0 || to==0 || jumper<=0){
            window.alert('[error] Insert values correctly.')
        }
        
        else{

            if (to<from){
                window.alert('[error] To value cannot be greater than From value.')
            }else{

            for (from; from<=to; from+=jumper){
                display.innerHTML += (`${from} 👉`)
            }

            }
        }
    display.innerHTML += "🚩"
}