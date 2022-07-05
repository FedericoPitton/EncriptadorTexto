var boton_encriptar = document.querySelector('.boton_encriptar');
var boton_desencriptar = document.querySelector('.boton_desencriptar');
var boton_copiar = document.querySelector('.boton_copiar');

boton_encriptar.addEventListener('click', function(event) {
    var texto_encriptar = document.getElementById("entrada_texto").value.length;
    if (texto_encriptar==0) {
        document.getElementById("ocultar_encriptado").style.display="none";
        document.getElementById("ocultar_vacio").style.display="block";

    } else {
        document.getElementById("ocultar_encriptado").style.display="block";
        document.getElementById("ocultar_vacio").style.display="none";
        var salida_texto = document.getElementById("entrada_texto").value;
        document.getElementById("salida_texto").value=salida_texto;}
        
});

