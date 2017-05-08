function squadMember(nombre, apellido, edad, hobbies){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.hobbies = hobbies;
    this.photos = new Image();
    this.photos.src="photos/" + this.apellido + ".jpg";
  }

function Comentario(id_miembro, comentario, likes){
    this.id_miembro = id_miembro;
    this.comentario = comentario;
    this.likes = likes;
  }


function crearLista(){
  var miembros = [];
  var ta = new squadMember("Susana ", "Opazo", 25, ["Bailar", "leer", "Salir con amigos"])
  var martina = new squadMember("Martina ", "Covarrubias", 27, ["Ir al cine", "Comer", "Bailar"]);
  var perla = new squadMember("Fa ", "Diaz", 31, ['Cocinar', 'Estudiar', 'Salir con la pareja'] );
  var joselin = new squadMember("Joselin ", "Grez", 22, ["Conversar", "Escuchar musica"]);
  var pau = new squadMember("Paulina ", "Huañaco", 20, ["leer", "Fumar", "Comer"]);
  var ale = new squadMember("Alejandra ", "Morales", 27, ["andar en bicileta", "Comer", "Cocinar"]);
  var vale = new squadMember("Valentina ", "Rodriguez", 25, ["Comer", "Escuchar musica", "jugar videojuegos"]);
  var pauli = new squadMember("Paulina ", "Rojas", 35, ["Leer", "ver television", "Cuidar a sus hijos"]);
  var self = new squadMember("Valentina ", "Spuler", 21, ["Comer", "Investigar", "Salir con amigos"]);

  miembros.push(ta);
  miembros.push(martina);
  miembros.push(perla);
  miembros.push(joselin);
  miembros.push(pau);
  miembros.push(ale);
  miembros.push(vale);
  miembros.push(pauli);
  miembros.push(self);

/*
-crear elemento
-crear nodo de texto del elemento
-meter el nodo dentro del elemento
-meter el elemnto en el contenedor
*/

//Imprimir lista
  miembros.forEach(function(el, i){
    var contenedor = document.getElementById('contenedor');
    var item = document.createElement('div');
    item.id = 'm' + (i+1);
    //Nombre
    var pNombre = document.createElement('p');
    var bNombre = document.createElement('b');
    var tNombre = document.createTextNode("Nombre: ");
    var rNombre = document.createTextNode(el.nombre + el.apellido);
    bNombre.appendChild(tNombre);
    pNombre.appendChild(bNombre);
    pNombre.appendChild(rNombre);

    //Edad
    var pEdad = document.createElement('p');
    var bEdad = document.createElement('b');
    var tEdad = document.createTextNode("Edad: ");
    var rEdad = document.createTextNode(el.edad);
    bEdad.appendChild(tEdad);
    pEdad.appendChild(bEdad);
    pEdad.appendChild(rEdad);

    //Hobbies
    var bHobbies = document.createElement('b');
    var tHobbies = document.createTextNode("Hobbies: ");
    var ulist = document.createElement('ul');
    var liHobbie1 = document.createElement('li');
    var liHobbie2 = document.createElement('li');
    var liHobbie3 = document.createElement('li');
    var hobbie1 = document.createTextNode(el.hobbies[0]);
    var hobbie2 = document.createTextNode(el.hobbies[1]);
    var hobbie3 = document.createTextNode(el.hobbies[2]);
    bHobbies.appendChild(tHobbies);
    liHobbie1.appendChild(hobbie1);
    liHobbie2.appendChild(hobbie2);
    liHobbie3.appendChild(hobbie3);
    ulist.appendChild(liHobbie1);
    ulist.appendChild(liHobbie2);
    ulist.appendChild(liHobbie3);

    //div
    item.appendChild(pNombre);
    item.appendChild(pEdad);
    item.appendChild(bHobbies);
    item.appendChild(ulist);

    contenedor.appendChild(item);

    //Comentarios:
    var seccionComentarios = document.createElement('section');
    seccionComentarios.id = "seccion" + item.id;

    var cajacoment = document.createElement('textarea');
    cajacoment.rows = 4;
    cajacoment.cols = 50;
    cajacoment.id = "caja" + item.id;
    seccionComentarios.appendChild(cajacoment);

    var botonComentario = document.createElement('button');
    botonComentario.class = "boton-comentario";
    var botonLabel = document.createTextNode('Dejar comentario');
    botonComentario.appendChild(botonLabel);
    seccionComentarios.appendChild(botonComentario);
    botonComentario.addEventListener("click", function imprimirComent(){
      var comentarios = [];
      //tomo texto de textarea
      var contenido = document.getElementById(cajacoment.id).value;
      //limpio textarea;
      document.getElementById(cajacoment.id).value = "";
      //creo div contenedor de comentario;
      var comentario = document.createElement('div');
      comentario.id = "div-comentario" + item.id;
      //contenedor de comentarios;
      var cont = document.getElementById(seccionComentarios.id);
      //nodo de texto de comentario
      var comentContent = document.createTextNode(contenido);
      // contenedor del elemento
      var elementoContenedor = document.createElement('p');
      // contiene textarea
      elementoContenedor.appendChild(comentContent);

      //validacion que textarea no este vacio
	     if(contenido == null || contenido.length == 0){
		       alert('La caja de texto no puede estar vacía');
		       return false;
	     }

      //Boton de likes:
      var botonLikes = document.createElement('button');
      botonLikesLabel = document.createTextNode("Like");
      botonLikes.appendChild(botonLikesLabel);
      var clicks = 0;
      var likes = document.createElement('a');
      botonLikes.addEventListener("click", function contadorLikes(){
          clicks += 1;
          likes.innerHTML = clicks;
      });

      comentario.appendChild(elementoContenedor);
      comentario.appendChild(botonLikes);
      comentario.appendChild(likes);
      cont.appendChild(comentario);

      //agregar comentario al arreglo.
      var contenido = document.getElementById(cajacoment.id).value;
      var nuevoComent = new Comentario(item.id, contenido, likes);
      comentarios.push(nuevoComent);
    });

  contenedor.appendChild(seccionComentarios);
  });
  return contenedor;
};

crearLista();