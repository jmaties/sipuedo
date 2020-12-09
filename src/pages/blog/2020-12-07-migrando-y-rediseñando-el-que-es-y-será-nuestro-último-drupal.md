---
templateKey: blog-post
title: Migrando y rediseñando el que es y será nuestro último drupal (posiblemente)
date: 2017-11-15T20:14:00.000Z
description: Proyecto en el que hemos trabajado ha sido la migración de un
  marketplace bajo drupal con una estructura un poco liosa y un theme bastante
  antiguo.
tags:
  - desarrollo
  - drupal
  - drupal8
---
Uno de los últimos proyectos en el que hemos trabajado ha sido la migración de un *marketplace ( más o menos )* bajo drupal con una estructura un poco liosa y un theme bastante antiguo.

Debido a que algunos de los módulos creados y usados todavía no se habían migrado a drupal 8, pensamos que la opción más correcta era seguir con drupal 7, especialmente también por tiempos y presupuesto 

> En principio, el cliente solo nos solicitó pequeñas cambios estéticos y de funcionalidad pero comprabando como estaba el site, nuestra propuesta fue un rediseño completo, tanto del theme como del propio funcionamiento.

Antes del rediseño visual nos encargamos de unificar y simplificar la arquitectura de contenidos, basándonos principalmente en el **nodo anuncio**, que es el principal del *site*.

[![Diseño antiguo](https://i2.wp.com/javiermaties.com/sipuedo/wp-content/uploads/2017/11/Crear-Anuncio-S-C-de-Tenerife-69-e1510757810338.png?resize=216%2C334&ssl=1)](https://i2.wp.com/javiermaties.com/sipuedo/wp-content/uploads/2017/11/Crear-Anuncio-S-C-de-Tenerife-69-e1510757810338.png?ssl=1)

Diseño antiguo

El cliente nos comentaba que las llamadas para modificar algo del anuncio o para darlo de alta eran constantes, así que, una vez unificados los diferentes tipos de contenido en uno, se preparó para que su creación no fuera tan “liosa”.

Usamos el módulo [create and reg](https://www.drupal.org/project/create_and_reg) para que cuando se creara un anuncio, se cree tambien un usuario ya que muchos de los problemas de la anterior versión eran que tenían que dar de alta antes un usuario para poder generar despues el anuncio.

Además, para crear el anuncio, eliminamos todos los posibles distractores para que el usuario se centrara exclusivamente en eso.

El resultado hay sido una mejora considerable en el tiempo a la hora de crear un anuncio y la minimización de posibles errores.

Una vez habiamos resuelto la creación del anuncio, lo demás ha sido trabajar en base a él, creando las vistas y demás.



[![Nuevo diseño](https://i0.wp.com/javiermaties.com/sipuedo/wp-content/uploads/2017/11/Screenshot-2017-11-15-Crear-Anuncio-Canarias-69-e1510758731240.png?resize=220%2C340&ssl=1 "Nuevo diseño para crear anuncios")](https://i0.wp.com/javiermaties.com/sipuedo/wp-content/uploads/2017/11/Screenshot-2017-11-15-Crear-Anuncio-Canarias-69-e1510758731240.png?ssl=1)

Nuevo diseño

Para la migración de los anuncios antiguos al nuevo sitio no hemos usado [migrate](https://www.drupal.org/project/migrate), hemos creado un pequeño módulo para ello ya que además de migrar necesitabamos crear nuevos campos y rellenarlos con información dependiente de otros campos.\
“Poco despues hemos descubierto que se podría haber hecho tambien con migrate :(”

Sin embargo, para la otra parte de la web, el foro, si la hemos utilazado y ha sido bastante sencilla su implementación.

En el nuevo diseño visual, se han mantenido los colores oscuros y se ha basado en el framework [Foundation](https://foundation.zurb.com/) si, somos de los raros que no usan Bootstrap para el front-end pero nos hemos adaptado a trabajar con él y de momento cubre la mayoría de nuestras necesidades.

La home se ha unificado con la vista anuncios y se ha mejorado la presentación de los mismos.

[![Listado antiguo](https://i1.wp.com/javiermaties.com/sipuedo/wp-content/uploads/2017/11/S-C-de-Tenerife-69-e1510760829201.png?resize=275%2C322&ssl=1 "Listado de anuncios anterior")](https://i1.wp.com/javiermaties.com/sipuedo/wp-content/uploads/2017/11/S-C-de-Tenerife-69-e1510760829201.png?ssl=1)

Listado antiguo

[![Listado nuevo](https://i1.wp.com/javiermaties.com/sipuedo/wp-content/uploads/2017/11/Screenshot-2017-11-15-Tu-portal-de-contactos-en-Canarias-Canarias-69-e1510760377964-1.jpg?resize=290%2C323&ssl=1 "Listado de anuncios actual")](https://i1.wp.com/javiermaties.com/sipuedo/wp-content/uploads/2017/11/Screenshot-2017-11-15-Tu-portal-de-contactos-en-Canarias-Canarias-69-e1510760377964-1.jpg?ssl=1)

Nueva home y listado



Otro de los puntos creados han sido los nuevos banners, menos intrusivos e incorporados al propio grid del theme, y los destacados en un carrusel en la parte superior y dentro de cada anuncio en la parte inferior del mismo.

Pero, como antes comentaba, sin duda alguna el cambio visual en el nodo anuncio ha sido el más completo.

Se ha dado más importancia a las imágenes, se ha mejorado la validación, se ha incorporado un sistema de favoritos y se han taxonomizado los anuncios para un mejor resultado en la búsqueda, la cual tambien ha sido mejorada, entre otras muchas más cosas.

[![Antigua vs Nueva](https://i1.wp.com/javiermaties.com/sipuedo/wp-content/uploads/2017/11/test.jpg?resize=300%2C211&ssl=1 "Imagnes de la versión antigua y la nueva")](https://i1.wp.com/javiermaties.com/sipuedo/wp-content/uploads/2017/11/test.jpg?ssl=1)

Antigua vs Nueva

Internamente, el panel del usuario para poder gestionar sus anuncios también se ha diseñado desde cero así como el del administrador.

En definitiva, lo que iba a ser un pequeño trabajo de *theming* se convirtió en un proyecto completo, el cual está funcionando bastante bien.

pd: no se cual ha sido el equipo de desarrollo anterior, pero con mensajes como éste en el código, me han ganado, eso es comentar y lo demás tontería.

[![codigo](https://i1.wp.com/javiermaties.com/sipuedo/wp-content/uploads/2017/11/C-5S7iPW0AAD_xX.jpg_large.jpg?resize=615%2C69&ssl=1 "codigo")](https://i1.wp.com/javiermaties.com/sipuedo/wp-content/uploads/2017/11/C-5S7iPW0AAD_xX.jpg_large.jpg?ssl=1)