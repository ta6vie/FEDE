var obj = JSON.parse($response.body);
obj=  

{
  "code": 0,
  "data": {},
  "message": "",
 "subStatus": 1
}


$done({body: JSON.stringify(obj)});