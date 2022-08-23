var obj = JSON.parse($response.body);

obj =

{
  "expiration_time": 2544831966,
  "request_time": 1661219136,
  "ip": "178.139.233.52",
  "linked": 0,
  "email": ""
}
$done({body: JSON.stringify(obj)});