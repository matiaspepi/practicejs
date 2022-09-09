
import { carritoIndex } from "./carritoIndex.js";
import { getData } from "./getData.js";

export const mostrarProductos = async () => {

  const contenedorProductos = document.getElementById("producto-contenedor");
  const productos = await getData();

  productos.forEach(producto => {
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML += `<div class="card-image">
                        <img src=${producto.img}>
                      </div>
                      <div class="card-content">
                      <h3 class="card-title">${producto.marca}</h3>
                      <p>Precio: ${producto.precio} </p>
                      <a class="btn-floating halfway-fab wabes-effect waves-light red" id=boton${producto.id}><i class="material-icons">add_shopping_cart</i></a>
                      </div>
                     `
    contenedorProductos.appendChild(div);

    const boton = document.getElementById(`boton${producto.id}`);
      boton.addEventListener('click', () => {
      carritoIndex(producto.id);
      swal({
        title: 'Genial',
        text: `El producto ${producto.marca} se ha añadido al carrito!`,
        icon: 'success',
        confirm: 'Ok',
        timer: 3000
      })
    });
  });
};