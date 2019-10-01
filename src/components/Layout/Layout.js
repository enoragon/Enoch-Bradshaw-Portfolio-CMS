import React from 'react';

import Header from '../Header';
import Footer from '../Footer/Footer';

import { root, content, footer } from './Layout.module.css';

const Layout = ({ children }) => (
    <div className={root}>
        <div className={content}>
            <Header />
            <main id="main">
                {children}
            </main>
        </div>
        <Footer className={footer}/>
    </div>
);

export default Layout;
