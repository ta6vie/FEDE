var obj = JSON.parse($response.body);

obj =  {
  "request_date_ms" : 1660830062804,
  "request_date" : "2022-08-18T13:41:02Z",
  "subscriber" : {
    "non_subscriptions" : {

    },
    "first_seen" : "2022-08-18T13:40:25Z",
    "original_application_version" : "49404",
    "other_purchases" : {

    },
    "management_url" : "https://apps.apple.com/account/subscriptions",
    "subscriptions" : {
      "com.algoriddim.djay_iphone_free.pro.yearly" : {
        "is_sandbox" : false,
        "ownership_type" : "PURCHASED",
        "billing_issues_detected_at" : null,
        "period_type" : "trial",
        "expires_date" : "2022-08-25T13:40:58Z",
        "grace_period_expires_date" : null,
        "unsubscribe_detected_at" : null,
        "original_purchase_date" : "2022-08-18T13:40:59Z",
        "purchase_date" : "2022-08-18T13:40:58Z",
        "store" : "app_store"
      }
    },
    "entitlements" : {
      "pro" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2022-08-18T13:40:58Z",
        "product_identifier" : "com.algoriddim.djay_iphone_free.pro.yearly",
        "expires_date" : "2023-08-25T13:40:58Z"
      }
    },
    "original_purchase_date" : "2022-08-18T13:40:01Z",
    "original_app_user_id" : "$RCAnonymousID:55c80e20306e4e75a30875545cab38b1",
    "last_seen" : "2022-08-18T13:40:25Z"
  }
}
$done({body: JSON.stringify(obj)});