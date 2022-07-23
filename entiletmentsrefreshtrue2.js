var obj = JSON.parse($response.body);

obj = 

{
  "name" : "Carlos Rodriguez Feijo",
  "isEnterprise" : false,
  "last_name" : "Rodriguez Feijo",
  "services" : {
    "extract" : {
      "entitled" : true,
      "allow_private_endpoint" : false
    },
    "color" : {
      "entitled" : true,
      "allow_private_endpoint" : false
    },
    "typekit" : {
      "service_level" : "PLUS",
      "entitled" : true,
      "allow_private_endpoint" : false
    },
    "preview" : {
      "entitled" : true,
      "allow_private_endpoint" : false
    },
    "storage" : {
      "entitled" : true,
      "allow_private_endpoint" : true
    },
    "image" : {
      "entitled" : true,
      "allow_private_endpoint" : true
    },
    "edge_inspect" : {
      "entitled" : true,
      "allow_private_endpoint" : false
    },
    "rush_cc" : {
      "service_level" : "FREE_BASIC",
      "entitled" : true,
      "allow_private_endpoint" : true
    },
    "sync_settings" : {
      "entitled" : true,
      "allow_private_endpoint" : false
    },
    "libraries" : {
      "entitled" : true,
      "allow_private_endpoint" : true
    },
    "stock" : {
      "service_level" : "PLUS",
      "entitled" : true,
      "allow_private_endpoint" : true
    },
    "story" : {
      "entitled" : false,
      "allow_private_endpoint" : false
    },
    "phonegap_build" : {
      "entitled" : false,
      "allow_private_endpoint" : false
    },
    "spark" : {
      "service_level" : "FREE_BASIC",
      "entitled" : true,
      "allow_private_endpoint" : false
    },
    "project_1324" : {
      "entitled" : false,
      "allow_private_endpoint" : false
    },
    "portfolio" : {
      "entitled" : false,
      "allow_private_endpoint" : false
    },
    "collaboration" : {
      "entitled" : true,
      "allow_private_endpoint" : true
    },
    "lightroom" : {
      "entitled" : true,
      "allow_private_endpoint" : false
    },
    "behance" : {
      "service_level" : "PLUS",
      "entitled" : true,
      "allow_private_endpoint" : false
    },
    "design_assets" : {
      "entitled" : true,
      "allow_private_endpoint" : false
    },
    "file_sync" : {
      "entitled" : true,
      "allow_private_endpoint" : true
    },
    "sync_metadata" : {
      "entitled" : true,
      "allow_private_endpoint" : false
    }
  },
  "private_cloud" : false,
  "devices" : [

  ],
  "countryCode" : "ES",
  "utcOffset" : "null",
  "userId" : "313648DC507D03FB0A490D45@AdobeID",
  "emailVerified" : true,
  "first_name" : "Carlos",
  "public_cloud" : true,
  "preferred_languages" : [
    "es-es"
  ],
  "allow_mobile" : true,
  "licenseStatus" : "Active",
  "endpoints" : [
    {
      "status" : "ONLINE",
      "region" : "eu-west-1",
      "features" : {
        "libraries" : {
          "storage" : {
            "uri" : "https://cc-api-storage.adobe.io"
          },
          "view" : {
            "uri" : "https://assets.adobe.com"
          }
        },
        "assets" : {
          "storage" : {
            "uri" : "https://cc-api-storage.adobe.io"
          },
          "view" : {
            "uri" : "https://assets.adobe.com"
          }
        },
        "files" : {
          "storage" : {
            "uri" : "https://cc-api-storage.adobe.io"
          },
          "view" : {
            "uri" : "https://assets.adobe.com"
          },
          "sync" : {
            "uri" : "https://scss.adobesc.com"
          }
        },
        "imageservices" : {
          "service" : {
            "uri" : "https://cc-api-image.adobe.io"
          }
        }
      },
      "id" : "00000000-0000-0000-0000-000000000000",
      "iconUrl" : "https://color.adobe.com/rss/png/generateThemePng.cfm?themeid=5642630",
      "parameters" : {
        "quota" : true,
        "jump" : true
      },
      "description" : "Public Cloud",
      "private" : false,
      "name" : "My Files",
      "etag" : "\"1111111111111\""
    }
  ],
  "email" : "el_zari@hotmail.com",
  "displayName" : "Carlos Rodriguez Feijo",
  "phoneNumber" : null
}
$done({body: JSON.stringify(obj)});