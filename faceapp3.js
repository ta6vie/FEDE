var obj = $response.body; 
obj = {
 

  "product_ids": ["pro_year"],
  "receipt_creation_timestamp": 1657941647
}

$done({body: JSON.stringify(obj)});