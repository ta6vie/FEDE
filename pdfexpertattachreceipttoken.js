var obj = JSON.parse($response.body);
obj = 

{
  "userInfo" : {
    "middleName" : "",
    "givenName" : "",
    "familyName" : ""
  },
  "newAccount" : false,
  "responseCreationDate" : "03:49 24/07/2022",
  "linkedProducts" : [
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
      "receiptId" : 1588900570000,
      "statisticsInfo" : {
        "events" : [

        ]
      },
      "bundleId" : "com.readdle.PDFExpert5",
      "chargingPlatform" : "iOS AppStore"
    }
  ],
  "deviceInfo" : {
    "deviceModel" : "iPhone13,4"
  },
   "signInSessionToken" : "a2c1208c-ccc0-4eb2-b0a0-383f51595011",
  "accountInfo" : {
    "email" : "fedemf38@icloud.com",
    "properties" : {
      "userOccupation" : "Constructor"
    }
  }
}

$done({body: JSON.stringify(obj)});