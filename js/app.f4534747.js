(function(e){function a(a){for(var n,i,c=a[0],l=a[1],s=a[2],u=0,d=[];u<c.length;u++)i=c[u],Object.prototype.hasOwnProperty.call(t,i)&&t[i]&&d.push(t[i][0]),t[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);f&&f(a);while(d.length)d.shift()();return r.push.apply(r,s||[]),o()}function o(){for(var e,a=0;a<r.length;a++){for(var o=r[a],n=!0,i=1;i<o.length;i++){var c=o[i];0!==t[c]&&(n=!1)}n&&(r.splice(a--,1),e=l(l.s=o[0]))}return e}var n={},i={app:0},t={app:0},r=[];function c(e){return l.p+"js/"+({comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4",tema5:"tema5"}[e]||e)+"."+{"chunk-0206bfa0":"0dadfe29","chunk-04b93936":"17ff9977","chunk-13a6037e":"7f98b78d","chunk-16015154":"72be0535","chunk-17977988":"deeb6e2e","chunk-2c06842c":"434a6a5d","chunk-2d208d90":"57de751f","chunk-2d21d0e2":"aa8dc37c","chunk-2d22c123":"ed847a4a","chunk-2e80bb9a":"e55e12ea","chunk-3145fe0f":"46fecfdb","chunk-328f70dd":"c1b4f9f5","chunk-3807499c":"9a1aec9f","chunk-3c94cd2f":"94da48e1","chunk-3dc647fd":"0b4da586","chunk-4cdd78c0":"6f4ad504","chunk-515a8379":"01fd35e5","chunk-53ccb27e":"4db5f727","chunk-59974754":"f0192976","chunk-766a929b":"263e7452","chunk-839300a6":"d15fd4bd","chunk-c796899c":"8908bca0",comple:"1fe1aa25",creditos:"82949c5e",glosario:"655ad3c2",intro:"66555e67",referencias:"ad364e54",tema1:"b018d99b",tema2:"106573b5",tema3:"edee37fe",tema4:"864e84e5",tema5:"020dd0c6"}[e]+".js"}function l(a){if(n[a])return n[a].exports;var o=n[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,l),o.l=!0,o.exports}l.e=function(e){var a=[],o={"chunk-04b93936":1,"chunk-16015154":1,"chunk-17977988":1,"chunk-3145fe0f":1,"chunk-328f70dd":1,"chunk-3807499c":1,"chunk-3c94cd2f":1,"chunk-3dc647fd":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-766a929b":1,"chunk-839300a6":1,comple:1,creditos:1,glosario:1,intro:1,referencias:1,tema1:1,tema3:1,tema4:1};i[e]?a.push(i[e]):0!==i[e]&&o[e]&&a.push(i[e]=new Promise((function(a,o){for(var n="css/"+({comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4",tema5:"tema5"}[e]||e)+"."+{"chunk-0206bfa0":"31d6cfe0","chunk-04b93936":"2cd5135e","chunk-13a6037e":"31d6cfe0","chunk-16015154":"d035a47c","chunk-17977988":"d035a47c","chunk-2c06842c":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2e80bb9a":"31d6cfe0","chunk-3145fe0f":"d035a47c","chunk-328f70dd":"d035a47c","chunk-3807499c":"d035a47c","chunk-3c94cd2f":"1dbe8d4a","chunk-3dc647fd":"d035a47c","chunk-4cdd78c0":"31d6cfe0","chunk-515a8379":"78c4f3e0","chunk-53ccb27e":"31d6cfe0","chunk-59974754":"92301eaa","chunk-766a929b":"3f92621d","chunk-839300a6":"b67dc245","chunk-c796899c":"31d6cfe0",comple:"ac7d6910",creditos:"36c387ae",glosario:"797b9f93",intro:"0e433876",referencias:"4faeb2e1",tema1:"e2ca115e",tema2:"31d6cfe0",tema3:"94849199",tema4:"3babd349",tema5:"31d6cfe0"}[e]+".css",t=l.p+n,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var s=r[c],u=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(u===n||u===t))return a()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){s=d[c],u=s.getAttribute("data-href");if(u===n||u===t)return a()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=a,f.onerror=function(a){var n=a&&a.target&&a.target.src||t,r=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=n,delete i[e],f.parentNode.removeChild(f),o(r)},f.href=t;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){i[e]=0})));var n=t[e];if(0!==n)if(n)a.push(n[2]);else{var r=new Promise((function(a,o){n=t[e]=[a,o]}));a.push(n[2]=r);var s,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=c(e);var d=new Error;s=function(a){u.onerror=u.onload=null,clearTimeout(f);var o=t[e];if(0!==o){if(o){var n=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+i+")",d.name="ChunkLoadError",d.type=n,d.request=i,o[1](d)}t[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:u})}),12e4);u.onerror=u.onload=s,document.head.appendChild(u)}return Promise.all(a)},l.m=e,l.c=n,l.d=function(e,a,o){l.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:o})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,a){if(1&a&&(e=l(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(l.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var n in e)l.d(o,n,function(a){return e[a]}.bind(null,n));return o},l.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(a,"a",a),a},l.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},l.p="",l.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=a,s=s.slice();for(var d=0;d<s.length;d++)a(s[d]);var f=u;r.push([0,"chunk-vendors"]),o()})({0:function(e,a,o){e.exports=o("56d7")},"52e5":function(e,a,o){e.exports=o.p+"img/cc.58a75e32.svg"},"56d7":function(e,a,o){"use strict";o.r(a);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("68f3"),i=function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("div",{staticClass:"app",attrs:{id:"app"}},[o("Header"),o("div",{staticClass:"contenedor-principal"},[o("AsideMenu"),o("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[o("router-view")],1)],1),o("BarraAvance"),o("Accesibilidad")],1)},t=[],r={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},c=r,l=o("2877"),s=Object(l["a"])(c,i,t,!1,null,null,null),u=s.exports,d=(o("d3b7"),o("3ca3"),o("ddb0"),o("b0c0"),o("2b0e")),f=o("8c4f"),m=o("ae58"),p=o("7e58");d["a"].use(f["a"]);var h=new f["a"]({routes:[{path:"/",name:"inicio",component:m["a"]},{path:"/introduccion",name:"introduccion",component:function(){return o.e("intro").then(o.bind(null,"5167"))}},{path:"/curso",name:"curso",component:p["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return o.e("tema1").then(o.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return o.e("tema2").then(o.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return o.e("tema3").then(o.bind(null,"eb46"))}},{path:"tema4",name:"tema4",component:function(){return o.e("tema4").then(o.bind(null,"3eb5"))}},{path:"tema5",name:"tema5",component:function(){return o.e("tema5").then(o.bind(null,"5029"))}}]},{path:"/glosario",name:"glosario",component:function(){return o.e("glosario").then(o.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return o.e("comple").then(o.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return o.e("referencias").then(o.bind(null,"64ef"))}},{path:"/creditos",name:"creditos",component:function(){return o.e("creditos").then(o.bind(null,"2e81"))}}],scrollBehavior:function(e,a){if(e.hash){var o={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?o:new Promise((function(e){setTimeout((function(){e(o)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),b=h,g=o("1c2c"),v=(o("a3a0"),{global:{componenteFormativo:"Sistema turístico: atractivo, facilidades, accesibilidad y servicios",descripcionCurso:"La información turística es una de las habilidades más importantes a desarrollar para el servicio de recepción hotelera. Los visitantes de los hoteles identifican a los recepcionistas del hotel como el personal capacitado y conocedor sobre cualquier información acerca del accionar de la cadena cultural y turística y/o de la actividad local. Por este motivo, esperan calidad y veracidad en la información que reciben y llevar a feliz término su actividad de ocio o trabajo.",imagenBannerPrincipal:o("bce2"),fondoBannerPrincipal:o("e6b0")},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",icono:"far fa-file-alt",numero:"1",titulo:"Turismo",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"1.1",titulo:"Tipología",hash:"t_1_1"},{icono:"far fa-file-alt",numero:"1.2",titulo:"Características",hash:"t_1_2"},{icono:"far fa-file-alt",numero:"1.3",titulo:"Sistema turístico",hash:"t_1_3"},{icono:"far fa-file-alt",numero:"1.4",titulo:"Producto turístico",hash:"t_1_4"},{icono:"far fa-file-alt",numero:"1.5",titulo:"Cadena de valor",hash:"t_1_5"}]},{nombreRuta:"tema2",icono:"far fa-file-alt",numero:"2",titulo:"Atractivo turístico",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"2.1",titulo:"Clasificación de los atractivos turísticos",hash:"t_2_1"},{icono:"far fa-file-alt",numero:"2.2",titulo:"Bienes y recursos turísticos",hash:"t_2_2"},{icono:"far fa-file-alt",numero:"2.3",titulo:"Zona turística",hash:"t_2_3"}]},{nombreRuta:"tema3",icono:"far fa-file-alt",numero:"3",titulo:"Información turística",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"3.1",titulo:"Características del informador turístico",hash:"t_3_1"},{icono:"far fa-file-alt",numero:"3.2",titulo:"Atención y orientación al visitante",hash:"t_3_2"},{icono:"far fa-file-alt",numero:"3.3",titulo:"Diferencia entre promoción e información turística",hash:"t_3_3"},{icono:"far fa-file-alt",numero:"3.4",titulo:"Fuentes de información turística",hash:"t_3_4"}]},{nombreRuta:"tema4",icono:"far fa-file-alt",numero:"4",titulo:"Ubicación espacial",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"4.1",titulo:"Puntos cardinales",hash:"t_4_1"},{icono:"far fa-file-alt",numero:"4.2",titulo:"Técnicas de ubicación y orientación",hash:"t_4_2"},{icono:"far fa-file-alt",numero:"4.3",titulo:"Puntos de referenciación en el destino",hash:"t_4_3"},{icono:"far fa-file-alt",numero:"4.4",titulo:"Mapas turísticos",hash:"t_4_4"}]},{nombreRuta:"tema5",icono:"far fa-file-alt",numero:"5",titulo:"Brindar información asertivamente",desarrolloContenidos:!0}],subMenu:[{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},referencias:[{referencia:"Boullón, R. (2006). Planificación del espacio turístico. Trillas. ",link:"http://prepacihuatlan.sems.udg.mx/sites/default/files/planificaciondelespacioturisticorobertoc.boullon.pdf"},{referencia:"Cobo, C. (2013). Orientación geográfica. La geoperspectiva integral. Geograficando, 9(9). ",link:"http://www.geograficando.fahce.unlp.edu.ar/article/view/GEOv09n09a03"},{referencia:"Comisión Europea, Fondo Monetario Internacional, Organización de Cooperación y Desarrollo Económico, Naciones Unidas y Вanco Mundial. (2008). Sistema de Cuentas Nacionales 2008. ",link:"https://www.cepal.org/sites/default/files/document/files/sna2008_web.pdf"},{referencia:"Coque, M. y Arroyo, E. (2017). Información y atención al visitante. Paraninfo."},{referencia:"FONTUR. (s. f.). Glosario. FONTUR Colombia. ",link:"https://fontur.com.co/es/glosario?q=es/glosario"},{referencia:"García, A. (1970). Clasificación de los recursos turísticos. Investigaciones Geográficas, 1(3). ",link:"https://doi.org/10.14350/rig.58846"},{referencia:"Luna, N. (s. f.). Comunicación Asertiva con turistas. FAVA - Formación en Ambientes Virtuales de Aprendizaje. SENA - Servicio Nacional de Aprendizaje. DOCPLAYER. ",link:"https://docplayer.es/19843613-Comunicacion-asertiva-con-turistas-fava-formacion-en-ambientes-virtuales-de-aprendizaje-sena-servicio-nacional-de-aprendizaje.html"},{referencia:"Martín, B. (2013). Cadena de valor en turismo. turismo y sostenibilidad. ",link:"https://turismoysostenibilidad.wordpress.com/2013/10/24/cadena-de-valor-en-turismo/"},{referencia:"OMT. (s. f.). Glosario de términos de turismo.",link:"https://www.unwto.org/es/glosario-terminos-turisticos"},{referencia:"Ruano, C. (2012). Promoción y comercialización de productos y servicios turísticos locales. Alianza Editorial."}],glosario:[{termino:"Plano cartesiano",significado:"se conoce como plano cartesiano a dos rectas numéricas perpendiculares, una horizontal y otra vertical, que se cortan en un punto llamado origen o punto cero. La finalidad del plano cartesiano es describir la posición o ubicación de un punto en el plano, la cual está representada por el sistema de coordenadas."}],complementario:[{texto:"Procolombia. (s.f.). Colombia.",tipo:"Página web",link:"https://colombia.travel/es"},{texto:"Comisión Europea, Fondo Monetario Internacional, Organización de Cooperación y Desarrollo Económico, Naciones Unidas y Вanco Mundial. (2008). Sistema de Cuentas Nacionales 2008.",tipo:"Libro",link:"https://unstats.un.org/unsd/nationalaccount/docs/sna2008spanish.pdf"},{texto:"García, A. (s. f.). Capítulo 2. Clasificación de los recursos turísticos.",tipo:"Capítulo",link:"http://www.igeograf.unam.mx/Geodig/antologia/index.html/pdf/2_garcia.pdf "},{texto:"Cobo, C. (2013). Orientación geográfica. La geoperspectiva integral. Geograficando, 9(9).",tipo:"Documento ",link:"http://www.geograficando.fahce.unlp.edu.ar/article/view/GEOv09n09a03"},{texto:"Luna, N. (s. f.). Comunicación Asertiva con turistas. FAVA - Formación en Ambientes Virtuales de Aprendizaje. SENA - Servicio Nacional de Aprendizaje. DOCPLAYER.",tipo:"Cartilla",link:"https://docplayer.es/19843613-Comunicacion-asertiva-con-turistas-fava-formacion-en-ambientes-virtuales-de-aprendizaje-sena-servicio-nacional-de-aprendizaje.html"},{texto:"OMT. (s. f.). Glosario de términos de turismo.",tipo:"Blog",link:"https://www.unwto.org/es/glosario-terminos-turisticos"}],creditos:{liderEquipo:[{nombre:"Maria Camila Garcia Santamaria",cargo:"Líder del equipo",centro:"Dirección General"}],contenidoInstruccional:[{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Asesor metodológico y pedagógico",centro:"Centro Industrial del Diseño y la Manufactura <br>Regional Santander"},{nombre:"Harbey Enrique Castelblanco",cargo:"Experto temático",centro:"Centro Nacional Colombo Alemán"},{nombre:"Leydy Jhuliana Jaramillo Mejía",cargo:"Diseñadora instruccional",centro:"Centro de Gestión Industrial "},{nombre:"Uriel Darío González Montoya",cargo:"Acompañamiento pedagógico",centro:"Centro Agropecuario La Granja <br>Regional Tolima"},{nombre:"Ana Catalina Córdoba Sus",cargo:"Revisora Metodológica y Pedagógica",centro:"Centro para la Industria de la Comunicación Gráfica <br>Regional Distrito Capital"}],desarrolloProducto:[{nombre:"Francisco José Lizcano Reyes",cargo:"Responsable del equipo",centro:"Centro Industrial del Diseño y la Manufactura <br>Regional Santander"},{nombre:"Leyson Fabian Castaño Perez",cargo:"Soporte organizacional",centro:"Centro de Comercio y Servicios <br>Regional Tolima"},{nombre:"Juan Carlos Tapias Rueda",cargo:"Diseño web",centro:"Centro Industrial del Diseño y la Manufactura <br>Regional Santander"},{nombre:"Zuleidy Maria Ruiz Torres",cargo:"Producción audiovisual",centro:"Centro de Comercio y Servicios <br>Regional Tolima"},{nombre:"Wilson Andrés Arenales Cáceres",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura <br>Regional Santander"},{nombre:"Gilberto Junior Rodríguez Rodríguez",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura <br>Regional Santander"},{nombre:"María Carolina Tamayo López",cargo:"Producción audiovisual",centro:"Centro de Comercio y Servicios <br>Regional Tolima"},{nombre:"Ángela María Maldonado Jaime",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura <br>Regional Santander"},{nombre:"Camilo Villamizar Lizcano",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura <br>Regional Santander"},{nombre:"Andres Mauricio Santaella Ochoa",cargo:"Soporte front-end",centro:"Centro Industrial del Diseño y la Manufactura <br>Regional Santander"},{nombre:"Andrea Paola Botello De la Rosa",cargo:"Desarrollo front-end",centro:"Centro Industrial del Diseño y la Manufactura <br>Regional Santander"},{nombre:"Rafael Augusto Mantilla López",cargo:"Validación de diseño y contenido",centro:"Centro Industrial del Diseño y la Manufactura <br>Regional Santander"}],gestoresRepositorio:[{nombre:"Milady Tatiana Villamil Castellanos",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios <br>Regional Tolima"}]}});n["a"].prototype.$config=v;var C=o("9224");n["a"].prototype.$package=C,new n["a"]({router:b,store:g["a"],render:function(e){return e(u)}}).$mount("#app")},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"4.0.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"3.0.3","vue":"^2.6.11","vue-router":"^3.2.0","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.12","@vue/cli-plugin-eslint":"^4.5.12","@vue/cli-plugin-router":"^4.5.12","@vue/cli-plugin-vuex":"^4.5.12","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.1.3","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.11"}}')},"9eb5":function(e,a,o){e.exports=o.p+"img/logo-sena-naranja.43e61d0f.svg"},a3a0:function(e,a,o){},bce2:function(e,a,o){e.exports=o.p+"img/banner-principal.0d48008a.svg"},e6b0:function(e,a,o){e.exports=o.p+"img/fondo-banner-principal.b2958589.png"}});
//# sourceMappingURL=app.f4534747.js.map