<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.mb-5
      .col-12
        .row.justify-content-center(style="display: flex; width: 100%; margin: auto;")
          .col-lg-7.col-12.order-lg-1.order-2
            p(data-aos="fade-down") En la actualidad las organizaciones tienen que funcionar no solo en el plano físico, sino en el digital, donde la información está considerada hoy en día, en uno de los activos más valiosos para ellas. Una adecuada gestión, protección y aprovechamiento de la información, representan desafíos que exigen competencias sólidas en seguridad, tanto a nivel físico, lógico y normativo. El uso intensivo de tecnologías de información y comunicación exponen a las empresas a un mayor número de amenazas digítales, lo que las obliga a que se necesite de un mayor grupo de profesionales que sean capaces de identificar activos críticos, vulnerabilidades, con el fin de aplicar principios de seguridad con criterio técnico y ético.
            p(data-aos="fade-down") A través del estudio de activos, modelos de gestión de riesgo y los Sistemas de Gestión de Seguridad de la Información (SGSI), se desarrollan habilidades clave que lleven a las organizaciones a formular políticas y estrategias que respondan a las necesidades de protección de sus datos.
          .col-lg-5.col-md-7.col-12.mb-3.order-lg-2.order-1.mb-lg-0
            .row.justify-content-center(data-aos="fade-up")
              .col
                figure
                  img(src='@/assets/curso/temas/intro/img01.jpg', alt='Imagen decorativa')
    
    .row.justify-content-center.mb-5
      .cajon.cajon.C01.color-primario.p-4
        p.mb-0(data-aos="fade-down") Por consiguiente, en este componente formativo, se busca ir más allá de la comprensión de conceptos fundamentales en seguridad de la información, para que los aprendices sean capaces de aplicar procesos en entornos reales. Además, se estimula una mirada crítica, reflexiva y contextualizada, alineada con una base sólida para la construcción de entornos digitales seguros, confiables, que estén en concordancia con estándares internacionales, para que se actúe con responsabilidad en el cambiante ecosistema informacional.
    
    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
