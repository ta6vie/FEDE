var obj = JSON.parse($response.body);

obj=

{
  "request_date_ms" : 1657396346029,
  "request_date" : "2022-07-09T19:52:26Z",
  "subscriber" : {
    "non_subscriptions" : {

    },
    "first_seen" : "2022-04-14T21:54:46Z",
    "original_application_version" : "2010",
    "entitlement" : {

    },
    "other_purchases" : {

    },
    "management_url" : null,
    "subscriptions" : {

    },
    "entitlements" : {

    },
    "original_purchase_date" : "2021-05-07T08:17:44Z",
    "original_app_user_id" : "f2e303ff-8e22-48c1-b1c0-632a97b53d93",
    "last_seen" : "2022-07-09T19:51:52Z"
  }
}
$done({body: JSON.stringify(obj)});
