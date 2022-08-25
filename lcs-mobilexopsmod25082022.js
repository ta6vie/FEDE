var obj = JSON.parse($response.body);

obj = 

{
  "mobileProfileSpecVersion" : "1.0",
  "mobileProfile" : {
    "additionalLegacyProfiles" : "{}",
    "id" : "c5c5ea59-7730-403e-850e-9b899f9ca662",
    "serverId" : "lcs-mobile-cops",
    "profileStatus" : "PROFILE_AVAILABLE",
    "legacyProfile" : "{\"licenseId\":\"TEMP_LICENSE_PROD\",\"licenseType\":3,\"licenseVersion\":\"1.0\",\"effectiveEndTimestamp\":1756084421000,\"graceTime\":0,\"licensedFeatures\":[],\"enigmaData\":{\"productId\":598,\"serialKey\":\"719594172484074650698776\",\"clearSerialKey\":\"90970938077827684226\",\"locale\":\"ALL\",\"associatedLocales\":\"ALL\",\"platform\":0,\"isk\":5984006,\"customerId\":0,\"deliveryMethod\":3,\"pc\":true,\"rb\":true}}",
    "relationshipProfile" : "[{\"profileGenerationTimestamp\":1658575402662,\"licenseId\":\"TEMP_LICENSE_PROD\",\"licenseExpiryTimestamp\":1658654790878,\"appEntitlementStatus\":\"SUBSCRIPTION\",\"activationType\":\"NAMED_USER\",\"billingStatus\":\"NORMAL\",\"usedForLegacyProfile\":true,\"licenseExpiryWarningControl\":{\"warningStartTimestamp\":1756084421000,\"warningInterval\":0}}]",
    "userProfile" : "{\"userId\":\"313648DC507D03FB0A490D45@AdobeID\",\"firstName\":\"Carlos\",\"lastName\":\"Rodriguez%20Feijo\",\"email\":\"el_zari@hotmail.com\",\"countryCode\":\"ES\",\"displayName\":\"Carlos%20Rodriguez%20Feijo\",\"accountType\":\"type1\",\"authId\":\"313648DC507D03FB0A490D45@AdobeID\"}",
    "appProfile" : "{}",
    "controlProfile" : {
      "cacheRefreshControl" : {
        "appRefreshInterval" : 87120000
      }
    },
    "previousProfileId" : "ff122284-d3eb-4001-8cb3-4c503b66e497",
    "appLicenseMode" : "FREEMIUM"
  },
  "workflow" : {
    "onAbort" : "CONTINUE",
    "id" : "start_purchase",
    "instanceId" : "45ba3f6a-c73f-4259-94e7-fc8ad6681770",
    "type" : "APP_STORE_WORKFLOW",
    "version" : "1"
  }
}
 
$done({body: JSON.stringify(obj)});