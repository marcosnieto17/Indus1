angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('ingIndustrial.inicio', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/inicio.html',
        controller: 'inicioCtrl'
      }
    }
  })

  .state('ingIndustrial.planDeEstudios', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/planDeEstudios.html',
        controller: 'planDeEstudiosCtrl'
      }
    }
  })

  .state('ingIndustrial.perfilDelGraduado', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/perfilDelGraduado.html',
        controller: 'perfilDelGraduadoCtrl'
      }
    }
  })

  .state('ingIndustrial.alcanceDelTTulo', {
    url: '/page7',
    views: {
      'side-menu21': {
        templateUrl: 'templates/alcanceDelTTulo.html',
        controller: 'alcanceDelTTuloCtrl'
      }
    }
  })

  .state('ingIndustrial.horarios', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/horarios.html',
        controller: 'horariosCtrl'
      }
    }
  })

  .state('ingIndustrial', {
    url: '/side-menu21',
    templateUrl: 'templates/ingIndustrial.html',
    controller: 'ingIndustrialCtrl'
  })

  .state('ingIndustrial.bibliotecaDigital', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/bibliotecaDigital.html',
        controller: 'bibliotecaDigitalCtrl'
      }
    }
  })

  .state('ingIndustrial.1AO', {
    url: '/page8',
    views: {
      'side-menu21': {
        templateUrl: 'templates/1AO.html',
        controller: '1AOCtrl'
      }
    }
  })

  .state('ingIndustrial.programasDeCTedra', {
    url: '/page12',
    views: {
      'side-menu21': {
        templateUrl: 'templates/programasDeCTedra.html',
        controller: 'programasDeCTedraCtrl'
      }
    }
  })

  .state('ingIndustrial.2AO', {
    url: '/page9',
    views: {
      'side-menu21': {
        templateUrl: 'templates/2AO.html',
        controller: '2AOCtrl'
      }
    }
  })

  .state('ingIndustrial.3AO', {
    url: '/page10',
    views: {
      'side-menu21': {
        templateUrl: 'templates/3AO.html',
        controller: '3AOCtrl'
      }
    }
  })

  .state('ingIndustrial.4AO', {
    url: '/page40',
    views: {
      'side-menu21': {
        templateUrl: 'templates/4AO.html',
        controller: '4AOCtrl'
      }
    }
  })

  .state('ingIndustrial.5AO', {
    url: '/page41',
    views: {
      'side-menu21': {
        templateUrl: 'templates/5AO.html',
        controller: '5AOCtrl'
      }
    }
  })

  .state('ingIndustrial.acercaDeLaApp', {
    url: '/page5',
    views: {
      'side-menu21': {
        templateUrl: 'templates/acercaDeLaApp.html',
        controller: 'acercaDeLaAppCtrl'
      }
    }
  })

  .state('ingIndustrial.calendarioAcadMico', {
    url: '/page11',
    views: {
      'side-menu21': {
        templateUrl: 'templates/calendarioAcadMico.html',
        controller: 'calendarioAcadMicoCtrl'
      }
    }
  })

  .state('ingIndustrial.matemTica', {
    url: '/page13',
    views: {
      'side-menu21': {
        templateUrl: 'templates/matemTica.html',
        controller: 'matemTicaCtrl'
      }
    }
  })

  .state('ingIndustrial.fSica', {
    url: '/page14',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fSica.html',
        controller: 'fSicaCtrl'
      }
    }
  })

  .state('ingIndustrial.quMica', {
    url: '/page42',
    views: {
      'side-menu21': {
        templateUrl: 'templates/quMica.html',
        controller: 'quMicaCtrl'
      }
    }
  })

  .state('ingIndustrial.LgebraYGeometrAAnalTica', {
    url: '/page15',
    views: {
      'side-menu21': {
        templateUrl: 'templates/LgebraYGeometrAAnalTica.html',
        controller: 'LgebraYGeometrAAnalTicaCtrl'
      }
    }
  })

  .state('ingIndustrial.anLisisMatemTicoI', {
    url: '/page16',
    views: {
      'side-menu21': {
        templateUrl: 'templates/anLisisMatemTicoI.html',
        controller: 'anLisisMatemTicoICtrl'
      }
    }
  })

  .state('ingIndustrial.quMicaGeneralEInorgNica', {
    url: '/page17',
    views: {
      'side-menu21': {
        templateUrl: 'templates/quMicaGeneralEInorgNica.html',
        controller: 'quMicaGeneralEInorgNicaCtrl'
      }
    }
  })

  .state('ingIndustrial.anatomAYMorfologAVegetal', {
    url: '/page18',
    views: {
      'side-menu21': {
        templateUrl: 'templates/anatomAYMorfologAVegetal.html',
        controller: 'anatomAYMorfologAVegetalCtrl'
      }
    }
  })

  .state('ingIndustrial.introducciNALasCienciasAgrarias', {
    url: '/page19',
    views: {
      'side-menu21': {
        templateUrl: 'templates/introducciNALasCienciasAgrarias.html',
        controller: 'introducciNALasCienciasAgrariasCtrl'
      }
    }
  })

  .state('ingIndustrial.quMicaOrgNica', {
    url: '/page20',
    views: {
      'side-menu21': {
        templateUrl: 'templates/quMicaOrgNica.html',
        controller: 'quMicaOrgNicaCtrl'
      }
    }
  })

  .state('ingIndustrial.fSica2', {
    url: '/page21',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fSica2.html',
        controller: 'fSica2Ctrl'
      }
    }
  })

  .state('ingIndustrial.botNicaSistemTica', {
    url: '/page22',
    views: {
      'side-menu21': {
        templateUrl: 'templates/botNicaSistemTica.html',
        controller: 'botNicaSistemTicaCtrl'
      }
    }
  })

  .state('ingIndustrial.informTica', {
    url: '/page23',
    views: {
      'side-menu21': {
        templateUrl: 'templates/informTica.html',
        controller: 'informTicaCtrl'
      }
    }
  })

  .state('ingIndustrial.expresiNOralYEscrita', {
    url: '/page24',
    views: {
      'side-menu21': {
        templateUrl: 'templates/expresiNOralYEscrita.html',
        controller: 'expresiNOralYEscritaCtrl'
      }
    }
  })

  .state('ingIndustrial.quMicaBiolGica', {
    url: '/page25',
    views: {
      'side-menu21': {
        templateUrl: 'templates/quMicaBiolGica.html',
        controller: 'quMicaBiolGicaCtrl'
      }
    }
  })

  .state('ingIndustrial.estadSticaYDiseOExperimental', {
    url: '/page26',
    views: {
      'side-menu21': {
        templateUrl: 'templates/estadSticaYDiseOExperimental.html',
        controller: 'estadSticaYDiseOExperimentalCtrl'
      }
    }
  })

  .state('ingIndustrial.edafologA', {
    url: '/page27',
    views: {
      'side-menu21': {
        templateUrl: 'templates/edafologA.html',
        controller: 'edafologACtrl'
      }
    }
  })

  .state('ingIndustrial.quMicaAnalTica', {
    url: '/page28',
    views: {
      'side-menu21': {
        templateUrl: 'templates/quMicaAnalTica.html',
        controller: 'quMicaAnalTicaCtrl'
      }
    }
  })

  .state('ingIndustrial.fisiologAVegetal', {
    url: '/page29',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fisiologAVegetal.html',
        controller: 'fisiologAVegetalCtrl'
      }
    }
  })

  .state('ingIndustrial.fitopatologA', {
    url: '/page30',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fitopatologA.html',
        controller: 'fitopatologACtrl'
      }
    }
  })

  .state('ingIndustrial.climatologAYMeteorologA', {
    url: '/page31',
    views: {
      'side-menu21': {
        templateUrl: 'templates/climatologAYMeteorologA.html',
        controller: 'climatologAYMeteorologACtrl'
      }
    }
  })

  .state('ingIndustrial.maquinariaAgrCola', {
    url: '/page32',
    views: {
      'side-menu21': {
        templateUrl: 'templates/maquinariaAgrCola.html',
        controller: 'maquinariaAgrColaCtrl'
      }
    }
  })

  .state('ingIndustrial.ingles', {
    url: '/page33',
    views: {
      'side-menu21': {
        templateUrl: 'templates/ingles.html',
        controller: 'inglesCtrl'
      }
    }
  })

  .state('ingIndustrial.basesBiolGicasDeLaProducciNAnimal', {
    url: '/page34',
    views: {
      'side-menu21': {
        templateUrl: 'templates/basesBiolGicasDeLaProducciNAnimal.html',
        controller: 'basesBiolGicasDeLaProducciNAnimalCtrl'
      }
    }
  })

  .state('ingIndustrial.zoologAAgrCola', {
    url: '/page35',
    views: {
      'side-menu21': {
        templateUrl: 'templates/zoologAAgrCola.html',
        controller: 'zoologAAgrColaCtrl'
      }
    }
  })

  .state('ingIndustrial.ecologAAgrCola', {
    url: '/page36',
    views: {
      'side-menu21': {
        templateUrl: 'templates/ecologAAgrCola.html',
        controller: 'ecologAAgrColaCtrl'
      }
    }
  })

  .state('ingIndustrial.genTica', {
    url: '/page43',
    views: {
      'side-menu21': {
        templateUrl: 'templates/genTica.html',
        controller: 'genTicaCtrl'
      }
    }
  })

  .state('ingIndustrial.terapUticaVegetal', {
    url: '/page44',
    views: {
      'side-menu21': {
        templateUrl: 'templates/terapUticaVegetal.html',
        controller: 'terapUticaVegetalCtrl'
      }
    }
  })

  .state('ingIndustrial.nutriciNYAlimentaciNAnimal', {
    url: '/page45',
    views: {
      'side-menu21': {
        templateUrl: 'templates/nutriciNYAlimentaciNAnimal.html',
        controller: 'nutriciNYAlimentaciNAnimalCtrl'
      }
    }
  })

  .state('ingIndustrial.microbiologAAgrCola', {
    url: '/page46',
    views: {
      'side-menu21': {
        templateUrl: 'templates/microbiologAAgrCola.html',
        controller: 'microbiologAAgrColaCtrl'
      }
    }
  })

  .state('ingIndustrial.mejoramientoVegetal', {
    url: '/page47',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mejoramientoVegetal.html',
        controller: 'mejoramientoVegetalCtrl'
      }
    }
  })

  .state('ingIndustrial.economAPolTica', {
    url: '/page48',
    views: {
      'side-menu21': {
        templateUrl: 'templates/economAPolTica.html',
        controller: 'economAPolTicaCtrl'
      }
    }
  })

  .state('ingIndustrial.manejoDelRecursoHDrico', {
    url: '/page49',
    views: {
      'side-menu21': {
        templateUrl: 'templates/manejoDelRecursoHDrico.html',
        controller: 'manejoDelRecursoHDricoCtrl'
      }
    }
  })

  .state('ingIndustrial.manejoYConservaciNDeSuelos', {
    url: '/page50',
    views: {
      'side-menu21': {
        templateUrl: 'templates/manejoYConservaciNDeSuelos.html',
        controller: 'manejoYConservaciNDeSuelosCtrl'
      }
    }
  })

  .state('ingIndustrial.administraciNYComercializaciN', {
    url: '/page51',
    views: {
      'side-menu21': {
        templateUrl: 'templates/administraciNYComercializaciN.html',
        controller: 'administraciNYComercializaciNCtrl'
      }
    }
  })

  .state('ingIndustrial.introducciNAlConocimientoCientFico', {
    url: '/page52',
    views: {
      'side-menu21': {
        templateUrl: 'templates/introducciNAlConocimientoCientFico.html',
        controller: 'introducciNAlConocimientoCientFicoCtrl'
      }
    }
  })

  .state('ingIndustrial.producciNYUtilizaciNDeForrajes', {
    url: '/page53',
    views: {
      'side-menu21': {
        templateUrl: 'templates/producciNYUtilizaciNDeForrajes.html',
        controller: 'producciNYUtilizaciNDeForrajesCtrl'
      }
    }
  })

  .state('ingIndustrial.producciNAnimalBovinos', {
    url: '/page54',
    views: {
      'side-menu21': {
        templateUrl: 'templates/producciNAnimalBovinos.html',
        controller: 'producciNAnimalBovinosCtrl'
      }
    }
  })

  .state('ingIndustrial.horticultura', {
    url: '/page55',
    views: {
      'side-menu21': {
        templateUrl: 'templates/horticultura.html',
        controller: 'horticulturaCtrl'
      }
    }
  })

  .state('ingIndustrial.producciNAnimalPorcinosYAnimalesDeGranja', {
    url: '/page56',
    views: {
      'side-menu21': {
        templateUrl: 'templates/producciNAnimalPorcinosYAnimalesDeGranja.html',
        controller: 'producciNAnimalPorcinosYAnimalesDeGranjaCtrl'
      }
    }
  })

  .state('ingIndustrial.fruticultura', {
    url: '/page57',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fruticultura.html',
        controller: 'fruticulturaCtrl'
      }
    }
  })

  .state('ingIndustrial.prCticaDeVeranoI', {
    url: '/page58',
    views: {
      'side-menu21': {
        templateUrl: 'templates/prCticaDeVeranoI.html',
        controller: 'prCticaDeVeranoICtrl'
      }
    }
  })

  .state('ingIndustrial.extensiNYSociologARural', {
    url: '/page59',
    views: {
      'side-menu21': {
        templateUrl: 'templates/extensiNYSociologARural.html',
        controller: 'extensiNYSociologARuralCtrl'
      }
    }
  })

  .state('ingIndustrial.legislaciNAgraria', {
    url: '/page60',
    views: {
      'side-menu21': {
        templateUrl: 'templates/legislaciNAgraria.html',
        controller: 'legislaciNAgrariaCtrl'
      }
    }
  })

  .state('ingIndustrial.silvicultura', {
    url: '/page61',
    views: {
      'side-menu21': {
        templateUrl: 'templates/silvicultura.html',
        controller: 'silviculturaCtrl'
      }
    }
  })

  .state('ingIndustrial.cerealiculturaYCultivosIndustriales', {
    url: '/page62',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cerealiculturaYCultivosIndustriales.html',
        controller: 'cerealiculturaYCultivosIndustrialesCtrl'
      }
    }
  })

  .state('ingIndustrial.teledetecciNYSistemasDeInformaciNGeogrFica', {
    url: '/page63',
    views: {
      'side-menu21': {
        templateUrl: 'templates/teledetecciNYSistemasDeInformaciNGeogrFica.html',
        controller: 'teledetecciNYSistemasDeInformaciNGeogrFicaCtrl'
      }
    }
  })

  .state('ingIndustrial.pasantAEnInstituciNPBlica', {
    url: '/page64',
    views: {
      'side-menu21': {
        templateUrl: 'templates/pasantAEnInstituciNPBlica.html',
        controller: 'pasantAEnInstituciNPBlicaCtrl'
      }
    }
  })

  .state('ingIndustrial.pasantAEnEstablecimientoPrivado', {
    url: '/page65',
    views: {
      'side-menu21': {
        templateUrl: 'templates/pasantAEnEstablecimientoPrivado.html',
        controller: 'pasantAEnEstablecimientoPrivadoCtrl'
      }
    }
  })

  .state('ingIndustrial.olivicultura', {
    url: '/page66',
    views: {
      'side-menu21': {
        templateUrl: 'templates/olivicultura.html',
        controller: 'oliviculturaCtrl'
      }
    }
  })

  .state('ingIndustrial.prCticaDeVeranoII', {
    url: '/page67',
    views: {
      'side-menu21': {
        templateUrl: 'templates/prCticaDeVeranoII.html',
        controller: 'prCticaDeVeranoIICtrl'
      }
    }
  })

  .state('ingIndustrial.trabajoFinal', {
    url: '/page68',
    views: {
      'side-menu21': {
        templateUrl: 'templates/trabajoFinal.html',
        controller: 'trabajoFinalCtrl'
      }
    }
  })

  .state('ingIndustrial.horarioIngreso', {
    url: '/page37',
    views: {
      'side-menu21': {
        templateUrl: 'templates/horarioIngreso.html',
        controller: 'horarioIngresoCtrl'
      }
    }
  })

  .state('ingIndustrial.horario1Cuatrimestre', {
    url: '/page38',
    views: {
      'side-menu21': {
        templateUrl: 'templates/horario1Cuatrimestre.html',
        controller: 'horario1CuatrimestreCtrl'
      }
    }
  })

  .state('ingIndustrial.horario2Cuatrimestre', {
    url: '/page39',
    views: {
      'side-menu21': {
        templateUrl: 'templates/horario2Cuatrimestre.html',
        controller: 'horario2CuatrimestreCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page1')


});