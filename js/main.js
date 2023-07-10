const robotron = document.querySelector('#robotron')

robotron.addEventListener("click", () => {
    console.log("Cliquei no robô")
})

function mensagemRobotron(nome) {
    console.log("Olá " + nome)
    console.log("Seja bem-vindo ao Robotron")
}

mensagemRobotron("Usuário")