var obj = JSON.parse($response.body);

obj = 

{
  "mobileProfileSpecVersion" : "1.0",
  "mobileProfile" : {
    "additionalLegacyProfiles" : "{}",
    "id" : "737cc816-bc72-4b31-b69a-87b75970a4f1",
    "serverId" : "lcs-mobile-cops",
    "profileStatus" : "PROFILE_AVAILABLE",
    "legacyProfile" : "{\"licenseId\":\"LICENSE_PROD\",\"licenseType\":3,\"licenseVersion\":\"91.0\",\"effectiveEndTimestamp\":1752980182000,\"graceTime\":0,\"licensedFeatures\":[],\"enigmaData\":{\"productId\":118,\"serialKey\":\"719594172484074650698776\",\"clearSerialKey\":\"90970938077827684226\",\"locale\":\"ALL\",\"associatedLocales\":\"ALL\",\"platform\":0,\"isk\":1184999,\"customerId\":0,\"deliveryMethod\":3,\"pc\":false,\"rb\":false}}",
    "relationshipProfile" : "[{\"profileGenerationTimestamp\":1658285633335,\"licenseId\":\"TEMP_LICENSE_PROD\",\"licenseExpiryTimestamp\":1752980182000,\"appEntitlementStatus\":\"SUBSCRIPTION\",\"activationType\":\"NAMED_USER\",\"billingStatus\":\"NORMAL\",\"usedForLegacyProfile\":true,\"licenseExpiryWarningControl\":{\"warningStartTimestamp\":1657767206627,\"warningInterval\":0}}]",
    "userProfile" : "{\"userId\":\"313648DC507D03FB0A490D45@AdobeID\",\"firstName\":\"Carlos\",\"lastName\":\"Rodriguez%20Feijo\",\"email\":\"el_zari@hotmail.com\",\"countryCode\":\"ES\",\"displayName\":\"Carlos%20Rodriguez%20Feijo\",\"accountType\":\"type1\",\"authId\":\"313648DC507D03FB0A490D45@AdobeID\"}",
    "appProfile" : "{}",
    "controlProfile" : {
      "cacheRefreshControl" : {
        "appRefreshInterval" : null
      }
    },
    "previousProfileId" : "b500d3d0-8422-44c5-a022-51a81c96c76e",
    "appLicenseMode" : "ENTERPRISE"
  },
  "workflow" : null
}
$done({body: JSON.stringify(obj)});