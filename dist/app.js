'use strict';
const buscando = document.getElementById('buscando');
const inputBuscar = document.getElementById('input_buscar');
const listado = document.getElementById("listPrice");
const fragment = new DocumentFragment();
const tem = document.getElementById("template").content;

buscando.addEventListener('click',(e)=>{   
    if(inputBuscar.classList.contains('buscarOculto')){
        inputBuscar.classList.remove('buscarOculto');
        inputBuscar.classList.add('buscarVisible');
    }else if(inputBuscar.classList.contains('buscarVisible')){{
        inputBuscar.classList.remove('buscarVisible');
        inputBuscar.classList.add('buscarOculto');
    }}
});
/*
async function obtenerLista() {
    const resp = await axios
      .get("http://localhost/Universidad/ClaseApi/api/actividad", {
        headers: { "X-API-KEY": "1922aa9fc4e81433e276569bcaf83fbue" },
      })
      .then((response) => {
        const resultados = response.data;
        let articulos = [];
        for (const i in resultados) {
            articulos.push(resultados[i]);
        }
        return articulos;
      })
      .catch((error) => {
        console.log(error);
        return 0;
      });
    return resp;
  }

const resp = await obtenerLista();
const comprobar = "content" in document.createElement("template");
if (comprobar) {
resp.forEach((element) => {
  console.log(element.detalle + " " + element.codigo);
  tem.querySelector("#code").innerHTML = ` Código: ${element.id}`;
  tem.querySelector("a").innerHTML = ` ${element.detalle}`;
  tem.querySelector("a").setAttribute("href", element.detalle);
  tem.querySelector("#detail").innerHTML = ` Precio: ${element.precio}`;

  const miElemento = tem.cloneNode(true);
  fragment.appendChild(miElemento);
});
}
listado.appendChild(fragment);*/

