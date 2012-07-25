$(document).ready(function(){

    //Getting of Title & Category
    var newURL = window.location.search.split( '=' );
    var url1=newURL[1];
    var titleArray= url1.split('&');
    var title= titleArray[0];
    var url2=newURL[2];
    mainTitle = title;
    mainCategory = url2;

    //Main_Var
    intquestionPanel=0;
    intquestion=0;
    inttext=0;
    intradio=0;
    intparagraph=0;
    intcheck=0;
    intdropdown=0;
    inttextunit=0;
    intdatepicker=0;


    //Additional_Var
    intaddquestion=0;
    intaddtext=0;
    intaddradio=0;
    intaddparagraph=0;
    intaddcheck=0;
    intaddtextunit=0;
    intadddatepicker=0;
    intadddropdown=0;
    totalQuestions = 0;


    //Global_Var for passing IDs
    temp="";
    ztemp="";
    atemp="";
    shorttexttemp="";
    plusbtn="";
    mainQuestionTesting="";
    mainRadioTesting="";

    //Creating of the question Panel
    $('#question').click(function(){

         totalQuestions++;
         intquestionPanel++;
         questionPanel ="questionPanel"+intquestionPanel;
         sortableDiv= "sortable"+intquestionPanel;
         sortableDiv2= "sortable2"+intquestionPanel;
         mainDiv= "Question"+intquestionPanel;
         plusBtn= "plusBtn"+intquestionPanel;
         flip= "flip" + intquestionPanel;
         mainQuestionid = "mainQuestionid" + intquestionPanel;


         var question = $('#questionDiv');
         var mainInformation  = $("<p class=\"maininformation\"><b>Main Information: </b></p>");
         var test = $("<div id='"+mainDiv+"' class=\"order\"></div>");
         var table= $("<table class=\"abc\" id='"+questionPanel+ "' border=\"0\"/>");
         var row = $("<tr/>");
         var header =$("<th width=960/>");
         var input = $("<p class=flip id= '"+flip+"'>Question "+totalQuestions+"</p>");
         var header2 = $("<th>");
         var collapse1 = $("<img src=\"Images/MainPage/minimize.gif\" href=\"#\" class=\"plusBtn\" id='"+plusBtn+"' />");
         var collapse2 = $("<img src=Images/MainPage/TextAnswerField/delete_icon.png height=15px width=15px class=\"remove\" id=\"remove\"/>");

         var element = $("<tr width=\"960\" id=\"tableslide\"/>");
         var tabledata = $("<td/>");
         var form = $("<div></div>");
         var div = $("<div class=\"demo\" id= '"+sortableDiv+"' />");
         var div2 = $("<div class=\"additional_info\" id= '"+sortableDiv2+"' />");
         var padditional = $("<p class=\"padditional\"><b>Additional Information: </b></p>");
         var mainQuestion = $("<b style=\"padding-right: 39px;\">Main Question: </b><input name="+ mainQuestionid +" type=text size=100 id="+ mainQuestionid+" x-webkit-speech />");
         var br = $("<br/>");
         var newURL = window.location.search.split( '=' );
         var url1=newURL[1];
         var titleArray= url1.split('&');
         var title= titleArray[0];
         var url2=newURL[2];
         var hidden1 = $("<input type=hidden name=title value="+title+" />");
         var hidden2 = $("<input type=hidden name=category value="+url2+" />");

         question.append(test);
         test.append(table);
         table.append(row);
         row.append(header);
         header.append(input);
         row.append(header2);
         header2.append(collapse1);
         header2.append(collapse2);
         table.append(element);
         element.append(tabledata);
         tabledata.append(form);
         form.append(mainInformation);
         form.append(mainQuestion);
         form.append(div);
         form.append(div2);
         div2.append(padditional);
         form.append(hidden1);
         form.append(hidden2);
         test.append(br);

         document.getElementById(mainDiv).scrollIntoView();

         $('.flip').removeClass('highlight');
         $("#" + flip).addClass('highlight');

         $('.question_description').remove();

         var x = $(div).attr("id");
         temp = x;

         var y = $(table).attr("id");
         atemp = y;

         var z = $(div2).attr("id");
         ztemp = z;

         var a = $(mainQuestion).attr("id");
         mainQuestionTesting = a;

         var count = $("#" + temp).children(".object").length;
         if (count < 2){

             answerField.disabled=false;
             text.disabled=false;
             textunit.disabled=false;
             paragraph.disabled=false;
             checkbox.disabled=false;
             dropdown.disabled=false;
             radio.disabled=false;

         }

         //When question created, track position

         $("#" + temp).sortable();

         $("#" + ztemp).sortable();

         //end here

         //Tracking of the position of the question panel
         $("#"+questionPanel).click(function() {

             var x = $(div).attr("id");
             temp = x;
             var y = $(table).attr("id");
             atemp = y;

             var z = $(div2).attr("id");
             ztemp = z;

             var count = $("#" + temp).children(".object").length;
             if (count < 2){

                 answerField.disabled=false;
                 text.disabled=false;
                 textunit.disabled=false;
                 paragraph.disabled=false;
                 checkbox.disabled=false;
                 dropdown.disabled=false;
                 radio.disabled=false;

             }

             //After clicking questional panel, track position

             $("#" + temp).sortable();


             $("#" + ztemp).sortable();

             //end here


         });

         //Minimizing button function
         $("#"+plusBtn).click(function(){

             var x = $(div).attr("id");
             temp = x;

             var z = $(div2).attr("id");
             ztemp = z;

             $("#"+temp).slideToggle("slow");
             $("#"+ztemp).slideToggle("slow");
         });

         //Remove questionPanel function
         collapse2.click(function(){
               removeQuestion(collapse2);
         });

         var removeQuestion = function(removeButton){
               removeButton.parent().parent().parent().parent().parent().remove();
             totalQuestions--;
             $(br).remove();

             var count =0;
             var questionDiv = $("#questionDiv");
             while (questionDiv.children().eq(count).attr('id')!= "" && questionDiv.children().eq(count).attr('id')!= null){
               //alert(questionDiv.children().eq(count).attr('id'));
               var questionID = questionDiv.children().eq(count).attr('id');
               var flipNumber = questionID.substring(8);
               var questionName = "Question " + (count +1);
               $('#flip'+flipNumber).html(questionName);
               count++;
             }
         };

         //Highlighting the active question Panel
         $('.flip').click(function() {
             $('.flip').removeClass('highlight');
             $(this).addClass('highlight').siblings().removeClass('highlight');

         });



     });

});