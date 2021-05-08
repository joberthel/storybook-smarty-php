<?php

require_once __DIR__ . '/vendor/autoload.php';

$smarty = new Smarty();
$smarty->caching = false;

$input = json_decode(file_get_contents('php://input'), true);
foreach ($input as $key => $value) {
    $smarty->assign($key, $value);
}

$smarty->display(__DIR__ . '/templates' . $_SERVER['REQUEST_URI']);
