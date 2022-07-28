var obj = JSON.parse($response.body);

obj = {


  "fabric" : {
    "org_id" : "5453fe9e4d2c43ccf8000045",
    "bundle_id" : "com.futuremoments.audiomastering.pro"
  },
  "cache_duration" : 86400,
  "settings_version" : 3,
  "app" : {
    "status" : "activated",
    "update_required" : false,
    "report_upload_variant" : 2
  },
  "on_demand_upload_rate_per_minute" : 10,
  "on_demand_backoff_base" : 1.2,
  "on_demand_backoff_step_duration_seconds" : 60,
  "features" : {
    "collect_reports" : true,
    "push_enabled" : false,
    "collect_anrs" : true,
    "collect_logged_exceptions" : true,
    "collect_analytics" : false,
    "collect_metric_kit" : false,
    "prompt_enabled" : false,
    "firebase_crashlytics_enabled" : false
  }
}
$done({body: JSON.stringify(obj)});
