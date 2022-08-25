var obj = JSON.parse($response.body);
obj= {

"uid" : "QON_c613846ff2c245518d08179277dc90c3",
  "type": 2,
  "expires": null,
  "permissions": premium,
  "id": "premium.forever",
  "store_id": "com.hassantaleb.SwiftCompiler.premium.forever",
  "duration": null
}

$done({body: JSON.stringify(obj)});l