$(document).ready(function() {

    //var JSONObject = JSON.stringify(eval("(" + JSON + ")"));
    var jsontag = location.search;
    //alert(JSONObject);

    var jsonsplit = jsontag.split("=");
    var jsonvalue = jsonsplit[1];

    var json_parsed = $.parseJSON(jsonvalue);

    for ( var u = 0; u < json_parsed.questions.length; u++) {
        var question = json_parsed.questions[u];
        //document.write(question.id); //Questionnaire ID
        //document.write(question.displayOrder);
        var questionID=(question.questionID);

        $("#questionNo").append(questionID);
        $("#questionNo").append(".");

        var questionTitle = (question.questionTitle);
        $("#questionNo").append(questionTitle);
        $("#questionNo").append("<br />");

        for(var i=0;i<question.mainElement.length;i++){
            var mainElements = (question.mainElement[i].type);
           // var dropdownvalue = (question.mainElement[i].value);
            var mainElementsSubstring = mainElements.substring(0, mainElements.length-1);

            if (mainElementsSubstring == ("pMainText")){

                $("#questionContent").append("<b>Answer: </b><input type=text />");
                $("#questionContent").append("<br />");
                $("#questionContent").append("<br />");
            }

            else if (mainElementsSubstring == ("pMainParagragh")){

                $("#questionContent").append("<b>Answer: </b><textarea rows=4 columns=20 />");
                $("#questionContent").append("<br />");
                $("#questionContent").append("<br />");
            }


            else if (mainElementsSubstring == ("pMainTextunit")){

                $("#questionContent").append("<b>Answer: </b><input type=text /><select style=width:100px />");
                $("#questionContent").append("<br />");
                $("#questionContent").append("<br />");
            }

            else if (mainElementsSubstring == ("pMainDropdown")){

                $("#questionContent").append("<b>Answer: </b><select style=width:150px />");
                //$("#questionContent").append(dropdownvalue);
                /*var value=values.split(",");
                for(var j=0;j<value.length;j++){
                    dropdownvalue=value[j];
                    $("#questionContent").append(dropdownvalue);
                }*/
                $("#questionContent").append("<br />");
                $("#questionContent").append("<br />");
            }

            else if (mainElementsSubstring == ("pMainCheck")){

                $("#questionContent").append("<b>Answer: </b><input type=checkbox />");
                $("#questionContent").append("<br />");
                $("#questionContent").append("<br />");
            }

            else if (mainElementsSubstring == ("pMainRadio")){


                //var value=question.mainElement[i].value;
                $("#questionContent").append("<b>Answer: </b><input type=radio value="+value+"/>");
                //$("#questionContent").append(value);
                $("#questionContent").append("<br />");
                $("#questionContent").append("<br />");
            }

        }
/*        for(var i=0;i<question.addElement.length;i++){
            document.write(question.addElement[i].type);
            document.write(question.addElement[i].value);
        }*/
        //document.write(question.displayOrder);
    }



});