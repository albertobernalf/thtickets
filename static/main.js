console.log('Hola Alberto Hi!')
var $ = jQuery;

var datavta;
var seriali = new Array();
var serialiSol = new Array();
var serialiSol1 = new Array();
var serialiSol1Bak = new Array();
var serialiSolBak = new Array();
var serialiSolBak1 = new Array();

var FinalFormData =  new FormData()   ;
var envioSol = new FormData()
var envioSolBak = new FormData()
var envio1 = new FormData()

var filas = {};

var enviovalidacion = new Array();
var envioAlmacen    = new Array();
var result = new Array();

var envioCompras    = new Array();

console.log('Cargue Main')

// Inicio Guardar solicitud

var clicando= false;

$("#btnSolCrea").click(function() {
   // Si ha sido clicado
   if (clicando){
     // Mostramos que ya se ha clicado, y no puede clicarse de nuevo
    // alert( "Por favor de a un solo click." );
   // Si no ha sido clicado
   } else {
     // Le decimos que ha sido clicado
     clicando= true;
     // Mostramos el mensaje de que ha sido clicado
     alert( "Por favor de a un solo click." );
   }
 });


function guardarSolicitud()
{
    // alert("Voy a grabar1 serialisol =" + serialiSol);
      alert("Asi quedor SerialiSol =" + serialiSol);

  username = document.getElementById("username").value;
  sedeSeleccionada=  document.getElementById("sedeSeleccionada").value;
  nombreUsuario = document.getElementById("nombreUsuario").value;
  nombreSede = document.getElementById("sede").value;
  fecha = document.getElementById("fecha").value;

  area = document.getElementById("areat").value;

    // Rutina manejo serialiSol

// Display the key/value pairs

                    var jsonSol = {};
                    var jsonDefSol = [];
                    var inicio = 0;
                    var transitorio = {};

                    var nFilas = $("#tablaSolicitud tr").length;

            if (area == '')
                {

                document.getElementById("mensajes").innerHTML = "Favor Suministre Area";
                 preventDefault();
                }

            if (nFilas <= 1)
                {

                document.getElementById("mensajes").innerHTML = "Favor Ingresar items";
                 preventDefault();
                }


                    ///  Nueva Rutina
                      for (const pair of serialiSol.entries())
                      {

                            if ( pair[0] == '0')
                              {
                                alert ("Volviendo a Recorrer Solo pair[0] == 0" + pair[0] + pair[1] )
                                // alert("Entre Pair[0]" + pair[1])
                                transitorio = pair[1]
                                //alert("hasta el momento transitorio = " + transitorio )
                                 for (const pair2 of transitorio.entries())
                                    {

                                     jsonSol[pair2[0]] = pair2[1];
                                     inicio = inicio +1
                                     if (inicio == 6)
                                     {
                                            // alert("Entro a empaquetar una fila");

                                             jsonDefSol.push(JSON.stringify (jsonSol ));
                                        // alert("subo ajsondefsol  =" +jsonDefSol )
                                        delete jsonSol['descripcion'];
                                        delete jsonSol['tipo'];
                                        delete jsonSol['producto'];
                                        delete jsonSol['presentacion'];
                                        delete jsonSol['cantidad'];
                                        delete jsonSol['justificacion'];
                                        inicio=0;
                                     }
                                     // alert("pair2 =" +pair2[1] )
                                   }
                               }
                        }
                     // alert("jsondefSol = " + JSON.stringify (jsonDefSol));
        	         var jsonDefSol1 = JSON.stringify(jsonDefSol);



                    /// Fin nueva rutina


                  envio1.append('serialiSol',jsonDefSol1);
                 // Fin Rutina manejo serialiSol
                 // Fin Solicitud detalle

       $.ajax({
		type: 'POST',
    	url: '/guardarSolicitudes/username, sedeSeleccionada, nombreUsuario, fecha, nombreSede, area, jsonDefSol1',
		data: {'username':username,'sedeSeleccionada':sedeSeleccionada, 'nombreUsuario': nombreUsuario, 'fecha':fecha,'nombreSede':nombreSede, 'area':area,'jsonDefSol1':jsonDefSol1 },
		success: function (respuesta) {

            	document.getElementById("mensajes").innerHTML = respuesta;
               	document.getElementById("id").innerHTML = "";
             	document.getElementById("sedeSeleccionada").innerHTML = sedeSeleccionada;
             	document.getElementById("username").innerHTML = "username";
             	document.getElementById("nombreUsuario").innerHTML = "nombreUsuario";
             	document.getElementById("nombreSede").innerHTML = "nombreSede";


             	document.getElementById("producto").value = "";
             	document.getElementById("justificacion").value = "";
             	document.getElementById("cantidad").value = "0";
                // hay que borra serialiSol

                // hay que borrar la tabla html

                // hay que inicializa combos
                // Mejor cargar de nuevo la pagina

                  //  $("#laboratorios1").empty();
                  $("#descripcion").val("");
                  $("#tipo").val("");
                  $("#presentacion").val("");
                   $("#area").val("");
                   //$("#tablaSolicitud").empty();  // ops borro todda la tabla
                  // $('#tablaSolicitud tbody tr').remove();
                   $(tablaSolicitud).remove("tr:gt(0)");

                window.location.reload()
                document.getElementById("mensajes").innerHTML = respuesta;

                  // alert("LISTO")
                    },
	   		    error: function (request, status, error) {
	   	    	}
	      });
 };

