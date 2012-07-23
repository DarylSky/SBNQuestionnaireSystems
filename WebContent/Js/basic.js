
//Proof of concept only///

/*window.history.forward(1);
document.attachEvent("onkeydown", my_onkeydown_handler);
function my_onkeydown_handler()
{
    switch (event.keyCode)
    {

    case 116 : // 'F5'
        event.returnValue = false;
        event.keyCode = 0;
        window.status = "We have disabled F5";
        break;
    }
}*/


function dialog_box()
{
    var r=confirm("Changes will not be saved, are you sure?");
    if (r==true)
    {

        window.location.href('HomePage.jsp');

    }
    else
    {

    }
}

$(document).ready(function() {

    $(".menuAcdn").click(function(event) {
        event.preventDefault();
    });

    $(function() {

        $("#questionDiv").sortable({
            stop: function(event, question) {
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
            }


        });

    });
/*

    $(function() {
        $("#datepicker").datepicker();
    });
*/
    // hide #back-top first
    $("#back-top").hide();

    // fade in #back-top
    $(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('#back-top').fadeIn();
            } else {
                $('#back-top').fadeOut();
            }
        });

        // scroll body to 0px on click
        $('#back-top a').click(function() {
            $('body,html').animate({
                scrollTop : 0
            }, 800);
            return false;
        });
    });

});

