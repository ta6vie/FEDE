var obj = JSON.parse($response.body);

obj = 

{
  "request_date_ms" : 1658018141636,
  "request_date" : "2022-07-17T00:35:41Z",
  "subscriber" : {
    "non_subscriptions" : {

    },
    "first_seen" : "2021-09-18T21:44:13Z",
    "original_application_version" : "11",
    "other_purchases" : {

    },
    "management_url" : null,
    "subscriptions" : {
      "com.pixite.pigment.1yearR" : {
        "is_sandbox" : false,
        "ownership_type" : "PURCHASED",
        "billing_issues_detected_at" : null,
        "period_type" : "trial",
        "expires_date" : "2050-09-25T22:10:06Z",
        "grace_period_expires_date" : null,
        "unsubscribe_detected_at" : null,
        "original_purchase_date" : "2021-09-18T22:10:06Z",
        "purchase_date" : "2021-09-18T22:10:06Z",
        "store" : "app_store"
      }
    },
    "entitlements" : {
      "premium_access" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2021-09-18T22:10:06Z",
        "product_identifier" : "com.pixite.pigment.1yearR",
        "expires_date" : "2050-09-25T22:10:06Z"
      }
    },
    "original_purchase_date" : "2021-09-18T21:42:33Z",
    "original_app_user_id" : "A979C452-C852-43E0-B4DD-E5F4D2EB74C1",
    "last_seen" : "2022-07-17T00:35:21Z"
  }
}
$done({body: JSON.stringify(obj)});
