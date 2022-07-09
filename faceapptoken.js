/*
 FaceApp解锁vip
 
^https:\/\/api\.faceapp\.io(.*)\/api\/v.*\/auth\/user\/credentials url script-response-body https://raw.githubusercontent.com/ackakakaka/QuantumultX/master/faceapp.js

[MITM]
hostname = api.faceapp.io
*/

var obj = $response.body; 
obj = {
 "user": null,
 "user_token": "eyJ0b2tlbiI6ImV5SmhiR2NpT2lKRlV6STFOaUlzSW1OMGVTSTZJbWx1ZEdjdWRqRWlmUS5FSXFrbzVZR0dJaWtvNVlHS0FFd2dLTUZPaVJCTmpVMVFqTXdNeTFDTWpreUxUUkZOa010T0RnNVF5MHpPVVV3UVRsRE1VRXhORGhBaXFTamxnWlNYUXBiTUZrd0V3WUhLb1pJemowQ0FRWUlLb1pJemowREFRY0RRZ0FFOW5XLUtOLXBXY3lVY0dRc1lJajJsVUxrWUJvWGQ3VUo4T2VZeUdqZm5ZTmRyRlN6aVYtWU10VEN6SjU2YjlLVzN1Y2lSS1F1dUJKUzRtWnk1S0JtcncuR0xsdnRIUVJReExFdWxGTENOZGhmNDJ1Z01EZzhLNElNNm9MNXBscEQ4TDNIRUMtS2E2SWd3NFdJQk5uaEUtbVBpbGFmOEQwS1NpS0g3aDVnZ3F5VXciLCJmaXJlRGF0ZSI6Njc5MTA3MzM4LjUxODQ5OTAyfQ==",
 "user_token_lifetime": 86400,
 "subscription_apple": {
  "subscription_exp": 1639391451,
  "product_id": "1"
 },
 "subscription_google": null
};
$done({body});