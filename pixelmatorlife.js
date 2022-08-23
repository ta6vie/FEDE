var obj = JSON.parse($response.body);

obj =  
{
  "product_ids" : [
    "pixelmator_photo_lifetime_v1"
  ]
  "receipt_creation_timestamp" : 1658649180
}
$done({body: JSON.stringify(obj)});