var obj = $response.body; 
obj = {
 
  "code" : 0,
  "data" : [
    {
      "device_level" : 7,
      "trigger_type" : 1,
      "created_at" : 1643192184,
      "rid" : "VC_POP_00000034",
      "weight" : 1,
      "effective_time" : {
        "status" : 2,
        "info" : [

        ],
        "timezone" : {
          "id" : "",
          "std_offset" : 0
        }
      },
      "trigger" : {
        "cycle" : 1,
        "frequency" : 1
      },
      "number" : 3,
      "popup_config" : {
        "text_two" : "",
        "deeplink" : "",
        "title" : "",
        "confirm_button" : {
          "status" : 1,
          "text" : "Try Now",
          "deeplink" : "vcus://music"
        },
        "text" : "Stunning Slo-Mo Effects ⛷",
        "cancel_button" : {
          "status" : 2,
          "text" : ""
        },
        "media" : {
          "type" : "video",
          "url" : "https://gcs-vcus.meitu.com/2f10816e43a0cba378875bf64e8c2072.mp4"
        },
        "close_angle_mark" : 1
      },
      "updated_at" : 1653018014,
      "popup_type" : 2,
      "sub_status" : 1,
      "ended_at" : 0,
      "user_status" : 2
    }
  ],
  "message" : "",
  "update" : "a9cdc80cd2c4aa84fea1c5507b7edc41"
}

$done({body});
