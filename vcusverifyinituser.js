var obj = JSON.parse($response.body);

obj =  

{
  "code": 0,
  "message": "success",
  "data": {
    "appUserId": "SaasID:lv820l2l595lgw",
    "needSubmitProductInfo": 0,
    "server": ""
  }
}
$done({body: JSON.stringify(obj)});