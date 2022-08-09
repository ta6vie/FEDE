var obj = JSON.parse($response.body);

obj = 

{
  "userInfo" : {
    "middleName" : "",
    "givenName" : "",
    "familyName" : ""
  },
  "newAccount" : false,
  "responseCreationDate" : "23:43 09/08/2022",
  "linkedProducts" : [
    {
      "originalTransactionId" : 300001036970978,
      "inAppStates" : [
        {
          "originalTransactionId" : 300001036970978,
          "productId" : "com.readdle.PDFExpert5.subscription.year50",
          "subscriptionState" : "active",
          "productName" : "subscription",
          "subscriptionExpirationDate" : "05:56 12/05/2099",
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
  "signInSessionToken" : "6017f657-3b16-4e21-9877-fe3694e84b23",
  "accountInfo" : {
    "email" : "fedemf38@icloud.com",
    "properties" : {
      "userOccupation" : "Constructor"
    }
  }
}
$done({body: JSON.stringify(obj)});