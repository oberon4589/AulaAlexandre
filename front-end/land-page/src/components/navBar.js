import React from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const navBar = () => {
    return (
        <Segment inverted attached>
            <Menu inverted secondary size="massive">
                <Menu.Item>
                    <Link to="/">
                        Home FOOD & BEER{' '}
                        <i className="fa-solid fa-utensils"></i>
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/cardapio">Cardapio</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/contato">Contato</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/sobre">Sobre Nós</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/inscreva">Inscreva-se</Link>
                </Menu.Item>
            </Menu>
        </Segment>
    );
};

export default navBar;
