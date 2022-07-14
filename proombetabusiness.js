let obj = JSON.parse($response.body);
obj= {

  "request_date": "2022-07-13T23:37:07Z",
  "request_date_ms": 1657755427427,
  "subscriber": {
    "entitlements": {
      "business": {
        "expires_date": "2099-07-09T06:03:58Z",
        "grace_period_expires_date": null,
        "product_identifier": "com.background.business.monthly",
        "purchase_date": "2022-07-09T05:58:58Z"
      },
      "pro": {
        "expires_date": "2099-07-14T00:36:56Z",
        "grace_period_expires_date": null,
        "product_identifier": "com.background.pro.yearly",
        "purchase_date": "2022-07-13T23:36:56Z"
      }
    },
    "first_seen": "2022-06-30T03:17:49Z",
    "last_seen": "2022-07-13T23:19:21Z",
    "management_url": "https://apps.apple.com/account/subscriptions",
    "non_subscriptions": {},
    "original_app_user_id": "Jx2s15BPbPXTVqeK6G5X8KbO80v2",
    "original_application_version": "1.0",
    "original_purchase_date": "2013-08-01T07:00:00Z",
    "other_purchases": {},
    "subscriptions": {
      "com.background.business.monthly": {
        "billing_issues_detected_at": null,
        "expires_date": "2022-07-09T06:03:58Z",
        "grace_period_expires_date": null,
        "is_sandbox": true,
        "original_purchase_date": "2022-05-21T23:58:50Z",
        "ownership_type": "PURCHASED",
        "period_type": "normal",
        "purchase_date": "2022-07-09T05:58:58Z",
        "store": "app_store",
        "unsubscribe_detected_at": null
      },
      "com.background.pro.yearly": {
        "billing_issues_detected_at": null,
        "expires_date": "2099-07-14T00:36:56Z",
        "grace_period_expires_date": null,
        "is_sandbox": true,
        "original_purchase_date": "2022-05-21T23:58:50Z",
        "ownership_type": "PURCHASED",
        "period_type": "normal",
        "purchase_date": "2022-07-13T23:36:56Z",
        "store": "app_store",
        "unsubscribe_detected_at": null
      }
    }
  }

$done({body: JSON.stringify(obj)});