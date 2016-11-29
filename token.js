var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var request = new XMLHttpRequest();
var btoa = require('btoa');

var creds = {
	username: btoa("moon@uniqueinfluence.com"),
	password: btoa("!Chunks101")

};

var url = "https://app.nanigans.com/reporting-api/authenticate.php?username="+creds.username+"&password="+creds.password+"&scope=site&id=507323";
var getToken = function(url) {
  var url =
  request.open("GET", url, false);
  request.send(null);

  if(request.status == 200){
     console.log(JSON.parse(request.responseText));
  }
}

getToken(url);
