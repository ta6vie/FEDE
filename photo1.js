let obj = JSON.parse($response.body);
obj= {

  "request_date_ms" : 1657766207977,
  "request_date" : "2022-07-14T02:36:47Z",
  "subscriber" : {
    "non_subscriptions" : {

    },
    "first_seen" : "2022-06-30T03:17:49Z",
    "original_application_version" : "1.0",
    "other_purchases" : {

    },
    "management_url" : "https://apps.apple.com/account/subscriptions",
    "subscriptions" : {
      "com.background.pro.yearly" : {
        "is_sandbox" : false,
        "ownership_type" : "PURCHASED",
        "billing_issues_detected_at" : null,
        "period_type" : "normal",
        "expires_date" : "2050-07-14T03:27:56Z",
        "grace_period_expires_date" : "2050-07-14 23:41:42 Etc/GMT",
        "unsubscribe_detected_at" : null,
        "original_purchase_date" : "2022-05-21T23:58:50Z",
        "purchase_date" : "2022-07-14T02:27:56Z",
        "store" : "app_store"
      },
      "com.background.business.monthly" : {
        "is_sandbox" : false,
        "ownership_type" : "PURCHASED",
        "billing_issues_detected_at" : null,
        "period_type" : "normal",
        "expires_date" : "2050-07-14T02:39:52Z",
        "grace_period_expires_date" : null,
        "unsubscribe_detected_at" : null,
        "original_purchase_date" : "2022-05-21T23:58:50Z",
        "purchase_date" : "2022-07-14T02:34:52Z",
        "store" : "app_store"
      }
    },
    "entitlements" : {
      "pro" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2022-07-14T02:27:56Z",
        "product_identifier" : "com.background.pro.yearly",
        "expires_date" : "2050-07-14T03:27:56Z"
      },
      "business" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2022-07-14T02:34:52Z",
        "product_identifier" : "com.background.business.monthly",
        "expires_date" : "2050-07-14T02:39:52Z"
      }
    },
    "original_purchase_date" : "2013-08-01T07:00:00Z",
    "original_app_user_id" : "Jx2s15BPbPXTVqeK6G5X8KbO80v2",
    "last_seen" : "2022-07-13T23:19:21Z"
  }
}
$done({body: JSON.stringify(obj)});
