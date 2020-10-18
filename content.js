// BLOCK THE ENTIRE DOMAIN WITH THE FOLLOWING FUNCTION
findAllURL = function changeAllURL(text){
  var current = window.location.href;
  if(current.startsWith(text)){
    document.documentElement.innerHTML = '';
    document.documentElement.innerHTML = "Don't lose focus now! Keep it up!";
    document.documentElement.scrollTop = 0;
  }
}

// Request list of blocked sites from background
chrome.runtime.sendMessage({message: "get blocked sites"}, function(response) {
    console.log(response);
    response.sites.forEach(function(site) {
      findAllURL(site);
    });
});