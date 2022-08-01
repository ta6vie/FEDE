var obj = JSON.parse($response.body);
obj =

{
  "code": 0,
  "message": "success",
  "data": {
    "appUserId": "2555908395",
    "needSubmitProductInfo": 0,
    "server": ""
  }
}

$done({body: JSON.stringify(obj)});