---
templateKey: blog-post
title: ...y más problemas con WP
date: 2007-03-15T19:38:15.461Z
tags:
  - wp
---
Si no hace unos dí­as que se descubrí­a un [problemita](http://www.javiermaties.com/sipuedo/2007/03/03/alguien-me-dice-que-esta-pasando-con-wordpress/) con WP, ahora vuelve a aparecer otra vulberabilidad que provoca que nuestro WP sea vulnerable a inyecciones de c­ódigo malicioso mediante los comentarios.

La soluci­ón, actualizar esto archivos:

* wp-comments-post.php
* wp-includes/comment-functions.php
* wp-includes/default-filters.php
* wp-includes/functions.php

Descarga los archivos para cada version en:\
[Changeset 5040 para la rama 2.1.x](http://trac.wordpress.org/changeset/5040)\
[Changeset 5041 para la rama 2.0.x](http://trac.wordpress.org/changeset/5041)