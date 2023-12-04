const inpmutPieza = document.querySelector('#pieza')
const inpmutPrecio = document.querySelector('#precio')

const button = document.querySelector('button')
button.addEventListener('click', (e) => {
    const name = inpmutPieza.value 
    const price= inpmutPrecio.value
fetch('/api/1/v1/formrepu',{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({name,price})
})});

