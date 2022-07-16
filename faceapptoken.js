let obj = JSON.parse($response.body);

{
  "user": null,
  "user_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJkZXZpY2VfaWQiOiI2MkI4NDJDQy0wQzdELTRBNzgtQTBFRC05NDE0QTk5OTcwRkUiLCJleHAiOjE2NTgwMjgwNzQsInN1YnNjcmlwdGlvbiI6eyJzdWJzY3JpcHRpb25fZXhwIjoxNjYwMDk4NDk0LCJjdXN0b21lcl9pZCI6ImlzNjIxODMzNCIsImluX2FwcF9pZCI6InByb19tb250aCIsInByb2R1Y3RfaWQiOiJtIn19.BiUDjUk8qieQyrQeZOC5-c-3MWimqGlezOjoO3CeIAtsrC5wybA1z6bh9twebs1uQZNdDK0yGpRJ6Xb5ROB5Sw",
  "user_token_lifetime": 86400,
  "subscription_apple": {
    "subscription_exp": 1910404757,
    "product_id": "m"
  },
  "subscription_google": null
}


   
$done({body: JSON.stringify(obj)});