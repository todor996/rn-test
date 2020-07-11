export default{
	loading:false,
	search:{
		tags:[],
		cat:'',
		price:'',
		orderBy:'',
		sortBy:''
	},
	pageMobileApp:[],
	chats:{
		contacts: [  
			// {
			// 	cid: 1,
			// 	name: 'Admin' 
			// },
			// {
			// 	cid: 2,
			// 	name: 'Dev2' 
			// }
		],
		replies: [
			// {
			// 	crid: 1,
			// 	avatar: '<img alt="test" src="http://1.gravatar.com/avatar/1aedb8d9dc4751e229a335e371db8058?s=150&amp;d=http%3A%2F%2F0.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536%3Fs%3D150&amp;r=g" srcset="http://1.gravatar.com/avatar/1aedb8d9dc4751e229a335e371db8058?s=300&amp;d=http%3A%2F%2F0.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536%3Fs%3D150&amp;r=g 2x" class="avatar avatar-150 photo" height="150" width="150">',
			// 	display_name: 'CTHthemes',
			// 	time: 'September 8, 2018 <span>2:24 pm</span>',
			// 	reply: 'Hello, this is test message'
			// },
			// {
			// 	crid: 2,
			// 	avatar: '<img alt="test" src="http://1.gravatar.com/avatar/1aedb8d9dc4751e229a335e371db8058?s=150&amp;d=http%3A%2F%2F0.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536%3Fs%3D150&amp;r=g" srcset="http://1.gravatar.com/avatar/1aedb8d9dc4751e229a335e371db8058?s=300&amp;d=http%3A%2F%2F0.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536%3Fs%3D150&amp;r=g 2x" class="avatar avatar-150 photo" height="150" width="150">',
			// 	display_name: 'CTHthemes',
			// 	time: 'September 8, 2018 <span>2:24 pm</span>',
			// 	reply: 'Hello'
			// }
		],
		// firstLoaded: false,
		active: 0,
		touid: 0,
		fuid: 0,

		// firstRemain         	: true, // there is still previous replies
	    firstID         		: 0,
	    lastID         		: 0,
		noReplyNum : 0,
		change:false,
		display_name:''
	},
	listings:{
		posts:[],
		page:[],
		item:{},
		actived:0,  //set when navigate to screen listing item
		booking:0,
		comment:0,
		listing_cats:[],
		listing_of_cat:[],
		listing_tags:[],
		searchData:[],
		locations:{}
	},
	users:{
		userData:{
			success:false,
			data:{},
			error:''
		},
		change_user_password:{
			
		},
		lBooking:[],
		cancelLbooking:false,
		register:{
			
		},
		loading:true,
		cart:[],
		payment:[],
		booking:{},
		forgotPassword:{},
		
	},
	posts:{
		page:[],
		posts:[]
	},
	members:[]
}