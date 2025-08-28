export default {
  global: {
    componenteFormativo:
      'Fundamentos de un Sistema de Gestión de Seguridad de la Información',
    descripcionCurso:
      'Este componente formativo aborda los fundamentos y herramientas para gestionar la seguridad de la información en entornos organizacionales, desde el reconocimiento de activos y valoración de riesgos hasta la formulación de políticas adaptadas. Incluye la estructura y normativa del Sistema de Gestión de Seguridad de la Información (SGSI), integrando principios de seguridad con un enfoque práctico, reflexivo y orientado a la aplicación real del conocimiento.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
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
        titulo: 'Activos de información',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Tipología',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Registro',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Valoración',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Seguridad de la información',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Principios',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Gestión de riesgo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Concepto',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Tipos de riesgo',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Fases',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Sistema de Gestión de Seguridad de la Información (SGSI)',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Concepto',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Características y beneficios',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Ciclo de mejora continua',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Normativa',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Componentes',
            hash: 't_4_5',
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_XX_DU.pdf',
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
      tema: 'Activos de información',
      referencia:
        'Departamento Nacional de Planeación (DNP). (2023). Manual para la identificación de activos de información.',
      tipo: 'Documento',
      link:
        'https://colaboracion.dnp.gov.co/CDT/DNP/SIG/M-PG-13%20Manual%20para%20la%20identificación%20de%20activos%20de%20información.Pu.pdf',
    },
    {
      tema: 'Activos de información',
      referencia:
        'Ministerio de Tecnologías de la Información y las Comunicaciones. (2024, 26 de diciembre). Registro de Activos de Información',
      tipo: 'Hojas de calculo',
      link:
        'https://www.mintic.gov.co/portal/inicio/Atencion-y-Servicio-a-la-Ciudadania/Transparencia/135888:Registro-de-Activos-de-Informacion',
    },
    {
      tema: 'Activos de información',
      referencia:
        'Agencia Nacional Digital (AND). (2020). Guía de gestión y clasificación de activos de información.',
      tipo: 'Documento',
      link:
        'https://and.gov.co/sites/default/files/2022-05/Guia_De_Gestion_y_clasificacion_de_activos_de_informacon.pdf',
    },
    {
      tema: 'Gestión de riesgo',
      referencia:
        'Dirección de Impuestos y Aduanas Nacionales (DIAN). (2023). Gestión de Riesgos de Seguridad de la Información.',
      tipo: 'Documento',
      link:
        'https://www.dian.gov.co/atencionciudadano/LMDP/Informacion-Innovacion-y-Tecnologia/Seguridad-de-la-Informacion/Cartillas/CT-IIT-0132.pdf',
    },
    {
      tema: 'Gestión de riesgo',
      referencia:
        'Departamento Nacional de Planeación (DNP). (2022, 26 de julio). Módulo 1: Estructura del SGSI, riesgos de los activos y obligaciones de seguridad de la información [Video]. YouTube.',
      tipo: 'Vídeo',
      link: 'https://www.youtube.com/watch?v=O3CwPYPzWzw',
    },
  ],
  glosario: [
    {
      termino: 'Activos de información',
      significado:
        'Elementos que poseen valor para una organización, como datos, <em>software</em>, <em>hardware</em>, personas o servicios. Identificarlos y clasificarlos es fundamental para su protección dentro del sistema de seguridad.',
    },
    {
      termino: 'CIA (Confidencialidad, Integridad, Disponibilidad)',
      significado:
        'Principios fundamentales de la seguridad de la información, que aseguran que los datos sean accesibles solo por personas autorizadas, no sean alterados indebidamente y estén disponibles cuando se necesiten.',
    },
    {
      termino: 'Ciberseguridad',
      significado:
        'Práctica enfocada en proteger sistemas informáticos y redes contra ataques digitales, amenazas maliciosas y accesos no autorizados que puedan comprometer la información de la organización.',
    },
    {
      termino: 'Gestión de riesgos',
      significado:
        'Conjunto de procesos que permite identificar, analizar, valorar, tratar y monitorear riesgos, con el fin de minimizar su impacto en la seguridad de la información y los objetivos organizacionales.',
    },
    {
      termino: 'Mejora continua',
      significado:
        'Proceso cíclico mediante el cual una organización evalúa y ajusta regularmente sus controles y políticas para adaptarse a nuevos riesgos y asegurar la eficacia del SGSI.',
    },
    {
      termino: 'Normativa',
      significado:
        'Conjunto de leyes, estándares técnicos y buenas prácticas que orientan a las organizaciones en el diseño, implementación y cumplimiento de políticas de seguridad de la información.',
    },
    {
      termino: 'Políticas de seguridad',
      significado:
        'Directrices establecidas por una organización para proteger su información, definir responsabilidades y orientar el comportamiento de los empleados en relación con la gestión de datos.',
    },
    {
      termino: 'Riesgo',
      significado:
        'Posibilidad de que una amenaza aproveche una vulnerabilidad para causar daño a los activos de información, afectando la confidencialidad, integridad o disponibilidad de los mismos. Su análisis permite tomar decisiones informadas.',
    },
    {
      termino: 'Seguridad de la información',
      significado:
        'Disciplina que implementa medidas para proteger los datos de una organización, garantizando que se mantengan confidenciales, íntegros y disponibles ante cualquier tipo de amenaza.',
    },
    {
      termino: 'Sistema de Gestión de Seguridad de la Información (SGSI)',
      significado:
        'Marco estructurado que permite gestionar de forma efectiva la seguridad de la información, integrando políticas, controles, evaluaciones y acciones de mejora en toda la organización.',
    },
  ],
  referencias: [
    {
      referencia:
        'GRCTools. (s.f.). Riesgos IT y Seguridad con el <em>Software</em> GRC inteligente.',
      link:
        'https://grctools.software/soluciones/riesgos/riesgos-it-seguridad-de-la-informacion/',
    },
    {
      referencia:
        'Grupo Cibernos. (s.f.). ¿Qué es la gestión de riesgos en ciberseguridad?',
      link:
        'https://www.grupocibernos.com/blog/que-es-la-gestion-de-riesgos-en-ciberseguridad',
    },
    {
      referencia:
        'IBM. (2024a). ¿Qué es la seguridad de la información (InfoSec)?',
      link: 'https://www.ibm.com/mx-es/topics/information-security',
    },
    {
      referencia: 'IBM. (2024b). ¿Qué es la gestión de riesgos cibernéticos?',
      link: 'https://www.ibm.com/es-es/topics/cyber-risk-management',
    },
    {
      referencia: 'It Governance. (2022). ISO 27005.',
      link:
        'https://www.itgovernanceusa.com/cyber-security-solutions/iso27001/iso-27005',
    },
    {
      referencia: 'Kantan. (2024). Definición de SGSI según ISO 27001 2022.',
      link:
        'https://www.kantansoftware.com/blog/definicion-de-sgsi-segun-iso-27001-2022/',
    },
    {
      referencia: 'López, A. (2013). SGSI. ISO 27000.',
      link: '',
    },
    {
      referencia:
        'Microsoft. (s.f.). ¿Qué es la seguridad de la información (InfoSec)?',
      link:
        'https://www.microsoft.com/es-co/security/business/security-101/what-is-information-security-infosec',
    },
    {
      referencia:
        'Novasep. (s.f.). La seguridad de la información y sus 3 pilares fundamentales.',
      link:
        'https://www.novaseguridad.com.co/seguridad-de-la-informacion-principios/',
    },
    {
      referencia:
        'Rabitti, G., Khorrami Chokami, A., Coyle, P. & Cohen, R. D. (2025). A taxonomy of cyber risk taxonomies. Risk Analysis An International Journal, 45(2), 376–386.',
      link: 'https://doi.org/10.1111/risa.16629',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Armando Javier López Sierra',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador <em>web</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Diseñador <em>web</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Sebastian Trujillo Afanador',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
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
}
