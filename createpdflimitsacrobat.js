var obj = JSON.parse($response.body);

obj = 
  
{
  "acrobat_pro" : false,
  "acrobat_std" : false
}

$done({body: JSON.stringify(obj)});