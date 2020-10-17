//BLOCK THE PARTIAL DOMAINS
findURL = function changeURL(text){
  var current = window.location.href;
  if(current === text){
    window.location.replace("https://www.google.co.in");
  }
}

//BLOCK THE ENTIRE DOMAIN WITH THE FOLLOWING FUNCTION
findAllURL = function changeAllURL(text){
  var current = window.location.href;
  if(current.startsWith(text)){
    document.documentElement.innerHTML = '';
    document.documentElement.innerHTML = 'No no go away';
    document.documentElement.scrollTop = 0;
  }
}

findAllURL("https://www.facebook.com/");