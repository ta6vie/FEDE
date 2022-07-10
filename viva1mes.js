var obj = JSON.parse($response.body);

obj= {

  "autoRenewProductId" : "premium_platinum_monthly",
  "autoRenewStatus" : 1,
  "originalTransactionId" : "300001040354135",
  "duidDgest" : "DIzjfUIvln",
  "hasIntroOfferProds" : [

  ],
  "iosDeviceProductVo" : {
    "newVipMonthly" : 3,
    "premiumVipWeekly" : 3,
    "premiumPlatinumQuarterly" : 3,
    "premiumGoldMonthly" : 3,
    "premiumPlatinumMonthly" : 3,
    "newVipYearly" : 3,
    "premiumVipYearly" : 3,
    "newVipWeekly" : 3,
    "nonOrganicVipMonthly" : 3,
    "premiumPlatinumHalfYearly" : 3,
    "nonOrganicVipWeekly" : 3,
    "premiumGoldYearly" : 3,
    "nonOrganicVipYearly" : 3,
    "premiumPlatinumYearly" : 2
  },
  "platform" : 2,
  "endTime" : 4081109070000,
  "systemDate" : 1657442372554,
  "productList" : [
    {
      "isRenew" : true,
      "vipType" : "premium_platinum_monthly"
    },
    {
      "isRenew" : true,
      "vipType" : "premium_platinum_yearly"
    }
  ],
  "hasFreedTrialProds" : [
    "premium_platinum_yearly"
  ],
  "isTrialPeriod" : false,
  "transactionId" : "300001162730794",
  "startTime" : 1657441810000,
  "vipType" : "premium_platinum_monthly",
  "sign" : "8998198bf4dd5cf5069b0236716bb433"
}

$done({body: JSON.stringify(obj)});