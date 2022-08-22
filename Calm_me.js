var obj = JSON.parse($response.body);
obj= 

{
  "id": "Xmynfft9x-",
  "name": "Federico",
  "email": "el_zari@hotmail.com",
  "token": "z1myRb7UH/fep/zPppAYWw89Bb0",
  "groups": [
    "0-default"
  ],
  "is_hipaa_compliant": false,
  "created_at": "2020-05-13T14:02:29.184Z",
  "language": "es",
  "email_confirmation_status": "confirmed",
  "has_opted_in_limited_data_use": true,
  "subscription": {
    "type": "ios",
    "expires": null,
    "valid": true,
    "user_id": "Xmynfft9x-",
    "id": "300001133842520",
    "subscription_plan": "com.calm.lifetime.expensive",
    "plan_duration": "lifetime",
    "is_renewable": false,
    "is_canceled": false,
    "is_refunded": false,
    "in_free_trial_window": false,
    "purchaser_platform": "ios",
    "payment_processor": "itunes",
    "has_ever_done_free_trial": true,
    "has_ever_had_ios_subscription": true,
    "has_ever_had_android_subscription": false,
    "is_free": true,
    "began": "2022-06-06T00:11:43.000Z",
    "is_lifetime": true,
    "ios_details": {
      "id": "300001133842520",
      "expires": null,
      "began": "2022-06-06T00:11:43.000Z",
      "product_id": "com.calm.lifetime.expensive",
      "is_free_trial": false,
      "is_canceled": false,
      "is_renewable": true,
      "plan_duration": "year",
      "original_transaction_id": "300001036398075",
      "purchaser_platform": "ios",
      "payment_processor": "itunes"
    }
  }
}
$done({body: JSON.stringify(obj)});l