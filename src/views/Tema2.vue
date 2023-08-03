<template lang="pug">
.curso-main-container.pb-3.tema2
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Evaluación del ejercicio de Arquitectura Empresarial

    p.mb-5(data-aos="fade-down-right") Cuando se aplica el enfoque de AE para mejorar las capacidades de las organizaciones se deben planear los ejercicios de arquitectura, definir el alcance a partir de las capacidades actuales y las necesidades de las partes interesadas. A continuación, se revisa la planeación del ejercicio de AE.

    .row.justify-content-center.mb-5 
      .col-12.col-md-11.col-lg-10.px-0(data-aos="fade-left")
        figure 
          img(src='@/assets/curso/temas/tema2/tema2-01.png', alt='')

    .row.justify-content-center.mb-4
      .col-12.col-md-11.col-lg-10.mb-2
        .h4.py-4.mb-4(data-aos="zoom-down-right")
          span.titulo-herramientas Planeación de la Arquitectura TOGAF
      .col-12.col-md-11.col-lg-10.mb-2(data-aos="fade-down-right")
        p TOGAF plantea en el ADM (#[i The Open Group], 2018) proporciona el contexto dentro del cual el equipo de arquitectura puede operar para desarrollar el programa de AE:

    .row.mb-5(data-aos="fade-down-left")
      .col-md-4.col-lg.col-12.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4.col-lg-6
            img(src='@/assets/curso/temas/tema2/tema2-03.svg' alt='')
        p.text-center Fases con sus objetivos
      .col-md-4.col-lg.col-12.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4.col-lg-6
            img(src='@/assets/curso/temas/tema2/tema2-04.svg' alt='')
        p.text-center Entradas
      .col-md-4.col-lg.col-12.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4.col-lg-6
            img(src='@/assets/curso/temas/tema2/tema2-05.svg' alt='')
        p.text-center Pasos
      .col-md-4.col-lg.col-12.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4.col-lg-6
            img(src='@/assets/curso/temas/tema2/tema2-06.svg' alt='')
        p.text-center Salidas
      .col-md-4.col-lg.col-12.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4.col-lg-6
            img(src='@/assets/curso/temas/tema2/tema2-02.svg' alt='')
        p.text-center Enfoque

    .row.justify-content-center.mb-4
      .col-12.col-md-11.col-lg-10.mb-2
        .h4.py-4.mb-4(data-aos="zoom-down-right")
          span.titulo-herramientas Fase Preliminar
      .col-12.col-md-11.col-lg-10.mb-2(data-aos="fade-down-right")
        p Trata de definir "dónde, qué, por qué, quién y cómo se hace la arquitectura". Los principales aspectos que se cubren en esta fase son:
        ul.lista-ul.mb-2
          li.mb-0
            i.fas.fa-circle.fa-cfx(style="color:#60CB28")
            | Definición de la empresa.
          li.mb-0
            i.fas.fa-circle.fa-cfx(style="color:#60CB28")
            | Identificar impulsores y elementos clave en el contexto organizacional.
          li.mb-0
            i.fas.fa-circle.fa-cfx(style="color:#60CB28")
            | Definición de los requisitos para el trabajo de arquitectura.
          li.mb-0
            i.fas.fa-circle.fa-cfx(style="color:#60CB28")
            | Definición de los principios de negocio y de arquitectura que rigen el proceso.
          li.mb-0
            i.fas.fa-circle.fa-cfx(style="color:#60CB28")
            | Definición de los marcos de gestión y las relaciones entre los mismos.
          li.mb-0
            i.fas.fa-circle.fa-cfx(style="color:#60CB28")
            | Evaluación de la madurez de la AE.

    .row.mb-5.justify-content-center
      .col-md-11.col-lg-10.cajon.color-primario.p-3.mb-4(data-aos="fade-down-right")
        p.mb-0 En la identificación de los marcos de gestión presentes en la organización, se resalta que el marco de AE tiene que coexistir y mejorar las capacidades operativas de otros marcos, sin importar el tamaño de la organización y el sector económico donde se ubique, por tanto, el equipo del #[strong Arquitecto Empresarial] no puede centrarse exclusivamente en la implementación de TI, sino que debe ser consciente del impacto que la arquitectura tiene en toda la organización.
      .col-md-11.col-lg-10(data-aos="fade-down")
        p Los principales métodos de gestión sugeridos para ser coordinados con el marco de AE son:

    .tarjeta.color-acento-botones.p-4.mb-5(data-aos="fade-down-left")
      SlyderB.mb-0(:datos="datosSlyder")

    p.text-center(data-aos="fade-down-left") La siguiente figura ilustra la relación entre los métodos y el desarrollo de la AE:

    .row.justify-content-center.mb-5
      .col-12.col-lg-8.col.md-10(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 1. </b> <i>Superposición entre marcos de gestión.</i>
        figure
          img.d-none.d-sm-none.d-md-block(src='@/assets/curso/temas/tema2/tema2-11-md.svg', alt='')
          img.d-block.d-md-none(src='@/assets/curso/temas/tema2/tema2-11-sm.svg', alt='')
        figcaption Nota. Adaptado de (#[i The Open Group], 2018)

    .h4.py-4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas Fase A “Visión de la arquitectura”

    p.mb-5(data-aos="fade-down-left") El ADM de TOGAF (#[i The Open Group], 2018) comienza con una solicitud de trabajo de Arquitectura, posteriormente se define lo que incluye y lo que queda fuera del esfuerzo de la arquitectura y las limitaciones a considerar. 

    .row.justify-content-center.mb-4
      .col-lg-11.col-md-11.col-12.position-relative.mb-5(data-aos="fade-down-right")
        .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/tema2-12.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 La visión de arquitectura describe cómo la nueva capacidad cumplirá con las metas de negocio y los objetivos estratégicos, y abordará las preocupaciones de las partes interesadas cuando se implemente. La visión es la herramienta para vender los beneficios a las partes interesadas y a los responsables de la toma de decisiones. En esta fase se documentan las ventajas y desventajas de alto nivel, incluidos los riesgos y las oportunidades, y se selecciona el mejor curso de acción para que sirva como base para la Visión de la Arquitectura.
      .col-lg-11.col-md-11.col-12(data-aos="fade-down-left")
        p La visión de la arquitectura proporciona una descripción de alto nivel de las arquitecturas de referencia (actual) y de destino, abarcando todos los dominios según el marco adoptado por la organización.
        p Una parte integral de la visión de la arquitectura es la comprensión de las tecnologías emergentes, su impacto potencial en los sectores económicos y en particular las oportunidades comerciales que puedan apalancar para la organización.

    .h4.py-4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas Planeación de la Arquitectura Modelo de AE del Gobierno colombiano MAE

    .row.mb-5.justify-content-center.tarjeta.color-acento-botones.p-3
      .col-12(data-aos="fade-right")
        p La documentación de la planeación del ejercicio de AE debería incluir los siguientes atributos según (MINTIC, 2019):
      .col-12
        .row.justify-content-center.align-items-center
          .col-md-5(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/tema2/tema2-13.svg', alt='')
          .col-md-7
            ul.lista-ul.mb-2
              li.mb-0(data-aos="fade-down")
                i.fas.fa-circle.fa-cfx(style="color:#60CB28")
                | Necesidad. Definir la necesidad que se busca solucionar con el ejercicio de AE.
              li.mb-0(data-aos="fade-down")
                i.fas.fa-circle.fa-cfx(style="color:#60CB28")
                | Alcance. Describe el alcance y los objetivos planteados para el ejercicio de AE.
              li.mb-0(data-aos="fade-down")
                i.fas.fa-circle.fa-cfx(style="color:#60CB28")
                | Recursos técnicos y financieros necesarios para realizar el ejercicio de AE.
              li.mb-0(data-aos="fade-down")
                i.fas.fa-circle.fa-cfx(style="color:#60CB28")
                | Equipo requerido. Talento humano requerido para ejecutar el proyecto.
              li.mb-0(data-aos="fade-down")
                i.fas.fa-circle.fa-cfx(style="color:#60CB28")
                | Resultados esperados. Resultados esperados por la institución al finalizar el ejercicio de AE.
              li.mb-0(data-aos="fade-down")
                i.fas.fa-circle.fa-cfx(style="color:#60CB28")
                | Cubrimiento organizacional áreas y procesos de la institución involucrados, e interesados del ejercicio de AE.
              li.mb-0(data-aos="fade-down")
                i.fas.fa-circle.fa-cfx(style="color:#60CB28")
                | Gobierno del proyecto. Estructura de gobierno y toma de decisiones del proyecto, incluyendo los niveles de escalamiento.
              li.mb-0(data-aos="fade-down")
                i.fas.fa-circle.fa-cfx(style="color:#60CB28")
                | Plazo y cronograma. Estimación de tiempos de ejecución y actividades del ejercicio de AE.
              li.mb-0(data-aos="fade-down")
                i.fas.fa-circle.fa-cfx(style="color:#60CB28")
                | Productos o artefactos de Arquitectura Actual (AS-IS). Determinar por cada uno de los dominios establecidos en el marco de referencia de AE y la arquitectura misional (de negocio) los artefactos y documentación requerida.
              li.mb-0(data-aos="fade-down")
                i.fas.fa-circle.fa-cfx(style="color:#60CB28")
                | Producto o artefactos de Arquitectura Objetivo (TO-BE). Determinar para cada uno de los dominios establecidos en el marco de referencia de AE y la arquitectura misional (de negocio) los artefactos y documentación requerida.
              li.mb-0(data-aos="fade-down")
                i.fas.fa-circle.fa-cfx(style="color:#60CB28")
                | Alcance del análisis de brecha. Determinar los entregables del análisis de brecha.
              li.mb-0(data-aos="fade-down")
                i.fas.fa-circle.fa-cfx(style="color:#60CB28")
                | Mapa de ruta. Determinar los entregables del mapa de ruta.
              li.mb-0(data-aos="fade-down")
                i.fas.fa-circle.fa-cfx(style="color:#60CB28")
                | Plan de gestión de riesgos. 

    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Arquitectura actual y arquitectura objetivo

    p.mb-3(data-aos="fade-down-left") La realización de un ejercicio de AE es un proceso iterativo. El equipo abordará un solo ejercicio de Arquitectura a la vez, desarrollando las fases definidas en el marco de referencia que la organización haya adoptado, siguiendo los principios, lineamientos, y guías. Las evidencias del ejercicio de arquitectura son productos arquitectónicos, los artefactos y entregables son alojados en el repositorio. 
    p.mb-5(data-aos="fade-down-left") En el Modelo de AE de Gobierno colombiano MAE, (MINTIC, 2019) se describen 5 etapas para la ejecución del proceso de AE:

    .row.mb-5(data-aos="fade-down-left")
      .col-md-4.col-lg.col-12.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4.col-lg-6
            img(src='@/assets/curso/temas/tema2/tema2-14.svg' alt='')
        p.text-center Definición arquitectura actual
      .col-md-4.col-lg.col-12.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4.col-lg-6
            img(src='@/assets/curso/temas/tema2/tema2-15.svg' alt='')
        p.text-center Elaboración AE objetivo
      .col-md-4.col-lg.col-12.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4.col-lg-6
            img(src='@/assets/curso/temas/tema2/tema2-16.svg' alt='')
        p.text-center Análisis de brecha  
      .col-md-4.col-lg.col-12.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4.col-lg-6
            img(src='@/assets/curso/temas/tema2/tema2-17.svg' alt='')
        p.text-center Mapa de ruta
      .col-md-4.col-lg.col-12.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4.col-lg-6
            img(src='@/assets/curso/temas/tema2/tema2-18.svg' alt='')
        p.text-center Evaluación del ejercicio

    p.mb-3(data-aos="fade-down-left") En cada etapa o fase el equipo de arquitectura puede apoyarse en mejores prácticas y otros marcos de referencia reconocidos a nivel mundial, como los mencionados en secciones anteriores.
    p.mb-5(data-aos="fade-down-left") En la primera etapa: definición de la arquitectura actual, el equipo de arquitectura realiza:

    TabsA.color-secundario.mb-5
      .tarjeta.color-primario.p-4(titulo="Levantamiento de información")
        .row 
          .col-md-7.col-12
            p Identificación de relaciones entre elementos de la arquitectura.
          .col-md-5.col-12
            figure
              img(src='@/assets/curso/temas/tema2/tema2-19.png', alt='')
      .tarjeta.color-primario.p-4(titulo="Construcción AE actual")
        .row 
          .col-md-7.col-12
            ul.lista-ul.mb-2
              li.mb-0(data-aos="fade-down")
                i.fas.fa-circle.fa-cfx(style="color:#60CB28")
                | Información por cada dominio de arquitectura de negocio o misional.
              li.mb-0(data-aos="fade-down")
                i.fas.fa-circle.fa-cfx(style="color:#60CB28")
                | Información de la arquitectura de TI teniendo en cuenta los dominios del MAE.
          .col-md-5.col-12
            figure
              img(src='@/assets/curso/temas/tema2/tema2-20.png', alt='')
      .tarjeta.color-primario.p-4(titulo="Entregable AE actual")
        .row 
          .col-md-7.col-12
            p AE actual con 7 atributos.
          .col-md-5.col-12
            figure
              img(src='@/assets/curso/temas/tema2/tema2-21.png', alt='')
        
    p.text-center.mb-5(data-aos="fade-down-left") En tal sentido, el MAE establece que el levantamiento de información se realiza para cada dominio se requiere:   

    .row.justify-content-center.mb-5(data-aos="fade-down-right")
      .col-12.mb-2.mb-md-0
        figure
          img.d-none.d-sm-none.d-md-block(src='@/assets/curso/temas/tema2/tema2-22-md.svg', alt='')
          img.d-block.d-md-none(src='@/assets/curso/temas/tema2/tema2-22-sm.svg', alt='') 


    .row.mb-5.justify-content-center.tarjeta.color-primario.p-3
      .col-12(data-aos="fade-right")
        p.text-center La información solicitada en el levantamiento de información como insumo para la construcción de la AE actual comprende:
      .col-12
        .row.justify-content-center.align-items-center
          .col-md-4(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/tema2/tema2-23.png', alt='')
          .col-md-8
            ul.lista-ul.mb-2
              li.mb-0(data-aos="fade-down")
                i.fas.fa-circle.fa-cfx(style="color:#60CB28")
                | Plan estratégico de Tecnologías y sistemas de Información - PETI.
              li.mb-0(data-aos="fade-down")
                i.fas.fa-circle.fa-cfx(style="color:#60CB28")
                | Estrategia de la entidad.
              li.mb-0(data-aos="fade-down")
                i.fas.fa-circle.fa-cfx(style="color:#60CB28")
                | Estrategia del sector.
              li.mb-0(data-aos="fade-down")
                i.fas.fa-circle.fa-cfx(style="color:#60CB28")
                | Trámites y servicios de la entidad.
              li.mb-0(data-aos="fade-down")
                i.fas.fa-circle.fa-cfx(style="color:#60CB28")
                | Políticas de TI.
              li.mb-0(data-aos="fade-down")
                i.fas.fa-circle.fa-cfx(style="color:#60CB28")
                | Macroproceso y subprocesos de gestión de TI.
              li.mb-0(data-aos="fade-down")
                i.fas.fa-circle.fa-cfx(style="color:#60CB28")
                | Estructura organizacional de TI.
              li.mb-0(data-aos="fade-down")
                i.fas.fa-circle.fa-cfx(style="color:#60CB28")
                | Comités de decisión o en los que participa TI con su objetivo. 
              li.mb-0(data-aos="fade-down")
                i.fas.fa-circle.fa-cfx(style="color:#60CB28")
                | Manual de funciones y roles de TI. 
              li.mb-0(data-aos="fade-down")
                i.fas.fa-circle.fa-cfx(style="color:#60CB28")
                | Indicadores de proceso y gestión de TI existentes.
              li.mb-0(data-aos="fade-down")
                i.fas.fa-circle.fa-cfx(style="color:#60CB28")
                | Inventario y caracterización de bases de datos: descripción, plataforma, administrador, debilidades, fortalezas, necesidades e iniciativas. 
              li.mb-0(data-aos="fade-down")
                i.fas.fa-circle.fa-cfx(style="color:#60CB28")
                | Documentos administrados de forma física y electrónica.
              li.mb-0(data-aos="fade-down")
                i.fas.fa-circle.fa-cfx(style="color:#60CB28")
                | Documentos y datos en otras herramientas. 
              li.mb-0(data-aos="fade-down")
                i.fas.fa-circle.fa-cfx(style="color:#60CB28")
                | Directorio o inventario de entidades de negocio, información y servicios de información. 
              li.mb-0(data-aos="fade-down")
                i.fas.fa-circle.fa-cfx(style="color:#60CB28")
                | Mapa de información de la entidad (incluye flujos internos y externos).
              li.mb-0(data-aos="fade-down")
                i.fas.fa-circle.fa-cfx(style="color:#60CB28")
                | Inventario y caracterización de sistemas de información (misionales, estratégicos, portales de información) descripción, módulos, plataforma tecnológica, líderes funcionales, líderes técnicos, entradas, salidas, interfaces, debilidades, fortalezas, necesidades e iniciativas.

    p.mb-3(data-aos="fade-down-left") Posteriormente se construye la arquitectura actual, mediante los artefactos que se almacenan en el repositorio. 
    p.mb-5(data-aos="fade-down-left") En esta actividad se identificarán las relaciones entre los elementos de la arquitectura actual, plasmándose en los artefactos construidos en esta etapa. Por ejemplo, relaciones existentes entre los sistemas de información y los objetivos estratégicos de la organización se encuentran al identificar los sistemas de información que soportan los procesos misionales y los procesos misionales que soportan los objetivos estratégicos, y se establecen las relaciones, como se muestra a continuación:

    .row.justify-content-center.mb-5
      .col-12.col-lg-10.col.md-11(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 2. </b> <i>Ejemplo de relación entre elementos de arquitectura actual.</i>
        figure
          img.d-none.d-sm-none.d-md-block(src='@/assets/curso/temas/tema2/tema2-24-md.svg', alt='')
          img.d-block.d-md-none(src='@/assets/curso/temas/tema2/tema2-24-sm.svg', alt='')

    p.text-center.mb-5(data-aos="fade-down-left") Finalmente, el producto entregable de la etapa, con la documentación de la arquitectura actual debe tener los siguientes atributos:

    .row.justify-content-center.mb-5(data-aos="fade-down-right")
      .col-md-11.col-lg-10.col-12.mb-5.mb-md-0
        LineaTiempoD.color-secundario
          p.text-small(numero="1" titulo="Arquitectura misional (de negocio)") Consolida las vistas y artefactos de la arquitectura misional actual, incluye el modelo operativo de la entidad. Son elementos de la arquitectura misional: procesos institucionales, la misión, visión, objetivos estratégicos institucionales, de sector y/o territoriales, estructura organizacional, trámites y servicios institucionales.
          
          p.text-small(numero="2" titulo="Dominio de Estrategia de TI") Vistas y artefactos de la vista actual del dominio de estrategia de TI, relacionadas con la necesidad que se busca solucionar con el ejercicio de AE planteado.  Son elementos en este dominio: los objetivos estratégicos de la entidad y del sector, servicios que presta la entidad relacionados con la necesidad que se busca solucionar con el ejercicio de AE planteado, catálogo de servicios de TI, entre otros.
          
          p.text-small(numero="3" titulo="Dominio de Gobierno de TI") Vistas y artefactos de la vista actual del dominio de gobierno de TI, relacionadas con la necesidad que se busca solucionar con el ejercicio de AE planteado. Son elementos en este dominio: procesos de TI, normatividad y políticas de TI, entre otros aspectos definidos en este dominio. 
          
          p.text-small(numero="4" titulo="Arquitectura actual de Información") Vistas y artefactos de la arquitectura actual de información, relacionadas con la necesidad que se busca solucionar con el ejercicio de AE planteado.

          p.text-small(numero="5" titulo="Arquitectura actual de Sistemas de Información") Vistas y artefactos de la arquitectura actual de sistemas de información, relacionadas con la necesidad que se busca solucionar con el ejercicio de AE planteado.
          
          p.text-small(numero="6" titulo="Arquitectura actual de Servicios Tecnológicos") Vistas y artefactos de la arquitectura actual de servicios tecnológicos, relacionadas con la necesidad que se busca solucionar con el ejercicio de AE planteado.
          
          p.text-small(numero="7" titulo="Dominio de Uso y Apropiación") Vistas y artefactos de la vista actual del dominio de uso y apropiación, relacionadas con la necesidad que se busca solucionar con el ejercicio de AE planteado.
          
    .row.justify-content-center.mb-5 
      .col-12.col-md-11.col-lg-10.px-0.mb-5(data-aos="fade-left")
        figure 
          img(src='@/assets/curso/temas/tema2/tema2-25.png', alt='')
      .col-12.col-md-11.col-lg-10.px-0
          p(data-aos="fade-left") Por otra parte, en la etapa 2, construcción de la arquitectura objetivo se deben considerar:
          ul.lista-ul.mb-2
            li.mb-0(data-aos="fade-down")
              i.fas.fa-circle.fa-cfx(style="color:#60CB28")
              | Objetivos estratégicos.
            li.mb-0(data-aos="fade-down")
              i.fas.fa-circle.fa-cfx(style="color:#60CB28")
              | Compresión de las tecnologías emergentes.
            li(data-aos="fade-down")
              i.fas.fa-circle.fa-cfx(style="color:#60CB28")
              | Habilitadores de la transformación digital en la organización.
          p(data-aos="fade-left") De igual manera que en la documentación de la arquitectura actual, en la guía de MAE se listan los elementos mínimos y artefactos que el equipo de arquitectura construirá y actualizará en el repositorio:
          
    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario.p-5(data-aos="fade-left")
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema2/tema2-26.svg', alt='')
        h5.text-center 1- Definir artefactos o productos.
        p.text-center Artefactos del marco MAE.
      .col-md.tarjeta.p-5(style="background-color:#BFEAA9")(data-aos="fade-down")
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema2/tema2-27.svg', alt='')
        h5.text-center 2- Construcción AE objetivo.
        p.text-center Documentación según guías marco MAE.
      .col-md.tarjeta.p-5(style="background-color:#9FE07E")(data-aos="fade-right")
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema2/tema2-28.svg', alt='')
        h5.text-center 3. Actualizar repositorio.
        p.text-center Productos y artefactos construidos.

    p.text-center.mb-5(data-aos="fade-down-left") El entregable producto de la etapa, con la documentación de la Arquitectura Objetivo debe tener los siguientes atributos: 

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")(data-aos="fade-right")
      .tarjeta.color-adicional-1.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/tema2-29.svg' alt='')
        h5 Arquitectura misional (de negocio)
        p Consolida las vistas y artefactos de la arquitectura misional objetivo, incluye el modelo operativo de la entidad, procesos institucionales, la misión, visión, objetivos estratégicos institucionales, de sector y/o territoriales, estructura organizacional, trámites y servicios institucionales.  
      .tarjeta.color-adicional-1.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/tema2-30.svg' alt='')
        h5 Dominio de estrategia de TI 
        p Vistas y artefactos de la vista objetivo del dominio de estrategia de TI, relacionadas con la necesidad que se busca de solucionar con el ejercicio de AE planteado.
      .tarjeta.color-adicional-1.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/tema2-31.svg' alt='')
        h5 Dominio de gobierno de TI
        p Vistas y artefactos de la vista objetivo del dominio de gobierno de TI, relacionadas con la necesidad que se busca solucionar con el ejercicio de AE planteado.
      .tarjeta.color-adicional-1.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/tema2-32.svg' alt='')
        h5 Arquitectura objetivo de Información 
        p Vistas y artefactos de la arquitectura objetivo de información, relacionadas con la necesidad que se busca solucionar con el ejercicio de AE planteado.
      .tarjeta.color-adicional-1.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/tema2-33.svg' alt='')
        h5 Arquitectura objetivo de sistemas de información 
        p Vistas y artefactos de la arquitectura objetivo de sistemas de información, relacionadas con la necesidad que se busca solucionar con el ejercicio de AE planteado.
      .tarjeta.color-adicional-1.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/tema2-34.svg' alt='')
        h5 Arquitectura objetivo de servicios tecnológicos 
        p Vistas y artefactos de la arquitectura objetivo de servicios tecnológicos, relacionadas con la necesidad que se busca solucionar con el ejercicio de AE planteado.
      .tarjeta.color-adicional-1.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/tema2-35.svg' alt='')
        h5 Dominio de uso y apropiación 
        p Vistas y artefactos de la vista objetivo del dominio de uso y apropiación, relacionadas con la necesidad que se busca solucionar con el ejercicio de AE planteado.

    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Análisis de brecha, mapa de ruta y evaluación del ejercicio

    p.mb-3(data-aos="fade-down-left") Un análisis de brecha corresponde a la identificación, comparación y análisis de las diferencias entre el estado actual y el estado objetivo o deseado.
    p.mb-3(data-aos="fade-down-left") El análisis de brecha corresponde a la etapa 3, de AE con relación a los dominios permite a la organización planear las arquitecturas de transición necesarias para implementar y alcanzar la AE objetivo, a partir de lo que se identifica como puntos críticos u oportunidades de mejora.
    p.mb-5(data-aos="fade-down-left") En la práctica, las brechas identificadas son cerradas por los bloques de construcción que permiten alcanzar la arquitectura objetivo y fortalecer capacidades, a continuación de indicar las actividades para su análisis:

    .row.justify-content-center.mb-5
      .col-xl-5.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema2/tema2-36.png", alt="")
          .crd_hover_txt--body
            ul.lista-ul.mb-2
              li.mb-3(data-aos="fade-down")
                i.fas.fa-play(style="color:#7E10B8")
                | #[strong 1. Identificar capacidades]
            p.mb-0 Requeridas para alcanzar la AE objetivo.

      .col-xl-5.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema2/tema2-37.png", alt="")
          .crd_hover_txt--body
            ul.lista-ul.mb-2
              li.mb-3(data-aos="fade-down")
                i.fas.fa-play(style="color:#7E10B8")
                | #[strong 2. Realizar análisis de brecha en cada dominio]
            p.mb-0 - Misional.
            p.mb-0 - Estrategia TI.
            p.mb-0 - Gobierno TI.
            p.mb-0 - Información.
            p.mb-0 - Sistema de Información (SI).
            p.mb-0 - Servicios Tecnológicos.
            p.mb-0 - Uso y apropiación.
      
    .row.mb-5.justify-content-center
      .col-md-11.col-lg-10.cajon.color-primario.p-3(data-aos="fade-down-right")
        p.ps-4 Para el análisis se utiliza una herramienta en forma de matriz en donde:
        ul.lista-ul.mb-2.ps-4
          li.mb-0(data-aos="fade-down")
            i.fas.fa-circle.fa-cfx(style="color:#60CB28")
            | Se disponen los bloques estructurales de la AE actual en las filas.
          li.mb-0(data-aos="fade-down")
            i.fas.fa-circle.fa-cfx(style="color:#60CB28")
            | Se disponen los bloques estructurales de la AE objetivo en las columnas.
          li.mb-0(data-aos="fade-down")
            i.fas.fa-circle.fa-cfx(style="color:#60CB28")
            | Se identifican las celdas de intersección si los bloques estructurales deben ser modificados y permanecen igual.
          li.mb-0(data-aos="fade-down")
            i.fas.fa-circle.fa-cfx(style="color:#60CB28")
            | Se identifican los bloques estructurales nuevos, requeridos para lograr la AE objetivo.
          li.mb-0(data-aos="fade-down")
            i.fas.fa-circle.fa-cfx(style="color:#60CB28")
            | Se asigna una prioridad a los bloques estructurales identificados.
          li.mb-0(data-aos="fade-down")
            i.fas.fa-circle.fa-cfx(style="color:#60CB28")
            | Se estima el esfuerzo, tiempos y recursos financieros para cada componente de solución.

    p.mb-3(data-aos="fade-down-left") Por último, el entregable análisis de brecha se actualiza en el repositorio. Este entregable debe estar orientado a la definición de las acciones para el cierre de las brechas, priorización de componentes de solución y documentación.
    p.mb-3(data-aos="fade-down-left") En la etapa 4 mapa de ruta, el equipo define el plan de transformación para la organización. El mapa de ruta es un conjunto estructurado de acciones que definen la manera de lograr los objetivos fijados en la arquitectura objetivo. Dichas acciones se expresan en términos de programas, proyectos o iniciativas, con las estimaciones de tiempo, costos y riesgos asociados, que permitirán la transición paso a paso a la arquitectura objetivo.
    p.mb-5(data-aos="fade-down-left") A continuación, se enuncian las actividades de esta etapa:

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")(data-aos="fade-right")
      .tarjeta.color-adicional-1.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/tema2-38.svg' alt='')
        p Analizar los componentes de solución.
      .tarjeta.color-adicional-1.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/tema2-39.svg' alt='')
        p Analizar los componentes de solución de la arquitectura de TI.
      .tarjeta.color-adicional-1.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/tema2-40.svg' alt='')
        p Identificar y agrupar componentes de solución.
      .tarjeta.color-adicional-1.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/tema2-41.svg' alt='')
        p Documentar cada proyecto o iniciativa.
      .tarjeta.color-adicional-1.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/tema2-42.svg' alt='')
        p Definir los criterios de priorización de los objetivos.
      .tarjeta.color-adicional-1.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/tema2-43.svg' alt='')
        p Priorizar los proyectos con base en los criterios establecidos.
      .tarjeta.color-adicional-1.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/tema2-44.svg' alt='')
        p Elaborar el mapa de ruta para la implementación de AE en la institución.
      .tarjeta.color-adicional-1.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/tema2-45.svg' alt='')
        p Actualizar el repositorio de AE.

 
    .row.mb-5.justify-content-center
      .col-md-11.col-lg-10.tarjeta.tarjeta--gris.p-3(data-aos="fade-down-right")
        .row.justify-content-center
          .col-12
            p.ps-3 La documentación de cada proyecto o iniciativa debe incluir:
          .col-md-6.col-12
            ul.lista-ul.mb-2.ps-3
              li.mb-0(data-aos="fade-down")
                i.fas.fa-circle.fa-cfx(style="color:#60CB28")
                | Descripción y contexto.
              li.mb-0(data-aos="fade-down")
                i.fas.fa-circle.fa-cfx(style="color:#60CB28")
                | Alcance.
              li.mb-0(data-aos="fade-down")
                i.fas.fa-circle.fa-cfx(style="color:#60CB28")
                | Restricciones.
              li.mb-0(data-aos="fade-down")
                i.fas.fa-circle.fa-cfx(style="color:#60CB28")
                | Recursos técnicos y financieros.
              li.mb-0(data-aos="fade-down")
                i.fas.fa-circle.fa-cfx(style="color:#60CB28")
                | Talento humano requerido.
              li.mb-0(data-aos="fade-down")
                i.fas.fa-circle.fa-cfx(style="color:#60CB28")
                | Relación y dependencia con otros proyectos.
              li.mb-0(data-aos="fade-down")
                i.fas.fa-circle.fa-cfx(style="color:#60CB28")
                | Fases de implementación del proyecto.
              li.mb-0(data-aos="fade-down")
                i.fas.fa-circle.fa-cfx(style="color:#60CB28")
                | Oferta de valor actualizada.
              li.mb-0(data-aos="fade-down")
                i.fas.fa-circle.fa-cfx(style="color:#60CB28")
                | Tiempo estimado de cada proyecto.
          .col-md-6.col-12
            figure
              img(src="@/assets/curso/temas/tema2/tema2-46.png", alt="")

    p.mb-5(data-aos="fade-down-left") De igual manera en esta etapa, el equipo se debe apoyar de las mejores prácticas para la gestión de proyectos. El portafolio de proyectos debe ser gestionado por una gerencia de proyectos, que sea independiente del comité de AE y que responda directamente a la alta dirección, sin embargo, tanto la gerencia de proyectos como el comité de arquitectura tienen responsabilidad conjunta en el éxito del ejercicio de AE, y es su responsabilidad que los proyectos se ejecuten de acuerdo con lo establecido. 

    .row.justify-content-center.mb-5
      .col-12.col-lg-10.col.md-11(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 3. </b> <i>Portafolio de proyectos para la transformación.</i>
        figure
          img.d-none.d-sm-none.d-md-block(src='@/assets/curso/temas/tema2/tema2-47-md.svg', alt='')
          img.d-block.d-md-none(src='@/assets/curso/temas/tema2/tema2-47-sm.svg', alt='')

    p.mb-5(data-aos="fade-down-left") El mapa de ruta debe incorporar las prioridades del negocio, para generar valor en el corto y mediano plazo, así como definición de la gestión de operación para garantizar larga vida útil de las soluciones implementadas.
    
    .row.justify-content-center.mb-5.p-3(style="background-color:#F4F8FA")
      .col-12.col-md-11.col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-3.p-md-3.mb-5(data-aos="fade-down-right")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/tema2-48.png')})`}"
          )
          .bloque-texto-g__texto.p-4 
            p.mb-0 Como se ha mencionado anteriormente la adopción del Marco de Referencia de AE, es un proceso iterativo en el cual, por medio de ejercicios de arquitectura enfocados en resolver necesidades específicas, los equipos van incorporando gradualmente las mejores prácticas y los lineamientos que se enuncian en el marco de referencia.
      .col-12
        p.mb-3(data-aos="fade-down-left") A medida que se avanza en estos procesos de AE, las organizaciones van adquiriendo mayor madurez en sus capacidades.
        p.mb-3(data-aos="fade-down-left") La última etapa del ejercicio, etapa 5, comprende la evaluación del ejercicio de AE, con lo cual el equipo de arquitectura y las partes interesadas puedan comprender las lecciones aprendidas, y se tomen acciones para mejorar las habilidades de los integrantes del equipo, y la eficiencia en el proceso.
        p(data-aos="fade-down-left") La evaluación del ejercicio debería incluir los siguientes atributos según (MINTIC, 2019):

    .row.justify-content-center.mb-5
      .col-12.col-md-11.col-lg-10
        PasosA.color-acento-contenido.mb-5(tipo="n")(data-aos="fade-down-right")
          .row(data-aos="fade-down-left")
            .col-md-6.mb-4.mb-md-0
              h4 Lecciones aprendidas
              p Consolida las lecciones aprendidas del ejercicio de AE.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema2/tema2-49.png', alt='')
          .row(data-aos="fade-down-right")
            .col-md-6.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema2/tema2-50.png', alt='')
            .col-md-6
              h4 Recomendaciones a las metodologías y procesos de la institución
              p Con base en el análisis de las lecciones aprendidas.
          .row(data-aos="fade-down-left")
            .col-md-6.mb-4.mb-md-0
              h4 Tiempo
              p Evaluación de la ejecución del ejercicio con respecto al tiempo estimado en la planeación.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema2/tema2-51.png', alt='')
          .row(data-aos="fade-down-right")
            .col-md-6.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema2/tema2-52.png', alt='')
            .col-md-6
              h4 Costo
              p Evaluación financiera de la ejecución del ejercicio con respecto a la planeación previa.
          .row(data-aos="fade-down-left")
            .col-md-6.mb-4.mb-md-0
              h4 Alcance
              p Evaluación de la ejecución del ejercicio con respecto al alcance definido en la planeación de este.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema2/tema2-53.png', alt='')
          .row(data-aos="fade-down-right")
            .col-md-6.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema2/tema2-54.png', alt='')
            .col-md-6
              h4 Recursos
              p Evaluación de la ejecución del ejercicio con respecto a los recursos humanos y técnicos definidos en la planeación de este.


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        titulo: 'Métodos de Gestión de la capacidad empresarial',
        texto:
          'Determinan qué capacidades de negocio se requieren para generar valor comercial, incluida la definición de <strong>retorno de la inversión, medidas de control y de desempeño requeridas.</strong> Proporciona inicialmente los lineamientos a nivel estratégico para la AE, y posteriormente las actualizaciones a nivel de planificación anual brindan un nivel más preciso de orientación continua en el tiempo. La planificación basada en la capacidad es una de las técnicas aplicadas para la planificación empresarial.',
        imagen: require('@/assets/curso/temas/tema2/tema2-07.png'),
      },
      {
        titulo:
          'Métodos de Gestión de proyectos (portafolios, programas y proyectos)',
        texto:
          'Determinan cómo la empresa gestiona sus iniciativas de cambio. Es el marco que permite planificar y construir lo que se requiere, conociendo todo el contexto organizacional, cada pieza que entregan encajaría en el rompecabezas corporativo que es la Arquitectura Empresarial. A menudo, este marco se basa en las metodologías de gestión del “<i>Project Management Institute</i>”.',
        imagen: require('@/assets/curso/temas/tema2/tema2-08.png'),
      },
      {
        titulo: 'Métodos de Gestión de operaciones',
        texto:
          'Describen cómo la empresa ejecuta sus operaciones diarias. En esta gestión se reciben los entregables de las otras gestiones, luego los integra y los sostiene dentro de la infraestructura. Es usual que la gestión de servicios de TI se base en ISO/IEC 20000:2011 o en BS15000 (ITIL).',
        imagen: require('@/assets/curso/temas/tema2/tema2-09.png'),
      },
      {
        titulo: 'Métodos de Gestión de desarrollo de soluciones',
        texto:
          'Formalizan la forma en que se entregan las soluciones de acuerdo con las estructuras desarrolladas en la AE. La metodología de desarrollo de soluciones se utiliza para planificar, crear y entregar componentes arquitectónicos especificados en proyectos y portafolios. Estos entregables incluyen, pero no son exclusivamente tecnológicos, por ejemplo, un nuevo edificio, un nuevo conjunto de habilidades, equipo de producción, <em>marketing</em>, etc. La AE proporciona potencialmente el contexto para todas las actividades empresariales. ',
        imagen: require('@/assets/curso/temas/tema2/tema2-10.png'),
      },
    ],
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
