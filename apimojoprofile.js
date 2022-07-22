var obj = JSON.parse($response.body);

obj = 

{
  "data" : {
    "getProfile" : {
      "__typename" : "User",
      "isPro" : true,
      "uid" : "UJliCb8HYMU3Df1niMds9iCqqJI3",
      "teams" : [

      ]
    }
  }
}
$done({body: JSON.stringify(obj)});
