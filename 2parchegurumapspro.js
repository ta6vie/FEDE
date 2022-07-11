
var obj = JSON.parse($response.body);

obj = {

{
  "default_product_index" : 1,
  "active_product" : {
    "after_expire_timestamp" : 4073275762,
    "product_id" : "com.bodunov.galileo.subscription.month",
    "expire_timestamp" : 4073275762
  },
  "product_ids" : [
    "com.bodunov.galileo.subscription.month",
    "com.bodunov.galileo.subscription.year",
    "com.bodunov.galileo.all.02"
  ]
}

$done({body: JSON.stringify(obj)});