// Fin gusrdas Solicitud



// Aqui sigue

function validarTraeSolicitud()
{
  // alert("Entre a validarSolicitud");

  username = document.getElementById("username").value;
  sedeSeleccionada=  document.getElementById("sedeSeleccionada").value;
  nombreUsuario = document.getElementById("nombreUsuario").value;
   nombreSede = document.getElementById("nombreSede").value;
  solicitudId =  document.getElementById("solicitudId").value;

  // nombreSede = document.getElementById("sede").value;
  //fecha = document.getElementById("fecha").value;

  //area = document.getElementById("areas").value;

  //   alert("solicitudId" + solicitudId + nombreUsuario +sedeSeleccionada );



var resume_table = document.getElementById("tablaValidacionDetalle");
var item = 0;
var averiguo="espTec";

var espTecnica="";
var idestadosValidacion=0;
var idEstado=0;


for (var i = 0, row; row = resume_table.rows[i]; i++) {

  if (i != 0)  // por i==0
    {
   for (var j = 0, col; col = row.cells[j]; j++) {


        if (j == 0)
      {

         item = col.innerText;
      }

    if (j == 7)
      {

         espTecnica = col.innerText;
      }

    if (j == 9)
      {
        if (i==1)
         { idestadosValidacion = document.getElementById("1");}
        if (i==2)
         { idestadosValidacion = document.getElementById("2");}

        if (i==3)
         { idestadosValidacion = document.getElementById("3");}
         if (i==4)
         { idestadosValidacion = document.getElementById("4");}
         if (i==5)
         { idestadosValidacion = document.getElementById("5");}
         if (i==6)
         { idestadosValidacion = document.getElementById("6");}
         if (i==7)
         { idestadosValidacion = document.getElementById("7");}
         if (i==8)
         { idestadosValidacion = document.getElementById("8");}
         if (i==9)
         { idestadosValidacion = document.getElementById("9");}
         if (i==10)
         { idestadosValidacion = document.getElementById("10");}
         if (i==11)
         { idestadosValidacion = document.getElementById("11");}
         if (i==12)
         { idestadosValidacion = document.getElementById("12");}
         if (i==13)
         { idestadosValidacion = document.getElementById("13");}
         if (i==14)
         { idestadosValidacion = document.getElementById("14");}
         if (i==15)
         { idestadosValidacion = document.getElementById("15");}

       idEstado = idestadosValidacion.options[idestadosValidacion.selectedIndex].value;

      }
    // Aqui em´paqueto las variable en un arreglo
    // Para ser enviados por AJAX, se envia el la  solicitu, el item, la espe tecnica y el estado y yap
    } // Fin For j

     //alert("Fila Item datos = " + solicitudId + item + espTecnica  +  idEstado );


          filas['solicitudId'] = solicitudId;
          filas['item'] = item;
          filas['espTecnica'] = espTecnica;
          filas['idEstado'] = idEstado;

          enviovalidacion.push(JSON.stringify (filas ));
           delete filas['solicitudId'];
           delete filas['item'];
           delete filas['espTecnica'];
           delete filas['idEstado'];

    // alert ("filas = " + JSON.stringify(filas));

  } // fin i!= 0

}  //  Fin For i

   //  alert ("enviovalidacion" + JSON.stringify(enviovalidacion));
        var enviovalidacionDef  = JSON.stringify(enviovalidacion);


       $.ajax({
		type: 'POST',
    	url: '/GuardarValidacion/username, sedeSeleccionada, nombreUsuario, nombreSede, enviovalidacionDef',
		data: {'username':username,'sedeSeleccionada':sedeSeleccionada,'nombreUsuario':nombreUsuario,'nombreSede':nombreSede,'enviovalidacionDef':enviovalidacionDef },
		success: function (respuesta) {


               	//document.getElementById("id").innerHTML = "";
             	//document.getElementById("sedeSeleccionada").innerHTML = sedeSeleccionada;
             	//document.getElementById("username").innerHTML = "username";
             	//document.getElementById("nombreUsuario").innerHTML = "nombreUsuario";
             	//document.getElementById("nombreSede").innerHTML = "nombreSede";

              //  window.location.reload()
                document.getElementById("mensajes").innerHTML = respuesta;

                alert("LISTO")
                    },
	   		    error: function (request, status, error) {
	   	    	}
	      });
 };

