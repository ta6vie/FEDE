var obj = JSON.parse($response.body);

obj = 

{
  "data" : {
    "results" : {
      "locale" : "es_ES",
      "id" : "6dc82710-9799-4d7a-86c9-ea336d628b70",
      "created_at" : "2022-08-07T03:30:30.817Z",
      "subscriptions" : [
        {
          "id" : "300bb1f3-31f1-43eb-b947-fe0acd877370",
          "unit" : "day",
          "group_id" : "e9359adb",
          "autorenew_enabled" : false,
          "expires_at" : "2023-08-10T03:31:37.000Z",
          "in_retry_billing" : false,
          "introductory_activated" : true,
          "cancelled_at" : null,
          "platform" : "ios",
          "product_id" : "com.aiarlabs.prequel.subscription.weekly",
          "retries_count" : 0,
          "started_at" : "2022-08-07T03:31:38.000Z",
          "local" : false,
          "next_check_at" : "2122-08-11T00:10:09.144Z",
          "kind" : "autorenewable",
          "units_count" : 7,
          "environment" : "production",
          "status" : "active"
        }
      ],
      "user_id" : "KCH-4E7D2504-84D0-4565-976C-7A4271C8F4F6",
      "currency" : {
        "id" : "d0cb35d7-7fa4-4a69-866a-539ea241718b",
        "country_code" : "ES",
        "code" : "EUR"
      },
      "devices" : [

      ]
    },
    "meta" : null
  },
  "errors" : null
}

$done({body: JSON.stringify(obj)});