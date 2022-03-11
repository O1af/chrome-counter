const messages = [`If I had a nickel for every tab you have open, I'd have $`];

const setMessage = async () => {
	chrome.storage.sync.get("tabCount", function (data) {
		let tabs = data.tabCount;
		const messagep = document.getElementById("tabMessages");
		let newMessage = tabsToMessage(parseInt(tabs));
		if (!newMessage) {
			let randInt = Math.floor(Math.random() * messages.length);
			newMessage = messages[randInt] + (tabs * 0.05).toFixed(2);
		}
		newMessage = newMessage + "  -Olaf & Rishith";
		messagep.innerHTML = newMessage;
	});
};
window.onload = setMessage();
const tabsToMessage = (tabs) => {
	let message;
	if (tabs == 9) {
		message =
			"If I had a dollar for every tab you have open, I'd have enough for a Chipotle Burrito Bowl!";
	} else if (tabs == 42) {
		message =
			"You have the answer to the ultimate question of life, the universe, and everything.";
	} else if (tabs < 69 && tabs > 42) {
		message =
			"If you had tab for a cause installed, I think world hunger would cease to exist.";
	} else if (tabs == 69) {
		message = "Nice";
	} else if (tabs == 420) {
		message = "You're a genius";
	} else {
		message = null;
	}
	return message;
};
