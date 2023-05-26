/*
Supongamos que contamos con una página que ofrece determinados productos.

Para poder comprar, el usuario es consultado si desea pedir un producto, si es así,
se le listan los disponibles y se le pide el id del producto elegido, repitiendo indefinidamente
mientras quiera continuar comprando.

No hay límite de productos para el pedido.
*/

let producto_en_carrito = [];
let cargar_producto;

do {
    cargar_producto = confirm ('Desea cargar un producto al carrito?');

    if(cargar_producto === true){
        const id_producto = prompt('Ingresar Codigo');
        producto_en_carrito.push(id_producto);
    }

} while (cargar_producto === true);

console.log('Productos en carrito:');
console.log(producto_en_carrito);

//una de las formas de recorrer una matriz
for(let c = 0; c < producto_en_carrito.length ;c++){
    console.log(producto_en_carrito[c]);
}