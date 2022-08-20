var obj = JSON.parse($response.body);
obj= 

{
  "request_date": "2022-08-20T08:34:52Z",
  "request_date_ms": 1660984492746,
  "subscriber": {
    "entitlements": {
      "plus": {
        "expires_date": "2040-08-27T08:34:48Z",
        "grace_period_expires_date": null,
        "product_identifier": "com.readdle.ScannerMini.subscription.year30",
        "purchase_date": "2022-08-20T08:34:48Z"
      }
    },
    "first_seen": "2022-08-20T08:33:45Z",
    "last_seen": "2022-08-20T08:33:45Z",
    "management_url": "https://apps.apple.com/account/subscriptions",
    "non_subscriptions": {},
    "original_app_user_id": "$RCAnonymousID:45d0a59994dd47629b649a84add1e24e",
    "original_application_version": "8.10.0.469",
    "original_purchase_date": "2022-08-19T23:27:07Z",
    "other_purchases": {},
    "subscriptions": {
      "com.readdle.ScannerMini.subscription.year30": {
        "billing_issues_detected_at": null,
        "expires_date": "2040-08-27T08:34:48Z",
        "grace_period_expires_date": null,
        "is_sandbox": false,
        "original_purchase_date": "2022-08-20T08:34:49Z",
        "ownership_type": "PURCHASED",
        "period_type": "trial",
        "purchase_date": "2022-08-20T08:34:48Z",
        "store": "app_store",
        "unsubscribe_detected_at": null
      }
    }
  }
}
$done({body: JSON.stringify(obj)});