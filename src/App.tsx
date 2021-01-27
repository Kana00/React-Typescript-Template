import { Router } from '@reach/router';
import React from 'react';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/header/Header';
import { ContentSite } from './pages/contentSite/ContentSite';
import { Error404 } from './pages/Error404/Error404';

interface AppProps { }

export function App(props: AppProps) {
  return (
    <div className="Site">
      <Header />
      <div className="Site-content">
        <Router className="content">
          <ContentSite path="/" />
          <Error404 path="*" />
        </Router>
      </div>
      <Footer />
    </div>
  );
}
