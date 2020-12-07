---
templateKey: blog-post
title: Drupal 8, el mejor corazón para un desarrollo
date: 2016-11-28T20:19:09.933Z
tags:
  - desarrollo
  - drupal
  - drupal8
---
Hace unos meses empezamos a trabajar con una empresa que tiene tiendas por toda España, la mayor parte del trabajo es y ha sido relacionado con el marketing, tanto *online* como *offline* pero ahora ha tocado la parte técnica, más concretamente en “mejorar” su programa de fidelización.

Actualmente cuentan con un programa de bonos los cuales se reparten en unas fechas determinadas del año. Para romper la estacionalidad decidimos crear unos bonos que se “consumirán” a través de una App. Salvo una serie de condiciones que nos exigió el cliente, algunas que no compartimos, nos aceptaron la creación de la app.

### Limpiando para mejorar

El primer problema con el que nos encontramos fue su ERP, aunque bastante potente, estaba un poco limitado para extraer datos, además de que necesitaba un saneo de los mismos. Estamos hablando de una bbdd de aproximadamente 500.000 usuarios, la gran mayoría recurrentes y repartidos por mucha parte de la geografía española. Esa “limpieza” se ha estado llevando a cabo durante estos últimos meses y gracias a la empresa desarrolladora del ERP se ha podido mejorar su conexión con el exterior, con una serie de **servicios web** tanto para la gestión de usuarios, como para el consumo de bonos.

### El corazón de la app

Una vez estaba resuelta la conexión, comenzamos con la creación de una API que “alimentaría” la propia app. Para ello decidimos usar… a ver si lo adivinas… pues si, **drupal** y más concretamente pensamos en la versión 8 ya que su desarrollo potenciando la omnicanalidad lo hace el más adecuado para ello, además de servirnos como banco de pruebas para el uso de esta nueva versión de nuestro [CMS favorito](http://geekia.es/tags/drupal) 

El desarrollo lo comenzamos con la versión 8.0.0, pero actualmente lo hemos migrado a la 8.2.0, con todo lo que ello ha [conllevado](https://www.drupal.org/docs/8/api/restful-web-services-api/restful-web-services-api-overview). Todos los servicios se han segurizado con OAuth 2.0, además del propio *basic_auth* del *core* de drupal. Desde el CMS se gestionan las ofertas que se mostrarán en la app así como la conexión con el gestor de notificaciones, para ello hemos usado [parse](https://parse.com/), y nos está dando muy buenos resultados.

Otra de las funcionalidades que se gestionan desde aquí, es la geoposición de las distintas tiendas que dispone el cliente, mediante la creación de un nodo específico y su correspondiente *service.*

Drupal 8 nos ha permitido integrar a través de su API REST, todo lo necesario para poder servir los datos de forma correcta y segura.

### …y por fin, la app

Para el desarrollo de la app hemos optado por un desarrollo híbrido y, aunque tenemos experiencia ya en [Ionic](http://ionicframework.com/), hemos elegido [React-Native](https://facebook.github.io/react-native/), a pesar de que solo hemos hecho un desarrollo (en [React](http://uxspain.com/2016/)), su flexibilidad y potencia nos hizo creer que era la mejor opción. De momento, y salvo el cambio tan rápido de versiones que están teniendo, lo cual no está del todo mal, pensamos que la opción ha sido la más acertada.

Durante esta fase, todavía en desarrollo, se ha tenido que “experimentar” muchísimo, tanto que daría para un nuevo post, eso si, por si os puede interesar los módulos que estoy usando son estos:\
`"dependencies": {
"base-64": "^0.1.0",
"immutable": "^3.8.1",
"parse": "^1.9.2",
"react": "^15.3.2",
"react-native": "^0.34.1",
"react-native-checkbox-field": "^1.0.8",
"react-native-datepicker": "^1.3.2",
"react-native-extended-stylesheet": "^0.2.0",
"react-native-linear-gradient": "^1.5.4",
"react-native-maps": "^0.8.2",
"react-native-nav": "^1.1.4",
"react-native-push-notification": "^2.1.1",
"react-native-qr-barcode": "^0.6.4",
"react-native-radio-buttons": "^0.11.0",
"react-native-remote-push": "^1.0.3",
"react-native-router-flux": "^3.26.16",
"react-native-side-menu": "^0.19.0",
"react-native-swiper": "^1.4.5",
"react-native-vector-icons": "^2.1.0",
"react-redux": "^4.4.5",
"redux": "^3.6.0",
"redux-thunk": "^2.0.1"
}`\
De ellos, sin duda alguna el que más me ha parecido “magia” ha sido [redux](https://github.com/reactjs/redux)… cómo he podido estar desarrollando sin conocer esta maravilla 

Para esta parte del desarrollo cambiamos del IDE (o editor) que estábamos usando hasta ahora, [NetBeans](https://netbeans.org/), por [Atom](https://atom.io/) con [Nuclide](https://nuclide.io/) y ya se ha convertido en nuestro editor de código de cabecera… tranquilos, [SublimeText](https://www.sublimetext.com/) todavía no lo he desinstalado y lo sigo usando para otros menesteres 

El soporte que tiene Nuclide de React-Native es sin duda alguna mejor que en otros editores, lógico por una parte ya que ha sido desarrollado también por los mismos, [Facebook](https://code.facebook.com/projects/)

Una vez todo funcione junto, el flujo de la app deberá ser como esto:

[![Flujo de la app](https://i1.wp.com/javiermaties.com/sipuedo/wp-content/uploads/2016/11/app.png?resize=504%2C523)](https://i1.wp.com/javiermaties.com/sipuedo/wp-content/uploads/2016/11/app.png)



Esperemos poder presentar el desarrollo muy pronto