
let input_cedula = document.getElementById('cedula')

let btn_enviar = document.getElementById('enviar')

input_cedula.addEventListener('keyup', (e) => {
    let cedula = input_cedula.value

    if (!(/^[1-9][0-9]*$/i.test(cedula))) {
        input_cedula.value = cedula.replaceAll(e.key, '')
    }
})

btn_enviar.addEventListener('click', () => {
    let inputs = document.querySelectorAll('input')

    //inputs.remove(btn_enviar)

    inputs.forEach(input => {

        let texto = input.value.trim()

        if (texto.length == 0) {
            alert(`Campo ${input.getAttribute('placeholder')} se encuentra vacío`)
        }

    })
})

function validacion(event) {
    let correo = document.getElementById('correo').value

    if (!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i.test(correo))) {
        alert('correo esta mal, no seas vivo')
        return false
    }
    
    return true
}

