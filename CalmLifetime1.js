var obj = JSON.parse($response.body);
obj= {

  "is_refunded" : false,
  "ios_details" : {
    "product_id" : "com.calm.lifetime.expensive",
    "began" : "2022-06-06T00:11:43.000Z",
    "is_free_trial" : false,
    "id" : "300001133842520",
    "is_canceled" : false,
    "is_renewable" : false,
    "plan_duration" : "lifetime",
    "payment_processor" : "itunes",
    "original_transaction_id" : "300001036398075",
    "expires" : "2099-06-06T00:11:43.000Z",
    "purchaser_platform" : "ios"
  },
  "subscription_plan" : "com.calm.lifetime.expensive",
  "has_ever_had_android_subscription" : false,
  "has_ever_done_free_trial" : true,
  "has_ever_had_ios_subscription" : true,
  "plan_duration" : "lifetime",
  "purchaser_platform" : "ios",
  "is_lifetime" : true,
  "is_canceled" : false,
  "type" : "ios",
  "is_free" : false,
  "id" : "300001133842520",
  "expires" : "2099-06-06T00:11:43.000Z",
  "valid" : true,
  "payment_processor" : "itunes",
  "began" : "2022-06-06T00:11:43.000Z",
  "in_free_trial_window" : false,
  "is_renewable" : false,
  "conversion_value" : 0
}
$done({body: JSON.stringify(obj)});l