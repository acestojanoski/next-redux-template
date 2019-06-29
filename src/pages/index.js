import { Component } from 'react';
import { Container, Row, Col, Button, Alert, ListGroup, ListGroupItem } from 'react-bootstrap';
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
        actions.apiCall('todos');
    }

    render() {
        const { exampleApp } = this.props;

        let todos = exampleApp.getIn(['apiCalls', 'todos', 'data']);

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
            <Container style={{ marginTop: '5%' }}>
                <Row>
                    <Col>
                        <Alert variant="success">Next redux template</Alert>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button variant="success" onClick={this.handleLoadList}>Load List</Button>
                        <Button style={{marginLeft: '10px'}} variant="warning" onClick={this.handleReset}>Reset</Button>
                    </Col>
                </Row>
                <Row style={{marginTop: '5%', marginBottom: '5%'}}>
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
    return {
        exampleApp: state.exampleApp
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
