var obj = JSON.parse($response.body);

obj = 

{
  "request_date": "2022-08-24T14:00:46Z",
  "request_date_ms": 1661349646340,
  "subscriber": {
    "entitlements": {
      "Personal Annual": {
        "expires_date": "2099-09-07T14:00:42Z",
        "grace_period_expires_date": null,
        "product_identifier": "co.noteplan.subscription.personal.annual",
        "purchase_date": "2022-08-24T14:00:42Z"
      }
    },
    "first_seen": "2022-08-24T14:00:07Z",
    "last_seen": "2022-08-24T14:00:07Z",
    "management_url": "https://apps.apple.com/account/subscriptions",
    "non_subscriptions": {},
    "original_app_user_id": "$RCAnonymousID:529042a338834692a679119d0677d00c",
    "original_application_version": "839",
    "original_purchase_date": "2022-08-24T13:56:34Z",
    "other_purchases": {},
    "subscriptions": {
      "co.noteplan.subscription.personal.annual": {
        "billing_issues_detected_at": null,
        "expires_date": "2099-09-07T14:00:42Z",
        "grace_period_expires_date": null,
        "is_sandbox": false,
        "original_purchase_date": "2022-08-24T14:00:43Z",
        "ownership_type": "PURCHASED",
        "period_type": "trial",
        "purchase_date": "2022-08-24T14:00:42Z",
        "store": "app_store",
        "unsubscribe_detected_at": null
      }
    }
  }
}
$done({body: JSON.stringify(obj)});