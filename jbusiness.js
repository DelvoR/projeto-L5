/**
 * jbusiness.js usando javascript nativo
 */

/*
 * Alteração no menu de navegacao do site, utilizando js
 * uma função que ativa e outra que desativa o background
 * e onmouseover e onmouseout no HTML
 * */

function menuAtivo(menu){
	var menu_li = document.getElementById('lista_menu');
	var menu_a = menu_li.getElementsByTagName('a');
	for (i=0; i<menu_a.length; i++) {
		menu_a[i].style.backgroundColor = "";
		menu_a[i].style.color = "";
	}
	menu.style.backgroundColor = "#ffffff";//altera o fundo
	menu.style.color = "Navy"; //altera a cor
}



function desativaMenu(menu){
	var menu_li = document.getElementById('lista_menu');
	var menu_a = menu_li.getElementsByTagName('a');
	for (i=0; i<menu_a.length; i++) {
		menu_a[i].style.backgroundColor = "";
		menu_a[i].style.color = "";
	}
	menu.style.backgroundColor = "#000";//altera o fundo
	menu.style.color = "#fff"; //altera a cor
	
}

/*Controle do slideshow. Falta muito ainda para ser implementado*/
	var i = 0;
	var images = [];
	var time = 3000;
	
	//imagens jbusiness
	
	images[0] = '../resources/images/papel-de-parede-de-luar-6.jpg';
	images[1] = '../resources/images/papel-de-parede-de-luar-processos.jpg';
	
function slideShowJB(){
	
	document.slide.src = images[i];
	if(i<images.lenght-1){
		i++;
	}else{
		i=0;
	}
	setTimeout("slideShowJB()", time);
		
	
}