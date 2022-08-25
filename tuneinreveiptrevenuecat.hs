var obj = JSON.parse($response.body);

obj =  

{
  "request_date_ms" : 1661403105601,
  "request_date" : "2022-08-25T04:51:45Z",
  "subscriber" : {
    "non_subscriptions" : {

    },
    "first_seen" : "2022-07-31T02:15:52Z",
    "original_application_version" : "577",
    "other_purchases" : {

    },
    "management_url" : null,
    "subscriptions" : {
      "com.tunein.TuneInRadio.TUNEIN_1_MONTH_C" : {
        "is_sandbox" : false,
        "ownership_type" : "PURCHASED",
        "billing_issues_detected_at" : null,
        "period_type" : "trial",
        "expires_date" : "2025-06-17T03:39:35Z",
        "grace_period_expires_date" : null,
        "unsubscribe_detected_at" : null,
        "original_purchase_date" : "2022-06-10T03:39:36Z",
        "purchase_date" : "2022-06-10T03:39:35Z",
        "store" : "app_store"
      },
      "com.tunein.TuneInRadio.TUNEIN_1_MONTH_7_DAY_9.99_versionA" : {
        "is_sandbox" : false,
        "ownership_type" : "PURCHASED",
        "billing_issues_detected_at" : null,
        "period_type" : "trial",
        "expires_date" : "2025-08-08T06:08:50Z",
        "grace_period_expires_date" : null,
        "unsubscribe_detected_at" : null,
        "original_purchase_date" : "2022-08-01T06:08:51Z",
        "purchase_date" : "2022-08-01T06:08:50Z",
        "store" : "app_store"
      },
      "com.tunein.TuneInRadio.TUNEIN_1_MONTH_A" : {
        "is_sandbox" : false,
        "ownership_type" : "PURCHASED",
        "billing_issues_detected_at" : null,
        "period_type" : "trial",
        "expires_date" : "2028-06-18T21:43:21Z",
        "grace_period_expires_date" : null,
        "unsubscribe_detected_at" : null,
        "original_purchase_date" : "2021-06-11T21:43:21Z",
        "purchase_date" : "2021-06-11T21:43:21Z",
        "store" : "app_store"
      }
    },
    "entitlements" : {

    },
    "original_purchase_date" : "2015-07-02T17:31:46Z",
    "original_app_user_id" : "D665A20B-722F-43F8-A5A7-BCE0A3F81A5E",
    "last_seen" : "2022-08-25T04:45:27Z"
  }
}
$done({body: JSON.stringify(obj)});