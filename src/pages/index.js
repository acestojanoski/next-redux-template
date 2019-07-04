import { Component } from 'react';
import { Container, Row, Col, Button, Alert, ListGroup, ListGroupItem, FormControl } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import actions from '../actions';
import { connect } from 'react-redux';

class HomePage extends Component {
    handleReset = () => {
        const { actions } = this.props;
        actions.apiCallReset('todos');
    }

    handleLoadList = () => {
        const { actions } = this.props;
        actions.apiCall('todos')
            .then(response => {
                console.log('Response: ', response);
            })
            .catch(error => {
                console.log('Error response: ', error);
            });
    }

    handleInputChange = (event) => {
        const { actions } = this.props;
        actions.setValue('form.inputField', event.target.value);
    }

    render() {
        const { state } = this.props;

        let todos = state.getIn(['apiCalls', 'todos', 'data']);

        if (todos) {
            todos = todos.map(todo => (
                <ListGroupItem
                    variant="success"
                    key={todo.get('id')}
                >
                    {todo.get('title')}
                </ListGroupItem>
            ));
        }

        return (
            <Container className="container">
                <Row>
                    <Col>
                        <Alert variant="success">Next redux template</Alert>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button
                            variant="success"
                            onClick={this.handleLoadList}
                        >
                            Load List
                        </Button>
                        <Button
                            className=" not-first-button-in-a-row"
                            variant="warning"
                            onClick={this.handleReset}
                        >
                            Reset
                        </Button>
                    </Col>
                    <Col>
                        <FormControl
                            type="text"
                            placeholder="Enter something"
                            onChange={this.handleInputChange}
                            value={state.getIn(['form', 'inputField'])}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Alert
                            variant="info"
                            style={{
                                marginTop: '2%',
                                display: state.getIn(['form', 'inputField']) === ''
                                    ? 'none'
                                    : ''
                            }}
                        >
                            {state.getIn(['form', 'inputField'])}
                        </Alert>
                    </Col>
                </Row>
                <Row className="todos-list">
                    <Col>
                        <ListGroup>
                            {todos}
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        );
    }
};

const mapStateToProps = (state) => {
    return { state }
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
