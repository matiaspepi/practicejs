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
    console.log(total);
}
function aplicarDescuento(total) {
    if (total >= 5000) {
        total = total * 0.80;
    }

    return total
}

function calcularEnvio(total) {
    let confirmacion = confirm("¿Querés envío a domicilio?");

    if (confirmacion && total >= 2000) {
      alert("Tenés envio gratis. El total de tu compra es $" + total);
    } else if (confirmacion && total < 2000 && total != 0) {
      total = total + 700;
      alert("El envío cuesta $700. El total de tu compra es $" + total);
    } else {
      alert("El total de tu compra es $" + total);
    }

    return total;
}
agregarAlCarrito();
calcularEnvio(aplicarDescuento(total));