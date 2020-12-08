---
templateKey: blog-post
title: Drupal 8, mucho más que corazón
date: 2017-02-04T23:00:00.000Z
tags:
  - desarrollo
  - drupal
  - drupal8
---


He de reconocerlo… me encanta [Drupal](https://www.drupal.org/) y su actual rama 8 mucho más 

[Hace unos meses](https://www.javiermaties.com/sipuedo/2016/11/28/drupal-8-el-mejor-corazon-para-un-desarrollo/) escribía que estamos usando Drupal 8 en [Geekia](https://geekia.es/) como parte del desarrollo de una App. Esta última semana decidí actualizar a la versión 0.40 del framework que usamos, [React Native](https://facebook.github.io/react-native/), ya que necesitaba una serie de módulos que solo funcionaban a partir de esta versión. Aunque se puede actualizar a través de CLI con *[react–native–git–upgrade,](https://facebook.github.io/react-native/releases/next/docs/upgrading.html)* no paraba de darme errores con algunos de los módulos. Así que la mejor forma ha sido con una instalación limpia. Salvo algunos “problemillas”, con fácil solución, creo que ha sido lo más sencillo.

Una mejora notable ha sido el menor consumo en la App, de momento los esfuerzos se centran en la versión iOS, así como una mejor compatibilidad con algunos módulos.\
`"dependencies": {
"base-64": "^0.1.0",
"react": "15.4.2",
"react-native": "^0.40.0",
"react-native-checkbox-field": "^1.1.2",
"react-native-datepicker": "^1.4.3",
"react-native-extended-stylesheet": "^0.3.1",
"react-native-keyboard-aware-scroll-view": "^0.2.6",
"react-native-linear-gradient": "^2.0.0",
"react-native-maps": "^0.13.0",
"react-native-push-notification": "^2.2.1",
"react-native-qr-barcode": "^0.6.4",
"react-native-radio-buttons": "^0.14.0",
"react-native-router-flux": "^3.37.0",
"react-native-swiper": "^1.5.4",
"react-native-vector-icons": "^4.0.0",
"react-redux": "^5.0.2",
"redux": "^3.6.0",
"redux-thunk": "^2.2.0"
}`\
Pero, donde más se ha notado el cambio, ha sido con Drupal ya que a partir de ahora y gracias al módulo [Push Notifications](https://www.drupal.org/project/push_notifications), va a ser tambien el encargado del envio de push a los dispositivos en vez de [parse](https://parseplatform.github.io/) que fue con el que comenzamos.

[![Crear una notificacion en Drupal](https://i1.wp.com/javiermaties.com/sipuedo/wp-content/uploads/2017/02/Captura-de-pantalla-2017-02-05-a-las-12.58.08.png?resize=1294%2C916&ssl=1 "Crear una notificacion en Drupal")](https://i1.wp.com/javiermaties.com/sipuedo/wp-content/uploads/2017/02/Captura-de-pantalla-2017-02-05-a-las-12.58.08.png?ssl=1)

De esta forma Drupal pasa a ser también el “cerebro” de la App ya que, además de gestionar los usuarios, las ofertas y la geoposición de los establecimientos, será también el encargado del envio de notificaciones a los dispositivos (rules)

> Ésta va a ser la primera App en la que Geekia se ha encargado de todo el diseño, desarrollo, lógica de funcionamiento…