var obj = JSON.parse($response.body);

obj = {

  "devices" : [
    {
      "os" : "iOS",
      "app_version" : "5.0.3 (7747)",
      "country" : "ES",
      "id" : "f1327ef5-44d7-4e93-95f6-777ce892fd4d",
      "model" : "iPad7,4",
      "os_version" : "14.8",
      "language" : "es",
      "apple_device_info" : {
        "ad_requested_at" : "1657498102",
        "ad_response" : "{\"attribution\":false}",
        "ad_token" : "C9CbFogh+P3De0VCtF/qUEsxJWFvsFmRZc3r/9CHMz8MhStlclhmWAI3+LlDpHc7m6nqcTZ8KadOAPvbXpMcEAdUsSe/RdZPfwAAAVADAAAAqQAAAIBLYtBPI7Kp/w+fKdXNCYlnDaeJmx2H+T32Lr0W/Z4dEXaxSab9krMD37yLvHhVFI3DnOQx0UeBzXq00WwcXA1SzRZJnYZ3ETo6RUZvDxDYzJsE/RsPgaAurEitqHFNdAjXRBUSPzG6WdsGdYlGKd/mjgniuECL9yTbTXPZTIe9PwAAABxu1g7lJZ1VqC93uhceqxxTx0fi83sxQXDTNi+XAAAAnwF4FcN7rUdU6SO+ZF/wwKzEoBaNUgAAAIYDBYtnMGPUZMt+317eduMmN4Ziui4Y0R45jbRVI99tGqEmvm8bMikRTH/ypFJNp4h2foyT/pSxT/p1GUye7RjHaZYytoADx6LHhQO2FVsmLFwdfV4+EOI5o0ZHfbif1LDWa2NbVsRnNAuaDnaWWM5s1X+KiAivsrKc+kAFrfcyQlDWWq7SywAAAAABBEUNAAA="
      },
      "subscription" : {
        "platform" : "Apple",
        "product_id" : "com.bodunov.GalileoPro",
        "expire_timestamp" : 4073275762
      },
      "name" : "iPad",
      "last_seen" : 1657498994
    },
    {
      "os" : "iOS",
      "app_version" : "5.0.6 (7774)",
      "country" : "ES",
      "id" : "75e813b8-25ad-4e44-9bdb-5327f57f2166",
      "model" : "iPhone13,4",
      "os_version" : "15.5",
      "language" : "es",
      "apple_device_info" : {
        "ad_requested_at" : "1657499085",
        "ad_response" : "{\"attribution\":false}",
        "ad_token" : "qb5dDfB3rK7U+JS5RvpsoFdCgFeH7a9G01xrZigiFHQUBlYhAJyzewJ44SYNUEAyzPOgOqvchgQHUwCPThQHZh5cKQER8mu11wAAAVADAAAA5wAAAIB0GL3stMvpTqvlMlFsL7TdBdb5wnYg6P5ZIcxGyyb87tDH/vA+hiFb0phhltlIUteqxQ3l+X2mtZ2TAY/0W92EuncdNUYAP8Cy9ROsVMcRxhZyAahhxMcG+LCFOQJT5wN/PdvW3Gvf75zn4PPamUkld0ZHJYPwOEXq7/aBUAKBvQAAABnZvXT4+SqcUHfj4PIW8qiPmiG0xxqZD7v/AAAAnwFjyTcauChhs9rki2qNlidUsBGd9gAAAIYAAJ0ihheqjXKOW4RXK6Mls+1iyo3mpAdguKdy7hjmFNGX8remk4EIlFxMggTbhM6xVT148NoE/z0eteaLeaHQBHwziYw2M5cFYxx3bTXB8HiG3ujys5trxiKwmr/4IGX2W0tixAppTkP4G8rPYTSr47Ni2OW7hyUxXywgClNQXqKXiJDRbwAAAAAAAAABBEYXAAA="
      },
      "subscription" : {
        "platform" : "Apple",
        "product_id" : "com.bodunov.GalileoPro",
        "expire_timestamp" : 4073275762
      },
      "name" : "iPhone",
      "last_seen" : 1657499519
    }
  ],
  "user" : {
    "email" : "el_zari@hotmail.com"
  },
  "subscription" : {
    "platform" : "Apple",
    "product_id" : "com.bodunov.GalileoPro",
    "expire_timestamp" : 4073275762
  }
}

$done({body: JSON.stringify(obj)});
