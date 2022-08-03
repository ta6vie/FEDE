var obj = JSON.parse($response.body);

obj = 

{
  "data" : {
    "user" : {
      "subscriptions" : {
        "edges" : [
          {
            "node" : {
              "expiresOn" : "2099-08-08T06:08:50Z"
            }
          }
        ]
      }
    }
  }
}

$done({body: JSON.stringify(obj)});