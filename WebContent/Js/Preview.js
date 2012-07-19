$(document).ready(function() {

    //var JSONObject = JSON.stringify(eval("(" + JSON + ")"));
    var jsontag = location.search;
    //alert(JSONObject);

    var jsonsplit = jsontag.split("=");
    var jsonvalue = jsonsplit[1];

    var json_parsed = $.parseJSON(jsonvalue);

    var title=json_parsed.title;
    var titleSpace=title.replace("+"," ");
    $("#questionnairediv").append("<b>Questionnaire Title: </b>");
    $("#questionnairediv").append(titleSpace);
    $("#questionnairediv").append("<span style=\"padding-right: 30px;\" />");

    var category = json_parsed.category;
    var categorySpace = category.replace("+", " ");
    $("#questionnairediv").append("<b>Category: </b>");
    $("#questionnairediv").append(categorySpace);

    for ( var u = 0; u < json_parsed.questions.length; u++) {
        var question = json_parsed.questions[u];



        var questionID=(question.questionID);

        $("#questionContent").append("<div style=\"border: 2px solid whiteSmoke;\"></div>");

        $("#questionContent").append("<p id=\"question\"></p>");
        $("#questionContent").append(questionID);
        $("#questionContent").append(".");

        var questionTitle = (question.questionTitle);
        $("#questionContent").append(questionTitle);
        $("#questionContent").append("<br />");
        $("#questionContent").append("<br />");


        var x=0;
        ////////////////////////////mainElements////////////////////////////////////////

        for(var i=0;i<question.mainElement.length;i++){
            var mainElements = (question.mainElement[i].type);
            var mainElementsSubstring = mainElements.substring(0, mainElements.length-1);



            if (mainElementsSubstring == ("pMainText")){

                $("#questionContent").append("<input type=text size=\"100\" />");
                $("#questionContent").append("<br />");
                $("#questionContent").append("<br />");
            }

            else if (mainElementsSubstring == ("pMainParagragh")){

                $("#questionContent").append("<textarea rows=4 columns=20 />");
                $("#questionContent").append("<br />");
                $("#questionContent").append("<br />");

            }


            else if (mainElementsSubstring == ("pMainTextunit")){

                var questionContent =  $("#questionContent");
                var textbox = $("<input type=\"text\">");
                var select = $("<select id=\"select\" style=\"width:150px;\"></select>");
                questionContent.append(textbox);
                questionContent.append(select);

                for(var x=0; x<question.mainElement[i].value.length;x++){
                    var textunit = (question.mainElement[i].value[x]);
                    select.append("<option>"+textunit+"</option>");
                }

                $("#questionContent").append("<br />");
                $("#questionContent").append("<br />");
            }

            else if (mainElementsSubstring == ("pMainDropdown")){

                var questionContent =  $("#questionContent");
                var select = $("<select id=\"select\" style=\"width:150px;\"></select>");
                questionContent.append(select);

                for(var x=0; x<question.mainElement[i].value.length;x++){
                    var dropdown = (question.mainElement[i].value[x]);
                    select.append("<option>"+dropdown+"</option>");
                }

                $("#questionContent").append("<br />");
                $("#questionContent").append("<br />");
            }

            else if (mainElementsSubstring == ("pMainCheck")){

                for(var x=0; x<question.mainElement[i].value.length;x++){
                    var checkboxvalue = (question.mainElement[i].value[x]);
                    var questionContent =  $("#questionContent");
                    var check = $("<input type=checkbox /><b>"+checkboxvalue+"</b>");
                    questionContent.append(check);
                    questionContent.append("<br />");
                }

                $("#questionContent").append("<br />");
            }

            else if (mainElementsSubstring == ("pMainRadio")){

                var mainRadio = "mainRadio" + x++;
                for(var x=0; x<question.mainElement[i].value.length;x++){
                    var radiobuttonvalue = (question.mainElement[i].value[x]);
                    var questionContent =  $("#questionContent");
                    var radio = $("<input type=radio name="+mainRadio+" /><b>"+radiobuttonvalue+"</b>");
                    questionContent.append(radio);
                    questionContent.append("<br />");
                }

                $("#questionContent").append("<br />");
            }

        }

        var y=0;
        /////////////////////Additional//////////////////////////////////////

        $("#questionContent").append("<p class=\"padditional\"><b>Additional Information: </b></p>");

        for(var i=0;i<question.addElement.length;i++){
            var addElements = (question.addElement[i].type);
            var addElementsSubstring = addElements.substring(0, addElements.length-1);

            if (addElementsSubstring == ("pAddQuestion")){


                var questionTitle = (question.addElement[i].value);
                $("#questionContent").append(questionTitle);
                $("#questionContent").append("<br />");
                $("#questionContent").append("<br />");

            }

            else if (addElementsSubstring == ("pAddText")){

                $("#questionContent").append("<input type=text size=\"100\" />");
                $("#questionContent").append("<br />");
                $("#questionContent").append("<br />");

            }

            else if (addElementsSubstring == ("pAddParagraph")){

                $("#questionContent").append("<textarea rows=4 columns=20 />");
                $("#questionContent").append("<br />");
                $("#questionContent").append("<br />");

            }


            else if (addElementsSubstring == ("pAddTextunit")){

                var questionContent =  $("#questionContent");
                var textbox = $("<input type=\"text\">");
                var select = $("<select id=\"select\" style=\"width:150px;\"></select>");
                questionContent.append(textbox);
                questionContent.append(select);

                for(var x=0; x<question.addElement[i].value.length;x++){
                    var textunit = (question.addElement[i].value[x]);
                    select.append("<option>"+textunit+"</option>");
                }

                $("#questionContent").append("<br />");
                $("#questionContent").append("<br />");
            }

            else if (addElementsSubstring == ("pAddDropdown")){

                var questionContent =  $("#questionContent");
                var select = $("<select id=\"select\" style=\"width:150px;\"></select>");
                questionContent.append(select);

                for(var x=0; x<question.addElement[i].value.length;x++){
                    var dropdown = (question.addElement[i].value[x]);
                    select.append("<option>"+dropdown+"</option>");
                }

                $("#questionContent").append("<br />");
                $("#questionContent").append("<br />");
            }

            else if (addElementsSubstring == ("pAddCheckbox")){

                for(var x=0; x<question.addElement[i].value.length;x++){
                    var checkboxvalue = (question.addElement[i].value[x]);
                    var questionContent =  $("#questionContent");
                    var check = $("<input type=checkbox /><b>"+checkboxvalue+"</b>");
                    questionContent.append(check);
                    questionContent.append("<br />");
                }

                $("#questionContent").append("<br />");
                $("#questionContent").append("<br />");
            }

            else if (addElementsSubstring == ("pAddRadio")){

                var additionalRadio = "additionalRadio" + y++;
                for(var x=0; x<question.addElement[i].value.length;x++){
                    var radiobuttonvalue = (question.addElement[i].value[x]);
                    var questionContent =  $("#questionContent");
                    var radio = $("<input type=\"radio\" name="+additionalRadio+" />");
                    var b = $("<b>"+radiobuttonvalue+"</b>");

                    questionContent.append(radio);
                    questionContent.append(b);
                    questionContent.append("<br />");
                }

                $("#questionContent").append("<br />");
                $("#questionContent").append("<br />");
            }

        }

    }



});