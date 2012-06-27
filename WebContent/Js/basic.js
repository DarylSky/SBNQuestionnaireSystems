
$(function() {
       $( "#datepicker" ).datepicker();
});


$(document).ready(function(){

       intquestionPanel=0;
       intquestion=0;
       intshort=0;
       intlong=0;
       inttext=0;
       intradio=0;
       intparagraph=0;
       intcheck=0;
       intdropdown=0;
       inttextunit=0;
       intsubquestion=0;
       temp="";
       atemp="";
       shorttexttemp="";
       plusbtn="";

       if ($('#question1').html() =='')

       {

              textField.disabled="true";
              fieldsInTextField.disabled="true";
              answerField.disabled="true";
              guidance.disabled="true";
              attachment.disabled="true";


       }



       $('#question').click(function(){

              intquestionPanel++;
              questionPanel ="questionPanel"+intquestionPanel;
              sortableDiv= "sortable"+intquestionPanel;
              mainDiv= "mainDiv"+intquestionPanel;
              plusBtn= "plusBtn"+intquestionPanel;

              var question = $('#question1');
              var test = $("<div id='"+mainDiv+"'></div>");
              var table= $("<table class=\"abc\" id='"+questionPanel+ "' border=\"0\"/>");
              //<tr><th width=\"965\"></th><th><button type=\"button\" href=\"#\" class=\"plusBtn\" id=\"PlusBtn\" value=\"-\">-</button></tr><tr width=\"965\" id=\"tableslide\"></tr></th></table>/

                     var row = $("<tr/>");
                     var header =$("<th width=960/>");
                     var input = $("<p class=flip contentEditable=true>Question</p>");
                     var header2 = $("<th>");
                     var collapse = $("<img src=\"Images/MainPage/minimize.gif\" href=\"#\" class=\"plusBtn\" id='"+plusBtn+"' value=\"-\" /><img src=Images/MainPage/TextAnswerField/delete_icon.png height=15px width=15px class=\"remove\" id=\"remove\"/>");
                     var element = $("<tr width=\"960\" id=\"tableslide\"/>");
                     var tabledata = $("<td/>");
                     var form = $("<form method=get action=MainPageServlet />");
                     var div = $("<div class=\"demo\" id= '"+sortableDiv+"' />");
                     var button = $("<input type=submit value=Preview class=\"preview\"></input>");

                     question.append(test);
                     test.append(table);
                     table.append(row);
                     row.append(header);
                     header.append(input);
                     row.append(header2);
                     header2.append(collapse);
                     table.append(element);
                     element.append(tabledata);
                     tabledata.append(form);
                     form.append(div);
                     form.append(button);

                     $('.question_description').remove();

                     $("#"+questionPanel).live("click", function(e) {

                    var x = $(div).attr("id");
                    temp = x;

                    var y = $(table).attr("id");
                    atemp = y;

                    textField.disabled=false;
                    fieldsInTextField.disabled=false;
                    answerField.disabled=false;
                    attachment.disabled=false;

                    $("#" + temp).sortable();

             });

              $(document).ready(function(){
                     $("#"+plusBtn).click(function(){
                           $("#"+temp).slideToggle("slow");
                     });

                     $('.remove').click(function() {

                         $("#" + atemp).remove();
                     });

                $('.flip').click(function() {
                       $('.flip').removeClass('highlight');
                       $(this).addClass('highlight').siblings().removeClass('highlight');

                   });

              });

       });


       $('#subquestion').click(function() {
              type="text";
              inttext++;
              imagetextnumber ="imagetextnumber"+inttext;
              textnumber="text" + inttext;

              var alphabet = myArray[intsubquestion];
              var foo = $("#"+temp );
              var fieldWrapper = $("<p/>");
              var first =$("<span class=\"ui-icon ui-icon-arrowthick-2-n-s\">" +
                           "<input type=text size="+3+" value=\"("+alphabet+")\" id="+  textnumber+"/>");
              var second = $("<img src=Images/MainPage/TextAnswerField/delete_icon.png height=10px width=10px id="+ imagetextnumber +"/>");
              second.click(function() {
                     $(this).parent().remove();
              });
              foo.append(fieldWrapper);
              fieldWrapper.append(first);
              fieldWrapper.append(second);
              intsubquestion++;
       });


       $('#questionnumber').click(function() {
              type="text";
              intquestion++;
              imagenumber ="imagenumber"+intquestion;
              questionname="questionnumber" + intquestion;

              var foo = $("#"+temp);
              var fieldWrapper = $("<p/>");
              var first =$("<span class=\"ui-icon ui-icon-arrowthick-2-n-s\"><b>Question #:</b><input type=text size=5 id="+ questionname +"maxlength=5/>");
              var second = $("<img src= Images/MainPage/TextAnswerField/delete_icon.png height=10px width=10px id="+imagenumber +"/>");
              second.click(function() {
                     $(this).parent().remove();
              });
              foo.append(fieldWrapper);
              fieldWrapper.append(first);
              fieldWrapper.append(second);

       });

       $('#shorttext').click(function() {

              type="text";
              intshort++;
              shortimagenumber ="shortimagenumber"+intshort;
              shortbox="shorttextbox" + intshort;
              guidanceHeader="guidanceHeadershorttext"+ intshort;
              p="pshorttext" + intshort;
              guidanceid="guidanceidshorttext" + intshort;

              var foo = $("#"+temp);
              var fieldWrapper = $("<p id='"+p+"' />");
              var first =$("<span><b>Question: </b><input name="+shortbox +" type=text size=20 value=\"\" id='"+ shortbox+"' />");
              var second = $("<img src=Images/MainPage/TextAnswerField/delete_icon.png height=10px width=10px id='"+shortimagenumber +"'/>");
              second.click(function() {
                     $(this).parent().remove();
              });

              var third = $("<img src=Images/MainPage/MenuIcon/GuidanceHeader.gif id='"+guidanceHeader +"'/>");
              third.click(function(){

                     $(function() {
                           // a workaround for a flaw in the demo system (http://dev.jqueryui.com/ticket/4375), ignore!
                           $("#dialog:ui-dialog").dialog("destroy");

                           var guidance = $("#" +guidanceid), allFields = $([]).add(guidance), tips = $(".validateTips");

                           function updateTips(t) {
                                  tips.text(t).addClass("ui-state-highlight");
                                  setTimeout(function() {
                                         tips.removeClass("ui-state-highlight", 1500);
                                  }, 500);
                           }

                           function checkLength(o, n, min, max) {
                                  if (o.val().length > max || o.val().length < min) {
                                         o.addClass("ui-state-error");
                                         updateTips("Length of " + n + " must be between " + min + " and " + max + ".");
                                         return false;
                                  } else {
                                         return true;
                                  }
                           }

                           function checkRegexp(o, regexp, n) {
                                  if (!(regexp.test(o.val()))) {
                                         o.addClass("ui-state-error");
                                         updateTips(n);
                                         return false;
                                  } else {
                                         return true;
                                  }
                           }

                           $("#dialog-form")
                           .dialog(
                                         {
                                                autoOpen : false,
                                                height : 300,
                                                width : 350,
                                                modal : true,
                                                buttons : {
                                                       "Save" : function() {

                                                              $(this).dialog("close");

                                                       },
                                                       Cancel : function() {
                                                              $(this).dialog("close");
                                                       }
                                                },
                                                close : function() {
                                                       allFields.val("").removeClass("ui-state-error");
                                                }
                                         });

                           $("#dialog-form").dialog("open");


                           document.getElementById('dialog-form').innerHTML="<form>"+
                           "<fieldset><label><b>Key the guidance here: <b/></label><br /><textarea name=\"guidanceid\" id="+guidanceid+" rows=\"10\" cols=\"50\"></textarea>" +
                           "</fieldset></form>";
                     });

              });

              foo.append(fieldWrapper);
              fieldWrapper.append(first);
              fieldWrapper.append(second);

              $("#"+p).live("click", function(e) {

                     guidance.disabled=false;

                     /*var x = $(fieldWrapper).attr("id");
            shorttexttemp = x;

            alert(atemp);*/

                     $('#guidanceAdd').click(function(){


                           fieldWrapper.append(third);
                           fieldWrapper.append(second);

                     });

              });

       });


       $('#longtext').click(function() {
              type="text";
              intlong++;
              longimagenumber ="longimagenumber"+intlong;
              longbox="longtext" + intlong;
              guidanceHeader="guidanceHeaderlongtext"+ intlong;
              p="plongtext" + intlong;
              span="spanlongtext" + intlong;
              guidanceid="guidanceidlongtext" + intlong;


              var foo = $("#"+temp);
              var fieldWrapper = $("<p id='"+p+"' />");
              var first =$("<span id='"+span+"'/>");
              var question = $("<b>Question: </b>");
              var longtext = $("<input name="+ longbox +" type=text size=100 id="+ longbox+"/>");
              var second = $("<img src=Images/MainPage/TextAnswerField/delete_icon.png height=10px width=10px id="+longimagenumber +"/>");
              second.click(function() {
                     $(this).parent().remove();
              });

              var third = $("<img src=Images/MainPage/MenuIcon/GuidanceHeader.gif id='"+guidanceHeader +"'/>");
              third.click(function(){

                     $(function() {
                           // a workaround for a flaw in the demo system (http://dev.jqueryui.com/ticket/4375), ignore!
                           $("#dialog:ui-dialog").dialog("destroy");

                           var guidance = $("#" +guidanceid), allFields = $([]).add(guidance), tips = $(".validateTips");

                           function updateTips(t) {
                                  tips.text(t).addClass("ui-state-highlight");
                                  setTimeout(function() {
                                         tips.removeClass("ui-state-highlight", 1500);
                                  }, 500);
                           }

                           function checkLength(o, n, min, max) {
                                  if (o.val().length > max || o.val().length < min) {
                                         o.addClass("ui-state-error");
                                         updateTips("Length of " + n + " must be between " + min + " and " + max + ".");
                                         return false;
                                  } else {
                                         return true;
                                  }
                           }

                           function checkRegexp(o, regexp, n) {
                                  if (!(regexp.test(o.val()))) {
                                         o.addClass("ui-state-error");
                                         updateTips(n);
                                         return false;
                                  } else {
                                         return true;
                                  }
                           }

                           $("#dialog-form")
                           .dialog(
                                         {
                                                autoOpen : false,
                                                height : 300,
                                                width : 350,
                                                modal : true,
                                                buttons : {
                                                       "Save" : function() {

                                                              $(this).dialog("close");

                                                       },
                                                       Cancel : function() {
                                                              $(this).dialog("close");
                                                       }
                                                },
                                                close : function() {
                                                       allFields.val("").removeClass("ui-state-error");
                                               }
                                         });

                           $("#dialog-form").dialog("open");

                           document.getElementById('dialog-form').innerHTML="<form>"+
                           "<fieldset><label><b>Key the guidance here: <b/></label><br /><textarea name=\"guidanceid\" id="+guidanceid+" rows=\"10\" cols=\"50\"></textarea>" +
                           "</fieldset></form>";
                     });

              });

              foo.append(fieldWrapper);
              fieldWrapper.append(first);
              first.append(question);
              first.append(longtext);
              fieldWrapper.append(second);

              $("#"+p).live("click", function(e) {

                     guidance.disabled=false;

                     /*var x = $(fieldWrapper).attr("id");
            shorttexttemp = x;

            alert(atemp);*/

                     $('#guidanceAdd').click(function(){


                           fieldWrapper.append(third);
                           fieldWrapper.append(second);

                     });

              });

       });
       $('#text').click(function() {
              type="text";
              inttext++;
              imagetextnumber ="imagetextnumber"+inttext;
              textnumber="text" + inttext;
              guidanceHeader="guidanceHeadertext"+ inttext;
              p="ptext" + inttext;
              guidanceid="guidanceidtext" + inttext;
              hiddentextnumber="hiddentextbox" + inttext;

              var foo = $("#"+temp);
              var fieldWrapper = $("<p id='"+p+"'/>");
              var first =$("<span><b>Answer: </b><input name="+ textnumber +" type=text style=\"background:grey\" disabled=disabled id='"+  textnumber+"'/>");
              var hidden = $("<input type=hidden name="+hiddentextnumber+">");
              var second = $("<img src=Images/MainPage/TextAnswerField/delete_icon.png height=10px width=10px id='"+ imagetextnumber +"'/>");
              second.click(function() {
                     $(this).parent().remove();
              });

              var third = $("<img src=Images/MainPage/MenuIcon/GuidanceHeader.gif id='"+guidanceHeader +"'/>");
              third.click(function(){

                     $(function() {
                           // a workaround for a flaw in the demo system (http://dev.jqueryui.com/ticket/4375), ignore!
                           $("#dialog:ui-dialog").dialog("destroy");

                           var guidance = $("#" +guidanceid), allFields = $([]).add(guidance), tips = $(".validateTips");

                           function updateTips(t) {
                                  tips.text(t).addClass("ui-state-highlight");
                                  setTimeout(function() {
                                         tips.removeClass("ui-state-highlight", 1500);
                                  }, 500);
                           }

                           function checkLength(o, n, min, max) {
                                  if (o.val().length > max || o.val().length < min) {
                                         o.addClass("ui-state-error");
                                         updateTips("Length of " + n + " must be between " + min + " and " + max + ".");
                                         return false;
                                  } else {
                                         return true;
                                  }
                           }

                           function checkRegexp(o, regexp, n) {
                                  if (!(regexp.test(o.val()))) {
                                         o.addClass("ui-state-error");
                                         updateTips(n);
                                         return false;
                                  } else {
                                         return true;
                                  }
                           }

                           $("#dialog-form")
                           .dialog(
                                         {
                                                autoOpen : false,
                                                height : 300,
                                                width : 350,
                                                modal : true,
                                                buttons : {
                                                       "Save" : function() {

                                                              $(this).dialog("close");

                                                       },
                                                       Cancel : function() {
                                                              $(this).dialog("close");
                                                       }
                                                },
                                                close : function() {
                                                       allFields.val("").removeClass("ui-state-error");
                                                }
                                         });

                           $("#dialog-form").dialog("open");


                           document.getElementById('dialog-form').innerHTML="<form>"+
                           "<fieldset><label><b>Key the guidance here: <b/></label><br /><textarea name=\"guidanceid\" id="+guidanceid+" rows=\"10\" cols=\"50\"></textarea>" +
                           "</fieldset></form>";
                     });

              });

              foo.append(fieldWrapper);
              fieldWrapper.append(first);
              fieldWrapper.append(hidden);
              fieldWrapper.append(second);

              $("#"+p).live("click", function(e) {

                     guidance.disabled=false;

                     /*var x = $(fieldWrapper).attr("id");
            shorttexttemp = x;

            alert(atemp);*/

                     $('#guidanceAdd').click(function(){


                           fieldWrapper.append(third);
                           fieldWrapper.append(second);

                     });


              });


       });

       $('#radio').click(function() {
              type="text";
              type2="radio";
              intradio++;
              imageradionumber ="imageradionumber"+intradio;
              radiotextnumber="radiotextnumber" + intradio;
              radiobuttonnumber = "radiobuttonnumber" +intradio;
              guidanceHeader="guidanceHeaderradio"+ intradio;
              p="pradio" + intradio;
              guidanceid="guidanceidradio" + intradio;


              var foo = $("#"+temp);
              var fieldWrapper = $("<p id='"+p+"'/>");
              //var first =$("<span class=\"ui-icon ui-icon-arrowthick-2-n-s\"/>");
              var input = $(" <input name="+radiotextnumber+" type=text id="+radiotextnumber+" />");
                var radio =$("<input type=radio id="+radiobuttonnumber+" value="+$(input).val()+"/>");
              var second = $("<img src=Images/MainPage/TextAnswerField/delete_icon.png height=10px width=10px id="+ imageradionumber +"/>");
              second.click(function() {
                     $(this).parent().remove();
              });
              var third = $("<img src=Images/MainPage/TextAnswerField/plus_icon.png height=15px width=15px/>");
              third.click(function() {
                      var id = $(input).attr("id");
                     fieldWrapper.append("<br/>");
                     fieldWrapper.append("<input type=radio disabled=disabled id="+  radiobuttonnumber+"/> <input name="+id+" type=text id="+  radiotextnumber+"/>");


              });

              var fourth = $("<img src=Images/MainPage/TextAnswerField/minus_icon.png height=15px width=15px/>");
              fourth.click(function(e) {

                     $(second).next('br').remove('br');
                     $(second).next('img').remove('img');
                     $(second).next('input').remove('input');
                     $(second).next('input').remove('input');

              });

              var fifth = $("<img src=Images/MainPage/MenuIcon/GuidanceHeader.gif id='"+guidanceHeader +"'/>");
              fifth.click(function(){

                     $(function() {
                           // a workaround for a flaw in the demo system (http://dev.jqueryui.com/ticket/4375), ignore!
                           $("#dialog:ui-dialog").dialog("destroy");

                           var guidance = $("#" +guidanceid), allFields = $([]).add(guidance), tips = $(".validateTips");

                           function updateTips(t) {
                                  tips.text(t).addClass("ui-state-highlight");
                                  setTimeout(function() {
                                         tips.removeClass("ui-state-highlight", 1500);
                                  }, 500);
                           }

                           function checkLength(o, n, min, max) {
                                  if (o.val().length > max || o.val().length < min) {
                                         o.addClass("ui-state-error");
                                         updateTips("Length of " + n + " must be between " + min + " and " + max + ".");
                                         return false;
                                  } else {
                                         return true;
                                  }
                           }

                           function checkRegexp(o, regexp, n) {
                                  if (!(regexp.test(o.val()))) {
                                         o.addClass("ui-state-error");
                                         updateTips(n);
                                         return false;
                                  } else {
                                         return true;
                                  }
                           }

                           $("#dialog-form")
                           .dialog(
                                         {
                                                autoOpen : false,
                                                height : 300,
                                                width : 350,
                                                modal : true,
                                                buttons : {
                                                       "Save" : function() {

                                                              $(this).dialog("close");

                                                       },
                                                       Cancel : function() {
                                                              $(this).dialog("close");
                                                       }
                                                },
                                                close : function() {
                                                       allFields.val("").removeClass("ui-state-error");
                                                }
                                         });

                           $("#dialog-form").dialog("open");


                           document.getElementById('dialog-form').innerHTML="<form>"+
                           "<fieldset><label><b>Key the guidance here: <b/></label><br /><textarea name=\"guidanceid\" id="+guidanceid+" rows=\"10\" cols=\"50\"></textarea>" +
                           "</fieldset></form>";
                     });

              });

              foo.append(fieldWrapper);
              fieldWrapper.append(radio);
              fieldWrapper.append(input);
              fieldWrapper.append(third);
              fieldWrapper.append(fourth);
              fieldWrapper.append(second);

              $("#"+p).live("click", function(e) {

                     guidance.disabled=false;

                     /*var x = $(fieldWrapper).attr("id");
            shorttexttemp = x;

            alert(atemp);*/

                     $('#guidanceAdd').click(function(){


                           fieldWrapper.append(fifth);
                           fieldWrapper.append(second);

                     });

              });

       });

       $('#paragraph').click(function() {
              type="textarea";
              intparagraph++;
              paragraphnumber = "paragraphnumber" + intparagraph;
              paragraphimagenumber = "paragraphimagenumber" + intparagraph;
              guidanceHeader="guidanceHeaderparagraph"+ intparagraph;
              p="pparagragh" + intparagraph;
              guidanceid="guidanceidparagraph" + intparagraph;
              hiddenparagraphnumber = "hiddenparagraphnumber" + intparagraph;


              var foo = $("#"+temp);
              var fieldWrapper = $("<p id='"+p+"'/>");
              var first =$("<span class=\"ui-icon ui-icon-arrowthick-2-n-s\"><b>Answer: </b><textarea rows=4 columns=20  style=\"background:grey\" disabled=disabled id="+  paragraphnumber+"/>");
              var hiddenparagraph = $("<input type=hidden name="+hiddenparagraphnumber+" value=paragraph>");
              var second = $("<img src=Images/MainPage/TextAnswerField/delete_icon.png height=10px width=10px id="+ paragraphimagenumber +"/>");
              second.click(function() {
                     $(this).parent().remove();
              });

              var third = $("<img src=Images/MainPage/MenuIcon/GuidanceHeader.gif id='"+guidanceHeader +"'/>");
              third.click(function(){

                     $(function() {
                           // a workaround for a flaw in the demo system (http://dev.jqueryui.com/ticket/4375), ignore!
                           $("#dialog:ui-dialog").dialog("destroy");

                           var guidance = $("#" +guidanceid), allFields = $([]).add(guidance), tips = $(".validateTips");

                           function updateTips(t) {
                                  tips.text(t).addClass("ui-state-highlight");
                                  setTimeout(function() {
                                         tips.removeClass("ui-state-highlight", 1500);
                                  }, 500);
                           }

                           function checkLength(o, n, min, max) {
                                  if (o.val().length > max || o.val().length < min) {
                                         o.addClass("ui-state-error");
                                         updateTips("Length of " + n + " must be between " + min + " and " + max + ".");
                                         return false;
                                  } else {
                                         return true;
                                  }
                           }

                           function checkRegexp(o, regexp, n) {
                                  if (!(regexp.test(o.val()))) {
                                         o.addClass("ui-state-error");
                                         updateTips(n);
                                         return false;
                                  } else {
                                         return true;
                                  }
                           }

                           $("#dialog-form")
                           .dialog(
                                         {
                                                autoOpen : false,
                                                height : 300,
                                                width : 350,
                                                modal : true,
                                                buttons : {
                                                       "Save" : function() {

                                                              $(this).dialog("close");

                                                       },
                                                       Cancel : function() {
                                                              $(this).dialog("close");
                                                       }
                                                },
                                                close : function() {
                                                       allFields.val("").removeClass("ui-state-error");
                                                }
                                         });

                           $("#dialog-form").dialog("open");


                           document.getElementById('dialog-form').innerHTML="<form>"+
                           "<fieldset><label><b>Key the guidance here: <b/></label><br /><textarea name=\"guidanceid\" id="+guidanceid+" rows=\"10\" cols=\"50\"></textarea>" +
                           "</fieldset></form>";
                     });

              });

              foo.append(fieldWrapper);
              fieldWrapper.append(first);
              fieldWrapper.append(hiddenparagraph);
              fieldWrapper.append(second);

              $("#"+p).live("click", function(e) {

                     guidance.disabled=false;

                     /*var x = $(fieldWrapper).attr("id");
            shorttexttemp = x;

            alert(atemp);*/

                     $('#guidanceAdd').click(function(){


                           fieldWrapper.append(third);
                           fieldWrapper.append(second);

                     });

              });

       });

       $('#checkbox').click(function() {
              type="text";
              type2="checkbox";
              intcheck++;
              imagecheckbox ="imagechecknumber"+intcheck;
              checktextbox="checktextnumber" + intcheck;
              checkbuttonbox = "checkbuttonnumber" +intcheck;
              guidanceHeader="guidanceHeadercheckbox"+ intcheck;
              p="pcheck" + intcheck;
              guidanceid="guidanceidcheck" + intcheck;

              var foo = $("#"+temp);
              var fieldWrapper = $("<p id='"+p+"'/>");
              var input = $(" <input name="+checktextbox+" type=text id="+checktextbox+" />");
                var first =$("<input type=checkbox  id="+  checkbuttonbox+" value="+$(input).val()+"/>");
              var second = $("<img src=Images/MainPage/TextAnswerField/delete_icon.png height=10px width=10px id="+ imagecheckbox +"/>");
              second.click(function() {
                     $(this).parent().remove();
              });
              var third = $("<img src=Images/MainPage/TextAnswerField/plus_icon.png height=15px width=15px />");
              third.click(function() {
                   var id = $(input).attr("id");
                     fieldWrapper.append("<br/>");
                     fieldWrapper.append("<input type=checkbox disabled=disabled id="+  checkbuttonbox+"/> <input input name="+id+" type=text id="+  checktextbox+"/>");


              });

              var fourth = $("<img src=Images/MainPage/TextAnswerField/minus_icon.png height=15px width=15px/>");
              fourth.click(function(e) {

                     $(second).next('br').remove('br');
                     $(second).next('input').remove('input');
                     $(second).next('input').remove('input');

              });

              var fifth = $("<img src=Images/MainPage/MenuIcon/GuidanceHeader.gif id='"+guidanceHeader +"'/>");
              fifth.click(function(){

                     $(function() {
                           // a workaround for a flaw in the demo system (http://dev.jqueryui.com/ticket/4375), ignore!
                           $("#dialog:ui-dialog").dialog("destroy");

                           var guidance = $("#" +guidanceid), allFields = $([]).add(guidance), tips = $(".validateTips");

                           function updateTips(t) {
                                  tips.text(t).addClass("ui-state-highlight");
                                  setTimeout(function() {
                                         tips.removeClass("ui-state-highlight", 1500);
                                  }, 500);
                           }

                           function checkLength(o, n, min, max) {
                                  if (o.val().length > max || o.val().length < min) {
                                         o.addClass("ui-state-error");
                                         updateTips("Length of " + n + " must be between " + min + " and " + max + ".");
                                         return false;
                                  } else {
                                         return true;
                                  }
                           }

                           function checkRegexp(o, regexp, n) {
                                  if (!(regexp.test(o.val()))) {
                                         o.addClass("ui-state-error");
                                         updateTips(n);
                                         return false;
                                  } else {
                                         return true;
                                  }
                           }

                           $("#dialog-form")
                           .dialog(
                                         {
                                                autoOpen : false,
                                                height : 300,
                                                width : 350,
                                                modal : true,
                                                buttons : {
                                                       "Save" : function() {

                                                              $(this).dialog("close");

                                                       },
                                                       Cancel : function() {
                                                              $(this).dialog("close");
                                                       }
                                                },
                                                close : function() {
                                                       allFields.val("").removeClass("ui-state-error");
                                                }
                                         });

                           $("#dialog-form").dialog("open");


                           document.getElementById('dialog-form').innerHTML="<form>"+
                           "<fieldset><label><b>Key the guidance here: <b/></label><br /><textarea name=\"guidanceid\" id="+guidanceid+" rows=\"10\" cols=\"50\"></textarea>" +
                           "</fieldset></form>";
                     });

              });

              foo.append(fieldWrapper);
              fieldWrapper.append(first);
              fieldWrapper.append(input);
              fieldWrapper.append(third);
              fieldWrapper.append(fourth);
              fieldWrapper.append(second);

              $("#"+p).live("click", function(e) {

                     guidance.disabled=false;

                     /*var x = $(fieldWrapper).attr("id");
            shorttexttemp = x;

            alert(atemp);*/

                     $('#guidanceAdd').click(function(){


                           fieldWrapper.append(fifth);
                           fieldWrapper.append(second);

                     });

              });

       });

       $('#textunit').click(function() {
              type="width:100px";
              type2="text";
              inttextunit++;
              textwithunitdropdown="textwithunitdropdown" + inttextunit;
              textwithunit= "textwithunit"+inttextunit;
              guidanceHeader="guidanceHeadertextunit"+ inttextunit;
              p="ptextunit" + inttextunit;
              guidanceid="guidanceidtextunit" + inttextunit;
              hiddentextwithunit= "hiddentextwithunit"+inttextunit;


              var foo = $("#"+temp);
              var fieldWrapper = $("<p id='"+p+"'/>");
              var first =$("<span><b>Answer: </b><input name="+ textwithunit+" type=text disabled=disabled style=\"background:grey\" id=" + textwithunit+">");
              var second = $("<img src=Images/MainPage/TextAnswerField/plus_icon.png height=15px width=15px/>");
              var select = $("<select style=width:100px id="+  textwithunitdropdown+"/>");
              var text=$("<input type=text id=autocomplete/>");
              var hiddentext = $("<input type=hidden name="+hiddentextwithunit+" value=textunit>");
              $(text).autocomplete({
                     source: ["mm", "cm", "m", "km", "mg", "g", "kg", "Metric Ton",
                              "Degree Celsius", "Square Meter", "Hectare", "Degree", "ml", "Cubic Centimeter", "L", "m/s",
                              "km/h","Newton","Watt","KiloWatt","Ampere"]
              });
              second.click(function() {
                     select.append('<option value=' + $(text).val()+'>'+ $(text).val() +'</option>');
                     $(text).attr("value", "");
              });
              var third = $("<img src=Images/MainPage/TextAnswerField/minus_icon.png height=15px width=15px/>");
              third.click(function() {
                     var x=$(select).attr("id");
                     var y =$(select).attr("value");
                     $("#" + x +" option[value='"+y+"']").remove();
              });
              var fourth = $("<img src=Images/MainPage/TextAnswerField/delete_icon.png height=10px width=10px/>");
              fourth.click(function() {
                     $(this).parent().remove();
              });

              var fifth = $("<img src=Images/MainPage/MenuIcon/GuidanceHeader.gif id='"+guidanceHeader +"'/>");
              fifth.click(function(){

                     $(function() {
                           // a workaround for a flaw in the demo system (http://dev.jqueryui.com/ticket/4375), ignore!
                           $("#dialog:ui-dialog").dialog("destroy");

                           var guidance = $("#" +guidanceid), allFields = $([]).add(guidance), tips = $(".validateTips");

                           function updateTips(t) {
                                  tips.text(t).addClass("ui-state-highlight");
                                  setTimeout(function() {
                                         tips.removeClass("ui-state-highlight", 1500);
                                  }, 500);
                           }

                           function checkLength(o, n, min, max) {
                                  if (o.val().length > max || o.val().length < min) {
                                         o.addClass("ui-state-error");
                                         updateTips("Length of " + n + " must be between " + min + " and " + max + ".");
                                         return false;
                                  } else {
                                         return true;
                                  }
                           }

                           function checkRegexp(o, regexp, n) {
                                  if (!(regexp.test(o.val()))) {
                                         o.addClass("ui-state-error");
                                         updateTips(n);
                                         return false;
                                  } else {
                                         return true;
                                  }
                           }

                           $("#dialog-form")
                           .dialog(
                                         {
                                                autoOpen : false,
                                                height : 300,
                                                width : 350,
                                                modal : true,
                                                buttons : {
                                                       "Save" : function() {

                                                              $(this).dialog("close");

                                                       },
                                                       Cancel : function() {
                                                              $(this).dialog("close");
                                                       }
                                                },
                                                close : function() {
                                                       allFields.val("").removeClass("ui-state-error");
                                                }
                                         });

                           $("#dialog-form").dialog("open");


                           document.getElementById('dialog-form').innerHTML="<form>"+
                           "<fieldset><label><b>Key the guidance here: <b/></label><br /><textarea name=\"guidanceid\" id="+guidanceid+" rows=\"10\" cols=\"50\"></textarea>" +
                           "</fieldset></form>";
                     });

              });

              foo.append(fieldWrapper);
              fieldWrapper.append(first);
              fieldWrapper.append(select);
              fieldWrapper.append(text);
              fieldWrapper.append(hiddentext);
              fieldWrapper.append(second);
              fieldWrapper.append(third);
              fieldWrapper.append(fourth);

              $("#"+p).live("click", function(e) {

                     guidance.disabled=false;

                     /*var x = $(fieldWrapper).attr("id");
            shorttexttemp = x;

            alert(atemp);*/

                     $('#guidanceAdd').click(function(){


                           fieldWrapper.append(fifth);
                           fieldWrapper.append(fourth);

                     });

              });

       });

       $('#attachmentCreator').click(function() {

              var foo = $("#"+temp);
              var fieldWrapper = $("<p/>");
              var first = $("<span class=\"ui-icon ui-icon-arrowthick-2-n-s\">");
              var second = $("<b>Attachments: </b><input type=\"file\" name=\"datafile\" size=\"40\">");
              var third = $("<img src=Images/MainPage/TextAnswerField/delete_icon.png height=10px width=10px/><br/></span></p>");

              third.click(function() {
                     $(this).parent().remove();
              });

             foo.append(fieldWrapper);
              fieldWrapper.append(first);
              fieldWrapper.append(second);
              fieldWrapper.append(third);

       });

       $('#attachmentUser').click(function() {


              var foo = $("#"+temp);
              var fieldWrapper = $("<p/>");
              var first = $("<span class=\"ui-icon ui-icon-arrowthick-2-n-s\">");
              var second = $("<b>Attachments: </b><input type=\"file\" disabled=disabled name=\"datafile\" size=\"40\">");
              var third = $("<img src=Images/MainPage/TextAnswerField/delete_icon.png height=10px width=10px/><br/></span></p>");

              third.click(function() {
                     $(this).parent().remove();
              });

              foo.append(fieldWrapper);
              fieldWrapper.append(first);
              fieldWrapper.append(second);
              fieldWrapper.append(third);

       });

       $('#datepicker').click(function() {
              var foo = $("#"+temp);
              var fieldWrapper = $("<p/>");
              var first =$("<b>Answer: </b><input id=\"demo1\" type=\"text\" size=\"25\">");
              var second = $("<a href=\"javascript:NewCal('demo1','ddmmyyyy')\"><img src=\"Images/cal.gif\" width=\"16\" height=\"16\" border=\"0\" alt=\"Pick a date\"></a>");
              var third = $("<img src=Images/MainPage/TextAnswerField/delete_icon.png height=10px width=10px/>");
              third.click(function() {
                     $(this).parent().remove();
              });
              foo.append(fieldWrapper);
              fieldWrapper.append(first);
              fieldWrapper.append(second);
              fieldWrapper.append(third);


       });

       $('#dropdown').click(function() {
              intdropdown++;
              style="width:100px";
              type2="text";
              dropdownid= "dropdownid" + intdropdown;
              guidanceHeader="guidanceHeaderdropdown"+ intdropdown;
              p="pdropdown" + intdropdown;
              guidanceid="guidanceiddropdown" + intdropdown;

              var foo = $("#"+temp);
              var fieldWrapper = $("<p id='"+p+"'/>");
              var first =$("<span class=\"ui-icon ui-icon-arrowthick-2-n-s\">");
              var second = $("<img src=Images/MainPage/TextAnswerField/plus_icon.png height=15px width=15px/>");
              var select = $("<select style=width:100px id="+  dropdownid+"/>");
              var text=$("<input type=text/>");


              fieldWrapper.append(text);
              second.click(function() {
                     select.append('<option value=' + $(text).val()+'>'+ $(text).val() +'</option>');
                     $(text).attr("value", "");
              });
              var third = $("<img src=Images/MainPage/TextAnswerField/minus_icon.png height=15px width=15px/>");
              third.click(function() {
                     var x=$(select).attr("id");
                     var y =$(select).attr("value");
                     $("#" + x +" option[value='"+y+"']").remove();
              });
              var fourth = $("<img src=Images/MainPage/TextAnswerField/delete_icon.png height=10px width=10px/>");
              fourth.click(function() {
                     $(this).parent().remove();
              });

              var fifth = $("<img src=Images/MainPage/MenuIcon/GuidanceHeader.gif id='"+guidanceHeader +"'/>");
              fifth.click(function(){

                     $(function() {
                           // a workaround for a flaw in the demo system (http://dev.jqueryui.com/ticket/4375), ignore!
                           $("#dialog:ui-dialog").dialog("destroy");

                           var guidance = $("#" +guidanceid), allFields = $([]).add(guidance), tips = $(".validateTips");

                           function updateTips(t) {
                                  tips.text(t).addClass("ui-state-highlight");
                                  setTimeout(function() {
                                         tips.removeClass("ui-state-highlight", 1500);
                                  }, 500);
                           }

                           function checkLength(o, n, min, max) {
                                  if (o.val().length > max || o.val().length < min) {
                                         o.addClass("ui-state-error");
                                         updateTips("Length of " + n + " must be between " + min + " and " + max + ".");
                                         return false;
                                  } else {
                                         return true;
                                  }
                           }

                           function checkRegexp(o, regexp, n) {
                                  if (!(regexp.test(o.val()))) {
                                         o.addClass("ui-state-error");
                                         updateTips(n);
                                         return false;
                                  } else {
                                         return true;
                                  }
                           }

                           $("#dialog-form")
                           .dialog(
                                         {
                                                autoOpen : false,
                                                height : 300,
                                                width : 350,
                                                modal : true,
                                                buttons : {
                                                       "Save" : function() {

                                                              $(this).dialog("close");

                                                       },
                                                       Cancel : function() {
                                                              $(this).dialog("close");
                                                       }
                                                },
                                                close : function() {
                                                       allFields.val("").removeClass("ui-state-error");
                                                }
                                         });

                           $("#dialog-form").dialog("open");


                           document.getElementById('dialog-form').innerHTML="<form>"+
                           "<fieldset><label><b>Key the guidance here: <b/></label><br /><textarea name=\"guidanceid\" id="+guidanceid+" rows=\"10\" cols=\"50\"></textarea>" +
                           "</fieldset></form>";
                     });

              });

              foo.append(fieldWrapper);
              fieldWrapper.append(first);
              fieldWrapper.append(select);
              fieldWrapper.append(text);
              fieldWrapper.append(second);
              fieldWrapper.append(third);
              fieldWrapper.append(fourth);

              $("#"+p).live("click", function(e) {

                     guidance.disabled=false;

                     /*var x = $(fieldWrapper).attr("id");
            shorttexttemp = x;

            alert(atemp);*/

                     $('#guidanceAdd').click(function(){


                           fieldWrapper.append(fifth);
                           fieldWrapper.append(fourth);

                     });

              });

       });


});




