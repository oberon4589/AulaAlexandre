function dadosPessoais(props) {
    return (
        <div>
            <p>Nome: {props.nome}</p>
            <p>Cpf: {props.cpf}</p>
            <p>Data de nascimento: {props.dataNascimento}</p>
            <p>Logradouro: {props.endereco.logradouro}</p>
            <p>Número: {props.endereco.numero}</p>
            <p>Bairro: {props.endereco.bairro}</p>
            <p>Cidade: {props.endereco.cidade}</p>
            <p>Estado: {props.endereco.estado}</p>
            <p>Cep: {props.endereco.cep}</p>
        </div>
    );
}

export default dadosPessoais;
