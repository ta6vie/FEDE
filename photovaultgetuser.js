var obj = JSON.parse($response.body);

obj = 

{
  "result" : "ok",
  "user" : {
    "should_sync" : false,
    "current_size" : 0,
    "language" : "es",
    "total_files" : 0,
    "total_size" : 0,
    "trial_expire_time" : null,
    "expire_delete_time" : null,
    "expire_time" : 1753656570,
    "aliwei_receipt_id" : null,
    "current_receipt_type" : "IOS",
    "ios_permenent_id" : null,
    "is_permenent" : false,
    "aliwei_permenent_id" : null,
    "id" : 322055,
    "total_size_string" : "0",
    "product_id" : "com.camerasideas.photovault.membership.yearly",
    "email" : "el_zari@hotmail.com",
    "google_permenent_id" : null,
    "receipt_id" : 42965,
    "update_time" : 1658960664.5290551,
    "google_receipt_id" : null
  }
}
$done({body: JSON.stringify(obj)});