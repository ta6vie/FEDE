
var obj = JSON.parse($response.body);
obj = {

  "msg" : "success",
  "data" : [
    {
      "status" : 1,
      "is_free_trial" : true,
      "active" : true,
      "product_identifier" : "Product_Auto_Renew_Annual_2022_05_13",
      "enanled_auto_renew" : true,
      "is_gift_subscription" : false,
      "platform" : "iOS",
      "billing_date_ms" : 1658130453000,
      "original_purchase_date_ms" : 1657525654000,
      "start_date_ms" : 1657525653000,
      "expires_date_ms" : 4081109070000,
      "group_identifier" : "20936308",
      "origin_transaction_id" : "300001163546760"
    }
  ],
  "code" : 1
}

$done({body: JSON.stringify(obj)});