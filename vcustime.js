var obj = JSON.parse($response.body);

obj = 

{
  "time": "2099-08-07 06:07:54.484653017 +0900 JST m=+659295.735348868",
  "timestamp": 1659820074
}
$done({body: JSON.stringify(obj)});