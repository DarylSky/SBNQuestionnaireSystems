$(document).ready(function(){

    //Create a additional question field
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
        var question = $("<b style=\"padding-right:10px; \">Additional Question: </b>");
        var longtext = $("<input name="+ longbox +" type=text size=100 id="+ longbox+" x-webkit-speech />");
        var second = $("<img src=Images/MainPage/TextAnswerField/delete_icon.png height=10px width=10px id="+longimagenumber +"/>");
        second.click(function() {
            $(this).parent().remove();
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
        first.append(question);
        first.append(longtext);
        fieldWrapper.append(second);

        $("#"+p).live("click", function(e) {

            $('#guidanceAdd').click(function(){

                fieldWrapper.append(third);
                fieldWrapper.append(second);

            });

        });


    });

    //Create additional text field
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
        var first =$("<span><b style=\"padding-right: 74px; \">Answer: </b><input name="+ textnumber +" size=\"70\" type=text style=\"background:grey\" disabled=disabled id='"+  textnumber+"'/>");
        var hidden = $("<input type=hidden name="+hiddentextnumber+">");
        var second = $("<img src=Images/MainPage/TextAnswerField/delete_icon.png height=10px width=10px id='"+ imagetextnumber +"'/>");
        second.click(function() {
            $(this).parent().remove();
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

    //Create a additional radio
    $('#additional_radio').click(function() {
        type="text";
        type2="radio";
        intaddradio++;
        var intRadioCurrent = intaddradio;
        var intRadioSibling = 1;
        imageradionumber ="additional_radio_image"+intaddradio;
        radiotextnumber="additional_radio_text_number" + intaddradio;
        radiobuttonnumber = "additional_radiobuttonnumber" +intaddradio;
        guidanceHeader="additional_radio_guidanceHeader"+ intaddradio;
        p="pAddRadio" + intaddradio;
        guidanceid="guidance_additional_radio" + intaddradio;


        var foo = $("#"+ztemp);
        var fieldWrapper = $("<p id='"+p+"'/>");
        var input = $(" <input name="+radiotextnumber+" type=text id="+radiotextnumber+" size=\"60\" x-webkit-speech />");
        var radio =$("<b style=\"padding-right: 74px; \">Answer: </b><input type=radio disabled=disabled id="+radiobuttonnumber+" value="+$(input).val()+"/>");

        var second = $("<img src=Images/MainPage/TextAnswerField/delete_icon.png height=10px width=10px id="+ imageradionumber +"/>");
        second.click(function() {
            $(this).parent().remove();
        });

        var third = $("<img src=Images/MainPage/TextAnswerField/plus_icon.png height=15px width=15px/>");
        third.click(function() {

            innerradiotextnumber = "additional_radio_text_number" +intRadioCurrent + "-"+ intRadioSibling;
            intRadioSibling ++;
            fieldWrapper.append("<br/>");
            fieldWrapper.append("<span style=\"padding-left: 121px;\"><span/><input type=radio disabled=disabled id="+  innerradiotextnumber+"/> <input x-webkit-speech name="+innerradiotextnumber+" type=text id="+  innerradiotextnumber+"  size=\"60\" />");


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

            $('#guidanceAdd').click(function(){

                fieldWrapper.append(fifth);
                fieldWrapper.append(second);

            });

        });

    });

    //Create a additional paragraph
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
        var first =$("<span><b style=\"padding-right: 74px; \">Answer: </b><textarea rows=4 columns=20  style=\"background:grey\" disabled=disabled id="+  paragraphnumber+"/>");
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

    //Create a additonal checkbox
    $('#additional_checkbox').click(function() {
        type="text";
        type2="checkbox";
        intaddcheck++;
        var intCheckCount = intaddcheck;
        var intCountSibling = 1;
        imagecheckbox ="additional_checkbox_image"+intaddcheck;
        checktextbox="additional_checkbox_number" + intaddcheck;
        checkbuttonbox = "additional_checkbox_button" +intaddcheck;
        guidanceHeader="guidance_header_additional_checkbox"+ intaddcheck;
        p="pAddCheckbox" + intaddcheck;
        guidanceid="additional_checkbox_guidance_id" + intaddcheck;

        var foo = $("#"+ztemp);
        var fieldWrapper = $("<p id='"+p+"'/>");
        var input = $(" <input name="+checktextbox+ " type=text id="+checktextbox+" size=\"60\" x-webkit-speech />");
        var first =$(" <b style=\"padding-right: 74px; \">Answer: </b><input type=checkbox disabled=disabled  id="+  checkbuttonbox+" value="+$(input).val()+"/>");
        var second = $("<img src=Images/MainPage/TextAnswerField/delete_icon.png height=10px width=10px id="+ imagecheckbox +"/>");

        second.click(function() {
            $(this).parent().remove();
        });
        var third = $("<img src=Images/MainPage/TextAnswerField/plus_icon.png height=15px width=15px />");
        third.click(function() {

            innerchecktextnumber = "additional_checkbox_number" +intCheckCount + "-"+ intCountSibling;
            intCountSibling ++;

            fieldWrapper.append("<br/>");
            fieldWrapper.append("<span style=\"padding-left: 121px;\"><span/><input type=checkbox disabled=disabled id="+  innerchecktextnumber+"/> <input input x-webkit-speech name="+innerchecktextnumber+" type=text id="+  innerchecktextnumber+" size=\"60\" />");

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

    //Create a additional text with unit
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
        var first =$("<span><b style=\"padding-right: 74px; \">Answer: </b><input name="+ textwithunit+" type=text disabled=disabled style=\"background:grey\" id=" + textwithunit+">");
        var second = $("<img src=Images/MainPage/TextAnswerField/plus_icon.png height=15px width=15px/>");
        var select = $("<select style=width:100px id="+  textwithunitdropdown+"/>");
        var text=$("<input type=text id=aTextunit x-webkit-speech/>");
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
        var fourth = $("<img src=Images/MainPage/TextAnswerField/delete_icon.png height=10px width=10px/>");
        fourth.click(function() {
            $(this).parent().remove();
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

    //Create a additional dropdownlist
    $('#additional_dropdown').click(function() {
        intadddropdown++;
        style="width:100px";
        type2="text";
        dropdownid= "additional_dropdown_id" + intadddropdown;
        guidanceHeader="guidance_header_additional_dropdown"+ intadddropdown;
        p="pAddDropdown" + intadddropdown;
        guidanceid="additional_dropdown_guidance_id" + intadddropdown;
        ddlList = "ddlList" + intadddropdown;

        var foo = $("#"+ztemp);
        var fieldWrapper = $("<p id='"+p+"'/>");
        var first =$("<span class=\"ui-icon ui-icon-arrowthick-2-n-s\">");
        var second = $("<img src=Images/MainPage/TextAnswerField/plus_icon.png height=15px width=15px/>");
        var answer = $("<b style=\"padding-right: 74px; \">Answer: </b>");
        var select = $("<select style=width:100px id= '"+ddlList+"' />");
        var text=$("<input type=text x-webkit-speech/>");


        fieldWrapper.append(text);
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
        var fourth = $("<img src=Images/MainPage/TextAnswerField/delete_icon.png height=10px width=10px/>");
        fourth.click(function() {
            $(this).parent().remove();
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