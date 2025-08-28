<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 2
      h1 Seguridad de la información
    
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-0(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img01.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") Una vez identificados y valorados los activos de información, resulta necesario comprender los principios que orientan su protección dentro de las organizaciones. Es en este punto donde cobra sentido el estudio de la seguridad de la información. Esta disciplina no actúa de manera aislada, sino que se fundamenta en la importancia que cada activo representa para el cumplimiento de los objetivos institucionales, permitiendo establecer niveles adecuados de protección frente a amenazas internas y externas que puedan sufrir las pymes.

    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Concepto
    
    p.mb-5(data-aos="fade-down") Es fundamental entender qué es la seguridad de la información y el por qué, se hace necesario establecer mecanismos de protección en cualquier empresa; por ello, a continuación, se presentan dos definiciones, ajustadas a diferentes niveles de comprensión y contexto:

    TabsC.color-acento-botones.mb-5(data-aos="flip-up")
      .py-3.py-md-4(titulo="Definición técnica")
        .row.justify-content-center.p-4
          .col-lg-5.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema2/img02.png', alt='Imagen decorativa')
          .col-lg-7.order-lg-2.order-2
            p La seguridad de la información, también conocida como InfoSec, comprende el conjunto de estrategias, normas y mecanismos orientados a garantizar que la información, sin importar su forma o medio, se mantenga confidencial, íntegra y disponible. Su finalidad es prevenir accesos no autorizados, modificaciones no deseadas o pérdidas, asegurando que los datos sean gestionados de forma segura y confiable en el desarrollo de las actividades organizacionales (IBM, 2024a).
            p La seguridad de la información, hace referencia al conjunto de prácticas, herramientas y procedimientos orientados a proteger la información confidencial de una organización frente a accesos no autorizados, usos indebidos, interrupciones o destrucción. Este enfoque abarca tanto la seguridad física y del entorno, como los mecanismos de control de acceso y las medidas de ciberseguridad, integrando una visión integra de protección de la información (Microsoft, s.f.).

      .py-3.py-md-4(titulo="Definición general")
        .row.justify-content-center.p-4
          .col-lg-5.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema2/img03.png', alt='Imagen decorativa')
          .col-lg-7.order-lg-2.order-2
            p La seguridad de la información es el conjunto de medidas que se aplican para cuidar toda la información de la empresa. Cuando se habla de cuidarla, se hace referencia a que personas que no estén autorizadas no pueden tener acceso a ella o evitar que sea modificada por error o por mal uso, también garantizar que esté disponible cuando las personas autorizadas la necesiten.
            p Para entender mejor, así como la bodega donde se guarda la mercancía que vende un almacén está protegida con llaves e incluso cámaras de videos, asimismo, la información debe protegerse, sin importar que esté en papeles, computadores u otros dispositivos informáticos y que el acceso a ella solo lo tendrán aquellas personas que han sido previamente autorizadas para su visualización, revisión, o hasta modificación.

    .row.justify-content-center
      .col-lg-10.col-12
        p(data-aos="fade-down") Lograr comprender el papel que juega la seguridad de la información, permite a las pymes, proteger sus activos más valiosos, frente a riesgos que puedan comprometer su funcionamiento. Este trabajo integral garantiza que la información se mantenga confiable, accesible y libre de alteraciones; por lo que hay que tener claro que la seguridad de la información no solo debe ser vista como una medida técnica, sino más bien como una responsabilidad estratégica en todos los niveles de la organización.
        p.mb-0(data-aos="fade-down") Luego de entender qué es la seguridad de la información y su propósito en las pymes, se invita a conocer los principios que la sustentan, ya que así se puede orientar a una aplicación más práctica y tomar decisiones más acertadas en la protección de los activos de información.
    
    separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Principios
    
    .row.justify-content-center.mb-5
      .col-12(data-aos="fade-up")
        figure
          img(src='@/assets/curso/temas/tema2/img04.png', alt='Imagen decorativa')
    
    p(data-aos="fade-down") Toda gestión de la información en una empresa debe fundamentarse en tres principios esenciales (la confidencialidad, la integridad y la disponibilidad de la información), para poder cumplir con los criterios de eficiencia y eficacia, y así garantizar un sistema seguro y confiable (Novasep, s.f.). Estos principios constituyen la base sobre la cual se diseñan las políticas, controles y procedimientos para proteger los activos de información en una organización.
    p(data-aos="fade-down") También hay se debe tener en cuenta que estos principios, no solo guían la implementación técnica de medidas de seguridad, sino que también ayudan en la toma de decisiones alineadas con los objetivos estratégicos y la normativa de la empresa.
    p.mb-5(data-aos="fade-down") Comprender estos tres pilares, es clave para establecer medidas efectivas, así que a continuación, se describen y se sustentan con ejemplos cada uno de ellos:

    .row.justify-content-center.mb-5
      .col-lg-10.col-12
        LineaTiempoD.color-acento-botones.especial
          .row.mb-0(numero="1" titulo="Confidencialidad")
            .col-12.mb-4.mb-md-0.mb-5
              p Consiste en garantizar que la información solo sea accesible por personas autorizadas. Se refiere a la protección frente al acceso no autorizado, ya sea accidental o intencional. Aplicar este principio implica establecer políticas de control de acceso, gestión de credenciales y protección frente a fugas de información.
            .col-12.mb-4.mb-md-0.mb-0
              .tarjeta.tarjeta--blanca.p-4
                h5 Ejemplos prácticos en pymes:
                ul.lista-ul.mb-0(data-aos="fade-down")
                  li
                    i.lista-ul__vineta
                    p.mb-0 Uso de contraseñas seguras para acceso a sistemas.
                  li
                    i.lista-ul__vineta
                    p.mb-0 Restringir el acceso a datos contables solo al área financiera.
                  li
                    i.lista-ul__vineta
                    p.mb-0 Implementar roles diferenciados en <em>software</em> de gestión.
            .col-12.mb-0(data-aos="fade-up")
              figure
                img(src='@/assets/curso/temas/tema2/img05.jpg', alt='Imagen decorativa')

          .row.mb-0(numero="2" titulo="Integridad")
            .col-12.mb-4.mb-md-0.mb-5
              p Asegura que la información se mantenga completa, precisa y sin alteraciones no autorizadas. La integridad implica que los datos no sean modificados, eliminados o creados de forma inapropiada, ya sea por error o por intervención maliciosa.
            .col-12.mb-4.mb-md-0.mb-0
              .tarjeta.tarjeta--blanca.p-4
                h5 Ejemplos prácticos en pymes:
                ul.lista-ul.mb-0(data-aos="fade-down")
                  li
                    i.lista-ul__vineta
                    | Copias de respaldo que permiten recuperar versiones anteriores de documentos.
                  li
                    i.lista-ul__vineta
                    | Registro de auditoría que evidencia cambios realizados en los sistemas.
                  li
                    i.lista-ul__vineta
                    | Validación de formatos o formularios antes de ingresarlos en una base de datos.
            .col-12.mb-0(data-aos="fade-up")
              figure
                img(src='@/assets/curso/temas/tema2/img06.jpg', alt='Imagen decorativa')

          .row.mb-0(numero="3" titulo="Disponibilidad")
            .col-12.mb-4.mb-md-0.mb-5
              p Se refiere a que la información esté disponible y accesible cuando se requiera por los usuarios autorizados. Este principio implica garantizar el funcionamiento continuo de los sistemas y el acceso oportuno a los recursos informáticos necesarios para la operación del negocio.
            .col-12.mb-4.mb-md-0.mb-0
              .tarjeta.tarjeta--blanca.p-4
                h5 Ejemplos prácticos en pymes:              
                ul.lista-ul.mb-0(data-aos="fade-down")
                  li
                    i.lista-ul__vineta
                    | Sistemas de respaldo energético (UPS) para evitar pérdida de datos en apagones.
                  li
                    i.lista-ul__vineta
                    | Políticas de mantenimiento preventivo para evitar fallas en equipos.
                  li
                    i.lista-ul__vineta
                    | Copias de seguridad periódicas y accesibles en caso de incidentes.
            .col-12.mb-0(data-aos="fade-up")
              figure
                img(src='@/assets/curso/temas/tema2/img07.jpg', alt='Imagen decorativa')
      
    .row.justify-content-center.mb-0
      .col-lg-10.col-12
        .cajon.cajon.C01.color-primario.p-4
          p.mb-0(data-aos="fade-down") Estos principios tienen que reflejarse en las políticas de seguridad de la información, asegurando que cada uno esté presente en los lineamientos generales y específicos. Por ejemplo, en una pyme, una política de contraseña contribuye a la confidencialidad, una política de respaldo fortalece la disponibilidad y una política de control de cambios protege la integridad de la información.


</template>

<script>
export default {
  name: 'Tema2',
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
