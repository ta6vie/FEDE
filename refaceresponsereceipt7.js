var obj = JSON.parse($response.body);

obj = 

{
  "request_date_ms" : 1659147384399,
  "request_date" : "2022-07-30T02:16:24Z",
  "subscriber" : {
    "non_subscriptions" : {

    },
    "first_seen" : "2022-04-14T21:54:46Z",
    "original_application_version" : "2010",
    "other_purchases" : {

    },
    "management_url" : "https://apps.apple.com/account/subscriptions",
    "subscriptions" : {
      "com.neocortext.doublicatapp.subscription.bro.weekly" : {
        "is_sandbox" : false,
        "ownership_type" : "PURCHASED",
        "billing_issues_detected_at" : null,
        "period_type" : "normal",
        "expires_date" : "2025-08-01T07:49:25Z",
        "grace_period_expires_date" : null,
        "unsubscribe_detected_at" : null,
        "original_purchase_date" : "2022-07-13T20:33:55Z",
        "purchase_date" : "2022-07-25T07:49:25Z",
        "store" : "app_store"
      },
      "com.neocortext.doublicatapp.subscription.promos.annual.50off" : {
        "is_sandbox" : false,
        "ownership_type" : "PURCHASED",
        "billing_issues_detected_at" : null,
        "period_type" : "trial",
        "expires_date" : "2025-07-13T06:16:18Z",
        "grace_period_expires_date" : null,
        "unsubscribe_detected_at" : "2022-07-10T06:31:59Z",
        "original_purchase_date" : "2022-07-10T06:16:19Z",
        "purchase_date" : "2022-07-10T06:16:18Z",
        "store" : "app_store"
      }
    },
    "entitlements" : {

    },
    "original_purchase_date" : "2021-05-07T08:17:44Z",
    "original_app_user_id" : "f2e303ff-8e22-48c1-b1c0-632a97b53d93",
    "last_seen" : "2022-07-29T16:56:24Z"
  }
}
$done({body: JSON.stringify(obj)});