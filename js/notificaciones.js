//Se selecciona el boton de la pagina 
var button = document.getElementById("notifications");
// Se le agrega un listener al evento clic
button.addEventListener("click", function (e) {
    // Se solicita el permiso para mandar notificaciones
  Notification.requestPermission().then(function (result) {
    // Se evalua si el usuario permitió la notificación
    if (result === "granted") {
      randomNotification();
    }
  });
});
 // Esta función muestra una notificación
function randomNotification()
{
    //alert ("Tienes una nueva actualización");
   
  var notifTitle = "titulo";
  var notifBody = "Creado por Carolina" ;
  var notifImg = "images/beerjs-logo.png";
  // Se crea un aobjeto con los valores del body e icon
  var options = {
    body: notifBody,
    icon: notifImg,
  };
 // Crea la notificacion y la muestra al usuario
  var notif = new Notification(notifTitle, options);
  // Esta es una funcion de js ejecuta algo cada cierto tiempo en milisegundos
  setTimeout(randomNotification, 30000);
}

