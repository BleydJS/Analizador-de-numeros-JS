let num = document.querySelector("input#fnum")
let lista = document.querySelector('select#flista')
let res = document.querySelector ('div#res')
let valores = []


function isNumero(n) {
    if( Number(n)  >=1  &&  Number(n) <= 100 ) {
        return true
    }   else  {
        return false
    }

}


function inLista (n, l) {
    if ( l.indexOf (Number(n)) != -1 ) {
        return true
    }   else {
        return false
    }

}


// trocar o n e o l pelas variaveis direto

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {   // se o numero for realmente um numero E ele n estiver na lista
        valores.push(Number(num.value))           //adicionar elementos em um vetor

        let item = document.createElement('option')
        item.text = `valor ${num.value} adicionado` //essas 3 linhas é de criar um elemento e pôr dentro do select
        lista.appendChild(item)

        res.innerHTML = ''                       //depois de clicar em adicionar o texto embaixo deve ser limpo.
}   else {
    window.alert ('Valor invalido, ou ja encontrado na lista')
}
num.value = ''                                   // é colocado depois das funcoes e if pq dando certo ou errado o valor de num vai apagar
num.focus()                                     // onde o clique deve piscar.

}


function finalizar() {
    if (valores.length == 0){
        window.alert("Adicione valores antes de finalizar")
    }   else {

        let tot = valores.length
        let soma = 0
        let media = 0
        let menor =  Math.min(...valores)
        let maior =  Math.max(...valores)

        for(let pos in valores){        // pos é uma variavel qualquer.
            soma += valores[pos]        //lê-se "o valor da soma vai receber ela + o valor da primeira posicao"
        
        }

        media = soma / tot

        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo, temos ${tot} numeros cadastrados.</p>`
        res.innerHTML += `<p>O Maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
        res.innerHTML += `<p>A media de todos os valores digitados é ${media}</p>`


    }
}


