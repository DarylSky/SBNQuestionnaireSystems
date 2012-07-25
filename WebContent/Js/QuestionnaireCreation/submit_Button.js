$(document).ready(function(){

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
});