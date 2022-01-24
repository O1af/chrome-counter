const getTabCount = async () => {
	const tabs = await chrome.tabs.query({});
	return tabs.length;
};

chrome.tabs.onCreated.addListener(async () => {
	const count = await getTabCount();
	chrome.action.setBadgeText({ text: count.toString() });
});
chrome.tabs.onRemoved.addListener(async () => {
	const count = await getTabCount();
	chrome.action.setBadgeText({ text: count.toString() });
});
chrome.runtime.onInstalled.addListener(async () => {
	const count = await getTabCount();
	chrome.action.setBadgeText({ text: count.toString() });
});

const messages = [];
