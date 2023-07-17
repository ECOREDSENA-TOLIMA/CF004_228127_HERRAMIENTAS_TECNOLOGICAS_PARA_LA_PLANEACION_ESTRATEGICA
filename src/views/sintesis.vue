<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p Para lograr una buena arquitectura, en el desarrollo del ejercicio de arquitectura, el equipo de arquitectura se debe apoyar en mejores prácticas, estándares, modelo de madurez, marcos de referencia y herramientas tecnológicas.  Para el desarrollo del proceso de arquitectura la organización ejecutara las fases que dependen del marco de arquitectura adoptado, en términos generales, en cada ejercicio, se realizará una planeación de la arquitectura, se construirá la arquitectura actual, se definirá la arquitectura objetivo, se identificaran las brechas, y se elaborará el mapa de ruta de la transformación. Finalmente se puede llevar a cabo la evaluación del ejercicio de arquitectura.
    p.mb-5 A continuación, se presenta una síntesis de las temáticas vistas en el componente formativo, a través del siguiente mapa conceptual:

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
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
