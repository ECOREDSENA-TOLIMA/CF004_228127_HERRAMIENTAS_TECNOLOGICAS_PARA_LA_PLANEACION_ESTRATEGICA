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
            p #[i ArchiMate Enterprise Architecture]. Es un lenguaje visual con un conjunto de iconografía predeterminada para describir, analizar y comunicar muchas preocupaciones de las arquitecturas empresariales a medida que cambian con el tiempo. El estándar proporciona un conjunto de entidades y relaciones con su correspondiente iconografía para la representación de Descripciones de Arquitectura. El ecosistema #[i ArchiMate] también admite un formato de intercambio en XML que permite el intercambio de modelos y diagramas entre herramientas. (#[i The Open Group], 2017).
          .col-md-7
            figure
              img(src='@/assets/curso/temas/tema1/tema1-03.png', alt='')
        .row
          .col-md-5.mb-4.mb-md-0
            h4 Modela de Planes de Negocio
            p #[i Business Motivation Model] (BMM) proporciona un esquema o estructura para desarrollar, comunicar y administrar planes de negocios de manera organizada. (OMG, 2015).
          .col-md-7
            figure
              img(src='@/assets/curso/temas/tema1/tema1-04.png', alt='')
        .row
          .col-md-5.mb-4.mb-md-0
            h4 Modelado de procesos de negocio
            p #[i Business Process Model and Notation] (BPMN) está destinado a ser utilizado directamente por las partes interesadas que diseñan, administran y realizan procesos comerciales, pero al mismo tiempo debe ser lo suficientemente preciso como para permitir que los diagramas BPMN se traduzcan en componentes de procesos de #[i software]. BPMN tiene una notación similar a un diagrama de flujo fácil de usar que es independiente de cualquier entorno de implementación en particular. (OMG, 2013).
          .col-md-7
            figure
              img(src='@/assets/curso/temas/tema1/tema1-05.png', alt='')
        .row
          .col-md-5.mb-4.mb-md-0
            h4 Modelado de desarrollo
            p #[i Unified Modeling Language] (UML) es una especificación que define un lenguaje gráfico para visualizar, especificar, construir y documentar los artefactos de los sistemas de objetos distribuidos. (OMG, 2017) UML cuenta con varios tipos de diagramas. UML no es un lenguaje de programación, es lenguaje de modelado, es decir se usa para describir aspectos del sistema como procesos, funciones del sistema, y aspectos concretos como esquemas de bases de datos y componentes reutilizables.
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
        h5 #[i ArchiMate]
        p Es un lenguaje estandarizado de modelado abierto e independiente de para describir, analizar y visualizar la arquitectura empresarial a través de diferentes dominios.
      .tarjeta.color-adicional-1.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/tema1-08.svg' alt='AvatarTop')
        h5 #[i Unified Modeling Language]
        p UML es un lenguaje de modelado estandarizado desarrollado para ayudar a los desarrolladores de sistemas y #[i software] a especificar, visualizar, construir y documentar los artefactos de los sistemas y de #[i software], así como para el modelado de negocios y otros sistemas que no son de #[i software].
      .tarjeta.color-adicional-1.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/tema1-09.svg' alt='AvatarTop')
        h5 #[i Business Process Model and Notation]
        p La notación BPMN es una representación gráfica estandarizada para especificar procesos de negocio.
      .tarjeta.color-adicional-1.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/tema1-10.svg' alt='AvatarTop')
        h5 #[i Business Motivation Model]
        p El Modelo de Motivación (#[i Empresarial Business Motivation Model] - BMM) proporciona un esquema o estructura para desarrollar, comunicar y administrar planes organizaciones de manera estandarizada.
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
              p.mb-0 #[i Service Oriented Architecture] es una colección de material para el uso de los arquitectos empresariales que trabajan con arquitectura orientada a servicios. SOA de #[i Open Group] ahora es reemplazada por ISO /IEC 16384:2016. (#[i The Open Group], 2021).
              p SOA es una forma de pensar en términos de servicios empresariales.
            .col-12
              figure
                img.d-none.d-sm-none.d-md-block(src='@/assets/curso/temas/tema1/tema1-15-md.svg', alt='')
                img.d-block.d-md-none(src='@/assets/curso/temas/tema1/tema1-15-sm.svg', alt='') 
              figcaption Nota. Es una imagen técnica por lo cual debe construirse de forma similar a la propuesta o adjuntarla. 
          .row(titulo="DMBOK")
            .col-12.mb-4.mb-md-0
              p #[i Data Management Body Of Knowledge del DAMA Internacional], se adopta para que la gestión de datos garantice la generación de valor en las organizaciones. Propone 11 áreas que se pueden visualizar en el gráfico. SOA es una forma de pensar en términos de servicios empresariales.
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
          p.text-small(numero="1" titulo="EABOK") El Conjunto de conocimiento de Arquitectura Empresarial (#[i Enterprise Architecture Body of Knowledge] - EABOK) es un compendio de mejores prácticas de Arquitectura Empresarial producida por el Centro de Informática e Informática Innovadoras de MITRE en Estados Unidos. 
        
          p.text-small(numero="2" titulo="SOA") El libro de SOA del #[i Open Group (Open Group SOA Source Book)] es una colección de material para ser utilizado por Arquitectos Empresariales que trabajan con arquitecturas orientadas a Servicios. 

          p.text-small(numero="3" titulo="DMBoK") El conjunto de conocimiento para la gestión de datos (#[i Data Management Body Of Knowledge]) de la asociación de profesionales en gerencia de Datos (#[i Data Management Association] - DAMA) contiene un área de conocimiento dedicada a la arquitectura de datos (www.dama.org, 2022).
          
          p.text-small(numero="4" titulo="TOGAF") El marco de trabajo de arquitectura empresarial del open group (#[i The Open Group Architecture Framework] - TOGAF) es uno de los marcos de trabajo más populares de arquitectura empresarial. Define un método para desarrollar una arquitectura empresarial (ADM) acompañado de guías y técnicas, también contiene recomendaciones para establecer la capacidad de arquitectura empresarial (#[i The Open Group], 2018).
          
          p.text-small(numero="5" titulo="<i>Zachman International</i>") El marco de trabajo de #[i Zachman] es una ontología empresarial y es una estructura fundamental para la arquitectura empresarial que proporciona una forma formal y estructurada de ver y definir una empresa. 
          
          p.text-small(numero="6" titulo="DODAF") El marco de trabajo de arquitectura empresarial del Departamento de Defensa de Estados Unidos (#[i Department of Defense Architecture Framework] - DoDAF). 
          
          p.text-small(numero="7" titulo="FEA") El marco de trabajo de arquitectura empresarial federal de Estados Unidos (#[i Federal Enterprise Architecture Framework] - FEAF). 
          
          p.text-small(numero="8" titulo="SABSA") El marco de trabajo (#[i Sherwood Applied Business Security Architecture] - SABSA®) y una metodología para desarrollar arquitecturas empresariales de seguridad direccionadas por los riesgos para entregar soluciones seguras de infraestructura para soportar las iniciativas de negocio. 

    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Herramientas tecnológicas en el ejercicio de Arquitectura Empresarial

    p.text-center.mb-5 En la categoría herramientas se encuentran modelos de madurez y herramientas de #[i software] de automatización de la AE (MINTIC, 2019):


    .row.justify-content-center.slyder-cf(data-aos="fade-down-left") 
      .col-12.col-md-7.col-lg-6(style="height:100%")
        SlyderF.mb-5(columnas="col-12")
          .tarjeta.tarjeta--slyder.p-4.m-3
            h5 #[i Togaf Modeling]
            p #[i "Togaf Modeling"] es un sitio colaborativo diseñado para proporcionar una guía y soluciones prácticas de modelado, mediante la selección de diferentes estándares que brindan una solución lista para usar. 
          .tarjeta.tarjeta--slyder.p-4.m-3
            h5 #[i Enterprise Architecture Maturity Model]
            p Modelo de madurez de Arquitectura Empresarial (#[i Enterprise Architecture Maturity Model] - EAMM) de la asociación nacional de Chief Information Officer CIO de los Estados Unidos (NASCIO).
          .tarjeta.tarjeta--slyder.p-4.m-3
            h5 ITScore
            p La evaluación de madurez ITScore de Gartner para la arquitectura empresarial evalúa la madurez de AE en cinco niveles, en función de ocho dimensiones principales de una práctica de EA.
          .tarjeta.tarjeta--slyder.p-4.m-3
            h5 Bizagi
            p Herramienta para el modelamiento de procesos de negocio. 
          .tarjeta.tarjeta--slyder.p-4.m-3
            h5 #[i Archimate]
            p Herramienta de arquitectura empresarial para gestionar la arquitectura empresarial basada en lenguaje #[i Archimate]. 
          .tarjeta.tarjeta--slyder.p-4.m-3
            h5 ADOIT
            p Herramienta de arquitectura empresarial gratuita con versión comunitaria. 
          .tarjeta.tarjeta--slyder.p-4.m-3
            h5 #[i ARIS Community]
            p Herramienta de Arquitectura Empresarial basada en lenguaje Aris (Únicamente diagramación). 
          //- .tarjeta.tarjeta--slyder.p-4.m-3
          //-   h5 Togaf Modeling
          //-   p "Togaf Modeling" es un sitio colaborativo diseñado para proporcionar una guía y soluciones prácticas de modelado, mediante la selección de diferentes estándares que brindan una solución lista para usar. 
          .tarjeta.tarjeta--slyder.p-4.m-3
            h5 Eclipse
            p Herramienta para construir metamodelos y diagramas entidad relación. 
          .tarjeta.tarjeta--slyder.p-4.m-3
            h5 #[i Essential Project]
            p Herramienta de Arquitectura Empresarial con versión #[i Open Source]. 
      .col-12.col-md-5.col-lg-4
        figure
          img(src='@/assets/curso/temas/tema1/tema1-20.svg', alt='')


    .h4.py-4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas Herramientas de #[i software] para la AE

    p.mb-4(data-aos="fade-down") Como se menciona previamente, en esta categoría se encuentra:

    .row.justify-content-center.slyder-cf.mb-4(data-aos="fade-down-left") 
      .col-12
        ul.lista-ul.mb-2
          li.mb-0
            i.fas.fa-circle.fa-cfx(style="color:#60CB28")
            | #[i Software] para modelamiento de procesos de negocio.
          li.mb-0
            i.fas.fa-circle.fa-cfx(style="color:#60CB28")
            | #[i Software] para construir modelos y diagramas.
          li.mb-0
            i.fas.fa-circle.fa-cfx(style="color:#60CB28")
            | Soluciones de AE.

    p.mb-5(data-aos="fade-down") Por otra parte, Excel, Visio y SharePoint, son herramientas básicas que por mucho tiempo han sido útiles para aproximarse a las visiones arquitectónicas, pero la gestión actual de AE requiere la democratización y flexibilidad, es decir que no solamente el personal de TI, también personas de negocio en toda la organización colaboren en el mapeo de datos, visualización de procesos, a través de portales accesibles para todos o alojadas en la nube. 

    .row.mb-5.justify-content-center
      .col-md-11.col-lg-10.cajon.color-acento-botones.p-3(data-aos="fade-right")
        .row.justify-content-center.align-items-center
          .col-md-3
            figure
              img(src='@/assets/curso/temas/tema1/tema1-21.svg', alt='')
          .col-md-9
            p La aplicación de sistemas de gestión de inventario está orientada a todos los sectores productivos, ya que, por más pequeña que sea una empresa u organización, esta necesita tener el control y administración de cada uno de los materiales, documentos y servicios, entre otros, que involucran el ejercicio de esta. 
            ul.lista-ul.mb-0
              li.mb-0
                i.fas.fa-circle.fa-cfx(style="color:#304C8E")
                | Capturar.
              li.mb-0
                i.fas.fa-circle.fa-cfx(style="color:#304C8E")
                | Almacenar.
              li.mb-0
                i.fas.fa-circle.fa-cfx(style="color:#304C8E")
                | Estructurar.
              li.mb-0
                i.fas.fa-circle.fa-cfx(style="color:#304C8E")
                | Analizar.

    p.mb-3(data-aos="fade-down") Por lo tanto, resulta esencial seleccionar la mejor herramienta que cumpla con las necesidades particulares y facilite el proceso de AE para la organización. 
    p.mb-5(data-aos="fade-down") Algunas de las características de las herramientas de AE modernas son (leanix.net, 2022): 
    
    .row.justify-content-center.mb-5
      .col-lg-10.col-md-11.col-12.position-relative
        .crd.crd--avatarHorizontal.crd--first.py-2(data-aos="fade-down")
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema1/tema1-22.svg", alt="alt")
            .col
              p Intuitivas, fáciles de usar y producen resultados desde el comienzo de su adopción, porque requieren poca capacitación y personalización en su configuración.
        .crd.crd--avatarHorizontal.crd--first.py-2(data-aos="fade-down")
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema1/tema1-24.svg", alt="alt")
            .col
              p Puede ser utilizada por personas del negocio, no se requiere ser de tecnología. Son herramientas que cuentan con una interfaz intuitiva y modelos de datos que todo tipo de usuario puede entender. Fomentan la colaboración de los propietarios de aplicaciones y expertos, lenguaje unificado para abordar y optimizar el impacto de TI en los resultados de negocio, personalizable para que las partes interesadas evalúen rápidamente la información relevante.
        .crd.crd--avatarHorizontal.crd--first.py-2(data-aos="fade-down")
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema1/tema1-25.svg", alt="alt")
            .col
              p Pueden descubrir datos automáticamente, usan API de integración, informes y diagramas automatizados, aprovechando tecnologías propias de los servicios en la nube.
        .crd.crd--avatarHorizontal.crd--first.py-2(data-aos="fade-down")
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema1/tema1-23.svg", alt="alt")
            .col
              p Visibilidad de la arquitectura de TI actual y capacidad para planificar el estado futuro deseado.

    .h4.py-4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas Modelo de madurez para AE

    p.mb-3(data-aos="zoom-down-right") Tener una buena AE no sucede espontáneamente, se requieren meses para ponerla en marcha, quizás iniciando por adoptar buenas prácticas e implementar la arquitectura con un proyecto de alto impacto para la organización, para posteriormente desarrollar la AE en otros proyectos y refinar el proceso. Un punto de partida es la comprensión del nivel de madurez de la capacidad, establecer objetivos alcanzables y eliminar progresivamente cualquier barrera para el éxito.
    p.mb-5(data-aos="zoom-down-right") La evaluación de la madurez es uno de los aspectos que se enmarcan en la “Fase preliminar” del Método de Desarrollo de la Arquitectura (ADM) de TOGAF. Dentro de los objetivos de la fase está establecer el objetivo de madurez de la capacidad y, por tanto, el equipo de arquitectura debe adoptar un buen modelo de madurez alineado con las necesidades de la organización, que proporcione medidas de éxito, y permita la mejora continua de la organización.
    
    .row.justify-content-center.mb-5(data-aos="zoom-down-right")
      .col-lg-11.col-md-11.col-12.position-relative
        .bloque-texto-g.color-primario.px-3.py-2.p-sm-4.p-md-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/tema1-26.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 La capacidad de una organización para ejecutar factores específicos proporciona una medida de madurez y se puede utilizar para recomendar una serie de pasos secuenciales para mejorar en el tiempo. Es una evaluación que les da a los ejecutivos una idea de cómo mejorar capacidades de la organización.
              br
              br
              | La planificación basada en la capacidad es un paradigma de planificación empresarial muy útil, que enmarca todas las fases del desarrollo de la arquitectura en el contexto de los resultados comerciales, vinculando claramente la visión de TI, las arquitecturas y los planes de implementación y migración con la estrategia corporativa, el negocio y la línea de negocio (#[i The Open Group], 2018).

    p.mb-5(data-aos="zoom-down-right") En el mismo TOGAF, capítulo 2, (#[i The Open Group], 2018) se menciona que una práctica de AE debe establecer capacidades en las siguientes áreas:
    
    .row.justify-content-center.mb-5(data-aos="fade-down-right")
      .col-12.mb-2.mb-md-0
        figure
          img.d-none.d-sm-none.d-md-block(src='@/assets/curso/temas/tema1/tema1-27-md.svg', alt='')
          img.d-block.d-md-none(src='@/assets/curso/temas/tema1/tema1-27-sm.svg', alt='') 

    p.mb-5(data-aos="zoom-down-right") En la siguiente sección se detallan algunas características del #[i Enterprise Architecture Maturity Model] - EAMM, desarrollado por NASCIO, aunque en la industria se encuentran otros modelos como:

    .row.mb-5.justify-content-center
      .col-md-11.col-lg-10(data-aos="fade-right")
        .row.justify-content-center.align-items-center
          .col-md-4.col-12
            figure
              img(src='@/assets/curso/temas/tema1/tema1-28.svg', alt='')
          .col-md-8.col-12
            p.mb-0 #[strong 1.] EAMMF (#[i Enterprise Architecture of Maturity Model Framework]).
            p.mb-0 #[strong 2.] ACMM (#[i Architecture Capability Maturity Model]).
            p.mb-0 #[strong 3.] EAAF (#[i Enterprise Architecture Assessment Framework]).
            p.mb-0 #[strong 4.] E2AMM (#[i Extended Enterprise Architecture Maturity Model]).
            p.mb-0 #[strong 5.] SAMM (#[i Strategic Alignment Maturity Model]).
            p.mb-0 #[strong 6.] MAEAF (#[i Maturity Assessment Enterprise Architecture Framework]).

    .row.mb-5.justify-content-center
      .col-md-11.col-lg-10.cajon.color-primario.p-3(data-aos="fade-down-right")
        p Estos modelos de madurez que fueron analizados por Patricia Suarez en su artículo (#[i Suarez, Villar, Infante, & Jiménez], 2018), mencionan que comparten criterios de evaluación de la AE y coinciden en cinco niveles de evaluación de la madurez, esto es desde un criterio inexistente o no programado hasta un nivel de desempeño optimizado.

    .h4.py-4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas Modelo de madurez de NASCIO para AE

    p.mb-3(data-aos="zoom-down-right") El Modelo de madurez de AE (#[i Enterprise Architecture Maturity Model] - EAMM) fue desarrollado por la Asociación Nacional de #[i Chief Information Officer] (CIO) de los Estados en Estados Unidos (NASCIO) para revisar objetivamente el estado de sus programas de AE. 
    p.mb-5(data-aos="zoom-down-right") El modelo EAMM se basa en el mismo concepto que el #[i Capability Maturity Model] (CMM) desarrollado por el Instituto de Ingeniería de #[i Software] (SEI) que describe la evolución de los procesos de desarrollo de #[i software] de las organizaciones a través de seis niveles: no programado (o inexistente), inicial o programado, repetible, definido, gestionado y optimizado (o mejora continua).

    .row.mb-5.justify-content-center
      .col-md-11.col-lg-10.cajon.color-acento-botones.p-3(data-aos="fade-right")
        .row.justify-content-center.align-items-center
          .col-md-8
            p El modelo EAMM permite comparar la efectividad en la adopción de una AE y mostrar la progresión de los beneficios que un programa de arquitectura administrado aporta a una organización a medida que madura.
            p EAMM es uno de los modelos de madurez más utilizados en la actualidad (NASCIO, 2013), permite evaluar la madurez del programa de AE en 6 niveles que van desde no documentado (nivel 0) a una AE madura (nivel 5).
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema1/tema1-29.png', alt='')

    p.mb-5(data-aos="fade-down-right") Cada nivel contiene los elementos que son relevantes para ese nivel de madurez en particular. Un cierto nivel de madurez solo se puede alcanzar si se han cumplido todos los niveles anteriores, como se muestra a continuación:

    .row.align-items-center.justify-content-center.mb-4(data-aos="fade-down-left")
      .col-md-11.col-lg-10.col-12
        ImagenInfografica.color-secundario.mb-4
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/tema1-30.svg', alt='')
          .tarjeta.color-secundario.p-3(x="77%" y="26%" numero="+")
            p En la organización los procesos han madurado, y basados en la comprensión del impacto de los cambios se llevan a cabo las mejoras del programa de AE.
          .tarjeta.color-secundario.p-3(x="73%" y="37%" numero="+")
            p Cuando la organización evalúa el rendimiento de la AE, se hace recolección de información y análisis para la comprensión de la capacidad y los procesos.
          .tarjeta.color-secundario.p-3(x="69%" y="48.5%" numero="+")
            p Cuando toda la organización conoce los procesos documentados, se utilizan plantillas aprobadas, y las actividades de AE se llevan a cabo de acuerdo con el plan definido.
          .tarjeta.color-secundario.p-3(x="65%" y="60%" numero="+")
            p En este caso los procesos son repetibles, se usan documentos reutilizables, y se realiza verificación y seguimiento. La organización identifica las tareas de la AE.
          .tarjeta.color-secundario.p-3(x="60.6%" y="72%" numero="+")
            p Hay definición de arquitectura base, aunque el conocimiento no está en su totalidad en la documentación, se depende de los individuos.
          .tarjeta.color-secundario.p-3(x="56.4%" y="83%" numero="+")
            p En la organización no existe documentación de la AE, y no se aplican estándares ni buenas prácticas en el desarrollo de soluciones.
 
    .row.justify-content-center.mb-4.d-block.d-md-none(data-aos="fade-down-right")
      .col-12.mb-2.mb-md-0
        a.anexo.mb-4(:href="obtenerLink('/downloads/niveles_de_madurez_eamm.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Niveles madurez EAMM.

    p.mb-5(data-aos="fade-down-right") Cada nivel de madurez contiene criterios denominados declaraciones para cada una de las 8 categorías, las cuales en conjunto dan una imagen del programa de AE para una organización en ese nivel. Estas declaraciones se han organizado en las siguientes categorías de AE (NASCIO, 2013):
    .tarjeta.color-acento-botones.p-4.mb-5(data-aos="fade-down-left")
      SlyderB.mb-0(:datos="datosSlyder")

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        titulo: 'Administración',
        texto: 'Roles y responsabilidades de gobierno.',
        imagen: require('@/assets/curso/temas/tema1/tema1-31.png'),
      },
      {
        titulo: 'Planificación',
        texto: 'Hoja de ruta del programa de AE y plan de implementación.',
        imagen: require('@/assets/curso/temas/tema1/tema1-32.png'),
      },
      {
        titulo: 'Marco (<em>framework</em>)',
        texto: 'Procesos y plantillas utilizados para el plan de AE.',
        imagen: require('@/assets/curso/temas/tema1/tema1-33.png'),
      },
      {
        titulo: 'Proyecto básico (<em>Blueprint</em>)',
        texto: 'Recopilación de los estándares y especificaciones reales.',
        imagen: require('@/assets/curso/temas/tema1/tema1-34.png'),
      },
      {
        titulo: 'Comunicación',
        texto:
          'Educación y distribución de detalles de AE y <em>Blueprint.</em>',
        imagen: require('@/assets/curso/temas/tema1/tema1-35.png'),
      },
      {
        titulo: 'Cumplimiento',
        texto:
          'Cumplimiento de los estándares, procesos y otros elementos de AE publicados, y los procesos para documentar y rastrear las variaciones de esos estándares.',
        imagen: require('@/assets/curso/temas/tema1/tema1-36.png'),
      },
      {
        titulo: 'Integración',
        texto: 'Puntos de contacto de los procesos de gestión con el AE.',
        imagen: require('@/assets/curso/temas/tema1/tema1-37.png'),
      },
      {
        titulo: 'Participación',
        texto: 'Apoyo del Programa AE en toda la organización.',
        imagen: require('@/assets/curso/temas/tema1/tema1-38.png'),
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
