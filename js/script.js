function maquinaEscrever(elemento){

	const textoArray= elemento.innerHTML.split('');
	elemento.innerHTML='';
	textoArray.forEach((letra, i)=>{
		setTimeout(function(){
			elemento.innerHTML +=letra;
		}, 150 * i)

	});

}
const titulo= document.querySelector(".texto");
maquinaEscrever(titulo);


 

 



