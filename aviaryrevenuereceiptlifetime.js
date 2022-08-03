var obj = JSON.parse($response.body);
obj= 

{
  "request_date_ms" : 1658979422205,
  "request_date" : "2022-07-28T03:37:02Z",
  "subscriber" : {
    "non_subscriptions" : {

    },
    "first_seen" : "2022-07-27T09:22:33Z",
    "original_application_version" : "135",
    "other_purchases" : {

    },
    "management_url" : "https://apps.apple.com/account/subscriptions",
    "subscriptions" : {
      "lifetime001" : {
        "is_sandbox" : false,
        "ownership_type" : "PURCHASED",
        "billing_issues_detected_at" : null,
        "period_type" : "trial",
        "expires_date" : "null",
        "grace_period_expires_date" : null,
        "unsubscribe_detected_at" : "2022-07-28T03:37:02Z",
        "original_purchase_date" : "2022-07-27T09:30:17Z",
        "purchase_date" : "2022-07-27T09:30:16Z",
        "store" : "app_store"
      }
    },
    "entitlements" : {
      "pro001" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2022-07-27T09:30:16Z",
        "product_identifier" : "lifetime001",
        "expires_date" : "null"
      }
    },
    "original_purchase_date" : "2022-07-27T07:30:07Z",
    "original_app_user_id" : "$RCAnonymousID:3928e5e1702547bba509e87fb16ef21a",
    "last_seen" : "2022-07-28T03:32:16Z"
  }
}
$done({body: JSON.stringify(obj)});