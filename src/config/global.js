export default {
  global: {
    componenteFormativo: 'Ejercicio de Arquitectura Empresarial',
    descripcionCurso:
      'En el desarrollo del ejercicio de arquitectura empresarial el equipo debe apoyarse de las mejores prácticas de la industria, de los estándares, de otros marcos de arquitectura, modelo de madurez y las herramientas tecnológicas. A través de los ejercicios de arquitectura, de manera coordinada con los demás marcos de gestión, las organizaciones mejoran las capacidades y logran la transformación esperada.    ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo:
          'Herramientas tecnológicas para gestionar y documentar ejercicio de Arquitectura Empresarial',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Mejores prácticas',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Herramientas tecnológicas en el ejercicio de Arquitectura Empresarial',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Evaluación del ejercicio de Arquitectura Empresarial',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Arquitectura actual y arquitectura objetivo',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo:
              'Análisis de brecha, mapa de ruta y evaluación del ejercicio',
            hash: 't_2_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_004_228127.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema:
        'Herramientas tecnológicas para gestionar y documentar ejercicio de Arquitectura Empresarial',
      referencia:
        'CertCampus. (2019). ADM El método de desarrollo de la Arquitectura. [Vídeo], YouTube ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=5sXE4izHgWc',
    },
    {
      tema: 'Evaluación del ejercicio de Arquitectura Empresarial',
      referencia:
        'Ministerio TIC Colombia. (2021) Arquitectura para todos. [Vídeo], YouTube ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=JJLQCK8LmVA',
    },
  ],
  glosario: [
    {
      termino: '<em>API - application programming interface</em>',
      significado:
        'Es como una capa de abstracción, representada por el conjunto funciones y procedimientos, que ofrece cierta biblioteca de <em>software</em> para comunicarse con otro <em>software</em>.',
    },
    {
      termino: 'Arquitectura',
      significado:
        'Es un conjunto de elementos, sus interrelaciones y factores externos que gobiernan su diseño, su comportamiento y su evolución.',
    },
    {
      termino: 'Arquitectura de microservicios',
      significado:
        'Los microservicios son un enfoque arquitectónico nativo en la nube en el que una única aplicación se compone de muchos componentes o servicios más pequeños, acoplables e implementables de forma independiente. Estos servicios normalmente poseen su propio recurso de tecnología, incluyendo base de datos y modelo de gestión de datos; se comunican entre sí a través de una combinación de API REST, <em>streaming</em> de eventos y <em>message brokers</em>. (IBM, 2021)',
    },
    {
      termino: 'CIO - <em>Chief Information Officer</em>',
      significado:
        'Director de Tecnologías de la información y Comunicaciones, es el ejecutivo que se encarga de que la organización logre el mejor rendimiento posible a través del uso de tecnologías de la información (TI).',
    },
    {
      termino: 'Dominios',
      significado:
        'Los dominios son las vistas, o perspectivas de Arquitectura Empresarial, para facilitar la descripción y el análisis. Cada marco de AE tiene denominación diferente para dichas perspectivas. En la arquitectura empresarial pueden existir los dominios: arquitectura de aplicaciones, arquitectura de datos, arquitectura de infraestructura y arquitectura de seguridad. ',
    },
    {
      termino: 'Marcos de referencia',
      significado:
        'Conjunto de métodos, herramientas y lenguaje común para la creación, adopción y mantenimiento de la Arquitectura Empresarial en las organizaciones.',
    },
    {
      termino: 'Servicio',
      significado:
        'Un servicio es una representación lógica de una actividad comercial repetible que tiene un resultado específico (por ejemplo, verificar el crédito del cliente, proporcionar datos meteorológicos, consolidar informes de perforación). Es autocontenido. Puede estar compuesto por otros servicios. Es una “caja negra” para los consumidores del servicio. (The Open Group, 2021)',
    },
    {
      termino: 'SOA - <em>Service Oriented Architecture</em>',
      significado:
        'El estilo de arquitectura SAO se caracteriza por hacer que los componentes de <em>software</em> sean reutilizables a través de interfaces de servicio. SOA emergió a finales de la década de 1990, y representa una etapa importante en la evolución del desarrollo de aplicaciones y la integración. Los servicios se exponen utilizando protocolos de red estándar, como SOAP (protocolo simple de acceso a objetos) /HTTP o JSON/HTTP, para enviar solicitudes para leer o cambiar datos. Los servicios se publican de tal forma que rápidamente los desarrolladores pueden encontrarlos rápidamente y reutilizarlos para ensamblar nuevas aplicaciones.',
    },
    {
      termino: 'Transformación Digital',
      significado:
        'La transformación digital es la adaptación continua de los negocios a las exigencias del entorno cambiante. Es un enfoque centrado en el cliente que utiliza tecnologías digitales para aprovechar los datos e impulsar flujos de trabajo inteligentes. Entre las tecnologías utilizadas actualmente y en el futuro cercano tenemos la Inteligencia Artificial, la automatización, IoT, nube híbrida, <em>Blockchain</em>, y Microservicios. <br>El objetivo de la transformación digital es construir una base técnica y operativa, para evolucionar y responder de la mejor manera posible a las expectativas impredecibles y cambiantes de los clientes, las condiciones del mercado y los eventos locales o globales.',
    },
  ],
  referencias: [
    {
      referencia:
        'CertCampus. (2019). <em>Curso TOGAF® 9.2 Certified: 1.1 ADM, Método de Desarrollo de la Arquitectura.</em> [Vídeo] YouTube:',
      link: 'https://www.youtube.com/watch?v=5sXE4izHgWc',
    },
    {
      referencia:
        'DAMA International. (2022) <em>DAMA - DMBOK. Data Management Body of Knowledge.</em>',
      link: '',
    },
    {
      referencia:
        'EABOK. (s.f.). About the Enterprise Architecture Body of Knowledge (EABOK).',
      link: 'https://eabok.org/about/',
    },
    {
      referencia: 'IBM. (s.f). ¿Qué son los microservicios?',
      link: 'https://www.ibm.com/mx-es/cloud/learn/microservices',
    },
    {
      referencia:
        'leanix.net. (2022). <em>Enterprise Architecture Tool Selection.</em> ',
      link:
        'https://www.leanix.net/en/wiki/ea/enterprise-architecture-tool-selection-guide',
    },
    {
      referencia: 'MINTIC. (s.f). <em>Arquitectura TI Colombia.</em> ',
      link:
        'https://www.mintic.gov.co/portal/inicio/Atencion-y-Servicio-a-la-Ciudadania/Preguntas-frecuentes/54891:Arquitectura-TI-Colombia',
    },
    {
      referencia:
        'MINTIC. (2023). <em>Documento Maestro. Marco de Referencia de Arquitectura Empresarial.</em> ',
      link:
        'https://www.mintic.gov.co/arquitecturaempresarial/630/articles-204807_recurso_2.pdf',
    },
    {
      referencia:
        'MINTIC. (2023). <em>Guía General MAE.G.PA - PROCESO DE ARQUITECTURA EMPRESARIAL</em> ',
      link:
        'https://www.mintic.gov.co/arquitecturaempresarial/630/articles-237652_recurso_1.pdf',
    },
    {
      referencia:
        'NASCIO. (2013). <em>Enterprise Architecture Maturity Model Version 1.3.</em> ',
      link: 'https://www.nascio.org/wp-content/uploads/2019/11/NASCIO-EAMM.pdf',
    },
    {
      referencia: 'OMG. (2013). Business Process Model and Notation BPMN:',
      link: 'https://www.omg.org/spec/BPMN/2.0.2/PDF',
    },
    {
      referencia: 'OMG. (2015). Business Motivation Model BMM: ',
      link: 'https://www.omg.org/spec/BMM/1.3/PDF',
    },
    {
      referencia: 'OMG. (2017). Unified Modeling Language UML: ',
      link: 'https://www.omg.org/spec/UML/2.5.1/PDF',
    },
    {
      referencia:
        'Suarez, P., Villar, L., Infante, M., & Jiménez, L. (2018). Análisis del modelo de madurez de la arquitectura empresarial. <em>Revista Cubana De Ingeniería</em>, 8 (3), 9-16. Obtenido de ',
      link: 'https://rci.cujae.edu.cu/index.php/rci/article/view/698',
    },
    {
      referencia:
        'The Open Group. (2017). <em>ArchiMate® Model Exchange File Format for the ArchiMate Modeling Language, Version 3.0.</em>',
      link: 'https://publications.opengroup.org/c174',
    },
    {
      referencia:
        'The Open Group. (2018). <em>Welcome to the TOGAF Standard, Version 9.2, a standard of The Open Group.</em>',
      link: 'https://pubs.opengroup.org/architecture/togaf9-doc/arch/',
    },
    {
      referencia:
        'The Open Group. (s.f). <em>Service-Oriented Architecture - What Is SOA?</em> ',
      link:
        'http://www.opengroup.org/soa/source-book/soa/p1.htm#soa_definition',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de línea de producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Dolly Stella Carrillo Vega',
          cargo: 'Experto temático',
          centro:
            'Regional Norte de Santander, Centro de la Industria, la Empresa y los Servicios',
        },
        {
          nombre: 'Gustavo Santis Mancipe',
          cargo: 'Diseñador Instruccional',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
        },
        {
          nombre: 'Silvia Milena Sequeda Cárdenas',
          cargo: 'Asesora Pedagógica y Metodológica',
          centro: 'Regional Distrito Capital - Centro de diseño y metrología',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo Desarrollo Curricular',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Sandra Patricia Hoyos Sepúlveda',
          cargo: 'Corrector de Estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'María Inés Machado López',
          cargo: 'Metodóloga',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Iván Uribe Ortiz',
          cargo: 'Diseñador Web',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oscar Daniel Espitia Marin',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard e Ilustración',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Producción Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oscar Daniel Espitia Marín',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
