var obj = JSON.parse($response.body);
obj= {

  "groups" : [
    "0-default"
  ],
  "id" : "1oD5z2k7nX",
  "created_at" : "2022-04-03T06:55:27.502Z",
  "email_confirmation_status" : "unconfirmed",
  "has_opted_in_limited_data_use" : true,
  "email" : "fedemf38@icloud.com",
  "language" : "es",
  "token" : "u7EmRPvlmqbfrqHo6UA0ZRSPKs0",
  "is_hipaa_compliant" : false,
  "name" : "Federico",
  "subscription" : {
    "is_refunded" : false,
    "ios_details" : {
      "product_id" : "com.calm.yearly_usa_60_not_usa_60",
      "began" : "2022-06-06T00:11:43.000Z",
      "is_free_trial" : false,
      "id" : "300001133842520",
      "is_canceled" : false,
      "is_renewable" : true,
      "plan_duration" : "year",
      "payment_processor" : "itunes",
      "original_transaction_id" : "300001036398075",
      "expires" : "2024-06-06T00:11:43.000Z",
      "purchaser_platform" : "ios"
    },
    "subscription_plan" : "com.calm.yearly_usa_60_not_usa_60",
    "has_ever_had_android_subscription" : false,
    "has_ever_done_free_trial" : true,
    "user_id" : "1oD5z2k7nX",
    "plan_duration" : "year",
    "has_ever_had_ios_subscription" : true,
    "purchaser_platform" : "ios",
    "is_lifetime" : false,
    "is_canceled" : false,
    "type" : "ios",
    "is_free" : false,
    "id" : "300001133842520",
    "expires" : "2024-06-06T00:11:43.000Z",
    "valid" : true,
    "payment_processor" : "itunes",
    "began" : "2022-06-06T00:11:43.000Z",
    "in_free_trial_window" : false,
    "is_renewable" : true
  }
}


$done({body: JSON.stringify(obj)});l