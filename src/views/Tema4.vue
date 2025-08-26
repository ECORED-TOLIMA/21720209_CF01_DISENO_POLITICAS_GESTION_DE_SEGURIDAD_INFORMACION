<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 4
      h1 Sistema de Gestión de Seguridad de la Información (SGSI)
    
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-0(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img01.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") Después de la identificación y valoración de los activos de información y del análisis de los riesgos, es necesario contar con un buen sistema que permita aplicar y gestionar la protección de manera continua; para ello, un Sistema de Gestión de Seguridad de la Información (SGSI), proporciona un marco integral, que contiene las políticas, los procesos y los controles, con los cuales se pueda garantizar en la organización la confidencialidad, la integridad y la disponibilidad de la información.

    separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1 Concepto
    
    p.mb-5(data-aos="fade-down") Entender qué es un Sistema de Gestión de Seguridad de la Información (SGSI), es de suma importancia para la protección de los datos de la organización; por ello, a continuación y para seguir la linealidad temática de los diferentes conceptos tratados, se comparten dos definiciones, una técnica desde la visión de una fuente oficial y otra en un lenguaje más sencillo, con la finalidad de que sea más digerible para aquellos incursionan en este mundo por primera vez: 

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col
        .tarjeta--container.row
          .col-xl.col-lg-6.tarjeta.tarjeta--C01.p-5
            .row.justify-content-center.mb-3
              .col-lg-4.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/tema4/img02.svg', alt='Imagen decorativa')(style="width: 85%")
              
            h4.text-center.text-white(data-aos="fade-down") Definición técnica
            p.mb-0.text-white(data-aos="fade-down") Se concibe como una estructura organizada y conformada por políticas, procedimientos, directrices, recursos y tareas gestionadas en forma conjunta y articulada por una organización para la protección de sus activos de información. De acuerdo con la norma ISO/IEC 27001, este sistema adopta un enfoque metodológico que permite establecer, implementar, supervisar, evaluar, mantener y perfeccionar la seguridad de la información, asegurando su alineación con sus objetivos estratégicos (López, 2013).

          .col-xl.col-lg-6.tarjeta.tarjeta--C02.p-5
            .row.justify-content-center.mb-3
              .col-lg-4.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/tema4/img03.svg', alt='Imagen decorativa')(style="width: 85%")
              
            h4.text-center.text-white(data-aos="fade-down") Definición general
            p.mb-0.text-white(data-aos="fade-down") Es una forma organizada de cuidar y proteger la información importante de una empresa, como datos de clientes, documentos de trabajo o claves de acceso. Todo esto ayuda a evitar que la información se pierda, se dañe o caiga en manos no autorizadas. También establece reglas y buenas prácticas para que todos los empleados de una organización sepan cómo actuar y proteger la información que manejan a diario. 
    
    .row.justify-content-center.mb-0
      .col-lg-10.col-12
        p.mb-0(data-aos="fade-down") Comprendido el concepto, no se puede desconocer que la implementación de un SGSI, es importante para garantizar la protección de la información más relevante, dentro de la organización, lo que ayuda a gestionar los riesgos de forma estructurada y alineada con los objetivos institucionales; además de brindar confianza dentro y fuera de la organización.

    separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 Características y beneficios
    
    p(data-aos="fade-down") El comprender las características y beneficios de un SGSI, permite valorar la importancia que esta reviste al interior de una organización, especialmente cuando estas buscan proteger sus activos de información; por ende, una implementación no solo garantiza su seguridad, sino que le aporta valor agregado a la misma. 
    p.mb-5(data-aos="fade-down") A continuación, se explica más en detalle el beneficio que presenta cada característica:

    .row.cajon.BG05.align-items-center.pt-3.mb-5
      .col-lg-12.col-12.py-lg-0.py-4
        .row.justify-content-center.align-items-center
          .col-md-6.col-lg-4.mb-4.mb-md-0.d-lg-flex.d-none.order-lg-2.order-2(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema4/img04.png', alt='Imagen decorativa')
          .col-md-8.col-lg-8.mb-4.mb-md-0(data-aos="fade-left")
            SlyderF.order-lg-1.order-2(columnas="col-lg-6 col-xl-6")
              .tarjeta.tarjeta--blanca.p-3
                .row.justify-content-center.mb-2
                  .col-lg-8.col-sm-4.col-6
                    img(src='@/assets/curso/temas/tema4/img05.svg' alt='AvatarTop')
                h5 Enfoque basado en riesgos
                p.mb-0 Ayuda a que se identifiquen, evalúen y se prioricen los riesgos que afectan a los activos de información de la empresa.

              .tarjeta.tarjeta--blanca.p-3
                .row.justify-content-center.mb-2
                  .col-lg-8.col-sm-4.col-6
                    img(src='@/assets/curso/temas/tema4/img06.svg' alt='AvatarTop')
                h5 Mejora continua
                p.mb-0 Es el proceso que favorece la revisión constante del sistema, de tal manera que se fortalezca su eficacia, frente a las diversas amenazas, principalmente frente a las nuevas o a las que son cambiantes.

              .tarjeta.tarjeta--blanca.p-3
                .row.justify-content-center.mb-2
                  .col-lg-8.col-sm-4.col-6
                    img(src='@/assets/curso/temas/tema4/img07.svg' alt='AvatarTop')
                h5 Marco normativo estructurado
                p.mb-0 Con esto se asegura el cumplimiento de estándares nacionales e internacionales y de las buenas prácticas en seguridad de la información.

              .tarjeta.tarjeta--blanca.p-3
                .row.justify-content-center.mb-2
                  .col-lg-8.col-sm-4.col-6
                    img(src='@/assets/curso/temas/tema4/img08.svg' alt='AvatarTop')
                h5 Participación de todos los niveles de la organización
                p.mb-0 Es importante y a la vez recomendable para que se puede fomentar una cultura organizacional de seguridad y corresponsabilidad, entre todos los actores; de lo contrario, no tendría gracia la implementación del SGSI, si lo planteado no se va a aplicar.

              .tarjeta.tarjeta--blanca.p-3
                .row.justify-content-center.mb-2
                  .col-lg-8.col-sm-4.col-6
                    img(src='@/assets/curso/temas/tema4/img09.svg' alt='AvatarTop')
                h5 Documentación y trazabilidad de procesos
                p.mb-0 Esto facilita que se puedan realizar auditorías, también mejora la toma de decisiones y minimiza los errores por falta de control

              .tarjeta.tarjeta--blanca.p-3
                .row.justify-content-center.mb-2
                  .col-lg-8.col-sm-4.col-6
                    img(src='@/assets/curso/temas/tema4/img10.svg' alt='AvatarTop')
                h5 Adaptabilidad al tamaño y sector de la empresa
                p.mb-0 Lo importante de esto es que pueden ajustar diferentes organizaciones y empresas, sin importar su tamaño.

              .tarjeta.tarjeta--blanca.p-3
                .row.justify-content-center.mb-2
                  .col-lg-8.col-sm-4.col-6
                    img(src='@/assets/curso/temas/tema4/img11.svg' alt='AvatarTop')
                h5 Soporte para la toma de decisiones estratégicas
                p.mb-0 Proporciona información clara sobre los riesgos y controles, que permiten alinear la seguridad con los objetivos y la actividad del negocio.

              .tarjeta.tarjeta--blanca.p-3
                .row.justify-content-center.mb-2
                  .col-lg-8.col-sm-4.col-6
                    img(src='@/assets/curso/temas/tema4/img12.svg' alt='AvatarTop')
                h5 Reducción de incidentes de seguridad
                p.mb-0 Se busca eliminar o minimizar las pérdidas económicas y de reputación por accesos no autorizados, filtraciones o errores humanos, entre otros.

    .row.justify-content-center.mb-0
      .col-lg-10.col-12
        .cajon.cajon.C02.color-secundario.p-4
          p.mb-0(data-aos="fade-down") Conocer las características y beneficios del SGSI, permite entender el papel que este sistema representa en la protección de la información y cómo su implementación fortalece la seguridad de la información, mejora los procesos y aporta confianza a todos sus clientes y sus aliados.

    separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.3 Ciclo de mejora continua
    
    p(data-aos="fade-down") Parte del éxito de la implementación de un SGSI, es el ciclo de mejora continua, ya que es el que permite que se mantenga y se perfeccione de forma progresiva, sosteniéndose en el tiempo. Este proceso se estructura por lo general bajo el modelo PHVA (Planificar, Hacer, Verificar y Actuar), también conocido como el ciclo Deming o PDCA (por sus siglas en inglés).
    p(data-aos="fade-down") El ciclo de mejora continua en un SGSI, busca alinearse con un marco normativo, para garantizar que las políticas, controles y procesos del sistema, se mantengan ajustadas a los riesgos emergentes, a los cambios de la empresa y al entorno tecnológico, que es el que hoy en día más cambio sufre dentro de la organización.
    p.mb-4(data-aos="fade-down") A continuación, se explica cada uno de los pasos que lleva un ciclo de mejora continua bajo el modelo PHVA: 

    .row.justify-content-center
      .col-12.mb-4
        figure.movil
          img(src='@/assets/curso/temas/tema4/img13.svg', alt='Imagen decorativa')
      .col-lg-10.col-12
        ImagenInfografica.color-acento-botones.desktop(data-aos="zoom-in")
          template(v-slot:imagen)
            figure.mb-5
              img(src='@/assets/curso/temas/tema4/img14.svg', alt="Imagen decorativa")
          .tarjeta.color-acento-botones.p-3(x="24.3%" y="24.5%" numero="")
            p Se definen los objetivos del SGSI, las políticas y los procesos para que se puedan gestionar los riesgos que se han identificado. Aquí mismo, se establecen los criterios de evaluación y los recursos que se requieren para ello.
          .tarjeta.color-acento-botones.p-3(x="55.1%" y="24.4%" numero="")
            p Se implementan las políticas y los controles que se han definido, desarrollando las acciones que planificaron y aplicando las medidas de seguridad que se habían acordado.
          .tarjeta.color-acento-botones.p-3(x="24.4%" y="75.8%" numero="")
            p Se le hace seguimiento al SGSI y se evalúa su desempeño, analizando cada uno de los resultados obtenidos, frente a los objetivos que se habían establecido. Dentro de este punto están las auditorías internas, la revisión de los indicadores y el análisis de los incidentes.
          .tarjeta.color-acento-botones.p-3(x="55.1%" y="75.8%" numero="")
            p De acuerdo a los resultados obtenidos, se van adoptando medidas correctivas o de mejora, ajustando los procesos, las políticas y los controles, de tal manera, que se vaya fortaleciendo en sistema dentro de la organización. 

    .row.justify-content-center.mb-0
      .col-lg-10.col-12
        p.mb-0(data-aos="fade-down") Este ciclo de mejora continua, es importante porque fomenta una cultura organizacional, orientada al aprendizaje y a la adaptación continua, con lo que se logra responder de manera oportuna y eficiente a nuevas amenazas y vulnerabilidades, lo que conlleva que el SGSI implementado se mantenga vigente y en constante evolución junto a los desafíos del entorno digital.

    separador
    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.4 Normativa
    
    .row.justify-content-center.mb-5
      .col-12(data-aos="fade-up")
        figure
          img(src='@/assets/curso/temas/tema4/img15.png', alt='Imagen decorativa')
    
    p(data-aos="fade-down") La normativa en seguridad de la información, proporciona los lineamientos que se necesitan para establecer, operar, mantener y operar un SGSI de manera efectiva. Estas normas permiten a las organizaciones adoptar prácticas que son aceptadas nacional o internacionalmente, gestionar sus riesgos y cumplir con exigencias legales, contractuales o sectoriales. Cabe aclarar, que muchas veces, aplicar estas normativas, exige a las empresas un esfuerzo económico y logístico.
    p.mb-5(data-aos="fade-down") A continuación, se presenta un conjunto de normas que pueden aplicarse, según la naturaleza y actividad de la empresa, iniciando con las que tienen jurisdicción a nivel internacional: 

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .row.justify-content-center.mb-4
          .col-12.order-lg-2.order-2
            .cajon.cajon.C01.p-4.mb-3
              ol.lista-ol--cuadro.lista-ol(data-aos="fade-down")
                li 
                  .lista-ol--cuadro__vineta
                    span.text-bold 1
                  p.mb-0 <b>ISO/IEC 27001</b>: es una norma internacional que establece requisitos para la implementación y sostenimiento de un SGSI, aportando una base y promoviendo un enfoque por procesos y mejora continua.
                li 
                  .lista-ol--cuadro__vineta
                    span.text-bold 2
                  p.mb-0 <b>ISO/IEC 27002</b>: complementa la norma ISO/IEC 27001, ofreciendo un conjunto de controles de seguridad, los cuales pueden irse adoptando según el contexto y tamaño de la empresa.
                li 
                  .lista-ol--cuadro__vineta
                    span.text-bold 3
                  p.mb-0 <b>ISO/IEC 27005</b>: proporciona directrices para la gestión de riesgos de seguridad de la información, siendo crucial en la toma de decisiones basadas en análisis y evaluación de riesgos.
                li 
                  .lista-ol--cuadro__vineta
                    span.text-bold 4
                  p.mb-0 <b>ISO/IEC 27701</b>: norma centrada en la gestión de la privacidad de la información (extensión de la ISO 27001), ideal para organizaciones que procesan datos personales.
                li 
                  .lista-ol--cuadro__vineta
                    span.text-bold 5
                  p.mb-0 <b>NIST SP 800-53</b>: publicación del NIST que establece controles de seguridad y privacidad para sistemas de información federales y empresariales.
                li 
                  .lista-ol--cuadro__vineta
                    span.text-bold 6
                  p.mb-0 <b>GDPR (UE)</b>: reglamento General de Protección de Datos europeo que regula el tratamiento de datos personales y la privacidad.
                li 
                  .lista-ol--cuadro__vineta
                    span.text-bold 7
                  p.mb-0 <b>MAGERIT</b>: metodología española para el análisis y gestión de riesgos en sistemas de información, ampliamente usada en instituciones públicas.
                li 
                  .lista-ol--cuadro__vineta
                    span.text-bold 8
                  p.mb-0 <b>COBIT</b>: marco de gobierno y gestión de TI que incluye prácticas de control de seguridad, alineadas con los objetivos del negocio.
                li.mb-0
                  .lista-ol--cuadro__vineta
                    span.text-bold 9
                  p.mb-0 <b>ITIL</b>: biblioteca de buenas prácticas para la gestión de servicios de TI, incluyendo la gestión de incidentes y seguridad de la información.

    p.mb-5(data-aos="fade-down") Ahora, se detallan las que tienen jurisdicción nacional solo en Colombia:

    .row.mb-4
      .col-lg-6.col-12
        .row.justify-content-center
          .col-lg-auto.col-3.col-sm-2.px-0.mb-4(data-aos="flip-up")
            .cajon.cajon.C02.p-0.h-100
              img.w-100.h-100.my-auto(src='@/assets/curso/temas/tema4/img16.svg' alt="Imagen decorativa")
          .col-lg-9.col-8.px-0.mb-4(data-aos="fade-down")
            .cajon.cajon.C02.p-3.h-100
              h5 Ley 1581 de 2012
              p Regula la protección de datos personales en Colombia y exige a las organizaciones implementar medidas que garanticen el tratamiento adecuado de la información.

      .col-lg-6.col-12
        .row.justify-content-center
          .col-lg-auto.col-3.col-sm-2.px-0.mb-4(data-aos="flip-up")
            .cajon.cajon.C02.p-0.h-100
              img.w-100.h-100.my-auto(src='@/assets/curso/temas/tema4/img16.svg' alt="Imagen decorativa")
          .col-lg-9.col-8.px-0.mb-4(data-aos="fade-down")
            .cajon.cajon.C02.p-3.h-100
              h5 Decreto 1377 de 2013 
              p Complementa la Ley 1581 de 2012, estableciendo condiciones para la autorización del tratamiento de datos y medidas administrativas en entornos digitales.

      .col-lg-6.col-12
        .row.justify-content-center
          .col-lg-auto.col-3.col-sm-2.px-0.mb-4(data-aos="flip-up")
            .cajon.cajon.C02.p-0.h-100
              img.w-100.h-100.my-auto(src='@/assets/curso/temas/tema4/img16.svg' alt="Imagen decorativa")
          .col-lg-9.col-8.px-0.mb-4(data-aos="fade-down")
            .cajon.cajon.C02.p-3.h-100
              h5 Ley 1266 de 2008
              p Ley de Habeas Data financiera. Regula el uso de la información financiera, crediticia, comercial y de servicios.

      .col-lg-6.col-12
        .row.justify-content-center
          .col-lg-auto.col-3.col-sm-2.px-0.mb-4(data-aos="flip-up")
            .cajon.cajon.C02.p-0.h-100
              img.w-100.h-100.my-auto(src='@/assets/curso/temas/tema4/img16.svg' alt="Imagen decorativa")
          .col-lg-9.col-8.px-0.mb-4(data-aos="fade-down")
            .cajon.cajon.C02.p-3.h-100
              h5 Ley 1273 de 2009
              p Introduce delitos informáticos en el código penal colombiano, protegiendo la confidencialidad, integridad y disponibilidad de la información.

      .col-lg-6.col-12
        .row.justify-content-center
          .col-lg-auto.col-3.col-sm-2.px-0.mb-4(data-aos="flip-up")
            .cajon.cajon.C02.p-0.h-100
              img.w-100.h-100.my-auto(src='@/assets/curso/temas/tema4/img16.svg' alt="Imagen decorativa")
          .col-lg-9.col-8.px-0.mb-4(data-aos="fade-down")
            .cajon.cajon.C02.p-3.h-100
              h5 Circular Externa 005 de 2017 (SIC)
              p Orienta a los responsables del tratamiento de datos sobre el cumplimiento de las leyes de protección de datos.

      .col-lg-6.col-12
        .row.justify-content-center
          .col-lg-auto.col-3.col-sm-2.px-0.mb-4(data-aos="flip-up")
            .cajon.cajon.C02.p-0.h-100
              img.w-100.h-100.my-auto(src='@/assets/curso/temas/tema4/img16.svg' alt="Imagen decorativa")
          .col-lg-9.col-8.px-0.mb-4(data-aos="fade-down")
            .cajon.cajon.C02.p-3.h-100
              h5 CONPES 3701 de 2011
              p Política pública que impulsa el uso de estándares de gestión del riesgo, continuidad de negocio y seguridad de TI en el Estado colombiano.

    p.mb-0(data-aos="fade-down") Estas normas, marcos o leyes guían y dan las directrices a las empresas para que puedan proteger sus activos de información más preciados y garantizar la confianza de clientes, empleados, aliados y todas las partes interesadas. Su adopción es útil para las pymes, sobre todo porque al estar en un proceso de crecimiento, es primordial garantizar la seguridad de la información, para que la empresa pueda mantenerse en el tiempo. 

    separador
    #t_4_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.5 Componentes

    p.mb-5(data-aos="fade-down") Para poner a funcionar un SGSI de manera que trabaje efectiva y eficazmente, es necesario que se comprendan ciertos componentes que son claves y que se hacen esenciales para la construcción de una estructura sólida, que permita salvaguardar de forma adecuada la información en el entorno organizacional. A continuación, se presentan los principales componentes, de acuerdo a lo expuesto por Kantan (2024):

    LineaTiempoE.color-primario.mb-5
      .row.justify-content-center(titulo="01" subtitulo="")
        .col-lg-9.mb-4.mb-lg-0.order-lg-2.order-2(data-aos="fade-down")
          h4 Políticas de seguridad de la información
          p Establece las directrices generales que utiliza la organización para demostrar su compromiso con la protección de la información. Estas políticas sirven para orientar las acciones, definir las responsabilidades y reflejar los objetivos que guíen la implementación del SGSI en los diferentes niveles.
        .col-lg-auto.col-6.order-lg-1.order-1.mb-3(data-aos="fade-up")
          figure
            img(src='@/assets/curso/temas/tema4/img17.svg', alt='Imagen decorativa')

      .row.justify-content-center(titulo="02" subtitulo="")
        .col-lg-9.mb-4.mb-lg-0.order-lg-2.order-2(data-aos="fade-down")
          h4 Evaluación de riesgos
          p Es el proceso sistemático para la identificación y el análisis de las amenazas potenciales en las que podría verse envuelta la seguridad de los activos de información de una empresa. Permite desarrollar la estimación de la probabilidad y el impacto de los riesgos, facilitando su clasificación y priorización, según su criticidad, lo cual es de suma importancia para tomar decisiones informadas.
        .col-lg-auto.col-6.order-lg-1.order-1.mb-3(data-aos="fade-up")
          figure
            img(src='@/assets/curso/temas/tema4/img18.svg', alt='Imagen decorativa')
      
      .row.justify-content-center(titulo="03" subtitulo="")
        .col-lg-9.mb-4.mb-lg-0.order-lg-2.order-2(data-aos="fade-down")
          h4 Control y mitigación de riesgos
          p Después de que sean identificados y evaluados los riesgos, hay que establecer e implementar medidas con la finalidad de disminuir su impacto o su probabilidad de ocurrencia. Dentro de estas acciones se pueden incluir herramientas tecnológicas, controles físicos y digitales, prácticas organizativas, diseñadas y ajustadas para salvaguardar la información sensible.
        .col-lg-auto.col-6.order-lg-1.order-1.mb-3(data-aos="fade-up")
          figure
            img(src='@/assets/curso/temas/tema4/img19.svg', alt='Imagen decorativa')

      .row.justify-content-center(titulo="04" subtitulo="")
        .col-lg-9.mb-4.mb-lg-0.order-lg-2.order-2(data-aos="fade-down")
          h4 Monitorización y revisión
          p Esto implica el seguimiento y monitoreo constante del funcionamiento del SGSI, con el propósito de garantizar que los controles aplicados sean eficaces y pertinentes. Todo esto se logra gracias a la ejecución de auditorías internas, a la revisión de indicadores que se consideren clave en el proceso y al análisis de los incidentes, con el fin de ir promoviendo y realizando ajustes y mejoras continuas.
        .col-lg-auto.col-6.order-lg-1.order-1.mb-3(data-aos="fade-up")
          figure
            img(src='@/assets/curso/temas/tema4/img20.svg', alt='Imagen decorativa')

    .row.justify-content-center.mb-0
      .col-lg-10.col-12
        .cajon.cajon.C01.color-primario.p-4
          p.mb-0(data-aos="fade-down") La aplicación efectiva de los componentes que se consideran clave en un SGSI, ayuda para que las organizaciones construyan una estructura sólida para que puedan proteger con mayor confianza sus activos de información. Cada uno de componentes contribuye de forma integrada en garantizar los principios básicos como lo son la confidencialidad, la integridad y la disponibilidad de los datos. 

</template>

<script>
export default {
  name: 'Tema4',
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
