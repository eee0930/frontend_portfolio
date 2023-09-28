import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RecoilRoot } from 'recoil';
import { HelmetProvider } from 'react-helmet-async';
import { BasicStyle, GlobalStyle } from './styles/globalStyles';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <div>
    <RecoilRoot>
      <HelmetProvider>
        <GlobalStyle />
        <BasicStyle />
        <App />
      </HelmetProvider>
    </RecoilRoot>
  </div>
);
