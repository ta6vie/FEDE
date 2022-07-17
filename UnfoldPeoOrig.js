var obj = JSON.parse($response.body);

obj={

  "environment" : "Production",
  "receipt" : {
    "receipt_type" : "Production",
    "app_item_id" : 1247275033,
    "receipt_creation_date" : "2022-07-17 21:00:04 Etc/GMT",
    "bundle_id" : "com.moonlab.unfoldstories",
    "original_purchase_date" : "2021-09-28 23:21:24 Etc/GMT",
    "in_app" : [
      {
        "quantity" : "1",
        "purchase_date_ms" : "1633761050000",
        "expires_date" : "2021-10-16 06:30:50 Etc/GMT",
        "expires_date_pst" : "2021-10-15 23:30:50 America/Los_Angeles",
        "is_in_intro_offer_period" : "false",
        "transaction_id" : "300000943486039",
        "is_trial_period" : "true",
        "original_transaction_id" : "300000943486039",
        "purchase_date" : "2021-10-09 06:30:50 Etc/GMT",
        "product_id" : "UNFOLD_FOR_BRANDS_YEAR",
        "original_purchase_date_pst" : "2021-10-08 23:30:51 America/Los_Angeles",
        "in_app_ownership_type" : "PURCHASED",
        "original_purchase_date_ms" : "1633761051000",
        "web_order_line_item_id" : "300000408941236",
        "expires_date_ms" : "1634365850000",
        "purchase_date_pst" : "2021-10-08 23:30:50 America/Los_Angeles",
        "original_purchase_date" : "2021-10-09 06:30:51 Etc/GMT"
      }
    ],
    "adam_id" : 1247275033,
    "receipt_creation_date_pst" : "2022-07-17 14:00:04 America/Los_Angeles",
    "request_date" : "2022-07-17 21:02:52 Etc/GMT",
    "request_date_pst" : "2022-07-17 14:02:52 America/Los_Angeles",
    "version_external_identifier" : 850815618,
    "request_date_ms" : "1658091772049",
    "original_purchase_date_pst" : "2021-09-28 16:21:24 America/Los_Angeles",
    "application_version" : "35492",
    "original_purchase_date_ms" : "1632871284000",
    "receipt_creation_date_ms" : "1658091604000",
    "original_application_version" : "19681",
    "download_id" : 500755249842182554
  },
  "pending_renewal_info" : [
    {
      "expiration_intent" : "1",
      "product_id" : "UNFOLD_FOR_BRANDS_YEAR",
      "is_in_billing_retry_period" : "0",
      "auto_renew_product_id" : "UNFOLD_FOR_BRANDS_YEAR",
      "original_transaction_id" : "300000943486039",
      "auto_renew_status" : "0"
    }
  ],
  "status" : 0,
  "latest_receipt_info" : [
    {
      "quantity" : "1",
"product_id": "UNFOLD_PRO_YEAR",
      "purchase_date_ms" : "1633761050000",
      "expires_date": "2099-12-01 01:11:32 Etc/GMT",
        "expires_date_ms": "4099770692000",
        "expires_date_pst": "2099-11-30 17:11:32 America/Los_Angeles",
      "is_in_intro_offer_period" : "false",
      "transaction_id" : "300000943486039",
      "is_trial_period" : "true",
      "original_transaction_id" : "300000943486039",
      "purchase_date" : "2021-10-09 06:30:50 Etc/GMT",
      "product_id" : "UNFOLD_PRO_YEAR",
      "original_purchase_date_pst" : "2021-10-08 23:30:51 America/Los_Angeles",
      "in_app_ownership_type" : "PURCHASED",
      "subscription_group_identifier" : "20524427",
      "original_purchase_date_ms" : "1633761051000",
      "web_order_line_item_id" : "300000408941236",
      "expires_date_ms": "4099770692000",
      "purchase_date_pst" : "2021-10-08 23:30:50 America/Los_Angeles",
      "original_purchase_date" : "2021-10-09 06:30:51 Etc/GMT"
    }
  ],
  "latest_receipt" : "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",

  "pending_renewal_info": [
    {
      "auto_renew_product_id": "UNFOLD_PRO_YEAR",
      "product_id": "UNFOLD_PRO_YEAR",
      "original_transaction_id": "320000888024552",
      "auto_renew_status": "1"
    }
  ],
  "status": 0

}

$done({body: JSON.stringify(obj)});

