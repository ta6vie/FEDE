var obj = JSON.parse($response.body);
obj= 

{
  "success" : true,
  "data" : {
    "uid" : "QON_0C9C17EC6A9C24BA1FCBC6C5BCFD1572F9656B01",
    "products" : [
      {
        "id" : "premium.1month",
        "type" : 0,
        "store_id" : "com.hassantaleb.SwiftTutorial.premium.1month",
        "duration" : 1
      },
      {
        "id" : "premium.1year",
        "type" : 1,
        "store_id" : "com.hassantaleb.SwiftTutorial.premium.1year",
        "duration" : 4
      },
      {
        "id" : "premium.forever",
        "type" : 2,
        "store_id" : "com.hassantaleb.SwiftTutorial.premium.forever",
        "duration" : null
      }
    ],
    "offerings" : [

    ],
    "products_permissions" : {
      "premium.forever" : [
        "premium"
      ],
      "premium.1month" : [
        "premium"
      ],
      "premium.1year" : [
        "premium"
      ]
    },
    "user_products" : [
      {
        "id" : "App Dev UIKit",
      "store_id": "App_Dev_UIKit",
        "type" : 2,
        "store_id" : "com.hassantaleb.SwiftTutorial.appDevUIKit",
        "duration" : null
      }
    ],
    "timestamp" : 1661397317,
    "permissions" : [
      {
        "active" : 1,
        "current_period_type" : "oneTime",
        "id" : "app_dev_UIKit",
        "renewable_state" : 1,
        "associated_product" : "app_dev_UIKit"
      }
    ],
    "apple_extra" : {
      "original_application_version" : "1"
    }
  }
}

$done({body: JSON.stringify(obj)});l
