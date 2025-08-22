<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p La adecuada identificación, registro y valoración de los activos de información, permite reconocer su importancia estratégica y asignar medidas de protección acordes a su valor y criticidad. Esta gestión, fundamentada en los principios de la seguridad de la información —confidencialidad, integridad y disponibilidad—, garantiza que los recursos informativos estén protegidos frente a amenazas y usos indebidos. Asimismo, la implementación de procesos de gestión del riesgo, que incluyen la clasificación de los tipos de riesgo y el desarrollo de fases estructuradas para su tratamiento, contribuye a anticipar, mitigar y controlar posibles incidentes. La integración de estas prácticas en un Sistema de Gestión de Seguridad de la Información (SGSI), respaldado por un marco normativo y orientado por un ciclo de mejora continua, fortalece la protección de los datos, optimiza la toma de decisiones y promueve una cultura organizacional orientada a la prevención y la confianza.
    

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu tincidunt erat. Fusce cursus mauris in nulla egestas vulputate. Phasellus viverra accumsan libero, sed luctus diam maximus euismod. Mauris sem risus, tincidunt vel libero in, lobortis commodo ante. Sed pulvinar luctus orci in rhoncus. Nulla ut dapibus risus, ac tempor est. Donec nulla augue, vehicula quis malesuada vitae, fermentum non nisi. Donec tincidunt nibh a magna bibendum rutrum. ")
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
