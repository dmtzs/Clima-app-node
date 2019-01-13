const axios= require('axios');

const getluglatlong= async (direccion) =>
{
  let encodedURL= encodeURI(direccion);//Esto se hace para que en el caso de que el address de abajo sea una ciudad con espacios entonces esto que estoy escribiendo hará que no falle por poner una ciudad que tenga espacios.
  /*Await sirve para por ejemplo, en este caso, le pongo await a una petición y al hacerlo le estoy diciendo que
  tengo que esperar a que esa petición regrese algo para insertarlo en la variable resp y poder proceder a la
  siguiente parte del código.*/
  let resp= await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedURL}&key=AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM`);

  if (resp.data.status=== 'ZERO_RESULTS')//El data es por la API, se le pone siempre data cuando se trabaje con API.
  {
    throw new Error(`ERROR: No hay resultados para la ciudad ${direccion}`);
    return;
  }

    let localizacion= resp.data.results[0];
    let coordenadas= localizacion.geometry.location;

  return(
  {
    direccion: localizacion.formatted_address,
    lat: coordenadas.lat,
    lng: coordenadas.lng
  });
}

module.exports=
{
  getluglatlong
}
