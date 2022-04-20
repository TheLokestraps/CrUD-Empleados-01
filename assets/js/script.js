
let input_cedula = document.getElementById('cedula')

let btn_enviar = document.getElementById('enviar')

let input_celular = document.getElementById('celular')

input_celular.addEventListener('keypress', (e) => {
    e.preventDefault()

    validacion_numerica(input_celular, e.key)
})

input_cedula.addEventListener('keypress', (e) => {
    e.preventDefault()

    validacion_numerica(input_cedula, e.key)
})

function validacion_numerica(input, letra) {
    if ((/[0-9]/i.test(letra))) {
        input.value = input.value + letra
    }
}

btn_enviar.addEventListener('click', () => {
    let inputs = document.querySelectorAll('input')

    //inputs.remove(btn_enviar)

    let empleado = {}

    inputs.forEach(input => {

        let texto = input.value.trim()

        if (texto.length == 0) {
            alert(`Campo ${input.getAttribute('placeholder')} se encuentra vacío`)
        }

        empleado = {
            ...empleado,
            [input.name]: input.value
        }

    })

    empleado = {
        id: uuidv4(),
        ...empleado
    }

    let template_empleado = `
        <tr>
            <td>${empleado.id}</td> 
            <td>${empleado.apellido}</td> 
            <td>${empleado.nombre}</td>
            <td>${empleado.correo}</td> 
            <td>
                <button class="mostrar">Mostrar</button>
                <button class="editar">Editar</button>
                <button class="borrar">Borrar</button>
            </td>
        </tr>
    `

    let tbody = document.getElementById('cuerpo_tabla')

    tbody.innerHTML = tbody.innerHTML + template_empleado

    console.log(empleado);
})

function validacion(event) {
    let correo = document.getElementById('correo').value

    if (!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i.test(correo))) {
        alert('correo esta mal, no seas vivo')
        return false
    }
    
    return true
}

let form_agregar = document.getElementById('form_agregar')

form_agregar.style.display = 'none'

let btn_agregar = document.getElementById('agregar')

btn_agregar.addEventListener('click', () => {
    form_agregar.style.display = 'block'
    btn_agregar.style.display = 'none'
})

let btn_cancelar = document.getElementById('cancelar_info')

btn_cancelar.addEventListener('click', () => {
    form_agregar.style.display = 'none'
    btn_agregar.style.display = 'block'
})

let btns_borrar = document.querySelectorAll('.borrar')

btns_borrar.forEach(btn => {
    btn.addEventListener('click', () => {
        console.log(btn.parentElement.parentElement.remove());
    })
});

function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  }