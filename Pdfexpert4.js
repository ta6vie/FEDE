var obj = JSON.parse($response.body);

obj = 

{
  "environment": "Production",
  "status": 21004
}
$done({body: JSON.stringify(obj)});

