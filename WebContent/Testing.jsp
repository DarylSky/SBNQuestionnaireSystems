
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>Vertical Drop Down Menus</title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />

<link rel="stylesheet" href="CSS/HomePage/TabsVerticalDropDownMenus.css"
	type="text/css" media="all">
<script type="text/javascript">
<!--//--><![CDATA[//><!--
startList = function() {

if (document.getElementById) {
	navRoot = document.getElementById("nav");
	for (i=0; i<navRoot.childNodes.length; i++) {
		node = navRoot.childNodes[i];
		if (node.nodeName=="LI") {
		node.onclick=function() {
		
this.className = (this.className == "on") ? "off" : "on";

			}
   		}
  	}
 }
}
window.onload=startList;
//--><!]]>
</script>

</head>



<body>
<h1>Drop Down Vertical menu based on Suckerfish Menus</h1>
<ul id="nav">
  <li><a href="#">Home </a></li>
  <li><a href="#">About &gt;</a> 
    <ul>
      <li><a href="#">History </a></li>
      <li><a href="#">Team </a></li>
      <li><a href="#">Offices </a></li>
    </ul>
  </li>
  <li><a href="#">Services &gt;</a> 
    <ul>
      <li><a href="#">Web Design </a></li>
      <li><a href="#">Internet Marketing </a></li>
      <li><a href="#">Hosting </a></li>
      <li><a href="#">Domain Names </a></li>
      <li><a href="#">Broadband </a></li>
    </ul>
  </li>
  <li><a href="#">Contact Us &gt;</a> 
    <ul>
      <li><a href="#">United Kingdom</a></li>
      <li><a href="#">France</a></li>
      <li><a href="#">USA</a></li>
      <li><a href="#">Australia</a></li>
    </ul>
  </li>
</ul>
</body>
</html>
