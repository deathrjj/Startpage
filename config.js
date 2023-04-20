const sunDate = new Date()
const sunrise = new Date((2*(2451545 + (53/45000) + Math.round(sunDate.valueOf() / 86400000 -10957.5 - (53/45000)) + 0.0053 * Math.sin(Math.PI/180 * (357.5291 + 0.98560028 * ((53/45000) + Math.round(sunDate.valueOf() / 86400000 -10957.5 - (53/45000))))) - 0.0069 * Math.sin(2 * Math.PI/180 * (357.5291 + 0.98560028 * ((53/45000) + Math.round(sunDate.valueOf() / 86400000 -10957.5 - (53/45000)))) + Math.PI/180 * (1.9148 * Math.sin(Math.PI/180 * (357.5291 + 0.98560028 * ((53/45000) + Math.round(sunDate.valueOf() / 86400000 -10957.5 - (53/45000))))) + 0.02 * Math.sin(2 * Math.PI/180 * (357.5291 + 0.98560028 * ((53/45000) + Math.round(sunDate.valueOf() / 86400000 -10957.5 - (53/45000))))) + 0.0003 * Math.sin(3 * Math.PI/180 * (357.5291 + 0.98560028 * ((53/45000) + Math.round(sunDate.valueOf() / 86400000 -10957.5 - (53/45000)))))) + Math.PI*102.9372/180  + Math.PI))-(2451545 + 0.0009 + (Math.acos((Math.sin((-0.6783) * Math.PI/180) - Math.sin(Math.PI*103/360) * Math.sin(Math.asin(Math.sin(Math.PI * 23.4397/180) * Math.sin(Math.PI/180 * (357.5291 + 0.98560028 * ((53/45000) + Math.round(sunDate.valueOf() / 86400000 -10957.5 - (53/45000)))) + Math.PI/180 * (1.9148 * Math.sin(Math.PI/180 * (357.5291 + 0.98560028 * ((53/45000) + Math.round(sunDate.valueOf() / 86400000 -10957.5 - (53/45000))))) + 0.02 * Math.sin(2 * Math.PI/180 * (357.5291 + 0.98560028 * ((53/45000) + Math.round(sunDate.valueOf() / 86400000 -10957.5 - (53/45000))))) + 0.0003 * Math.sin(3 * Math.PI/180 * (357.5291 + 0.98560028 * ((53/45000) + Math.round(sunDate.valueOf() / 86400000 -10957.5 - (53/45000)))))) + Math.PI*102.9372/180  + Math.PI)))) / (Math.cos(Math.PI*103/360) * Math.cos(Math.asin(Math.sin(Math.PI * 23.4397/180) * Math.sin(Math.PI/180 * (357.5291 + 0.98560028 * ((53/45000) + Math.round(sunDate.valueOf() / 86400000 -10957.5 - (53/45000)))) + Math.PI/180 * (1.9148 * Math.sin(Math.PI/180 * (357.5291 + 0.98560028 * ((53/45000) + Math.round(sunDate.valueOf() / 86400000 -10957.5 - (53/45000))))) + 0.02 * Math.sin(2 * Math.PI/180 * (357.5291 + 0.98560028 * ((53/45000) + Math.round(sunDate.valueOf() / 86400000 -10957.5 - (53/45000))))) + 0.0003 * Math.sin(3 * Math.PI/180 * (357.5291 + 0.98560028 * ((53/45000) + Math.round(sunDate.valueOf() / 86400000 -10957.5 - (53/45000)))))) + Math.PI*102.9372/180  + Math.PI))))) + Math.PI/1800) / (2 * Math.PI) + Math.round(sunDate.valueOf() / 86400000 -10957.5 - (53/45000)) + 0.0053 * Math.sin(Math.PI/180 * (357.5291 + 0.98560028 * ((53/45000) + Math.round(sunDate.valueOf() / 86400000 -10957.5 - (53/45000))))) - 0.0069 * Math.sin(2 * Math.PI/180 * (357.5291 + 0.98560028 * ((53/45000) + Math.round(sunDate.valueOf() / 86400000 -10957.5 - (53/45000)))) + Math.PI/180 * (1.9148 * Math.sin(Math.PI/180 * (357.5291 + 0.98560028 * ((53/45000) + Math.round(sunDate.valueOf() / 86400000 -10957.5 - (53/45000))))) + 0.02 * Math.sin(2 * Math.PI/180 * (357.5291 + 0.98560028 * ((53/45000) + Math.round(sunDate.valueOf() / 86400000 -10957.5 - (53/45000))))) + 0.0003 * Math.sin(3 * Math.PI/180 * (357.5291 + 0.98560028 * ((53/45000) + Math.round(sunDate.valueOf() / 86400000 -10957.5 - (53/45000)))))) + Math.PI*102.9372/180  + Math.PI))- 2440587.5) * 86400000).toTimeString().substring(0,5)
const sunset = new Date(((2451545 + 0.0009 + (Math.acos((Math.sin((-0.6783) * Math.PI/180) - Math.sin(Math.PI*103/360) * Math.sin(Math.asin(Math.sin(Math.PI * 23.4397/180) * Math.sin(Math.PI/180 * (357.5291 + 0.98560028 * ((53/45000) + Math.round(sunDate.valueOf() / 86400000 -10957.5 - (53/45000)))) + Math.PI/180 * (1.9148 * Math.sin(Math.PI/180 * (357.5291 + 0.98560028 * ((53/45000) + Math.round(sunDate.valueOf() / 86400000 -10957.5 - (53/45000))))) + 0.02 * Math.sin(2 * Math.PI/180 * (357.5291 + 0.98560028 * ((53/45000) + Math.round(sunDate.valueOf() / 86400000 -10957.5 - (53/45000))))) + 0.0003 * Math.sin(3 * Math.PI/180 * (357.5291 + 0.98560028 * ((53/45000) + Math.round(sunDate.valueOf() / 86400000 -10957.5 - (53/45000)))))) + Math.PI*102.9372/180  + Math.PI)))) / (Math.cos(Math.PI*103/360) * Math.cos(Math.asin(Math.sin(Math.PI * 23.4397/180) * Math.sin(Math.PI/180 * (357.5291 + 0.98560028 * ((53/45000) + Math.round(sunDate.valueOf() / 86400000 -10957.5 - (53/45000)))) + Math.PI/180 * (1.9148 * Math.sin(Math.PI/180 * (357.5291 + 0.98560028 * ((53/45000) + Math.round(sunDate.valueOf() / 86400000 -10957.5 - (53/45000))))) + 0.02 * Math.sin(2 * Math.PI/180 * (357.5291 + 0.98560028 * ((53/45000) + Math.round(sunDate.valueOf() / 86400000 -10957.5 - (53/45000))))) + 0.0003 * Math.sin(3 * Math.PI/180 * (357.5291 + 0.98560028 * ((53/45000) + Math.round(sunDate.valueOf() / 86400000 -10957.5 - (53/45000)))))) + Math.PI*102.9372/180  + Math.PI))))) + Math.PI/1800) / (2 * Math.PI) + Math.round(sunDate.valueOf() / 86400000 -10957.5 - (53/45000)) + 0.0053 * Math.sin(Math.PI/180 * (357.5291 + 0.98560028 * ((53/45000) + Math.round(sunDate.valueOf() / 86400000 -10957.5 - (53/45000))))) - 0.0069 * Math.sin(2 * Math.PI/180 * (357.5291 + 0.98560028 * ((53/45000) + Math.round(sunDate.valueOf() / 86400000 -10957.5 - (53/45000)))) + Math.PI/180 * (1.9148 * Math.sin(Math.PI/180 * (357.5291 + 0.98560028 * ((53/45000) + Math.round(sunDate.valueOf() / 86400000 -10957.5 - (53/45000))))) + 0.02 * Math.sin(2 * Math.PI/180 * (357.5291 + 0.98560028 * ((53/45000) + Math.round(sunDate.valueOf() / 86400000 -10957.5 - (53/45000))))) + 0.0003 * Math.sin(3 * Math.PI/180 * (357.5291 + 0.98560028 * ((53/45000) + Math.round(sunDate.valueOf() / 86400000 -10957.5 - (53/45000)))))) + Math.PI*102.9372/180  + Math.PI))- 2440587.5) * 86400000).toTimeString().substring(0,5)
//    _____             __ _                       _   _             
//   / ____|           / _(_)                     | | (_)            
//  | |     ___  _ __ | |_ _  __ _ _   _ _ __ __ _| |_ _  ___  _ __  
//  | |    / _ \| '_ \|  _| |/ _` | | | | '__/ _` | __| |/ _ \| '_ \ 
//  | |___| (_) | | | | | | | (_| | |_| | | | (_| | |_| | (_) | | | |
//   \_____\___/|_| |_|_| |_|\__, |\__,_|_|  \__,_|\__|_|\___/|_| |_|
//                            __/ |                                  
//                           |___/                                  
const CONFIG = {
	// General
	name: 'Robert',
	imageBackground: true,
	openInNewTab: false,
	twelveHourFormat: false,

	// Greetings
	greetingMorning: 'Good morning!',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Go to Sleep!',

	// Weather
	weatherKey: '40585d1fe2d0d2babf31d9113a891045', // Write here your API Key
	weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi
	weatherLatitude: '51.430752',
  	weatherLongitude: '-0.548150',

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '51.430752',
	defaultLongitude: '-0.548150',

	// Autochange
	autoChangeTheme: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: true,
	hourDarkThemeActive: sunset,
	hourDarkThemeInactive: sunrise,

    //Buttons
	firstButtonsContainer: [
		{
			id: '1',
			name: 'Azure',
			icon: 'network',
			link: 'https://dev.azure.com/exclaimerltd',
		},
		{
			id: '2',
			name: 'Confluence',
			icon: 'book-open',
			link: 'https://exclaimer.atlassian.net/wiki/home',
		},
		{
			id: '3',
			name: 'Scrum Board',
			icon: 'list-checks',
			link: 'https://exclaimer.atlassian.net/jira/software/c/projects/EXCL/boards/14',
		},
		{
			id: '4',
			name: 'People HR',
			icon: 'users',
			link: 'https://exclaimerlimited.peoplehr.net/Pages/LeftSegment/Dashboard.aspx',
		},
		{
			id: '5',
			name: 'Bud',
			icon: 'graduation-cap',
			link: 'https://web.bud.co.uk/',
		},
		{
			id: '6',
			name: 'PR Board',
			icon: 'layout-list',
			link: 'https://pr.exclaimertest.net/',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Mail',
			icon: 'mail',
			link: 'https://mail.google.com/',
		},
		{
			id: '2',
			name: 'Reddit',
			icon: 'glasses',
			link: 'https://reddit.com',
		},
		{
			id: '3',
			name: 'Youtube',
			icon: 'youtube',
			link: 'https://youtube.com/',
		},
		{
			id: '4',
			name: 'ChatGPT',
			icon: 'bot',
			link: 'https://chat.openai.com/chat?model=gpt-4',
		},
		{
			id: '5',
			name: 'GitHub',
			icon: 'github',
			link: 'https://github.com/deathrjj/',
		},
		{
			id: '6',
			name: 'Home Assistant',
			icon: 'home',
			link: 'http://192.168.0.126:8123/',
		},
	],
};
