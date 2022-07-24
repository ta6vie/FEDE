var obj = JSON.parse($response.body);

obj = 

{
  "bundleId": "com.readdle.PDFExpert5",
  "chargingPlatform": "iOS AppStore",
  "receiptId": 1588900570000,
  "originalTransactionId": 300001036970978,
  "inAppStates": [{
    "type": "subscription",
    "productId": "com.readdle.PDFExpert5.subscription.year50",
    "originalTransactionId": 300001036970978,
    "productName": "subscription",
    "isEligibleForIntroPeriod": false,
    "subscriptionExpirationDate": "05:56 12/05/2025",
    "subscriptionState": "active",
    "subscriptionAutoRenewStatus": "autoRenewOff",
    "isInGracePeriod": false,
    "isInBillingRetryPeriod": false,
    "entitlements": ["ios.pe.subscription.pdf-features"]
  }],
  "receiptStatus": "ok",
  "statisticsInfo": {
    "events": []
  }
}

$done({body: JSON.stringify(obj)});
