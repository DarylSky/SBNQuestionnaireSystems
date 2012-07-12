<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Create Questionnaire</title>

<link rel="stylesheet" type="text/css" href="CSS/MainPage.css" />
<link rel="stylesheet" type="text/css" href="CSS/JqueryCSS/jquery.ui.all.css" />
<script src="Js/jquery-1.7.2.js"></script>
<script src="Js/jquery-ui-1.8.20.custom.js"></script>
<script src="Js/basic.js"></script>
<script src="Js/menuAccordion.js"></script>
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

#back-top span {
    width: 108px;
    height: 108px;
    display: block;
    margin-bottom: 7px;
    background: #ddd url(Images/MainPage/up-arrow.png) no-repeat center center;
    /* rounded corners */
    -webkit-border-radius: 15px;
    -moz-border-radius: 15px;
    border-radius: 15px;
    /* background color transition */
    -webkit-transition: 1s;
    -moz-transition: 1s;
    transition: 1s;
}
</style>


<script>
    $(document).ready(function() {

        $(function() {

            $("#questionDiv").sortable();

        });

        $(function() {
            $("#datepicker").datepicker();
        });

        // hide #back-top first
        $("#back-top").hide();

        // fade in #back-top
        $(function() {
            $(window).scroll(function() {
                if ($(this).scrollTop() > 100) {
                    $('#back-top').fadeIn();
                } else {
                    $('#back-top').fadeOut();
                }
            });

            // scroll body to 0px on click
            $('#back-top a').click(function() {
                $('body,html').animate({
                    scrollTop : 0
                }, 800);
                return false;
            });
        });

    });
</script>

</head>

<body>
  <div class="top_decoration_line">
    <img src="Images/MainPage/topdecorationline.png" height="10px" width="1579px" />
  </div>

  <br />
  <div id="mainPanel" class="mainPanel" style="background-color: white; width: 1010px;">

    <table>
      <tr>
        <td>
          <div class="logo" style="background-color: white; width: 400px;">
            <img src="Images/HomePage/logo.jpg" alt="">
          </div>
        </td>
        <td>
          <div class="mainNav">
            <a href="HomePage.jsp" class="mainNav">
              <b>Home</b>
            </a>
            <a href="#" class="mainNav">
              <b>About Us</b>
            </a>
            <a href="#" class="mainNav">
              <b>Preview</b>
            </a>
            <a href="#" class="mainNav">
              <b>Clients</b>
            </a>
            <a href="#" class="mainNav">
              <b>FAQ</b>
            </a>
            <a href="#" class="mainNav">
              <b>Contacts</b>
            </a>
          </div>
        </td>
      </tr>
    </table>
    <!-- 
    <form method="get" action=QuestionnaireCreation target="blank">
      <input id="hiddenJSONtext" type="text" name="hiddenJSONtext" value="Hello" /> -->
    <table>
      <tr>

        <td>
          <img src="Images/MainPage/InfoBanner.jpg" width="1010" height="185" /> <br /> <br />
          <div class="clear"></div>
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
          <br />
          <div id="outerQuestionDiv">
            <div id="questionDiv">
<!--               <input id="preview" type="submit" class="toolbox_button" style="height: 20px;" value="Preview" /> -->
              <p class="question_description">
                <b>Objects will be inserted here</b>
              </p>

            </div>
          </div>

          <div id="sap_reasearch_icon">
            <div style="width: 950px;">
              <br /> <br />
              <p class="sap_research_icon2">
                <b>RESEARCH</b>
              </p>
              <p class="sap_research_icon1">
                <b>SAP</b>
              </p>
            </div>
          </div>
        </td>
        <td class="questionnaire_tools_div">
          <div class="toolbox_title">
            <b>ToolBox:</b>
          </div>
          <div class="menuAcdn" animation="true" expand="single">
            <ul>
              <li id="question"><a href="#" style="text-decoration: none">Create Question</a></li>
              <li id="answerField" title="Maximum of two answer fields allowed only">Answer Field
                <ul style="list-style: none;">
                  <li id="text"><a href="#" style="text-decoration: none" id="textbox">Text</a></li>
                  <li id="textunit"><a href="#" style="text-decoration: none">Text With Unit</a></li>
                  <li id="paragraph"><a href="#" style="text-decoration: none">Paragraph Text</a></li>
                  <li id="checkbox"><a href="#" style="text-decoration: none">Check Box</a></li>
                  <li id="dropdown"><a href="#" style="text-decoration: none">Drop Down List</a></li>
                  <li id="radio"><a href="#" style="text-decoration: none">Radio Button</a></li>
                  <li id="datepicker"><a href="#" style="text-decoration: none">Date Time</a></li>
                </ul>
              </li>
              <li id="additional">Additional Information
                <ul style="list-style: none;">
                  <li id="additional_Question"><a href="#" style="text-decoration: none">Question</a></li>
                  <li id="additional_text"><a href="#" style="text-decoration: none" id="textbox">Text</a></li>
                  <li id="additional_textunit"><a href="#" style="text-decoration: none">Text With Unit</a></li>
                  <li id="additional_paragraph"><a href="#" style="text-decoration: none">Paragraph Text</a></li>
                  <li id="additional_checkbox"><a href="#" style="text-decoration: none">Check Box</a></li>
                  <li id="additional_dropdown"><a href="#" style="text-decoration: none">Drop Down List</a></li>
                  <li id="additional_radio"><a href="#" style="text-decoration: none">Radio Button</a></li>
                  <li id="additional_datepicker"><a href="#" style="text-decoration: none">Date Time</a></li>
                </ul>
              </li>
              <li id="guidance">Guidance
                <ul style="list-style: none;">
                  <li id="guidanceAdd"><a href="#" style="text-decoration: none">Add</a></li>
                  <li id="guidanceRemove"><a href="#" style="text-decoration: none">Remove</a></li>
                </ul>
              </li>
              <li id="attachment">Attachment
                <ul style="list-style: none;">
                  <li id="attachmentCreator"><a href="#" style="text-decoration: none">For Questionnaire Creator</a></li>
                  <li id="attachmentUser"><a href="#" style="text-decoration: none">For Questionnaire User</a></li>
                </ul>
              </li>

            </ul>
            <button id="preview" class="toolbox_button" style="height: 20px;">Preview</button> 
            <button id="submit" class="toolbox_button" style="height: 20px;">Submit</button>
          </div>
        </td>
        <td class="questionnaire_tools_div2">
          <p id="back-top">
            <a href="#top">
              <span></span>
            </a>
          </p>
        </td>

      </tr>
    </table>

  </div>
  <div id="dialog-form" title="Guidance"></div>

  <script>
            $(".menuAcdn").click(function(event) {
                event.preventDefault();
            });
        </script>


</body>
</html>



