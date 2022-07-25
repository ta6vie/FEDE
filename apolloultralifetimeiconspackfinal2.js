var obj = JSON.parse($response.body);
obj= 

{
  "products" : [
    {
      "name" : "ultra",
      "status" : "LIFETIME",
    },
    {
      "name" : "pro",
      "status" : "LIFETIME"
    },
    {
      "name" : "community_icons",
      "status" : "PURCHASED"
    },
    {
      "name" : "spca",
      "status" : "ACTIVE"
    }
  ]
}

$done({body: JSON.stringify(obj)});
