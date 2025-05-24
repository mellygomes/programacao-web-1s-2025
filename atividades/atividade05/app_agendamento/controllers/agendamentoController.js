function getIndexView(req, res) {
    res.render('index.html')
}
function postAgendarConsulta(req, res) {
    let dados_consulta = req.body
    let erro_form = false
    let campos_invalidos = []
    let datas_invalidas = []

    const nascimento_date = new Date(dados_consulta.nascimento)
    const consulta_date = new Date(dados_consulta.data)
    const hoje = new Date()


    if (!dados_consulta.data || dados_consulta.data.trim().length === 0) {
        erro_form = true
        campos_invalidos.push("Data da consulta")
    }

    if (!dados_consulta.nascimento || dados_consulta.nascimento.trim().length === 0) {
        erro_form = true
        campos_invalidos.push("Data de nascimento")
    }

    if (nascimento_date > hoje) {
        erro_form = true
        datas_invalidas.push("Data de nascimento")
    }

    if (consulta_date < hoje) {
        erro_form = true
        datas_invalidas.push("Data da consulta")
    }

    if (!dados_consulta.nome || dados_consulta.nome.trim().length === 0) {
        erro_form = true
        campos_invalidos.push("Nome")
    }
    
    if (!dados_consulta.cpf || dados_consulta.cpf.trim().length === 0) {
        erro_form = true
        campos_invalidos.push("CPF")
    }

    if (!dados_consulta.cep || dados_consulta.cep.trim().length === 0) {
        erro_form = true
        campos_invalidos.push("CEP")
    }

    if (!dados_consulta.sobrenome || dados_consulta.sobrenome.trim().length === 0) {
        erro_form = true
        campos_invalidos.push("Sobrenome")
    }

    if (!dados_consulta.telefone || dados_consulta.telefone.trim().length === 0) {
        erro_form = true
        campos_invalidos.push("Telefone")
    }

    if (!dados_consulta.endereco || dados_consulta.endereco.trim().length === 0) {
        erro_form = true
        campos_invalidos.push("Endereço")
    }

    if (!dados_consulta.clinica || dados_consulta.clinica.trim().length === 0) {
        erro_form = true
        campos_invalidos.push("Clínica")
    }

    if (!dados_consulta.especialidade || dados_consulta.especialidade.trim().length === 0) {
        erro_form = true
        campos_invalidos.push("Horário")
    }

    const horarioStr = String(dados_consulta.horario).trim();

    if (!horarioStr || horarioStr === "0") {
        erro_form = true;
        campos_invalidos.push("Horário");
    }

    res.render('index.html', {erro_form, campos_invalidos, datas_invalidas, dados_consulta})
}

// function postAgendarConsulta(req, res) {
//     postValidarDados(req, res)
// }


module.exports = {
    getIndexView,
    postAgendarConsulta
}