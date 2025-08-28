<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 1
      h1 Activos de información
    
    .row.justify-content-center.mb-5
      .col-12(data-aos="fade-up")
        figure
          img(src='@/assets/curso/temas/tema1/img01.png', alt='Imagen decorativa')
    
    .row.justify-content-center
      .col-lg-10.col-12
        p(data-aos="fade-down") El punto de partida en un proceso de formación sobre gestión de la información, debe centrarse en los activos de información, ya que son ellos los que dan sentido a cualquier esfuerzo en materia de protección. No es posible implementar medidas de seguridad ni estructurar un sistema de gestión, si previamente no se ha definido qué se debe salvaguardar. Los activos representan el recurso esencial que se busca proteger y su identificación, clasificación y valoración, constituyen la base sobre la cual se toman decisiones estratégicas de seguridad. En este sentido, comenzar por los activos de información, permite establecer un enfoque claro y coherente, donde las acciones de protección no se aplican de forma genérica, sino con base en el valor real que cada activo representa para la organización.
        p.mb-5(data-aos="fade-down") A continuación, se presentan dos definiciones, la primera, teniendo de base el conocimiento y experiencia que pueden tener aquellas personas que ya entienden, conocen o han escuchado sobre seguridad de la información y la segunda, teniendo de base aquellas personas que no han escuchado del tema, pero que trabajan dentro de una organización:

    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col
        .tarjeta--container.row
          .col-xl.col-lg-6.tarjeta.tarjeta--C01.p-5
            .row.justify-content-center.mb-3
              .col-lg-4.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/tema1/img02.svg', alt='Imagen decorativa')(style="width: 85%")
              
            h4.text-center.text-white(data-aos="fade-down") Definición técnica
            p.mb-0.text-white(data-aos="fade-down") Hablar de un activo de información, es referirse a cualquier recurso que tenga valor para la organización y que se encuentre directa o indirectamente en el ciclo de vida de la información (teniendo en cuenta la creación, el procesamiento, el almacenamiento, la transmisión y/o la destrucción si es el caso), para desarrollar el modelo de negocio. Aquí se incluyen elementos tangibles e intangibles, entre los que se pueden nombrar las bases de datos, los sistemas de información, libros contables, documentos físicos o digitales, procedimientos, manuales, personal, infraestructura y conocimiento organizacional, entre otros.

          .col-xl.col-lg-6.tarjeta.tarjeta--C02.p-5
            .row.justify-content-center.mb-3
              .col-lg-4.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/tema1/img03.svg', alt='Imagen decorativa')(style="width: 85%")
              
            h4.text-center.text-white(data-aos="fade-down") Definición general
            p.mb-0.text-white(data-aos="fade-down") Se puede llamar activo de información a todos aquellos recursos que usan las empresas para guardar, manejar o compartir información de interés para la organización. Hay que tener en cuenta, que la importancia no solo radica en los computadores o los archivos contenidos, aquí también entran los manuales del trabajo, las hojas de cálculo, los correos, las claves, incluso la experiencia y el conocimiento que tienen los empleados sobre su trabajo y todo aquello que tenga algún grado de información de la empresa y que permita su funcionamiento.
    
    .tarjeta.tarjeta--BG01.p-4.p-lg-5.mb-0
      .col-12
        .row.justify-content-center
          .col-lg-10.col-12
            .row.justify-content-center
              .col-lg-6.col-12.order-lg-1.order-2
                p(data-aos="fade-down") Todos estos activos son importantes para que la empresa funcione correctamente, de ahí que se debe garantizar su seguridad; de lo contrario, si se presenta afectación en alguno de ellos, se podrían presentar pérdidas para la organización, que podrían ir desde obstruir un proceso, demorar un servicio, cancelar un negocio, hasta la liquidación misma de la actividad comercial.
                p(data-aos="fade-down") Los activos de información son recursos que contienen datos valiosos para la organización y para la comunidad, por ello todas las empresas tienen que tenerlos identificados, actualizados y protegidos.
                p(data-aos="fade-down") Los activos de información se clasifican en diferentes tipos según su naturaleza. Esta tipología facilita su identificación, protección y gestión adecuada dentro de las organizaciones.
              .col-lg-6.col-12.order-lg-2.order-1.mb-3
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/tema1/img04.png', alt='Imagen decorativa')
    
    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Tipología
    
    .row.justify-content-center.mb-5
      .col-12(data-aos="fade-up")
        figure
          img(src='@/assets/curso/temas/tema1/img05.png', alt='Imagen decorativa')

    p.mb-5(data-aos="fade-down") La clasificación de los activos de información, permite a las organizaciones saber qué deben proteger y cómo lo deben hacer; asimismo, la tipología facilita su identificación, protección y gestión adecuada dentro de la empresa. A continuación, se comparte la tipología según la Agencia Nacional Digital (AND) en Colombia, con una breve descripción y unos ejemplos para su mayor comprensión:

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1.
          span <em>Tipología de activos de información (AND)</em>          
        .tabla-a.color-acento-contenido
          table
            thead
              tr(style="background-color: #DBCCFC")
                th(data-aos="fade-down")(style= "width: 20%") Tipo
                th(data-aos="fade-down")(style= "width: 40%") Descripción
                th(data-aos="fade-down")(style= "width: 40%") Ejemplo
            tbody
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Información
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Datos estructurados o no estructurados que aportan valor a los procesos.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Bases de datos de clientes, reportes de ventas, historiales de compras, archivos Excel, documentos Word, formularios físicos o digitales.
              tr
                td.text-bold(data-aos="fade-down") Tecnológicos o digitales
                td(data-aos="fade-down") Equipos y recursos tecnológicos que almacenan, procesan o transmiten información.
                td(data-aos="fade-down") Computadores, celulares, <em>software</em> contable, sistemas POS, licencias de Office, discos duros externos, sistemas en la nube, páginas <em>web</em>, redes Wi-Fi.
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Infraestructura física
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Espacios e instalaciones necesarias para operar los sistemas de información.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Oficinas, <em>routers</em>, cableado de red, servidores físicos, cámaras de seguridad, sistemas de energía, puntos de acceso inalámbrico.
              tr
                td.text-bold(data-aos="fade-down") Organizacional
                td(data-aos="fade-down") Conocimientos, procesos y estructuras organizativas que generan valor.
                td(data-aos="fade-down") Procedimientos internos, instructivos, modelos de negocio, políticas de atención al cliente, servicios ofrecidos, metodologías de operación o ventas.
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Recurso humano
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Personas que conocen, generan o acceden a información crítica.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Vendedores, auxiliares contables, técnicos de soporte, contratistas, personal de logística, socios con conocimientos específicos del negocio, directores de departamentos.
          figcaption Elaboración propia con base en la Agencia Nacional Digital (AND) de Colombia
              

    p.mb-5(data-aos="fade-down") Tomando de base la norma ISO/IEC 27002, marco reconocido internacionalmente para gestionar la seguridad de la información, la cual permite a las pymes identificar, clasificar y proteger los activos de forma estructurada, facilitando el cumplimiento normativo y la reducción de riesgos operativos; se comparte otra tabla de ejemplo con la tipología referenciada en ella, con el fin de que se tenga otra referencia, aportando mayor claridad y comprensión al respecto:

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col
        .titulo-sexto.color-acento-contenido
          h5 Tabla 2.
          span <em>Tipología de activos de información (ISO/IEC 27002)</em>
        .tabla-a.color-acento-contenido
          table
            thead
              tr(style="background-color: #DBCCFC")
                th(data-aos="fade-down")(style= "width: 20%") Tipo
                th(data-aos="fade-down")(style= "width: 40%") Descripción
                th(data-aos="fade-down")(style= "width: 40%") Ejemplo
            tbody
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Información
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Datos que tienen valor para la empresa, en formato físico o digital.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Facturas, contratos, listas de clientes, inventarios, bases de datos, hojas de cálculo, reportes financieros, correos electrónicos institucionales.
              tr
                td.text-bold(data-aos="fade-down") <em>Software</em>
                td(data-aos="fade-down") Programas, aplicaciones o sistemas utilizados para gestionar información.
                td(data-aos="fade-down") Sistemas contables (Siigo), CRM, aplicaciones de facturación, licencias de Windows, plataformas de ventas, <em>software</em> de diseño o gestión de inventario.
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") <em>Hardware</em>
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Dispositivos físicos que procesan, almacenan o transmiten información.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Computadores, impresoras, celulares corporativos, servidores, memorias USB, cámaras de seguridad, <em>routers</em>, escáneres.
              tr
                td.text-bold(data-aos="fade-down") Servicios
                td(data-aos="fade-down") Servicios que soportan procesos informáticos o de información.
                td(data-aos="fade-down") Internet, servicios en la nube (Google Drive, Dropbox), <em>hosting</em> <em>web</em>, correo electrónico corporativo, soporte técnico, servicios de almacenamiento externo.
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Personas
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Individuos que interactúan con la información de la organización.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Gerente, auxiliar contable, encargado de bodega, administrador de sistemas, vendedores, mensajero, contratistas, practicantes.
              tr
                td.text-bold(data-aos="fade-down") Conocimiento
                td(data-aos="fade-down") Saber técnico, experiencia y propiedad intelectual asociada al negocio.
                td(data-aos="fade-down") Manuales internos, procedimientos, <em>know-how</em>, recetas, metodologías propias, procesos operativos documentados, instrucciones técnicas.
        figcaption Elaboración propia con base en la norma ISO/IEC 27002
    
    .row.justify-content-center.mb-0
      .col-lg-10.col-12
        .cajon.cajon.C01.color-primario.p-4
          p.mb-0(data-aos="fade-down") Para clasificar los activos de información en una pyme, se recomienda aplicar una norma o estándar de base que permita seguir unas directrices, con el fin de facilitar la tarea y llevar una hoja de ruta que sirva de guía. 

    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Registro
    
    p.mb-5(data-aos="fade-down") El registro de activos de información, es el proceso que se realiza dentro de la empresa u organización, para identificar, documentar y mantener actualizada toda la información relacionada con los activos que contienen, procesan o respaldan datos que son de interés para la actividad comercial. A parte de tener conocimiento de los activos que existen, con el registro también se busca saber dónde se encuentran, quién los utiliza, quién los administra y qué valor tienen esos activos para la pyme.

    .row.justify-content-center
      .col-12.col-lg-11
        .row.justify-content-center.mb-5(style="display: flex; width: 100%; margin: auto;")
          .col-lg-7.col-12.order-lg-2.order-2
            p.mb-2(data-aos="fade-down") Con un buen registro de activos de información se puede:
            ul.lista-ul--color.mb-0(data-aos="fade-down")
              li.mb-2
                i.fas.fa-chevron-right
                | Tomar decisiones informadas en materia de seguridad.
              li.mb-2
                i.fas.fa-chevron-right
                | Asignar responsabilidades claras sobre cada uno de los activos de información.
              li.mb-2
                i.fas.fa-chevron-right
                | Evaluar y dar un tratamiento adecuado a los riesgos asociados a la información.
              li.mb-2
                i.fas.fa-chevron-right
                | Cumplir con la normatividad exigida, sobre todo, cuando se aplican estándares especializados, como por ejemplo la norma ISO/IEC 27001.
              li.mb-2
                i.fas.fa-chevron-right
                | Facilitar las auditorías y controles, especialmente cuando se cuenta con una fuente actualizada y confiable de los activos de información.
          .col-lg-4.col-md-7.col-12.mb-3.order-lg-1.order-1.mb-lg-0
            .row.justify-content-center(data-aos="flip-up")
              .col
                figure
                  img(src='@/assets/curso/temas/tema1/img06.svg', alt='Imagen decorativa')

    .tarjeta.tarjeta--BG02.p-4.p-lg-5.mb-5
      .col-12
        .row.justify-content-center
          .col-12
            p.mb-4(data-aos="fade-down") A continuación, se comparten los campos que se recomiendan para registrar los activos de información. Cabe destacar que muchas veces, estos campos pueden variar según las directrices de las empresas o la norma utilizada, pero por lo general tratan la misma información y son de gran ayuda para el inventario de activos:
            .col-lg-10.col-12
              .row.justify-content-center
                .col-lg-6.col-12.order-lg-1.order-2
                  ul.lista-ul--color.mb-0(data-aos="fade-down")
                    li.mb-2
                      i.fas.fa-asterisk
                      | Código o identificación del activo.
                    li.mb-2
                      i.fas.fa-asterisk
                      | Tipo de activo.
                    li.mb-2
                      i.fas.fa-asterisk
                      | Descripción.
                    li.mb-2
                      i.fas.fa-asterisk
                      | Ubicación.
                    li.mb-2
                      i.fas.fa-asterisk
                      | Responsable del activo.
                    li.mb-2
                      i.fas.fa-asterisk
                      | Valor o criticidad.
                    li.mb-2
                      i.fas.fa-asterisk
                      | Clasificación de seguridad (confidencial, pública, restringida...).
                    li.mb-3
                      i.fas.fa-asterisk
                      | Estado de conservación o uso.
                .col-lg-5.col-12.order-lg-2.order-1.mb-3
                  figure(data-aos="fade-up")
                    img(src='@/assets/curso/temas/tema1/img07.jpg', alt='Imagen decorativa')

    p.mb-5(data-aos="fade-down") Con el siguiente ejemplo, se da una idea de cómo se podría llenar una tabla que contenga el registro de los activos de información de una pyme:

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col
        .titulo-sexto.color-acento-contenido
          h5 Tabla 3.
          span <em>Registro de activos de información clasificados por el campo valor/criticidad</em>          
        .tabla-a.table.color-acento-contenido
          table
            thead
              tr(style="background-color: #DBCCFC")
                th(data-aos="fade-down")(style= "width: auto%") Código
                th(data-aos="fade-down")(style= "width: auto%") Tipo de activo
                th(data-aos="fade-down")(style= "width: auto%") Descripción
                th(data-aos="fade-down")(style= "width: auto%") Ubicación
                th(data-aos="fade-down")(style= "width: auto%") Responsable
                th(data-aos="fade-down")(style= "width: auto%") Valor / Criticidad
                th(data-aos="fade-down")(style= "width: auto%") Clasificación
                th(data-aos="fade-down")(style= "width: auto%") Estado de conservación / Uso
            tbody
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") AI-001
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Información
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Base de datos de clientes con información personal y comercial.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Servidor local
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Gerente de ventas
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Alta
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Confidencial
                td(data-aos="fade-down")(style="background-color: #F6F6F6") En uso / Actualizada
              tr
                td.text-bold(data-aos="fade-down") AI-002
                td(data-aos="fade-down") Tecnológico / Digital
                td(data-aos="fade-down") Computador del administrador con <em>software</em> contable y nómina.
                td(data-aos="fade-down") Oficina principal
                td(data-aos="fade-down") Administrador general
                td(data-aos="fade-down") Alta
                td(data-aos="fade-down") Confidencial
                td(data-aos="fade-down") En uso / Buen estado
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") AI-003
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Información
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Registros contables y financieros electrónicos.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Sistema contable en la nube
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Asistente contable
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Alta
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Confidencial
                td(data-aos="fade-down")(style="background-color: #F6F6F6") En uso / Accesible
              tr
                td.text-bold(data-aos="fade-down") AI-004
                td(data-aos="fade-down") Recurso humano
                td(data-aos="fade-down") Empleado con acceso privilegiado a datos sensibles.
                td(data-aos="fade-down") Oficina administrativa
                td(data-aos="fade-down") Jefe de talento humano
                td(data-aos="fade-down") Alta
                td(data-aos="fade-down") Confidencial
                td(data-aos="fade-down") Activo / Funciones críticas
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") AI-005
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Información
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Contratos con proveedores y clientes.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Archivador físico y digital
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Auxiliar administrativo
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Media
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Restringida
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Conservados / Acceso controlado
              tr
                td.text-bold(data-aos="fade-down") AI-006
                td(data-aos="fade-down") Tecnológico / Digital
                td(data-aos="fade-down") Página <em>web</em> con formulario de contacto y base de datos simple.
                td(data-aos="fade-down") <em>Hosting</em> externo
                td(data-aos="fade-down") Coordinador de TI
                td(data-aos="fade-down") Media
                td(data-aos="fade-down") Pública
                td(data-aos="fade-down") En uso / Actualizada
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") AI-007
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Organizacional
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Procedimientos internos de operaciones y logística.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Carpeta compartida
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Director de operaciones
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Media
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Interna
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Vigente / En revisión periódica
              tr
                td.text-bold(data-aos="fade-down") AI-008
                td(data-aos="fade-down") Infraestructura física
                td(data-aos="fade-down") Red Wi-Fi interna de uso empresarial.
                td(data-aos="fade-down") Oficina principal
                td(data-aos="fade-down") Coordinador de TI
                td(data-aos="fade-down") Media
                td(data-aos="fade-down") Restringida
                td(data-aos="fade-down") Operativa / Estable
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") AI-009
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Tecnológico / Digital
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Impresora compartida conectada en red local.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Sala administrativa
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Auxiliar administrativo
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Baja
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Interna
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Operativa / Uso frecuente
              tr
                td.text-bold(data-aos="fade-down") AI-010
                td(data-aos="fade-down") Información
                td(data-aos="fade-down") Manuales de uso de equipos menores (cafetera, archivador).
                td(data-aos="fade-down") Cocina / Tablero físico
                td(data-aos="fade-down") Servicios generales
                td(data-aos="fade-down") Baja
                td(data-aos="fade-down") Pública
                td(data-aos="fade-down") Vigente / Consultado ocasionalmente
                
    p.mb-5(data-aos="fade-down") Teniendo en cuenta que el campo Estado de conservación / Uso, es uno de los que más puede causar confusión, en la siguiente tabla se amplía con descripciones y nuevos ejemplos, para que se puedan afianzar más los conocimientos y su aprendizaje:

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col
        .titulo-sexto.color-acento-contenido
          h5 Tabla 4.
          span <em>Opciones para el campo “Estado de conservación / Uso”</em>          
        .tabla-a.color-acento-contenido
          table
            thead
              tr(style="background-color: #DBCCFC")
                th(data-aos="fade-down")(style= "width: 20%") Estado sugerido
                th(data-aos="fade-down")(style= "width: 40%") Descripción
                th(data-aos="fade-down")(style= "width: 40%") Ejemplo de aplicación
            tbody
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Activo / En uso
                td(data-aos="fade-down")(style="background-color: #F6F6F6") El activo está operativo y siendo utilizado actualmente.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Computador de ventas, base de datos en producción.
              tr
                td.text-bold(data-aos="fade-down") Activo / Consulta ocasional
                td(data-aos="fade-down") El activo se usa esporádicamente, pero sigue disponible.
                td(data-aos="fade-down") Manual de procesos antiguos, informes históricos.
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Operativo / Requiere mantenimiento
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Funciona, pero requiere ajustes o revisión técnica.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") <em>Router</em> con fallas intermitentes, impresora con atascos.
              tr
                td.text-bold(data-aos="fade-down") Archivado / Conservado
                td(data-aos="fade-down") No se usa, pero se guarda por razones legales o administrativas.
                td(data-aos="fade-down") Contratos de años anteriores, respaldos de contabilidad.
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Obsoleto / En desuso
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Ya no se utiliza, ni se considera útil, pero aún no ha sido eliminado formalmente.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") <em>Software</em> incompatible, equipos sin soporte.
              tr
                td.text-bold(data-aos="fade-down") En evaluación / En prueba
                td(data-aos="fade-down") Activo en fase de prueba o pendiente de implementación formal.
                td(data-aos="fade-down") Nueva plataforma CRM en piloto, nuevo protocolo de seguridad.
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Dañado / Inservible
                td(data-aos="fade-down")(style="background-color: #F6F6F6") No operativo; requiere reparación o eliminación.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Disco duro con daño físico, equipo con pantalla rota.
              tr
                td.text-bold(data-aos="fade-down") Extraviado / No localizado
                td(data-aos="fade-down") El activo no ha sido encontrado en su ubicación habitual.
                td(data-aos="fade-down") USB sin registro, documento físico perdido.
    
    p.mb-5(data-aos="fade-down") Como se percibe en los ejemplos anteriores, los campos del registro no necesitan llenarse exclusivamente con datos tomados de listas estandarizadas. Lo más importante es que cada pyme pueda comenzar a organizar su inventario de activos, según su realidad, construyendo un diccionario de datos propio que oriente la clasificación. En este proceso, es habitual que se nombren o clasifiquen activos por primera vez, lo cual contribuye al fortalecimiento de su gestión informacional.
    
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-0(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img08.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") Un claro ejemplo de esta flexibilidad se encuentra en el campo Estado de conservación / Uso, donde se han empleado diferentes expresiones como (En uso / Actualizado), (Operativo / Estable), (Archivado / Conservado) u (Obsoleto / En desuso). Aunque todas son válidas, su elección depende de cómo la empresa percibe y gestiona cada activo. Lo importante es mantener criterios claros y consistentes, aunque sean propios y que puedan evolucionar conforme madure el sistema de gestión de información.

    separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3 Valoración
    
    p.mb-5(data-aos="fade-down") La valoración de los activos de información, es el proceso que puede utilizar una pyme para determinar el nivel de importancia o criticidad de cada uno de sus activos, logrando con ello establecer prioridades en su protección y administración. Esta valoración puede estipularse por el impacto que podría tener la pérdida, alteración o divulgación no autorizada de la información contenida en el activo, teniendo de base tres puntos fundamentales de la seguridad de la información: 

    .row.mb-5
      .col-lg-4.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/img09.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C03(style= "width: 100%")
            .p-4(data-aos="fade-down")
              h4.text-center Confidencialidad
              p.mb-0.text-center ¿Qué consecuencias tendría si personas no autorizadas acceden a la información?

      .col-lg-4.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/img10.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C03(style= "width: 100%")
            .p-4(data-aos="fade-down")
              h4.text-center Integridad
              p.mb-0.text-center ¿Qué pasaría si la información fuera alterada o modificada sin previa autorización?

      .col-lg-4.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/img11.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C03(style= "width: 100%")
            .p-4(data-aos="fade-down")
              h4.text-center Disponibilidad
              p.mb-0.text-center ¿Qué impacto tendría que el activo no estuviese disponible cuando se necesite?

    .row.justify-content-center.mb-4
      .col-lg-10.col-12
        p.mb-0(data-aos="fade-down") Según la experiencia, naturaleza o actividad de la organización, cada una de ellas podrá definir las escalas de valoración, según su contexto; pero hay que tener en cuenta que una buena escala de valoración permitirá priorizar medidas de protección, basadas en el nivel de criticidad, ayudar a asignar recursos de seguridad en forma eficiente, además de contar con un insumo esencial para la gestión de riesgos. En ese orden de ideas, la clasificación de activos de información por su valoración, tomando de base normas como la ISO/IEC 27005:2022, ISO/IEC 27001 e ISO/IEC 27002, se recomienda trabajarlas con las siguientes escalas de valoración: 
    
    .row.justify-content-center
      .col-12.mb-4
        figure.movil
          img(src='@/assets/curso/temas/tema1/img12.svg', alt='Imagen decorativa')
      .col-lg-10.col-12
        ImagenInfografica.color-acento-botones.desktop(data-aos="zoom-in")
          template(v-slot:imagen)
            figure.mb-5
              img(src='@/assets/curso/temas/tema1/img13.svg', alt="Imagen decorativa")
          .tarjeta.color-acento-botones.p-3(x="95%" y="28%" numero="+")
            p <b>Ejemplo</b>: base de datos de clientes, información financiera, claves de acceso a plataformas.
          .tarjeta.color-acento-botones.p-3(x="95%" y="49%" numero="+")
            p <b>Ejemplo</b>: manuales de operación, correos internos, <em>software</em> de facturación.
          .tarjeta.color-acento-botones.p-3(x="95%" y="73%" numero="+")
            p <b>Ejemplo</b>: publicidad impresa antigua, catálogos públicos, archivos duplicados no sensibles.

    p.mb-0(data-aos="fade-down") Tal como se ha podido analizar anteriormente, una buena valoración permite a las organizaciones identificar cuáles recursos requieren mayor protección, según su importancia para la actividad del negocio y la toma de decisiones. Este proceso ayuda en las acciones que hay que tomar en seguridad, la optimización de recursos y en las garantías que se dan para que los activos, principalmente los más críticos, puedan gestionarse de forma adecuada. De ahí, que, para las pymes, su implementación ayuda a fortalecer la confianza, la continuidad del negocio y mantener un mayor control sobre la información.
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
