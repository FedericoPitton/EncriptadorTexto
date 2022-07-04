var boton_encriptar = document.querySelector('.boton_encriptar');
var boton_desencriptar = document.querySelector('.boton_desencriptar');
var boton_copiar = document.querySelector('.boton_copiar');

boton_encriptar.addEventListener('click', function(event) {
    var texto_encriptar = document.getElementById("entrada_texto").value;
    console.log(texto_encriptar);
});