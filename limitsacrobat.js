var obj = JSON.parse($response.body);

obj =  {

  "acrobat_pro" : true,
  "acrobat_std" : false
}
$done({body: JSON.stringify(obj)});