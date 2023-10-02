import React, { useState } from 'react';
import {
    Form,
    GridColumn,
    Message,
    Segment,
    Header,
    Button,
} from 'semantic-ui-react';

const FormCadastro = () => {
    const [message, setMessage] = useState('');
    const [visivel, setVisivel] = useState(false);

    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [nascimento, setNascimento] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [celular, setCelular] = useState('');

    const submitForm = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        if (!data) {
            setMessage('Erro ao enviar o formulário');
            setVisivel(true);
        } else {
            setMessage('Formulário enviado com sucesso');
            setVisivel(true);
        }
        console.log(Object.fromEntries(data.entries()));
    };

    const clearForm = () => {
        setNome('');
        setCpf('');
        setNascimento('');
        setEmail('');
        setTelefone('');
        setCelular('');
    };

    return (
        <>
            <GridColumn style={{ maxWidth: 750 }}>
                {visivel ? (
                    <Message floating>
                        <center>{message}</center>
                    </Message>
                ) : (
                    ''
                )}
                <Header textAlign="center">
                    <h1>Formulário de Dados Pessoais</h1>
                </Header>
                <Form onSubmit={submitForm}>
                    <Segment secondary>
                        <Form.Group>
                            <Form.Input
                                type="text"
                                name="nome"
                                label="Nome completo"
                                placeholder="Nome completo"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                                width={8}
                                required
                            />
                            <Form.Input
                                type="text"
                                name="cpf"
                                label="CPF"
                                placeholder="CPF"
                                value={cpf}
                                onChange={(e) => setCpf(e.target.value)}
                                width={8}
                                required
                            />
                            <Form.Input
                                type="date"
                                name="nascimento"
                                label="Data de nascimento"
                                placeholder="Data de nascimento"
                                value={nascimento}
                                onChange={(e) => setNascimento(e.target.value)}
                                width={8}
                                required
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Input
                                type="email"
                                name="email"
                                label="E-mail"
                                placeholder="E-mail"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                width={9}
                                required
                            />
                            <Form.Input
                                type="text"
                                name="telefone"
                                label="Telefone"
                                placeholder="Telefone"
                                value={telefone}
                                onChange={(e) => setTelefone(e.target.value)}
                                width={3}
                                required
                            />
                            <Form.Input
                                type="text"
                                name="celular"
                                label="Celular"
                                placeholder="Celular"
                                value={celular}
                                onChange={(e) => setCelular(e.target.value)}
                                width={4}
                                required
                            />
                        </Form.Group>
                    </Segment>
                    <Segment secondary>
                        <Button type="submit">Salvar</Button>
                        <Button onClick={clearForm}>Limpar</Button>
                    </Segment>
                </Form>
            </GridColumn>
        </>
    );
};

export default FormCadastro;
