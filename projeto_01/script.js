var nome = "Victor";

// muda a qualquer momento
if (nome === "Victor") {
    var profissao = "professor";
    console.log(profissao);
}

// muda apenas no escopo
if (nome === "Vicotr") {
    let cargo = "CEO";
    console.log(cargo);
}

// Não muda em nenhum momento
if (nome === "Victor") {
    const cargos = "CEOs";
    // cargo += "Professor"
    console.log(cargos);
}

const sobrenome = "Sobrenome";
