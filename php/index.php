<?php
$array1 = Array(1,5,30);
$array2 = Array(1,5,45,32,14,5,107,1007);
$array3 = Array(4,25,86,4,5);
$mainArray = [];//contains array (*)
try {
    echo 'Check 3 parameters: ';
    checkInput($array1, $array2, $array3);
} catch (LogicException $e) {
    echo $e->getMessage();
    die();
}
echo "<pre>";
echo '<b>Array 1:</b><br>';
print_r($array1);
echo '<b>Array 2:</b><br>';
print_r($array2);
echo '<b>Array 3:</b><br>';
print_r($array3);
echo "</pre>";
echo '1. Tìm kiếm số 1 trong array thứ 1 : ';
findNumberOne($array1);
echo '2. Merge 2 array thứ 2 và 3 lại, xóa bỏ trùng lặp : ';
mergeArrays($array2, $array3);
echo '3. In ra tất cả value của (*) mà tổng các chữ số của nó chia hết cho 2. : ';
evenArray($mainArray);
echo '4.In ra tất cả value (đã sắp xếp tăng dần) của array thứ 1 mà nó tồn tại trong (*) : ';
increaseArray($array1, $mainArray);
echo '5. In ra tất cả value (đã sắp xếp giảm dần) của array thứ 1, mà key của nó không có trong (*) : ';
reductionArray($array1, $mainArray);
echo '<pre><b>First array:</b><br>';
print_r($array1);
echo '<b>Main array:</b><br>';
print_r($mainArray);

/**
 * Function number 1 in first array
 * @param array $nameArray to find number one in this array.
 * @return void.
 */
function findNumberOne($nameArray)
{
    echo (in_array(1, $nameArray)) ? '<b>Found</b>' : '<b>Not found</b>';
    echo '<br>';
}
/**
 * Function check input
 * @param array $array1 to check.
 * @param array $array2 to check.
 * @param array $array3 to check.
 * @return void.
 */
function checkInput($array1, $array2, $array3)
{
    $listParams = [$array1, $array2, $array3];
    $length = count($listParams);
    $failPosition = [];
    // Run loop for to find fail input
    for ($i = 0; $i < $length; $i++) {
        // If the input in position i are not an array -> add to array $failPosition
        if (!is_array($listParams[$i])) {
            $failPosition[] = $i + 1;
        }
    }
    // If find a fail input -> @throw LogicException
    if (count($failPosition) == 0) {
        echo '<b>Correct</b><br>';
    } else {
        $getFailPosition = implode(', ', $failPosition);
        throw new LogicException('<b>Invalid parameter ' . $getFailPosition . '</b>');
    }
}

/**
 * Function to merge 2 arrays 2 and 3, delete duplicate values.
 * @param array $nameArray1 to merge with $nameArray2.
 * @param array $nameArray1 to merge with $nameArray2.
 * @return void.
 */
function mergeArrays($nameArray1, $nameArray2)
{
	
	$results = array_merge($nameArray1, $nameArray2);
	$results = array_unique($results);
	$GLOBALS['mainArray'] = $results; // Assign temporary array to array mainArray.
    $results = implode(', ', $results);
    echo '<b>' . $results . '</b><br>';
}

/**
 * Function filter out all values whose sum of digits is divisible by 2
 * @param array $mainArray to filter even array.
 * @return void.
 */
function evenArray($mainArray)
{
    $arrayFilter = array_filter($mainArray, function ($value) {
        $total = 0;
        while ($value > 0) {
            $total += $value % 10;
            $value = $value / 10;
        }
        return ($total % 2 == 0) ? true : false;
    });
    $result = implode(', ', $arrayFilter);
    echo '<b>' . $result . '</b><br>';
}
/**
 * Function ascending sort all of the value of the first array that exists in the mainArray.
 * @param array $array1 to find duplicate values in $mainArray.
 * @param array $mainArray for $array1 to find duplicate values.
 * @return void.
 */
function increaseArray($array1, $mainArray)
{
    $arrayResult = array_intersect($array1, $mainArray);
    asort($arrayResult);
    $result = implode(', ', $arrayResult);
    echo '<b>' . $result . '</b><br>';
}
/**
 * Function to sort down the beam when comparing between key and values.
 * @param array $array1 reverse key and values
 * @param array $mainArray for $array1 to find duplicate keys.
 * @return void.
 */
function reductionArray($array1, $mainArray)
{
	$array1 = array_flip($array1);
    $array1 =  array_diff($array1, $mainArray);
    $array1 = array_flip($array1);
    rsort($array1);
    $array1 = implode(', ', $array1);
    echo '<b>' . $array1 . '</b><br>';
}
?>
