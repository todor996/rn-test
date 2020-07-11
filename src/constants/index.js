const Constants = {
   	URL: { 
		// wp: 'http://localhost:8888/citybook/wp-json/wp/v2/',
		// local: 'http://10.0.2.2/wordpress/wp-json/wp/v2/', 

		
		ctb:  'https://citybook2.cththemes.com/wp-json/citybook/v1/',
		maps: 'https://maps.googleapis.com/maps/api/geocode/',
	},
	// Keys: {
	// 	ConsumerKey: 'ck_b648adc6c355fef2167c724308a91ada8db9e13e',
	// 	ConsumerSecret: 'cs_208195ffd2e9eaa50e595cb597667bd8ee6a7960'
	// },
	GoogleKeys : {
		api: 'YOUR_GOOGLE_MAP_KEY',
	},
	KeyMobileApp:{
		//Put your key here
		key:'YOUR_APP_KEY_FROM_CITYBOOK_ADD_ONS_SETTING_PAGE'
	},
	ListingPage:{
		numberPostsDisplayed:8,
		numberPostsLoadMore:8
	},
	Maps:{
		latitudeDelta:0.1, //Zoom maps default 0.001
		longitudeDelta:0.1,
		// {
		// Maps Types
		// 	standard: standard road map (default)
		// 	none: no map
		// 	satellite: satellite view
		// 	hybrid: satellite view with roads and points of interest overlayed
		// 	terrain: (Android only) topographic view}
		type:'standard' 
	},
	//Stripe key
	Payment:{
		stripePublishableKey: 'STRIPE_PUBLIC_KEY'
	},
	//OneSignal App Id
	OneSignal:{
		oneSignalAppId:'ONESIGNAL_APP_ID'
	}
	
}
export default Constants;