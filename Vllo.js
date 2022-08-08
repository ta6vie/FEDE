var obj = JSON.parse($response.body);

obj =  

{
  "environment": "Production",
  "receipt": {
    "receipt_type": "Production",
    "adam_id": 952050883,
    "app_item_id": 952050883,
    "bundle_id": "com.darinsoft.vimo",
    "application_version": "4",
    "download_id": 501253041924133869,
    "version_external_identifier": 851193420,
    "receipt_creation_date": "2022-08-08 03:00:39 Etc/GMT",
    "receipt_creation_date_ms": "1659927639000",
    "receipt_creation_date_pst": "2022-08-07 20:00:39 America/Los_Angeles",
    "request_date": "2022-08-08 03:01:30 Etc/GMT",
    "request_date_ms": "1659927690315",
    "request_date_pst": "2022-08-07 20:01:30 America/Los_Angeles",
    "original_purchase_date": "2022-03-23 19:11:14 Etc/GMT",
    "original_purchase_date_ms": "1648062674000",
    "original_purchase_date_pst": "2022-03-23 12:11:14 America/Los_Angeles",
    "original_application_version": "6",
    "in_app": [{
      "quantity": "1",
      "product_id": "com.vimosoft.vllo.premium3.annually_subscription",
      "transaction_id": "300001074612302",
      "original_transaction_id": "300001074612302",
      "purchase_date": "2022-03-23 23:01:26 Etc/GMT",
      "purchase_date_ms": "1648076486000",
      "purchase_date_pst": "2022-03-23 16:01:26 America/Los_Angeles",
      "original_purchase_date": "2022-03-23 23:01:27 Etc/GMT",
      "original_purchase_date_ms": "1648076487000",
      "original_purchase_date_pst": "2022-03-23 16:01:27 America/Los_Angeles",
      "expires_date": "2099-03-26 23:01:26 Etc/GMT",
      "expires_date_ms": "4077918354000",
      "expires_date_pst": "2099-03-26 16:01:26 America/Los_Angeles",
      "web_order_line_item_id": "300000477950587",
      "is_trial_period": "true",
      "is_in_intro_offer_period": "false",
      "in_app_ownership_type": "PURCHASED"
    }]
  },
  "latest_receipt_info": [{
    "quantity": "1",
    "product_id": "com.vimosoft.vllo.premium3.annually_subscription",
    "transaction_id": "300001074612302",
    "original_transaction_id": "300001074612302",
    "purchase_date": "2022-03-23 23:01:26 Etc/GMT",
    "purchase_date_ms": "1648076486000",
    "purchase_date_pst": "2022-03-23 16:01:26 America/Los_Angeles",
    "original_purchase_date": "2022-03-23 23:01:27 Etc/GMT",
    "original_purchase_date_ms": "1648076487000",
    "original_purchase_date_pst": "2022-03-23 16:01:27 America/Los_Angeles",
    "expires_date": "2099-03-26 23:01:26 Etc/GMT",
    "expires_date_ms": "4077918354000",
    "expires_date_pst": "2099-03-26 16:01:26 America/Los_Angeles",
    "web_order_line_item_id": "300000477950587",
    "is_trial_period": "true",
    "is_in_intro_offer_period": "false",
    "in_app_ownership_type": "PURCHASED",
    "subscription_group_identifier": "20877865"
  }],
  "latest_receipt": "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",
  "pending_renewal_info": [{
    "expiration_intent": "1",
    "auto_renew_product_id": "com.vimosoft.vllo.premium3.annually_subscription",
    "is_in_billing_retry_period": "0",
    "product_id": "com.vimosoft.vllo.premium3.annually_subscription",
    "original_transaction_id": "300001074612302",
    "auto_renew_status": "0"
  }],
  "status": 0
}
$done({body: JSON.stringify(obj)});