// List of blocked sites
blockedSites = []

// Listens for starting session and releasing blocked sites
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	if (request.message == "start session") {
		startTimer(request.time);
		blockWebsites(request.sites);
	}
	if (request.message == "get blocked sites") {
      	sendResponse({sites: blockedSites});
	}
});

// Starts timer
function startTimer(time) {
	seconds = time*60
	setTimeout(function stopTimer() {
		window.alert("Time for a break! You've earned it!");
		blockedSites = [];
	}, seconds*1000);
}

// Initializes blocked sites array
function blockWebsites(sites) {
	sites.forEach(function(site) {
		blockedSites.push(site);
	});
}