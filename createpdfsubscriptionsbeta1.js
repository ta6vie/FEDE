var obj = JSON.parse($response.body);

obj = 

{
  "subscriptions" : [
    {
      "subscription_name" : "PDFPack",
      "subscription_state" : "ACTIVE",
      "biz_source" : "",
      "billing_term" : null,
      "sub_ref" : "FEF403828A4DD0E0D65A",
      "subscription_level" : "PLUS"
    }
  ]
}
$done({body: JSON.stringify(obj)});