
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Demo: Animated Scroll to Top</title>


<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.3/jquery.min.js"></script>


<script>
$(document).ready(function(){

	// hide #back-top first
	$("#back-top").hide();
	
	// fade in #back-top
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#back-top').fadeIn();
			} else {
				$('#back-top').fadeOut();
			}
		});

		// scroll body to 0px on click
		$('#back-top a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});

});
</script>

<style>
body {
	font: .88em/150% Arial, Helvetica, sans-serif;
	margin: 30px auto;
}
h1 {
	font: bold 80%/120% Arial, Helvetica, sans-serif;
	text-transform: uppercase;
	margin: 0 0 10px;
	color: #999;
}
h2 {
	font-size: 2.5em;
	margin: 0 0 8px;
}
h3 {
	font-size: 1.6em;
	margin: 20px 0 5px;
}
a {
	color: #69C;
	text-decoration: none;
}
a:hover {
	color: #F30;
}
p {
	margin: 0 0 10px;
}
em {
	font: italic 100% "Times New Roman", Times, serif;
}
.credits {
	border-bottom: solid 1px #eee;
	padding-bottom: 10px;
	margin: 0 0 30px;
}
#pagewrap {
	margin: 0 auto;
	width: 600px;
	padding-left: 150px;
	position: relative;
}

/*
Back to top button 
*/
#back-top {
	position: fixed;
	bottom: 30px;
	margin-left: -150px;
}
#back-top a {
	width: 108px;
	display: block;
	text-align: center;
	font: 11px/100% Arial, Helvetica, sans-serif;
	text-transform: uppercase;
	text-decoration: none;
	color: #bbb;
	/* background color transition */
	-webkit-transition: 1s;
	-moz-transition: 1s;
	transition: 1s;
}
#back-top a:hover {
	color: #000;
}
/* arrow icon (span tag) */
#back-top span {
	width: 108px;
	height: 108px;
	display: block;
	margin-bottom: 7px;
	background: #ddd url(up-arrow.png) no-repeat center center;
	/* rounded corners */
	-webkit-border-radius: 15px;
	-moz-border-radius: 15px;
	border-radius: 15px;
	/* background color transition */
	-webkit-transition: 1s;
	-moz-transition: 1s;
	transition: 1s;
}
#back-top a:hover span {
	background-color: #777;
}
</style>

</head>

<body id="top">
<div id="pagewrap">
	<h1>Demo</h1>
	<h2><a href="http://webdesignerwall.com/tutorials/animated-scroll-to-top">Animated Scroll to Top</a></h2>
	<p class="credits"><em>by <a href="http://webdesignerwall.com">Web Designer Wall</a></em></p>
	<p>&darr; scroll down</p>
	<p>&darr;</p>
	<p>&darr;</p>
	<p>&darr;</p>
	<p>&darr;</p>
<p>&darr;</p>
	<p>In sollicitudin blandit cursus. Pellentesque ornare, augue ac posuere consectetur, tellus ligula feugiat lorem, id imperdiet tellus tortor ut urna. Ut eleifend rhoncus augue sit amet dignissim. In mattis lobortis imperdiet. Aliquam molestie nisi et purus mattis volutpat. Cras dignissim, arcu vel pretium interdum, turpis sapien rutrum felis, non condimentum nulla orci ornare tellus. In laoreet tristique mauris, in accumsan quam commodo ac. Nam fringilla sapien sed nibh vehicula at rutrum metus blandit. Mauris eleifend, velit eget lacinia ullamcorper, elit sapien malesuada orci, fringilla imperdiet enim ante at velit. Vestibulum posuere dictum sapien, id volutpat sapien auctor non. Fusce convallis elit sagittis augue venenatis tempor in eget ligula. Curabitur at diam leo, eu convallis purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin molestie nunc massa. Quisque tempor neque in sem laoreet vel dictum magna commodo. In elementum, turpis sed bibendum sollicitudin, augue leo malesuada dolor, ut hendrerit lectus libero id purus.</p>
	<p>&darr;</p>
	<p>&darr;</p>
	<p>&darr;</p>
