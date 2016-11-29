var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var request = new XMLHttpRequest();
var btoa = require('btoa');
var atob = require('atob');
// URL encoding
// var urlEncode = require('urlencode');
var params = require('query-params');
var config = require('./nng_config');

module.exports = {

  //Adhoc URL Constructor methods
  //Return Attributes Query Params
  getAttributes: function(attributes) {
    var attribute = '';
    if(attributes.length > 1){
      for(var i=0;i<attributes.length;i++){
        attribute += "attributes[]=" + attributes[i] + "&";
      };
    } else {
      attribute += "attributes[]=" + attributes[0] + "&";
    };
    console.log(attribute);
    return attribute;
  },

  //Return Metrics Params
  getMetrics: function(metrics) {
    var metric = '';
    if(metrics.length>1){
      for(var i=0;i<metrics.length;i++){
        metric += "metrics[]=" + metrics[i] + "&";
      };
    } else {
      metric += "metrics[]=" + metrics[0] + "&";
    };
    return metric;
  },

  //Return Date Range Params
  getDateRange: function(date) {
    var dates;
    if(date.length < 1){
      dates = "&start="+date[0]+"&end="+date[0];
    } else {
      dates = "&start="+date[0]+"&end="+date[1];
    }
    return dates;
  },

  getFilters: function(filters) {

  },

  getAttributionType: function(attributionType) {
    var attribution = "&attribution=" + attributionType;
    return attribution;
  },

  //Query Constructor Methods

  //Saved View Report
  savedViewReport: function(data) {
    var queryParams = {
      format: data.dataType,
      depth: data.depth,
      access_token: data.accessToken
    };
    queryParams = params.encode(queryParams);
    return data.baseUrl + data.siteId + "/datasources/" + data.dataSourceType + "/views/" + data.viewId + "?" + queryParams;
  },

  //Adhoc View Report
  adhocReport: function(data,metrics,attributes) {
    var attribute = getAttributes(attributes);
    var metric = getMetrics(metrics);
    var queryParams = {
      format: data.dataType,
      access_token: data.accessToken
    };
    queryParams = params.encode(queryParams);
    return data.baseUrl + data.siteId + "/datasources/" + data.dataSourceType + "/views/adhoc?" + attribute + metric + queryParams;
  },

  // Query for API Attributes

  //Retrieve Avaiable Datasources
  allDataSources: function(data) {
    var queryParams = {
      access_token: data.accessToken
    };
    queryParams = params.encode(queryParams);
    return data.baseUrl + data.siteId + "/datasources" + "?" + queryParams;
  },

  //Attributes of a Datasource
  dataSourceAttributes: function(data) {
    var queryParams = {
      format: data.dataType,
      depth: data.depth,
      access_token: data.accessToken
    };
    queryParams = params.encode(queryParams);
    return data.baseUrl + data.siteId + "/datasources/" + data.dataSourceType + "/attributes" + "?" + queryParams;
  },

  //Metrics from a datasource
  metricsAttributes:  function(data) {
    var queryParams = {
      access_token: data.accessToken
    };
    queryParams = params.encode(queryParams);
    return data.baseUrl + data.siteId + "/datasources/" + data.dataSourceType + "/metrics" + "?" + queryParams;
  },

  //Request Data from API
  fetchData: function(endpoint) {
    request.open("GET", endpoint, false);
    request.send(null);
    if(request.status == 200){
       return JSON.parse(request.responseText);
    }
    else{
      console.log(request);
    };
  }
};






//
// //metrics and attributes must be sent as an array
// var metrics = ["fbSpend","impressions","clicks"];
// var attributes = ["adType"];
// //need to be passed into an argument or can be set up to Unix time - X days potentially
// var date = ["10/01/2016", "11/16/2016"];
// //Abstract to Specicfic Client script
// var savedViewParams = {
//   baseUrl: config.nanigans.baseUrl,
//   siteId: 507323,
//   dataSourceType: "componentplacements",
//   viewId: 6988215,
//   dataType: "json",
//   depth: 1,
//   accessToken: "24cb88b9-998c-4c8d-a971-319a82caf136"
// };
// //need datasource type and site id
// var placementParams = {
//   baseUrl: config.nanigans.baseUrl,
//   siteId: 507323,
//   dataSourceType: "placements",
//   dataType: "json",
//   accessToken: "24cb88b9-998c-4c8d-a971-319a82caf136"
// };
//
// var hook = savedView(savedViewParams);
// console.log(fetchData(hook));
// // console.log(Object.keys(urlParams));
//var endpoint = attributesApiHook(placementParams);
// fetchData(endpoint);
// for(var key in objects) {
//     var value = objects[key];
// }
