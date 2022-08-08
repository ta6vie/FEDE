var obj = JSON.parse($response.body);

obj =
{
  "msg" : "ok",
  "data" : {
    "subscribed" : true
  },
  "code" : 200
}
$done({body: JSON.stringify(obj)});

