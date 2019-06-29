import React from 'react'
import { Provider } from "react-redux";
import App, { Container } from "next/app";
import withRedux from "next-redux-wrapper";
import configureStore from "../store/configure-store";
import 'bootstrap/dist/css/bootstrap.min.css';

class ExampleApp extends App {

    static async getInitialProps({ Component, ctx }) {
        return {
            pageProps: {
                // Call page-level getInitialProps
                ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
            }
        };
    }

    render() {
        const { Component, pageProps, store } = this.props;
        return (
            <Container>
                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>
            </Container>
        );
    }
};

export default withRedux(
    configureStore, {
        debug: true
    }
)(ExampleApp);
