var obj = JSON.parse($response.body);

obj = 

{
  "request_date": "2022-08-06T17:38:26Z",
  "request_date_ms": 1659807506461,
  "subscriber": {
    "entitlements": {
      "content_blocker": {
        "expires_date": "2099-12-13T17:36:23Z",
        "grace_period_expires_date": null,
        "product_identifier": "com.hianzinjong.downloadslite.contentblocker.yearly",
        "purchase_date": "2022-08-06T17:36:23Z"
      }
    },
    "first_seen": "2022-08-06T17:35:20Z",
    "last_seen": "2022-08-06T17:35:20Z",
    "management_url": "https://apps.apple.com/account/subscriptions",
    "non_subscriptions": {},
    "original_app_user_id": "$RCAnonymousID:2595c997890947b3a95264f09b74ba83",
    "original_application_version": "80300",
    "original_purchase_date": "2021-11-13T03:38:59Z",
    "other_purchases": {},
    "subscriptions": {
      "com.hianzinjong.downloadslite.contentblocker.yearly": {
        "billing_issues_detected_at": null,
        "expires_date": "2099-12-13T17:36:23Z",
        "grace_period_expires_date": null,
        "is_sandbox": false,
        "original_purchase_date": "2022-08-06T17:36:24Z",
        "ownership_type": "PURCHASED",
        "period_type": "trial",
        "purchase_date": "2022-08-06T17:36:23Z",
        "store": "app_store",
        "unsubscribe_detected_at": null
      }
    }
  }
}
$done({body: JSON.stringify(obj)});