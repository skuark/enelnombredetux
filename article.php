<?php

header("HTTP/1.1 301 Moved Permanently");

switch ($_GET['article']) {
  case "codetip":
    header('Location: http://www.enelnombredetux.com/articlec582.html');
    break;
  case "legalidad":
    header('Location: http://www.enelnombredetux.com/article5e25.html');
    break;
  case "oracle":
    header('Location: http://www.enelnombredetux.com/article1cef.html');
    break;
  case "spam":
    header('Location: http://www.enelnombredetux.com/article0096.html');
    break;
}
