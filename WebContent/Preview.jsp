<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Questionnaire's Preview Page</title>

<link rel="stylesheet" type="text/css" href="../CSS/Preview.css" />
<script src="../Js/jquery-1.7.2.js"></script>
<script src="../Js/jquery-ui-1.8.20.custom.js"></script>
<script src="../Js/basic.js"></script>
<script src="../Js/JqueryUI/jquery.ui.datepicker.js"></script>


<script>
$(document).ready(function() {

});

$(function() {
	$( "#datepicker" ).datepicker();
});

function getParams(){
	var idx = document.URL.indexOf('?');
	var params = new Array();
	if (idx != -1) {
	var pairs = document.URL.substring(idx+1, document.URL.length).split('&');
	for (var i=0; i<pairs.length; i++){
	nameVal = pairs[i].split('=');
	params[nameVal[0]] = nameVal[1];
	}
	}
	return params;
	}


	params = getParams();
	shorttext = unescape(params["shorttext"]);
	document.write (shorttext);


</script>

</head>
<body style="border: 2px double #003366; width: 1010px;">
  <div id="mainPanel" width="1000">

    <div id="hello">
      <img src="../Images/Preview/PreviewPagebanner.png" width="1010" height="60" style="position: fixed" /><br />
      <br />
      <br />
      <br />
    </div>

    <ul id="nav" style="vertical-align: middle;">
      <li id="home"><a href="#">Home</a>
      <li id="edit"><a href="#">Edit</a>
      <li id="delete"><a href="#">Delete</a>
      <li ><a href="#">.</a>
       <li ><a href="#">.</a>
    </ul>
	<%request.getParameter("shorttext"); %>
    <br /> <br />
    <div class="clear"></div>
    <br />
    <div id="question1"></div>

  </div>

  <center>
    <div id="version">
 <img src="../Images/MainPage/MainPageFooter.png" width="1010" height="23" />
     </div>

  </center>
</body>
</html>

