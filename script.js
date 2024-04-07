
//objetivo
//Buscar um pokemon na API pokeapi
// https://pokeapi.co/api/v2/pokemon/{id OU nome}
//exemplo: GET em https://pokeapi.co/api/v2/pokemon/6
// Buscará os dados do Charizard na API
// Como fazer:
// Entrada de dados:
// 1 - Pegar o ID do Pokemon no input do HTML
// Processamento:
// 2 - Complementar a URL com o ID do Pokemon
// 3 - Fazer a requisição para a API com um fetch
// Saída de Dados:
// 3.1 - Pegar a requisição e transformar em um JSON (objeto Javascript)
// 4 - Pegar o nome e a imagem do Pokemon e mostrar na tela

async function executar() {

    const input = document.getElementById("idPokemon")
    const idPokemon = input.value
    console.log(idPokemon)

    if (!idPokemon) {
        document.getElementById("validacao").innerText = "Digite um ID válido!"
        document.getElementById("validacao").style.display = "block"
        document.getElementById("imagemPokemon").src = ""
        document.getElementById("nomePokemon").name = "#####"
        return
    }

    document.getElementById("validacao").style.display = "none"

    const url = "https://pokeapi.co/api/v2/pokemon/" + idPokemon

    const resposta = await fetch(url)
    const pokemon = await resposta.json()
    console.log(resposta)
    console.log(pokemon.name)
    console.log(pokemon.sprites.front_default)


    const imagemPokemon = document.getElementById("imagemPokemon")
    imagemPokemon.src = pokemon.sprites.front_default

    const divNome = document.getElementById("nomePokemon")
    divNome.innerText = pokemon.name

    console.log(pokemon.types)
    let tipos = ""
    for (let i = 0; i < pokemon.types.length; i++) {
        let tipoAtualDaVolta = pokemon.types[i].type.name
        tipos += `<div class ="tipo ${tipoAtualDaVolta}">${tipoAtualDaVolta}</div>`
    }

    console.log(tipos)

    const divTipos = document.getElementById("tiposPokemon")
    divTipos.innerHTML = tipos

    let golpes = ""
    for (let i = 0; i < pokemon.moves.length; i++) {
        let golpeAtualDaVolta = pokemon.moves[i].move.name
        golpes += `<div class="golpe">${golpeAtualDaVolta}</div>`
    }

    const divGolpes = document.getElementById("golpesPokemon")
    divGolpes.innerHTML = golpes

}