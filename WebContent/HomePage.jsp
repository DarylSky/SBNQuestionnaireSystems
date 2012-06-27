<!DOCTYPE html>
<html lang="en">
<head>
<title>SBN Questionnaire</title>
<meta charset="utf-8">
<link rel="stylesheet" href="CSS/HomePage/reset.css" type="text/css" media="all">
<link rel="stylesheet" href="CSS/HomePage/grid.css" type="text/css" media="all">
<link rel="stylesheet" href="CSS/HomePage/homePageStyle.css" type="text/css" media="all">

<script type="text/javascript" src="Js/HomePage/jquery-1.4.2.min.js"></script>
<script type="text/javascript" src="Js/HomePage/cufon-yui.js"></script>
<script type="text/javascript" src="Js/HomePage/Bell_Gothic_Std_500.font.js"></script>
<script type="text/javascript" src="Js/HomePage/Bell_Gothic_Std_700.font.js"></script>
<script type="text/javascript" src="Js/HomePage/cufon-replace.js"></script>
<script type="text/javascript" src="http://info.template-help.com/files/ie6_warning/ie6_script_other.js"></script>
<script type="text/javascript" src="Js/HomePage/html5.js"></script>
<script type="text/javascript" src="Js/HomePage/HomePage.js"></script>

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
          <a href="index.html">
            <img src="Images/HomePage/logo.jpg" alt="">
          </a>
        </div>
        <nav>
          <ul>
            <li><a href="index.html" class="current">Home</a></li>
            <li><a href="index-1.html">About Us</a></li>
            <li><a href="index-2.html">Preview</a></li>
            <li><a href="index-3.html">Clients</a></li>
            <li><a href="index-4.html">FAQ</a></li>
            <li><a href="index-5.html">Contacts</a></li>
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

                <p>
                  <span style="font-size: 13pt; font-weight: bolder;"> Energy Consumption for Year 2011/2012</span>
                  <br /> Date Created: 03-06-2012 || Last Modified By Frankie Goh on 05062012
                </p>

                <p>
                  <span style="font-size: 13pt; font-weight: bolder;"> Amount of Computer sold in Year 2011/2012</span>
                  <br /> Date Created: 03-06-2012 || Last Modified By Dustin Pang on 05062012
                </p>

                <p>
                  <span style="font-size: 13pt; font-weight: bolder;"> Number of Laundry Detergents sold for July 2012</span>
                  <br /> Date Created: 03-06-2012 || Last Modified By John Lim on 05062012
                </p>
              </div>
            </div>
          </div>



          <div class="grid_12">

            <div class="box">

              <div class="suffix_1">

                <h2>Create Your Own Questionnaire</h2>

                <p>This system is unique as it is able to provide better solutions in an innovative way compared to third party survey applications. It is more customizable as users are now able
                  to manipulate all the components in the questionnaire panel by using the drag and drop function</p>

                <form method=get action="MainPage.jsp" id="contacts-form">
                  <fieldset>
                    <div class="grid_5 alpha">

                      <label>Enter Questionnaire Title:<br /> <input type="text" value="" name="title" id="title" />

                      </label> <label>Select Your Category:<br /> <select STYLE="width: 177px; height: 23px; font-size: 20;" name="category" id="category">
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


                        <!--   <a href="#" class="button" style="background: url(Images/HomePage/button.png) no-repeat 0 0;" onclick="javascript:hello();"> Clear</a>

                        <a href="#" class="button" input type="submit" style="background: url(Images/HomePage/button.png) no-repeat 0 0;" onclick="javascript: directToQuestionnairePage();">
                          Not</a> -->

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

              function hello() {
                     var title = document.title.value;
                     alert(title);
              }
       </script>
</body>
</html>




