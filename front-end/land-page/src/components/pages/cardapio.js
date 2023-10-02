import React from 'react';
import { Button, Card, Image, Segment, Grid } from 'semantic-ui-react';
import './cardapio.css';

const cardapio = () => {
    return (
        <div>
            <h1>Cardápio</h1>
            <Segment>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={5}>
                            <Card>
                                <Card.Content>
                                    <Image
                                        floated="center"
                                        size="medium"
                                        src="/img/prato-01.png"
                                    />
                                    <Card.Header className="title">
                                        Pratos naturais
                                    </Card.Header>
                                </Card.Content>
                                <Card.Content extra>
                                    <div className="ui two buttons">
                                        <Button basic color="green">
                                            Fazer pedido
                                        </Button>
                                        <Button basic color="red">
                                            Cancelar
                                        </Button>
                                    </div>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                        <Grid.Column width={5}>
                            <Card>
                                <Card.Content>
                                    <Image
                                        floated="center"
                                        size="medium"
                                        src="/img/prato-02.png"
                                    />
                                    <Card.Header className="title">
                                        Saladas
                                    </Card.Header>
                                </Card.Content>
                                <Card.Content extra>
                                    <div className="ui two buttons">
                                        <Button basic color="green">
                                            Fazer pedido
                                        </Button>
                                        <Button basic color="red">
                                            Cancelar
                                        </Button>
                                    </div>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                        <Grid.Column width={5}>
                            <Card>
                                <Card.Content>
                                    <Image
                                        floated="center"
                                        size="medium"
                                        src="/img/prato-03.png"
                                    />
                                    <Card.Header className="title">
                                        Carnes
                                    </Card.Header>
                                </Card.Content>
                                <Card.Content extra>
                                    <div className="ui two buttons">
                                        <Button basic color="green">
                                            Fazer pedido
                                        </Button>
                                        <Button basic color="red">
                                            Cancelar
                                        </Button>
                                    </div>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        </div>
    );
};

export default cardapio;
