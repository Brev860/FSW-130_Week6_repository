import {createStore} from 'redux'
import reducers from './reducers/index'


const configuredStore = createStore(
        reducers,
        window.__REDUX_DEVTOOLS_EXTENSION__ / window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__,
        
    )


export default configuredStore