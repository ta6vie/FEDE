var obj = JSON.parse($response.body);
obj = {
  "autoRenewProductId": "premium_vip_yearly",
  "iosDeviceProductVo": {
    "premiumVipWeekly": 3,
    "premiumGoldMonthly": 3,
    "premiumPlatinumMonthly": 3,
    "premiumGoldYearly": 3,
    "premiumPlatinumYearly": 2,
    "premiumPlatinumHalfYearly": 3,
    "premiumVipYearly": 2
  },
  "isTrialPeriod": true,
  "endTime": 4081109070000,
  "platform": 2,
  "vipType": "premium_vip_yearly",
  "duidDgest": "DIzjfUIvln",
  "autoRenewStatus": 1,
  "startTime": 1556241871000,
  "systemDate": 1556965441014
};

$done({body: JSON.stringify(obj)});l