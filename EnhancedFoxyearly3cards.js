var obj = JSON.parse($response.body);

obj = 

{
  "environment": "Production",
  "receipt": {
    "receipt_type": "Production",
    "adam_id": 1544212575,
    "app_item_id": 1544212575,
    "bundle_id": "com.risingcabbage.enhancefox",
    "application_version": "5.7.4",
    "download_id": 70075298437631,
    "version_external_identifier": 851084607,
    "receipt_creation_date": "2022-08-03 03:16:56 Etc/GMT",
    "receipt_creation_date_ms": "1659496616000",
    "receipt_creation_date_pst": "2022-08-02 20:16:56 America/Los_Angeles",
    "request_date": "2022-08-03 03:16:57 Etc/GMT",
    "request_date_ms": "1659496617685",
    "request_date_pst": "2022-08-02 20:16:57 America/Los_Angeles",
    "original_purchase_date": "2021-04-17 02:33:51 Etc/GMT",
    "original_purchase_date_ms": "1618626831000",
    "original_purchase_date_pst": "2021-04-16 19:33:51 America/Los_Angeles",
    "original_application_version": "2.1.1",
    "in_app": [{
      "quantity": "1",
      "product_id": "com.risingcabbage.enhancefox.yearlysubscriptionwith3extracards",
      "transaction_id": "300001183538852",
      "original_transaction_id": "300001183538852",
      "purchase_date": "2022-08-03 03:08:02 Etc/GMT",
      "purchase_date_ms": "1659496082000",
      "purchase_date_pst": "2022-08-02 20:08:02 America/Los_Angeles",
      "original_purchase_date": "2022-08-03 03:08:05 Etc/GMT",
      "original_purchase_date_ms": "1659496085000",
      "original_purchase_date_pst": "2022-08-02 20:08:05 America/Los_Angeles",
      "expires_date": "2099-08-10 03:08:02 Etc/GMT",
      "expires_date_ms": "4089928965000",
      "expires_date_pst": "2099-08-09 20:08:02 America/Los_Angeles",
      "web_order_line_item_id": "300000533872576",
      "is_trial_period": "false",
      "is_in_intro_offer_period": "false",
      "in_app_ownership_type": "PURCHASED"
    }]
  },
  "latest_receipt_info": [{
    "quantity": "1",
    "product_id": "com.risingcabbage.enhancefox.yearlysubscriptionwith3extracards",
    "transaction_id": "300001183538852",
    "original_transaction_id": "300001183538852",
    "purchase_date": "2022-08-03 03:08:02 Etc/GMT",
    "purchase_date_ms": "1659496082000",
    "purchase_date_pst": "2022-08-02 20:08:02 America/Los_Angeles",
    "original_purchase_date": "2022-08-03 03:08:05 Etc/GMT",
    "original_purchase_date_ms": "1659496085000",
    "original_purchase_date_pst": "2022-08-02 20:08:05 America/Los_Angeles",
    "expires_date": "2099-08-10 03:08:02 Etc/GMT",
    "expires_date_ms": "4089928965000",
    "expires_date_pst": "2099-08-09 20:08:02 America/Los_Angeles",
    "web_order_line_item_id": "300000533872576",
    "is_trial_period": "false",
    "is_in_intro_offer_period": "false",
    "in_app_ownership_type": "PURCHASED",
    "subscription_group_identifier": "20727380"
  }],
  "latest_receipt": "MIIUXwYJKoZIhvcNAQcCoIIUUDCCFEwCAQExCzAJBgUrDgMCGgUAMIIEAAYJKoZIhvcNAQcBoIID8QSCA+0xggPpMAoCARQCAQEEAgwAMAsCARkCAQEEAwIBAzAMAgEOAgEBBAQCAgDnMA0CAQoCAQEEBRYDMTIrMA0CAQ0CAQEEBQIDAkxIMA4CAQECAQEEBgIEXArQXzAOAgEJAgEBBAYCBFAyNTYwDgIBCwIBAQQGAgQHS9GPMA4CARACAQEEBgIEMrqFPzAPAgEDAgEBBAcMBTUuNy40MA8CARMCAQEEBwwFMi4xLjEwEAIBDwIBAQQIAgY/u61FWf8wFAIBAAIBAQQMDApQcm9kdWN0aW9uMBgCAQQCAQIEENWcUstqlwp27FNf5DrT2LMwHAIBBQIBAQQUedh9r+EKX87NlFnsBnsclDLKufUwHgIBCAIBAQQWFhQyMDIyLTA4LTAzVDAzOjE2OjU2WjAeAgEMAgEBBBYWFDIwMjItMDgtMDNUMDM6MTY6NTdaMB4CARICAQEEFhYUMjAyMS0wNC0xN1QwMjozMzo1MVowJgIBAgIBAQQeDBxjb20ucmlzaW5nY2FiYmFnZS5lbmhhbmNlZm94MFUCAQYCAQEETWa08O6oVRjM9dnvn4FFr5WW8OIyHXtnyR4OSq0K1j/pip1zMH9UqeNPCAsP/UabbjJvalrVYwUF9PDGCbQNOr/2GX2wF8MUia/pABVSMF4CAQcCAQEEVsYITpdstwbPLepvRwznJS0GKPkPAPWdc09VqxFNl8Kd3IjcWVJgoc6riEr/1RNvqdYthoRzMAVVWookwctQucICDv96Jb26mKsuA7VqJK6zIiY4zRAoMIIBnwIBEQIBAQSCAZUxggGRMAsCAgatAgEBBAIMADALAgIGsAIBAQQCFgAwCwICBrICAQEEAgwAMAsCAgazAgEBBAIMADALAgIGtAIBAQQCDAAwCwICBrUCAQEEAgwAMAsCAga2AgEBBAIMADAMAgIGpQIBAQQDAgEBMAwCAgarAgEBBAMCAQMwDAICBrECAQEEAwIBADAMAgIGtwIBAQQDAgEAMAwCAga6AgEBBAMCAQAwDwICBq4CAQEEBgIEX76a5TASAgIGrwIBAQQJAgcBENlRQP/AMBoCAganAgEBBBEMDzMwMDAwMTE4MzUzODg1MjAaAgIGqQIBAQQRDA8zMDAwMDExODM1Mzg4NTIwHwICBqgCAQEEFhYUMjAyMi0wOC0wM1QwMzowODowMlowHwICBqoCAQEEFhYUMjAyMi0wOC0wM1QwMzowODowNVowHwICBqwCAQEEFhYUMjAyMi0wOC0xMFQwMzowODowMlowLgICBqYCAQEEJQwjY29tLnJpc2luZ2NhYmJhZ2UuZW5oYW5jZWZveC53ZWVrbHmggg5lMIIFfDCCBGSgAwIBAgIIDutXh+eeCY0wDQYJKoZIhvcNAQEFBQAwgZYxCzAJBgNVBAYTAlVTMRMwEQYDVQQKDApBcHBsZSBJbmMuMSwwKgYDVQQLDCNBcHBsZSBXb3JsZHdpZGUgRGV2ZWxvcGVyIFJlbGF0aW9uczFEMEIGA1UEAww7QXBwbGUgV29ybGR3aWRlIERldmVsb3BlciBSZWxhdGlvbnMgQ2VydGlmaWNhdGlvbiBBdXRob3JpdHkwHhcNMTUxMTEzMDIxNTA5WhcNMjMwMjA3MjE0ODQ3WjCBiTE3MDUGA1UEAwwuTWFjIEFwcCBTdG9yZSBhbmQgaVR1bmVzIFN0b3JlIFJlY2VpcHQgU2lnbmluZzEsMCoGA1UECwwjQXBwbGUgV29ybGR3aWRlIERldmVsb3BlciBSZWxhdGlvbnMxEzARBgNVBAoMCkFwcGxlIEluYy4xCzAJBgNVBAYTAlVTMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEApc+B/SWigVvWh+0j2jMcjuIjwKXEJss9xp/sSg1Vhv+kAteXyjlUbX1/slQYncQsUnGOZHuCzom6SdYI5bSIcc8/W0YuxsQduAOpWKIEPiF41du30I4SjYNMWypoN5PC8r0exNKhDEpYUqsS4+3dH5gVkDUtwswSyo1IgfdYeFRr6IwxNh9KBgxHVPM3kLiykol9X6SFSuHAnOC6pLuCl2P0K5PB/T5vysH1PKmPUhrAJQp2Dt7+mf7/wmv1W16sc1FJCFaJzEOQzI6BAtCgl7ZcsaFpaYeQEGgmJjm4HRBzsApdxXPQ33Y72C3ZiB7j7AfP4o7Q0/omVYHv4gNJIwIDAQABo4IB1zCCAdMwPwYIKwYBBQUHAQEEMzAxMC8GCCsGAQUFBzABhiNodHRwOi8vb2NzcC5hcHBsZS5jb20vb2NzcDAzLXd3ZHIwNDAdBgNVHQ4EFgQUkaSc/MR2t5+givRN9Y82Xe0rBIUwDAYDVR0TAQH/BAIwADAfBgNVHSMEGDAWgBSIJxcJqbYYYIvs67r2R1nFUlSjtzCCAR4GA1UdIASCARUwggERMIIBDQYKKoZIhvdjZAUGATCB/jCBwwYIKwYBBQUHAgIwgbYMgbNSZWxpYW5jZSBvbiB0aGlzIGNlcnRpZmljYXRlIGJ5IGFueSBwYXJ0eSBhc3N1bWVzIGFjY2VwdGFuY2Ugb2YgdGhlIHRoZW4gYXBwbGljYWJsZSBzdGFuZGFyZCB0ZXJtcyBhbmQgY29uZGl0aW9ucyBvZiB1c2UsIGNlcnRpZmljYXRlIHBvbGljeSBhbmQgY2VydGlmaWNhdGlvbiBwcmFjdGljZSBzdGF0ZW1lbnRzLjA2BggrBgEFBQcCARYqaHR0cDovL3d3dy5hcHBsZS5jb20vY2VydGlmaWNhdGVhdXRob3JpdHkvMA4GA1UdDwEB/wQEAwIHgDAQBgoqhkiG92NkBgsBBAIFADANBgkqhkiG9w0BAQUFAAOCAQEADaYb0y4941srB25ClmzT6IxDMIJf4FzRjb69D70a/CWS24yFw4BZ3+Pi1y4FFKwN27a4/vw1LnzLrRdrjn8f5He5sWeVtBNephmGdvhaIJXnY4wPc/zo7cYfrpn4ZUhcoOAoOsAQNy25oAQ5H3O5yAX98t5/GioqbisB/KAgXNnrfSemM/j1mOC+RNuxTGf8bgpPyeIGqNKX86eOa1GiWoR1ZdEWBGLjwV/1CKnPaNmSAMnBjLP4jQBkulhgwHyvj3XKablbKtYdaG6YQvVMpzcZm8w7HHoZQ/Ojbb9IYAYMNpIr7N4YtRHaLSPQjvygaZwXG56AezlHRTBhL8cTqDCCBCIwggMKoAMCAQICCAHevMQ5baAQMA0GCSqGSIb3DQEBBQUAMGIxCzAJBgNVBAYTAlVTMRMwEQYDVQQKEwpBcHBsZSBJbmMuMSYwJAYDVQQLEx1BcHBsZSBDZXJ0aWZpY2F0aW9uIEF1dGhvcml0eTEWMBQGA1UEAxMNQXBwbGUgUm9vdCBDQTAeFw0xMzAyMDcyMTQ4NDdaFw0yMzAyMDcyMTQ4NDdaMIGWMQswCQYDVQQGEwJVUzETMBEGA1UECgwKQXBwbGUgSW5jLjEsMCoGA1UECwwjQXBwbGUgV29ybGR3aWRlIERldmVsb3BlciBSZWxhdGlvbnMxRDBCBgNVBAMMO0FwcGxlIFdvcmxkd2lkZSBEZXZlbG9wZXIgUmVsYXRpb25zIENlcnRpZmljYXRpb24gQXV0aG9yaXR5MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAyjhUpstWqsgkOUjpjO7sX7h/JpG8NFN6znxjgGF3ZF6lByO2Of5QLRVWWHAtfsRuwUqFPi/w3oQaoVfJr3sY/2r6FRJJFQgZrKrbKjLtlmNoUhU9jIrsv2sYleADrAF9lwVnzg6FlTdq7Qm2rmfNUWSfxlzRvFduZzWAdjakh4FuOI/YKxVOeyXYWr9Og8GN0pPVGnG1YJydM05V+RJYDIa4Fg3B5XdFjVBIuist5JSF4ejEncZopbCj/Gd+cLoCWUt3QpE5ufXN4UzvwDtIjKblIV39amq7pxY1YNLmrfNGKcnow4vpecBqYWcVsvD95Wi8Yl9uz5nd7xtj/pJlqwIDAQABo4GmMIGjMB0GA1UdDgQWBBSIJxcJqbYYYIvs67r2R1nFUlSjtzAPBgNVHRMBAf8EBTADAQH/MB8GA1UdIwQYMBaAFCvQaUeUdgn+9GuNLkCm90dNfwheMC4GA1UdHwQnMCUwI6AhoB+GHWh0dHA6Ly9jcmwuYXBwbGUuY29tL3Jvb3QuY3JsMA4GA1UdDwEB/wQEAwIBhjAQBgoqhkiG92NkBgIBBAIFADANBgkqhkiG9w0BAQUFAAOCAQEAT8/vWb4s9bJsL4/uE4cy6AU1qG6LfclpDLnZF7x3LNRn4v2abTpZXN+DAb2yriphcrGvzcNFMI+jgw3OHUe08ZOKo3SbpMOYcoc7Pq9FC5JUuTK7kBhTawpOELbZHVBsIYAKiU5XjGtbPD2m/d73DSMdC0omhz+6kZJMpBkSGW1X9XpYh3toiuSGjErr4kkUqqXdVQCprrtLMK7hoLG8KYDmCXflvjSiAcp/3OIK5ju4u+y6YpXzBWNBgs0POx1MlaTbq/nJlelP5E3nJpmB6bz5tCnSAXpm4S6M9iGKxfh44YGuv9OQnamt86/9OBqWZzAcUaVc7HGKgrRsDwwVHzCCBLswggOjoAMCAQICAQIwDQYJKoZIhvcNAQEFBQAwYjELMAkGA1UEBhMCVVMxEzARBgNVBAoTCkFwcGxlIEluYy4xJjAkBgNVBAsTHUFwcGxlIENlcnRpZmljYXRpb24gQXV0aG9yaXR5MRYwFAYDVQQDEw1BcHBsZSBSb290IENBMB4XDTA2MDQyNTIxNDAzNloXDTM1MDIwOTIxNDAzNlowYjELMAkGA1UEBhMCVVMxEzARBgNVBAoTCkFwcGxlIEluYy4xJjAkBgNVBAsTHUFwcGxlIENlcnRpZmljYXRpb24gQXV0aG9yaXR5MRYwFAYDVQQDEw1BcHBsZSBSb290IENBMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA5JGpCR+R2x5HUOsF7V55hC3rNqJXTFXsixmJ3vlLbPUHqyIwAugYPvhQCdN/QaiY+dHKZpwkaxHQo7vkGyrDH5WeegykR4tb1BY3M8vED03OFGnRyRly9V0O1X9fm/IlA7pVj01dDfFkNSMVSxVZHbOU9/acns9QusFYUGePCLQg98usLCBvcLY/ATCMt0PPD5098ytJKBrI/s61uQ7ZXhzWyz21Oq30Dw4AkguxIRYudNU8DdtiFqujcZJHU1XBry9Bs/j743DN5qNMRX4fTGtQlkGJxHRiCxCDQYczioGxMFjsWgQyjGizjx3eZXP/Z15lvEnYdp8zFGWhd5TJLQIDAQABo4IBejCCAXYwDgYDVR0PAQH/BAQDAgEGMA8GA1UdEwEB/wQFMAMBAf8wHQYDVR0OBBYEFCvQaUeUdgn+9GuNLkCm90dNfwheMB8GA1UdIwQYMBaAFCvQaUeUdgn+9GuNLkCm90dNfwheMIIBEQYDVR0gBIIBCDCCAQQwggEABgkqhkiG92NkBQEwgfIwKgYIKwYBBQUHAgEWHmh0dHBzOi8vd3d3LmFwcGxlLmNvbS9hcHBsZWNhLzCBwwYIKwYBBQUHAgIwgbYagbNSZWxpYW5jZSBvbiB0aGlzIGNlcnRpZmljYXRlIGJ5IGFueSBwYXJ0eSBhc3N1bWVzIGFjY2VwdGFuY2Ugb2YgdGhlIHRoZW4gYXBwbGljYWJsZSBzdGFuZGFyZCB0ZXJtcyBhbmQgY29uZGl0aW9ucyBvZiB1c2UsIGNlcnRpZmljYXRlIHBvbGljeSBhbmQgY2VydGlmaWNhdGlvbiBwcmFjdGljZSBzdGF0ZW1lbnRzLjANBgkqhkiG9w0BAQUFAAOCAQEAXDaZTC14t+2Mm9zzd5vydtJ3ME/BH4WDhRuZPUc38qmbQI4s1LGQEti+9HOb7tJkD8t5TzTYoj75eP9ryAfsfTmDi1Mg0zjEsb+aTwpr/yv8WacFCXwXQFYRHnTTt4sjO0ej1W8k4uvRt3DfD0XhJ8rxbXjt57UXF6jcfiI1yiXV2Q/Wa9SiJCMR96Gsj3OBYMYbWwkvkrL4REjwYDieFfU9JmcgijNq9w2Cz97roy/5U2pbZMBjM3f3OgcsVuvaDyEO2rpzGU+12TZ/wYdV2aeZuTJC+9jVcZ5+oVK3G72TQiQSKscPHbZNnF5jyEuAF1CqitXa5PzQCQc3sHV1ITGCAcswggHHAgEBMIGjMIGWMQswCQYDVQQGEwJVUzETMBEGA1UECgwKQXBwbGUgSW5jLjEsMCoGA1UECwwjQXBwbGUgV29ybGR3aWRlIERldmVsb3BlciBSZWxhdGlvbnMxRDBCBgNVBAMMO0FwcGxlIFdvcmxkd2lkZSBEZXZlbG9wZXIgUmVsYXRpb25zIENlcnRpZmljYXRpb24gQXV0aG9yaXR5AggO61eH554JjTAJBgUrDgMCGgUAMA0GCSqGSIb3DQEBAQUABIIBAHfxo4yPJsE///RT+wzJ0VDQ3JMGqrwNFJwyzDaA4mlgHYbN28TeZCJ27Zyd+Q59aQQBD65iCVtlr+UszZbkTsFw/NvbsQ/raRaCnLuWM7zO47iZARm+On5RqJBhbdljuuQ9CG2rFiFWjeZ7mbWAiA5ou7iwPEu88C2LaswSE1JS0xoD8R6lOrxGemn/PdzzztxkHY3ETUiphO18GtLFtsadVNZ215lm7fI8Y8UdN0w8J0xoavdYCG+ZVQhp7IyGYR9xfU8O7AS1Twnpq8vkaYcxJdn9fcOaF1iFRrZCqR3tqh65WaXhrVIIRoiYUq+seRg9URdG08W1Kc4k9y5H+qQ=",
  "pending_renewal_info": [{
    "auto_renew_product_id": "com.risingcabbage.enhancefox.yearly",
    "product_id": "com.risingcabbage.enhancefox.yearlysubscriptionwith3extracards",
    "original_transaction_id": "300001183538852",
    "auto_renew_status": "1"
  }],
  "status": 0
}
$done({body: JSON.stringify(obj)});

