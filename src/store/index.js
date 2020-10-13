import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { authReducer, mainReducer } from './reducers';
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage';
import * as actions from './actions';

const rootReducer = combineReducers({
    authState: authReducer,
    mainState: mainReducer
});

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);
const middleware = applyMiddleware(thunk,logger);
const store = createStore(persistedReducer, middleware);
const persistor = persistStore(store);

export default store;

export { persistor, actions };
