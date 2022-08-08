var obj = JSON.parse($response.body);

obj = 

{
  "request_date": "2022-08-07T00:10:46Z",
  "request_date_ms": 1659831046411,
  "subscriber": {
    "entitlements": {
      "premium": {
        "expires_date": "2099-08-14T00:10:42Z",
        "grace_period_expires_date": null,
        "product_identifier": "com.ibakstudio.videomaker.cutmergevideo.year",
        "purchase_date": "2022-08-07T00:10:42Z"
      }
    },
    "first_seen": "2022-08-07T00:09:39Z",
    "last_seen": "2022-08-07T00:09:39Z",
    "management_url": "https://apps.apple.com/account/subscriptions",
    "non_subscriptions": {},
    "original_app_user_id": "$RCAnonymousID:f5c6b5e2946d45f3ab0d61f4380c65ce",
    "original_application_version": "70",
    "original_purchase_date": "2022-08-07T00:08:50Z",
    "other_purchases": {},
    "subscriptions": {
 "com.ibakstudio.videomaker.cutmergevideo.year": {
        "billing_issues_detected_at": null,
        "expires_date": "2099-08-14T00:10:42Z",
        "grace_period_expires_date": null,
        "is_sandbox": false,
        "original_purchase_date": "2022-08-07T00:10:43Z",
        "ownership_type": "PURCHASED",
        "period_type": "trial",
        "purchase_date": "2022-08-07T00:10:42Z",
        "store": "app_store",
        "unsubscribe_detected_at": null
      }
    }
  }
}
$done({body: JSON.stringify(obj)});