---
templateKey: blog-post
title: Actualizacion a WP 2.2
date: 2007-05-19T19:00:50.143Z
tags:
  - wp
---
Una nueva actualizaci­ón de WP

Solo he encontrado un problema en el index-extra.php que he solucionado colocando esto en el archivo .htaccess

<Files index-extra.php>\
SecFilterInheritance Off\
</Files>

Espero os ayude