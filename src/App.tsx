import React, { useState } from 'react';
import { Header } from './components/header/Header';
import { ContentSite } from './pages/contentSite/ContentSite';
import { Footer } from './components/Footer/Footer';
import { Error404 } from './pages/Error404/Error404';
import { Router } from '@reach/router';

interface AppProps { }

export function App(props: AppProps) {
  const [aState, setAState] = useState(0);
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
