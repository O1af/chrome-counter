const getTabCount = async () => {
	const tabs = await chrome.tabs.query({});
	chrome.storage.sync.set({
		tabCount: tabs.length,
	});
	chrome.storage.sync.get("tabCount", function (data) {
		console.log(data.tabCount);
	});
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
