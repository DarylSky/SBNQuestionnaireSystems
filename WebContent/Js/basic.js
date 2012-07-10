
$(function() {
    $( "#datepicker" ).datepicker();
});


$(document).ready(function(){

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


    //Add_Var
    intaddquestion=0;
    intaddtext=0;
    intaddradio=0;
    intaddparagraph=0;
    intaddcheck=0;
    intaddtextunit=0;
    intadddatepicker=0;
    intadddropdown=0;

    //Global_Var
    temp="";
    ztemp="";
    atemp="";
    shorttexttemp="";
    plusbtn="";
    mainQuestionTesting="";
    // New global var
    mainRadioTesting="";




    //Create question button

    $("#preview").click(function() {

        ////////////////////////
        var order = new Array();
        strQuestions = $("#questionDiv").sortable('toArray');

        intQCount = 0;
        intQCountQuestion = 0;
        intQCountRadio = 1;
        questionnaire = new Object();
        questionArray = new Array();
        mainQuestionArray = new Array();
        mainRadioArray = new Array();

        // get the values of the radio buttons
        while($("#radiotextnumber"+intQCountRadio).val()!=null){
            var mainRadio =  $("#radiotextnumber"+intQCountRadio).val();
            var innermainRadio = $("#innerradiotextnumber"+intQCountRadio).val();
            mainRadioArray.push(mainRadio);
            mainRadioArray.push(innermainRadio);
            intQCountRadio++;
        }

        //get the values of the question itself
        while(intQCountQuestion < strQuestions.length){
            intQCountQuestion++;
            var mainQuestion = $("#mainQuestionid"+intQCountQuestion).val();
            mainQuestionArray.push(mainQuestion);

        }

        while(intQCount < strQuestions.length){
            var question = strQuestions[intQCount];
            var qNum = question.substring(8,9);
            order.push(qNum);

            questionObj = new Object();
            questionObj.questionID = qNum;
            questionObj.questionTitle = mainQuestionArray[intQCount];
            questionObj.mainElement = new Array();
            questionObj.addElement = new Array();
            questionObj.displayOrder = intQCount;



            mainElementArray = new Array();
            addElementArray = new Array();

            var mainElement = $("#" + "sortable"+qNum).sortable('toArray');
            var addElement = $("#" + "sortable2"+qNum).sortable('toArray');






            for(var i=0; i<mainElement.length; i++){
                elementObj = new Object();
                elementObj.type = mainElement[i];
                elementObj.value = "null";
                mainElementArray.push(elementObj);
            }
            for(var i=0; i<addElement.length; i++){
                elementObj = new Object();


                elementObj.value = "null";
                if(addElement[i].indexOf("pAddQuestion")!= -1){
                    var indexNum = addElement[i].substring(12,13);
                    alert(indexNum);
                    alert( $("#longtext"+ indexNum).val());
                    //elementObj.value = $("#longtext"+ indexNum).val();
                }

                elementObj.type = addElement[i];
                addElementArray.push(elementObj);
            }


            questionObj.mainElement = mainElementArray;
            questionObj.addElement = addElementArray;

            questionArray.push(questionObj);

            intQCount++;
        }

        questionnaire.questions = questionArray;
        questionnaire.id = 0;

        var myJSONText = JSON.stringify(questionnaire);
        //console.log(myJSONText);

/*        var mySplitResult = myJSONText.split("questionID");

        for(i = 0; i < mySplitResult.length; i++){
            document.write("<br /> Element " + i + " = " + mySplitResult[i]);
        }
*/
        ////////////////////////////////////////////////////////////////////
        var strElements = "";
        var str2Elements = "";
        intCount = 0;

        for(var k=0; k<order.length; k++){
            var count = order[k];
            strElements += $("#" + "sortable"+count).sortable('toArray')+"&";
            str2Elements += $("#" + "sortable2"+count).sortable('toArray')+"&";
        }

        $("#questionorder").val($("#questionDiv").sortable('toArray'));
        $("#main_order").val(strElements);
        $("#add_order").val(str2Elements);


        var request1  = new XMLHttpRequest();
        request1.open("POST", "QuestionnaireCreation", false);
        //Send the proper header information along with the request;
        var parameterString = "JSONText=test=" + myJSONText ;
        request1.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        request1.setRequestHeader("Content-length", parameterString.length);
        request1.setRequestHeader("Connection", "close");
        request1.send(parameterString);




    });

    $('#question').click(function(){

        intquestionPanel++;
        questionPanel ="questionPanel"+intquestionPanel;
        sortableDiv= "sortable"+intquestionPanel;
        sortableDiv2= "sortable2"+intquestionPanel;
        mainDiv= "Question"+intquestionPanel;
        plusBtn= "plusBtn"+intquestionPanel;
        flip= "flip" + intquestionPanel;
        mainQuestionid = "mainQuestionid" + intquestionPanel;


        var question = $('#questionDiv');
        var test = $("<div id='"+mainDiv+"' class=\"order\"></div>");
        var table= $("<table class=\"abc\" id='"+questionPanel+ "' border=\"0\"/>");
        //<tr><th width=\"965\"></th><th><button type=\"button\" href=\"#\" class=\"plusBtn\" id=\"PlusBtn\" value=\"-\">-</button></tr><tr width=\"965\" id=\"tableslide\"></tr></th></table>/

        var row = $("<tr/>");
        var header =$("<th width=960/>");
        var input = $("<p class=flip id= '"+flip+"'>Question "+intquestionPanel+"</p>");
        var header2 = $("<th>");
        var collapse = $("<img src=\"Images/MainPage/minimize.gif\" href=\"#\" class=\"plusBtn\" id='"+plusBtn+"' value=\"-\" /><img src=Images/MainPage/TextAnswerField/delete_icon.png height=15px width=15px class=\"remove\" id=\"remove\"/>");
        var element = $("<tr width=\"960\" id=\"tableslide\"/>");
        var tabledata = $("<td/>");
        //var form = $("<form method=\"get\" action=\"MainPageServlet\" target=\"_blank\"/>");
        var form = $("<div></div>");
        var div = $("<div class=\"demo\" id= '"+sortableDiv+"' />");
        var div2 = $("<div class=\"additional_info\" id= '"+sortableDiv2+"' />");
        var padditional = $("<p class=\"padditional\"><b>Additional Information: </b></p>");
        var mainQuestion = $("<b>Main Question: </b><input name="+ mainQuestionid +" type=text size=100 id="+ mainQuestionid+" />");
        var br = $("<br/>");
        //var button = $("<input type=submit value=Preview  class=\"preview\"></input>");
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
        header2.append(collapse);
        table.append(element);
        element.append(tabledata);
        tabledata.append(form);
        form.append(mainQuestion);
        form.append(div);
        form.append(padditional);
        form.append(div2);
        form.append(hidden1);
        form.append(hidden2);
        //form.append(button);
        test.append(br);

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
            datepicker.disabled=false;

        }

        //When question created track position

        $("#" + temp).sortable();


        $("#" + ztemp).sortable(); //end here

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
                datepicker.disabled=false;

            }

            //After clicking questional panel, track position

            $("#" + temp).sortable();


            $("#" + ztemp).sortable();

            //end here


        });

        $("#"+plusBtn).click(function(){
            $("#"+temp).slideToggle("slow");
            $("#"+ztemp).slideToggle("slow");
            $(padditional).slideToggle("slow");
        });

        $('.remove').click(function() {

            $("#" + atemp).remove();
            $(br).remove();

        });

        $('.flip').click(function() {
            $('.flip').removeClass('highlight');
            $(this).addClass('highlight').siblings().removeClass('highlight');

        });



    });


    //End here


