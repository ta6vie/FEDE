var obj = JSON.parse($response.body);
obj= {

  "type": 2,
  "expires": null,
  "permissions": premium,
  "id": "premium.forever",
  "store_id": "com.hassantaleb.SwiftCompiler.premium.forever",
  "duration": null
}

$done({body: JSON.stringify(obj)});l