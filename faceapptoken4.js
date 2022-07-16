let obj = JSON.parse($response.body);

{

  "subscription_apple" : {
    "subscription_exp" : 1878870209,
    "product_id" : "m"
  },
  "subscription_google" : null,
  "user_token" : "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJkZXZpY2VfaWQiOiIwRjFDOEFGMC1FNTQ1LTQ1RDgtQTMzMS1DQzU2MEUwQTJCQzgiLCJleHAiOjE2NTgwMzE1NzksInN1YnNjcmlwdGlvbiI6eyJzdWJzY3JpcHRpb25fZXhwIjoxNjYwMDk4NDk0LCJjdXN0b21lcl9pZCI6ImlzNjIxODMzNCIsImluX2FwcF9pZCI6InByb19tb250aCIsInByb2R1Y3RfaWQiOiJtIn19.32qW6U8gujN7RhsXSWS6Qn3F_2cImLymBtUY7zTnGqtBFj7ZpoxT4fD6O-7vVtI9rcCxpQ0pLWoekC40HHLuRQ",
  "user_token_lifetime" : 86400,
  "user" : null
}

   
$done({body: JSON.stringify(obj)});