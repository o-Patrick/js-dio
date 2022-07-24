function load(){
	alert("Página carregada")
}

function clicou(){
	document.getElementById("agradecimento").innerHTML="Obrigado por clicar";
	console.log(document.getElementById("agradecimento"));
	// alert("Obrigado por clicar");
}

function redirecionar(){
	window.open("https://github.com"); // target="_blank"
	// window.location.href="https://github.com"; // target="_self"
}

function trocar(elemento){
	// document.getElementById("mousemove").innerHTML="Obrigado por passar o mouse!";
	elemento.innerHTML="Obrigado por passar o mouse!";
}

function voltar(elemento){
	// document.getElementById("mousemove").innerHTML="Passe o mouse aqui";
	elemento.innerHTML="Passe o mouse aqui";
}

function change(elemento){
	console.log(elemento.value);
}

/*
function validaIdade(idade){
	var validar;
	if(idade >= 18){
		validar=true;
	} else{
		validar=false;
	}
	return validar;
}
var idade=prompt("Qual sua idade?");
console.log(validaIdade(idade));
*/

/*
function soma(n1, n2){
	return n1+n2;
}

function setReplace(frase, nome, novo_nome){
	return frase.replace(nome, novo_nome);
}

alert(soma(5, 10));
alert(setReplace("Vai Japão", "Japão", "Brasil"));
*/

/*
var d=new Date();
console.log(d.getDate());
console.log(d.getHours());
console.log(d.getMinutes());
*/

/*
var count;
for(count=0; count <= 5; count++){
	console.log(count);
}
*/

/*
var count=0;
while(count <= 5){
	console.log(count);
	count++;
}
*/

/*
var idade=prompt("Qual sua idade?");
if(idade >= 18){
	alert("maior de idade");
} else{
	alert("menor de idade");
};
*/

/*
var frutas=[{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}];
console.log(frutas)
console.log(frutas[0].nome + " " + frutas[0].cor);
console.log(frutas[1].nome + " " + frutas[1].cor);
*/

/*
var lista=["maça", "pera", "laranja"];
lista.push("uva");
lista.pop("pera"); // retira o último elemento de um vetor
console.log(lista.reverse());
console.log(lista.toString()[0]); // índice em toString() mostra a letra da string
console.log(lista.join(" - ")); // insere o valor entre os valores do vetor
*/

/*
var nome="Rafael Galleani";
var n1=29;
var n2=10;
var frase="Japão é o melhor time do mundo";
alert(nome + " tem " + idade +" anos.");
alert(idade + idade2);
console.log(nome);
console.log(n1 * n2);
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());
alert(frase.replace("Japão", "Brasil"));
*/