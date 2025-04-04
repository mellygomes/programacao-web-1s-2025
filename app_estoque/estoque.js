let itens = []

function adicionar(item) {
    let item_valido = true

    if(validar_item_a_cadastrar(item)) {
        itens.push(item)
    }

    return item_valido
}

function listar() {
    return itens
}

function editar(id, tqd) {
    if (!is_numerico(id) || !is_id_cadastrado(id) || !is_numerico(qtd) || qtd <= 0) {
        return false
    }

    itens.forEach(item_cadastrado => {
        if(item_cadastrado.id == id) {
            item_cadastrado = qtd
        }

        return true
    })
}

function is_numerico(n) {
    if (isNaN(n) || n == null) {
        return true
    } else {
        return false
    }
}

function is_id_cadastrado(id) {
    let item_valido = false

    itens.array.forEach(item_cadastrado => {
        if(item.id == item_cadastrado) {
            item_valido = falso
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

    if (!is_id_cadastrado) {
        item_valido = false
    }

    return item_valido
}

module.exports = {adicionar, listar, editar}