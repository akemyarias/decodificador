const textArea = document.getElementById("input_mensagem");
const mensagem = document.getElementById("output");
let matrizCodigo = [['e', 'enter'] , ['i', 'imes'] , ['a', 'ai'] , ['o', 'ober'] , ['u', 'ufat' ]];


function cripitografar()
{
    const textDigitado = encriptar(textArea.value);
    mensagem.value = textDigitado;
    textArea.value = "";
}


function encriptar(stringEncriptada){
    let matrizCodigo = [['e', 'enter'] , ['i', 'imes'] , ['a', 'ai'] , ['o', 'ober'] , ['u', 'ufat' ]];
    stringEncriptada = stringEncriptada.toLowerCase();
    
    for(let i = 0; i < matrizCodigo.length; i++)
    {
        if(stringEncriptada.includes(matrizCodigo[i][0]))
        {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada
}

function descriptografar()
{
    const textreverso = desencriptar(textArea.value);
    mensagem.value = textreverso;
    textArea.value = "";
}


function desencriptar(stringDesencriptar){
    let matrizCodigo = [['e', 'enter'] , ['i', 'imes'] , ['a', 'ai'] , ['o', 'ober'] , ['u', 'ufat' ]];
    stringDesencriptar = stringDesencriptar.toLowerCase();
    
    for(let i = 0; i < matrizCodigo.length; i++)
    {
        if(stringDesencriptar.includes(matrizCodigo[i][1]))
        {
            stringDesencriptar = stringDesencriptar.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptar
}

function copiar()
{
    var texto = document.getElementById("output")
    texto.select();
    document.execCommand("copy");
    alert("Texto copiado com sucesso!");
}
