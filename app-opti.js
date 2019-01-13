const lugar= require('./lugar/lugar.js');
const clima= require('./clima/clima.js');

const argv= require('yargs').options(
  {
    direccion:
    {
      demand: true,
      alias: 'd',
      desc: 'Dirección de la ciudad para obtener el clima.'

    }
  }
).argv;

let getinfo= async (direc) =>
{
  try
  {
    let coordenadas= await lugar.getluglatlong(direc);
    let temp= await clima.getclima(coordenadas.lat, coordenadas.lng);

    return `La temperatura en ${coordenadas.direccion} es de: ${temp}`;
  }
  catch (e)
  {
    return `No se pudo encontrar la temperatura de ${direc}`;
  }

}

getinfo(argv.direccion)
.then(mensaje =>
{
  console.log(mensaje);
})
.catch(err =>
{
  console.log(err);
})

/*Todo lo que está documentado debajo de este mensaje es la forma en la que se probó
parte por parte las coordenadas y dirección junto con después la temperatura de forma
individual para después juntarlo todo como en la parte de arriba de este mensaje.*/

/*lugar.getluglatlong(argv.direccion)
.then(resp =>
{
  console.log(resp);
})
.catch(err =>
console.log(err));*/

/*clima.getclima(19.4326077, -99.133208)
.then(temp =>
{
  console.log(temp);
})
.catch(err =>
{
  console.log(err);
})*/
