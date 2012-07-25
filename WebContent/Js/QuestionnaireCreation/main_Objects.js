$(document).ready(function(){

    //  Create a text field
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
        var first =$("<span><b style=\"padding-right:74px; \">Answer: </b><input name="+ textnumber +" size=\"70\" type=text style=\"background:grey\" disabled=disabled id='"+  textnumber+"'/>");
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

        });

        var third = $("<img src=Images/MainPage/MenuIcon/GuidanceHeader.gif id='"+guidanceHeader +"'/>");
        third.click(function(){

            $(function() {

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

            $('#guidanceAdd').click(function(){

                fieldWrapper.append(third);
                fieldWrapper.append(second);

            });

        });

    });

    //  Create a radio button
    $('#radio').click(function() {
        type="text";
        type2="radio";
        intradio++;
        var intRadioCurrent = intradio;
        var intRadioSibling = 1;
        imageradionumber ="imageradionumber"+intradio;
        radiotextnumber="radiotextnumber" + intradio;
        radiobuttonnumber = "radiobuttonnumber" +intradio;
        guidanceHeader="guidanceHeaderradio"+ intradio;
        p="pMainRadio" + intradio;
        guidanceid="guidanceidradio" + intradio;


        var foo = $("#"+temp);
        var fieldWrapper = $("<p id='"+p+"' class=\"object\"/>");
        var input = $(" <input name="+radiotextnumber+" type=text id="+radiotextnumber+" size=\"60\" x-webkit-speech />");
        var radio =$("<b style=\"padding-right:74px; \">Answer: </b><input type=radio disabled=disabled id="+radiobuttonnumber+" value="+$(input).val()+" />");
        var count = $("#" + temp).children(".object").length;
        if (count > 0){

            answerField.disabled=true;
            text.disabled=true;
            textunit.disabled=true;
            paragraph.disabled=true;
            checkbox.disabled=true;
            dropdown.disabled=true;
            radio.disabled=true;

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

        });
        var third = $("<img src=Images/MainPage/TextAnswerField/plus_icon.png height=15px width=15px/>");
        third.click(function() {
            innerradiotextnumber = "radiotextnumber" +intRadioCurrent + "-"+ intRadioSibling;
            intRadioSibling ++;
            fieldWrapper.append("<br/>");
            fieldWrapper.append("<span style=\"padding-left: 121px;\"><span/><input type=radio disabled=disabled id="+  innerradiotextnumber+"/> <input name="+innerradiotextnumber+" size=\"60\" type=text x-webkit-speech id="+  innerradiotextnumber+" />");


        });

        var fourth = $("<img src=Images/MainPage/TextAnswerField/minus_icon.png height=15px width=15px/>");
        fourth.click(function(e) {

            $(second).next('br').remove('br');
            $(second).next('span').remove('span');
            $(second).next('img').remove('img');
            $(second).next('input').remove('input');
            $(second).next('input').remove('input');

        });

        var fifth = $("<img src=Images/MainPage/MenuIcon/GuidanceHeader.gif id='"+guidanceHeader +"'/>");
        fifth.click(function(){

            $(function() {

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

            $('#guidanceAdd').click(function(){

                fieldWrapper.append(fifth);
                fieldWrapper.append(second);

            });

        });

    });

    //Create a paragraph text
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
        var first =$("<span><b style=\"padding-right: 74px;\">Answer: </b><textarea rows=4 columns=100  style=\"background:grey\" disabled=disabled id="+  paragraphnumber+"/>");
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

            $('#guidanceAdd').click(function(){

                fieldWrapper.append(third);
                fieldWrapper.append(second);

            });

        });

    });

    //Create a checkbox
    $('#checkbox').click(function() {
        type="text";
        type2="checkbox";
        intcheck++;
        var intCheckCount = intcheck;
        var intCountSibling = 1;
        imagecheckbox ="imagechecknumber"+intcheck;
        checktextbox="checktextnumber" + intcheck;
        checkbuttonbox = "checkbuttonnumber" +intcheck;
        guidanceHeader="guidanceHeadercheckbox"+ intcheck;
        p="pMainCheck" + intcheck;
        guidanceid="guidanceidcheck" + intcheck;

        var foo = $("#"+temp);
        var fieldWrapper = $("<p id='"+p+"'  class=\"object\"/>");
        var input = $(" <input name="+checktextbox+ " type=text id="+checktextbox+" size=\"60\" x-webkit-speech />");
        var first =$(" <b style=\"padding-right:74px; \">Answer: </b><input type=checkbox disabled=disabled id="+  checkbuttonbox+" value="+$(input).val()+"/>");

        var count = $("#" + temp).children(".object").length;
        if (count > 0){

            answerField.disabled=true;
            text.disabled=true;
            textunit.disabled=true;
            paragraph.disabled=true;
            checkbox.disabled=true;
            dropdown.disabled=true;
            radio.disabled=true;

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

        });
        var third = $("<img src=Images/MainPage/TextAnswerField/plus_icon.png height=15px width=15px />");
        third.click(function() {

            innerchecktextnumber = "checktextnumber" +intCheckCount + "-"+ intCountSibling;
            intCountSibling ++;

            fieldWrapper.append("<br/>");
            fieldWrapper.append("<span style=\"padding-left: 121px;\"><span/><input type=checkbox disabled=disabled id="+  innerchecktextnumber+"/> <input input name="+innerchecktextnumber+" size=\"60\" type=text x-webkit-speech id="+  innerchecktextnumber+" />");


        });

        var fourth = $("<img src=Images/MainPage/TextAnswerField/minus_icon.png height=15px width=15px/>");
        fourth.click(function(e) {

            $(second).next('br').remove('br');
            $(second).next('span').remove('span');
            $(second).next('input').remove('input');
            $(second).next('input').remove('input');

        });

        var fifth = $("<img src=Images/MainPage/MenuIcon/GuidanceHeader.gif id='"+guidanceHeader +"'/>");
        fifth.click(function(){

            $(function() {

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

            $('#guidanceAdd').click(function(){

                fieldWrapper.append(fifth);
                fieldWrapper.append(second);

            });

        });

    });

    //Create a text with unit
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
        var first =$("<span><b style=\"padding-right:74px; \">Answer: </b><input name="+ textwithunit+" type=text disabled=disabled style=\"background:grey\" id=" + textwithunit+">");
        var second = $("<img src=Images/MainPage/TextAnswerField/plus_icon.png height=15px width=15px/>");
        var select = $("<select style=width:100px id="+  textwithunitdropdown+"/>");
        var text=$("<input type=text id=textunit  x-webkit-speech/>");
        var hiddentext = $("<input type=hidden name="+hiddentextwithunit+" value=textunit>");
        $(text).autocomplete({
            source: ["mm", "cm", "m", "km", "mg", "g", "kg", "Metric Ton",
                     "Degree Celsius", "Square Meter", "Hectare", "Degree", "ml", "Cubic Centimeter", "L", "m/s",
                     "km/h","Newton","Watt","KiloWatt","Ampere"]
        });
        second.click(function() {
            textValue = $(text).val().replace(/\s/g, '&nbsp;');
            select.append('<option value=' + textValue+'>'+ $(text).val() +'</option>');
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

        });

        var fifth = $("<img src=Images/MainPage/MenuIcon/GuidanceHeader.gif id='"+guidanceHeader +"'/>");
        fifth.click(function(){

            $(function() {

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

            $('#guidanceAdd').click(function(){


                fieldWrapper.append(fifth);
                fieldWrapper.append(fourth);

            });

        });

    });

    //Create attachment for the creator of the questionnaire
    $('#attachmentCreator').click(function() {

        var foo = $("#"+temp);
        var fieldWrapper = $("<p/>");
        var first = $("<span class=\"ui-icon ui-icon-arrowthick-2-n-s\">");
        var second = $("<b style=\"padding-right:74px; \">Attachments: </b><input type=\"file\" name=\"datafile\" size=\"40\">");
        var third = $("<img src=Images/MainPage/TextAnswerField/delete_icon.png height=10px width=10px/><br/></span></p>");

        third.click(function() {
            $(this).parent().remove();
        });

        foo.append(fieldWrapper);
        fieldWrapper.append(first);
        fieldWrapper.append(second);
        fieldWrapper.append(third);

    });

    //Create attachment for the user that is answering the questions
    $('#attachmentUser').click(function() {


        var foo = $("#"+temp);
        var fieldWrapper = $("<p/>");
        var first = $("<span class=\"ui-icon ui-icon-arrowthick-2-n-s\">");
        var second = $("<b style=\"padding-right:74px; \">Attachments: </b><input type=\"file\" disabled=disabled name=\"datafile\" size=\"40\">");
        var third = $("<img src=Images/MainPage/TextAnswerField/delete_icon.png height=10px width=10px/><br/></span></p>");

        third.click(function() {
            $(this).parent().remove();
        });

        foo.append(fieldWrapper);
        fieldWrapper.append(span);
        fieldWrapper.append(first);
        fieldWrapper.append(second);
        fieldWrapper.append(third);

    });

    //Create a dropdownlist
    $('#dropdown').click(function() {
        intdropdown++;
        style="width:100px";
        type2="text";
        dropdownid= "dropdownid" + intdropdown;
        guidanceHeader="guidanceHeaderdropdown"+ intdropdown;
        p="pMainDropdown" + intdropdown;
        guidanceid="guidanceiddropdown" + intdropdown;
        ddlList = "ddlList" + intdropdown;

        var foo = $("#"+temp);
        var fieldWrapper = $("<p id='"+p+"'  class=\"object\"/>");
        var first =$("<span class=\"ui-icon ui-icon-arrowthick-2-n-s\">");
        var answer = $("<b style=\"padding-right:74px; \">Answer: </b>");
        var select = $("<select style=width:100px id= '"+ddlList+"' />");
        var text=$("<input type=text  x-webkit-speech/>");


        fieldWrapper.append(text);
        var second = $("<img src=Images/MainPage/TextAnswerField/plus_icon.png height=15px width=15px/>");
        second.click(function() {
            textValue = $(text).val().replace(/\s/g, '&nbsp;');
            select.append('<option value=' + textValue+'>'+ $(text).val() +'</option>');
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

        });

        var fifth = $("<img src=Images/MainPage/MenuIcon/GuidanceHeader.gif id='"+guidanceHeader +"'/>");
        fifth.click(function(){

            $(function() {

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

            $('#guidanceAdd').click(function(){


                fieldWrapper.append(fifth);
                fieldWrapper.append(fourth);

            });

        });

    });

});