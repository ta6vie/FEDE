var obj = JSON.parse($response.body);

obj={

  "user" : {
    "has_premium_access" : true,
    "location" : "Spain",
    "has_social_links" : false,
    "url" : "https://www.behance.net/carlosrodrigu104",
    "country" : "Spain",
    "company" : "",
    "sections" : {

    },
    "images" : {
      "138" : "https://a5.behance.net/e2fc8b38846eb29a11fde42f2137775ae0e50707/img/profile/no-image-138.png?cb=264615658",
      "50" : "https://a5.behance.net/e2fc8b38846eb29a11fde42f2137775ae0e50707/img/profile/no-image-50.png?cb=264615658",
      "100" : "https://a5.behance.net/e2fc8b38846eb29a11fde42f2137775ae0e50707/img/profile/no-image-100.png?cb=264615658",
      "115" : "https://a5.behance.net/e2fc8b38846eb29a11fde42f2137775ae0e50707/img/profile/no-image-115.png?cb=264615658",
      "276" : "https://a5.behance.net/e2fc8b38846eb29a11fde42f2137775ae0e50707/img/profile/no-image-276.png?cb=264615658",
      "230" : "https://a5.behance.net/e2fc8b38846eb29a11fde42f2137775ae0e50707/img/profile/no-image-230.png?cb=264615658"
    },
    "city" : "",
    "last_name" : "Rodriguez Feijo",
    "has_default_image" : 1,
    "links" : [

    ],
    "twitter" : "",
    "state" : "",
    "id" : 806886617,
    "occupation" : "",
    "website" : "",
    "stats" : {
      "appreciations" : 0,
      "team_members" : true,
      "followers" : 0,
      "views" : 0,
      "following" : 0,
      "comments" : 0
    },
    "display_name" : "Carlos Rodriguez Feijo",
    "created_on" : 1608440463,
    "fields" : [

    ],
    "first_name" : "Carlos",
    "banner_image_url" : "",
    "social_links" : [

    ],
    "username" : "carlosrodrigu104"
  },
  "http_code" : 200
}

$done({body: JSON.stringify(obj)});

