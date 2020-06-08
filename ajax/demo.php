<!-- <h2>Bonjour <?= ucfirst($_POST['userName']) ?> !</h2> -->

<?php
$name = (isset($_POST['userName'])) ? $_POST['userName'] : 'anonyme';
$computedString = 'Bonjour, ' . $name . ' !';
$array = ['userName' => $name, 'computedString' => $computedString];
echo json_encode($array);
