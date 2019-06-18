// Initialize your app
var myApp = new Framework7({
	root:'#app',
	theme: 'md', //ios, md, auto
    modalTitle: 'Framework7', 	//title for modals
	panel: {
    	swipe: 'left',
  	},
	cache:false,
	pushState:false,
	swipeBackPage:true,
	material: true,
	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		
		{
		path: '/espresso/',
    	url: 'espresso.html',
    	name: 'espresso',
  		},
		
		
		
		{
		path: '/radio/',
    	url: 'radio.html',
    	name: 'radio',
  		},
	
		{
		path: '/profile/',
    	url: 'profile.html',
    	name: 'profile',
  		},
		
		
		
		
	
		
		
		
		
	]
});

// Export selectors engine
var $$ = Dom7;





 

