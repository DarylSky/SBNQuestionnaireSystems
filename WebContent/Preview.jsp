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

    </div><br/>

    <div class="clear"></div>
    <div id="question1"></div>
    <table class="questionDisplay" border="0">
      <tr />
      <th style="width: 900px;" />
      <p class=flip>Question 1</p>
      <th>
      <th />
      <%
          ArrayList<String> shortQuestions = (ArrayList<String>) session.getAttribute("shortText");

          for (int i = 0; i < shortQuestions.size(); i++) {
      %>
      <tr>
        <td>
          <%
              out.println(shortQuestions.get(i));
              }
          %>
        </td>
      </tr>

      <%
          ArrayList<String> longQuestions = (ArrayList<String>) session.getAttribute("longText");

          for (int i = 0; i < longQuestions.size(); i++) {
      %>
      <tr>
        <td>
          <b> <%
                out.println(longQuestions.get(i));
                }
            %>
          </b>
        </td>
      </tr>

      <tr>
        <td>
          <%
              int numTextBox = (Integer) session.getAttribute("numTextBox");

              for (int i = 0; i < numTextBox; i++) {
          %>
          <input type="text" name="textBox<%out.println(i);%>" /> <br />

          <%
              }
          %>

        </td>
      </tr>
      <tr>
        <td>
          <%
              int numParagraph = (Integer) session.getAttribute("numParagraph");
              for (int i = 0; i < numParagraph; i++) {
          %>

          <textarea rows=4 columns=20 name="paragraph<%out.println(i);%>"></textarea>
          <br />

          <%
              }
          %>

        </td>
      </tr>
      <tr>
        <td>
          <%
              int j = 0;
              String[] values;
              String[] checkBox = (String[]) session.getAttribute("checkBoxValue");
              for (int i = 0; i < checkBox.length - 1; i++) {
                  String checkBoxValues = checkBox[i];
                  values = checkBoxValues.split(",");

                  while (j < values.length) {
          %>
          <input type="checkbox" name="checkbox<%out.println(i);%>">
          <%
              out.println(values[j]);
          %></input> <br />

          <%
              j++;
                  }
          %>
          <br />
          <%
              j = 0;
              }
          %>

        </td>
      </tr>
      <tr>
        <td>
          <%
              String[] radioValues;
              String[] radio = (String[]) session.getAttribute("radioValue");
              for (int i = 0; i < radio.length; i++) {
                  String radioText = radio[i];
                  radioValues = radioText.split(",");

                  for (int x = 0; x < radioValues.length; x++) {
          %>
          <input type="radio" name="<%out.println(i);%>">
          <%
              out.println(radioValues[x]);
          %></input> <br />

          <%
              }
          %>
          <br />
          <%
              }
          %>

        </td>
      </tr>





    </table>
  </div>

</body>
</html>
