var obj = JSON.parse($response.body);

obj = 

{
  "message" : "",
  "data" : {
    "activityInfos" : [
      {
        "description" : "",
        "id" : 109,
        "productInfos" : [
          {
            "activityProduct" : {

            },
            "productType" : "year",
            "defaultProduct" : {
              "promotionalOfferId" : "10Dollar6Months",
              "productId" : "com.magicv.AirBrush.sub.allAccess.1year.newus.fullPrice"
            },
            "isSubscription" : true
          },
          {
            "activityProduct" : {

            },
            "productType" : "month",
            "defaultProduct" : {
              "promotionalOfferId" : "HalfOff6Months",
              "productId" : "com.magicv.AirBrush.sub.allAccess.1month.newus.fullPrice"
            },
            "isSubscription" : true
          }
        ],
        "abTesting" : 0,
        "activityType" : 5,
        "materialInfos" : [

        ],
        "periodicFreeFeatureInfos" : [

        ],
        "title" : "",
        "activityName" : "Promotional Offer",
        "endTime" : 1775200080,
        "response" : {

        },
        "startTime" : 1541056080
      }
    ]
  },
  "code" : 0
}
$done({body: JSON.stringify(obj)});
