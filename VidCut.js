var obj = JSON.parse($response.body);

obj =

{
  "request_date_ms" : 1658528765448,
  "request_date" : "2022-07-22T22:26:05Z",
  "subscriber" : {
    "non_subscriptions" : {

    },
    "first_seen" : "2022-05-17T08:03:17Z",
    "original_application_version" : "578",
    "other_purchases" : {

    },
    "management_url" : null,
    "subscriptions" : {
      "com.ibakstudio.videomaker.cutmergevideo.yearly" : {
        "is_sandbox" : false,
        "ownership_type" : "PURCHASED",
        "billing_issues_detected_at" : null,
        "period_type" : "active",
        "expires_date" : "2027-05-20T14:24:42Z",
        "original_purchase_date" : "2022-05-17T14:24:43Z",
        "purchase_date" : "2022-05-17T14:24:42Z",
        "store" : "app_store"
      }
    },
    "entitlements" : {
      "pro" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2022-05-17T14:24:42Z",
        "product_identifier" : "com.ibakstudio.videomaker.cutmergevideo.yearly",
        "expires_date" : "2027-05-20T14:24:42Z"
      }
    },
    "original_purchase_date" : "2022-04-05T08:46:54Z",
    "original_app_user_id" : "cOZgWrllJIgop5W8vZsKbhzMLM22",
    "last_seen" : "2022-07-22T22:16:50Z"
  }
}
$done({body: JSON.stringify(obj)});

