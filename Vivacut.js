var obj = JSON.parse($response.body);

obj =  {
  "code": 200,
  "data": {
    "hasFreedTrialProds": [
      "VivaCut_Yearly_Pro_4"
    ],
    "hasIntroOfferProds": [],
    "hasPurchasedProds": [
      "VivaCut_Yearly_Pro_4"
    ],
    "list": [
      {
        "autoRenewProductId": "VivaCut_Yearly_Pro_4",
        "autoRenewStatus": true,
        "endTime": 4089141458000,
        "isTrialPeriod": true,
        "orderId": "450001180369547",
        "orderStatus": 1,
        "originalOrderId": "450001180369547",
        "productId": "VivaCut_Yearly_Pro_4",
        "productType": 3,
        "sign": "d92a8999b2c4f2e3d7f175c1e4cb6dd2",
        "startTime": 1659223989000
      }
    ],
    "systemDate": 1659224000905
  },
  "message": "successful",
  "success": true
}
$done({body: JSON.stringify(obj)});