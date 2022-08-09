var obj = JSON.parse($response.body);

obj = 

{
  "films" : [
    {
      "goodId" : "fimoAesthetic400",
      "pay" : "sync",
      "goodPrice" : 1,
      "time" : "2022-05-29 11:44:09",
      "tagName" : "",
      "photo" : 0,
      "goodName" : "Aesthetic 400"
    },
    {
      "goodId" : "fimoBusiness400",
      "pay" : "sync",
      "goodPrice" : 0,
      "time" : "2022-05-29 11:44:09",
      "tagName" : "",
      "photo" : 0,
      "goodName" : "Business 400"
    },
    {
      "goodId" : "fimoEK80",
      "pay" : "sync",
      "goodPrice" : 0,
      "time" : "2022-05-29 11:44:09",
      "tagName" : "",
      "photo" : 1,
      "goodName" : "EK 80"
    },
    {
      "goodId" : "fimoIFPAN100",
      "pay" : "sync",
      "goodPrice" : 0,
      "time" : "2022-05-29 11:44:09",
      "tagName" : "",
      "photo" : 0,
      "goodName" : "PAN 100"
    },
    {
      "goodId" : "fimoLMcolor100",
      "pay" : "sync",
      "goodPrice" : 0,
      "time" : "2022-05-29 11:44:09",
      "tagName" : "",
      "photo" : 0,
      "goodName" : "LM Color 100"
    }
  ],
  "subscribe" : {
    "valid" : true,
    "forever" : 1,
    "endTime" : 0
  },
  "filmsCommonOrder" : [

  ],
  "user" : {
    "id" : 3281149,
    "uuid" : "000806.9603c48c32bb43fd81994ccdb22e84e4.0343",
    "phone" : "",
    "sex" : null,
    "time" : "2022-05-29 11:43:50",
    "wx" : null,
    "location" : "",
    "icon" : "https://ovo-oss.zbisq.com/yoyi_global/lLdkNy.jpg",
    "orgin" : "apple",
    "platform" : 1,
    "sync" : 1,
    "email" : "",
    "name" : "FIMO_71A666",
    "status" : 1
  }
}

$done({body: JSON.stringify(obj)});

