<?php

header("HTTP/1.1 301 Moved Permanently");

switch ($_GET['project']) {
  case "autcel":
    header('Location: http://www.enelnombredetux.com/project4354.html');
    break;
  case "estegan":
    header('Location: http://www.enelnombredetux.com/projectd4bb.html');
    break;
  case "fractales":
    header('Location: http://www.enelnombredetux.com/project69b3.html');
    break;
  case "pgp":
    header('Location: http://www.enelnombredetux.com/projected1f.html');
    break;
  case "vilife":
    header('Location: http://www.enelnombredetux.com/projectea0a.html');
    break;
}
