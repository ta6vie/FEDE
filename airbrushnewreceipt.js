var obj = JSON.parse($response.body);

obj = 

{
  "request_date_ms" : 1658120239841,
  "request_date" : "2022-07-18T04:57:19Z",
  "subscriber" : {
    "non_subscriptions" : {

    },
    "first_seen" : "2022-07-18T04:56:11Z",
    "original_application_version" : "84",
    "other_purchases" : {

    },
    "management_url" : null,
    "subscriptions" : {
      "com.magicv.AirBrush.sub.allAccess.1year.newgeo10.fullPrice" : {
        "is_sandbox" : false,
        "ownership_type" : "PURCHASED",
        "billing_issues_detected_at" : null,
        "period_type" : "trial",
        "expires_date" : "2030-06-06T03:00:55Z",
        "grace_period_expires_date" : null,
        "unsubscribe_detected_at" : null,
        "original_purchase_date" : "2022-05-30T03:00:56Z",
        "purchase_date" : "2022-05-30T03:00:55Z",
        "store" : "app_store"
      }
    },
    "entitlements" : {
      "Premium" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2022-05-30T03:00:55Z",
        "product_identifier" : "com.magicv.AirBrush.sub.allAccess.1year.newgeo10.fullPrice",
        "expires_date" : "2030-06-06T03:00:55Z"
      }
    },
    "original_purchase_date" : "2021-09-30T02:45:22Z",
    "original_app_user_id" : "$RCAnonymousID:3c46444ef80246c7b29cf5a646a6eb1a",
    "last_seen" : "2022-07-18T04:56:11Z"
  }
}

$done({body: JSON.stringify(obj)});