function calcular(tipo, valor){
    if (tipo === 'acao'){
        if( valor === 'c'){
            document.getElementById('msg').value = ' '
        }if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.'){
            document.getElementById('msg').value += valor
        }if( valor === '='){
            var valorn = eval(document.getElementById('msg').value)
            document.getElementById('msg').value = valorn
        }
    }
    else if(tipo === 'valor'){
        document.getElementById('msg').value += valor
    }
}