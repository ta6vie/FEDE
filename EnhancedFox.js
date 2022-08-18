var obj = JSON.parse($response.body);

obj= 

{
  "environment": "Production",
  "receipt": {
    "receipt_type": "Production",
    "adam_id": 1544212575,
    "app_item_id": 1544212575,
    "bundle_id": "com.risingcabbage.enhancefox",
    "application_version": "5.8.2",
    "download_id": 70075298437631,
    "version_external_identifier": 851413720,
    "receipt_creation_date": "2022-08-11 02:40:20 Etc/GMT",
    "receipt_creation_date_ms": "1660185620000",
    "receipt_creation_date_pst": "2022-08-10 19:40:20 America/Los_Angeles",
    "request_date": "2022-08-11 02:40:21 Etc/GMT",
    "request_date_ms": "1660185621743",
    "request_date_pst": "2022-08-10 19:40:21 America/Los_Angeles",
    "original_purchase_date": "2021-04-17 02:33:51 Etc/GMT",
    "original_purchase_date_ms": "1618626831000",
    "original_purchase_date_pst": "2021-04-16 19:33:51 America/Los_Angeles",
    "original_application_version": "2.1.1",
    "in_app": [{
      "quantity": "1",
      "product_id": "com.risingcabbage.enhancefox.weekly",
      "transaction_id": "300001183538852",
      "original_transaction_id": "300001183538852",
      "purchase_date": "2022-08-03 03:08:02 Etc/GMT",
      "purchase_date_ms": "1659496082000",
      "purchase_date_pst": "2022-08-02 20:08:02 America/Los_Angeles",
      "original_purchase_date": "2022-08-03 03:08:05 Etc/GMT",
      "original_purchase_date_ms": "1659496085000",
      "original_purchase_date_pst": "2022-08-02 20:08:05 America/Los_Angeles",
      "expires_date": "2023-08-10 03:08:02 Etc/GMT",
      "expires_date_ms": "1691548984000",
      "expires_date_pst": "2023-08-09 20:08:02 America/Los_Angeles",
      "web_order_line_item_id": "300000533872576",
      "is_trial_period": "false",
      "is_in_intro_offer_period": "false",
      "in_app_ownership_type": "PURCHASED"
    }]
  },
  "latest_receipt_info": [{
    "quantity": "1",
    "product_id": "com.risingcabbage.enhancefox.weekly",
    "transaction_id": "300001183538852",
    "original_transaction_id": "300001183538852",
    "purchase_date": "2022-08-03 03:08:02 Etc/GMT",
    "purchase_date_ms": "1659496082000",
    "purchase_date_pst": "2022-08-02 20:08:02 America/Los_Angeles",
    "original_purchase_date": "2022-08-03 03:08:05 Etc/GMT",
    "original_purchase_date_ms": "1659496085000",
    "original_purchase_date_pst": "2022-08-02 20:08:05 America/Los_Angeles",
    "expires_date": "2023-08-10 03:08:02 Etc/GMT",
    "expires_date_ms": "1691548984000",
    "expires_date_pst": "2023-08-09 20:08:02 America/Los_Angeles",
    "web_order_line_item_id": "300000533872576",
    "is_trial_period": "false",
    "is_in_intro_offer_period": "false",
    "in_app_ownership_type": "PURCHASED",
    "subscription_group_identifier": "20727380"
  }],
  "latest_receipt": "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",
  "pending_renewal_info": [{
    "expiration_intent": "0",
    "auto_renew_product_id": "com.risingcabbage.enhancefox.yearlysubscriptionwith3extracards",
    "is_in_billing_retry_period": "0",
    "product_id": "com.risingcabbage.enhancefox.weekly",
    "original_transaction_id": "300001183538852",
    "auto_renew_status": "1"
  }],
  "status": 0
}

$done({body: JSON.stringify(obj)});