<h3><a href="http://themify.me">Themify.me</a></h3>
	<p>Mauris ornare rhoncus sem, non euismod tortor rhoncus ac. Aliquam erat volutpat. Fusce justo purus, convallis sed feugiat nec, aliquet et ipsum. Nullam dapibus semper risus eu accumsan. Nulla facilisis eros ac ligula sodales suscipit. Fusce pellentesque iaculis dignissim. Phasellus tristique neque vitae justo laoreet tempus. Duis dignissim mollis lectus, id mollis tortor dignissim ut. Proin non velit arcu, sit amet laoreet massa. Aliquam gravida eros sit amet leo scelerisque molestie. Morbi et cursus felis. Pellentesque at dui nunc. Integer euismod tincidunt nisl, in iaculis tellus feugiat sed. Praesent semper augue eu augue ullamcorper mattis.</p>
	<h3><a href="http://icondock.com">IconDock</a></h3>
	<p> Integer urna diam, viverra eu convallis at, luctus vel ipsum. Morbi varius eros neque, eu malesuada dolor. Etiam eget eleifend metus. Duis auctor orci et odio cursus adipiscing. Aliquam erat volutpat. In posuere faucibus justo, et faucibus lectus sodales ut. Vestibulum bibendum, dolor sed auctor rhoncus, massa nulla faucibus dui, in sollicitudin elit est at lorem. Proin aliquam gravida turpis et facilisis. Sed ornare enim et odio dictum dapibus ac vitae dolor. Duis sodales felis aliquet lectus commodo dictum. Etiam consectetur lacus sit amet lectus venenatis et iaculis urna ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin erat leo, condimentum sit amet volutpat in, auctor nec urna. Curabitur felis ligula, gravida at dignissim ac, faucibus vel metus. Ut euismod nibh sit amet nibh blandit in posuere libero scelerisque. Donec quis augue nibh, eu facilisis metus. Donec cursus condimentum erat quis sollicitudin. Mauris enim tortor, hendrerit ut pharetra non, eleifend non elit. Ut dapibus eleifend ipsum a rhoncus. Aenean eu ante felis, nec vulputate enim.</p>
	<h3><a href="http://bestwebgallery.com">Best Web Gallery</a></h3>
	<p>Mauris ornare rhoncus sem, non euismod tortor rhoncus ac. Aliquam erat volutpat. Fusce justo purus, convallis sed feugiat nec, aliquet et ipsum. Nullam dapibus semper risus eu accumsan. Nulla facilisis eros ac ligula sodales suscipit. Fusce pellentesque iaculis dignissim. Phasellus tristique neque vitae justo laoreet tempus. Duis dignissim mollis lectus, id mollis tortor dignissim ut. Proin non velit arcu, sit amet laoreet massa. Aliquam gravida eros sit amet leo scelerisque molestie. Morbi et cursus felis. Pellentesque at dui nunc. Integer euismod tincidunt nisl, in iaculis tellus feugiat sed. Praesent semper augue eu augue ullamcorper mattis.</p>
	<h3><a href="http://ndesign-studio.com">N.Design Studio</a></h3>
	<p> Integer urna diam, viverra eu convallis at, luctus vel ipsum. Morbi varius eros neque, eu malesuada dolor. Etiam eget eleifend metus. Duis auctor orci et odio cursus adipiscing. Aliquam erat volutpat. In posuere faucibus justo, et faucibus lectus sodales ut. Vestibulum bibendum, dolor sed auctor rhoncus, massa nulla faucibus dui, in sollicitudin elit est at lorem. Proin aliquam gravida turpis et facilisis. </p>
	<p>Sed ornare enim et odio dictum dapibus ac vitae dolor. Duis sodales felis aliquet lectus commodo dictum. Etiam consectetur lacus sit amet lectus venenatis et iaculis urna ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin erat leo, condimentum sit amet volutpat in, auctor nec urna. Curabitur felis ligula, gravida at dignissim ac, faucibus vel metus. Ut euismod nibh sit amet nibh blandit in posuere libero scelerisque. Donec quis augue nibh, eu facilisis metus. Donec cursus condimentum erat quis sollicitudin. Mauris enim tortor, hendrerit ut pharetra non, eleifend non elit. Ut dapibus eleifend ipsum a rhoncus. Aenean eu ante felis, nec vulputate enim.</p>
	<h3>Sub Heading 5</h3>
	<p>Mauris ornare rhoncus sem, non euismod tortor rhoncus ac. Aliquam erat volutpat. Fusce justo purus, convallis sed feugiat nec, aliquet et ipsum. Nullam dapibus semper risus eu accumsan. Nulla facilisis eros ac ligula sodales suscipit. Fusce pellentesque iaculis dignissim. Phasellus tristique neque vitae justo laoreet tempus. Duis dignissim mollis lectus, id mollis tortor dignissim ut. Proin non velit arcu, sit amet laoreet massa. Aliquam gravida eros sit amet leo scelerisque molestie. Morbi et cursus felis. Pellentesque at dui nunc. Integer euismod tincidunt nisl, in iaculis tellus feugiat sed. Praesent semper augue eu augue ullamcorper mattis.</p>
	<h3>Sub Header 6</h3>
	<p> Integer urna diam, viverra eu convallis at, luctus vel ipsum. Morbi varius eros neque, eu malesuada dolor. Etiam eget eleifend metus. Duis auctor orci et odio cursus adipiscing. Aliquam erat volutpat. In posuere faucibus justo, et faucibus lectus sodales ut. Vestibulum bibendum, dolor sed auctor rhoncus, massa nulla faucibus dui, in sollicitudin elit est at lorem. Proin aliquam gravida turpis et facilisis. </p>
	<p>Sed ornare enim et odio dictum dapibus ac vitae dolor. Duis sodales felis aliquet lectus commodo dictum. Etiam consectetur lacus sit amet lectus venenatis et iaculis urna ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin erat leo, condimentum sit amet volutpat in, auctor nec urna. Curabitur felis ligula, gravida at dignissim ac, faucibus vel metus. Ut euismod nibh sit amet nibh blandit in posuere libero scelerisque. Donec quis augue nibh, eu facilisis metus. Donec cursus condimentum erat quis sollicitudin. Mauris enim tortor, hendrerit ut pharetra non, eleifend non elit. Ut dapibus eleifend ipsum a rhoncus. Aenean eu ante felis, nec vulputate enim.</p>
	<h3>Sub Heading 7</h3>
	<p>Mauris ornare rhoncus sem, non euismod tortor rhoncus ac. Aliquam erat volutpat. Fusce justo purus, convallis sed feugiat nec, aliquet et ipsum. Nullam dapibus semper risus eu accumsan. Nulla facilisis eros ac ligula sodales suscipit. Fusce pellentesque iaculis dignissim. Phasellus tristique neque vitae justo laoreet tempus. Duis dignissim mollis lectus, id mollis tortor dignissim ut. Proin non velit arcu, sit amet laoreet massa. Aliquam gravida eros sit amet leo scelerisque molestie. Morbi et cursus felis. Pellentesque at dui nunc. Integer euismod tincidunt nisl, in iaculis tellus feugiat sed. Praesent semper augue eu augue ullamcorper mattis.</p>
	<h3>Sub Header 8</h3>
	<p> Integer urna diam, viverra eu convallis at, luctus vel ipsum. Morbi varius eros neque, eu malesuada dolor. Etiam eget eleifend metus. Duis auctor orci et odio cursus adipiscing. Aliquam erat volutpat. In posuere faucibus justo, et faucibus lectus sodales ut. Vestibulum bibendum, dolor sed auctor rhoncus, massa nulla faucibus dui, in sollicitudin elit est at lorem. Proin aliquam gravida turpis et facilisis. </p>
	<p>Sed ornare enim et odio dictum dapibus ac vitae dolor. Duis sodales felis aliquet lectus commodo dictum. Etiam consectetur lacus sit amet lectus venenatis et iaculis urna ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin erat leo, condimentum sit amet volutpat in, auctor nec urna. Curabitur felis ligula, gravida at dignissim ac, faucibus vel metus. Ut euismod nibh sit amet nibh blandit in posuere libero scelerisque. Donec quis augue nibh, eu facilisis metus. Donec cursus condimentum erat quis sollicitudin. Mauris enim tortor, hendrerit ut pharetra non, eleifend non elit. Ut dapibus eleifend ipsum a rhoncus. Aenean eu ante felis, nec vulputate enim.</p>
	<h3>Sub Header 9</h3>
	<p> Integer urna diam, viverra eu convallis at, luctus vel ipsum. Morbi varius eros neque, eu malesuada dolor. Etiam eget eleifend metus. Duis auctor orci et odio cursus adipiscing. Aliquam erat volutpat. In posuere faucibus justo, et faucibus lectus sodales ut. Vestibulum bibendum, dolor sed auctor rhoncus, massa nulla faucibus dui, in sollicitudin elit est at lorem. Proin aliquam gravida turpis et facilisis. </p>
	<p>Sed ornare enim et odio dictum dapibus ac vitae dolor. Duis sodales felis aliquet lectus commodo dictum. Etiam consectetur lacus sit amet lectus venenatis et iaculis urna ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin erat leo, condimentum sit amet volutpat in, auctor nec urna. Curabitur felis ligula, gravida at dignissim ac, faucibus vel metus. Ut euismod nibh sit amet nibh blandit in posuere libero scelerisque. Donec quis augue nibh, eu facilisis metus. Donec cursus condimentum erat quis sollicitudin. Mauris enim tortor, hendrerit ut pharetra non, eleifend non elit. Ut dapibus eleifend ipsum a rhoncus. Aenean eu ante felis, nec vulputate enim.</p>
	<h3>Sub Heading 10</h3>
	<p>Mauris ornare rhoncus sem, non euismod tortor rhoncus ac. Aliquam erat volutpat. Fusce justo purus, convallis sed feugiat nec, aliquet et ipsum. Nullam dapibus semper risus eu accumsan. Nulla facilisis eros ac ligula sodales suscipit. Fusce pellentesque iaculis dignissim. Phasellus tristique neque vitae justo laoreet tempus. Duis dignissim mollis lectus, id mollis tortor dignissim ut. Proin non velit arcu, sit amet laoreet massa. Aliquam gravida eros sit amet leo scelerisque molestie. Morbi et cursus felis. Pellentesque at dui nunc. Integer euismod tincidunt nisl, in iaculis tellus feugiat sed. Praesent semper augue eu augue ullamcorper mattis.</p>

	<p id="back-top">
		<a href="#top"><span></span>Back to Top</a>
	</p>

</div>
</body>
</html>
