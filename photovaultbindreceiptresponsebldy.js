var obj = JSON.parse($response.body);

obj = 

{
  "result" : "ok",
  "data" : {
    "product_id" : "com.camerasideas.photovault.membership.yearly",
    "id" : 42965,
    "original_transaction_id" : "300001177996834",
    "try_user_id" : null,
    "auto_renew_status" : true,
    "expires_date" : 1753656570
  }
}
$done({body: JSON.stringify(obj)});