
Titanium.UI.setBackgroundColor('black');

var win1 = Titanium.UI.createWindow({  //Windows
    text: 'Landing Page thingy',
    backgroundColor:'black'
});
var fb = require('facebook');
fb.appid = 1392408537747660;
fb.permissions = ['publish_stream'];
fb.addEventListener('login', function(e) {
    if (e.success) {
        alert('Logged in');
    }
});
fb.addEventListener('logout', function(e) {
    alert('Logged out');
});
    
// Add the button.  Note that it doesn't need a click event listener.
win1.add(fb.createLoginButton({
    top : '60%',
    style : fb.BUTTON_STYLE_WIDE
}));
win1.open();

var scheduleWindow = Ti.UI.createWindow({
	text:'Child Page thingy',
	backgroundColor:'#fff'
});

var titleView = Ti.UI.createView({		//Titles
	height: '20%',
	width: '100%',
	top:'0%',
});
var titleLabel = Ti.UI.createLabel({
	text:'Prome Chitlungsei',
	textAlign: 'center',
	height: Ti.UI.FILL,
	font:{
			fontSize:'75sp',
			fontWeight:'bold',
			fontColor:'#FF0000'
	}									
});
var scheduleTitleView = Ti.UI.createView({
	top: 0,
	backgroundColor: 'black',
	height:'20%',
	width: '100%',
});
var scheduleTitleLabel = Ti.UI.createLabel({
	text:'Personal Bio',
	textAlign: 'center',
	color: '#d2b45b',
	height:Ti.UI.FILL,
	font:{
		fontSize:'75sp',
		fontWeight:'bold',
	}
});

var ContactList = Ti.UI.createView({				//HOME SCREEN
	height:'13%',
	width:'45%',
	left:'35%',
	top: '40%',				
});
var contactInfo = Ti.UI.createLabel({
	text: 'Prome Chitlungsei \nB.S. Computer Science, Information Systems, and Operations Management \nPhone: (208) 651-3836\n chit9813@vandals.uidaho.edu',
	textAlign:'center',
	height:Ti.UI.FILL,
	right: '40%',
	font:{
		fontSize:'20sp'
	}
});


var cornercontactpic = Ti.UI.createImageView({
	bottom: 0,
	right: '30%',
	height:'17%',
	width:'10%',
	image: '/images/UofI.png'
});
var HomeScrnPic = Ti.UI.createView({
	height:'25%',
	width:'60%',
	left:'20%',
	bottom: 0,
	borderRadius: 20,
	backgroundImage:'/images/Boeing-Logo4.jpg'
});
var returnView = Ti.UI.createView({		//ButtonViews
	bottom: '0',
	left: 0,
	height:'10%',
	width:'100%',
	backgroundColor:'black'
});
var scheduleView = Ti.UI.createView({		
	height: '20%',
	width: '20%',
	left: 0,
	top: '20%'
});

var blablaView = Ti.UI.createView({
	top: '22%',
	left: '20%',
	height: '15%',
	width: '80%',
});	

var secondpageprofileview = Ti.UI.createView({
	height:'25%',
	width:'60%',
	left:'20%',
	bottom: '18%',
	borderRadius: 20,
	backgroundImage:'/images/promeprofilepic.jpg'
});		

var PersonalBio = Ti.UI.createLabel({
	text: 'My name is Prome Chitlungsei and Im studying in the University of Idaho. I was born in Bangkok, Thailand and was raised there for 13 years. My family then moved to the U.S. where I lived mainly in Idaho and Washington. I currently have a double major in Information Systems and Operations Management. I love working in projects and mainly experience new challenges that come from it.',
	textAlign:'center',
	height:Ti.UI.FILL,
	font:{
		fontSize:'20sp'
	
	}
});


var blablaLabel = Ti.UI.createLabel({		
	textAlign: 'center',
	top: '5%',
	text: 'Project Manager at Aerospace R&D of Boeing',
	font:{
		fontSize:'25sp',
		fontWeight:'bold',
	}	
});

var scheduleButton = Ti.UI.createButton({			//Buttons
	title: 'Next Page',
		color:'#d2b45b',
		height:Ti.UI.FILL,
		width:'100%',
		height: '100%',
		borderColor: '#d2b45b',							
		textAlign:'Center',
		font:{
			fontSize:'35sp',
			fontWeight:'bold'
		},
		backgroundColor:'black'
});

var returnButton = Ti.UI.createButton({
	title:'Return',
	color:'white',
	borderRadius: 10,
	height:Ti.UI.FILL,
	width:'15%',
	height:'100%',
	left: 0,
	bordercolor:'black',
	backgroundColor: '#d2b45b',
	textAlign:'center',
	font:{
		fontSize:'35sp',
		fontWeight:'bold',
	},
	backgroundcolor:'#333333'
});



scheduleButton.addEventListener('click', function(e){

	scheduleWindow.open();
});

returnButton.addEventListener('click', function(e){

	win1.open();
});

win1.open();

win1.add(titleView);

titleView.add(titleLabel);

win1.add(scheduleView);

win1.add(blablaView);

win1.add(HomeScrnPic);

win1.add(ContactList);

scheduleWindow.add(returnView);

scheduleWindow.add(scheduleTitleView);

scheduleWindow.add(secondpageprofileview);

scheduleWindow.add(PersonalBio);

blablaView.add(blablaLabel);

scheduleView.add(scheduleButton);

scheduleTitleView.add(scheduleTitleLabel);

ContactList.add(contactInfo);

ContactList.add(cornercontactpic);

module.exports = MasterView;
