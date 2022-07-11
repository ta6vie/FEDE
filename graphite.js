var obj = JSON.parse($response.body);
obj = 

[
  {
    "$token" : "67c48f22822ab25d31d07b047b7d4109",
    "id" : 4,
    "$distinct_id" : "E1DA94B3-CCD0-44C5-8D8D-8FAB4BE0516C",
    "$device_id" : "6F6A0224-96E8-4A14-B81D-23AB1D526B78",
    "$time" : 1657579371098,
    "$user_id" : "E1DA94B3-CCD0-44C5-8D8D-8FAB4BE0516C",
    "$add" : {
      "$ae_total_app_sessions" : 1
    },
    "$mp_metadata" : {
      "$mp_event_id" : "7829656b4c138de1",
      "$mp_session_start_sec" : 0,
      "$mp_session_seq_id" : 0,
      "$mp_session_id" : "97f9ba2c6d0cd29e"
    },
    "$had_persisted_distinct_id" : true
  },
  {
    "$token" : "67c48f22822ab25d31d07b047b7d4109",
    "id" : 5,
    "$time" : 1657579371098,
    "$device_id" : "6F6A0224-96E8-4A14-B81D-23AB1D526B78",
    "$distinct_id" : "E1DA94B3-CCD0-44C5-8D8D-8FAB4BE0516C",
    "$user_id" : "E1DA94B3-CCD0-44C5-8D8D-8FAB4BE0516C",
    "$add" : {
      "$ae_total_app_session_length" : 11.4
    },
    "$mp_metadata" : {
      "$mp_event_id" : "1a81bf8f5c244e12",
      "$mp_session_start_sec" : 0,
      "$mp_session_seq_id" : 1,
      "$mp_session_id" : "97f9ba2c6d0cd29e"
    },
    "$had_persisted_distinct_id" : true
  }
]
$done({body: JSON.stringify(obj)}