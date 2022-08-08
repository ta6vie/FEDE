var obj = JSON.parse($response.body);

obj= {

{
  "status": 0,
  "products": [{
    "productId": "com.algoriddim.djay_iphone_free.pro.yearly",
    "expired": false,
    "expirationDate": "2099-03-31T10:17:41.000Z",
    "inTrialPeriod": true,
    "autoRenewEnabled": true,
    "autoRenewProductId": "com.algoriddim.djay_iphone_free.pro.yearly",
    "expirationIntent": 0
  }],
  "consumedProductDiscounts": [""]
}

$done({body: JSON.stringify(obj)});