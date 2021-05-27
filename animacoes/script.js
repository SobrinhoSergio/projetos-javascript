function typeWriter(elemento) {
    
    const textoArray = elemento.innerHTML.split('');
    
    elemento.innerHTML = '';
    
    textoArray.forEach((letra, i) => {
        
        setTimeout(() => elemento.innerHTML += letra, 90 * i);
    
    });
}


const titulo1 = document.querySelector('#maquina');

typeWriter(titulo1);