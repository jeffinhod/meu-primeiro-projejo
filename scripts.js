
let botao = document.getElementById("botao")

let inputmoedas = document.getElementById("input-moedas")
let select = document.getElementById("select-moedas")



async function converterMoedas() {

    let moedas = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL").then(function (resposta) {

        return resposta.json()

        //esta função busca dados de uma api externa
        //estudar e aprofundar este conhecimento

    })

    let dolar = moedas.USDBRL.high     //pegando os dados diretos na api
    let euro = moedas.EURBRL.high     //pegando os dado direto na api







    let inputValorEmReais = Number(document.getElementById("input").value)

    let textoReal = document.getElementById("texto-real")

    if (select.value === "dolar americano") {

        let valorEmDolares = inputValorEmReais / dolar
        inputmoedas.innerHTML = valorEmDolares.toLocaleString("en-US", { style: "currency", currency: "USD" })
    }


    if (select.value === "euro") {
        let valorEmEuros = inputValorEmReais / euro

        inputmoedas.innerHTML = valorEmEuros.toLocaleString("de-DE", { style: "currency", currency: "EUR" })


    }


    textoReal.innerHTML = inputValorEmReais.toLocaleString("pt-br", { style: "currency", currency: "BRL" })


}

// essa função troca bandeira das moedas
function trocaDeMoeda() {
    let textoMoedas = document.getElementById("texto-moedas")
    let bandeiraMoedas = document.getElementById("bandeira-moedas")

    if (select.value === "dolar americano") {

        textoMoedas.innerHTML = "dolar americano"
        bandeiraMoedas.src = "img/estados unidos (1).png"

    }

    if (select.value === "euro") {
        textoMoedas.innerHTML = "euro"
        bandeiraMoedas.src = "./img/euro.png"


    }

    converterMoedas()

}



select.addEventListener("change", trocaDeMoeda) //evento que escuta o select
botao.addEventListener("click", converterMoedas)//evento que escuta o click
