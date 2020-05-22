
function Vehiculo(marca, modelo, color, año, combustible){
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.año = año;
}

var ArrayMarca = ['Ford','Volswaken','Opel', 'Peugeot','Ferrari','Audi','BMV','Alpine','Citroen','Jaguar'];
var ArrayModelo = ['Fiesta','Escarabajo','Zafira','5008','Daytona','A7 Sportback','X2','A110','C4 Cactus','E-Pace'];
var ArrayColor = ['Negro','Blanco','Amarillo','Rojo','Blanco','Verde','Azul','Gris','Mordado','Dorado'];
var ArrayAño = [2001,2015,2012,2002,2007,2010,2013,2019,2010,2016];

for (i = 0; i < 10; i++){
    var vehiculos = new Vehiculo(ArrayMarca[i], ArrayModelo[i], ArrayAño[i], ArrayColor[i]);
    var imprimir = 'Marca: ' + ArrayMarca[i] + ' Modelo: ' + ArrayModelo[i] + ' Año ' + ArrayAño[i] + ' Color: ' + ArrayColor[i];
    console.log(vehiculos);
    document.write(imprimir + '<br>');
}
