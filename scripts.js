
const somar = document.querySelector('.somar');

function imc() {
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    let resultado = document.querySelector('span');

    if (peso !== '' && altura !== '') {
        const valorImc = (peso / (altura * altura)).toFixed(1);
        resultado.textContent = valorImc;
        //.textContent === .innerHTML
        // .toFixend = arredondar as casas

        let classificacao = '';
        
        if (valorImc < 17) {
            resultado.innerHTML = " <img src='/imc/muito-abaixo.jpg'>";
        } else if (valorImc >= 17 && valorImc < 18.4) {
            resultado.innerHtml = " <img src='/imc/abaixo-do-peso.jpg'>";
        } else if (valorImc >= 18.5 && valorImc < 24.9) {
            resultado.innerHTML = "<img src='/imc/peso-normal.jpg'>";
        } else if (valorImc >= 25 && valorImc < 29.9) {
            resultado.innerHTML = "<img src='/imc/acima-do-peso.jpg'>";
        } else if (valorImc >= 30 && valorImc < 34.9) {
            resultado.innerHTML = "<img src ='/imc/obesidade1.jpg'>";
        } else if (valorImc >= 35 && valorImc < 39.9) {
            resultado.innerHTML = "<img src ='/imc/obesidade2.jpg'>";
        } else if (valorImc > 40) {
            resultado.innerHTML = "<img src ='/imc/obesidade3.jpg'>";
        }
    } else {
        alert('Preencha todos os campos!!');
    }
}

const refresh = document.querySelector('.refresh');

refresh.addEventListener('click', () => {
    location.reload()
});

somar.addEventListener('click', imc);