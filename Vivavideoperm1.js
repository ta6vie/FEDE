var obj = JSON.parse($response.body);
obj = {
  "autoRenewProductId": "permanent_purchase_package_new",
  "iosDeviceProductVo": {
    "premiumVipWeekly": 3,
    "premiumGoldMonthly": 3,
    "premiumPlatinumMonthly": 3,
    "premiumGoldYearly": 3,
    "premiumPlatinumYearly": 2,
    "premiumPlatinumHalfYearly": 3,
    "premiumVipYearly": 3
  },
  "isTrialPeriod": true,
  "endTime": 4081109070000,
  "platform": 2,
  "vipType": "permanent_purchase_package_new",
  "duidDgest": "DIIe86X35",
  "autoRenewStatus": 1,
  "startTime": 1556241871000,
  "systemDate": 1556965441014
};

$done({body: JSON.stringify(obj)});