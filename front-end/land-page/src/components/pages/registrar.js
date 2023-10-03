import { useRef, useState, useEffect } from 'react';
import {
    faCheck,
    faTimes,
    faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import './registrar.css';

const USUARIO_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const SENHA_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/register';

const Registrar = () => {
    const userRef = useRef();
    const errRef = useRef();
    const [usuario, setUsuario] = useState('');
    const [validaNome, setValidaNome] = useState(false);
    const [usuarioFoco, setUsuarioFoco] = useState(false);
    const [senha, setSenha] = useState('');
    const [validaSenha, setValidaSenha] = useState(false);
    const [senhaFoco, setSenhaFoco] = useState(false);
    const [confereSenha, setConfereSenha] = useState('');
    const [validaConfere, setValidaConfere] = useState(false);
    const [confereFoco, setConfereFoco] = useState(false);
    const [errMsg, setErrMsg] = useState('');
    const [successo, setSucesso] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setValidaNome(USUARIO_REGEX.test(usuario));
    }, [usuario]);

    useEffect(() => {
        setValidaSenha(SENHA_REGEX.test(senha));
        setValidaConfere(senha === confereSenha);
    }, [senha, confereSenha]);

    useEffect(() => {
        setErrMsg('');
    }, [usuario, senha, confereSenha]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const v1 = USUARIO_REGEX.test(usuario);
        const v2 = SENHA_REGEX.test(senha);
        if (!v1 || !v2) {
            setErrMsg('Entrada inválida');
            return;
        }
        try {
            const response = await axios.post(
                REGISTER_URL,
                JSON.stringify({ usuario, senha }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true,
                }
            );
            console.log(response?.data);
            console.log(response?.accessToken);
            console.log(JSON.stringify(response));
            setSucesso(true);
            setUsuario('');
            setSenha('');
            setConfereSenha('');
        } catch (err) {
            if (!err?.response) {
                setErrMsg('Servidor não responde');
            } else if (err.response?.status === 409) {
                setErrMsg('Usuário já existe');
            } else {
                setErrMsg('Falha ao registrar usuário');
            }
            errRef.current.focus();
        }
    };

    return (
        <>
            {successo ? (
                <section>
                    <h1>Successo!</h1>
                    <p>
                        <button onClick={() => console.log('Button clicked!')}>
                            Inscreva-se
                        </button>
                    </p>
                </section>
            ) : (
                <section>
                    <p
                        ref={errRef}
                        className={errMsg ? 'errmsg' : 'offscreen'}
                        aria-live="assertive"
                    >
                        {errMsg}
                    </p>
                    <h2>Novo Usuário</h2>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">
                            Usuário:
                            <FontAwesomeIcon
                                icon={faCheck}
                                className={validaNome ? 'valid' : 'hide'}
                            />
                            <FontAwesomeIcon
                                icon={faTimes}
                                className={
                                    validaNome || !usuario ? 'hide' : 'invalid'
                                }
                            />
                        </label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUsuario(e.target.value)}
                            value={usuario}
                            required
                            aria-invalid={validaNome ? 'false' : 'true'}
                            aria-describedby="uidnote"
                            onFocus={() => setUsuarioFoco(true)}
                            onBlur={() => setUsuarioFoco(false)}
                        />
                        <p
                            id="uidnote"
                            className={
                                usuarioFoco && usuario && !validaNome
                                    ? 'instructions'
                                    : 'offscreen'
                            }
                        >
                            <FontAwesomeIcon icon={faInfoCircle} />
                            de 4 a 24 caracteres.
                            <br />
                            Deve começar com uma letra.
                            <br />
                            Permite números e caracteres especiais.
                        </p>
                        <label htmlFor="password">
                            Senha:
                            <FontAwesomeIcon
                                icon={faCheck}
                                className={validaSenha ? 'valid' : 'hide'}
                            />
                            <FontAwesomeIcon
                                icon={faTimes}
                                className={
                                    validaSenha || !senha ? 'hide' : 'invalid'
                                }
                            />
                        </label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setSenha(e.target.value)}
                            value={senha}
                            required
                            aria-invalid={validaSenha ? 'false' : 'true'}
                            aria-describedby="pwdnote"
                            onFocus={() => setSenhaFoco(true)}
                            onBlur={() => setSenhaFoco(false)}
                        />
                        <p
                            id="pwdnote"
                            className={
                                senhaFoco && !validaSenha
                                    ? 'instructions'
                                    : 'offscreen'
                            }
                        >
                            <FontAwesomeIcon icon={faInfoCircle} />
                            De 8 a 24 caracteres.
                            <br />
                            Deve ter alguma letra maiúscula, um número e um
                            caractere especial.
                            <br />
                            Caracteres permitidos:{' '}
                            <span aria-label="exclamation mark">!</span>{' '}
                            <span aria-label="at symbol">@</span>{' '}
                            <span aria-label="hashtag">#</span>{' '}
                            <span aria-label="dollar sign">$</span>{' '}
                            <span aria-label="percent">%</span>
                        </p>
                        <label htmlFor="confirm_pwd">
                            Confirmar a Senha:
                            <FontAwesomeIcon
                                icon={faCheck}
                                className={
                                    validaConfere && confereSenha
                                        ? 'valid'
                                        : 'hide'
                                }
                            />
                            <FontAwesomeIcon
                                icon={faTimes}
                                className={
                                    validaConfere || !confereSenha
                                        ? 'hide'
                                        : 'invalid'
                                }
                            />
                        </label>
                        <input
                            type="password"
                            id="confirm_pwd"
                            onChange={(e) => setConfereSenha(e.target.value)}
                            value={confereSenha}
                            required
                            aria-invalid={validaConfere ? 'false' : 'true'}
                            aria-describedby="confirmnote"
                            onFocus={() => setConfereFoco(true)}
                            onBlur={() => setConfereFoco(false)}
                        />
                        <p
                            id="confirmnote"
                            className={
                                confereFoco && !validaConfere
                                    ? 'instructions'
                                    : 'offscreen'
                            }
                        >
                            <FontAwesomeIcon icon={faInfoCircle} />
                            Deve corresponder ao primeiro campo de entrada de
                            senha.
                        </p>
                        <button
                            disabled={
                                !validaNome || !validaSenha || !validaConfere
                                    ? true
                                    : false
                            }
                        >
                            Inscrever
                        </button>
                    </form>
                    <p>
                        Usuário cadastrado?&nbsp;&nbsp;
                        <span className="line">
                            <a href="/login">Faça o login</a>
                        </span>
                    </p>
                </section>
            )}
        </>
    );
};

export default Registrar;