// Aqui Termina el sigue


// Desde Aquip Almacen

function almacenTraeSolicitud()
{
   alert("Entre a AlmacentraeSolicitud");

  username = document.getElementById("username").value;
  sedeSeleccionada=  document.getElementById("sedeSeleccionada").value;
  nombreUsuario = document.getElementById("nombreUsuario").value;
   nombreSede = document.getElementById("nombreSede").value;
  solicitudId =  document.getElementById("solicitudId").value;


var resume_table = document.getElementById("tablaAlmacenDetalle");
var item = 0;
var averiguo="espTec";

var espalmacen="";
var idestadosAlmacen=0;
var idEstado=0;
var idEstadoAlm=0;


for (var i = 0, row; row = resume_table.rows[i]; i++) {

  if (i != 0)  // por i==0
    {
   for (var j = 0, col; col = row.cells[j]; j++) {


        if (j == 0)
      {

         item = col.innerText;
      }

    if (j == 10)
      {

         espAlmacen = col.innerText;
      }

    if (j == 12)
      {
        if (i==1)
         { idestadosAlmacen = document.getElementById("1");}
        if (i==2)
         { idestadosAlmacen = document.getElementById("2");}

        if (i==3)
         { idestadosAlmacen = document.getElementById("3");}
         if (i==4)
         { idestadosAlmacen = document.getElementById("4");}
         if (i==5)
         { idestadosAlmacen = document.getElementById("5");}
         if (i==6)
         { idestadosAlmacen = document.getElementById("6");}
         if (i==7)
         { idestadosAlmacen = document.getElementById("7");}
         if (i==8)
         { idestadosAlmacen = document.getElementById("8");}
         if (i==9)
         { idestadosAlmacen = document.getElementById("9");}
         if (i==10)
         { idestadosAlmacen = document.getElementById("10");}
         if (i==11)
         { idestadosAlmacen = document.getElementById("11");}
         if (i==12)
         { idestadosAlmacen = document.getElementById("12");}
         if (i==13)
         { idestadosAlmacen = document.getElementById("13");}
         if (i==14)
         { idestadosAlmacen = document.getElementById("14");}
         if (i==15)
         { idestadosAlmacen = document.getElementById("15");}

       idEstadoAlm = idestadosAlmacen.options[idestadosAlmacen.selectedIndex].value;

      }
    // Aqui em´paqueto las variable en un arreglo
    // Para ser enviados por AJAX, se envia el la  solicitu, el item, la espe tecnica y el estado y yap
    } // Fin For j

     //alert("Fila Item datos = " + solicitudId + item + espTecnica  +  idEstado );


          filas['solicitudId'] = solicitudId;
          filas['item'] = item;
          filas['espAlmacen'] = espAlmacen;
          filas['idEstadoAlm'] = idEstadoAlm;

          envioAlmacen.push(JSON.stringify (filas ));
           delete filas['solicitudId'];
           delete filas['item'];
           delete filas['espAlmacen'];
           delete filas['idEstadoAlm'];

    // alert ("filas = " + JSON.stringify(filas));

  } // fin i!= 0

}  //  Fin For i

   //  alert ("enviovalidacion" + JSON.stringify(enviovalidacion));
        var envioAlmacenDef  = JSON.stringify(envioAlmacen);

       $.ajax({
		type: 'POST',
		//       username, sedeSeleccionada, nombreUsuario, nombreSede,envioAlmacenDef',
    	url: '/GuardarAlmacen/',
		data: {'username':username, 'sedeSeleccionada':sedeSeleccionada, 'nombreUsuario':nombreUsuario, 'nombreSede':nombreSede, 'envioAlmacenDef' : envioAlmacenDef },
		success: function (respuesta) {

               	//document.getElementById("id").innerHTML = "";
             	//document.getElementById("sedeSeleccionada").innerHTML = sedeSeleccionada;
             	//document.getElementById("username").innerHTML = "username";
             	//document.getElementById("nombreUsuario").innerHTML = "nombreUsuario";
             	//document.getElementById("nombreSede").innerHTML = "nombreSede";

              //  window.location.reload()
                document.getElementById("mensajes").innerHTML = respuesta;

                //alert("LISTO")
                    },
	   		    error: function (request, status, error) {
	   	    	}
	      });
 };


