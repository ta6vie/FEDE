var obj = JSON.parse($response.body);

obj={
  "environment": "Production",
  "receipt": {
    "receipt_type": "Production",
    "adam_id": 515094775,
    "app_item_id": 515094775,
    "bundle_id": "co.bazaart.app",
    "application_version": "649",
    "download_id": 72081343951972,
    "version_external_identifier": 841211918,
    "receipt_creation_date": "2021-04-12 15:29:00 Etc/GMT",
    "receipt_creation_date_ms": "1618241340000",
    "receipt_creation_date_pst": "2021-04-12 08:29:00 America/Los_Angeles",
    "request_date": "2021-04-12 15:29:02 Etc/GMT",
    "request_date_ms": "1618241342627",
    "request_date_pst": "2021-04-12 08:29:02 America/Los_Angeles",
    "original_purchase_date": "2021-04-10 04:12:23 Etc/GMT",
    "original_purchase_date_ms": "1618027943000",
    "original_purchase_date_pst": "2021-04-09 21:12:23 America/Los_Angeles",
    "original_application_version": "649",
    "in_app": [
      {
        "quantity": "1",
        "product_id": "Bazaart_Pro_Forever",
        "transaction_id": "320000873800433",
        "original_transaction_id": "320000873800433",
        "purchase_date": "2021-04-10 04:13:06 Etc/GMT",
        "purchase_date_ms": "1618027986000",
        "purchase_date_pst": "2021-04-09 21:13:06 America/Los_Angeles",
        "original_purchase_date": "2021-04-10 04:13:06 Etc/GMT",
        "original_purchase_date_ms": "1618027986000",
        "original_purchase_date_pst": "2021-04-09 21:13:06 America/Los_Angeles",
        "expires_date": "2021-04-17 04:13:06 Etc/GMT",
        "expires_date_ms": "1618632786000",
        "expires_date_pst": "2021-04-16 21:13:06 America/Los_Angeles",
        "web_order_line_item_id": "320000356680675",
        "is_trial_period": "true",
        "is_in_intro_offer_period": "false",
        "in_app_ownership_type": "PURCHASED"
      }
    ]
  },
  "latest_receipt_info": [
    {
      "quantity": "1",
      "product_id": "Bazaart_Pro_Forever",
      "transaction_id": "320000873800433",
      "original_transaction_id": "320000873800433",
      "purchase_date": "2021-04-10 04:13:06 Etc/GMT",
      "purchase_date_ms": "1618027986000",
      "purchase_date_pst": "2021-04-09 21:13:06 America/Los_Angeles",
      "original_purchase_date": "2021-04-10 04:13:06 Etc/GMT",
      "original_purchase_date_ms": "1618027986000",
      "original_purchase_date_pst": "2021-04-09 21:13:06 America/Los_Angeles",
      "expires_date": "2021-04-17 04:13:06 Etc/GMT",
      "expires_date_ms": "1618632786000",
      "expires_date_pst": "2021-04-16 21:13:06 America/Los_Angeles",
      "web_order_line_item_id": "320000356680675",
      "is_trial_period": "true",
      "is_in_intro_offer_period": "false",
      "in_app_ownership_type": "PURCHASED",
      "subscription_group_identifier": "20464128"
    }
  ],
  "latest_receipt": "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",
  "pending_renewal_info": [
    {
      "auto_renew_product_id": "Bazaart_Premium_Monthly_v6",
      "product_id": "Bazaart_Pro_Forever",
      "original_transaction_id": "320000873800433",
      "auto_renew_status": "0"
    }
  ],
  "status": 0
}
$done({body: JSON.stringify(obj)});