var button = document.querySelector("#button");

var datos = document.querySelector("#datos");



button.addEventListener('click', () => {



    fetch('datos.json')

    .then (response => response.json())

    .then ( data  =>  {

        datos.innerHTML = ""

        for(let indice of data) {

            //el innerHTML deja imprimir codigo html  con js
            datos.innerHTML += `

            <tr>
                <th scope="row">${indice.id}</th>
                <td>${indice.nombre}</td>
                <td>${indice.apellido}</td>
                <td>${indice.dni}</td>
            </tr>
            `


        }

    })
}
)
