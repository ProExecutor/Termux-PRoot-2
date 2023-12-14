<?php
// Run the bash script and store the output in a variable
$output = shell_exec("main.sh");

// Echo the output to the browser
echo "<pre>$output</pre>";
?>
