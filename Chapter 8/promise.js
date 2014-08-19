<html>

<body>
<span id="result"></span>
</body>

<script src="bower_components/require/build/require.js"></script>
<script>
	require("bower_components/when/when")
	console.dir(when(function(){return 2+2;}));
</script>

</html>