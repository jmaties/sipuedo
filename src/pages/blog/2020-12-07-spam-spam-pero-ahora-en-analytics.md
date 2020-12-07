---
templateKey: blog-post
title: SPAM SPAM pero ahora en Analytics
date: 2015-06-05T19:23:11.620Z
tags:
  - spam
---
El SPAM cada vez se vuelve más “listo”. Correos, comentarios en blogs, redes sociales, buz­ón de casa, el cristal de mi coche y ahora también en las analí­ticas de Google.

Hay mucha informaci­ón sobre ello en la red, pero si os interesa aprender un poco más, echadle un vistazo a este [post](https://laux.es/referrer-spam-nginx-ganalytics/) de [@laux_es](https://twitter.com/laux_es) que lo explica bastante bien y es en el que me he basado para poder hacer lo mismo pero en **Apache**.

La alarma salt­ó después de comprobar una subida en el consumo del servidor. Comprobando las analí­ticas vi que la mayorí­a de los sitios que habí­an subido, lo hacian de la misma forma, [referencias](http://es.wikipedia.org/wiki/Referer_%28Cabecera_HTTP%29). “Blanco y en botella”, estaba sufriendo un “caso agudo de spammierditis” (creo que voy a tener que ver menos a [Ned Flanders](https://es.wikipedia.org/wiki/Ned_Flanders)) y habí­a que ponerle remedio. Lo primero deberí­an ser los filtros de las propias análiticasÂ y evitar las peticiones a nivel de servidor.

La opci­ón más sencilla es a traves de .htacces

> RewriteEngine On\
> RewriteCond %{HTTP_REFERER} ^http(s)?://(www\.)?.\*4webmasters\.org.\*$ \[NC,OR]
>
> .

… y todo el listado de [webs chungas](https://github.com/Stevie-Ray/htaccess-referral-spam-blacklist-block/blob/master/.htaccess)

El problema con este sistema, es que al usar principalmente Drupal en los desarrollos, tocarí­a cada vez que hay una actualizaci­ón del core, tener que modificar manualmente esos .htaccess. No es muy ­óptimo la verdad.

Así­ que he optado por una soluci­ón en el httpd.conf con la técnica de [Deflector](http://httpd.apache.org/docs/2.4/rewrite/access.html#referer-deflector).

Para ello he creado un [deflector.map](https://gist.github.com/jmaties/6d016f0fbebcc64e83de) con el listado de esas “dudosas” referencias que por desgracia me imagino que crecerá y las he llamado en cada uno de los VirtualHost que tenemos en el server:

> RewriteMap deflector “txt:/path/to/deflector.map”
>
> RewriteCond “%{HTTP_REFERER}” !=””\
> RewriteCond “${deflector:%{HTTP_REFERER}}” “=-”\
> RewriteRule “^” “%{HTTP_REFERER}” \[R,L]
>
> RewriteCond “%{HTTP_REFERER}” !=””\
> RewriteCond “${deflector:%{HTTP_REFERER}|NOT-FOUND}” “!=NOT-FOUND”\
> RewriteRule “^” “${deflector:%{HTTP_REFERER}}” \[R,L]

De esta forma tengo un ­único archivo com­ún a todos los sitios y que podrá ir creciendo en el futuro sin necesidad de ir “tocando” uno a uno cada sitio.