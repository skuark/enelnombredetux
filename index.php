<?php

header("HTTP/1.1 301 Moved Permanently");

switch ($_GET['section']) {
  case "Artículos":
    header('Location: http://www.enelnombredetux.com/indexf6dd.html');
    break;
  case "Blog":
    header('Location: http://www.enelnombredetux.com/index26e2.html');
    break;
  case "Contactar":
    header('Location: http://www.enelnombredetux.com/indexc77a.html');
    break;
  case "FAQ":
    header('Location: http://www.enelnombredetux.com/index733c.html');
    break;
  case "Licencia":
    header('Location: http://www.enelnombredetux.com/indexc34d.html');
    break;
  case "Portada":
    header('Location: http://www.enelnombredetux.com/index0128.html');
    break;
  case "Proyectos":
    header('Location: http://www.enelnombredetux.com/indexf7f9.html');
    break;
  case "QuienesSomos":
    header('Location: http://www.enelnombredetux.com/indexe61b.html');
    break;
}
