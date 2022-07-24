var obj = JSON.parse($response.body);
obj = 

{
  "originalTransactionId" : 300001036970978,
  "inAppStates" : [
    {
      "originalTransactionId" : 300001036970978,
      "productId" : "com.readdle.PDFExpert5.subscription.year50",
      "subscriptionState" : "active",
      "productName" : "subscription",
      "subscriptionExpirationDate" : "05:56 12/05/2025",
      "isEligibleForIntroPeriod" : false,
      "subscriptionAutoRenewStatus" : "autoRenewOff",
      "type" : "subscription",
      "isInGracePeriod" : false,
      "isInBillingRetryPeriod" : false,
      "entitlements" : [
        "ios.pe.subscription.pdf-features"
      ]
    }
  ],
  "chargingPlatform" : "iOS AppStore",
  "receiptStatus" : "ok",
  "bundleId" : "com.readdle.PDFExpert5",
  "receiptId" : 1588900570000,
  "statisticsInfo" : {
    "events" : [

    ]
  }
}

$done({body: JSON.stringify(obj)});