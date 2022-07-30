var obj = JSON.parse($response.body);

obj={
  "environment": "Production",
  "receipt": {
    "receipt_type": "Production",
    "adam_id": 1489090374,
    "app_item_id": 1489090374,
    "bundle_id": "com.vivacut.videoeditor",
    "application_version": "703",
    "download_id": 72081245513561,
    "version_external_identifier": 841077005,
    "receipt_creation_date": "2021-03-29 09:14:49 Etc/GMT",
    "receipt_creation_date_ms": "1617009289000",
    "receipt_creation_date_pst": "2021-03-29 02:14:49 America/Los_Angeles",
    "request_date": "2021-03-29 09:14:51 Etc/GMT",
    "request_date_ms": "1617009291233",
    "request_date_pst": "2021-03-29 02:14:51 America/Los_Angeles",
    "original_purchase_date": "2021-03-28 06:13:27 Etc/GMT",
    "original_purchase_date_ms": "1616912007000",
    "original_purchase_date_pst": "2021-03-27 23:13:27 America/Los_Angeles",
    "original_application_version": "703",
    "in_app": [
      {
        "quantity": "1",
        "product_id": "VivaCut_Yearly_Pro_4",
        "transaction_id": "320000865894541",
        "original_transaction_id": "320000865894541",
        "purchase_date": "2021-03-28 06:14:55 Etc/GMT",
        "purchase_date_ms": "1616912095000",
        "purchase_date_pst": "2021-03-27 23:14:55 America/Los_Angeles",
        "original_purchase_date": "2021-03-28 06:14:56 Etc/GMT",
        "original_purchase_date_ms": "1616912096000",
        "original_purchase_date_pst": "2021-03-27 23:14:56 America/Los_Angeles",
        "expires_date": "2025-03-31 06:14:55 Etc/GMT",
        "expires_date_ms": "1743378440000",
        "expires_date_pst": "2025-03-30 23:14:55 America/Los_Angeles",
        "web_order_line_item_id": "320000352422233",
        "is_trial_period": "true",
        "is_in_intro_offer_period": "false",
        "in_app_ownership_type": "PURCHASED"
      }
    ]
  },
  "latest_receipt_info": [
    {
      "quantity": "1",
      "product_id": "VivaCut_Yearly_Pro_4",
      "transaction_id": "320000865894541",
      "original_transaction_id": "320000865894541",
      "purchase_date": "2021-03-28 06:14:55 Etc/GMT",
      "purchase_date_ms": "1616912095000",
      "purchase_date_pst": "2021-03-27 23:14:55 America/Los_Angeles",
      "original_purchase_date": "2021-03-28 06:14:56 Etc/GMT",
      "original_purchase_date_ms": "1616912096000",
      "original_purchase_date_pst": "2021-03-27 23:14:56 America/Los_Angeles",
      "expires_date": "2021-03-31 06:14:55 Etc/GMT",
      "expires_date_ms": "1743378440000",
      "expires_date_pst": "2025-03-30 23:14:55 America/Los_Angeles",
      "web_order_line_item_id": "320000352422233",
      "is_trial_period": "true",
      "is_in_intro_offer_period": "false",
      "in_app_ownership_type": "PURCHASED",
      "subscription_group_identifier": "20671133"
    }
  ],
  "latest_receipt": "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",
  "pending_renewal_info": [
    {
      "auto_renew_product_id": "VivaCut_Yearly_Pro_4",
      "product_id": "VivaCut_Yearly_Pro_4",
      "original_transaction_id": "320000865894541",
      "auto_renew_status": "0"
    }
  ],
  "status": 0
}
   
$done({body: JSON.stringify(obj)});