//  Answer Field objects

    $('#text').click(function() {
        type="text";
        inttext++;
        imagetextnumber ="imagetextnumber"+inttext;
        textnumber="text" + inttext;
        guidanceHeader="guidanceHeadertext"+ inttext;
        p="pMainText" + inttext;
        guidanceid="guidanceidtext" + inttext;
        hiddentextnumber="hiddentextbox" + inttext;

        var foo = $("#"+temp);
        var fieldWrapper = $("<p id='"+p+"' class=\"object\"/>");
        var first =$("<span><b>Answer: </b><input name="+ textnumber +" size=\"70\" type=text style=\"background:grey\" disabled=disabled id='"+  textnumber+"'/>");
        var hidden = $("<input type=hidden name="+hiddentextnumber+">");
        var count = $("#" + temp).children(".object").length;
        if (count > 0){

            answerField.disabled=true;
            text.disabled=true;
            textunit.disabled=true;
            paragraph.disabled=true;
            checkbox.disabled=true;
            dropdown.disabled=true;
            radio.disabled=true;
            datepicker.disabled=true;

        }


        var second = $("<img src=Images/MainPage/TextAnswerField/delete_icon.png height=10px width=10px id='"+ imagetextnumber +"'/>");
        second.click(function() {
            $(this).parent().remove();

            answerField.disabled=false;
            text.disabled=false;
            textunit.disabled=false;
            paragraph.disabled=false;
            checkbox.disabled=false;
            dropdown.disabled=false;
            radio.disabled=false;
            datepicker.disabled=false;

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
        p="pMainRadio" + intradio;
        guidanceid="guidanceidradio" + intradio;


        var foo = $("#"+temp);
        var fieldWrapper = $("<p id='"+p+"' class=\"object\"/>");
        //var first =$("<span class=\"ui-icon ui-icon-arrowthick-2-n-s\"/>");
        var input = $(" <input name="+radiotextnumber+" type=text id="+radiotextnumber+" />");
        var radio =$("<b>Answer: </b><input type=radio id="+radiobuttonnumber+" value="+$(input).val()+"/>");
        var count = $("#" + temp).children(".object").length;
        if (count > 0){

            answerField.disabled=true;
            text.disabled=true;
            textunit.disabled=true;
            paragraph.disabled=true;
            checkbox.disabled=true;
            dropdown.disabled=true;
            radio.disabled=true;
            datepicker.disabled=true;

        }
        var second = $("<img src=Images/MainPage/TextAnswerField/delete_icon.png height=10px width=10px id="+ imageradionumber +"/>");
        second.click(function() {
            $(this).parent().remove();

            answerField.disabled=false;
            text.disabled=false;
            textunit.disabled=false;
            paragraph.disabled=false;
            checkbox.disabled=false;
            dropdown.disabled=false;
            radio.disabled=false;
            datepicker.disabled=false;

        });
        var third = $("<img src=Images/MainPage/TextAnswerField/plus_icon.png height=15px width=15px/>");
        third.click(function() {

            intradio++;
            innerradiotextnumber = "innerradiotextnumber" + intradio;

            fieldWrapper.append("<br/>");
            fieldWrapper.append("<input type=radio disabled=disabled id="+  innerradiotextnumber+"/> <input name="+innerradiotextnumber+" type=text id="+  innerradiotextnumber+"/>");




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

        var x = $(input).attr("id");
        mainRadioTesting = x;

        $("#"+p).live("click", function(e) {

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
        p="pMainParagragh" + intparagraph;
        guidanceid="guidanceidparagraph" + intparagraph;
        hiddenparagraphnumber = "hiddenparagraphnumber" + intparagraph;


        var foo = $("#"+temp);
        var fieldWrapper = $("<p id='"+p+"' class=\"object\"/>");
        var first =$("<span class=\"ui-icon ui-icon-arrowthick-2-n-s\"><b>Answer: </b><textarea rows=4 columns=20  style=\"background:grey\" disabled=disabled id="+  paragraphnumber+"/>");
        var hiddenparagraph = $("<input type=hidden name="+hiddenparagraphnumber+" value=paragraph>");
        var count = $("#" + temp).children(".object").length;
        if (count > 0){

            answerField.disabled=true;
            text.disabled=true;
            textunit.disabled=true;
            paragraph.disabled=true;
            checkbox.disabled=true;
            dropdown.disabled=true;
            radio.disabled=true;
            datepicker.disabled=true;

        }

        var second = $("<img src=Images/MainPage/TextAnswerField/delete_icon.png height=10px width=10px id="+ paragraphimagenumber +"/>");
        second.click(function() {
            $(this).parent().remove();

            answerField.disabled=false;
            text.disabled=false;
            textunit.disabled=false;
            paragraph.disabled=false;
            checkbox.disabled=false;
            dropdown.disabled=false;
            radio.disabled=false;
            datepicker.disabled=false;

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
        p="pMainCheck" + intcheck;
        guidanceid="guidanceidcheck" + intcheck;

        var foo = $("#"+temp);
        var fieldWrapper = $("<p id='"+p+"'  class=\"object\"/>");
        var input = $(" <input name="+checktextbox+ " type=text id="+checktextbox+" />");
        var first =$(" <b>Answer: </b><input type=checkbox  id="+  checkbuttonbox+" value="+$(input).val()+"/>");

        var count = $("#" + temp).children(".object").length;
        if (count > 0){

            answerField.disabled=true;
            text.disabled=true;
            textunit.disabled=true;
            paragraph.disabled=true;
            checkbox.disabled=true;
            dropdown.disabled=true;
            radio.disabled=true;
            datepicker.disabled=true;

        }

        var second = $("<img src=Images/MainPage/TextAnswerField/delete_icon.png height=10px width=10px id="+ imagecheckbox +"/>");
        second.click(function() {
            $(this).parent().remove();

            answerField.disabled=false;
            text.disabled=false;
            textunit.disabled=false;
            paragraph.disabled=false;
            checkbox.disabled=false;
            dropdown.disabled=false;
            radio.disabled=false;
            datepicker.disabled=false;

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
        p="pMainTextunit" + inttextunit;
        guidanceid="guidanceidtextunit" + inttextunit;
        hiddentextwithunit= "hiddentextwithunit"+inttextunit;


        var foo = $("#"+temp);
        var fieldWrapper = $("<p id='"+p+"'  class=\"object\"/>");
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
        var count = $("#" + temp).children(".object").length;
        if (count > 0){

            answerField.disabled=true;
            text.disabled=true;
            textunit.disabled=true;
            paragraph.disabled=true;
            checkbox.disabled=true;
            dropdown.disabled=true;
            radio.disabled=true;
            datepicker.disabled=true;

        }
        var fourth = $("<img src=Images/MainPage/TextAnswerField/delete_icon.png height=10px width=10px/>");
        fourth.click(function() {
            $(this).parent().remove();
            answerField.disabled=false;
            text.disabled=false;
            textunit.disabled=false;
            paragraph.disabled=false;
            checkbox.disabled=false;
            dropdown.disabled=false;
            radio.disabled=false;
            datepicker.disabled=false;

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

        intdatepicker++;

        p = "Datepicker" + intdatepicker;

        var foo = $("#"+temp);
        var fieldWrapper = $("<p id='"+p+"'  class=\"object\"/>");
        var first =$("<b>Answer: </b><input id=\"demo1\" type=\"text\" size=\"25\">");
        var second = $("<a href=\"javascript:NewCal('demo1','ddmmyyyy')\"><img src=\"Images/cal.gif\" width=\"16\" height=\"16\" border=\"0\" alt=\"Pick a date\"></a>");
        var count = $("#" + temp).children(".object").length;
        if (count > 0){

            answerField.disabled=true;
            text.disabled=true;
            textunit.disabled=true;
            paragraph.disabled=true;
            checkbox.disabled=true;
            dropdown.disabled=true;
            radio.disabled=true;
            datepicker.disabled=true;

        }
        var third = $("<img src=Images/MainPage/TextAnswerField/delete_icon.png height=10px width=10px/>");
        third.click(function() {
            $(this).parent().remove();

            answerField.disabled=false;
            text.disabled=false;
            textunit.disabled=false;
            paragraph.disabled=false;
            checkbox.disabled=false;
            dropdown.disabled=false;
            radio.disabled=false;
            datepicker.disabled=false;

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
        p="pMainDropdown" + intdropdown;
        guidanceid="guidanceiddropdown" + intdropdown;

        var foo = $("#"+temp);
        var fieldWrapper = $("<p id='"+p+"'  class=\"object\"/>");
        var first =$("<span class=\"ui-icon ui-icon-arrowthick-2-n-s\">");
        var second = $("<img src=Images/MainPage/TextAnswerField/plus_icon.png height=15px width=15px/>");
        var answer = $("<b>Answer: </b>");
        var select = $("<select style=width:100px id=\"ddlList\"/>");
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

        var count = $("#" + temp).children(".object").length;
        if (count > 0){

            answerField.disabled=true;
            text.disabled=true;
            textunit.disabled=true;
            paragraph.disabled=true;
            checkbox.disabled=true;
            dropdown.disabled=true;
            radio.disabled=true;
            datepicker.disabled=true;

        }

        var fourth = $("<img src=Images/MainPage/TextAnswerField/delete_icon.png height=10px width=10px/>");
        fourth.click(function() {
            $(this).parent().remove();

            answerField.disabled=false;
            text.disabled=false;
            textunit.disabled=false;
            paragraph.disabled=false;
            checkbox.disabled=false;
            dropdown.disabled=false;
            radio.disabled=false;
            datepicker.disabled=false;

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
        fieldWrapper.append(answer);
        fieldWrapper.append(select);
        fieldWrapper.append(text);
        fieldWrapper.append(second);
        fieldWrapper.append(third);
        fieldWrapper.append(fourth);

        $("#"+p).live("click", function(e) {

            /*var x = $(fieldWrapper).attr("id");
            shorttexttemp = x;

            alert(atemp);*/

            $('#guidanceAdd').click(function(){


                fieldWrapper.append(fifth);
                fieldWrapper.append(fourth);

            });

        });

    });


    //End here

    /*    Addtional_information objects*/

    $('#additional_Question').click(function() {
        type="text";
        intaddquestion++;
        longimagenumber ="longimagenumber"+intaddquestion;
        longbox="longtext" + intaddquestion;
        guidanceHeader="guidanceHeaderlongtext"+ intaddquestion;
        p="pAddQuestion" + intaddquestion;
        span="spanlongtext" + intaddquestion;
        guidanceid="guidanceidlongtext" + intaddquestion;

        var foo = $("#"+ztemp);
        var fieldWrapper = $("<p id='"+p+"' />");
        var first =$("<span id='"+span+"'/>");
        var question = $("<b>Additional Question: </b>");
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

            /*var x = $(fieldWrapper).attr("id");
            shorttexttemp = x;

            alert(atemp);*/

            $('#guidanceAdd').click(function(){


                fieldWrapper.append(third);
                fieldWrapper.append(second);

            });

        });


    });

    $('#additional_text').click(function() {
        type="text";
        intaddtext++;
        imagetextnumber ="additional_text_image"+intaddtext;
        textnumber="additional_text" + intaddtext;
        guidanceHeader="guidance_additional_text_image"+ intaddtext;
        p="pAddText" + intaddtext;
        guidanceid="guidance_additional_text_image" + intaddtext;
        hiddentextnumber="hidden_additional_text_image" + intaddtext;

        var foo = $("#"+ztemp);
        var fieldWrapper = $("<p id='"+p+"'/>");
        var first =$("<span><b>Answer: </b><input name="+ textnumber +" size=\"70\" type=text style=\"background:grey\" disabled=disabled id='"+  textnumber+"'/>");
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

            /*var x = $(fieldWrapper).attr("id");
            shorttexttemp = x;

            alert(atemp);*/

            $('#guidanceAdd').click(function(){


                fieldWrapper.append(third);
                fieldWrapper.append(second);

            });


        });


    });

    $('#additional_radio').click(function() {
        type="text";
        type2="radio";
        intaddradio++;
        imageradionumber ="additional_radio_image"+intaddradio;
        radiotextnumber="additional_radio_text_number" + intaddradio;
        radiobuttonnumber = "additional_radiobuttonnumber" +intaddradio;
        guidanceHeader="additional_radio_guidanceHeader"+ intaddradio;
        p="pAddRadio" + intaddradio;
        guidanceid="guidance_additional_radio" + intaddradio;


        var foo = $("#"+ztemp);
        var fieldWrapper = $("<p id='"+p+"'/>");
        //var first =$("<span class=\"ui-icon ui-icon-arrowthick-2-n-s\"/>");
        var input = $(" <input name="+radiotextnumber+" type=text id="+radiotextnumber+" />");
        var radio =$("<b>Answer: </b><input type=radio id="+radiobuttonnumber+" value="+$(input).val()+"/>");
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

            /*var x = $(fieldWrapper).attr("id");
            shorttexttemp = x;

            alert(atemp);*/

            $('#guidanceAdd').click(function(){


                fieldWrapper.append(fifth);
                fieldWrapper.append(second);

            });

        });

    });

    $('#additional_paragraph').click(function() {
        type="textarea";
        intaddparagraph++;
        paragraphnumber = "additional_paragraph_number" + intaddparagraph;
        paragraphimagenumber = "additional_paragraph_image_number" + intaddparagraph;
        guidanceHeader="additional_paragraph_guidance_header"+ intaddparagraph;
        p="pAddParagraph" + intaddparagraph;
        guidanceid="guidance_additional_paragraph" + intaddparagraph;
        hiddenparagraphnumber = "hidden_additional_paragraph" + intaddparagraph;


        var foo = $("#"+ztemp);
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

            /*var x = $(fieldWrapper).attr("id");
            shorttexttemp = x;

            alert(atemp);*/

            $('#guidanceAdd').click(function(){


                fieldWrapper.append(third);
                fieldWrapper.append(second);

            });

        });

    });

    $('#additional_checkbox').click(function() {
        type="text";
        type2="checkbox";
        intaddcheck++;
        imagecheckbox ="additional_checkbox_image"+intaddcheck;
        checktextbox="additional_checkbox_number" + intaddcheck;
        checkbuttonbox = "additional_checkbox_button" +intaddcheck;
        guidanceHeader="guidance_header_additional_checkbox"+ intaddcheck;
        p="pAddCheckbox" + intaddcheck;
        guidanceid="additional_checkbox_guidance_id" + intaddcheck;

        var foo = $("#"+ztemp);
        var fieldWrapper = $("<p id='"+p+"'/>");
        var input = $(" <input name="+checktextbox+ " type=text id="+checktextbox+" />");
        var first =$(" <b>Answer: </b><input type=checkbox  id="+  checkbuttonbox+" value="+$(input).val()+"/>");
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

            /*var x = $(fieldWrapper).attr("id");
            shorttexttemp = x;

            alert(atemp);*/

            $('#guidanceAdd').click(function(){


                fieldWrapper.append(fifth);
                fieldWrapper.append(second);

            });

        });

    });

    $('#additional_textunit').click(function() {
        type="width:100px";
        type2="text";
        intaddtextunit++;
        textwithunitdropdown="additional_textunitdropdown" + intaddtextunit;
        textwithunit= "additional_textunit"+intaddtextunit;
        guidanceHeader="guidance_header_additional_textunit"+ intaddtextunit;
        p="pAddTextunit" + intaddtextunit;
        guidanceid="guidance_id_additional_textunit" + intaddtextunit;
        hiddentextwithunit= "hidden_additional_textunit"+intaddtextunit;


        var foo = $("#"+ztemp);
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

            /*var x = $(fieldWrapper).attr("id");
            shorttexttemp = x;

            alert(atemp);*/

            $('#guidanceAdd').click(function(){


                fieldWrapper.append(fifth);
                fieldWrapper.append(fourth);

            });

        });

    });

    $('#additional_datepicker').click(function() {

        intadddatepicker++;
        p = "pAddDatepicker" + intadddatepicker;

        var foo = $("#"+ztemp);
        var fieldWrapper = $("<p id='"+p+"'/>");
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

    $('#additional_dropdown').click(function() {
        intadddropdown++;
        style="width:100px";
        type2="text";
        dropdownid= "additional_dropdown_id" + intadddropdown;
        guidanceHeader="guidance_header_additional_dropdown"+ intadddropdown;
        p="pAddDropdown" + intadddropdown;
        guidanceid="additional_dropdown_guidance_id" + intadddropdown;

        var foo = $("#"+ztemp);
        var fieldWrapper = $("<p id='"+p+"'/>");
        var first =$("<span class=\"ui-icon ui-icon-arrowthick-2-n-s\">");
        var second = $("<img src=Images/MainPage/TextAnswerField/plus_icon.png height=15px width=15px/>");
        var answer = $("<b>Answer: </b>");
        var select = $("<select style=width:100px id=\"ddlList\"/>");
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
        fieldWrapper.append(answer);
        fieldWrapper.append(select);
        fieldWrapper.append(text);
        fieldWrapper.append(second);
        fieldWrapper.append(third);
        fieldWrapper.append(fourth);

        $("#"+p).live("click", function(e) {

            /*var x = $(fieldWrapper).attr("id");
            shorttexttemp = x;

            alert(atemp);*/

            $('#guidanceAdd').click(function(){


                fieldWrapper.append(fifth);
                fieldWrapper.append(fourth);

            });

        });

    });


    //End here

});

