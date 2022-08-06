var obj = JSON.parse($response.body);

obj = 

{
  "code": 0,
  "message": "success",
  "data": {
    "remote_time": 1596748817
  }
}
$done({body: JSON.stringify(obj)});