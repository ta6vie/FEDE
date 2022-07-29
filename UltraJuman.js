var obj = JSON.parse($response.body);

obj =  {
  "request_date": "2022-07-29T12:41:07Z",
  "request_date_ms": 1659098467337,
  "subscriber": {
    "entitlements": {
      "Premium": {
        "expires_date": "2023-08-05T12:41:04Z",
        "grace_period_expires_date": null,
        "product_identifier": "com.ultrahuman.ios.yearly",
        "purchase_date": "2022-07-29T12:41:04Z"
      }
    },
    "first_seen": "2022-07-29T12:39:22Z",
    "last_seen": "2022-07-29T12:39:22Z",
    "management_url": "https://apps.apple.com/account/subscriptions",
    "non_subscriptions": {},
    "original_app_user_id": "$RCAnonymousID:f9d4cd470e0f4ea1b875a8b366ff781f",
    "original_application_version": "4",
    "original_purchase_date": "2022-07-29T12:38:48Z",
    "other_purchases": {},
    "subscriptions": {
      "com.ultrahuman.ios.yearly": {
        "billing_issues_detected_at": null,
        "expires_date": "2023-08-05T12:41:04Z",
        "grace_period_expires_date": null,
        "is_sandbox": false,
        "original_purchase_date": "2022-07-29T12:41:05Z",
        "ownership_type": "PURCHASED",
        "period_type": "trial",
        "purchase_date": "2022-07-29T12:41:04Z",
        "store": "app_store",
        "unsubscribe_detected_at": null
      }
    }
  }
}
$done({body: JSON.stringify(obj)});