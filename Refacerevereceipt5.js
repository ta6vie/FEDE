var obj = JSON.parse($response.body);

obj = 

{
  "request_date": "2022-08-05T07:44:58Z",
  "request_date_ms": 1659685498034,
  "subscriber": {
    "entitlements": {},
    "first_seen": "2022-04-14T21:54:46Z",
    "last_seen": "2022-08-05T07:44:06Z",
    "management_url": null,
    "non_subscriptions": {},
    "original_app_user_id": "f2e303ff-8e22-48c1-b1c0-632a97b53d93",
    "original_application_version": "2010",
    "original_purchase_date": "2021-05-07T08:17:44Z",
    "other_purchases": {},
    "subscriptions": {
      "com.neocortext.doublicatapp.subscription.bro.weekly": {
        "billing_issues_detected_at": null,
        "expires_date": "2022-09-01T07:49:25Z",
        "grace_period_expires_date": null,
        "is_sandbox": false,
        "original_purchase_date": "2022-07-13T20:33:55Z",
        "ownership_type": "PURCHASED",
        "period_type": "normal",
        "purchase_date": "2022-07-25T07:49:25Z",
        "store": "app_store",
        "unsubscribe_detected_at": "2022-07-31T00:50:47Z"
      },
      "com.neocortext.doublicatapp.subscription.promos.annual.50off": {
        "billing_issues_detected_at": null,
        "expires_date": "2022-07-13T06:16:18Z",
        "grace_period_expires_date": null,
        "is_sandbox": false,
        "original_purchase_date": "2022-07-10T06:16:19Z",
        "ownership_type": "PURCHASED",
        "period_type": "trial",
        "purchase_date": "2022-07-10T06:16:18Z",
        "store": "app_store",
        "unsubscribe_detected_at": "2022-07-10T06:31:59Z"
      }
    }
  }
}
$done({body: JSON.stringify(obj)});