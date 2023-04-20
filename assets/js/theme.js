//  _______ _                         
// |__   __| |                        
//    | |  | |__   ___ _ __ ___   ___ 
//    | |  | '_ \ / _ \ '_ ` _ \ / _ \
//    | |  | | | |  __/ | | | | |  __/
//    |_|  |_| |_|\___|_| |_| |_|\___|
// Set theme based on Configurations and Preferences

let darkTheme = localStorage.getItem('darkTheme');
const themeToggle = document.querySelector('#themeButton');
const bodySelector = document.getElementsByTagName("body")[0]

const enableDark = () => {
	if(document.body.classList.contains('theme--light')) {
		document.body.classList.remove('theme--light');
	}
	document.body.classList.add('theme--dark');
	bodySelector.style = "background-image: linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url(assets/background.jpg);";
	localStorage.setItem('darkTheme', 'enabled');
	themeToggle.innerHTML = `<i id="themeButton__icon" icon-name="sun"></i>`;
	lucide.createIcons();
};

const disableDark = () => {
	if(document.body.classList.contains('theme--dark')) {
		document.body.classList.remove('theme--dark');
	}
	document.body.classList.add('theme--light');
	bodySelector.style = "background-image: linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url(assets/background.jpg)";
	localStorage.setItem('darkTheme', null);
	themeToggle.innerHTML = `<i id="themeButton__icon" icon-name="moon"></i>`;
	lucide.createIcons();
};

if (darkTheme === 'enabled') {
	document.body.classList.add('notransition');
	enableDark();
	document.body.classList.remove('notransition');
} else {
	disableDark();
}

themeToggle.addEventListener('click', () => {
	darkTheme = localStorage.getItem('darkTheme');
	if (darkTheme !== 'enabled') {
		enableDark();
	} else {
		disableDark();
	}
});

if (CONFIG.changeThemeByOS && CONFIG.autoChangeTheme) {
	if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
		enableDark();
	} else {
		disableDark();
	}
}

if (CONFIG.changeThemeByHour && CONFIG.autoChangeTheme && !CONFIG.changeThemeByOS) {
	const date = new Date();
	const hours = date.getHours() < 10 ? '0' + date.getHours().toString() : date.getHours().toString();
	const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes().toString() : date.getMinutes().toString();
	const currentTime = hours + ':' + minutes;
	if (currentTime >= CONFIG.hourDarkThemeActive) {
		enableDark();
	} else if (currentTime >= CONFIG.hourDarkThemeInactive) {
		disableDark();
	}
}
