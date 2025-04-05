let itens = []
let i = 0

function adicionar(item) {
    let item_valido = true

    if(validar_item_a_cadastrar(item)) {
        itens.push(item)
    } else {
        item_valido = false
    }

    return item_valido
}

function listar() {
    return itens
}

function editar(id, qtd) {
    let edit = true

    if ((is_numerico(id) == false) || (is_id_cadastrado(id) == false) || (is_numerico(qtd) == false) || (qtd < 0) || (id < 0)) {
        return false
    }

    itens.forEach(item_cadastrado => {
        if(item_cadastrado.id == id) {
            item_cadastrado.qtd = qtd

            edit = true
        }
    })

    return edit
}

function remover(id) {
    let remove = true

    if ((is_numerico(id) == false) || (is_id_cadastrado(id) == false) || (id < 0)) {
        return false
    }

    itens.forEach(item_cadastrado => {
        if(item_cadastrado.id == id) {
            itens.pop(item_cadastrado)
            remove = true
        }
    })

    return remove
}

function is_numerico(n) {
    if (!isNaN(n) || n != null) {
        return true
    } else {
        return false
    }
}

function is_id_cadastrado(id) {
    let item_valido = false

    itens.forEach(item_cadastrado => {
        if(id == item_cadastrado.id) {
            item_valido = true
        }
    });

    return item_valido
}

function validar_item_a_cadastrar(item) {
    item_valido = true

    if (!is_numerico(item.id) || item.id < 0) {
        item_valido = false
    }

    if (item.nome.length == 0) {
        item_valido = false
    }

    if (!is_numerico(item.qtd) || item.qtd <= 0) {
        item_valido = false
    }

    if (is_id_cadastrado(item.id)) {
        item_valido = false
    }

    return item_valido
}

module.exports = {adicionar, listar, editar, remover}