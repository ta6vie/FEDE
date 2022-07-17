var obj = JSON.parse($response.body);

obj = 

{
  "request_date_ms" : 1643262989454,
  "request_date" : "2022-01-27T05:56:29Z",
  "subscriber" : {
    "non_subscriptions" : {
      "com.ziheng.totowallet.onetimepurchase" : [
        {
          "id" : "6060eea19b",
          "is_sandbox" : true,
          "purchase_date" : "2022-01-27T04:17:03Z",
          "original_purchase_date" : "2022-01-27T04:17:03Z",
          "store" : "app_store"
        }
      ]
    },
    "first_seen" : "2021-11-24T07:17:57Z",
    "original_application_version" : "1.0",
    "other_purchases" : {
      "com.ziheng.totowallet.onetimepurchase" : {
        "purchase_date" : "2022-01-27T04:17:03Z"
      }
    },
    "management_url" : "itms-apps://apps.apple.com/account/subscriptions",
    "subscriptions" : {
      "com.ziheng.totowallet.monthly" : {
        "is_sandbox" : false,
        "ownership_type" : "PURCHASED",
        "billing_issues_detected_at" : null,
        "period_type" : "normal",
        "expires_date" : "2022-02-11T11:15:28Z",
        "grace_period_expires_date" : null,
        "unsubscribe_detected_at" : "2022-01-24T05:49:32Z",
        "original_purchase_date" : "2022-01-11T11:15:29Z",
        "purchase_date" : "2022-01-11T11:15:28Z",
        "store" : "app_store"
      },
      "com.ziheng.totowallet.yearly" : {
        "is_sandbox" : false,
        "ownership_type" : "PURCHASED",
        "billing_issues_detected_at" : null,
        "period_type" : "trial",
        "expires_date" : "2021-12-21T09:56:52Z",
        "grace_period_expires_date" : null,
        "unsubscribe_detected_at" : "2021-12-19T13:27:33Z",
        "original_purchase_date" : "2021-12-18T09:56:53Z",
        "purchase_date" : "2021-12-18T09:56:52Z",
        "store" : "app_store"
      }
    },
    "entitlements" : {
      "all" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2022-01-27T04:17:03Z",
        "product_identifier" : "com.ziheng.totowallet.onetimepurchase",
        "expires_date" : null
      }
    },
    "original_purchase_date" : "2013-08-01T07:00:00Z",
    "original_app_user_id" : "$RCAnonymousID:04d7eec58523496c9b29d3d6f4580ab6",
    "last_seen" : "2022-01-27T04:17:54Z"
  }
}
$done({body: JSON.stringify(obj)});

