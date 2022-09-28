var date = new Date();
horas = date.getHours();

var intervalId = setInterval(function horario(){
    document.querySelector("div#timechanger").innerText+=` ${horas} horas.`
    clearInterval(intervalId)
  }, 0);

console.log(horas)

if (6<=horas && horas<12){
	/*manhã*/
	document.body.style.backgroundColor="rgb(247, 255, 140)"
    document.querySelector("img#mainimg").src="https://www.novotempo.com/wp-content/uploads/2020/04/Amanhecer01.jpg";
}

else if (12<=horas && horas<18){
	/*tarde*/
	document.body.style.backgroundColor="rgb(0, 133, 71)"
    document.querySelector("img#mainimg").src="https://cdn.pixabay.com/photo/2016/09/23/04/17/sunset-1688849_960_720.jpg";
}

else if (18<=horas && horas<24){
	/*noite*/
	document.body.style.backgroundColor="rgb(0, 71, 95"
    document.querySelector("img#mainimg").src="https://agenciabrasil.ebc.com.br/sites/default/files/atoms/image/926212-super%20lua_1.jpg";
}

else {
	/*madrugada*/
	document.body.style.backgroundColor="rgb(30, 26, 46)"
    document.querySelector("img#mainimg").src="https://oeco.org.br/wp-content/uploads/oeco-migration/images/stories/mai2014/madrugada-beija-flor.jpg";
}