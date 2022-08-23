var obj = JSON.parse($response.body);

obj =

{
  "expiration_time": 2544831966,
  "request_time": 1661219135,
  "status": 0,
  "code": 0
}
$done({body: JSON.stringify(obj)});