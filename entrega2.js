// Se define un array de objetos que contienen información sobre los electrodomésticos disponibles para la venta
const electrodomesticos = [
    { nombre: 'Lavarropas', marca: 'Samsung', precio: 90000 },
    { nombre: 'Horno eléctrico', marca: 'LG', precio: 25000 },
    { nombre: 'Heladera', marca: 'Whirlpool', precio: 150000 },
    { nombre: 'Televisor', marca: 'Samsung', precio: 100000 },
    { nombre: 'Microondas', marca: 'LG', precio: 40000 },
    { nombre: 'Notebook', marca: 'DELL', precio: 210000 },
    { nombre: 'Parlante', marca: 'LG', precio: 33000 },
    { nombre: 'Alexa', marca: 'Amazon', precio: 30000 },

  ];
  
  let totalVenta = 0;
  let respuesta = ""
  // Se utiliza una estructura do while para permitir al usuario comprar múltiples electrodomésticos
  do {
    // Mostramos los electrodomésticos disponibles para la venta al usuario
    console.log('Electrodomésticos disponibles para la venta:');
    for (let i = 0; i < electrodomesticos.length; i++) {
      console.log(`${i + 1}. ${electrodomesticos[i].nombre} (${electrodomesticos[i].marca}): $${electrodomesticos[i].precio}`);
    }
    
    // Pedimos al usuario que seleccione el electrodoméstico que desea comprar
    let seleccion;
    
    do {
      seleccion = parseInt(prompt('Ingrese el número del electrodoméstico que desea comprar:'));
    } while (isNaN(seleccion) || seleccion < 1 || seleccion > electrodomesticos.length);
    
    // Agregamos el precio del electrodoméstico seleccionado al total de la venta
    totalVenta += electrodomesticos[seleccion - 1].precio;
    
    // Preguntamos al usuario si desea comprar otro electrodoméstico
    do {
      respuesta = prompt('¿Desea comprar otro electrodoméstico? (s/n)').toLowerCase();
    } while (respuesta !== 's' && respuesta !== 'n');
  
} while (respuesta === 's');
// Mostramos el total de la venta al usuario
console.log(`El total de la venta es: $${totalVenta}`);
