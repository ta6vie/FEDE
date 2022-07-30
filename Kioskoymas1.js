var obj = JSON.parse($response.body);

obj = 

{

<?xml version="1.0" encoding="UTF-8"?>
<nd version="1.0"><versions><required-version>5.0.8.503</required-version><latest-version>6.20.1118</latest-version></versions><response id="53"><receipt-status is-subscription-state-updated="0" is-unlimited-account="1" is-premium-trial="1">1</receipt-status></response></nd>

$done({body: JSON.stringify(obj)});

