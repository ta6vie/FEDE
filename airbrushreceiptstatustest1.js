let obj = JSON.parse($response.body);
obj=  

{
  "code": 0,
  "message": "",
  "data": {
 "subStatus": 1,
  }
}


$done({body: JSON.stringify(obj)});