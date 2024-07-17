import ReactDOM from 'react-dom/client'
import './index.css'
import App from './app/App'
import { Provider } from 'react-redux'
import { appStore } from './app/store'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={appStore}>
    <App />
  </Provider>
)
