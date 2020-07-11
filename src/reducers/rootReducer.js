

import {combineReducers} from 'redux';  
import PageMobileAppReducer from './PageMobileAppReducer';
import SearchReducer from './SearchReducer';
import ChatReducer from './ChatReducer';
import ListingReducer from './ListingReducer';
import UserReducer from './UserReducer';
import PostReducer from './PostReducer';
import MemberReducer from './MemberReducer';
import LoadingReducer from './LoadingReducer';

const rootReducer = combineReducers({ 
	chats:ChatReducer,
	listings:ListingReducer,
	pageMobileApp:PageMobileAppReducer,
	members:MemberReducer,
	users:UserReducer,
	search:SearchReducer,
	posts:PostReducer,
	loading:LoadingReducer
})

export default rootReducer; 