const axios= require('axios');

const argv= require('yargs').options(
  {
    direccion:
    {
      alias: 'd',
      desc: 'Dirección de la ciudad para obtener el clima.',
      demand: true
    }
  }
).argv;

console.log(argv.direccion);

let encodedURL= encodeURI(argv.direccion);//Esto se hace para que en el caso de que el address de abajo sea una ciudad con espacios entonces esto que estoy escribiendo hará que no falle por poner una ciudad que tenga espacios.
axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedURL}&key=AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM`)
.then(resp =>
{
  //console.log(resp.data);//Si quiero ver bonito lo que tengo justo en esta línea en la que estoy escribiendo hago lo que tengo escrito debajo de la misma.
  //console.log(JSON.stringify(resp.data, undefined, 2));//Lo que quiero ver, replacer que no usaremos y después lo sespacios que yo quiera para ver esto bonito.
  //Aunque se recomienda mejor visualizar todo esto en postman.
  //console.log(resp.status);//Puedo obtener varias cosas, no sólo esto que estoy escribiendo ahorita.

  let localizacion= resp.data.results[0];
  let coordenadas= localizacion.geometry.location;

  console.log(`Dirección: ${localizacion.formatted_address}`);
  console.log(`Latitud: ${coordenadas.lat}`);
  console.log(`Longitud: ${coordenadas.lng}`);
})
.catch(err => console.log('ERROR!!!', err));
