
$(function() {
    $( "#datepicker" ).datepicker();
});


$(document).ready(function(){

    intquestionPanel=0;
    intquestion=0;
    intadditional=0;
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
    ztemp="";
    atemp="";
    shorttexttemp="";
    plusbtn="";


    /*   questionObj =new Object();
    questionObj.element = new Array();
    questionObj.displayOrder = 0;

    elementArray = new Array();

    elementObj = new Object();
    elementObj.type = "Dropdown";
    elementObj.value = "123";

    elementArray.push(elementObj);

    elementObj = new Object();
    elementObj.type = "TextBox";
    elementObj.value = "asd";

    elementArray.push(elementObj);
    questionObj.element = elementArray;

    var myJSONText = JSON.stringify(questionObj);
    console.log(myJSONText);*/

    //Create question button

    $('#question').click(function(){

        intquestionPanel++;
        questionPanel ="questionPanel"+intquestionPanel;
        sortableDiv= "sortable"+intquestionPanel;
        sortableDiv2= "sortable2"+intquestionPanel;
        mainDiv= "Question"+intquestionPanel;
        plusBtn= "plusBtn"+intquestionPanel;
        flip= "flip" + intquestionPanel;
        mainQuestionid = "mainQuestionid" + intquestionPanel;

        var question = $('#question1');
        var test = $("<div id='"+mainDiv+"'></div>");
        var table= $("<table class=\"abc\" id='"+questionPanel+ "' border=\"0\"/>");
        //<tr><th width=\"965\"></th><th><button type=\"button\" href=\"#\" class=\"plusBtn\" id=\"PlusBtn\" value=\"-\">-</button></tr><tr width=\"965\" id=\"tableslide\"></tr></th></table>/

        var row = $("<tr/>");
        var header =$("<th width=960/>");
        var input = $("<p class=flip id= '"+flip+"'>Question "+intquestionPanel+"</p>");
        var header2 = $("<th>");
        var collapse = $("<img src=\"Images/MainPage/minimize.gif\" href=\"#\" class=\"plusBtn\" id='"+plusBtn+"' value=\"-\" /><img src=Images/MainPage/TextAnswerField/delete_icon.png height=15px width=15px class=\"remove\" id=\"remove\"/>");
        var element = $("<tr width=\"960\" id=\"tableslide\"/>");
        var tabledata = $("<td/>");
        var form = $("<form method=\"get\" action=\"MainPageServlet\" target=\"_blank\"/>");
        var div = $("<div class=\"demo\" id= '"+sortableDiv+"' />");
        var div2 = $("<div class=\"additional_info\" id= '"+sortableDiv2+"' />");
        var padditional = $("<p class=\"padditional\"><b>Additional Information: </b></p>");
        var mainQuestion = $("<b>Main Question: </b><input name="+ mainQuestionid +" type=text size=100 id="+ mainQuestionid+"/>");
        var br = $("<br/>");
        var button = $("<input type=submit value=Preview  class=\"preview\"></input>");
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
        form.append(div2);
        div2.append(padditional);
        form.append(hidden1);
        form.append(hidden2);
        form.append(button);
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

        $("#" + temp).sortable({
            stop: function(event, ui) {
            },

            update: function(event, ui) {
                var componentOrder1 = $(this).sortable('toArray').toString();

                alert(componentOrder1);


            }
        });


        $("#" + ztemp).sortable({
            stop: function(event, ui) {

            },

            update: function(event, ui) {
                var componentOrder2 = $(this).sortable('toArray').toString();

                alert(componentOrder2);


            }
        }); //end here

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

            $("#" + temp).sortable({
                stop: function(event, ui) {
                },

                update: function(event, ui) {
                    var componentOrder1 = $(this).sortable('toArray').toString();

                    alert(componentOrder1);


                }
            });


            $("#" + ztemp).sortable({
                stop: function(event, ui) {

                },

                update: function(event, ui) {
                    var componentOrder2 = $(this).sortable('toArray').toString();

                    alert(componentOrder2);


                }
            });

           //end here


        });




        $("#"+plusBtn).click(function(){
            $("#"+temp).slideToggle("slow");
            $("#"+ztemp).slideToggle("slow");
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
        p="ptext" + inttext;
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
        p="pradio" + intradio;
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
        p="pcheck" + intcheck;
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
        p="ptextunit" + inttextunit;
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
        var foo = $("#"+temp);
        var fieldWrapper = $("<p  class=\"object\"/>");
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
        p="pdropdown" + intdropdown;
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
        intlong++;
        longimagenumber ="longimagenumber"+intlong;
        longbox="longtext" + intlong;
        guidanceHeader="guidanceHeaderlongtext"+ intlong;
        p="padditonalquestion" + intlong;
        span="spanlongtext" + intlong;
        guidanceid="guidanceidlongtext" + intlong;

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
        inttext++;
        imagetextnumber ="additional_text_image"+inttext;
        textnumber="additional_text" + inttext;
        guidanceHeader="guidance_additional_text_image"+ inttext;
        p="padditionaltext" + inttext;
        guidanceid="guidance_additional_text_image" + inttext;
        hiddentextnumber="hidden_additional_text_image" + inttext;

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
        intradio++;
        imageradionumber ="additional_radio_image"+intradio;
        radiotextnumber="additional_radio_text_number" + intradio;
        radiobuttonnumber = "additional_radiobuttonnumber" +intradio;
        guidanceHeader="additional_radio_guidanceHeader"+ intradio;
        p="padditional_radio" + intradio;
        guidanceid="guidance_additional_radio" + intradio;


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
        intparagraph++;
        paragraphnumber = "additional_paragraph_number" + intparagraph;
        paragraphimagenumber = "additional_paragraph_image_number" + intparagraph;
        guidanceHeader="additional_paragraph_guidance_header"+ intparagraph;
        p="p_additional_paragraph" + intparagraph;
        guidanceid="guidance_additional_paragraph" + intparagraph;
        hiddenparagraphnumber = "hidden_additional_paragraph" + intparagraph;


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
        intcheck++;
        imagecheckbox ="additional_checkbox_image"+intcheck;
        checktextbox="additional_checkbox_number" + intcheck;
        checkbuttonbox = "additional_checkbox_button" +intcheck;
        guidanceHeader="guidance_header_additional_checkbox"+ intcheck;
        p="padditional_checkbox" + intcheck;
        guidanceid="additional_checkbox_guidance_id" + intcheck;

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
        inttextunit++;
        textwithunitdropdown="additional_textunitdropdown" + inttextunit;
        textwithunit= "additional_textunit"+inttextunit;
        guidanceHeader="guidance_header_additional_textunit"+ inttextunit;
        p="padditional_textunit" + inttextunit;
        guidanceid="guidance_id_additional_textunit" + inttextunit;
        hiddentextwithunit= "hidden_additional_textunit"+inttextunit;


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
        var foo = $("#"+ztemp);
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

    $('#additional_dropdown').click(function() {
        intdropdown++;
        style="width:100px";
        type2="text";
        dropdownid= "additional_dropdown_id" + intdropdown;
        guidanceHeader="guidance_header_additional_dropdown"+ intdropdown;
        p="padditional_dropdown" + intdropdown;
        guidanceid="additional_dropdown_guidance_id" + intdropdown;

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
