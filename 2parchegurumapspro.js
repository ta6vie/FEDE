
var obj = JSON.parse($response.body);

obj = {


  "resend_ad_token" : true,
  "product_ids" : [
    "com.bodunov.galileo.subscription.month",
    "com.bodunov.galileo.subscription.year",
    "com.bodunov.galileo.all.02"
  ],
  "default_product_index" : 1,
  "resend_receipt" : true
}

$done({body: JSON.stringify(obj)});