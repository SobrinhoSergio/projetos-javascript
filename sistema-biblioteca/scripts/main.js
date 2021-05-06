const form = document.getElementById('formulario');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    
    var titulo = document.getElementById('titulo').value;
	var descricao = document.getElementById('descricao').value;
    var autor = document.getElementById('autor').value;
    var genero = document.getElementById('genero').value;

    if(!titulo || !descricao || !autor){
		
		alert("Preencha todos os campos!");
		
        return false;
	
    } 

        var livro = {
            
            titulo: titulo,
            descricao: descricao,
            autor: autor,
            genero: genero
            
        };

        if(localStorage.getItem('biblioteca') === null){
            var livros = [];
            livros.push(livro);
            localStorage.setItem('biblioteca', JSON.stringify(livros));
        
        } 
        
        else {
            var livros = JSON.parse(localStorage.getItem('biblioteca'));
            livros.push(livro);
            localStorage.setItem('biblioteca', JSON.stringify(livros));
        }

        document.getElementById('formulario').reset();

        mostraBiblioteca();

        event.preventDefault();

}


function removeLivro(titulo){
	
    var biblioteca = JSON.parse(localStorage.getItem('biblioteca'));
    console.log(biblioteca);

	 for(var i = 0 ; i < biblioteca.length; i++){
		
        if(biblioteca[i].titulo == titulo){
			
            biblioteca.splice(i, 1);
		}
	}

	localStorage.setItem('biblioteca', JSON.stringify(biblioteca));

	mostraBiblioteca();
}

function mostraBiblioteca(){
	
    var livros = JSON.parse(localStorage.getItem('biblioteca'));
	
    var bibliotecaResultado = document.getElementById('resultados');

	bibliotecaResultado.innerHTML = '';

	for(var i = 0; i < livros.length; i++){
		
        var titulo = livros[i].titulo;
		var descricao = livros[i].descricao;
		var autor = livros[i].autor;
        var genero = livros[i].genero;
		 
        bibliotecaResultado.innerHTML += '<tr><td>'+ titulo + '</td>'+
		 							 	'<td>'+ descricao + '</td>' +
		 	 						 	'<td>'+ autor + '</td>' +
                                        '<td>'+ genero + '</td>' +
		 							 	'<td><button onclick="removeLivro(\''+ titulo +'\')" class="btn btn-danger">Remover</button></td>'+
		 							    '</tr>';
	}
}