var obj = JSON.parse($response.body);

obj = 

{
  "data" : {
    "type" : "adapty_analytics_profile",
    "id" : "7bff44dc-9aa5-4496-bb54-e4c520097f61",
    "attributes" : {
      "app_id" : "b93cecdb-a0a5-49a3-99ce-3d61e264d25f",
      "total_revenue_usd" : 0,
      "customer_user_id" : null,
      "subscriptions" : {
        "com.abbyy.finescanner.premium.1year.new.30Mar2020" : {
          "vendor_transaction_id" : "300001199628700",
          "billing_issue_detected_at" : null,
          "is_lifetime" : false,
          "store" : "app_store",
          "vendor_product_id" : "com.abbyy.finescanner.premium.1year.new.30Mar2020",
          "vendor_original_transaction_id" : "300001199628700",
          "will_renew" : false,
          "renewed_at" : "2025-08-21T04:44:29.000000+0000",
          "cancellation_reason" : null,
          "active_promotional_offer_id" : null,
          "active_promotional_offer_type" : null,
          "unsubscribed_at" : null,
          "is_active" : true,
          "activated_at" : "2025-08-21T04:44:30.000000+0000",
          "is_refund" : false,
          "is_in_grace_period" : false,
          "active_introductory_offer_type" : "free_trial",
          "expires_at" : null,
          "starts_at" : null,
          "is_sandbox" : false
        }
      },
      "promotional_offer_eligibility" : false,
      "custom_attributes" : {
        "UserDidOpenStore" : 1661147873.016366,
        "SubscriptionDate" : 1755842762,
        "UserHadTrial" : 0,
        "AppUpdated" : 1,
        "ScansCount" : 0,
        "UserAutorenewsCount" : 0,
        "UserYearSubscriptionCount" : 1
      },
      "profile_id" : "7bff44dc-9aa5-4496-bb54-e4c520097f61",
      "paid_access_levels" : {
        "premium" : {
          "id" : "premium",
          "is_lifetime" : true,
          "vendor_product_id" : "com.abbyy.finescanner.premium.1year.new.30Mar2020",
          "active_promotional_offer_type" : null,
          "cancellation_reason" : null,
          "billing_issue_detected_at" : null,
          "unsubscribed_at" : null,
          "expires_at" : null,
          "will_renew" : false,
          "is_active" : true,
          "active_promotional_offer_id" : null,
          "is_in_grace_period" : false,
          "activated_at" : "2025-08-21T04:44:30.000000+0000",
          "renewed_at" : "2025-08-21T04:44:29.000000+0000",
          "is_refund" : false,
          "active_introductory_offer_type" : "free_trial",
          "store" : "app_store",
          "starts_at" : null
        }
      },
      "introductory_offer_eligibility" : false,
      "non_subscriptions" : null
    }
  }
}
$done({body: JSON.stringify(obj)});