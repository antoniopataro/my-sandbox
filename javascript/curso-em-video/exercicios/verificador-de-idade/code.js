function result(){
	year = document.body.querySelector("input#year").value
	age = 2022 - year

	if(document.querySelector("input#gender-male").checked) {
		gender='MAN';
		document.querySelector("img#res-img").src='https://imagens.brasil.elpais.com/resizer/sdzoaMy4wqjKtOQzl9jh_9rHdkw=/1960x0/arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/WQGOZS5S7D3DCLWMVVJM7S5VAQ.jpg';

	}else if(document.querySelector("input#gender-female").checked) {
		gender='WOMAN';
		document.querySelector("img#res-img").src='https://midias.correiobraziliense.com.br/_midias/jpg/2021/03/05/675x450/1_cbpfot020320212188-6556336.jpg';
	}
	
	document.querySelector("div#result").innerHTML = `🥳 We've detected a ${age} years old ${gender}.`
}