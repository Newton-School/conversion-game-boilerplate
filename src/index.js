import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from '@reach/router';
import { ModalFooter } from 'react-bootstrap';
import Header from './Header';
import Home from './Home';
import Single from './Single';
import * as serviceWorker from './serviceWorker';
import './tailwind.generated.css';

const Root = ({ children }) => (
  <>
    <Header />
    {children}
    <ModalFooter className='bottom-sticky' style={{position:'sticky', bottom:'0px', backgroundColor:'purple', color:'white'}}>
      Conversion game footer
    </ModalFooter>
   
  </>
);

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Root path="/">
        <Home path="/" />
        {['length', 'mass', 'volume', 'time'].map(path => (
          <Single key={path} path={`/${path}`} />
        ))}
        <Single default />
      </Root>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
