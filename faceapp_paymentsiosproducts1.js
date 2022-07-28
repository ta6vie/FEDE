var obj = JSON.parse($response.body);

obj =  

  "product_ids" : [
    "pro_year"
  ],
  "receipt_creation_timestamp" : 1658983863
}

$done({body: JSON.stringify(obj)});