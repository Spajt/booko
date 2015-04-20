<?php

$file = file_get_contents('source.txt');
$arr = array();
preg_match_all('#t\(\"(.*?)\"\)#s', $file, $arr);
$arr = $arr[1];
/*for ($a = 0; $a < strlen($arr[0]); $a++) {
    echo $a . ". " . ord($arr[0][$a]) . "<br />";
}*/
for ($a = 0; $a < count($arr); $a++) {
    $arr[$a] = preg_replace('#\"\+\r\s{2,}\"#', '', $arr[$a]);
}

for ($a = 0; $a < count($arr); $a++) {
    $arr[$a] = str_pad($arr[$a], strlen($arr[$a]) + 2, '"', STR_PAD_BOTH);
    echo '<br />' . $arr[$a] . '<br />';
}

