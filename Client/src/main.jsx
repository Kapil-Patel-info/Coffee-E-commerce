
import { createRoot } from 'react-dom/client'
import 'react-notifications/lib/notifications.css';
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';


import store from './store.jsx';
import {Provider} from "react-redux";
createRoot(document.getElementById('root')).render(
<Provider store={store}>
 <App />
</Provider>
    
 
)
