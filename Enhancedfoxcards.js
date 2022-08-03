var obj = JSON.parse($response.body);

obj = 

{
  "resultCode": 9999999999,
  "data": 1659498657149
}
$done({body: JSON.stringify(obj)});