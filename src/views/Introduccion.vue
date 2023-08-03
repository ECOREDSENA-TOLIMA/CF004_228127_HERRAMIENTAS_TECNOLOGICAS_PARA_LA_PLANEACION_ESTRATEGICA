<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .mb-5(data-aos="zoom-down") Cuando se aplica el enfoque de Arquitectura Empresarial (AE) para mejorar las capacidades de las organizaciones se deben planear los ejercicios de arquitectura, definir el alcance a partir de las capacidades actuales y las necesidades de las partes interesadas. A continuación, podrá visualizar la información general de las características de este componente formativo:
    
    figure(data-aos="zoom-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/iVtZk90gApg" title="Ejercicio de arquitectura empresarial" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

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
