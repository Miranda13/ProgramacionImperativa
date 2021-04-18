function agregarHttp(url) {

    return 'http://'+url;
}

function procesar( array, callback){
    for (let i=0; i < array.length; i++) {
        array[i] = callback(array[i]);
    }
    return array
}

let urlCompletas = procesar(["www.google.com","www.yahoo.com"],agregarHttp)
console.log(urlCompletas)