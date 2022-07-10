let obj = JSON.parse($response.body);
obj= {

  "message" : "success",
  "data" : {
    "activityInfos" : [
      {
        "abTesting" : 0,
        "materialInfos" : [

        ],
        "endTime" : 1712309220,
        "id" : 128,
        "productInfos" : [
          {
            "activityProduct" : {

            },
            "productType" : "Lifetime",
            "defaultProduct" : {
              "promotionalOfferId" : "",
              "productId" : "com.magicv.AirBrush.unlockLifetime"
            },
            "isSubscription" : false
          }
        ],
        "title" : "",
        "activityType" : 0,
        "activityName" : "defaultSKU",
        "description" : "",
        "periodicFreeFeatureInfos" : [

        ],
        "startTime" : 1599989220
      }
    ]
  },
  "code" : 0
}

$done({body: JSON.stringify(obj)});
