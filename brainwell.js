var nanigans = require('./nng_api_hooks');
var config = require('./nng_config');

//For Custom Views
//metrics and attributes must be sent as an array
var metrics = ["fbSpend","impressions","clicks"];
var attributes = ["adType"];
//need to be passed into an argument or can be set up to Unix time - X days potentially
var date = ["10/01/2016", "11/16/2016"];
//Abstract to Specicfic Client script

var savedViewParams = {
  baseUrl: config.nanigans.baseUrl,
  siteId: 507323,
  dataSourceType: "componentplacements",
  viewId: 6988230,
  dataType: "json",
  depth: 1,
  accessToken: "8bb5f0fd-7cb5-4e0a-a241-877bf4a7b81a"
};
//need datasource type and site id
var placementParams = {
  baseUrl: config.nanigans.baseUrl,
  siteId: 507323,
  dataSourceType: "placements",
  dataType: "json",
  accessToken: "39e86c8-e62a-468e-a021-a3d7a4f21dcb"
};

var savedView = nanigans.savedViewReport(savedViewParams);
var returnData = nanigans.fetchData(savedView);
console.log(returnData);
//console.log(nanigans.fetchData());
// console.log(Object.keys(urlParams));
//var endpoint = attributesApiHook(placementParams);
// fetchData(endpoint);
// for(var key in objects) {
//     var value = objects[key];
// }
