let total = 0;
let precio = 0;
let otroProducto = false;

function agregarAlCarrito() {

    do {

        let producto = prompt("¿Querés comprar shampoo, acondicionador o ambos?", "Ej: ambos");
        let cantidad = parseInt(prompt("¿Cuantos queres comprar?", 0));

        switch (producto) {
            case "shampoo":
                precio = 500;
                break;
            case "acondicionador":
                precio = 700;
                break;
            case "ambos":
                precio = 1100;
                break;
            default:
                alert("Algunos de los datos ingresados no son correctos");
                precio = 0;
                cantidad = 0;
        }

        total = total + precio * cantidad;
        otroProducto = confirm("¿Queres agregar otro producto?")

    } while (otroProducto);
    resultado = confirm ("El total de la compra es:" + total + "$");
}
agregarAlCarrito();