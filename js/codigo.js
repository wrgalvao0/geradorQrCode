let botao = document.getElementById('botao')
botao.addEventListener('click', () => {
    botao.textContent = 'Gerando...'
    let container = document.getElementById('container-principal')
    let existeImg = container.querySelector('img')
    if(existeImg){
        container.removeChild(existeImg)
    }
    let url = document.getElementById('url')
    console.log(url.value)
    let img = document.createElement('img')
    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${url.value}}`
    console.log(img)
    container.appendChild(img)
    img.onload  = () =>{
        botao.textContent = 'Código Criado!'
    }
})