// Hasta Aqui Almacen



// Desde Aqui Compras


function comprasTraeSolicitud()
{
   // alert("Entre a ComprasTraeSolicitud");

  username = document.getElementById("username").value;
  sedeSeleccionada=  document.getElementById("sedeSeleccionada").value;
  nombreUsuario = document.getElementById("nombreUsuario").value;
   nombreSede = document.getElementById("nombreSede").value;
  solicitudId =  document.getElementById("solicitudId").value;


var resume_table = document.getElementById("tablaComprasDetalle");
var item = 0;
var averiguo="espTec";

var espCompras="";
var idestadosCompras=0;
var idEstado=0;
var idEstadoComp=0;


for (var i = 0, row; row = resume_table.rows[i]; i++) {

  if (i != 0)  // por i==0
    {
   for (var j = 0, col; col = row.cells[j]; j++) {


        if (j == 0)
      {

         item = col.innerText;
      }

    if (j == 12)
      {

         espCompras = col.innerText;
      }

    if (j == 14)
      {
        if (i==1)
         { idestadosCompras = document.getElementById("1");}
        if (i==2)
         { idestadosCompras = document.getElementById("2");}

        if (i==3)
         { idestadosCompras = document.getElementById("3");}
         if (i==4)
         { idestadosCompras = document.getElementById("4");}
         if (i==5)
         { idestadosCompras = document.getElementById("5");}
         if (i==6)
         { idestadosCompras = document.getElementById("6");}
         if (i==7)
         { idestadosCompras = document.getElementById("7");}
         if (i==8)
         { idestadosCompras = document.getElementById("8");}
         if (i==9)
         { idestadosCompras = document.getElementById("9");}
         if (i==10)
         { idestadosCompras = document.getElementById("10");}
         if (i==11)
         { idestadosCompras = document.getElementById("11");}
         if (i==12)
         { idestadosCompras = document.getElementById("12");}
         if (i==13)
         { idestadosCompras = document.getElementById("13");}
         if (i==14)
         { idestadosCompras = document.getElementById("14");}
         if (i==15)
         { idestadosCompras = document.getElementById("15");}

       idEstadoComp = idestadosCompras.options[idestadosCompras.selectedIndex].value;

      }
    // Aqui em´paqueto las variable en un arreglo
    // Para ser enviados por AJAX, se envia el la  solicitu, el item, la espe tecnica y el estado y yap
    } // Fin For j

     //alert("Fila Item datos = " + solicitudId + item + espTecnica  +  idEstado );


          filas['solicitudId'] = solicitudId;
          filas['item'] = item;
          filas['espCompras'] = espCompras;
          filas['idEstadoComp'] = idEstadoComp;

          envioCompras.push(JSON.stringify (filas ));
           delete filas['solicitudId'];
           delete filas['item'];
           delete filas['espCompras'];
           delete filas['idEstadoComp'];

    // alert ("filas = " + JSON.stringify(filas));

  } // fin i!= 0

}  //  Fin For i


        var envioComprasDef  = JSON.stringify(envioCompras);
        // alert ("envioComprasDef" + envioComprasDef);

       $.ajax({
		type: 'POST',
    	url: '/GuardarCompras/',
		data: {'username':username, 'sedeSeleccionada':sedeSeleccionada, 'nombreUsuario':nombreUsuario, 'nombreSede':nombreSede, 'envioComprasDef':envioComprasDef },
		success: function (respuesta) {

               	//document.getElementById("id").innerHTML = "";
             	//document.getElementById("sedeSeleccionada").innerHTML = sedeSeleccionada;
             	//document.getElementById("username").innerHTML = "username";
             	//document.getElementById("nombreUsuario").innerHTML = "nombreUsuario";
             	//document.getElementById("nombreSede").innerHTML = "nombreSede";

              //  window.location.reload()
                document.getElementById("mensajes").innerHTML = respuesta;

                //alert("LISTO")
                    },
	   		    error: function (request, status, error) {
	   	    	}
	      });
 };

