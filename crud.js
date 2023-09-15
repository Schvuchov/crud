let mensagem
let menu

let marca = []
let nome = []
let valor = []

let criarNome, criarMarca, criarValor

let indiceDeletar
let itemDeletar

let indiceEditar
let itemEditar
let listaEditar
let novoNome, novoMarca, novoValor

let listagem = ''


function mensagemInicial() {
    mensagem = 'Bem-vindo ao sistema CRUD. Aqui é possível criar, ler, atualizar e deletar produtos. Siga as opções desejadas no menu.'
    alert(mensagem)
    menuCrud()
}
    
function cadastro(){
    do{
        criarNome = prompt('Insira um nome único para o produto')
    }while(nome.includes(criarNome) == true)

    nome.push(criarNome)

    criarMarca = prompt('Insira a marca do produto')
    marca.push(criarMarca)

    do{
        criarValor = Number(prompt('Insira o valor do produto'))
    }while(criarValor <= 0)

    valor.push(criarValor)

    alert(`Você adicionou o produto: \n Nome: ${criarNome} Marca: ${criarMarca} Valor: ${criarValor}`)
}

function deletar(){
    itemDeletar = prompt('Qual o nome do produto a ser deletado?')
    indiceDeletar = nome.indexOf(itemDeletar)
    alert(`Você deletou o produto: \n Nome: ${nome[indiceDeletar]} Marca: ${marca[indiceDeletar]} Valor: ${valor[indiceDeletar]}`)

    nome.splice(indiceDeletar,1)
    marca.splice(indiceDeletar,1)
    valor.splice(indiceDeletar,1)

}

function editar(){
    do{
        itemEditar = prompt('Qual o nome do produto a ser editado?')
    } while(nome.includes(itemEditar) == false)
    
    indiceEditar = nome.indexOf(itemEditar)

    listaEditar = prompt('Deseja editar \nA)nome \nB)marca \nC)valor').toUpperCase()
    switch(listaEditar){
        case 'A':
            do{
                novoNome = promp('Novo nome único para o produto')

            }while(nome.includes(novoNome) == true)

            nome.splice(indiceEditar,1,novoNome)
            alert(`Produto editado Nome: ${nome[indiceEditar]} Marca: ${marca[indiceEditar]} Valor: ${valor[indiceEditar]}`)
            break
        
        case 'B':
            novoMarca = prompt('Nova marca do produto')
            marca.splice(indiceEditar,1,novoMarca)
            alert(`Produto editado Nome: ${nome[indiceEditar]} Marca: ${marca[indiceEditar]} Valor: ${valor[indiceEditar]}`)
            break

        case 'C':
            do{
                novoValor = Number(prompt('Digite o valor do produto'))

            }while(novoValor <= 0)
            
            valor.splice(indiceEditar,1,novoValor)
            alert(`Produto editado Nome: ${nome[indiceEditar]} Marca: ${marca[indiceEditar]} Valor: ${valor[indiceEditar]}`)
            break

    }    
  
}


function listar(){
    for(i=0; i<nome.length; i++){
        listagem += `Produto${i} --> Nome: ${nome[i]}, Marca: ${marca[i]}, Valor: ${valor[i]} \n `
    }
    alert(listagem)
}


function menuCrud(){
    do{
        menu = prompt('Selecione a opção: \n A) Cadastrar \n B) Deletar \n C) Editar \n D) Listar \n E) Sair').toUpperCase()

        switch(menu){
            case 'A':
                cadastro()
                break
            case 'B':
                deletar()
                break
            case 'C':
                editar()
                break
            case 'D':
                listar()
                break
            case 'E':
                alert('BYE BYE')
                break   
        }

    } while(menu != 'E')
}

mensagemInicial()