//Variáveis
let contador = 1

let aleatorio = Math.round(Math.random() * 10)

//função callback (Função que é passada como argumento de outra função e que em algum momento será chamada)
function buttonTryClick(e){
    e.preventDefault() // não faça o padrão do formulário que é de atualizar a página automaticamente após pressionar um botão

    let inputNumber = document.querySelector("#inputNumber").value

    console.log(inputNumber , aleatorio, contador)

    if(inputNumber==aleatorio){
        document.querySelector("#screen1").classList.toggle("hide")
        document.querySelector(".screen2 h2").innerText = `Acertou em ${contador} tentativas!`
        document.querySelector("#screen2").classList.toggle("hide")
    }

    contador +=1
}


//Eventos
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")


btnTry.addEventListener("click" , buttonTryClick)


