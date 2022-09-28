function functionName(a,b,callback){
	var sum = a + b
	callback(sum)
}

function exibir(param){
	console.log(param)
}

functionName(1,2,exibir)