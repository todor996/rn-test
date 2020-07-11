import {createStore, applyMiddleware} from 'redux';  
import rootReducer from '../reducers/rootReducer';  
import thunk from 'redux-thunk';

import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import AsyncStorage from '@react-native-community/async-storage';


// export default function configureStore() {  
//   	return createStore(
// 		rootReducer,
// 		{},
//     	applyMiddleware(thunk)
//   	);
// }

const persistConfig = {
	key: 'root',
	storage: AsyncStorage,
	blacklist: ['search'] 
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(
	persistedReducer,
	{},
	applyMiddleware(thunk)
)
const persistor = persistStore(store)
export {store,persistor}