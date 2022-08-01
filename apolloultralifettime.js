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
      "status" : "YES"
    },
    {
      "name" : "spca",
      "status" : "YES"
    }
  ]
}

$done({body: JSON.stringify(obj)});