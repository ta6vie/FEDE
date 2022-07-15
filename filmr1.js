var obj = JSON.parse($response.body);
obj = {

  "is_free_user" : false,
  "upgrade_details" : {
    "action_available" : true,
    "action_title" : "Upgrade to Desktop Plan",
    "upgradeable_plan_ids" : [
      1,
    ]
  },
  "next_renewal_date" : "2099-07-11T13:26:01Z",
  "title" : "Mobile Only",
  "purchase_date" : "2022-07-11T13:26:02Z",
  "includes_access_to" : [
    "Mobile Pro"
  ],
  "is_iap_linked" : true,
  "current_payment_source" : "mobile",
  "show_next_renewal_date" : true,
  "duration" : "YEARLY",
  "purchase_id" : "300001163734784",
  "plan" : "MOBILE_PRO",
  "status" : "ACTIVE"
}

$done({body: JSON.stringify(obj)});
