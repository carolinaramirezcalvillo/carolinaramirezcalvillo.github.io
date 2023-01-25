let swLocation ="sw.js";

// En el primer if se identifica si el navegador trabaja con serviceworker
if(navigator.serviceWorker){
    // En el segundo if se identifica en que servidor se corre la pagina
    if(window.location.href.includes("localhost"))
        swLocation = "/sw.js";
    // registra la ubicacion
    navigator.serviceWorker.register(swLocation);
}


