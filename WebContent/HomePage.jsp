<!DOCTYPE html>
<%@ page import="java.util.*,entity.*,dataManager.*,com.mycompany.servlet.*"%>
<html lang="en">
<head>
<title>SBN Questionnaire</title>
<meta charset="utf-8">
<link rel="stylesheet" href="CSS/HomePage/reset.css" type="text/css" media="all">
<link rel="stylesheet" href="CSS/HomePage/grid.css" type="text/css" media="all">
<link rel="stylesheet" href="CSS/HomePage/homePageStyle.css" type="text/css" media="all">
<link rel="stylesheet" href="CSS/HomePage/QuestionnaireCreatedTabs.css" type="text/css" media="all">
<link rel="stylesheet" href="CSS/HomePage/QuestionnaireCreatedTabs.css" type="text/css" media="all">

<script type="text/javascript" src="Js/HomePage/jquery-1.4.2.min.js"></script>
<script type="text/javascript" src="Js/HomePage/cufon-yui.js"></script>
<script type="text/javascript" src="Js/HomePage/Bell_Gothic_Std_500.font.js"></script>
<script type="text/javascript" src="Js/HomePage/Bell_Gothic_Std_700.font.js"></script>
<script type="text/javascript" src="Js/HomePage/cufon-replace.js"></script>
<script type="text/javascript" src="http://info.template-help.com/files/ie6_warning/ie6_script_other.js"></script>
<script type="text/javascript" src="Js/HomePage/html5.js"></script>
<script type="text/javascript" src="Js/HomePage/HomePage.js"></script>
<script type="text/javascript" src="Js/HomePage/jquery-1.2.3.min.js"></script>
<script type="text/javascript" src="Js/HomePage/jquery-1.2.3.min.js"></script>
<script type="text/javascript" src="Js/HomePage/SubTabs/ddaccordion.js"></script>
<script>
$(
    document).ready(function() {

        // When a link is clicked
        $("a.tab").click(function() {

            // switch all tabs off
            $(".active").removeClass("active");

            // switch this tab on
            $(this).addClass("active");

            // slide all content up
            $(".content").slideUp();

            // slide this content up
            var content_show = $(this).attr("title");
            $("#" + content_show).slideDown();

        });

        $('input[type="submit"]').attr('disabled', 'disabled');
        $('input[type="text"]').keyup(function() {
            if ($('input[type="text"]').val() == "") {
                $('input[type="submit"]').attr('disabled', 'disabled');
            } else {
                $('input[type="submit"]').removeAttr('disabled');
            }
        });

    });

    ddaccordion.init({
        headerclass : "silverheader", //Shared CSS class name of headers group
        contentclass : "submenu", //Shared CSS class name of contents group
        revealtype : "mouseover", //Reveal content when user clicks or onmouseover the header? Valid value: "click", "clickgo", or "mouseover"
        mouseoverdelay : 200, //if revealtype="mouseover", set delay in milliseconds before header expands onMouseover
        collapseprev : true, //Collapse previous content (so only one open at any time)? true/false
        defaultexpanded : [ 0 ], //index of content(s) open by default [index1, index2, etc] [] denotes no content
        onemustopen : true, //Specify whether at least one header should be open always (so never all headers closed)
        animatedefault : false, //Should contents open by default be animated into view?
        persiststate : true, //persist state of opened contents within browser session?
        toggleclass : [ "", "selected" ], //Two CSS classes to be applied to the header when it's collapsed and expanded, respectively ["class1", "class2"]
        togglehtml : [ "", "", "" ], //Additional HTML added to the header when it's collapsed and expanded, respectively  ["position", "html1", "html2"] (see docs)
        animatespeed : "fast", //speed of animation: integer in milliseconds (ie: 200), or keywords "fast", "normal", or "slow"
        oninit : function(headers, expandedindices) { //custom code to run when headers have initalized
            //do nothing
        },
        onopenclose : function(header, index, state, isuseractivated) { //custom code to run whenever a header is opened or closed
            //do nothing
        }
    });
</script>

<style type="text/css">
.applemenu {
    margin: 5px 0;
    padding: 0;
    width: 380px; /*width of menu*/
    border: 1px solid #9A9A9A;
}

.applemenu div.silverheader a {
    background: black url(Images/HomePage/silvergradient.gif) repeat-x center left;
    font: normal 12px Tahoma, "Lucida Grande", "Trebuchet MS", Helvetica, sans-serif;
    color: white;
    display: block;
    position: relative;
    /*To help in the anchoring of the ".statusicon" icon image*/
    width: auto;
    padding: 5px 0;
    padding-left: 8px;
    text-decoration: none;
}

.applemenu div.silverheader a:visited,.applemenu div.silverheader a:active {
    color: white;
}

