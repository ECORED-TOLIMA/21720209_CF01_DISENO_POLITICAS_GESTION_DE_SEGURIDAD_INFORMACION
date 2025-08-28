<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 3
      h1 Gestión de riesgo
    
    .row.justify-content-center.mb-5
      .col-12(data-aos="fade-up")
        figure
          img(src='@/assets/curso/temas/tema3/img01.png', alt='Imagen decorativa')
    
    p.mb-0(data-aos="fade-down") La gestión de riesgos en seguridad de la información, es el proceso que identifica, analiza y controla las amenazas que pueden afectar a los activos de información; por ende, entender este proceso, permite que se puedan gestionar decisiones estratégicas que fortalezcan la protección de la información y garanticen la continuidad del negocio. Para mayor comprensión, se abordarán aspectos claves que permitan estructurar una gestión efectiva del riesgo, tocando desde un concepto más profundo, hasta las fases que conforman un tratamiento sistemático.

    separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Concepto
    
    p.mb-5(data-aos="fade-down") Para comprender mejor que significa gestionar riesgos en seguridad de la información, se proporcionarán unas definiciones desde el punto técnico y desde una visión general y se apoyarán dichos conceptos con ejemplos de la vida cotidiana, realidades que son comunes en las pymes colombianas, de tal manera que se dimensione el porqué de su importancia y se justifique su aplicación: 

    LineaTiempoE.color-primario.mb-5
      .row.justify-content-center(titulo="01" subtitulo="")
        .col-lg-10.mb-4.mb-lg-0.order-lg-2.order-2(data-aos="fade-down")
          h4 Definición técnica
          p Consiste en identificar, priorizar, controlar y supervisar las amenazas que pueden afectar los sistemas de información y los activos digitales de una organización (IBM, 2024b).
          p La gestión de riesgos en ciberseguridad es un proceso enfocado en identificar, analizar, medir y controlar los riesgos que afectan la seguridad de la información. Su propósito es anticiparse a las amenazas mediante la implementación de controles preventivos que reduzcan su impacto. Esta gestión se aplica en diversos ámbitos de la organización y requiere que los responsables reconozcan los riesgos que pueden afectar sus objetivos. De hecho, más del 70 % de las empresas ha experimentado problemas relacionados con la ciberseguridad, sin importar su tamaño o sector (Grupo Cibernos, s.f.).
        .col-lg-2.col-6.order-lg-1.order-1.mb-3(data-aos="fade-up")
          figure
            img(src='@/assets/curso/temas/tema3/img02.svg', alt='Imagen decorativa')

      .row.justify-content-center(titulo="02" subtitulo="")
        .col-lg-10.mb-4.mb-lg-0.order-lg-2.order-2(data-aos="fade-down")
          h4 Definición general
          p La gestión de riesgos en seguridad de la información consiste en identificar los peligros que pueden afectar la información de una empresa, tales como los ataques por internet, los errores humanos o la pérdida de datos, entre otros. Esta gestión sirve para que se puedan tomar decisiones y aplicar medidas que ayuden a prevenir esos problemas antes de que ocurran, protegiendo así la información del negocio y evitando pérdidas o interrupciones.
        .col-lg-2.col-6.order-lg-1.order-1.mb-3(data-aos="fade-up")
          figure
            img(src='@/assets/curso/temas/tema3/img03.svg', alt='Imagen decorativa')

    p.mb-5(data-aos="fade-down") Para comprender mejor cómo se aplica la gestión de riesgos en la seguridad de la información, es útil revisar unos ejemplos desde la realidad de las pymes colombianas; estas situaciones permiten visualizar los riesgos comunes y formas en que pueden prevenirse o disminuirse con acciones sencillas pero efectivas:

    .row.justify-content-center.mb-5(data-aos="flip-up")(style="display: flex; width: 100%; margin: auto;")
      .col-lg-8.col-12.mb-md-0
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--C04")
          .row(titulo="Taller de confecciones Gala")
            .col-12.mb-0.mb-md-0
              p En el taller de confecciones Gala, en el centro de Medellín, los pedidos, las fechas de entrega, las cantidades y los datos de contacto de los clientes, se registran en un computador portátil. Un día por accidente, el computador se extravía y la empresa no puede cumplir con varios encargos, lo que genera incumplimiento a la empresa, pérdidas económicas y mala imagen ante los clientes que esperaban el pedido.
              p Esta situación evidencia un riesgo claro, ya que la pérdida de información es crítica, por no contar con los respaldos. Una gestión de riesgos adecuada habría permitido identificar este peligro y tomar medidas preventivas, como almacenar copia de la información en Google Drive o en un disco externo.
          .row(titulo="Papelería Maicao")
            .col-12.mb-0.mb-md-0
              p La papelería Maicao, ubicada en Fontibón, guarda la información de su inventario, proveedores y cuentas por pagar en el computador de escritorio que maneja la administradora de la papelería, el cual no cuenta con antivirus, mucho menos actualizaciones recientes de su sistema operativo. El hijo de la administradora, que pasó la mañana en la papelería, ya que no pudo ir a clases porque ese día la habían suspendido, decidió descargar Roblox para no pasarse el rato aburrido. Estuvo jugando con otros usuarios durante dos horas, tiempo en el que interactuaron vía chat e intercambiaron algunos archivos para aprovechar algunos recursos del juego. De repente el sistema se bloqueó y lo archivos quedaron inutilizables por un <em>ransomware</em>.
              p Este incidente pudo haberse prevenido si se hubiera aplicado una gestión de riesgos básica que incluyera medidas como el uso de <em>software</em> de protección, copia de seguridad de los datos, así como políticas de restricción de uso de equipos para labores de la papelería por personal autorizado.
          .row(titulo="Finca de cría y venta de cabras en la Guajira")
            .col-12.mb-0.mb-md-0
              p En la finca La Costa, ubicada en la Guajira, se realiza el seguimiento del crecimiento, alimentación y vacunación de los animales en una libreta física. Un día, un fuerte aguacero que se inicia de repente, moja parte de la libreta que se encontraba recostada a una de las madrinas del corral, dañando algunos registros. Por el aguacero, tuvieron que suspender la vacunación y desparasitación de los animales. Dos semanas después retomaron el proceso, pero cómo parte de las hojas que contenían esa información habían sido dañadas por el agua, les tocó realizar el procedimiento nuevamente a todos los animales, incluyendo los que habían vacunado y desparasitado en la jornada anterior.
              p Con una adecuada gestión de riesgos, se habrían tomado correctivos, entendiendo que el uso de registros físicos sin copia era un punto vulnerable. Como acción, se podrían tener digitalizado los datos en una aplicación sencilla o en Excel, respaldadas en el celular o en la nube. Esto garantizaría la continuidad del negocio, aún frente a incidentes climáticos o imprevistos.
                  
      .col-lg-4.col-6.col-md-6.col-8.order-lg-2.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/tema3/img04.png', alt='Imagen decorativa')
    
    .row.justify-content-center.mb-0
      .col-lg-10.col-12
        .cajon.cajon.C01.color-primario.p-4
          p.mb-0(data-aos="fade-down") Comprender qué es la gestión de riesgos en seguridad de la información, permite a las pymes anticiparse a las amenazas que puedan afectar sus procesos y activos de información. Identificar y analizar los riesgos no solo ayuda a prevenir pérdidas, sino que fortalece la toma de decisiones y promueve una cultura organizacional más segura y preparada ante posibles incidentes.

    separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Tipos de riesgo
    
    .tarjeta.tarjeta--BG01.p-4.p-lg-5.mb-5
      .col-12
        .row.justify-content-center
          .col-12
            .row.justify-content-center
              .col-lg-7.col-12.order-lg-1.order-2
                p(data-aos="fade-down") Al buscar en diferentes fuentes, es fácil deducir que hay múltiples formas de clasificar los riesgos de seguridad de la información, esto se da por la diversidad de enfoques y contextos organizacionales. Lo variado de estas clasificaciones es porque los riesgos pueden provenir de ámbitos técnicos, humanos, físicos, procedimentales o de terceros, según el objetivo o la experiencia de cada modelo de gestión. Esta multiplicidad de perspectivas se confirma en estudios académicos que revisan y comparan las diferentes taxonomías de riesgos en entornos de seguridad de la información (Rabitti et al., 2025).
                p(data-aos="fade-down") Por lo anterior, se relaciona una clasificación detallada de los tipos de riesgos en seguridad de la información, donde se presenta una visión amplia y actualizada de las principales amenazas, tales como ciberataques, brechas de seguridad, fallos tecnológicos o riesgos de cumplimiento, que reflejan la diversidad de escenarios que enfrentan las organizaciones en la práctica y cuya perspectiva aplicada facilita la identificación y el manejo de riesgos en entornos reales (GRCTools, s.f.): 
              .col-lg-4.col-12.order-lg-2.order-1.mb-3
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/tema3/img05.png', alt='Imagen decorativa')
    
    .tarjeta.tarjeta--BG03.p-4.p-md-5.mb-5
      LineaTiempoC.color-acento-botones(text-small)(data-aos="flip-up")
        .row(titulo="Ciberseguridad")
          .col-lg-7.mb-4.mb-md-0.order-lg-2.order-2
            h4 Ciberseguridad
            p Amenazas digitales que pueden comprometer los sistemas o la confidencialidad de los datos.
            p <b>Riesgo</b>: <em>malware</em>, <em>phishing</em>, ataques DDoS, ingeniería social, filtración de información.
          .col-lg-5.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img07.jpg', alt='Imagen decorativa')
        .row(titulo="Infraestructura")
          .col-lg-7.mb-4.mb-md-0.order-lg-2.order-2
            h4 Infraestructura tecnológica
            p Riesgos derivados de fallos físicos, tecnológicos o eventos naturales que afectan los sistemas o la operación tecnológica.
            p <b>Riesgo</b>: caídas de servidores, errores de <em>software</em>, incendios, terremotos.
          .col-lg-5.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img06.jpg', alt='Imagen decorativa')
        .row(titulo="Acceso")
          .col-lg-7.mb-4.mb-md-0.order-lg-2.order-2
            h4 Acceso y autenticación
            p Vulnerabilidades relacionadas con el ingreso indebido a sistemas o la debilidad en los mecanismos de verificación.
            p <b>Riesgo</b>: contraseñas débiles, accesos sin permisos, ausencia de autenticación multifactor.
          .col-lg-5.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img08.jpg', alt='Imagen decorativa')
        .row(titulo="Cumplimiento")
          .col-lg-7.mb-4.mb-md-0.order-lg-2.order-2
            h4 Cumplimiento y regulaciones
            p Incumplimiento de normativas legales o falta de políticas internas que regulen la seguridad de la información.
            p <b>Riesgo</b>: falta de cumplimiento de GDPR, HIPAA; ausencia de procedimientos documentados.
          .col-lg-5.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img09.jpg', alt='Imagen decorativa')
        .row(titulo="Riesgos")
          .col-lg-7.mb-4.mb-md-0.order-lg-2.order-2
            h4 Riesgos humanos
            p Comportamientos, errores o negligencias del personal que exponen los sistemas o los datos a amenazas.
            p <b>Riesgo</b>: errores accidentales, empleados que actúan con intención de dañar.
          .col-lg-5.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img10.jpg', alt='Imagen decorativa')
        .row(titulo="Terceros")
          .col-lg-7.mb-4.mb-md-0.order-lg-2.order-2
            h4 Terceros
            p Amenazas que provienen de empresas o individuos externos que acceden o manejan información de la organización.
            p <b>Riesgo</b>: fallas de proveedores, subcontratistas con manejo de datos sensibles.
          .col-lg-5.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img11.jpg', alt='Imagen decorativa')
    
    .row.justify-content-center.mb-5
      .col-lg-10.col-12
        p.mb-0(data-aos="fade-down") Para mayor comprensión de los tipos de riesgos compartidos previamente, se exponen ejemplos situacionales dentro de una pyme que permiten entender mejor cada uno de ellos: 
    
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--C04")
      .row.justify-content-center.p-4(titulo="Ciberseguridad")
        .col-lg-6.order-lg-1.order-2
          p Una tienda virtual de productos artesanales es víctima de un ataque de <em>ransomware</em> que cifra toda su base de datos de clientes, pedidos e inventario. Los ciberdelincuentes solicitan un rescate en criptomonedas para liberar la información. La empresa no contaba con copias de seguridad actualizadas y se ve obligada a suspender sus operaciones por varios días, perdiendo ventas y afectando su reputación.
        .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          figure
            img(src='@/assets/curso/temas/tema3/img12.jpg', alt='Imagen decorativa')
      .row.justify-content-center.p-4(titulo="Infraestructura tecnológica")
        .col-lg-6.order-lg-1.order-2
          p Un taller industrial sufre un daño eléctrico por un cortocircuito, lo cual afecta el servidor donde almacena cotizaciones, facturación y archivos técnicos de los equipos. La ausencia de un sistema de respaldo de energía y una copia de seguridad externa genera la pérdida total de información crítica para la operación del negocio.
        .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          figure
            img(src='@/assets/curso/temas/tema3/img13.jpg', alt='Imagen decorativa')
      .row.justify-content-center.p-4(titulo="Acceso y autenticación")
        .col-lg-6.order-lg-1.order-2
          p En un taller de diseño gráfico, varios colaboradores comparten la misma contraseña para acceder al servidor donde guardan los proyectos de clientes. Un exempleado, al que no se le revocaron los permisos, accede de forma remota y elimina varios archivos, causando retrasos en entregas importantes y pérdidas económicas.
        .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          figure
            img(src='@/assets/curso/temas/tema3/img14.jpg', alt='Imagen decorativa')
      .row.justify-content-center.p-4(titulo="Cumplimiento y regulaciones")
        .col-lg-6.order-lg-1.order-2
          p La clínica Perritos recolecta datos personales de sus clientes, sin contar con un aviso de privacidad ni mecanismos claros de protección de la información. Durante una inspección, es sancionada por la Superintendencia de Industria y Comercio, por incumplir la Ley 1581 de 2012 sobre protección de datos personales, enfrentando una multa y la obligación de implementar controles en poco tiempo.
        .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          figure
            img(src='@/assets/curso/temas/tema3/img15.jpg', alt='Imagen decorativa')
      .row.justify-content-center.p-4(titulo="Riesgos humanos")
        .col-lg-6.order-lg-1.order-2
          p En Cauchos El Estirón, un trabajador sin formación en gestión documental, elimina sin querer, una carpeta compartida en la nube, que contenía planos y diseños de un nuevo cliente. Esta pérdida obliga a repetir el trabajo desde cero, afectando la entrega y la confianza del cliente.
        .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          figure
            img(src='@/assets/curso/temas/tema3/img16.jpg', alt='Imagen decorativa')
      .row.justify-content-center.p-4(titulo="Terceros")
        .col-lg-6.order-lg-1.order-2
          p La distribuidora Frescos Bosconia, contrata a un proveedor externo para desarrollar una aplicación móvil de pedidos. El proveedor deja una vulnerabilidad abierta en el sistema, la cual es aprovechada por atacantes para robar información de clientes y suplantar pedidos. La empresa, al no haber firmado un contrato con cláusulas claras de seguridad, enfrenta la situación sola.
        .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          figure
            img(src='@/assets/curso/temas/tema3/img17.jpg', alt='Imagen decorativa')
    
    .tarjeta.tarjeta--BG02.p-4.p-lg-5.mb-0
      .col-12
        .row.justify-content-center
          .col-12
            .row.justify-content-center
              .col-lg-7.col-12.order-lg-2.order-2
                p(data-aos="fade-down") Identificar y comprender los diferentes tipos de riesgos en seguridad de la información, son pasos esenciales para las operaciones diarias, en las diferentes empresas y organizaciones. Teniendo en cuenta que la mayoría de empresas pequeñas como las pymes, carecen de infraestructura tecnológica robusta o de personal especializado, es de mucha ayuda conocer las amenazas más comunes, con el fin de que estén alertas y puedan ir tomando decisiones informadas, según las situaciones que se vayan presentando; asimismo, poder ir implementando medidas básicas de protección y previniendo pérdidas que puedan afectar gravemente la sostenibilidad y continuidad de las empresas. De ahí la importancia de que las directivas se sintonicen con una conciencia y acción temprana, para fortalecer la competitividad, frente a los clientes, aliados y entornos digitales cada vez más exigentes.
              .col-lg-5.col-12.order-lg-1.order-1.mb-3
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/tema3/img18.jpg', alt='Imagen decorativa')

    separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Fases
    p(data-aos="fade-down") La gestión de riesgos en seguridad de la información, según la norma ISO/IEC 27005, se desarrolla mediante un enfoque sistemático dividido en seis fases, cada una con un papel clave para proteger los activos. Dentro de la fase de evaluación del riesgo se integran tres subprocesos esenciales, que en algunos enfoques pueden presentarse como etapas independientes, lo que explica posibles variaciones al consultar otras fuentes. Este proceso no se limita a identificar amenazas, sino que busca actuar de forma preventiva y estratégica. Se aclara para que no se pierda la coherencia del enfoque normativo, al investigar otras fuentes.
    p.mb-5(data-aos="fade-down") Por lo anterior, a continuación, se detallan estas fases con su descripción, para facilitar su comprensión y aplicación en contextos empresariales, según la norma ISO/IEC 27005, a partir de It Governance (2022): 

    .tarjeta.tarjeta--BG04.p-4.p-lg-5.mb-5
      .tarjeta.tarjeta--blanca.p-4.p-lg-5
        PasosB.color-acento-botones(data-aos="flip-up")
          .row(titulo="")
            .col-lg-6.mb-4.mb-md-0.order-lg-1.order-2
              h4 Establecimiento del contexto
              p El contexto de la gestión de riesgos define las pautas para identificar los riesgos, asignar responsabilidades sobre su gestión, analizar su impacto en la confidencialidad, integridad y disponibilidad de la información, así como determinar cómo se evalúan la probabilidad y las consecuencias de su ocurrencia.
            .col-lg-6.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema3/img19.jpg', alt='Imagen decorativa')
          .row(titulo="")
            .col-lg-6.mb-4.mb-md-0.order-lg-1.order-2
              h4 Evaluación del riesgo
              p Comprende tres subprocesos interrelacionados:
              ul.lista-ul.mb-0(data-aos="fade-down")
                li
                  i.lista-ul__vineta
                  p.mb-0 <b>Identificación</b>: reconoce las amenazas, las vulnerabilidades y los activos que están expuestos a los posibles incidentes de seguridad.
                li
                  i.lista-ul__vineta
                  p.mb-0 <b>Análisis</b>: se estima la probabilidad y el impacto de los riesgos, además de hacer consideración de los controles existentes.
                li
                  i.lista-ul__vineta
                  p.mb-0 <b>Valoración</b>: se estiman y comparan los niveles de riesgo con criterios definidos, con el fin de decidir si hay necesidad de aplicar un tratamiento.
            .col-lg-6.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema3/img20.jpg', alt='Imagen decorativa')
          .row(titulo="")
            .col-lg-6.mb-4.mb-md-0.order-lg-1.order-2
              h4 Tratamiento del riesgo
              p Después de la valoración de los riesgos, se decide cómo abordarlos: tratando inicialmente de evitarlos al eliminar la causa por completo, modificándolos al aplicar los controles disponibles, transfiriendo el riesgo a un tercero por medio de un seguro o un contrato o aceptándolos si estos se encuentran dentro de un umbral de tolerancia al cumplir con unos criterios de aceptación.
            .col-lg-6.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema3/img21.jpg', alt='Imagen decorativa')
          .row(titulo="")
            .col-lg-6.mb-4.mb-md-0.order-lg-1.order-2
              h4 Aceptación del riesgo
              p Aquí se documentan aquellos riesgos que tras un tratamiento no pudieron ser eliminados, pero la empresa decide aceptarlos porque pueden ser tolerables; para ello, tiene que justificarlos con base en un análisis costo-beneficio, viabilidad técnica o estratégica.
            .col-lg-6.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema3/img22.jpg', alt='Imagen decorativa')
          .row(titulo="")
            .col-lg-6.mb-4.mb-md-0.order-lg-1.order-2
              h4 Comunicación y consulta
              p Es importante asegurar que todos los interesados en la organización estén informados sobre los riesgos, con la finalidad de que las decisiones y acciones a tomar sean entendidas y adoptadas por todos.
            .col-lg-6.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema3/img23.jpg', alt='Imagen decorativa')
          .row(titulo="")
            .col-lg-6.mb-4.mb-md-0.order-lg-1.order-2
              h4 Monitoreo y revisión
              p Los riesgos tienen que estar monitoreados constantemente, ya que pueden tener cambios de forma intempestiva, así que siempre se tiene que estar revisando para tener como actuar enseguida y no encontrarse con sorpresas que puedan hacer a un lado todo el trabajo de la empresa. 
            .col-lg-6.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema3/img24.jpg', alt='Imagen decorativa')
    
    .row.justify-content-center.mb-5
      .col-lg-10.col-12
        p.mb-0(data-aos="fade-down") Aplicar estas fases de la gestión de riesgos, fortalece en las diferentes empresas u organizaciones sus capacidades para anticiparse y responder efectivamente ante posibles amenazas que puedan afectar la información. Es una manera de enfocarlas para que se mantengan en prevención y en mejora continua; además de proteger los activos críticos y de alinear la seguridad con los objetivos estratégicos, especialmente en un mundo en donde los procesos en su mayoría se están manejando de forma digital y donde se viven adoptando diferentes tecnologías, que hacen que los procesos sean cambiantes.
      

</template>

<script>
export default {
  name: 'Tema3',
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
