$('#Entrar').click ( function(){

	var usuario,contrasena;
	usuario=document.getElementById('user').value;
	contrasena=document.getElementById('clave').value;

	if (usuario == usuario && contrasena == "admin"){

		window.location = './admin.html';	
	}
	else if (usuario == "" && contrasena =="" || contrasena != 'admin'){

		alert("Revise Los Campos Anteriores");
	}

});

$('#Contactos').click (function(){
	window.location='./Contactos.html';
});

$('#Productos').click (function(){
	window.location='./Productos.html';
});

$('#Ayuda').click (function(){
	window.location='./Ayuda.html';
});

$('#Salir').click (function(){
	window.location='./index.html';
});