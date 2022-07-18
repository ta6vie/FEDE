var obj = JSON.parse($response.body);

obj = 

{
  "subscriptions_url": "https://raw.githubusercontent.com/elzari/FEDE/main/myradarurl",
  "status": "active"
}
$done({body: JSON.stringify(obj)});