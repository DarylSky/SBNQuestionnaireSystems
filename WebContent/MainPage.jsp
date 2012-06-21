<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Questionnaire System</title>

<link rel="stylesheet" type="text/css" href="CSS/MainPage.css" />
<link rel="stylesheet" type="text/css" href="CSS/JqueryCSS/jquery.ui.all.css" />
<script src="Js/jquery-1.7.2.js"></script>
<script src="Js/jquery-ui-1.8.20.custom.js"></script>
<script src="Js/basic.js"></script>

<script src="Js/datetimepicker.js"></script>
<script src="Js/jquery.bgiframe-2.1.2.js"></script>
<script src="Js/JqueryUI/jquery.ui.core.js"></script>
<script src="Js/JqueryUI/jquery.ui.widget.js"></script>
<script src="Js/JqueryUI/jquery.ui.mouse.js"></script>
<script src="Js/JqueryUI/jquery.ui.button.js"></script>
<script src="Js/JqueryUI/jquery.ui.draggable.js"></script>
<script src="Js/JqueryUI/jquery.ui.position.js"></script>
<script src="Js/JqueryUI/jquery.ui.resizable.js"></script>
<script src="Js/JqueryUI/jquery.ui.dialog.js"></script>
<script src="Js/JqueryUI/jquery.effects.core.js"></script>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.5/jquery.min.js"></script>
<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/jquery-ui.min.js"></script>




<style type="text/css">
#draggable {
    width: 100px;
    height: 70px;
    background: silver;
}

body {
    font-size: 62.5%;
}

input.text {
    margin-bottom: 12px;
    width: 95%;
    padding: .4em;
}

fieldset {
    padding: 0;
    border: 0;
    margin-top: 25px;
}

h1 {
    font-size: 1.2em;
    margin: .6em 0;
}

div#users-contain {
    width: 350px;
    margin: 20px 0;
}

div#users-contain table {
    margin: 1em 0;
    border-collapse: collapse;
    width: 100%;
}

div#users-contain table td,div#users-contain table th {
    border: 1px solid #eee;
    padding: .6em 10px;
    text-align: left;
}

.ui-dialog .ui-state-error {
    padding: .3em;
}

.validateTips {
    border: 1px solid transparent;
    padding: 0.3em;
}
</style>


<script>
    $(document).ready(function() {

        $(function() {

            $("#question1").sortable();
        });

    });

    $(function() {
        $("#datepicker").datepicker();
    });

    function getParams() {
        var idx = document.URL.indexOf('?');
        var params = new Array();
        if (idx != -1) {
            var pairs = document.URL.substring(idx + 1, document.URL.length).split('&');
            for ( var i = 0; i < pairs.length; i++) {
                nameVal = pairs[i].split('=');
                params[nameVal[0]] = nameVal[1];
            }
        }
        return params;
    }

    params = getParams();
    title = unescape(params["title"]);
</script>

</head>
<body style="border: 2px double #003366; width: 1010px; background-image: -ms-radial-gradient(left top, circle farthest-corner, #7D7D7D 0%, #001A26 100%);">
  <div id="mainPanel" width="1000" style="background-color: white;">

    <div id="hello">
      <img src="Images/MainPage/MainPageBanner.png" width="1010" height="60" style="position: fixed" /><br /> <br /> <br /> <br />
    </div>

    <ul id="nav" style="vertical-align: middle;">
      <li id="question"><a href="#">Question</a></li>
      <li id="textField"><a href="#">Text Field</a>
        <ul id="fieldsInTextField" style="list-style: none;">
          <li id="shorttext"><a href="#">Short Field</a></li>
          <li id="longtext"><a href="#">Long Field</a></li>
        </ul></li>
      <li id="answerField"><a href="#">Answer Field</a>
        <ul style="list-style: none;">
          <li id="text"><a href="#">Text</a></li>
          <li id="textunit"><a href="#">Text With Unit</a></li>
          <li id="paragraph"><a href="#">Paragraph Text</a></li>
          <li id="checkbox"><a href="#">Check Box</a></li>
          <li id="dropdown"><a href="#">Drop Down List</a></li>
          <li id="radio"><a href="#">Radio Button</a></li>
          <li id="datepicker"><a href="#">Date Time</a></li>
        </ul></li>
      <li id="guidance"><a href="#">Guidance</a>
        <ul style="list-style: none;">
          <li id="guidanceAdd"><a href="#">Add</a></li>
          <li id="guidanceRemove"><a href="#">Remove</a></li>
        </ul></li>
      <li id="attachment"><a href="#">Attachment</a>
        <ul style="list-style: none;">
          <li id="attachmentCreator"><a href="#">For Questionnaire Creator</a></li>
          <li id="attachmentUser"><a href="#">For Questionnaire User</a></li>
        </ul></li>

    </ul>

    <br /> <br />
    <div class="clear"></div>
    <br />
    <div id="questionnairediv">
      <%String title=request.getParameter("title");out.println(title);%>
    </div>

    <br />
    <div id="question1"></div>

  </div>

  <center>
    <div id="version">
      <img src="Images/MainPage/MainPageFooter.png" width="1010" height="23" /><br />
    </div>

    <div id="dialog-form" title="Guidance"></div>

  </center>


</body>
</html>
