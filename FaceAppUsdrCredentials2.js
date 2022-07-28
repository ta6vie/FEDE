var obj = JSON.parse($response.body);

obj = 

{
  "subscription_apple" : {
    "subscription_exp" : null,
    "product_id" : "y"
  },
  "subscription_google" : null,
  "user_token" : "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJkZXZpY2VfaWQiOiI1OEY4QTUzMS0zREZBLTRDNzgtQTk5Ni0xNjZGNTQ2RDc5MTQiLCJleHAiOjE2NTkwNzAyOTYsInN1YnNjcmlwdGlvbiI6eyJzdWJzY3JpcHRpb25fZXhwIjoxNjYwMDk4NDk0LCJjdXN0b21lcl9pZCI6ImlzNjIxODMzNCIsImluX2FwcF9pZCI6InByb19tb250aCIsInByb2R1Y3RfaWQiOiJtIn19.-ltGLO45vnPOosSQcP3fA3McyVjzWjpCEt4ijUj_MmR1bKHbmX5b6PuUX_CFcJRgqNTV4ZFTXpSKxrke7PuA_w",
  "user_token_lifetime" : 86400,
  "user" : null
}

$done({body: JSON.stringify(obj)});