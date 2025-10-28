<?php
// signature.php  ——  微信 JS‑SDK 签名接口
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');   // 允许跨域（前端静态页）

// ==================  配置 ==================
$APP_ID     = 'wxc4e4eda8cd960999';  //后面为公众号
$APP_SECRET ='24f62ac00b3e07fc7b13e857e2528f39';// 'eb1f7b9718443e71c7d55d8502a21e63'; //后面为公众号

// ================== 缓存目录 ==================
$cacheDir = __DIR__ . '/cache';
if (!is_dir($cacheDir)) mkdir($cacheDir, 0755, true);
$tokenFile  = $cacheDir . '/access_token.json';
$ticketFile = $cacheDir . '/jsapi_ticket.json';

// ================== 工具函数 ==================
function httpGet($url) {
    $ch = curl_init();
    curl_setopt_array($ch, [
        CURLOPT_URL => $url,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_SSL_VERIFYPEER => false,
        CURLOPT_TIMEOUT => 10,
    ]);
    $data = curl_exec($ch);
    curl_close($ch);
    return $data;
}
function getCache($file, $expire = 7000) {
    if (file_exists($file)) {
        $json = json_decode(file_get_contents($file), true);
        if ($json && $json['time'] > time() - $expire) return $json['value'];
    }
    return false;
}
function setCache($file, $value, $expire = 7000) {
    $data = ['value' => $value, 'time' => time() + $expire];
    file_put_contents($file, json_encode($data));
}
function createNonceStr($len = 16) {
    $chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    $str = '';
    for ($i = 0; $i < $len; $i++) $str .= $chars[mt_rand(0, 35)];
    return $str;
}

// ================== 获取 access_token ==================
$access_token = getCache($tokenFile);
if (!$access_token) {
    $url = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid={$APP_ID}&secret={$APP_SECRET}";
    $res = json_decode(httpGet($url), true);
    if (isset($res['access_token'])) {
        $access_token = $res['access_token'];
        setCache($tokenFile, $access_token);
    } else {
        http_response_code(500);
        echo json_encode(['err' => 1, 'msg' => 'token fail', 'data' => $res]);
        exit;
    }
}

// ================== 获取 jsapi_ticket ==================
$ticket = getCache($ticketFile);
if (!$ticket) {
    $url = "https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token={$access_token}&type=jsapi";
    $res = json_decode(httpGet($url), true);
    if ($res['errcode'] == 0) {
        $ticket = $res['ticket'];
        setCache($ticketFile, $ticket);
    } else {
        http_response_code(500);
        echo json_encode(['err' => 1, 'msg' => 'ticket fail', 'data' => $res]);
        exit;
    }
}

// ================== 生成签名 ==================
$url = $_GET['url'] ?? '';
if (!$url || !filter_var($url, FILTER_VALIDATE_URL)) {
    http_response_code(400);
    echo json_encode(['err' => 1, 'msg' => 'invalid url']);
    exit;
}

// 必须去掉 # 之后的部分
$url = explode('#', $url)[0];

$timestamp = time();
$nonceStr  = createNonceStr();
$string    = "jsapi_ticket={$ticket}&noncestr={$nonceStr}&timestamp={$timestamp}&url={$url}";
$signature = sha1($string);

// ================== 返回数据（支持 JSONP） ==================
$data = [
    'appId'     => $APP_ID,
    'timestamp' => $timestamp,
    'nonceStr'  => $nonceStr,
    'signature' => $signature
];

$callback = $_GET['callback'] ?? '';
if ($callback && preg_match('/^[a-zA-Z0-9_]+$/', $callback)) {
    echo "{$callback}(" . json_encode($data, JSON_UNESCAPED_UNICODE) . ")";
} else {
    echo json_encode($data, JSON_UNESCAPED_UNICODE);
}
?>