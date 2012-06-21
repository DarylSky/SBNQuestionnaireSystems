<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>jQuery UI Effects - Toggle Demo</title>
<link rel="stylesheet" type="text/css" href="../CSS/JqueryCSS/jquery.ui.all.css" />
<script src="../Js/jquery-1.7.2.js"></script>
<script src="../Js/JqueryEffects/jquery.effects.core.js"></script>
<script src="../Js/JqueryEffects/jquery.effects.blind.js"></script>
<script src="../Js/JqueryEffects/jquery.effects.bounce.js"></script>
<script src="../Js/JqueryEffects/jquery.effects.clip.js"></script>
<script src="../Js/JqueryEffects/jquery.effects.drop.js"></script>
<script src="../Js/JqueryEffects/jquery.effects.explode.js"></script>
<script src="../Js/JqueryEffects/jquery.effects.fold.js"></script>
<script src="../Js/JqueryEffects/jquery.effects.highlight.js"></script>
<script src="../Js/JqueryEffects/jquery.effects.pulsate.js"></script>
<script src="../Js/JqueryEffects/jquery.effects.scale.js"></script>
<script src="../Js/JqueryEffects/jquery.effects.shake.js"></script>
<script src="../Js/JqueryEffects/jquery.effects.slide.js"></script>
<style>
.toggler {
    width: 500px;
    height: 200px;
}

#button {
    padding: .5em 1em;
    text-decoration: none;
}

#effect {
    width: 240px;
    height: 135px;
    padding: 0.4em;
    position: relative;
}

#effect h3 {
    margin: 0;
    padding: 0.4em;
    text-align: center;
}
</style>
<script>
    $(function() {
        // run the currently selected effect
        function runEffect() {
            // get effect type from 
            var selectedEffect = $("#effectTypes").val();

            // most effect types need no options passed by default
            var options = {};
            // some effects have required parameters
            if (selectedEffect === "scale") {
                options = {
                    percent : 0
                };
            } else if (selectedEffect === "size") {
                options = {
                    to : {
                        width : 200,
                        height : 60
                    }
                };
            }

            // run the effect
            $("#effect").toggle(selectedEffect, options, 500);
        }
        ;

        // set effect from select menu value
        $("#button").click(function() {
            runEffect();
            return false;
        });
    });
</script>
</head>
<body>

  <div class="demo">
        <h3>Toggle</h3>
           <div class="toggler">
      <div id="effect" class="ui-widget-content ui-corner-all">
        <p  class="ui-widget-header ui-corner-all">Etiam libero neque, luctus a, eleifend nec, semper at, lorem. Sed pede. Nulla lorem metus, adipiscing ut, luctus sed, hendrerit vitae, mi.</p>
      </div>
    </div>

    <select name="effects" id="effectTypes">
      <option value="blind">Blind</option>
      <option value="bounce">Bounce</option>
      <option value="clip">Clip</option>
      <option value="drop">Drop</option>
      <option value="explode">Explode</option>
      <option value="fold">Fold</option>
      <option value="highlight">Highlight</option>
      <option value="puff">Puff</option>
      <option value="pulsate">Pulsate</option>
      <option value="scale">Scale</option>
      <option value="shake">Shake</option>
      <option value="size">Size</option>
      <option value="slide">Slide</option>
    </select>

    <a href="#" id="button" class="ui-state-default ui-corner-all">Run Effect</a>
  </div>
  <!-- End demo -->

</body>
</html>

