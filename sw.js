const STATIC_CACHE = "static";
//se declara un vector con la ubicacion y el nombre de los archivos que forman parte del proyecto necesarios para su ejecución
const APP_SHELL =[
    "/",
    "index.html",
    "styles/style.css",
    "js/functions.js",
    "js/main.js",
    "js/script1.js",
    "js/script2.js",
    "images/beerjs-logo.png",
];
    //En el evento install se agregan los archivos a la cache, se ejecuta cuando se abre la app automatico
self.addEventListener("install", (e) => {
    const cacheStatic = caches
       .open(STATIC_CACHE)
       .then((cache) => cache.addAll(APP_SHELL));
    
    e.waitUntil(cacheStatic);
}); 
// en el evento fetch se envian los archivos a la pagina web o paginas, se ejecutan cuando lo solicta la pagina
self.addEventListener("fetch", (e) => {
    console.log("fectch! ", e.request);

    e.respondWith(
        caches
           .match(e.request)
           .then(res => res || fetch(e.request))
           .catch(console.log)
           );
});

