

import React from 'react';
import propTypes from 'prop-types'
import Head from 'next/head';
import { ThemeProvider } from '@mui/material';
import {CssBaseline} from '@mui/material';
import theme from '../src/theme';
import { AppProps } from 'next/app';
import TemplateDefault from '../src/templates/Default'

export default function MyApp(props: AppProps) {
    const { Component, pageProps } = props

    return (
        <React.Fragment>
            <Head>
                <title>Listly</title>
                <link rel="icon" href="/images/clipboard.ico" />
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
                <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap" rel="stylesheet" />
            </Head>
            <TemplateDefault>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Component {...pageProps} />
                </ThemeProvider>
            </TemplateDefault>
        </React.Fragment>
    )
}

MyApp.propTypes = {
    Component: propTypes.elementType.isRequired,
    pageProps: propTypes.object.isRequired
}