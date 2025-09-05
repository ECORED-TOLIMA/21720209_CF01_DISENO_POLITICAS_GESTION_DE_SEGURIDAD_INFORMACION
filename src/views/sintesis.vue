<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p La adecuada identificación, registro y valoración de los activos de información, permite reconocer su importancia estratégica y asignar medidas de protección acordes a su valor y criticidad. Esta gestión, fundamentada en los principios de la seguridad de la información —confidencialidad, integridad y disponibilidad—, garantiza que los recursos informativos estén protegidos frente a amenazas y usos indebidos. Asimismo, la implementación de procesos de gestión del riesgo, que incluyen la clasificación de los tipos de riesgo y el desarrollo de fases estructuradas para su tratamiento, contribuye a anticipar, mitigar y controlar posibles incidentes. La integración de estas prácticas en un Sistema de Gestión de Seguridad de la Información (SGSI), respaldado por un marco normativo y orientado por un ciclo de mejora continua, fortalece la protección de los datos, optimiza la toma de decisiones y promueve una cultura organizacional orientada a la prevención y la confianza.
    

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="En la síntesis del componente formativo Fundamentos de un Sistema de Gestión de Seguridad de la Información, se abordan los conceptos esenciales para proteger y gestionar de forma eficiente los recursos informativos de una organización. Se inicia con la definición de los activos de información, su tipología, registro y valoración, reconociendo su papel crítico en la operación institucional. Posteriormente, se desarrolla el concepto de seguridad de la información y sus principios, los cuales orientan las acciones de protección frente a amenazas. También se explica la gestión del riesgo, incluyendo su definición, los tipos más comunes y las fases para su tratamiento efectivo. Finalmente, se estudia el Sistema de Gestión de Seguridad de la Información (SGSI), sus características y beneficios, el ciclo de mejora continua que lo sustenta y el marco normativo que lo regula, proporcionando una visión integral para su implementación y fortalecimiento en entornos organizacionales.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
