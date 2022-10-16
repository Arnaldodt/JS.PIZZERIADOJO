let pizza = {
    tipoCorteza: ["delgada", "borde queso", "estilo chicago", "lanzada a mano"],
    tipoSalsa: ["tomate", "BBQ", "alfredo", "tradicional", "marinara", "Sin"],
    queso: ["cheddar", "azul", "mozzarella", "feta"],
    salsa: ["carne", "tocino", "jamon", "salchichas", "pepperoni", "pollo", "champiñones", "aceitunas", "cebollas"]
};
function pizzaOven(tipoCorteza, tipoSalsa, quesos, salsas){
    let pizz = {};
    pizz.tipoCorteza =tipoCorteza;
    pizz.tipoSalsa = tipoSalsa;
    pizz.queso  = quesos;
    pizz.salsa = salsas;
    return pizz;
 }
 function randomPizza(){
    let pizzRandom = {};
    pizzRandom.tipoCorteza =  pizza.tipoCorteza[   Math.floor( Math.random()  * pizza.tipoCorteza.length)];
    pizzRandom.tipoSalsa =    pizza.tipoSalsa[     Math.floor( Math.random() * pizza.tipoSalsa.length)];
    pizzRandom.queso  =       pizza.queso[         Math.floor( Math.random() * pizza.queso.length)];
    pizzRandom.salsa =        pizza.salsa[         Math.floor( Math.random() * pizza.salsa.length)];
    return pizzRandom
 }

let pizza1 = pizzaOven("estilo chicago", "tradicional", ["mozzarella"], ["pepperoni", "salchichas"]);
console.log("Ingrediente de Primera Pizza:");
console.log(pizza1.tipoCorteza, "-", pizza1.tipoSalsa, "-", pizza1.queso, "-", pizza1.salsa);

let pizza2 = pizzaOven("lanzada a mano", "marinara", ["mozzarella", "feta"], ["champiñones", "aceitunas", "cebollas"]);
console.log("Ingrediente de Segunda Pizza:");
console.log(pizza2.tipoCorteza, "-", pizza2.tipoSalsa, "-", pizza2.queso, "-", pizza2.salsa);

let pizza3 = pizzaOven("delgada", "tomate", "azul", ["carne", "tocino", "pepperoni"]);
console.log("Ingrediente de Tercera Pizza:");
console.log(pizza3.tipoCorteza, "-", pizza3.tipoSalsa, "-", pizza3.queso, "-", pizza3.salsa);

let pizza4 = pizzaOven("borde queso", ["tomate","BBQ"], ["cheddar", "mozzarella"], ["pollo", "cebollas", "champiñones"]);
console.log("Ingrediente de Cuarta Pizza:");
console.log(pizza4.tipoCorteza, "-", pizza4.tipoSalsa, "-", pizza4.queso, "-", pizza4.salsa);

let pizza5 = randomPizza();
console.log("Ingrediente de Pizza Random:");
console.log(pizza5.tipoCorteza, "-", pizza5.tipoSalsa, "-", pizza5.queso, "-", pizza5.salsa);