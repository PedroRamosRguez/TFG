/*Sript para realizar el envío de la configuración del usuario al servidor mediante una petición ajax
En la petición, se envían cada uno de los valores que el usuario introdujo en la pantalla de configuración.*/

//fucion para obtener el csrtoken de django
getCookie = (name) => {
  var cookieValue = null;
  if (document.cookie && document.cookie != '') {
    var cookies = document.cookie.split(';');
	for (var i = 0; i < cookies.length; i++) {
	  var cookie = jQuery.trim(cookies[i]);
	// Does this cookie string begin with the name we want?
	  if (cookie.substring(0, name.length + 1) == (name + '=')) {
	    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
	    break;
	  }
	}
  }
 return cookieValue;	
}
//función Jquery que obtiene los diferentes datos que el usuario introdujo y realiza la petición ajax.
$("#formulario").submit(() =>{
	//Prevent default submit. Must for Ajax post.Beginner's pit.
	//e.preventDefault();
	//Prepare csrf token
	var csrftoken = getCookie('csrftoken');
	//console.log('le di al envio...')
	let alg = getAlgorithms();
	//console.log(alg);
	let fich = getFicheros();
	console.log(fich)
	//console.log(fich.length)	
	//let instancias = getInstancias();

    let formData2 = new FormData();
    formData2.append('csrfmiddlewaretoken',csrftoken)
    formData2.append('x', alg)
    console.log($('input[type=file]')[0].files[0])
    fich.forEach((item)=> {
		for (var key of item.entries()) {
        	console.log(key[0] + ', ' + key[1]);
        	formData2.append(key[0],key[1])
    	}
	})
    for (var key of formData2.entries()) {

        console.log(key[0] + ', ' + key[1]);
    }
	$.ajax({
		//hasta poner esto era funcionaba sin problemaaaasss
		type:'POST',
		url : 'pruebatemplate/',
		contentType:false,
		cache: false,
		processData: false,
		datatype: 'json',
		data:formData2,
		//si la petición es exitosa realiza la redirección	 
		success : function(data,textStatus){
		  console.log('exito..');
		  //hace posible la redirección a la vista pruebatemplate...
		  window.location.href = 'pruebatemplate/';
		  /*if(data.redirect){
		  	console.log('hay redirect...')
		  	
		  }else{
		  	console.log('no hay redirect..')
		  }*/
		  //console.log(data)*/
		  
		},
		//en caso de que la petición sea errónea, muestra el error de manera detallada.
		error : function(xhr,errmsg,err) {
		  console.log(xhr)
		  console.log(errmsg)
	      console.log(err)
		  console.log('hubo un error');	
 		  console.log(xhr.status + ": " + xhr.responseText); // muestra mejor información del error 
 		}
	});
	return false;
  })

