function dialog_box()
{
    var r=confirm("Changes will not be saved, are you sure?");
    if (r==true)
    {

        location.href = "HomePage.jsp";

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
