const textArea = document.querySelector(".encriptador__area__texto");
const encriptado = document.querySelector(".resultado__area");

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    encriptado.value = textoEncriptado
    textArea.value = "";
    encriptado.style.backgroundImage = "none"
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    encriptado.value = textoEncriptado
    encriptado.style.backgroundImage = "none"
    textArea.value = "";
}

function copiar(){
    const textoCopiado = document.getElementById("textoDesencriptado")
    textoCopiado.setSelectionRange(0, textoCopiado.value.length);
    navigator.clipboard.writeText(textoCopiado.value)
    textoCopiado.value = "";
        
}

function encriptar(stringEncriptada){ 
    let llaves = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i <llaves.length; i++){
        if(stringEncriptada.includes(llaves[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(llaves[i][0], llaves[i][1])

        }

    }
    return stringEncriptada

}

function desencriptar(stringDesencriptada){ 
    let llaves = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i <llaves.length; i++){
        if(stringDesencriptada.includes(llaves[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(llaves[i][1], llaves[i][0])

        }

    }
    return stringDesencriptada

}


