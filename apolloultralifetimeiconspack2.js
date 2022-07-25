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
      "status" : "PAID"
    }
  ]
}

$done({body: JSON.stringify(obj)});
