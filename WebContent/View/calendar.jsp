<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Date Picker</title>
	<link rel="stylesheet" href="../../themes/base/jquery.ui.all.css">
	<link rel="stylesheet" type="text/css" href="../CSS/MainPage.css" />
	<script src="../Js/jquery-1.7.2.js"></script>
	<script src="../Js/jquery-ui-1.8.20.custom.js"></script>
	<script src="../Js/JqueryUI/jquery.ui.core.js"></script>
	<script src="../Js/JqueryUI/jquery.ui.widget.js"></script>
	<script src="../Js/JqueryUI/jquery.ui.datepicker.js"></script>
	<script src="../Js/basic.js"></script>
	
	<script src="../Js/datetimepicker.js"></script>
	
	<link rel="stylesheet" href="../CSS/jquery-ui-1.8.20.custom.css">

<SCRIPT>



$(document).ready(function() {
	   
	$(function() {
		$( "#datepicker" ).datepicker();
	});
	$('.tab').click(function() {
	    $(this).addClass('active').siblings().removeClass('active');
	});
    
   });
	</SCRIPT>

</head>
<body>

<p>Date: <input type="text" id="datepicker"></p>
<input id="demo1" type="text" size="25"><a href="javascript:NewCal('demo1','ddmmyyyy')"><img src="../Images/cal.gif" width="16" height="16" border="0" alt="Pick a date"></a>


    <div class="main">
        <div class="tab">Tab 3</div>
        <div class="tab">Tab 2</div>
        <div class="tab active">Tab 1</div>
    </div>


</body>
</html>
