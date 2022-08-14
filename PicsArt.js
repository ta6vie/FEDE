var obj = JSON.parse($response.body);

obj = 

{
  "status": "success",
  "response": [{
    "status": "SUBSCRIPTION_PURCHASED",
    "is_trial": true,
    "order_id": "300001036386437",
    "plan_meta": {
      "id": "com.picsart.studio.subscription_plus_monthly",
      "frequency": "monthly",
      "type": "renewable",
      "scope_id": "full",
      "product_id": "subscription_plus_monthly",
      "description": "plus",
      "tier_id": "gold_old",
      "permissions": ["premium_tools_standard", "premium_tools_ai"],
      "level": 1500
    },
    "expire_date": 4121920029000,
    "purchase_date": 1644049228000,
    "subscription_id": "com.picsart.studio.subscription_plus_monthly",
    "original_order_id": "300001036386437",
    "is_eligible_for_introductory": false,
    "reason": "ok"
  }]
}
$done({body: JSON.stringify(obj)});