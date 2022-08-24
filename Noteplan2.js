var obj = JSON.parse($response.body);

obj = 

{
  "request_date_ms" : 1661380613848,
  "request_date" : "2022-08-24T22:36:53Z",
  "subscriber" : {
    "non_subscriptions" : {

    },
    "first_seen" : "2022-08-24T14:00:07Z",
    "original_application_version" : "839",
    "other_purchases" : {

    },
    "management_url" : "https://apps.apple.com/account/subscriptions",
    "subscriptions" : {
      "co.noteplan.subscription.personal.annual" : {
        "is_sandbox" : false,
        "ownership_type" : "PURCHASED",
        "billing_issues_detected_at" : null,
        "period_type" : "trial",
        "expires_date" : "2023-09-07T14:00:42Z",
        "grace_period_expires_date" : null,
        "unsubscribe_detected_at" : null,
        "original_purchase_date" : "2022-08-24T14:00:43Z",
        "purchase_date" : "2022-08-24T14:00:42Z",
        "store" : "app_store"
      }
    },
    "entitlements" : {
      "Personal Annual" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2022-08-24T14:00:42Z",
        "product_identifier" : "co.noteplan.subscription.personal.annual",
        "expires_date" : "2023-09-07T14:00:42Z"
      }
    },
    "original_purchase_date" : "2022-08-24T13:56:34Z",
    "original_app_user_id" : "$RCAnonymousID:529042a338834692a679119d0677d00c",
    "last_seen" : "2022-08-24T14:00:07Z"
  }
}
$done({body: JSON.stringify(obj)});