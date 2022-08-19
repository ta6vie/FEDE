var obj = JSON.parse($response.body);

obj = 

[{
  "service_name": "web_ug_pro_account",
  "date_access": 1597796448,
  "lifetime": 0,
  "trial": 1,
  "product_id": "com.ultimateguitar.ugt.1year2",
  "product_code": 252,
  "auto_renew": 1,
  "auto_renewing": 1
}, {
  "service_name": "web_ug_edu_courses",
  "date_access": 1597796448,
  "lifetime": 0,
  "trial": 1,
  "product_id": "com.ultimateguitar.ugt.edu.1year",
  "product_code": 695,
  "auto_renew": 1,
  "auto_renewing": 1
}, {
  "service_name": "ios_ug_pro_account",
  "date_access": 1597796448,
  "lifetime": 0,
  "trial": 1,
  "product_id": "com.ultimateguitar.ugt.1year2",
  "product_code": 252,
  "auto_renew": 0,
  "auto_renewing": 0
}, {
  "service_name": "ios_ug_edu_courses",
  "date_access": 1597796448,
  "lifetime": 0,
  "trial": 1,
  "product_id": "com.ultimateguitar.ugt.edu.1year",
  "product_code": 695,
  "auto_renew": 0,
  "auto_renewing": 0
}, {
  "service_name": "android_ug_pro_account",
  "date_access": 1597796448,
  "lifetime": 0,
  "trial": 1,
  "product_id": "com.ultimateguitar.ugt.1year2",
  "product_code": 252,
  "auto_renew": -1,
  "payment_state": 1,
  "auto_renewing": 1
}, {
  "service_name": "android_ug_edu_courses",
  "date_access": 1597796448,
  "lifetime": 0,
  "trial": 1,
  "product_id": "com.ultimateguitar.ugt.edu.1year",
  "product_code": 695,
  "auto_renew": 1,
  "auto_renewing": 1
}]
$done({body: JSON.stringify(obj)});

