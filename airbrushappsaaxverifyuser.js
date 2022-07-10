
var body = JSON.parse($response.body);
var obj = {

  "message" : "success",
  "data" : {
    "needSubmitProductInfo" : 0,
    "appUserId" : "2555908395",
    "server" : ""
  },
  "code" : 0
}

$done({ body: JSON.stringify(obj) });