$(document).ready(function(){

    //getting the title and category
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
    totalQuestions = 0;


    //Create  button
    $("#preview").click(function() {

        ////////////////////////
        var order = new Array();
        strQuestions = $("#questionDiv").sortable('toArray');

        var intQCount = 0;
        //var intQCountQuestion = 0;
        questionnaire = new Object();
        questionArray = new Array();
        mainQuestionArray = new Array();
        mainRadioArray = new Array();


        //get the values of the question itself
/*        while(intQCountQuestion < strQuestions.length){
            intQCountQuestion++;
            var mainQuestion = $("#mainQuestionid"+intQCountQuestion).val();
            if(mainQuestion !=null){
                mainQuestion = mainQuestion.replace(/\s/g, '&nbsp;');
            }
            mainQuestionArray.push(mainQuestion);

        }*/

        //Looping through each Question
        while(intQCount < strQuestions.length){
            var question = strQuestions[intQCount];
            //alert(question);
            var qNum = question.substring(8);
            order.push(qNum);

            questionObj = new Object();
            //assigning question title value
            var mainQuestion = $("#mainQuestionid"+qNum).val();
            if(mainQuestion !=null){
                mainQuestion = mainQuestion.replace(/\s/g, '&nbsp;');
            }


            questionObj.questionTitle = mainQuestion;
            questionObj.mainElement = new Array();
            questionObj.addElement = new Array();
            questionObj.displayOrder = intQCount;
            questionObj.questionID = qNum;


            mainElementArray = new Array();
            addElementArray = new Array();
            // To insert elements into the boxes on the main page *not impt*
            var mainElement = $("#" + "sortable"+qNum).sortable('toArray');
            var addElement = $("#" + "sortable2"+qNum).sortable('toArray');

            /////////////// MAIN ELEMENTS ////////////////////////////
            for(var i=0; i<mainElement.length; i++){
                elementObj = new Object();
                elementObj.type = mainElement[i];
                elementObj.value = "null";

                ///////Main Text With Unit/////// Working
                if(mainElement[i].indexOf("pMainTextunit")!=-1){
                    var valuesArray = new Array();
                    var indexNum = mainElement[i].substring(13,mainElement[i].length);
                    var ddlArray = document.getElementById("textwithunitdropdown"+indexNum);
                    if(ddlArray.options.length != 0){
                        for(var j=0; j< ddlArray.options.length; j++){
                            var value = ddlArray.options[j].value;
                            //alert(value);
                            valuesArray.push(value);
                        }
                    } else {

                    }
                    elementObj.value = valuesArray;
                };
                ///// Main Text With Unit/////

                ///////Main Dropdown   /////// Working
                if(mainElement[i].indexOf("pMainDropdown")!=-1){
                    var valuesArray = new Array();
                    var indexNum = mainElement[i].substring(13,mainElement[i].length);
                    var ddlArray = document.getElementById("ddlList"+indexNum);
                    if(ddlArray.options.length != 0){
                        for(var j=0; j< ddlArray.options.length; j++){
                            var value = ddlArray.options[j].value;
                            //alert(value);
                            valuesArray.push(value);
                        }
                    } else {

                    }
                    elementObj.value = valuesArray;
                };
                ///// Main Dropdown //////////

                ///// Main Radio Button ///// Working
                if(mainElement[i].indexOf("pMainRadio")!=-1){

                    var count = 1;
                    var valuesArray = new Array();
                    var indexNum = mainElement[i].substring(10,mainElement[i].length);
                    var firstRadioValue = $("#radiotextnumber"+ indexNum).val();
                    if(firstRadioValue !=null){
                        firstRadioValue = firstRadioValue.replace(/\s/g, '&nbsp;');
                    }

                    valuesArray.push(firstRadioValue);

                    while(count < 100){
                        if($("#radiotextnumber"+ indexNum +"-"+count).val()!= null){
                            valuesArray.push($("#radiotextnumber"+ indexNum +"-" + count).val());

                        }

                        count++;
                    }
                    elementObj.value = valuesArray;
                };
                ////End  Main Radio button /////

                ///// Main checkbox /////
                if(mainElement[i].indexOf("pMainCheck")!=-1){

                    var count = 1;
                    var valuesArray = new Array();
                    var indexNum = mainElement[i].substring(10,mainElement[i].length);
                    var firstCheckboxValue = $("#checktextnumber"+ indexNum).val();
                    if(firstCheckboxValue !=null){
                        firstCheckboxValue = firstCheckboxValue.replace(/\s/g, '&nbsp;');
                    }

                    valuesArray.push(firstCheckboxValue);

                    while(count < 100){
                        if($("#checktextnumber"+ indexNum +"-"+count).val()!= null){
                            valuesArray.push($("#checktextnumber"+ indexNum +"-" + count).val());
                        }
                        count++;
                    }
                    elementObj.value = valuesArray;
                };
                ////End  Main checkbox /////

                mainElementArray.push(elementObj);
            }

            ///////////////End of  MAIN ELEMENTS /////////////////////////

            ///////////START -  Additional Elements ////////////////////////

            for(var i=0; i<addElement.length; i++){
                elementObj = new Object();
                //alert(addElement[i]);
                elementObj.type = addElement[i];
                elementObj.value = "null";

                //////// Start Additional Question ///////////////////
                if(addElement[i].indexOf("pAddQuestion")!= -1){
                    var indexNum = addElement[i].substring(12,addElement[i].length);
                    elementObj.value = $("#longtext"+ indexNum).val();
                    elementObj.value = elementObj.value.replace(/\s/g, '&nbsp;');
                }
                //////// End Additional Question ///////////////////

                ///////// Start of Additional Text with Unit ////////////
                if(addElement[i].indexOf("pAddTextunit")!=-1){
                    var valuesArray = new Array();
                    var indexNum = addElement[i].substring(12,addElement[i].length);
                    var ddlArray = document.getElementById("additional_textunitdropdown"+indexNum);
                    if(ddlArray.options.length != 0){
                        for(var j=0; j< ddlArray.options.length; j++){
                            var value = ddlArray.options[j].value;
                            //alert(value);
                            valuesArray.push(value);
                        }
                    } else {

                    }
                    elementObj.value = valuesArray;
                }
                ///////// End of Additional Text with Unit /////////////////

                ///// add checkbox /////
                if(addElement[i].indexOf("pAddCheckbox")!=-1){

                    var count = 1;
                    var valuesArray = new Array();
                    var indexNum = addElement[i].substring(12,addElement[i].length);
                    var firstCheckboxValue = $("#additional_checkbox_number"+ indexNum).val();
                    if(firstCheckboxValue !=null){
                        firstCheckboxValue = firstCheckboxValue.replace(/\s/g, '&nbsp;');
                    }

                    valuesArray.push(firstCheckboxValue);

                    while(count < 100){
                        if($("#additional_checkbox_number"+ indexNum +"-"+count).val()!= null){
                            valuesArray.push($("#additional_checkbox_number"+ indexNum +"-" + count).val());
                        }
                        count++;
                    }
                    elementObj.value = valuesArray;
                };
                //// End of add checkbox /////

                ///////Add Dropdown   /////// Working
                if(addElement[i].indexOf("pAddDropdown")!=-1){
                    var valuesArray = new Array();
                    var indexNum = addElement[i].substring(12,addElement[i].length);
                    var ddlArray = document.getElementById("ddlList"+indexNum);
                    if(ddlArray.options.length != 0){
                        for(var j=0; j< ddlArray.options.length; j++){
                            var value = ddlArray.options[j].value;
                            //alert(value);
                            valuesArray.push(value);
                        }
                    } else {

                    }
                    elementObj.value = valuesArray;
                };
                ///// End add Dropdown //////////

                ///// Start - Add Radio Button ///// Working
                if(addElement[i].indexOf("pAddRadio")!=-1){

                    var count = 1;
                    var valuesArray = new Array();
                    var indexNum = addElement[i].substring(9, addElement[i].length);
                    var firstRadioValue = $("#additional_radio_text_number"+ indexNum).val();
                    if(firstRadioValue !=null){
                        firstRadioValue = firstRadioValue.replace(/\s/g, '&nbsp;');
                    }

                    valuesArray.push(firstRadioValue);

                    while(count < 100){
                        if($("#additional_radio_text_number"+ indexNum +"-"+count).val()!= null){
                            valuesArray.push($("#additional_radio_text_number"+ indexNum +"-" + count).val());
                        }
                        count++;
                    }
                    elementObj.value = valuesArray;
                };
                ////End  Add Radio button /////


                addElementArray.push(elementObj);
            }
            /////////// End of Additional Elements ////////////////////////

            questionObj.mainElement = mainElementArray;
            questionObj.addElement = addElementArray;
            questionArray.push(questionObj);
            intQCount++;
        }

        //Adding questions to the Questionnaire.
        questionnaire.title = mainTitle;
        questionnaire.category = mainCategory;
        questionnaire.questions = questionArray;

        var myJSONText = JSON.stringify(questionnaire);
        myJSONText = myJSONText + ";";
        $('#hiddenJSONtext').val(myJSONText);
        //console.log(myJSONText);

        //alert(myJSONText);

        ////////////////////////////////////////////////////////////////////
        var strElements = "";
        var str2Elements = "";
        intCount = 0;

        for(var k=0; k<order.length; k++){
            var count = order[k];
            strElements += $("#" + "sortable"+count).sortable('toArray')+"&";
            str2Elements += $("#" + "sortable2"+count).sortable('toArray')+"&";
        }

        /*        var request1  = new XMLHttpRequest();
        request1.open("POST", "QuestionnaireCreation", false);
        //Send the proper header information along with the request;
        var parameterString = "JSONText="+myJSONText ;
        request1.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        request1.setRequestHeader("Content-length", parameterString.length);
        request1.setRequestHeader("Connection", "close");
        //request.onreadystatechange = alert(500);
        request1.send(parameterString);*/

        var myJSONText = JSON.stringify(questionnaire);

        //alert(myJSONText);
        //alert(myJSONText);
        document.getElementById('JSONText').value = myJSONText;

        /*        var foo = $("#"+temp);
        var form = $("<form method=\"get\" action=QuestionnaireCreation target=\"_blank\"/>");
        var hidden = $("<input type=text name=JSONText value="+myJSONText+">");
        var submit = $("<input type=submit>");
        foo.append(form);
        form.append(hidden);
        form.append(submit);*/


    });

    $("#submit").click(function(){

        var r=confirm("Click OK to proceed");
        if (r==true)
        {

            ////////////////////////
            var order = new Array();
            strQuestions = $("#questionDiv").sortable('toArray');

            var intQCount = 0;
            //var intQCountQuestion = 0;
            questionnaire = new Object();
            questionArray = new Array();
            mainQuestionArray = new Array();
            mainRadioArray = new Array();


            //get the values of the question itself
/*            while(intQCountQuestion < strQuestions.length){
                intQCountQuestion++;
                var mainQuestion = $("#mainQuestionid"+intQCountQuestion).val();
                if(mainQuestion !=null){
                    mainQuestion = mainQuestion.replace(/\s/g, '&nbsp;');
                }
                mainQuestionArray.push(mainQuestion);

            }*/

            //Looping through each Question
            while(intQCount < strQuestions.length){
                var question = strQuestions[intQCount];
                var qNum = question.substring(8,9);
                order.push(qNum);

                questionObj = new Object();
                //assigning question title value
                var mainQuestion = $("#mainQuestionid"+qNum).val();
                if(mainQuestion !=null){
                    mainQuestion = mainQuestion.replace(/\s/g, '&nbsp;');
                }

                questionObj.questionTitle = mainQuestion;
                questionObj.mainElement = new Array();
                questionObj.addElement = new Array();
                questionObj.displayOrder = intQCount;
                questionObj.questionID = qNum;


                mainElementArray = new Array();
                addElementArray = new Array();
                // To insert elements into the boxes on the main page *not impt*
                var mainElement = $("#" + "sortable"+qNum).sortable('toArray');
                var addElement = $("#" + "sortable2"+qNum).sortable('toArray');

                /////////////// MAIN ELEMENTS ////////////////////////////
                for(var i=0; i<mainElement.length; i++){
                    elementObj = new Object();
                    elementObj.type = mainElement[i];
                    elementObj.value = "null";

                    ///////Main Text With Unit/////// Working
                    if(mainElement[i].indexOf("pMainTextunit")!=-1){
                        var valuesArray = new Array();
                        var indexNum = mainElement[i].substring(13,mainElement[i].length);
                        var ddlArray = document.getElementById("textwithunitdropdown"+indexNum);
                        if(ddlArray.options.length != 0){
                            for(var j=0; j< ddlArray.options.length; j++){
                                var value = ddlArray.options[j].value;
                                //alert(value);
                                valuesArray.push(value);
                            }
                        } else {

                        }
                        elementObj.value = valuesArray;
                    };
                    ///// Main Text With Unit/////

                    ///////Main Dropdown   /////// Working
                    if(mainElement[i].indexOf("pMainDropdown")!=-1){
                        var valuesArray = new Array();
                        var indexNum = mainElement[i].substring(13,mainElement[i].length);
                        var ddlArray = document.getElementById("ddlList"+indexNum);
                        if(ddlArray.options.length != 0){
                            for(var j=0; j< ddlArray.options.length; j++){
                                var value = ddlArray.options[j].value;
                                //alert(value);
                                valuesArray.push(value);
                            }
                        } else {

                        }
                        elementObj.value = valuesArray;
                    };
                    ///// Main Dropdown //////////

                    ///// Main Radio Button ///// Working
                    if(mainElement[i].indexOf("pMainRadio")!=-1){

                        var count = 1;
                        var valuesArray = new Array();
                        var indexNum = mainElement[i].substring(10,mainElement[i].length);
                        var firstRadioValue = $("#radiotextnumber"+ indexNum).val();

                        valuesArray.push(firstRadioValue);

                        while(count < 100){
                            if($("#radiotextnumber"+ indexNum +"-"+count).val()!= null){
                                valuesArray.push($("#radiotextnumber"+ indexNum +"-" + count).val());

                            }

                            count++;
                        }
                        elementObj.value = valuesArray;
                    };
                    ////End  Main Radio button /////

                    ///// Main checkbox /////
                    if(mainElement[i].indexOf("pMainCheck")!=-1){

                        var count = 1;
                        var valuesArray = new Array();
                        var indexNum = mainElement[i].substring(10,mainElement[i].length);
                        var firstCheckboxValue = $("#checktextnumber"+ indexNum).val();

                        valuesArray.push(firstCheckboxValue);

                        while(count < 100){
                            if($("#checktextnumber"+ indexNum +"-"+count).val()!= null){
                                valuesArray.push($("#checktextnumber"+ indexNum +"-" + count).val());
                            }
                            count++;
                        }
                        elementObj.value = valuesArray;
                    };
                    ////End  Main checkbox /////

                    mainElementArray.push(elementObj);
                }

                ///////////////End of  MAIN ELEMENTS /////////////////////////

                ///////////START -  Additional Elements ////////////////////////

                for(var i=0; i<addElement.length; i++){
                    elementObj = new Object();
                    //alert(addElement[i]);
                    elementObj.type = addElement[i];
                    elementObj.value = "null";

                    //////// Start Additional Question ///////////////////
                    if(addElement[i].indexOf("pAddQuestion")!= -1){
                        var indexNum = addElement[i].substring(12,addElement[i].length);
                        elementObj.value = $("#longtext"+ indexNum).val();
                        elementObj.value = elementObj.value.replace(/\s/g, '&nbsp;');
                    }
                    //////// End Additional Question ///////////////////

                    ///////// Start of Additional Text with Unit ////////////
                    if(addElement[i].indexOf("pAddTextunit")!=-1){
                        var valuesArray = new Array();
                        var indexNum = addElement[i].substring(12,addElement[i].length);
                        var ddlArray = document.getElementById("additional_textunitdropdown"+indexNum);
                        if(ddlArray.options.length != 0){
                            for(var j=0; j< ddlArray.options.length; j++){
                                var value = ddlArray.options[j].value;
                                //alert(value);
                                valuesArray.push(value);
                            }
                        } else {

                        }
                        elementObj.value = valuesArray;
                    }
                    ///////// End of Additional Text with Unit /////////////////

                    ///// add checkbox /////
                    if(addElement[i].indexOf("pAddCheckbox")!=-1){

                        var count = 1;
                        var valuesArray = new Array();
                        var indexNum = addElement[i].substring(12,addElement[i].length);
                        var firstCheckboxValue = $("#additional_checkbox_number"+ indexNum).val();

                        valuesArray.push(firstCheckboxValue);

                        while(count < 100){
                            if($("#additional_checkbox_number"+ indexNum +"-"+count).val()!= null){
                                valuesArray.push($("#additional_checkbox_number"+ indexNum +"-" + count).val());
                            }
                            count++;
                        }
                        elementObj.value = valuesArray;
                    };
                    //// End of add checkbox /////

                    ///////Add Dropdown   /////// Working
                    if(addElement[i].indexOf("pAddDropdown")!=-1){
                        var valuesArray = new Array();
                        var indexNum = addElement[i].substring(12,addElement[i].length);
                        var ddlArray = document.getElementById("ddlList"+indexNum);
                        if(ddlArray.options.length != 0){
                            for(var j=0; j< ddlArray.options.length; j++){
                                var value = ddlArray.options[j].value;
                                //alert(value);
                                valuesArray.push(value);
                            }
                        } else {

                        }
                        elementObj.value = valuesArray;
                    };
                    ///// End add Dropdown //////////

                    ///// Start - Add Radio Button ///// Working
                    if(addElement[i].indexOf("pAddRadio")!=-1){

                        var count = 1;
                        var valuesArray = new Array();
                        var indexNum = addElement[i].substring(9, addElement[i].length);
                        var firstRadioValue = $("#additional_radio_text_number"+ indexNum).val();

                        valuesArray.push(firstRadioValue);

                        while(count < 100){
                            if($("#additional_radio_text_number"+ indexNum +"-"+count).val()!= null){
                                valuesArray.push($("#additional_radio_text_number"+ indexNum +"-" + count).val());
                            }
                            count++;
                        }
                        elementObj.value = valuesArray;
                    };
                    ////End  Add Radio button /////


                    addElementArray.push(elementObj);
                }
                /////////// End of Additional Elements ////////////////////////

                questionObj.mainElement = mainElementArray;
                questionObj.addElement = addElementArray;
                questionArray.push(questionObj);
                intQCount++;
            }

            //Adding questions to the Questionnaire.
            questionnaire.title = mainTitle;
            questionnaire.category = mainCategory;
            questionnaire.questions = questionArray;

            /*            var myJSONText = JSON.stringify(questionnaire);
            myJSONText = myJSONText + ";";
            $('#hiddenJSONtext').val(myJSONText);*/
            //console.log(myJSONText);

            ////////////////////////////////////////////////////////////////////
            var strElements = "";
            var str2Elements = "";
            intCount = 0;

            for(var k=0; k<order.length; k++){
                var count = order[k];
                strElements += $("#" + "sortable"+count).sortable('toArray')+"&";
                str2Elements += $("#" + "sortable2"+count).sortable('toArray')+"&";
            }

            /*        var request1  = new XMLHttpRequest();
            request1.open("POST", "QuestionnaireCreation", false);
            //Send the proper header information along with the request;
            var parameterString = "JSONText="+myJSONText ;
            request1.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            request1.setRequestHeader("Content-length", parameterString.length);
            request1.setRequestHeader("Connection", "close");
            //request.onreadystatechange = alert(500);
            request1.send(parameterString);*/

            var myJSONText = JSON.stringify(questionnaire);
            //console.log(myJSONText);
            document.getElementById('JSONText2').value = myJSONText;

            /*        var foo = $("#"+temp);
            var form = $("<form method=\"get\" action=QuestionnaireCreation target=\"_blank\"/>");
            var hidden = $("<input type=text name=JSONText value="+myJSONText+">");
            var submit = $("<input type=submit>");
            foo.append(form);
            form.append(hidden);
            form.append(submit);*/

        }
        else
        {

            return false;
        }

    });

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
         //<tr><th width=\"965\"></th><th><button type=\"button\" href=\"#\" class=\"plusBtn\" id=\"PlusBtn\" value=\"-\">-</button></tr><tr width=\"965\" id=\"tableslide\"></tr></th></table>/

         var row = $("<tr/>");
         var header =$("<th width=960/>");
         var input = $("<p class=flip id= '"+flip+"'>Question "+totalQuestions+"</p>");
         var header2 = $("<th>");
         //var collapse = $("<img src=\"Images/MainPage/minimize.gif\" href=\"#\" class=\"plusBtn\" id='"+plusBtn+"' /><img src=Images/MainPage/TextAnswerField/delete_icon.png height=15px width=15px class=\"remove\" id=\"remove\"/>");
         var collapse1 = $("<img src=\"Images/MainPage/minimize.gif\" href=\"#\" class=\"plusBtn\" id='"+plusBtn+"' />");
         var collapse2 = $("<img src=Images/MainPage/TextAnswerField/delete_icon.png height=15px width=15px class=\"remove\" id=\"remove\"/>");

         var element = $("<tr width=\"960\" id=\"tableslide\"/>");
         var tabledata = $("<td/>");
         //var form = $("<form method=\"get\" action=\"MainPageServlet\" target=\"_blank\"/>");
         var form = $("<div></div>");
         var div = $("<div class=\"demo\" id= '"+sortableDiv+"' />");
         var div2 = $("<div class=\"additional_info\" id= '"+sortableDiv2+"' />");
         var padditional = $("<p class=\"padditional\"><b>Additional Information: </b></p>");
         var mainQuestion = $("<b style=\"padding-right: 39px;\">Main Question: </b><input name="+ mainQuestionid +" type=text size=100 id="+ mainQuestionid+" x-webkit-speech />");
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
        // header2.append(collapse);
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
         //form.append(button);
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

             }

             //After clicking questional panel, track position

             $("#" + temp).sortable();


             $("#" + ztemp).sortable();

             //end here


         });

         $("#"+plusBtn).click(function(){

             var x = $(div).attr("id");
             temp = x;

             var z = $(div2).attr("id");
             ztemp = z;

             $("#"+temp).slideToggle("slow");
             $("#"+ztemp).slideToggle("slow");
         });
 /*
         $('.remove').click(function() {

             //$(this).parent().remove();
             $(this).parent().parent().parent().parent().parent().remove();
             totalQuestions--;
             alert(totalQuestions);
                         $("#" + atemp).remove();
             $(br).remove();

         });*/
         collapse2.click(function(){
               removeQuestion(collapse2);
         });

         var removeQuestion = function(removeButton){
               removeButton.parent().parent().parent().parent().parent().remove();
             totalQuestions--;
             //alert(totalQuestions);
             /*            $("#" + atemp).remove();*/
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
        //var first =$("<span class=\"ui-icon ui-icon-arrowthick-2-n-s\"/>");
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

            //alert(intCountSibling);
            innerchecktextnumber = "checktextnumber" +intCheckCount + "-"+ intCountSibling;
            intCountSibling ++;
            //alert(intCountSibling);
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

/*    $('#datepicker').click(function() {

        intdatepicker++;

        p = "Datepicker" + intdatepicker;

        var foo = $("#"+temp);
        var fieldWrapper = $("<p id='"+p+"'  class=\"object\"/>");
        var first =$("<b style=\"padding-right:74px; \">Answer: </b><input id=\"demo1\" type=\"text\" size=\"25\">");
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


    });*/

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
        var question = $("<b style=\"padding-right:10px; \">Additional Question: </b>");
        var longtext = $("<input name="+ longbox +" type=text size=100 id="+ longbox+" x-webkit-speech />");
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
        var first =$("<span><b style=\"padding-right: 74px; \">Answer: </b><input name="+ textnumber +" size=\"70\" type=text style=\"background:grey\" disabled=disabled id='"+  textnumber+"'/>");
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
        //var first =$("<span class=\"ui-icon ui-icon-arrowthick-2-n-s\"/>");
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
            /*            var id = $(input).attr("id");
            fieldWrapper.append("<br/>");
            fieldWrapper.append("<input type=checkbox disabled=disabled id="+  checkbuttonbox+"/> <input input name="+id+" type=text id="+  checktextbox+"/>");
             */
            //alert(intCountSibling);


            innerchecktextnumber = "additional_checkbox_number" +intCheckCount + "-"+ intCountSibling;
            intCountSibling ++;
            //alert(intCountSibling);
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

/*    $('#additional_datepicker').click(function() {

        intadddatepicker++;
        p = "pAddDatepicker" + intadddatepicker;

        var foo = $("#"+ztemp);
        var fieldWrapper = $("<p id='"+p+"'/>");
        var first =$("<b style=\"padding-right: 74px; \">Answer: </b><input id=\"demo1\" type=\"text\" size=\"25\">");
        var second = $("<a href=\"javascript:NewCal('demo1','ddmmyyyy')\"><img src=\"Images/cal.gif\" width=\"16\" height=\"16\" border=\"0\" alt=\"Pick a date\"></a>");
        var third = $("<img src=Images/MainPage/TextAnswerField/delete_icon.png height=10px width=10px/>");
        third.click(function() {
            $(this).parent().remove();
        });
        foo.append(fieldWrapper);
        fieldWrapper.append(first);
        fieldWrapper.append(second);
        fieldWrapper.append(third);


    });*/

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



