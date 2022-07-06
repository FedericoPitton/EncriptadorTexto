var boton_encriptar = document.querySelector('.boton_encriptar');
var boton_desencriptar = document.querySelector('.boton_desencriptar');
var boton_copiar = document.querySelector('.boton_copiar');
const texto_copiado = document.querySelector('.output_text');

/* Evento para boton encriptar y funcionalidades*/ 
boton_encriptar.addEventListener('click', function(event) {
    var texto_encriptar = document.getElementById("entrada_texto").value;
    if (validador_requisitos(texto_encriptar)) {      
        if (modificador_display(texto_encriptar.length)) {
            var salida_texto = encriptador(texto_encriptar);
            document.getElementById("salida_texto").value=salida_texto;
        }
    } 

});
/* Evento para boton desencriptar y funcionalidades*/ 
boton_desencriptar.addEventListener('click', function(event) { 
    var texto_encriptar = document.getElementById("entrada_texto").value;
    if (validador_requisitos(texto_encriptar)) {      
        if (modificador_display(texto_encriptar.length)) {
            var salida_texto = desencriptador(texto_encriptar);
            document.getElementById("salida_texto").value=salida_texto;
        }
    } 
});
/* Evento para boton copiar y funcionalidades*/ 
boton_copiar.addEventListener('click', function(event) {
    
    texto_copiado.select();
    texto_copiado.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(texto_copiado.value);
    texto_copiado.setSelectionRange(0,0);
    /*document.execCommand('copy');*/

});


/**
 * Funcion para validar requisitos
 * @param {*} texto texto a validar
 *  Los requisitos:
 * - Debe funcionar solo con letras minúsculas
 * - No deben ser utilizados letras con acentos ni caracteres especiales
 *  Se logra a traves de los codigos ASCII
 * @returns true si cumple los requisitos - false si no lo hace
 */
 function validador_requisitos(texto) {
    for (var i=0; i<texto.length; i++) {
        if  (!(texto.charCodeAt(i)>= 97 && texto.charCodeAt(i)<=122 || texto.charCodeAt(i)==32 || texto.charCodeAt(i)==10)) {
            alert("Debe ingresar solo letras minusculas, sin acentos ni caracteres especiales")
            return false;
        }
    }
    return true;
}

/**
 * Funcion para cambiar display de los div dentro del div (class="salida encriptador")
 * @param {*} texto_lenght recibe un largo de un texto para ver si esta vacio o no
 * @returns true si hay texto - false si no hay, cambiando displays correspondientes
 */ 
function modificador_display(texto_lenght) {
    if (texto_lenght==0) {
        document.getElementById("ocultar_encriptado").style.display="none";
        document.getElementById("ocultar_vacio").style.display="block";
        return false;
    } else {
        document.getElementById("ocultar_encriptado").style.display="block";
        document.getElementById("ocultar_vacio").style.display="none";
        return true;
    }    
}

/**
 * Funcion para encriptar texto
 * @param {*} texto Recibe el texto deseado a encriptar
 * La letra "e" es convertida para "enter"
 * La letra "i" es convertida para "imes"
 * La letra "a" es convertida para "ai"
 * La letra "o" es convertida para "ober"
 * La letra "u" es convertida para "ufat"
 * @returns texto1, es el parametro ya encriptado
 */
function encriptador(texto) {
    var texto_encriptado = "";
    for (var i = 0; i < texto.length; i++) {
        switch (texto[i]) {
            case 'a':
                texto_encriptado +='ai';
                break;
            case 'e':
                texto_encriptado +='enter';
                break;
            case 'i':
                texto_encriptado +='imes';
                break;
            case 'o':
                texto_encriptado +='ober';
                break;
            case 'u':
                texto_encriptado +='ufat';
                break;
            default:
                texto_encriptado += texto[i];
        }
    }    
    return texto_encriptado;
}

/*TODO: mejorar logica de desencriptado, no funcionan textos largos*/
/**
 * Funcion para desencriptar texto
 * @param {*} texto Recibe el texto deseado a desencriptar
 * revierte lo convertido en la funcion encriptador
 * @returns texto que ya estara desencriptado
 */
function desencriptador(texto) {
    for (var i = 0; i < 4; i++) {
    texto = texto.replace("ai","a");
    texto = texto.replace("enter","e");
    texto = texto.replace("imes","i");
    texto = texto.replace("ober","o");
    texto = texto.replace("ufat","u");
    }
    for (var i = 0; i < 4; i++) {
        texto = texto.replace("ai","a");
        texto = texto.replace("enter","e");
        texto = texto.replace("imes","i");
        texto = texto.replace("ober","o");
        texto = texto.replace("ufat","u");
    }
    for (var i = 0; i < 4; i++) {
        texto = texto.replace("ai","a");

        texto = texto.replace("enter","e");

        texto = texto.replace("imes","i");

        texto = texto.replace("ober","o");

        texto = texto.replace("ufat","u");
    }
    for (var i = 0; i < 4; i++) {
        texto = texto.replace("ai","a");

        texto = texto.replace("enter","e");

        texto = texto.replace("imes","i");

        texto = texto.replace("ober","o");
        
        texto = texto.replace("ufat","u");
    }
    for (var i = 0; i < 4; i++) {
        texto = texto.replace("ai","a");

        texto = texto.replace("enter","e");

        texto = texto.replace("imes","i");

        texto = texto.replace("ober","o");
        
        texto = texto.replace("ufat","u");
    } 
    return texto
    
}
