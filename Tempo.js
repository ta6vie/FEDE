var obj = JSON.parse($response.body);

obj = 

{
  "code" : 200,
  "data" : {
    "hasIntroOfferProds" : [

    ],
    "list" : [
      {
        "autoRenewProductId" : "All_Tempo_Access_Yearly_sub",
        "orderId" : "300001185193469",
        "isTrialPeriod" : true,
        "endTime" : 4089570097000,
        "productId" : "All_Tempo_Access_Yearly_sub",
        "productType" : 3,
        "startTime" : 1659655705000,
        "orderStatus" : 1,
        "autoRenewStatus" : true,
        "originalOrderId" : "300001185193469",
        "sign" : "8df34ff72f33ce36d66996912de93465"
      }
    ],
    "hasFreedTrialProds" : [
      "All_Tempo_Access_Yearly_sub"
    ],
    "systemDate" : 1659655739828,
    "hasPurchasedProds" : [
      "All_Tempo_Access_Yearly_sub"
    ]
  },
  "message" : "successful",
  "success" : true
}
$done({body: JSON.stringify(obj)});