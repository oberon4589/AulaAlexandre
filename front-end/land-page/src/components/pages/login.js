import React, { useState } from 'react';
import {
    Message,
    Grid,
    Header,
    Form,
    Segment,
    Button,
} from 'semantic-ui-react';
import './login.css';
import { Link } from 'react-router-dom';
import Api from '../../services/api';

function Login() {
    const [message, setMessage] = useState('');
    const [visivel, setVisivel] = useState(false);
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
    const SubmitForm = async (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        if (!data) {
            setMessage('Erro ao enviar dados');
        }
        setVisivel(true);

        try {
            await Api.post('/login', data);
        } catch (error) {
            setMessage('Erro ao enviar dados: ' + error);
        }
    };
    return (
        <div className="container">
            <Grid.Column style={{ maxWidth: 550 }}>
                {visivel ? (
                    <Message floating>
                        <center>{message}</center>
                    </Message>
                ) : (
                    ''
                )}
                <Header textAlign="center">
                    <h2>Login de Usuário</h2>
                </Header>
                <Form onSubmit={SubmitForm}>
                    <Segment secondary>
                        <Form.Group>
                            <Form.Input
                                type="text"
                                name="login"
                                label="Login"
                                value={login}
                                onChange={(e) => setLogin(e.target.value)}
                                width={8}
                                required
                            ></Form.Input>
                        </Form.Group>
                        <Form.Group>
                            <Form.Input
                                type="password"
                                name="senha"
                                label="Senha"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                                width={8}
                                required
                            ></Form.Input>
                        </Form.Group>
                        <Form.Group>
                            <Button primary>Login</Button>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Link>Novo Usuário?</Link>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Link>Esqueceu a senha?</Link>
                        </Form.Group>
                    </Segment>
                </Form>
            </Grid.Column>
        </div>
    );
}
export default Login;
