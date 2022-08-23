var obj = JSON.parse($response.body);

obj = 

{
  "request_date_ms" : 1661236032010,
  "request_date" : "2022-08-23T06:27:12Z",
  "subscriber" : {
    "non_subscriptions" : {

    },
    "first_seen" : "2022-08-23T06:12:25Z",
    "original_application_version" : "220812.1006",
    "other_purchases" : {

    },
    "management_url" : "https://apps.apple.com/account/subscriptions",
    "subscriptions" : {
      "pixelmator_photo_yearly_v1" : {
        "is_sandbox" : false,
        "ownership_type" : "PURCHASED",
        "billing_issues_detected_at" : null,
        "period_type" : "trial",
        "expires_date" : "2099-08-30T06:19:55Z",
        "grace_period_expires_date" : null,
        "unsubscribe_detected_at" : null,
        "original_purchase_date" : "2022-08-23T06:19:56Z",
        "purchase_date" : "2022-08-23T06:19:55Z",
        "store" : "app_store"
      }
    },
    "entitlements" : {
      "pixelmator_photo_pro_access" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2022-08-23T06:19:55Z",
        "product_identifier" : "pixelmator_photo_lifetime_v1",
        "expires_date" : "2099-08-30T06:19:55Z"
      }
    },
    "original_purchase_date" : "2022-08-23T06:08:47Z",
    "original_app_user_id" : "$RCAnonymousID:d61f2bd8cab24d18b1f2864cc768ce04",
    "last_seen" : "2022-08-23T06:12:25Z"
  }
}
$done({body: JSON.stringify(obj)});