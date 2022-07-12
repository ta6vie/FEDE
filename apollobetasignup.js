var obj = JSON.parse($response.body);
obj = {

  "binky" : "https://forms.gle/",
  "is_active" : true,
  "buster" : "https://forms.gle",
  "francine" : "https://forms.gle"
}

$done({body: JSON.stringify(obj)});