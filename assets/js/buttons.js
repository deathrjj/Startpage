//  ____        _   _                  
// |  _ \      | | | |                 
// | |_) |_   _| |_| |_ ___  _ __  ___ 
// |  _ <| | | | __| __/ _ \| '_ \/ __|
// | |_) | |_| | |_| || (_) | | | \__ \
// |____/ \__,_|\__|\__\___/|_| |_|___/
// Function to print Button Cards.
const generateFirstButtonsContainer = () => {
	for (const button of CONFIG.firstButtonsContainer) {
		let item = `
        <a
          href="${button.link}"
          target="${CONFIG.openInNewTab ? '_blank' : ''}"
          class="card button button__${button.id}"
        >
          <i class="buttonIcon" icon-name="${button.icon}"></i>
        </a>
    `;

		const position = 'beforeend';

		buttons_1.insertAdjacentHTML(position, item);
	}
};

const generateSecondButtonsContainer = () => {
	for (const button of CONFIG.secondButtonsContainer) {
		let item = `
        <a
          href="${button.link}"
          target="${CONFIG.openInNewTab ? '_blank' : ''}"
          class="card button button__${button.id}"
        >
          <i class="buttonIcon" icon-name="${button.icon}"></i>
        </a>
    `;

		const position = 'beforeend';

		buttons_2.insertAdjacentHTML(position, item);
	}
};

const generateButtons = () => {
	generateFirstButtonsContainer();
	generateSecondButtonsContainer();
};
generateButtons();