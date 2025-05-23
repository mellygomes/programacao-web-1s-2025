function getIndexView(req, res) {
    res.render('index.html')
}
function postAgendarConsulta(req, res) {
    let dados_consulta = req.body
    let erro_form = false
    let campos_invalidos = []
    let datas_invalidas = []

    const today = new Date()
    const day = String(today.getDate()).padStart(2, '0')
    const month = String(today.getMonth() + 1).padStart(2, '0')
    const year = today.getFullYear()

    let nascimento_str = String(dados_consulta.nascimento)
    let data_str = String(dados_consulta.data)

    const current_date = `${day}/${month}/${year}`;

    console.log(dados_consulta.data)

    if (dados_consulta.nome.length == 0) {
        erro_form = true
        campos_invalidos.push("Nome")
    }
    
    if (dados_consulta.cpf.length == 0) {
        erro_form = true
        campos_invalidos.push("CPF")
    }

    if (dados_consulta.sobrenome.length == 0) {
        erro_form = true
        campos_invalidos.push("Sobrenome")
    }

    if (nascimento_str.length == 0) {
        erro_form = true
        campos_invalidos.push("Data de nascimento")
    }

    if (dados_consulta.nascimento > current_date) {
        erro_form = true
        datas_invalidas.push("Data da nascimento")
    }

    if (dados_consulta.telefone.length == 0) {
        erro_form = true
        campos_invalidos.push("Telefone")
    }

    if (data_str.length == 0) {
        erro_form = true
        campos_invalidos.push("Data da consulta")
    }

    if (dados_consulta.data < current_date) {
        erro_form = true
        datas_invalidas.push("Data da consulta")
    }

    if (dados_consulta.clinica.length == 0) {
        erro_form = true
        campos_invalidos.push("Clínica")
    }

    if (dados_consulta.especialidade.length == 0) {
        erro_form = true
        campos_invalidos.push("Especialidade")
    }

    // if (dados_consulta.horario == 0) {
    //     erro_form = true
    //     campos_invalidos.push("Horário")
    // }

    res.render('index.html', {erro_form, campos_invalidos, datas_invalidas, dados_consulta})
}

// function postAgendarConsulta(req, res) {
//     postValidarDados(req, res)
// }


module.exports = {
    getIndexView,
    postAgendarConsulta
}