.applemenu div.selected a,.applemenu div.silverheader a:hover {
    background-image: url(Images/HomePage/orange_background.jpg);
    color: white;
}

.applemenu div.submenu { /*DIV that contains each sub menu*/
    background: white;
    padding: 5px;
    height: 300px;
    /*Height that applies to all sub menu DIVs. A good idea when headers are toggled via "mouseover" instead of "click"*/
}
</style>
</head>

<body>
  <center>
    <img src="Images/HomePage/topdecorationline.png" height="10px" width="1579px" />
  </center>
  <!-- header -->
  <header>
    <div class="header-bg">
      <div class="container_24">
        <div class="logo">
          <a href="HomePage.jsp">
            <img src="Images/HomePage/logo.jpg" alt="" height="86px" border="0" width="390px" style="padding-top: 20px;">
          </a>
        </div>
        <nav>
          <ul>
            <li><a href="HomePage.jsp" class="current">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Preview</a></li>
            <li><a href="#">Clients</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Contacts</a></li>
          </ul>
        </nav>
        <a href="#" class="main-banner">
          <img src="Images/HomePage/main-banner.jpg" width="970px" height="330px" alt="">
        </a>
      </div>
    </div>
  </header>
  <!-- content -->
  <section id="content">

    <div class="container_24">

      <div class="row">
        <div class="wrapper">
          <div class="grid_12">
            <div class="box">
              <h2>Questionnaire Created</h2>
              <div class="wrapper">
                <div id="tabbed_box_1" class="tabbed_box">

                  <div class="tabbed_area">


                    <ul class="tabs">
                      <li><a href="#!" title="content_1" class="tab active">Latest</a></li>
                      <li><a href="#!" title="content_2" class="tab">Categories</a></li>
                      <li><a href="#!" title="content_3" class="tab">Recently edited</a></li>
                      <li><a href="#!" title="content_4" class="tab">Recycle Bin</a></li>

                    </ul>

                    <div id="content_1" class="content">
                      <ul>

                        <% ArrayList<Questionnaire> qs =QuestionnaireController.getQuestionnaire();
                                                                for(int i=0;i<qs.size();i++){
                                                                    Questionnaire q=qs.get(i);
                                                                    out.println("<li>" + "<a>" + q.getTitle()+ "<br/>" + "<small>"+ "DATE CREATED: " + q.getDateCreated() + "<br/>" 
                                                                    + "Last Modified By " + " testing users"+ "<br/>" 
                                                                           + "ON " + q.getDateLastModified() + "</small>" +
                                                                    "</a>" + "</li>");
                                                                }
                                                                %>


                      </ul>
                    </div>

                    <div id="content_2" class="content">
                      <div class="applemenu">


                        <% ArrayList<Questionnaire> allCategories =QuestionnaireController.getQuestionnaireByCategoryAll();                                                                         
                                                                                     for(int i=0;i<allCategories.size();i++){
                                                                    Questionnaire allCategoriesQuestionnaire=allCategories.get(i);

                                                                    //ArrayList<Questionnaire> CategoriesSustainability =QuestionnaireController.getQuestionnaireByCategorySustainability();
                                                                   //for(int a=0; a<CategoriesSustainability.size();a++){
                                                                    //Questionnaire SustainabilityCategories=CategoriesSustainability.get(i);
                                                                    out.println("<div class=\"silverheader\">" + "<a href= \"\">" + allCategoriesQuestionnaire.getCategory() + "</a>" + "</div>"
                                                                                                              
                                                                          + "<div class=\"submenu\">" /* 
                                                                           + "<a>" + SustainabilityCategories.getTitle()+ "<br/>" + "<small>"+ "DATE CREATED: " + SustainabilityCategories.getDateCreated() + "<br/>" 
                                                                            + "Last Modified By " + " testing users"+ "<br/>" 
                                                                            + "ON " + SustainabilityCategories.getDateLastModified() + "</small>"
                                                                                                                                  +"</a>" 
                                                                                                                                  + "<br />" */
                                                                                                                                  + "<ul>"
                                                                                                                                  + "<li><a href=\"\">"
                                                                                                                                  + "Energy Consumption for Year 2011/2012 <br /> <small>Date Created: 03-06-2012 <br /> Last Modified By Frankie Goh on 05062012"
                                                                                                                                  + "</small>"
                                                                                                                                  + "</a></li>"
                                                                                                                                  + "<li><a href=\"\">"
                                                                                                                                  + "Amount of Computers sold in Year 2011/2012 <br /> <small>Date Created: 04-06-2012 <br /> Last Modified By Dustin Pang on 08062012"
                                                                                                                                  + "</small>"
                                                                                                                                  + "</a></li> "

                                                                                                                                 
                                                                          
                                                                                                                                  + "</div>"
                                                                                                                                  
                                                                           
                                                                           ); 
                                                                                                                     }//} 
                                                                %>

                      </div>
                    </div>

                    <div id="content_3" class="content">
                      <ul>
                        <li><a href="">
                            Energy Consumption for Year 2011/2012 <br /> <small>Date Created: 03-06-2012 <br /> Last Modified By Frankie Goh on 05062012
                            </small>
                          </a></li>
                        <li><a href="">
                            Amount of Computers sold in Year 2011/2012 <br /> <small>Date Created: 04-06-2012 <br /> Last Modified By Dustin Pang on 08062012
                            </small>
                          </a></li>
                        <li><a href="">
                            Number of Laundry Detergents sold for July 2012 <br /> <small>Date Created: 05-06-2012 <br /> Last Modified By John Lim on 11062012
                            </small>
                          </a></li>
                        <li><a href="">
                            Number of Toilet Tissues sold for December <small> <br /> Date Created: 06-12-2012 <br /> Last Modified By Mah Li'en on 15062012
                            </small>
                          </a></li>
                      </ul>
                    </div>

                    <div id="content_4" class="content">
                      <ul>
                        <li><a href="">
                            Energy Consumption for Year 2011/2012 <br /> <small>Date Created: 03-06-2012 <br /> Deleted By Frankie Goh on 05062012
                            </small>
                          </a></li>
                        <li><a href="">
                            Amount of Computers sold in Year 2011/2012 <br /> <small>Date Created: 04-06-2012 <br /> Deleted By Dustin Pang on 08062012
                            </small>
                          </a></li>
                        <li><a href="">
                            Number of Laundry Detergents sold for July 2012 <br /> <small>Date Created: 05-06-2012 <br /> Deleted By John Lim on 11062012
                            </small>
                          </a></li>
                        <li><a href="">
                            Number of Toilet Tissues sold for December <small> <br /> Date Created: 06-12-2012 <br /> Deleted By Mah Li'en on 15062012
                            </small>
                          </a></li>
                      </ul>
                    </div>



                  </div>

                </div>

              </div>
            </div>
          </div>



          <div class="grid_12">

            <div class="box">

              <div class="suffix_1">

                <h2>Create Your Own Questionnaire</h2>

                <p>This system is unique as it is able to provide better solutions in an innovative way compared to third party survey applications. It is more customizable as users are now able
                  to manipulate all the components in the questionnaire panel by using the drag and drop function</p>

                <form method=get action="QuestionnaireCreation.jsp" id="contacts-form">
                  <fieldset>
                    <div class="grid_5 alpha">

                      <label>Enter Questionnaire Title:<br /> <input type="text" value="" name="title" id="title" />

                      </label> <label>Select Your Category:<br /> <select STYLE="width: 177px; height: 23px; font-size: 20;" name="category" id="category">
                          <option>Sustainability Issue</option>
                          <option>Community</option>
                          <option>Customer Feedback</option>
                          <option>Demographics</option>
                          <option>Education</option>
                          <option>Events</option>
                          <option>Health care</option>
                          <option>Human Resources</option>
                          <option>Industry Specific</option>
                          <option>Just for Fun</option>
                          <option>Market Research</option>
                          <option>Non-Profit</option>
                          <option>Political</option>
                          <option>Others</option>
                      </select>


                      </label>

                    </div>


                    <div class="grid_7 omega">



                      <div class="wrapper">


                        <input type="submit" value="Create" class="button" onclick="javascript: directToQuestionnairePage();"
                          style="display: inline-block; width: 81px; height: 35px; line-height: 37px; font-size: 16px; background: url(Images/HomePage/button.png) no-repeat 0 0; color: #fff; text-decoration: none;" />

                        <input type="submit" value="Clear" class="button" onclick="javascript: directToQuestionnairePage();"
                          style="display: inline-block; width: 81px; height: 35px; line-height: 37px; font-size: 16px; background: url(Images/HomePage/button.png) no-repeat 0 0; color: #fff; text-decoration: none;" />

                      </div>

                    </div>

                  </fieldset>

                </form>

              </div>

            </div>
  </section>

  <!-- footer -->
  <footer>
    <div class="container_24">
      <div class="wrapper">
        <nav>
          <ul>
            <li><a href="index.html">Home page</a></li>
            <li><a href="index-1.html">About Us</a></li>
            <li><a href="index-2.html">Preview</a></li>
            <li><a href="index-3.html">Clients</a></li>
            <li><a href="index-4.html">FAQ</a></li>
            <li><a href="index-5.html">Contacts</a></li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="sap_reasearch_icon">
      <p class="sap_research_icon2">
        <b>RESEARCH</b>
      </p>
      <p class="sap_research_icon1">
        <b>SAP</b>
      </p>
    </div>
  </footer>
  <script type="text/javascript">
            Cufon.now();
        </script>
</body>
</html>






