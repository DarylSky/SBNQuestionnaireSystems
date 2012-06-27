<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@ page import="java.util.*" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Questionnaire's Preview Page</title>

<link rel="stylesheet" type="text/css" href="CSS/Preview.css" />
<script src="Js/jquery-1.7.2.js"></script>
<script src="Js/jquery-ui-1.8.20.custom.js"></script>
<script src="Js/basic.js"></script>
<script src="Js/JqueryUI/jquery.ui.datepicker.js"></script>


<script>
$(document).ready(function() {

});

</script>

</head>
<body style="border: 2px double #003366; width: 1010px;">
  <div id="mainPanel" width="1000">

    <div id="hello">
      <img src="Images/Preview/PreviewPagebanner.png" width="1010" height="60" style="position: fixed" /><br />
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

    <br /> <br />
    <div class="clear"></div>
    <br />
    <div id="question1"></div>
    <table class="abc" border="0">
    <tr/>
    <th width=965/>
    <p class=flip contentEditable=true>Question 1</p>
    <th>
        <img src="Images/MainPage/minimize.gif" href="#" class="plusBtn" /><img src="Images/MainPage/TextAnswerField/delete_icon.png height=15px width=15px" class="remove" id="remove"/>
        
    <th/>   
    
        
            <%
            ArrayList<String> shortQuestions = (ArrayList<String>) session.getAttribute("shortText");
         
            for(int i=0;i<shortQuestions.size();i++){
            %>
            <tr>
            <td>
            <%    
                out.println(shortQuestions.get(i));
            }
            %>
            </td>
            </tr>
            
            <% ArrayList<String> longQuestions=(ArrayList<String>) session.getAttribute("longText");
             
            for(int i=0;i<longQuestions.size();i++){
            %>
            <tr>
            <td>
            <%    
                out.println( longQuestions.get(i));
            }
            %>
            </td>
            </tr>
            
             <tr>
                <td>
                    <%
                        int numTextBox= (Integer) session.getAttribute("numTextBox");
                       
                        for(int i=0;i<numTextBox;i++){
                      %>  
                     Answer: <input type="text" name="textBox<%out.println(i);%>" />
                     <br/>
                      
                      <%    }
                        
                    %>
                    
                </td>
            </tr> 
            <tr>
                <td>
                    <%
                        int numParagraph= (Integer) session.getAttribute("numParagraph");
                        for(int i=0;i<numParagraph;i++){
                      %>  
                      Answer: <textarea rows=4 columns=20 name="paragraph<%out.println(i);%>" ></textarea>
                     <br/>
                      
                      <%    }
                        
                    %>
                    
                </td>
            </tr>  
             <tr>
                <td>
                    <%
                        int j=0;
                        String[] values;
                        String[] checkBox= (String[]) session.getAttribute("checkBoxValue");
                        for(int i=0;i<checkBox.length-1;i++){
                            String checkBoxValues=checkBox[i];
                            values = checkBoxValues.split(",");
                            
                            while(j<values.length){
                      %>  
                      <input type="checkbox" name="checkbox<%out.println(i);%>"><%out.println(values[j]);%></input>
                     <br/>
                            
                      <%   j++;
                          }
                            %>
                      <br/>
                    <% 
                            j=0;
                            }
                    %>
                    
                </td>
            </tr>
             <tr>
                <td>
                    <%
                        
                        String[] radioValues;
                        String[] radio= (String[]) session.getAttribute("radioValue");
                        for(int i=0;i<radio.length;i++){
                            String radioText=radio[i];
                            radioValues = radioText.split(",");
                            
                            for(int x=0; x<radioValues.length; x++){
                      %>  
                      <input type="radio" name="<%out.println(i);%>"><%out.println(radioValues[x]);%></input>
                     <br/>
                            
                      <%  
                          }
                            %>
                      <br/>
                    <% 
                            
                            }
                    %>
                    
                </td>
            </tr>
           
            
            
           

    </table>          
  </div>

  <center>
    <div id="version">
<img src="Images/MainPage/MainPageFooter.png" width="1010" height="23" />
     </div>

  </center>
</body>
</html>
