<!DOCTYPE html>
<html>
<head>
<link href="http://code.jquery.com/ui/1.10.4/themes/smoothness/jquery-ui.min.css" rel="stylesheet" type="text/css" />
<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
<script src="http://code.jquery.com/ui/1.10.4/jquery-ui.min.js"></script>
  <meta charset="utf-8">
  <title>App Maker</title>
</head>
<body>

    <div id="AppContainer"></div>
    <script src="assets/js/libs/handlebars.js"></script>
    <?php
        $this->files->initFiles("js");
    ?>
    <script>
        $(function(){
            $.UserController.index("<?=$sessionId?>");
        });
    </script>
</body>
</html>

