var obj = JSON.parse($response.body);

obj = 

{
  "originalTransactionId" : 300000595747282,
  "inAppStates" : [
    {
      "originalTransactionId" : 300000595747282,
      "productId" : "com.readdle.ReaddleDocsIPad.subscription.month12new",
      "subscriptionState" : "active",
      "productName" : "subscription",
      "subscriptionExpirationDate" : "02:43 18/08/2025",
      "isEligibleForIntroPeriod" : false,
      "subscriptionAutoRenewStatus" : "autoRenewOff",
      "type" : "subscription",
      "isInGracePeriod" : false,
      "isInBillingRetryPeriod" : false,
      "entitlements" : [

      ]
    },
    {
      "originalTransactionId" : "0000",
      "entitlements" : [

      ],
      "type" : "custom purchase",
      "productId" : "documents6-user"
    }
  ],
  "chargingPlatform" : "iOS AppStore",
  "receiptStatus" : "ok",
  "bundleId" : "com.readdle.ReaddleDocsIPad",
  "receiptId" : 1498123252000,
  "statisticsInfo" : {
    "events" : [

    ]
  }
}
$done({body: JSON.stringify(obj)});