// hasta Aquip compras



 $(document).ready(function(){

function validaSolicitud()
{
  alert("Voy a  validar Solictud");
  username = document.getElementById("username").value;
  sedeSeleccionada=  document.getElementById("sedeSeleccionada").value;
  nombreUsuario = document.getElementById("nombreUsuario").value;
  nombreSede = document.getElementById("sede").value;
  fecha = document.getElementById("fecha").value;
  solicitudId = document.getelementById("solicitudId").value;


  area = document.getElementById("areas").value;


  alert(nombreUsuario);
  alert(fecha);
  alert(nombreSede);
  alert(area);
  alert(solicitudId);


       $.ajax({
		type: 'POST',
    	url: '/crearSolicitudes/username, sedeSeleccionada, nombreUsuario, fecha, nombreSede, area',
		data: {'username':username,'sedeSeleccionada':sedeSeleccionada, 'nombreUsuario': nombreUsuario, 'fecha':fecha,'nombreSede':nombreSede, 'area':area },
		success: function (respuesta) {

            	document.getElementById("mensajes").innerHTML = respuesta;
            	<!--  $('#error').val(respuesta); -->

			<!-- window.location.reload(); -->

             	document.getElementById("id").innerHTML = "";
             	document.getElementById("sedeSeleccionada").innerHTML = sedeSeleccionada;
             	document.getElementById("username").innerHTML = "username";
             	document.getElementById("nombreUsuario").innerHTML = "nombreUsuario";
             	document.getElementById("nombreSede").innerHTML = "nombreSede";
             	//document.getElementById("area").innerHTML = "";



                    },
	   		    error: function (request, status, error) {
	   	    	}
	});


 };

 $("#btnAdicion").click(function(){


    var descripcion =  document.getElementById("descripcion").value;
    var comboDescripcion = document.getElementById("descripcion");
    var descripcionNombre = comboDescripcion.options[comboDescripcion.selectedIndex].text;


    var tipo =  document.getElementById("tipo").value;
    var comboTipo=document.getElementById("tipo");
    var tipoNombre = comboTipo.options[comboTipo.selectedIndex].text;

    var presentacion =  document.getElementById("presentacion").value;
    var comboPresentacion=document.getElementById("presentacion");
    var presentacionNombre = comboPresentacion.options[comboPresentacion.selectedIndex].text;

    var producto=document.getElementById("producto").value;
    var cantidad=document.getElementById("cantidad").value;
    var justificacion=document.getElementById("justificacion").value;

		  var tds = '<tr>';
          tds += '<td class="col-xs-6">' + descripcionNombre + '</td>';
		  tds += '<td class="col-xs-6">' + tipoNombre + '</td>';
		  tds += '<td class="col-xs-6">' + producto + '</td>';
		  tds += '<td class="col-xs-6">' + presentacionNombre + '</td>';

		  tds += '<td class="col-xs-6">' + cantidad + '</td>';
		   tds += '<td class="col-xs-6">' + justificacion + '</td>';
          tds += '<td class="col-xs-1"><a href="#">Delete</a></td>';


              // Aqui colocar rutina que filtra por campos nulos y detiene el envio
            if (descripcionNombre == '')
                {

                document.getElementById("mensajes").innerHTML = "Favor Suministre Descripcion";
                 preventDefault();
                }

            if (tipoNombre == '')
                {

                document.getElementById("mensajes").innerHTML = "Favor Suministre Tipo";
               preventDefault();
                }

            if (producto == '')
                {

                document.getElementById("mensajes").innerHTML = "Favor Suministre Producto";
                preventDefault();
                }

           if (presentacionNombre == '')
                {
                document.getElementById("mensajes").innerHTML = "Favor Suministre Presentacion";
                preventDefault();
                }

           if (cantidad == '')
                {

                document.getElementById("mensajes").innerHTML = "Favor Suministre Cantidad";
                preventDefault();
                }

            // Fin rutina filtrado de campos

		tds += '</tr>';

		$("#tablaSolicitud").append(tds);

        envioSol.append('descripcion' , descripcionNombre);
        envioSol.append('tipo' , tipoNombre);
        envioSol.append('producto' , producto);
        envioSol.append('presentacion' , presentacionNombre);
        envioSol.append('cantidad' , cantidad);
        envioSol.append('justificacion' , justificacion);

        serialiSol.push(envioSol);

        addAEvent();

   });

function addAEvent(){

			    $('#tablaSolicitud').unbind();

				  $('#tablaSolicitud').on('click','tr td', function(evt){

				        var target,valorSeleccionado;
    			        var column_num = parseInt( $(this).index() + 1 ) ;
				        var row_num = parseInt( $(this).parent().index() + 1 );

  				  	   target = $(evt.target);
					   valorSeleccionado = target.text();

					        if(column_num == 7)
					        	{
                          //      alert("row_num =" + row_num);

                                console.log("serialiSol antes de borrar");
                                console.log(serialiSol);
                               // serialiSol.splice((row_num-1) , 1)

					        	$(this).closest('tr').remove();


                                //  event.preventDefault();


    					        var voy = 0;

    					        var desdeBorra = (row_num-1) * 6 + 1;

    					        if ((row_num-1) == 0)
    					            {
    					             var hastaBorra = 6;
    					             }
    					        else
   					               {
                                    var hastaBorra =desdeBorra + 5;
                                    }

					         console.log("Asi quedo serialiSol Nuevo");
                             console.log(serialiSol);
                             serialiSol.forEach((numero, index, arreglo) => {
                                        console.log(arreglo);
                                //        alert ("index = " + index);

                                        if (index==0)
                                        {

                                        serialiSolBak1 = serialiSol[0];


                                       // serialiSolBak1.forEach((numero, index, arreglo) => {
                                       //   if (index != (row_num-1))
                                       //   {
                                                  for (const pair of serialiSolBak1.entries())
                                                        {
                                                        voy = voy +1;
                                                        if (voy>=desdeBorra && voy<=hastaBorra )
                                                        {
                                                                    console.log("No aplica");

                                                            }
                                                            else
                                                            {
                                                      //       alert("pair[0] =" + pair[0] + "- " +pair[1])
                                                        envioSolBak.append(pair[0], pair[1])
                                                         console.log(`${pair[0]}, ${pair[1]}`);
                                                            }
                                                        }
                                                    serialiSolBak.push(envioSolBak);
                                       //     } // termina If Interno
                                       //      }); // Termina For each Interno

                                        } // Termina IF
                                 });


                               console.log('ESTO QUEDO : ')
                               serialiSolBak.forEach((numero, index, arreglo) => {

                                         for (const pair of numero.entries())
                                                 {
                                             console.log(`${pair[0]}, ${pair[1]}`);
                                               }

                                }); // Termina el For Each
                                serialiSol = serialiSolBak;

                             // alert ("serialisol queda " + JSON.stringify(serialiSol));
                             alert("Salgo de rurina");
                       } // Fin ifcolumn = 7

                    event.preventDefault();

				}); // Fin TablaSolicitud evento
} // Fin function  AddEvent

}); // Fin document_ready