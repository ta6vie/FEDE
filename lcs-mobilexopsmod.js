var obj = JSON.parse($response.body);

obj = 

{
  "mobileProfileSpecVersion" : "1.0",
  "mobileProfile" : {
    "additionalLegacyProfiles" : "{}",
    "id" : "21fcc7a5-92dd-4096-8765-7bb784e57dce",
    "serverId" : "lcs-mobile-cops",
    "profileStatus" : "PROFILE_AVAILABLE",
    "legacyProfile" : "{\"licenseId\":\"TEMP_LICENSE_PROD\",\"licenseType\":3,\"licenseVersion\":\"1.0\",\"effectiveEndTimestamp\":1753252492,\"graceTime\":0,\"licensedFeatures\":[],\"enigmaData\":{\"productId\":598,\"serialKey\":\"719594172484074650698776\",\"clearSerialKey\":\"90970938077827684226\",\"locale\":\"ALL\",\"associatedLocales\":\"ALL\",\"platform\":0,\"isk\":5984006,\"customerId\":0,\"deliveryMethod\":3,\"pc\":true,\"rb\":true}}",
    "relationshipProfile" : "[{\"profileGenerationTimestamp\":1658545133357,\"licenseId\":\"TEMP_LICENSE_PROD\",\"licenseExpiryTimestamp\":1753252492,\"appEntitlementStatus\":\"SUBSCRIPTION\",\"activationType\":\"NAMED_USER\",\"billingStatus\":\"NORMAL\",\"usedForLegacyProfile\":true,\"licenseExpiryWarningControl\":{\"warningStartTimestamp\":1753252492,\"warningInterval\":0}}]",
    "userProfile" : "{\"userId\":\"313648DC507D03FB0A490D45@AdobeID\",\"firstName\":\"Carlos\",\"lastName\":\"Rodriguez%20Feijo\",\"email\":\"el_zari@hotmail.com\",\"countryCode\":\"ES\",\"displayName\":\"Carlos%20Rodriguez%20Feijo\",\"accountType\":\"type1\",\"authId\":\"313648DC507D03FB0A490D45@AdobeID\"}",
    "appProfile" : "{}",
    "controlProfile" : {
      "cacheRefreshControl" : {
        "appRefreshInterval" : 87840000
      }
    },
    "previousProfileId" : "c40b81a2-4428-48a4-a893-671d7a22c9a2",
    "appLicenseMode" : "FREEMIUM"
  },
  "workflow" : null
}
 
$done({body: JSON.stringify(obj)});