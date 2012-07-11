<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@ page import="java.util.*"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Preview Page</title>

<link rel="stylesheet" type="text/css" href="CSS/Preview.css" />
<script src="Js/jquery-1.7.2.js"></script>
<script src="Js/jquery-ui-1.8.20.custom.js"></script>
<script src="Js/basic.js"></script>
<script src="Js/JqueryUI/jquery.ui.datepicker.js"></script>
<script src="Js/Preview.js"></script>

</head>
<body>

  <div class="top_decoration_line">
    <img src="Images/MainPage/topdecorationline.png" height="10px" width="1579px" />
  </div>
  <br />
  <div id="mainPanel" style="padding-left: 325px; width: 1010px;">

    <div class="logo" style="background-color: white; width: 400px;">
      <img src="Images/HomePage/logo.jpg" alt="">
    </div>
    <br />
    <div id="questionnairediv">
      <b>Questionnaire Title: </b>
      <%
          String title = request.getParameter("title");
          out.println(title);
      %>
      &nbsp; &nbsp; &nbsp;<b>Category: </b>
      <%
          String category = request.getParameter("category");
          out.println(category);
      %>

    </div>

    <div class="clear"></div>
    <div id="questionsdiv">

      <table>
        <tr>
          <td id="questionNo"></td>
        </tr>
        <tr>
          <td id="questionContent"></td>
        </tr>
      </table>

    </div>

  </div>
</body>
</html>
