<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Herramientas tecnológicas para gestionar y documentar ejercicio de Arquitectura Empresarial
      
    p.mb-4(data-aos="fade-down") Adoptar la AE en las organizaciones suele traer ventajas como asegurar el cumplimiento, el mejoramiento de procesos y capacidades, habilitar la innovación, también la estandarización de las soluciones tecnológicas que trae como consecuencia la reducción de complejidad y costos de TI, además la AE apoya la realización de la estrategia del negocio con el desarrollo de planes, programas y proyectos. 

    .row.justify-content-center.mb-5 
      .col-12.col-md-11.col-lg-10.px-0(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema1/tema1-01.png', alt='')
      .col-12.col-md-11.col-lg-10.cajon.color-adicional-1.py-3.px-4(data-aos="fade-left")
        p.mb-0 Para adoptar marcos de referencia, y desarrollar una buena AE es necesario implementar las mejores prácticas de la industria, y también usar herramientas que faciliten la labor del equipo de arquitectos, así como la participación y divulgación de la AE en todas las unidades de negocio.

    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Mejores prácticas

    p.mb-3(data-aos="fade-down") El equipo de arquitectura se puede apoyar en Estándares y mejores prácticas u otros marcos de referencia reconocidos a nivel mundial, para el levantamiento de la información asociada a entregables y otros aspectos de arquitectura.
    p.mb-4(data-aos="fade-down") A continuación, se enumeran algunos de los estándares y mejores prácticas de las que se pueden servir los arquitectos empresariales:

    .tarjeta.color-adicional-2.p-4.mb-5(data-aos="fade-right")
      SlyderA(tipo="b")
        .row
          .col-md-5.mb-4.mb-md-0
            h4 Estándares 
            p Existen estándares internacionales ISO relacionados y estándares utilizados en la industria para temas específicos de arquitectura empresarial como pueden ser los lenguajes de modelado de desarrollo de #[i software], modelado de procesos de negocio, y modelado para análisis de AE.
          .col-md-7
            figure
              img(src='@/assets/curso/temas/tema1/tema1-02.png', alt='')
        .row
          .col-md-5.mb-4.mb-md-0
            h4 Modelado de arquitectura
            p ArchiMate Enterprise Architecture. Es un lenguaje visual con un conjunto de iconografía predeterminada para describir, analizar y comunicar muchas preocupaciones de las arquitecturas empresariales a medida que cambian con el tiempo. El estándar proporciona un conjunto de entidades y relaciones con su correspondiente iconografía para la representación de Descripciones de Arquitectura. El ecosistema ArchiMate también admite un formato de intercambio en XML que permite el intercambio de modelos y diagramas entre herramientas. (The Open Group, 2017).
          .col-md-7
            figure
              img(src='@/assets/curso/temas/tema1/tema1-03.png', alt='')
        .row
          .col-md-5.mb-4.mb-md-0
            h4 Modela de Planes de Negocio
            p Business Motivation Model (BMM) proporciona un esquema o estructura para desarrollar, comunicar y administrar planes de negocios de manera organizada. (OMG, 2015).
          .col-md-7
            figure
              img(src='@/assets/curso/temas/tema1/tema1-04.png', alt='')
        .row
          .col-md-5.mb-4.mb-md-0
            h4 Modelado de procesos de negocio
            p Business Process Model and Notation (BPMN) está destinado a ser utilizado directamente por las partes interesadas que diseñan, administran y realizan procesos comerciales, pero al mismo tiempo debe ser lo suficientemente preciso como para permitir que los diagramas BPMN se traduzcan en componentes de procesos de #[i software]. BPMN tiene una notación similar a un diagrama de flujo fácil de usar que es independiente de cualquier entorno de implementación en particular. (OMG, 2013).
          .col-md-7
            figure
              img(src='@/assets/curso/temas/tema1/tema1-05.png', alt='')
        .row
          .col-md-5.mb-4.mb-md-0
            h4 Modelado de desarrollo
            p Unified Modeling Language (UML) es una especificación que define un lenguaje gráfico para visualizar, especificar, construir y documentar los artefactos de los sistemas de objetos distribuidos. (OMG, 2017) UML cuenta con varios tipos de diagramas. UML no es un lenguaje de programación, es lenguaje de modelado, es decir se usa para describir aspectos del sistema como procesos, funciones del sistema, y aspectos concretos como esquemas de bases de datos y componentes reutilizables.
          .col-md-7
            figure
              img(src='@/assets/curso/temas/tema1/tema1-06.png', alt='')

    p.mb-4(data-aos="fade-down") En relación con UML, este cuenta con varios tipos de diagramas que permiten mostrar diferentes aspectos de las entidades representadas (OMG, 2017):


    .row.justify-content-center.mb-5 
      .col-11.col-md-5
        .cajon-cf.color-acento-contenido.py-3.px-4(data-aos="fade-left")
          ul.lista-ul.mb-2
            li.mb-0
              i.fas.fa-circle.fa-cfx
              | #[strong Diagramas de comportamiento:]
          p Diagrama de actividades, de casos de uso, de máquina de estados, de secuencia, de comunicación, de tiempos, y global de iteraciones.
      .col-11.col-md-5
        .cajon-cf.color-acento-contenido.py-3.px-4(data-aos="fade-left")
          ul.lista-ul.mb-2
            li.mb-0
              i.fas.fa-circle.fa-cfx
              | #[strong Diagramas estructurales:] 
          p Diagrama de clases, de componentes, de despliegue, de objetos de paquetes, de perfiles, de estructura compuesta.

    p.mb-5.text-center(data-aos="fade-left") A continuación, se describen algunos de los estándares de AE más utilizados:

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")(data-aos="fade-right")
      .tarjeta.color-adicional-1.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/tema1-07.svg' alt='AvatarTop')
        h5 ArchiMate
        p Es un lenguaje estandarizado de modelado abierto e independiente de para describir, analizar y visualizar la arquitectura empresarial a través de diferentes dominios.
      .tarjeta.color-adicional-1.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/tema1-08.svg' alt='AvatarTop')
        h5 Unified Modeling Language
        p UML es un lenguaje de modelado estandarizado desarrollado para ayudar a los desarrolladores de sistemas y #[i software] a especificar, visualizar, construir y documentar los artefactos de los sistemas y de #[i software], así como para el modelado de negocios y otros sistemas que no son de #[i software].
      .tarjeta.color-adicional-1.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/tema1-09.svg' alt='AvatarTop')
        h5 Business Process Model and Notation
        p La notación BPMN es una representación gráfica estandarizada para especificar procesos de negocio.
      .tarjeta.color-adicional-1.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/tema1-10.svg' alt='AvatarTop')
        h5 Business Motivation Model
        p El Modelo de Motivación (Empresarial Business Motivation Model - BMM) proporciona un esquema o estructura para desarrollar, comunicar y administrar planes organizaciones de manera estandarizada.
      .tarjeta.color-adicional-1.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/tema1-11.svg' alt='AvatarTop')
        h5 ISO/IEC 27001:2013
        p Especifica los requisitos para establecer, implementar, mantener y mejorar continuamente un sistema de gestión de seguridad de la información dentro del contexto de la organización. 
      .tarjeta.color-adicional-1.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/tema1-12.svg' alt='AvatarTop')
        h5 ISO/IEC/IEEE 42030:2019	
        p Define los medios para organizar y registrar evaluaciones de arquitectura para empresas, sistemas y aplicación de #[i software]. 
      .tarjeta.color-adicional-1.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/tema1-13.svg' alt='AvatarTop')
        h5 ISO/IEC/IEEE 42020:2019	
        p Establece un conjunto de descripciones de procesos para el gobierno y la gestión de una colección de arquitecturas. 
      .tarjeta.color-adicional-1.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/tema1-14.svg' alt='AvatarTop')
        h5 ISO/IEC/IEEE 42010:2011	
        p Aborda la creación, análisis y mantenimiento de arquitecturas de sistemas mediante el uso de descripciones de arquitectura. 
      
    div.p-3.mb-5(style="background-color:#F6F6F6")
      p.mb-0 Nota. Adaptado de (MINTIC, 2019)

    p.mb-5(data-aos="fade-left") Las mejores prácticas han demostrado que funcionan y producen buenos resultados y se recomiendan en cada industria, definen aspectos metodológicos y técnicos, en este caso para la implementación del modelo de AE se encuentran:

    .row.justify-content-center.mb-5 
      .col-12.col-md-11.col-lg-10.col-md-5(data-aos="fade-down")
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta color-adicional-2")
          .row(titulo="SOA")
            .col-12.mb-4.mb-md-0
              p.mb-0 Service Oriented Architecture es una colección de material para el uso de los arquitectos empresariales que trabajan con arquitectura orientada a servicios. SOA de Open Group ahora es reemplazada por ISO /IEC 16384:2016. (The Open Group, 2021)
              p SOA es una forma de pensar en términos de servicios empresariales.
            .col-12
              figure
                img.d-none.d-sm-none.d-md-block(src='@/assets/curso/temas/tema1/tema1-15-md.svg', alt='')
                img.d-block.d-md-none(src='@/assets/curso/temas/tema1/tema1-15-sm.svg', alt='') 
              figcaption Nota. Es una imagen técnica por lo cual debe construirse de forma similar a la propuesta o adjuntarla. 
          .row(titulo="DMBOK")
            .col-12.mb-4.mb-md-0
              p Data Management Body Of Knowledge del DAMA Internacional, se adopta para que la gestión de datos garantice la generación de valor en las organizaciones. Propone 11 áreas que se pueden visualizar en el gráfico. SOA es una forma de pensar en términos de servicios empresariales.
            .col-12
              figure
                img.d-none.d-sm-none.d-md-block(src='@/assets/curso/temas/tema1/tema1-16-md.svg', alt='')
                img.d-block.d-md-none(src='@/assets/curso/temas/tema1/tema1-16-sm.svg', alt='')
              figcaption Nota. Es una imagen técnica por lo cual debe construirse de forma similar a la propuesta o adjuntarla. 
          .row(titulo="EABOK")
            .col-12.mb-4.mb-md-0
              p Proporciona una referencia en evolución de conocimiento para usar sobre AE. Se descompone en 7 áreas de conocimiento (MITRE Corporation, 2022):
              .row 
                .col-md-4
                  ol.lista-ol--cuadro
                    li 
                      .lista-ol--cuadro__vineta
                        span 1
                      | Alcance Organizacional y Estructura de AE.
                .col-md-4
                  ol.lista-ol--cuadro
                    li 
                      .lista-ol--cuadro__vineta
                        span 2
                      | Desarrollo de un AE.
                .col-md-4
                  ol.lista-ol--cuadro
                    li 
                      .lista-ol--cuadro__vineta
                        span 3
                      | AE en la práctica.
                .col-md-4
                  ol.lista-ol--cuadro
                    li 
                      .lista-ol--cuadro__vineta
                        span 4
                      | Gobernanza.
                .col-md-4
                  ol.lista-ol--cuadro
                    li 
                      .lista-ol--cuadro__vineta
                        span 5
                      | Fundamentos de AE.
                .col-md-4
                  ol.lista-ol--cuadro
                    li 
                      .lista-ol--cuadro__vineta
                        span 6
                      | Gestión de AE.
                .col-md-4
                  ol.lista-ol--cuadro
                    li 
                      .lista-ol--cuadro__vineta
                        span 7
                      | Perspectivas sobre AE.
            .col-12
              figure
                img.d-none.d-sm-none.d-md-block(src='@/assets/curso/temas/tema1/tema1-17-md.svg', alt='')
                img.d-block.d-md-none(src='@/assets/curso/temas/tema1/tema1-17-sm.svg', alt='')
              figcaption Nota: es una imagen técnica por lo cual debe construirse de forma similar a la propuesta o adjuntarla. 

    p.mb-5(data-aos="fade-left") Para complementar y fortalecer la analítica de datos, DMBOK, propone 7 elementos para facilitar cualquier iniciativa alrededor de los datos:
    
    .row.justify-content-center.mb-5(data-aos="fade-down-left") 
      .col-md-6.col-12.col-lg-5
        ol.lista-ol--cuadro.lista-ol--separador
          li 
            .lista-ol--cuadro__vineta
              span 1
            | Metas y principios.
          li 
            .lista-ol--cuadro__vineta
              span 2
            | Actividades.
          li 
            .lista-ol--cuadro__vineta
              span 3
            | Roles y responsabilidades.
          li 
            .lista-ol--cuadro__vineta
              span 4
            | Entregables.
          li 
            .lista-ol--cuadro__vineta
              span 5
            | Prácticas y técnicas.
          li 
            .lista-ol--cuadro__vineta
              span 6
            | Herramientas.
          li 
            .lista-ol--cuadro__vineta
              span 7
            | Organización y cultura.
      .col-12.col-md-6.col-lg-5.d-none.d-sm-none.d-md-block
        figure
          img(src='@/assets/curso/temas/tema1/tema1-18.png', alt='')

    p.text-center.mb-5(data-aos="fade-down") A continuación, se encuentran algunas de las mejores prácticas de AE (MINTIC, 2019):

    .row.justify-content-center.mb-5(data-aos="fade-down-left") 
      .col-12.col-md-4.d-none.d-sm-none.d-md-block
        figure
          img(src='@/assets/curso/temas/tema1/tema1-19.png', alt='')
      .col-md-8.col-12
        LineaTiempoD.color-secundario
          p.text-small(numero="1" titulo="EABOK") El Conjunto de conocimiento de Arquitectura Empresarial (Enterprise Architecture Body of Knowledge - EABOK) es un compendio de mejores prácticas de Arquitectura Empresarial producida por el Centro de Informática e Informática Innovadoras de MITRE en Estados Unidos. 
        
          p.text-small(numero="2" titulo="SOA") El libro de SOA del Open Group (Open Group SOA Source Book) es una colección de material para ser utilizado por Arquitectos Empresariales que trabajan con arquitecturas orientadas a Servicios. 

          p.text-small(numero="3" titulo="DMBoK") El conjunto de conocimiento para la gestión de datos (Data Management Body Of Knowledge) de la asociación de profesionales en gerencia de Datos (Data Management Association - DAMA) contiene un área de conocimiento dedicada a la arquitectura de datos (www.dama.org, 2022).
          
          p.text-small(numero="4" titulo="TOGAF") El marco de trabajo de arquitectura empresarial del open group (The Open Group Architecture Framework - TOGAF) es uno de los marcos de trabajo más populares de arquitectura empresarial. Define un método para desarrollar una arquitectura empresarial (ADM) acompañado de guías y técnicas, también contiene recomendaciones para establecer la capacidad de arquitectura empresarial (The Open Group, 2018).
          
          p.text-small(numero="5" titulo="Zachman International") El marco de trabajo de Zachman es una ontología empresarial y es una estructura fundamental para la arquitectura empresarial que proporciona una forma formal y estructurada de ver y definir una empresa. 
          
          p.text-small(numero="6" titulo="DODAF") El marco de trabajo de arquitectura empresarial del Departamento de Defensa de Estados Unidos (Department of Defense Architecture Framework - DoDAF). 
          
          p.text-small(numero="7" titulo="FEA") El marco de trabajo de arquitectura empresarial federal de Estados Unidos (Federal Enterprise Architecture Framework - FEAF). 
          
          p.text-small(numero="8" titulo="SABSA") El marco de trabajo (Sherwood Applied Business Security Architecture - SABSA®) y una metodología para desarrollar arquitecturas empresariales de seguridad direccionadas por los riesgos para entregar soluciones seguras de infraestructura para soportar las iniciativas de negocio. 

    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Herramientas tecnológicas en el ejercicio de Arquitectura Empresarial

    p.text-center.mb-5 En la categoría herramientas se encuentran modelos de madurez y herramientas de software de automatización de la AE (MINTIC, 2019):


    .row.justify-content-center.slyder-cf(data-aos="fade-down-left") 
      .col-12.col-md-7.col-lg-6(style="height:100%")
        SlyderF.mb-5(columnas="col-12")
          .tarjeta.tarjeta--slyder.p-4.m-3
            h5Togaf Modeling
            p "Togaf Modeling" es un sitio colaborativo diseñado para proporcionar una guía y soluciones prácticas de modelado, mediante la selección de diferentes estándares que brindan una solución lista para usar. 
          .tarjeta.tarjeta--slyder.p-4.m-3
            h5Enterprise Architecture Maturity Model
            p Modelo de madurez de Arquitectura Empresarial (Enterprise Architecture Maturity Model - EAMM) de la asociación nacional de Chief Information Officer CIO de los Estados Unidos (NASCIO).
          .tarjeta.tarjeta--slyder.p-4.m-3
            h5 ITScore
            p La evaluación de madurez ITScore de Gartner para la arquitectura empresarial evalúa la madurez de AE en cinco niveles, en función de ocho dimensiones principales de una práctica de EA.
          .tarjeta.tarjeta--slyder.p-4.m-3
            h5 Bizagi
            p Herramienta para el modelamiento de procesos de negocio. 
          .tarjeta.tarjeta--slyder.p-4.m-3
            h5 Archimate
            p Herramienta de arquitectura empresarial para gestionar la arquitectura empresarial basada en lenguaje Archimate. 
          .tarjeta.tarjeta--slyder.p-4.m-3
            h5 ADOIT
            p Herramienta de arquitectura empresarial gratuita con versión comunitaria. 
          .tarjeta.tarjeta--slyder.p-4.m-3
            h5 ARIS Community
            p Herramienta de Arquitectura Empresarial basada en lenguaje Aris (Únicamente diagramación). 
          .tarjeta.tarjeta--slyder.p-4.m-3
            h5 Togaf Modeling
            p "Togaf Modeling" es un sitio colaborativo diseñado para proporcionar una guía y soluciones prácticas de modelado, mediante la selección de diferentes estándares que brindan una solución lista para usar. 
          .tarjeta.tarjeta--slyder.p-4.m-3
            h5 Eclipse
            p Herramienta para construir metamodelos y diagramas entidad relación. 
          .tarjeta.tarjeta--slyder.p-4.m-3
            h5 Essential Project
            p Herramienta de Arquitectura Empresarial con versión Open Source. 
      .col-12.col-md-5.col-lg-4
        figure
          img(src='@/assets/curso/temas/tema1/tema1-20.svg', alt='')


    .h4.py-4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas Herramientas de #[i software] para la AE

    p.mb-4(data-aos="fade-down") Como se menciona previamente, en esta categoría se encuentra:

    .row.justify-content-center.slyder-cf(data-aos="fade-down-left") 
      .col-12
        ul.lista-ul.mb-2
          li.mb-0
            i.fas.fa-circle.fa-cfx(style="color:#60CB28")
            | Software para modelamiento de procesos de negocio.
          li.mb-0
            i.fas.fa-circle.fa-cfx(style="color:#60CB28")
            | Software para construir modelos y diagramas.
          li.mb-0
            i.fas.fa-circle.fa-cfx(style="color:#60CB28")
            | Soluciones de AE.

    p.mb-5(data-aos="fade-down") Por otra parte, Excel, Visio y SharePoint, son herramientas básicas que por mucho tiempo han sido útiles para aproximarse a las visiones arquitectónicas, pero la gestión actual de AE requiere la democratización y flexibilidad, es decir que no solamente el personal de TI, también personas de negocio en toda la organización colaboren en el mapeo de datos, visualización de procesos, a través de portales accesibles para todos o alojadas en la nube. 


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
