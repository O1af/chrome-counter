const getTabCount = async () => {
	const tabs = await browser.tabs.query({});
	return tabs.length;
};
