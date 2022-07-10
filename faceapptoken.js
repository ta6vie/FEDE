var obj = $response.body; 
obj = {
 
"settings_version":3,"cache_duration":1,"features":{"collect_logged_exceptions":true,"collect_reports":true,"collect_analytics":false,"prompt_enabled":false,"push_enabled":false,"firebase_crashlytics_enabled":false,"collect_anrs":true,"collect_metric_kit":false},"app":{"status":"activated","update_required":false,"report_upload_variant":2},"fabric":{"org_id":"5ba9fe23ad709e2262000094","bundle_id":"io.faceapp.ios"},"on_demand_upload_rate_per_minute":10.0,"on_demand_backoff_base":1.2,"on_demand_backoff_step_duration_seconds":60}

$done({body});
