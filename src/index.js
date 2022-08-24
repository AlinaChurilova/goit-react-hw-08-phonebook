import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'App';
import './index.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <Provider store={store}>
         <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter basename="/goit-react-hw-08-phonebook/">
               <App />
            </BrowserRouter>
         </PersistGate>
      </Provider>
   </React.StrictMode>
)



// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import  App   from 'App';
// import './index.css';
// import store from './redux/store';
// import { Provider } from 'react-redux';


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <Provider store={store}>
//        <React.StrictMode>
//           <App />
//         </React.StrictMode>
//    </Provider>
  
// );