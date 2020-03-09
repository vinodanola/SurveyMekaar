var App = angular.module('App', ['onsen' , 'ui.router' , 'ngStorage' , 'ngMask' , 'g1b.datetime-range' , 'g1b.scroll-events' , 'angularMoment', 'base64','angularjs-datetime-picker']);

App.config( function($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider, $provide, $base64 ) {
    
    $provide.value("apiBase", "http://10.61.3.37/api_SurveyMekaar/index.php/");
    $provide.value("apiBaseWithoutIndex", "http://10.61.3.37/api_SurveyMekaar/");
//    $provide.value("apiBase", "http://surveymekaar.yakinbisa.id/api_SurveyMekaar/index.php/");
//    $provide.value("apiBaseWithoutIndex", "http://surveymekaar.yakinbisa.id/api_SurveyMekaar/");
    $provide.value("Authorization", "Basic dXNlcm5hbWU6cGFzc3dvcmQ=");
        
    $stateProvider
    
        .state('login', {
            url: '/login',
            templateUrl: 'partials/login.html?UNIQID='+Math.random(),
            controller: 'loginCtrl',
            data: {
                pageTitle: 'Login'
            }
        })
        
        .state('home', {
            url: '/',
            templateUrl: 'partials/home.html?UNIQID='+Math.random(),
            controller: 'homeCtrl',
            data: {
                pageTitle: 'Home'
            }
        })
        
        .state('createsurvey', {
            url: '/create-survey',
            templateUrl: 'partials/create-survey.html?UNIQID='+Math.random(),
            controller: 'createsurveyCtrl',
            data: {
                pageTitle: 'Kuesioner Keberhasilan Pembiayaan'
            }
        })
        
        .state('createsurvey.datasurveyor', {
            url: '/data-surveyor',
            templateUrl: 'partials/data-surveyor.html?UNIQID='+Math.random(),
            controller: 'datasurveyorCtrl',
            data: {
                pageTitle: 'Data Surveyor'
            }
        })
        
        .state('createsurvey.datanasabah', {
            url: '/data-nasabah',
            templateUrl: 'partials/data-nasabah.html?UNIQID='+Math.random(),
            controller: 'datanasabahCtrl',
            data: {
                pageTitle: 'Data Nasabah'
            }
        })
        
        .state('createsurvey.indikatorkesehatan', {
            url: '/indikator-kesehatan',
            templateUrl: 'partials/indikator-kesehatan.html?UNIQID='+Math.random(),
            controller: 'indikatorkesehatanCtrl',
            data: {
                pageTitle: 'Indikator Kesehatan'
            }
        })
        
        .state('createsurvey.indikatorperubahanhidup', {
            url: '/indikator-perubahan-hidup',
            templateUrl: 'partials/indikator-perubahan-hidup.html?UNIQID='+Math.random(),
            controller: 'indikatorperubahanhidupCtrl',
            data: {
                pageTitle: 'Indikator Perubahan Hidup'
            }
        })
        
        .state('createsurvey.sukses', {
            url: '/sukses',
            templateUrl: 'partials/sukses.html?UNIQID='+Math.random(),
            controller: 'suksesCtrl',
            data: {
                pageTitle: 'Sukses'
            }
        })
        
        .state('createsurvey.error', {
            url: '/error',
            templateUrl: 'partials/error.html?UNIQID='+Math.random(),
            controller: 'errorCtrl',
            data: {
                pageTitle: 'Error'
            }
        })
        
        .state('dashboard', {
            url: '/dashboard',
            templateUrl: 'partials/dashboard.html?UNIQID='+Math.random(),
            controller: 'dashboardCtrl',
            data: {
                pageTitle: 'Dashboard'
            }
        })
        
        .state('createsurvey.datanasabah.regions', {
            url: '/regions',
            templateUrl: 'partials/region-list.html?UNIQID='+Math.random(),
            controller: 'regionsCtrl',
            data: {
                pageTitle: 'Regions'
            }
        })
        
        .state('createsurvey.datanasabah.areas', {
            url: '/areas',
            templateUrl: 'partials/area-list.html?UNIQID='+Math.random(),
            controller: 'areasCtrl',
            data: {
                pageTitle: 'Areas'
            }
        })
        
        .state('createsurvey.datanasabah.branchs', {
            url: '/branchs',
            templateUrl: 'partials/branch-list.html?UNIQID='+Math.random(),
            controller: 'branchsCtrl',
            data: {
                pageTitle: 'Branchs'
            }
        })
        
        .state('createsurvey.datanasabah.nasabahs', {
            url: '/nasabahs',
            templateUrl: 'partials/nasabah-list.html?UNIQID='+Math.random(),
            controller: 'nasabahsCtrl',
            data: {
                pageTitle: 'Nasabah'
            }
        })
        
        .state('rekap', {
            url: '/rekap',
            templateUrl: 'partials/rekap.html?UNIQID='+Math.random(),
            controller: 'rekapCtrl',
            data: {
                pageTitle: 'Rekap'
            }
        })
        
        .state('updatedatanasabah', {
            url: '/update-data-nasabah',
            templateUrl: 'partials/update-data-nasabah.html?UNIQID='+Math.random(),
            controller: 'updatedatanasabahCtrl',
            data: {
                pageTitle: 'Update Data Nasabah'
            }
        })
        
        .state('updatedatanasabah.regions', {
            url: '/regions',
            templateUrl: 'partials/region-list.html?UNIQID='+Math.random(),
            controller: 'regionsCtrl',
            data: {
                pageTitle: 'Regions'
            }
        })
        
        .state('updatedatanasabah.areas', {
            url: '/areas',
            templateUrl: 'partials/area-list.html?UNIQID='+Math.random(),
            controller: 'areasCtrl',
            data: {
                pageTitle: 'Areas'
            }
        })
        
        .state('updatedatanasabah.branchs', {
            url: '/branchs',
            templateUrl: 'partials/branch-list.html?UNIQID='+Math.random(),
            controller: 'branchsCtrl',
            data: {
                pageTitle: 'Branchs'
            }
        })
        
        .state('updatedatanasabah.nasabahs', {
            url: '/nasabahs',
            templateUrl: 'partials/nasabah-list.html?UNIQID='+Math.random(),
            controller: 'nasabahsCtrl',
            data: {
                pageTitle: 'Nasabah'
            }
        })
        
        .state('updatedatanasabah.sukses', {
            url: '/sukses',
            templateUrl: 'partials/sukses.html?UNIQID='+Math.random(),
            controller: 'suksesCtrl',
            data: {
                pageTitle: 'Sukses'
            }
        })
        
        .state('updatedatanasabah.error', {
            url: '/error',
            templateUrl: 'partials/error.html?UNIQID='+Math.random(),
            controller: 'errorCtrl',
            data: {
                pageTitle: 'Error'
            }
        })
        
        /* PRA - KONDISI KANTOR */
        
        .state('prakondisikantorcreatesurvey', {
            url: '/create-survey-pra-kondisi-kantor',
            templateUrl: 'partials/pra-kondisi-kantor-create-survey.html?UNIQID='+Math.random(),
            controller: 'prakondisikantorcreatesurveyCtrl',
            data: {
                pageTitle: 'Kuesioner Kondisi Kantor Cabang'
            }
        })
        
        .state('prakondisikantorcreatesurvey.identitasresponden', {
            url: '/identitas-responden',
            templateUrl: 'partials/pra-kondisi-kantor-identitas-responden.html?UNIQID='+Math.random(),
            controller: 'prakondisikantoridentitasrespondenCtrl',
            data: {
                pageTitle: 'Identitas Responden'
            }
        })
        
        .state('prakondisikantorcreatesurvey.identitasresponden.regions', {
            url: '/regions',
            templateUrl: 'partials/region-list.html?UNIQID='+Math.random(),
            controller: 'regionsCtrl',
            data: {
                pageTitle: 'Regions'
            }
        })
        
        .state('prakondisikantorcreatesurvey.identitasresponden.areas', {
            url: '/areas',
            templateUrl: 'partials/area-list.html?UNIQID='+Math.random(),
            controller: 'areasCtrl',
            data: {
                pageTitle: 'Areas'
            }
        })
        
        .state('prakondisikantorcreatesurvey.identitasresponden.branchs', {
            url: '/branchs',
            templateUrl: 'partials/branch-list.html?UNIQID='+Math.random(),
            controller: 'branchsCtrl',
            data: {
                pageTitle: 'Branchs'
            }
        })
        
        .state('prakondisikantorcreatesurvey.pertanyaan', {
            url: '/pertanyaan',
            templateUrl: 'partials/pra-kondisi-kantor-pertanyaan.html?UNIQID='+Math.random(),
            controller: 'prakondisikantorpertanyaanCtrl',
            data: {
                pageTitle: 'Pertanyaan'
            }
        })
        
        .state('prakondisikantorcreatesurvey.sukses', {
            url: '/sukses',
            templateUrl: 'partials/sukses.html?UNIQID='+Math.random(),
            controller: 'suksesCtrl',
            data: {
                pageTitle: 'Sukses'
            }
        })
        
        .state('prakondisikantorcreatesurvey.error', {
            url: '/error',
            templateUrl: 'partials/error.html?UNIQID='+Math.random(),
            controller: 'errorCtrl',
            data: {
                pageTitle: 'Error'
            }
        })
        
        .state('details', {
            url: '/details/:region/:area/:branch/:startDate',
            templateUrl: 'partials/details.html?UNIQID='+Math.random(),
            controller: 'detailCtrl',
            data: {
                pageTitle: 'Details'
            }
        })
        
        .state('sidemenu', {
            url: '/sidemenu',
            templateUrl: 'partials/sidemenu.html?UNIQID='+Math.random(),
//            controller: 'userManagementCtrl',
            data: {
                pageTitle: 'Sidemenu'
            }
        })
        
        ;
        
        $urlRouterProvider.otherwise('/');
        
        /* CACHE DISABLE */
        
        $httpProvider.defaults.cache = false;
        
        /* CHECK XHR LOADED */
        
        $httpProvider.interceptors.push('httpInterceptor');

});


App.run(['$localStorage','$location', '$rootScope', '$stateParams', '$state', '$window', '$http', 'apiData',  'apiBase', 'apiBaseWithoutIndex',
    function($localStorage, $location, $rootScope, $stateParams, $state, $window, $http, apiData , apiBase, apiBaseWithoutIndex) {
        
        $rootScope.onDialog = 0;
        
        $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){

        });
            
        $rootScope.$on('$stateChangeSuccess', function (event, current, previous) {
            
            $rootScope.$storage = $localStorage;
            
            apiData.checkauth();
            
//            $rootScope.$on('loading:progress', function (){
//            
//                if ($rootScope.onDialog <= 0) {
//                    dialog.show();
//                }
//                $rootScope.onDialog = $rootScope.onDialog + 1;
//                
//            });
//            $rootScope.$on('loading:finish', function (){
//                $rootScope.onDialog = $rootScope.onDialog - 1;
//                if ($rootScope.onDialog <= 0)
//                    dialog.hide();
//
//            });
            
        });
        
        $rootScope.historyBack = function () {
            $window.history.back();
        };
        
        $rootScope.historyForward = function () {
            $window.history.forward();
        };
        
        $rootScope.logout = function(){
            apiData.logout();
        };
        
        $rootScope.API_BASE = apiBase;
        
        $rootScope.API_BASE_WITHOUT_INDEX = apiBaseWithoutIndex;
        
        $rootScope.MY_MATH_RANDOM = Math.random();
    }
]);

/* Directives */

App.directive('title', ['$rootScope', '$timeout',
  function($rootScope, $timeout) {
    return {
      link: function() {

        var listener = function(event, toState) {

          $timeout(function() {
            $rootScope.title = (toState.data && toState.data.pageTitle) 
            ? toState.data.pageTitle 
            : 'Default title';
          });
        };

        $rootScope.$on('$stateChangeSuccess', listener);
      }
    };
  }
]);

/* Factories */

App.factory('httpInterceptor', ['$q', '$rootScope', function ($q, $rootScope) {
        var loadingCount = 0;

        return {
            request: function (config) {
                if(++loadingCount === 1) $rootScope.$broadcast('loading:progress');
                return config || $q.when(config);
            },

            response: function (response) {
                if(--loadingCount === 0) $rootScope.$broadcast('loading:finish');
                return response || $q.when(response);
            },

            responseError: function (response) {
                if(--loadingCount === 0) $rootScope.$broadcast('loading:finish');
                return $q.reject(response);
            }
        };
    }
]);

App.factory("apiData", function ($localStorage, $http, $rootScope, apiBase, $stateParams, $state) {
    
    return {
        
        checkauth : function(){
            
            console.log('SESSION_STORAGE',$localStorage.SESSION_LOGIN);
            
            if ( ( $localStorage.SESSION_LOGIN == undefined || $localStorage.SESSION_LOGIN.length == 0 ) && $state.current.name != 'login') {
                delete $rootScope.$storage.SESSION_LOGIN;
                delete $localStorage.SESSION_LOGIN;
                $state.go('login');
                return false;
            } else {
                return true;
            }
            
        },
        
        logout : function(){
            
            delete $rootScope.$storage.SESSION_LOGIN;
            delete $localStorage.SESSION_LOGIN;
            
            $state.go('login');
            
        }

    };
    
});

App.factory("gF", function ($localStorage, $http, $rootScope, apiBase, $stateParams, $state) {
    return {
        sL : function(){
            dialog.show();
        },
        
        fL : function(){
            dialog.hide();
        }
    };
});

/* Controllers */

App.controller('homeCtrl',['$localStorage','$location', '$rootScope', '$stateParams', '$state', '$window', '$http', 'apiData', 
    function($localStorage, $location, $rootScope, $stateParams, $state, $window, $http, apiData ){
    
    
    
}]);

App.controller('rekapCtrl',['$localStorage','$location', '$rootScope', '$stateParams', '$state', '$window', '$http', 'apiData', '$scope', 'apiBase', 'Authorization', 'gF',
    function($localStorage, $location, $rootScope, $stateParams, $state, $window, $http, apiData, $scope, apiBase, Authorization, gF ){
    
    $scope.unduh = function(){
        gF.sL();
        $http({
            method      : "GET",
            url         : apiBase + 'Survey/Rekap',
            dataType    : 'json', 
            headers     : { 
                'Content-Type'  : 'application/json',
                'Authorization' : Authorization
            }
        }).then(function success(R) {

            gF.fL();

        }, function error(R) { console.log(R.statusText); gF.fL(); });
    };
    
    
    
}]);

App.controller('createsurveyCtrl',['$localStorage','$location', '$rootScope', '$stateParams', '$state', '$window', '$http', 'apiData', '$scope', 'gF', 'apiBase', 'Authorization',
    function($localStorage, $location, $rootScope, $stateParams, $state, $window, $http, apiData, $scope, gF, apiBase , Authorization){
    
    $scope.fdSV = {};
    
    $scope.jenisFD = 'SV';
    
    console.log($scope.jenisFD);
    
    var vetd = ' harus diisi';
    
    $scope.setSV = function(data){
        
        $scope.fdSV.NIK_CREATOR = $localStorage.SESSION_LOGIN[0].nik;
        $scope.fdSV.NAMA_CREATOR = $localStorage.SESSION_LOGIN[0].nama_hris;

        console.log($scope.fdSV);
        
        /* Validasi Data Surveyor */
        
        if (data.hasOwnProperty('NIK_CREATOR')==false || data.NIK_CREATOR=='' || data.NIK_CREATOR==null || data.NIK_CREATOR==undefined || data.NIK_CREATOR=='undefined'){
            $state.go('createsurvey.error');
            $scope.fdSV.ERROR = 'Terjadi kesalahan saat login. silahkan login ulang dengan cara batalkan survey ini dan logout';
        }
        else if (data.hasOwnProperty('NAMA_CREATOR')==false || data.NAMA_CREATOR=='' || data.NAMA_CREATOR==null || data.NAMA_CREATOR==undefined || data.NAMA_CREATOR=='undefined'){
            $state.go('createsurvey.error');
            $scope.fdSV.ERROR = 'Terjadi kesalahan saat login. silahkan login ulang dengan cara batalkan survey ini dan logout';
        }
        else if (data.hasOwnProperty('NAMA_KEPALA_CABANG')==false || data.NAMA_KEPALA_CABANG=='' || data.NAMA_KEPALA_CABANG==null || data.NAMA_KEPALA_CABANG==undefined || data.NAMA_KEPALA_CABANG=='undefined'){
            $state.go('createsurvey.error');
            $scope.fdSV.ERROR = 'Data surveyor -> Nama kepala cabang'+vetd;
        } 
        else if (data.hasOwnProperty('NAMA_AO')==false || data.NAMA_AO=='' || data.NAMA_AO==null || data.NAMA_AO==undefined || data.NAMA_AO=='undefined'){
            $state.go('createsurvey.error');
            $scope.fdSV.ERROR = 'Data surveyor -> Nama AO'+vetd;
        } 
        else if (data.hasOwnProperty('HP_AO')==false || data.HP_AO=='' || data.HP_AO==null || data.HP_AO==undefined || data.HP_AO=='undefined'){
            $state.go('createsurvey.error');
            $scope.fdSV.ERROR = 'Data surveyor -> HP AO'+vetd;
        }
        else if (data.hasOwnProperty('TGL_WAWANCARA')==false || data.TGL_WAWANCARA=='' || data.TGL_WAWANCARA==null || data.TGL_WAWANCARA==undefined || data.TGL_WAWANCARA=='undefined'){
            $state.go('createsurvey.error');
            $scope.fdSV.ERROR = 'Data surveyor -> Tanggal wawancara'+vetd;
        }
        else if (data.hasOwnProperty('WAKTU_WAWANCARA_JAM')==false || data.WAKTU_WAWANCARA_JAM=='' || data.WAKTU_WAWANCARA_JAM==null || data.WAKTU_WAWANCARA_JAM==undefined || data.WAKTU_WAWANCARA_JAM=='undefined'){
            $state.go('createsurvey.error');
            $scope.fdSV.ERROR = 'Data surveyor -> Waktu wawancara (jam)'+vetd;
        }
        else if (data.hasOwnProperty('WAKTU_WAWANCARA_MENIT')==false || data.WAKTU_WAWANCARA_MENIT=='' || data.WAKTU_WAWANCARA_MENIT==null || data.WAKTU_WAWANCARA_MENIT==undefined || data.WAKTU_WAWANCARA_MENIT=='undefined'){
            $state.go('createsurvey.error');
            $scope.fdSV.ERROR = 'Data surveyor -> Waktu wawancara (menit)'+vetd;
        }
        else if (data.hasOwnProperty('LOKASI_CABANG')==false || data.LOKASI_CABANG=='' || data.LOKASI_CABANG==null || data.LOKASI_CABANG==undefined || data.LOKASI_CABANG=='undefined'){
            $state.go('createsurvey.error');
            $scope.fdSV.ERROR = 'Data surveyor -> Lokasi cabang'+vetd;
        }
        else if (data.hasOwnProperty('GEOGRAFIS_CABANG')==false || data.GEOGRAFIS_CABANG=='' || data.GEOGRAFIS_CABANG==null || data.GEOGRAFIS_CABANG==undefined || data.GEOGRAFIS_CABANG=='undefined'){
            $state.go('createsurvey.error');
            $scope.fdSV.ERROR = 'Data surveyor -> Geografis cabang'+vetd;
        }
        
        /* Validasi Data Nasabah */
        
        else if (data.hasOwnProperty('REGION_NAMA')==false || data.REGION_NAMA=='' || data.REGION_NAMA==null || data.REGION_NAMA==undefined || data.REGION_NAMA=='undefined'){
            $state.go('createsurvey.error');
            $scope.fdSV.ERROR = 'Data nasabah -> Nama region'+vetd;
        } 
        else if (data.hasOwnProperty('REGION_ID')==false || data.REGION_ID=='' || data.REGION_ID==null || data.REGION_ID==undefined || data.REGION_ID=='undefined'){
            $state.go('createsurvey.error');
            $scope.fdSV.ERROR = 'Data nasabah -> Id region'+vetd;
        } 
        else if (data.hasOwnProperty('AREA_NAMA')==false || data.AREA_NAMA=='' || data.AREA_NAMA==null || data.AREA_NAMA==undefined || data.AREA_NAMA=='undefined'){
            $state.go('createsurvey.error');
            $scope.fdSV.ERROR = 'Data nasabah -> Nama area'+vetd;
        }
        else if (data.hasOwnProperty('AREA_ID')==false || data.AREA_ID=='' || data.AREA_ID==null || data.AREA_ID==undefined || data.AREA_ID=='undefined'){
            $state.go('createsurvey.error');
            $scope.fdSV.ERROR = 'Data nasabah -> Id area'+vetd;
        }
        else if (data.hasOwnProperty('BRANCH_NAMA')==false || data.BRANCH_NAMA=='' || data.BRANCH_NAMA==null || data.BRANCH_NAMA==undefined || data.BRANCH_NAMA=='undefined'){
            $state.go('createsurvey.error');
            $scope.fdSV.ERROR = 'Data nasabah -> Nama branch'+vetd;
        }
        else if (data.hasOwnProperty('BRANCH_ID')==false || data.BRANCH_ID=='' || data.BRANCH_ID==null || data.BRANCH_ID==undefined || data.BRANCH_ID=='undefined'){
            $state.go('createsurvey.error');
            $scope.fdSV.ERROR = 'Data nasabah -> Id branch'+vetd;
        }
        
        else if (data.hasOwnProperty('NASABAH_ID')==false || data.NASABAH_ID=='' || data.NASABAH_ID==null || data.NASABAH_ID==undefined || data.NASABAH_ID=='undefined'){
            $state.go('createsurvey.error');
            $scope.fdSV.ERROR = 'Data nasabah -> Nasabah'+vetd;
        }
        else if (data.hasOwnProperty('NASABAH_NAMA')==false || data.NASABAH_NAMA=='' || data.NASABAH_NAMA==null || data.NASABAH_NAMA==undefined || data.NASABAH_NAMA=='undefined'){
            $state.go('createsurvey.error');
            $scope.fdSV.ERROR = 'Data nasabah -> Nasabah nama'+vetd;
        }
        else if (data.hasOwnProperty('NASABAH_PLAFOND')==false || data.NASABAH_PLAFOND=='' || data.NASABAH_PLAFOND==null || data.NASABAH_PLAFOND==undefined || data.NASABAH_PLAFOND=='undefined'){
            $state.go('createsurvey.error');
            $scope.fdSV.ERROR = 'Data nasabah -> Nasabah plafond tidak boleh kosong';
        }
        else if (data.hasOwnProperty('NASABAH_JANGKA_WAKTU')==false || data.NASABAH_JANGKA_WAKTU=='' || data.NASABAH_JANGKA_WAKTU==null || data.NASABAH_JANGKA_WAKTU==undefined || data.NASABAH_JANGKA_WAKTU=='undefined'){
            $state.go('createsurvey.error');
            $scope.fdSV.ERROR = 'Data nasabah -> Nasabah jangka waktu tidak boleh kosong';
        }
        else if (data.hasOwnProperty('NASABAH_ALAMAT')==false || data.NASABAH_ALAMAT=='' || data.NASABAH_ALAMAT==null || data.NASABAH_ALAMAT==undefined || data.NASABAH_ALAMAT=='undefined'){
            $state.go('createsurvey.error');
            $scope.fdSV.ERROR = 'Data nasabah -> Nasabah alamat tidak boleh kosong';
        }
        else if (data.hasOwnProperty('NASABAH_NAMA_KELOMPOK')==false || data.NASABAH_NAMA_KELOMPOK=='' || data.NASABAH_NAMA_KELOMPOK==null || data.NASABAH_NAMA_KELOMPOK==undefined || data.NASABAH_NAMA_KELOMPOK=='undefined'){
            $state.go('createsurvey.error');
            $scope.fdSV.ERROR = 'Data nasabah -> Nasabah nama kelompok tidak boleh kosong';
        }
        else if (data.hasOwnProperty('NASABAH_HARI_PERTEMUAN')==false || data.NASABAH_HARI_PERTEMUAN=='' || data.NASABAH_HARI_PERTEMUAN==null || data.NASABAH_HARI_PERTEMUAN==undefined || data.NASABAH_HARI_PERTEMUAN=='undefined'){
            $state.go('createsurvey.error');
            $scope.fdSV.ERROR = 'Data nasabah -> Nasabah hari pertemuan tidak boleh kosong';
        }
        else if (data.hasOwnProperty('NASABAH_NO_REKENING')==false || data.NASABAH_NO_REKENING=='' || data.NASABAH_NO_REKENING==null || data.NASABAH_NO_REKENING==undefined || data.NASABAH_NO_REKENING=='undefined'){
            $state.go('createsurvey.error');
            $scope.fdSV.ERROR = 'Data nasabah -> Nasabah nomor rekening tidak boleh kosong';
        }
        else if (data.hasOwnProperty('NASABAH_SIKLUS')==false || data.NASABAH_SIKLUS=='' || data.NASABAH_SIKLUS==null || data.NASABAH_SIKLUS==undefined || data.NASABAH_SIKLUS=='undefined'){
            $state.go('createsurvey.error');
            $scope.fdSV.ERROR = 'Data nasabah -> Nasabah siklus tidak boleh kosong';
        }
        
        //tambahan field
        
        else if (data.hasOwnProperty('NASABAH_JENIS_USAHA_UTAMA')==false || data.NASABAH_JENIS_USAHA_UTAMA=='' || data.NASABAH_JENIS_USAHA_UTAMA==null || data.NASABAH_JENIS_USAHA_UTAMA==undefined || data.NASABAH_JENIS_USAHA_UTAMA=='undefined'){
            $state.go('createsurvey.error');
            $scope.fdSV.ERROR = 'Data nasabah -> Jenis Usaha Utama'+vetd;
        }
        else if (data.NASABAH_JENIS_USAHA_UTAMA=='LAINNYA' && (data.hasOwnProperty('NASABAH_JENIS_USAHA_UTAMA_LAINNYA_DESKRIPSI')==false || data.NASABAH_JENIS_USAHA_UTAMA_LAINNYA_DESKRIPSI=='' || data.NASABAH_JENIS_USAHA_UTAMA_LAINNYA_DESKRIPSI==null || data.NASABAH_JENIS_USAHA_UTAMA_LAINNYA_DESKRIPSI==undefined || data.NASABAH_JENIS_USAHA_UTAMA_LAINNYA_DESKRIPSI=='undefined')){
            $state.go('createsurvey.error');
            $scope.fdSV.ERROR = 'Data nasabah -> Jenis Usaha Utama -> Jika lainnya, sebutkan'+vetd;
        }
        else if (data.hasOwnProperty('NASABAH_LAMA_USAHA')==false || data.NASABAH_LAMA_USAHA=='' || data.NASABAH_LAMA_USAHA==null || data.NASABAH_LAMA_USAHA==undefined || data.NASABAH_LAMA_USAHA=='undefined'){
            $state.go('createsurvey.error');
            $scope.fdSV.ERROR = 'Data nasabah -> Lama Usaha'+vetd;
        }
        
        else if (data.hasOwnProperty('NASABAH_UMUR')==false || data.NASABAH_UMUR=='' || data.NASABAH_UMUR==null || data.NASABAH_UMUR==undefined || data.NASABAH_UMUR=='undefined'){
            $state.go('createsurvey.error');
            $scope.fdSV.ERROR = 'Data nasabah -> Umur nasabah'+vetd;
        }
        else if (data.hasOwnProperty('NASABAH_LAMA_BERGABUNG')==false || data.NASABAH_LAMA_BERGABUNG=='' || data.NASABAH_LAMA_BERGABUNG==null || data.NASABAH_LAMA_BERGABUNG==undefined || data.NASABAH_LAMA_BERGABUNG=='undefined'){
            $state.go('createsurvey.error');
            $scope.fdSV.ERROR = 'Data nasabah -> Lama bergabung'+vetd;
        } 
        
        
        
        /* Validasi Indikator Kesehatan */
        
        else if (data.hasOwnProperty('IDK_KESEHATAN_CACAT_FISIK')==false || data.IDK_KESEHATAN_CACAT_FISIK=='' || data.IDK_KESEHATAN_CACAT_FISIK==null || data.IDK_KESEHATAN_CACAT_FISIK==undefined || data.IDK_KESEHATAN_CACAT_FISIK=='undefined'){
            $state.go('createsurvey.error');
            $scope.fdSV.ERROR = 'Indikator Kesehatan ->1. Apakah nasabah memiliki kecacatan secara fisik?'+vetd;
        } 
        else if (data.IDK_KESEHATAN_CACAT_FISIK=='YA' && (data.hasOwnProperty('IDK_KESEHATAN_CACAT_FISIK_DESKRIPSI')==false || data.IDK_KESEHATAN_CACAT_FISIK_DESKRIPSI=='' || data.IDK_KESEHATAN_CACAT_FISIK_DESKRIPSI==null || data.IDK_KESEHATAN_CACAT_FISIK_DESKRIPSI==undefined || data.IDK_KESEHATAN_CACAT_FISIK_DESKRIPSI=='undefined')){
            $state.go('createsurvey.error');
            $scope.fdSV.ERROR = 'Indikator Kesehatan ->1. Apakah nasabah memiliki kecacatan secara fisik? Jika ya, sebutkan'+vetd;
        } 
        else if (data.hasOwnProperty('IDK_KESEHATAN_SAKIT_SELAMA_1_TAHUN')==false || data.IDK_KESEHATAN_SAKIT_SELAMA_1_TAHUN=='' || data.IDK_KESEHATAN_SAKIT_SELAMA_1_TAHUN==null || data.IDK_KESEHATAN_SAKIT_SELAMA_1_TAHUN==undefined || data.IDK_KESEHATAN_SAKIT_SELAMA_1_TAHUN=='undefined'){
            $state.go('createsurvey.error');
            $scope.fdSV.ERROR = 'Indikator Kesehatan -> 2. Apakah nasabah/anggota keluarga pernah mengalami sakit selama 1 tahun terakhir?'+vetd;
        }
        else if (data.IDK_KESEHATAN_SAKIT_SELAMA_1_TAHUN=='PERNAH' && (data.hasOwnProperty('IDK_KESEHATAN_SAKIT_SELAMA_1_TAHUN_JENIS_PENYAKIT')==false || data.IDK_KESEHATAN_SAKIT_SELAMA_1_TAHUN_JENIS_PENYAKIT=='' || data.IDK_KESEHATAN_SAKIT_SELAMA_1_TAHUN_JENIS_PENYAKIT==null || data.IDK_KESEHATAN_SAKIT_SELAMA_1_TAHUN_JENIS_PENYAKIT==undefined || data.IDK_KESEHATAN_SAKIT_SELAMA_1_TAHUN_JENIS_PENYAKIT=='undefined')){
            $state.go('createsurvey.error');
            $scope.fdSV.ERROR = 'Indikator Kesehatan -> 2. Apakah nasabah/anggota keluarga pernah mengalami sakit selama 1 tahun terakhir? -> Jenis Penyakit'+vetd;
        }
        else if (data.IDK_KESEHATAN_SAKIT_SELAMA_1_TAHUN=='PERNAH' && (data.hasOwnProperty('IDK_KESEHATAN_SAKIT_SELAMA_1_TAHUN_PENDERITA')==false || data.IDK_KESEHATAN_SAKIT_SELAMA_1_TAHUN_PENDERITA=='' || data.IDK_KESEHATAN_SAKIT_SELAMA_1_TAHUN_PENDERITA==null || data.IDK_KESEHATAN_SAKIT_SELAMA_1_TAHUN_PENDERITA==undefined || data.IDK_KESEHATAN_SAKIT_SELAMA_1_TAHUN_PENDERITA=='undefined')){
            $state.go('createsurvey.error');
            $scope.fdSV.ERROR = 'Indikator Kesehatan -> 2. Apakah nasabah/anggota keluarga pernah mengalami sakit selama 1 tahun terakhir? -> Penderita'+vetd;
        }
        else if (data.IDK_KESEHATAN_SAKIT_SELAMA_1_TAHUN=='PERNAH' && (data.hasOwnProperty('IDK_KESEHATAN_SAKIT_SELAMA_1_TAHUN_KESULITAN_BIAYA_BEROBAT')==false || data.IDK_KESEHATAN_SAKIT_SELAMA_1_TAHUN_KESULITAN_BIAYA_BEROBAT=='' || data.IDK_KESEHATAN_SAKIT_SELAMA_1_TAHUN_KESULITAN_BIAYA_BEROBAT==null || data.IDK_KESEHATAN_SAKIT_SELAMA_1_TAHUN_KESULITAN_BIAYA_BEROBAT==undefined || data.IDK_KESEHATAN_SAKIT_SELAMA_1_TAHUN_KESULITAN_BIAYA_BEROBAT=='undefined')){
            $state.go('createsurvey.error');
            $scope.fdSV.ERROR = 'Indikator Kesehatan -> 2. Apakah nasabah/anggota keluarga pernah mengalami sakit selama 1 tahun terakhir? -> Kesulitan biaya berobat'+vetd;
        }
        else if (data.IDK_KESEHATAN_SAKIT_SELAMA_1_TAHUN=='PERNAH' && data.IDK_KESEHATAN_SAKIT_SELAMA_1_TAHUN_KESULITAN_BIAYA_BEROBAT=='YA' && (data.hasOwnProperty('IDK_KESEHATAN_SAKIT_SELAMA_1_TAHUN_CARA_MENGATASI_KESULITAN')==false || data.IDK_KESEHATAN_SAKIT_SELAMA_1_TAHUN_CARA_MENGATASI_KESULITAN=='' || data.IDK_KESEHATAN_SAKIT_SELAMA_1_TAHUN_CARA_MENGATASI_KESULITAN==null || data.IDK_KESEHATAN_SAKIT_SELAMA_1_TAHUN_CARA_MENGATASI_KESULITAN==undefined || data.IDK_KESEHATAN_SAKIT_SELAMA_1_TAHUN_CARA_MENGATASI_KESULITAN=='undefined')){
            $state.go('createsurvey.error');
            $scope.fdSV.ERROR = 'Indikator Kesehatan -> 2. Apakah nasabah/anggota keluarga pernah mengalami sakit selama 1 tahun terakhir? -> Cara mengatasi kesulitan'+vetd;
        }
        else if (data.IDK_KESEHATAN_SAKIT_SELAMA_1_TAHUN=='PERNAH' && data.IDK_KESEHATAN_SAKIT_SELAMA_1_TAHUN_KESULITAN_BIAYA_BEROBAT=='YA' && data.IDK_KESEHATAN_SAKIT_SELAMA_1_TAHUN_CARA_MENGATASI_KESULITAN=='LAINNYA'  && (data.hasOwnProperty('IDK_KESEHATAN_SAKIT_SELAMA_1_TAHUN_CARA_MENGATASI_KESULITAN_LAINNYA_DESKRIPSI')==false || data.IDK_KESEHATAN_SAKIT_SELAMA_1_TAHUN_CARA_MENGATASI_KESULITAN_LAINNYA_DESKRIPSI=='' || data.IDK_KESEHATAN_SAKIT_SELAMA_1_TAHUN_CARA_MENGATASI_KESULITAN_LAINNYA_DESKRIPSI==null || data.IDK_KESEHATAN_SAKIT_SELAMA_1_TAHUN_CARA_MENGATASI_KESULITAN_LAINNYA_DESKRIPSI==undefined || data.IDK_KESEHATAN_SAKIT_SELAMA_1_TAHUN_CARA_MENGATASI_KESULITAN_LAINNYA_DESKRIPSI=='undefined')){
            $state.go('createsurvey.error');
            $scope.fdSV.ERROR = 'Indikator Kesehatan -> 2. Apakah nasabah/anggota keluarga pernah mengalami sakit selama 1 tahun terakhir? -> Cara mengatasi kesulitan -> Jika Lainnya'+vetd;
        }
        else if (data.hasOwnProperty('IDK_KESEHATAN_SEBELUM_BERGABUNG_MEMILIKI_JAMINAN_KESEHATAN')==false || data.IDK_KESEHATAN_SEBELUM_BERGABUNG_MEMILIKI_JAMINAN_KESEHATAN=='' || data.IDK_KESEHATAN_SEBELUM_BERGABUNG_MEMILIKI_JAMINAN_KESEHATAN==null || data.IDK_KESEHATAN_SEBELUM_BERGABUNG_MEMILIKI_JAMINAN_KESEHATAN==undefined || data.IDK_KESEHATAN_SEBELUM_BERGABUNG_MEMILIKI_JAMINAN_KESEHATAN=='undefined'){
            $state.go('createsurvey.error');
            $scope.fdSV.ERROR = 'Indikator Kesehatan -> 3. Apakah sebelum bergabung dengan Mekaar nasabah memiliki jaminan kartu jaminan kesehatan?'+vetd;
        }
        else if (
                data.IDK_KESEHATAN_SEBELUM_BERGABUNG_MEMILIKI_JAMINAN_KESEHATAN=='PUNYA'
                && (
                    (data.hasOwnProperty('IDK_KESEHATAN_SEBELUM_BERGABUNG_MEMILIKI_JAMINAN_KESEHATAN_KIS')==false || data.IDK_KESEHATAN_SEBELUM_BERGABUNG_MEMILIKI_JAMINAN_KESEHATAN_KIS=='' || data.IDK_KESEHATAN_SEBELUM_BERGABUNG_MEMILIKI_JAMINAN_KESEHATAN_KIS==null || data.IDK_KESEHATAN_SEBELUM_BERGABUNG_MEMILIKI_JAMINAN_KESEHATAN_KIS==undefined || data.IDK_KESEHATAN_SEBELUM_BERGABUNG_MEMILIKI_JAMINAN_KESEHATAN_KIS=='undefined')
                    && (data.hasOwnProperty('IDK_KESEHATAN_SEBELUM_BERGABUNG_MEMILIKI_JAMINAN_KESEHATAN_BPJS_KESEHATAN')==false || data.IDK_KESEHATAN_SEBELUM_BERGABUNG_MEMILIKI_JAMINAN_KESEHATAN_BPJS_KESEHATAN=='' || data.IDK_KESEHATAN_SEBELUM_BERGABUNG_MEMILIKI_JAMINAN_KESEHATAN_BPJS_KESEHATAN==null || data.IDK_KESEHATAN_SEBELUM_BERGABUNG_MEMILIKI_JAMINAN_KESEHATAN_BPJS_KESEHATAN==undefined || data.IDK_KESEHATAN_SEBELUM_BERGABUNG_MEMILIKI_JAMINAN_KESEHATAN_BPJS_KESEHATAN=='undefined')
                    && (data.hasOwnProperty('IDK_KESEHATAN_SEBELUM_BERGABUNG_MEMILIKI_JAMINAN_KESEHATAN_JAMINAN_KESEHATAN_NASIONAL')==false || data.IDK_KESEHATAN_SEBELUM_BERGABUNG_MEMILIKI_JAMINAN_KESEHATAN_JAMINAN_KESEHATAN_NASIONAL=='' || data.IDK_KESEHATAN_SEBELUM_BERGABUNG_MEMILIKI_JAMINAN_KESEHATAN_JAMINAN_KESEHATAN_NASIONAL==null || data.IDK_KESEHATAN_SEBELUM_BERGABUNG_MEMILIKI_JAMINAN_KESEHATAN_JAMINAN_KESEHATAN_NASIONAL==undefined || data.IDK_KESEHATAN_SEBELUM_BERGABUNG_MEMILIKI_JAMINAN_KESEHATAN_JAMINAN_KESEHATAN_NASIONAL=='undefined')
                )
            ){
            $state.go('createsurvey.error');
            $scope.fdSV.ERROR = 'Indikator Kesehatan -> 3. Apakah sebelum bergabung dengan Mekaar nasabah memiliki jaminan kartu jaminan kesehatan? -> KIS/BPJS/JKS '+vetd+' salah satu';
        }
        else if (data.IDK_KESEHATAN_SEBELUM_BERGABUNG_MEMILIKI_JAMINAN_KESEHATAN_BPJS_KESEHATAN=='BPJS_KESEHATAN' && (data.hasOwnProperty('IDK_KESEHATAN_SEBELUM_BERGABUNG_MEMILIKI_JAMINAN_KESEHATAN_BPJS_KESEHATAN_SEBESAR')==false || data.IDK_KESEHATAN_SEBELUM_BERGABUNG_MEMILIKI_JAMINAN_KESEHATAN_BPJS_KESEHATAN_SEBESAR=='' || data.IDK_KESEHATAN_SEBELUM_BERGABUNG_MEMILIKI_JAMINAN_KESEHATAN_BPJS_KESEHATAN_SEBESAR==null || data.IDK_KESEHATAN_SEBELUM_BERGABUNG_MEMILIKI_JAMINAN_KESEHATAN_BPJS_KESEHATAN_SEBESAR==undefined || data.IDK_KESEHATAN_SEBELUM_BERGABUNG_MEMILIKI_JAMINAN_KESEHATAN_BPJS_KESEHATAN_SEBESAR=='undefined')){
            $state.go('createsurvey.error');
            $scope.fdSV.ERROR = 'Indikator Kesehatan -> 3. Apakah sebelum bergabung dengan Mekaar nasabah memiliki jaminan kartu jaminan kesehatan? -> BPJS -> BPJS Kesehatan. Iuran bulanan sebesar'+vetd;
        }
        else if (data.hasOwnProperty('IDK_KESEHATAN_SETELAH_BERGABUNG_MEMILIKI_JAMINAN_KESEHATAN')==false || data.IDK_KESEHATAN_SEBELUM_BERGABUNG_MEMILIKI_JAMINAN_KESEHATAN=='' || data.IDK_KESEHATAN_SEBELUM_BERGABUNG_MEMILIKI_JAMINAN_KESEHATAN==null || data.IDK_KESEHATAN_SEBELUM_BERGABUNG_MEMILIKI_JAMINAN_KESEHATAN==undefined || data.IDK_KESEHATAN_SEBELUM_BERGABUNG_MEMILIKI_JAMINAN_KESEHATAN=='undefined'){
            $state.go('createsurvey.error');
            $scope.fdSV.ERROR = 'Indikator Kesehatan -> 4. Apakah setelah bergabung dengan Mekaar nasabah memiliki jaminan kartu jaminan kesehatan?'+vetd;
        }
        else if (
                data.IDK_KESEHATAN_SETELAH_BERGABUNG_MEMILIKI_JAMINAN_KESEHATAN=='PUNYA'
                && (
                    (data.hasOwnProperty('IDK_KESEHATAN_SETELAH_BERGABUNG_MEMILIKI_JAMINAN_KESEHATAN_KIS')==false || data.IDK_KESEHATAN_SETELAH_BERGABUNG_MEMILIKI_JAMINAN_KESEHATAN_KIS=='' || data.IDK_KESEHATAN_SETELAH_BERGABUNG_MEMILIKI_JAMINAN_KESEHATAN_KIS==null || data.IDK_KESEHATAN_SETELAH_BERGABUNG_MEMILIKI_JAMINAN_KESEHATAN_KIS==undefined || data.IDK_KESEHATAN_SETELAH_BERGABUNG_MEMILIKI_JAMINAN_KESEHATAN_KIS=='undefined')
                    && (data.hasOwnProperty('IDK_KESEHATAN_SETELAH_BERGABUNG_MEMILIKI_JAMINAN_KESEHATAN_BPJS_KESEHATAN')==false || data.IDK_KESEHATAN_SETELAH_BERGABUNG_MEMILIKI_JAMINAN_KESEHATAN_BPJS_KESEHATAN=='' || data.IDK_KESEHATAN_SETELAH_BERGABUNG_MEMILIKI_JAMINAN_KESEHATAN_BPJS_KESEHATAN==null || data.IDK_KESEHATAN_SETELAH_BERGABUNG_MEMILIKI_JAMINAN_KESEHATAN_BPJS_KESEHATAN==undefined || data.IDK_KESEHATAN_SETELAH_BERGABUNG_MEMILIKI_JAMINAN_KESEHATAN_BPJS_KESEHATAN=='undefined')
                    && (data.hasOwnProperty('IDK_KESEHATAN_SETELAH_BERGABUNG_MEMILIKI_JAMINAN_KESEHATAN_JAMINAN_KESEHATAN_NASIONAL')==false || data.IDK_KESEHATAN_SETELAH_BERGABUNG_MEMILIKI_JAMINAN_KESEHATAN_JAMINAN_KESEHATAN_NASIONAL=='' || data.IDK_KESEHATAN_SETELAH_BERGABUNG_MEMILIKI_JAMINAN_KESEHATAN_JAMINAN_KESEHATAN_NASIONAL==null || data.IDK_KESEHATAN_SETELAH_BERGABUNG_MEMILIKI_JAMINAN_KESEHATAN_JAMINAN_KESEHATAN_NASIONAL==undefined || data.IDK_KESEHATAN_SETELAH_BERGABUNG_MEMILIKI_JAMINAN_KESEHATAN_JAMINAN_KESEHATAN_NASIONAL=='undefined')
                )
            ){
            $state.go('createsurvey.error');
            $scope.fdSV.ERROR = 'Indikator Kesehatan -> 4. Apakah setelah bergabung dengan Mekaar nasabah memiliki jaminan kartu jaminan kesehatan? -> KIS/BPJS/JKS '+vetd+' salah satu';
        }
        else if (data.IDK_KESEHATAN_SETELAH_BERGABUNG_MEMILIKI_JAMINAN_KESEHATAN_BPJS_KESEHATAN=='BPJS_KESEHATAN' && (data.hasOwnProperty('IDK_KESEHATAN_SETELAH_BERGABUNG_MEMILIKI_JAMINAN_KESEHATAN_BPJS_KESEHATAN_SEBESAR')==false || data.IDK_KESEHATAN_SETELAH_BERGABUNG_MEMILIKI_JAMINAN_KESEHATAN_BPJS_KESEHATAN_SEBESAR=='' || data.IDK_KESEHATAN_SETELAH_BERGABUNG_MEMILIKI_JAMINAN_KESEHATAN_BPJS_KESEHATAN_SEBESAR==null || data.IDK_KESEHATAN_SETELAH_BERGABUNG_MEMILIKI_JAMINAN_KESEHATAN_BPJS_KESEHATAN_SEBESAR==undefined || data.IDK_KESEHATAN_SETELAH_BERGABUNG_MEMILIKI_JAMINAN_KESEHATAN_BPJS_KESEHATAN_SEBESAR=='undefined')){
            $state.go('createsurvey.error');
            $scope.fdSV.ERROR = 'Indikator Kesehatan -> 4. Apakah setelah bergabung dengan Mekaar nasabah memiliki jaminan kartu jaminan kesehatan? -> BPJS -> BPJS Kesehatan. Iuran bulanan sebesar'+vetd;
        }
        
        /* Validasi Indikator Perubahan Hidup */
        
        else if (data.hasOwnProperty('IDK_PERUBAHAN_HIDUP_SEBERAPA_SERING_MENABUNG_SEBELUM_MENERIMA_PEMBIAYAAN')==false || data.IDK_PERUBAHAN_HIDUP_SEBERAPA_SERING_MENABUNG_SEBELUM_MENERIMA_PEMBIAYAAN=='' || data.IDK_PERUBAHAN_HIDUP_SEBERAPA_SERING_MENABUNG_SEBELUM_MENERIMA_PEMBIAYAAN==null || data.IDK_PERUBAHAN_HIDUP_SEBERAPA_SERING_MENABUNG_SEBELUM_MENERIMA_PEMBIAYAAN==undefined || data.IDK_PERUBAHAN_HIDUP_SEBERAPA_SERING_MENABUNG_SEBELUM_MENERIMA_PEMBIAYAAN=='undefined'){
            $state.go('createsurvey.error');
            $scope.fdSV.ERROR = 'Indikator Perubahan Hidup -> 5. Seberapa sering nasabah menabung sebelum menerima pembiayaan Mekaar?'+vetd;
        }
        else if (data.hasOwnProperty('IDK_PERUBAHAN_HIDUP_SEBERAPA_SERING_MENABUNG_SETELAH_MENERIMA_PEMBIAYAAN')==false || data.IDK_PERUBAHAN_HIDUP_SEBERAPA_SERING_MENABUNG_SETELAH_MENERIMA_PEMBIAYAAN=='' || data.IDK_PERUBAHAN_HIDUP_SEBERAPA_SERING_MENABUNG_SETELAH_MENERIMA_PEMBIAYAAN==null || data.IDK_PERUBAHAN_HIDUP_SEBERAPA_SERING_MENABUNG_SETELAH_MENERIMA_PEMBIAYAAN==undefined || data.IDK_PERUBAHAN_HIDUP_SEBERAPA_SERING_MENABUNG_SETELAH_MENERIMA_PEMBIAYAAN=='undefined'){
            $state.go('createsurvey.error');
            $scope.fdSV.ERROR = 'Indikator Perubahan Hidup -> 6. Seberapa sering nasabah menabung setelah menerima pembiayaan Mekaar?'+vetd;
        }
//        else if (data.hasOwnProperty('IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SEBELUM_MENERIMA_PEMBIAYAAN')==false || data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SEBELUM_MENERIMA_PEMBIAYAAN=='' || data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SEBELUM_MENERIMA_PEMBIAYAAN==null || data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SEBELUM_MENERIMA_PEMBIAYAAN==undefined || data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SEBELUM_MENERIMA_PEMBIAYAAN=='undefined'){
//            $state.go('createsurvey.error');
//            $scope.fdSV.ERROR = 'Indikator Perubahan Hidup -> 7. Dimana nasabah biasanya menabung sebelum menerima pembiayaan Mekaar?'+vetd;
//        }
        //tambahan field
        else if (
                (data.hasOwnProperty('IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SEBELUM_MENERIMA_PEMBIAYAAN_1')==false || data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SEBELUM_MENERIMA_PEMBIAYAAN_1=='' || data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SEBELUM_MENERIMA_PEMBIAYAAN_1==null || data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SEBELUM_MENERIMA_PEMBIAYAAN_1==undefined || data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SEBELUM_MENERIMA_PEMBIAYAAN_1=='undefined')
                && (data.hasOwnProperty('IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SEBELUM_MENERIMA_PEMBIAYAAN_2')==false || data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SEBELUM_MENERIMA_PEMBIAYAAN_2=='' || data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SEBELUM_MENERIMA_PEMBIAYAAN_2==null || data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SEBELUM_MENERIMA_PEMBIAYAAN_2==undefined || data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SEBELUM_MENERIMA_PEMBIAYAAN_2=='undefined')
                && (data.hasOwnProperty('IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SEBELUM_MENERIMA_PEMBIAYAAN_3')==false || data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SEBELUM_MENERIMA_PEMBIAYAAN_3=='' || data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SEBELUM_MENERIMA_PEMBIAYAAN_3==null || data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SEBELUM_MENERIMA_PEMBIAYAAN_3==undefined || data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SEBELUM_MENERIMA_PEMBIAYAAN_3=='undefined')
                && (data.hasOwnProperty('IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SEBELUM_MENERIMA_PEMBIAYAAN_4')==false || data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SEBELUM_MENERIMA_PEMBIAYAAN_4=='' || data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SEBELUM_MENERIMA_PEMBIAYAAN_4==null || data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SEBELUM_MENERIMA_PEMBIAYAAN_4==undefined || data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SEBELUM_MENERIMA_PEMBIAYAAN_4=='undefined')
                && (data.hasOwnProperty('IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SEBELUM_MENERIMA_PEMBIAYAAN_5')==false || data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SEBELUM_MENERIMA_PEMBIAYAAN_5=='' || data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SEBELUM_MENERIMA_PEMBIAYAAN_5==null || data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SEBELUM_MENERIMA_PEMBIAYAAN_5==undefined || data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SEBELUM_MENERIMA_PEMBIAYAAN_5=='undefined')
                && (data.hasOwnProperty('IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SEBELUM_MENERIMA_PEMBIAYAAN_6')==false || data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SEBELUM_MENERIMA_PEMBIAYAAN_6=='' || data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SEBELUM_MENERIMA_PEMBIAYAAN_6==null || data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SEBELUM_MENERIMA_PEMBIAYAAN_6==undefined || data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SEBELUM_MENERIMA_PEMBIAYAAN_6=='undefined')
                && (data.hasOwnProperty('IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SEBELUM_MENERIMA_PEMBIAYAAN_7')==false || data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SEBELUM_MENERIMA_PEMBIAYAAN_7=='' || data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SEBELUM_MENERIMA_PEMBIAYAAN_7==null || data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SEBELUM_MENERIMA_PEMBIAYAAN_7==undefined || data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SEBELUM_MENERIMA_PEMBIAYAAN_7=='undefined')
                ){
            $state.go('createsurvey.error');
            $scope.fdSV.ERROR = 'Indikator Perubahan Hidup -> 7. Dimana nasabah biasanya menabung sebelum menerima pembiayaan Mekaar?'+vetd;
        }
        
        else if (data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SEBELUM_MENERIMA_PEMBIAYAAN_7=='LAINNYA' && (data.hasOwnProperty('IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SEBELUM_MENERIMA_PEMBIAYAAN_LAINNYA_DESKRIPSI')==false || data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SEBELUM_MENERIMA_PEMBIAYAAN_LAINNYA_DESKRIPSI=='' || data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SEBELUM_MENERIMA_PEMBIAYAAN_LAINNYA_DESKRIPSI==null || data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SEBELUM_MENERIMA_PEMBIAYAAN_LAINNYA_DESKRIPSI==undefined || data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SEBELUM_MENERIMA_PEMBIAYAAN_LAINNYA_DESKRIPSI=='undefined')){
            $state.go('createsurvey.error');
            $scope.fdSV.ERROR = 'Indikator Perubahan Hidup -> 7. Dimana nasabah biasanya menabung sebelum menerima pembiayaan Mekaar? -> Jika lainnya, sebutkan'+vetd;
        }
        else if (data.hasOwnProperty('IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SEBELUM_MENERIMA_PEMBIAYAAN_NOMINAL_YANG_DISISIHKAN_SETIAP_BULAN')==false || data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SEBELUM_MENERIMA_PEMBIAYAAN_NOMINAL_YANG_DISISIHKAN_SETIAP_BULAN==='' || data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SEBELUM_MENERIMA_PEMBIAYAAN_NOMINAL_YANG_DISISIHKAN_SETIAP_BULAN===null || data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SEBELUM_MENERIMA_PEMBIAYAAN_NOMINAL_YANG_DISISIHKAN_SETIAP_BULAN===undefined || data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SEBELUM_MENERIMA_PEMBIAYAAN_NOMINAL_YANG_DISISIHKAN_SETIAP_BULAN==='undefined'){
            $state.go('createsurvey.error');
            $scope.fdSV.ERROR = 'Indikator Perubahan Hidup -> 7. Dimana nasabah biasanya menabung sebelum menerima pembiayaan Mekaar? -> Nominal yang disisihkan untuk menabung setiap bulan'+vetd;
        }
        
//        else if (data.hasOwnProperty('IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SETELAH_MENERIMA_PEMBIAYAAN')==false || data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SETELAH_MENERIMA_PEMBIAYAAN=='' || data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SETELAH_MENERIMA_PEMBIAYAAN==null || data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SETELAH_MENERIMA_PEMBIAYAAN==undefined || data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SETELAH_MENERIMA_PEMBIAYAAN=='undefined'){
//            $state.go('createsurvey.error');
//            $scope.fdSV.ERROR = 'Indikator Perubahan Hidup -> 8. Dimana nasabah biasanya menabung setelah menerima pembiayaan Mekaar?'+vetd;
//        }
        //tambahan field
         else if (
                (data.hasOwnProperty('IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SETELAH_MENERIMA_PEMBIAYAAN_1')==false || data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SETELAH_MENERIMA_PEMBIAYAAN_1=='' || data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SETELAH_MENERIMA_PEMBIAYAAN_1==null || data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SETELAH_MENERIMA_PEMBIAYAAN_1==undefined || data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SETELAH_MENERIMA_PEMBIAYAAN_1=='undefined')
                && (data.hasOwnProperty('IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SETELAH_MENERIMA_PEMBIAYAAN_2')==false || data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SETELAH_MENERIMA_PEMBIAYAAN_2=='' || data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SETELAH_MENERIMA_PEMBIAYAAN_2==null || data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SETELAH_MENERIMA_PEMBIAYAAN_2==undefined || data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SETELAH_MENERIMA_PEMBIAYAAN_2=='undefined')
                && (data.hasOwnProperty('IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SETELAH_MENERIMA_PEMBIAYAAN_3')==false || data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SETELAH_MENERIMA_PEMBIAYAAN_3=='' || data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SETELAH_MENERIMA_PEMBIAYAAN_3==null || data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SETELAH_MENERIMA_PEMBIAYAAN_3==undefined || data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SETELAH_MENERIMA_PEMBIAYAAN_3=='undefined')
                && (data.hasOwnProperty('IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SETELAH_MENERIMA_PEMBIAYAAN_4')==false || data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SETELAH_MENERIMA_PEMBIAYAAN_4=='' || data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SETELAH_MENERIMA_PEMBIAYAAN_4==null || data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SETELAH_MENERIMA_PEMBIAYAAN_4==undefined || data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SETELAH_MENERIMA_PEMBIAYAAN_4=='undefined')
                && (data.hasOwnProperty('IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SETELAH_MENERIMA_PEMBIAYAAN_5')==false || data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SETELAH_MENERIMA_PEMBIAYAAN_5=='' || data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SETELAH_MENERIMA_PEMBIAYAAN_5==null || data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SETELAH_MENERIMA_PEMBIAYAAN_5==undefined || data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SETELAH_MENERIMA_PEMBIAYAAN_5=='undefined')
                && (data.hasOwnProperty('IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SETELAH_MENERIMA_PEMBIAYAAN_6')==false || data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SETELAH_MENERIMA_PEMBIAYAAN_6=='' || data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SETELAH_MENERIMA_PEMBIAYAAN_6==null || data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SETELAH_MENERIMA_PEMBIAYAAN_6==undefined || data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SETELAH_MENERIMA_PEMBIAYAAN_6=='undefined')
                && (data.hasOwnProperty('IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SETELAH_MENERIMA_PEMBIAYAAN_7')==false || data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SETELAH_MENERIMA_PEMBIAYAAN_7=='' || data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SETELAH_MENERIMA_PEMBIAYAAN_7==null || data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SETELAH_MENERIMA_PEMBIAYAAN_7==undefined || data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SETELAH_MENERIMA_PEMBIAYAAN_7=='undefined')
            ){
            $state.go('createsurvey.error');
            $scope.fdSV.ERROR = 'Indikator Perubahan Hidup -> 8. Dimana nasabah biasanya menabung setelah menerima pembiayaan Mekaar?'+vetd;
        }
        else if (data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SETELAH_MENERIMA_PEMBIAYAAN_7=='LAINNYA' && (data.hasOwnProperty('IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SETELAH_MENERIMA_PEMBIAYAAN_LAINNYA_DESKRIPSI')==false || data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SETELAH_MENERIMA_PEMBIAYAAN_LAINNYA_DESKRIPSI=='' || data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SETELAH_MENERIMA_PEMBIAYAAN_LAINNYA_DESKRIPSI==null || data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SETELAH_MENERIMA_PEMBIAYAAN_LAINNYA_DESKRIPSI==undefined || data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SETELAH_MENERIMA_PEMBIAYAAN_LAINNYA_DESKRIPSI=='undefined')){
            $state.go('createsurvey.error');
            $scope.fdSV.ERROR = 'Indikator Perubahan Hidup -> 8. Dimana nasabah biasanya menabung setelah menerima pembiayaan Mekaar? -> Jika lainnya, sebutkan'+vetd;
        }
        else if (data.hasOwnProperty('IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SETELAH_MENERIMA_PEMBIAYAAN_NOMINAL_YANG_DISISIHKAN_SETIAP_BULAN')==false || data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SETELAH_MENERIMA_PEMBIAYAAN_NOMINAL_YANG_DISISIHKAN_SETIAP_BULAN==='' || data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SETELAH_MENERIMA_PEMBIAYAAN_NOMINAL_YANG_DISISIHKAN_SETIAP_BULAN===null || data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SETELAH_MENERIMA_PEMBIAYAAN_NOMINAL_YANG_DISISIHKAN_SETIAP_BULAN===undefined || data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SETELAH_MENERIMA_PEMBIAYAAN_NOMINAL_YANG_DISISIHKAN_SETIAP_BULAN==='undefined'){
            $state.go('createsurvey.error');
            $scope.fdSV.ERROR = 'Indikator Perubahan Hidup -> 8. Dimana nasabah biasanya menabung setelah menerima pembiayaan Mekaar? -> Nominal yang disisihkan untuk menabung setiap bulan'+vetd;
        }
        
        else if (data.hasOwnProperty('IDK_PERUBAHAN_HIDUP_JUMLAH_PERUBAHAN_BARANG_DAN_ASET_SETELAH_MENERIMA_PEMBIAYAAN_TELEVISI')==false || data.IDK_PERUBAHAN_HIDUP_JUMLAH_PERUBAHAN_BARANG_DAN_ASET_SETELAH_MENERIMA_PEMBIAYAAN_TELEVISI==='' || data.IDK_PERUBAHAN_HIDUP_JUMLAH_PERUBAHAN_BARANG_DAN_ASET_SETELAH_MENERIMA_PEMBIAYAAN_TELEVISI===null || data.IDK_PERUBAHAN_HIDUP_JUMLAH_PERUBAHAN_BARANG_DAN_ASET_SETELAH_MENERIMA_PEMBIAYAAN_TELEVISI===undefined || data.IDK_PERUBAHAN_HIDUP_JUMLAH_PERUBAHAN_BARANG_DAN_ASET_SETELAH_MENERIMA_PEMBIAYAAN_TELEVISI==='undefined'){
            $state.go('createsurvey.error');
            $scope.fdSV.ERROR = 'Indikator Perubahan Hidup -> 9. Apa dan berapa jumlah perubahan barang dan aset yang dimiliki nasabah setelah menerima pembiayaan Mekaar ? -> Televisi'+vetd;
        }
        else if (data.hasOwnProperty('IDK_PERUBAHAN_HIDUP_JUMLAH_PERUBAHAN_BARANG_DAN_ASET_SETELAH_MENERIMA_PEMBIAYAAN_TANAH_LADANG')==false || data.IDK_PERUBAHAN_HIDUP_JUMLAH_PERUBAHAN_BARANG_DAN_ASET_SETELAH_MENERIMA_PEMBIAYAAN_TANAH_LADANG==='' || data.IDK_PERUBAHAN_HIDUP_JUMLAH_PERUBAHAN_BARANG_DAN_ASET_SETELAH_MENERIMA_PEMBIAYAAN_TANAH_LADANG===null || data.IDK_PERUBAHAN_HIDUP_JUMLAH_PERUBAHAN_BARANG_DAN_ASET_SETELAH_MENERIMA_PEMBIAYAAN_TANAH_LADANG===undefined || data.IDK_PERUBAHAN_HIDUP_JUMLAH_PERUBAHAN_BARANG_DAN_ASET_SETELAH_MENERIMA_PEMBIAYAAN_TANAH_LADANG==='undefined'){
            $state.go('createsurvey.error');
            $scope.fdSV.ERROR = 'Indikator Perubahan Hidup -> 9. Apa dan berapa jumlah perubahan barang dan aset yang dimiliki nasabah setelah menerima pembiayaan Mekaar ? -> Tanah/Ladang'+vetd;
        }
//        else if (data.hasOwnProperty('IDK_PERUBAHAN_HIDUP_JUMLAH_PERUBAHAN_BARANG_DAN_ASET_SETELAH_MENERIMA_PEMBIAYAAN_TABUNGAN')==false || data.IDK_PERUBAHAN_HIDUP_JUMLAH_PERUBAHAN_BARANG_DAN_ASET_SETELAH_MENERIMA_PEMBIAYAAN_TABUNGAN==='' || data.IDK_PERUBAHAN_HIDUP_JUMLAH_PERUBAHAN_BARANG_DAN_ASET_SETELAH_MENERIMA_PEMBIAYAAN_TABUNGAN===null || data.IDK_PERUBAHAN_HIDUP_JUMLAH_PERUBAHAN_BARANG_DAN_ASET_SETELAH_MENERIMA_PEMBIAYAAN_TABUNGAN===undefined || data.IDK_PERUBAHAN_HIDUP_JUMLAH_PERUBAHAN_BARANG_DAN_ASET_SETELAH_MENERIMA_PEMBIAYAAN_TABUNGAN==='undefined'){
//            $state.go('createsurvey.error');
//            $scope.fdSV.ERROR = 'Indikator Perubahan Hidup -> 9. Apa dan berapa jumlah perubahan barang dan aset yang dimiliki nasabah setelah menerima pembiayaan Mekaar ? -> Tabungan'+vetd;
//        }
        else if (data.hasOwnProperty('IDK_PERUBAHAN_HIDUP_JUMLAH_PERUBAHAN_BARANG_DAN_ASET_SETELAH_MENERIMA_PEMBIAYAAN_HANDPHONE')==false || data.IDK_PERUBAHAN_HIDUP_JUMLAH_PERUBAHAN_BARANG_DAN_ASET_SETELAH_MENERIMA_PEMBIAYAAN_HANDPHONE==='' || data.IDK_PERUBAHAN_HIDUP_JUMLAH_PERUBAHAN_BARANG_DAN_ASET_SETELAH_MENERIMA_PEMBIAYAAN_HANDPHONE===null || data.IDK_PERUBAHAN_HIDUP_JUMLAH_PERUBAHAN_BARANG_DAN_ASET_SETELAH_MENERIMA_PEMBIAYAAN_HANDPHONE===undefined || data.IDK_PERUBAHAN_HIDUP_JUMLAH_PERUBAHAN_BARANG_DAN_ASET_SETELAH_MENERIMA_PEMBIAYAAN_HANDPHONE==='undefined'){
            $state.go('createsurvey.error');
            $scope.fdSV.ERROR = 'Indikator Perubahan Hidup -> 9. Apa dan berapa jumlah perubahan barang dan aset yang dimiliki nasabah setelah menerima pembiayaan Mekaar ? -> Handphone'+vetd;
        }
        else if (data.hasOwnProperty('IDK_PERUBAHAN_HIDUP_JUMLAH_PERUBAHAN_BARANG_DAN_ASET_SETELAH_MENERIMA_PEMBIAYAAN_HEWAN_TERNAK')==false || data.IDK_PERUBAHAN_HIDUP_JUMLAH_PERUBAHAN_BARANG_DAN_ASET_SETELAH_MENERIMA_PEMBIAYAAN_HEWAN_TERNAK==='' || data.IDK_PERUBAHAN_HIDUP_JUMLAH_PERUBAHAN_BARANG_DAN_ASET_SETELAH_MENERIMA_PEMBIAYAAN_HEWAN_TERNAK===null || data.IDK_PERUBAHAN_HIDUP_JUMLAH_PERUBAHAN_BARANG_DAN_ASET_SETELAH_MENERIMA_PEMBIAYAAN_HEWAN_TERNAK===undefined || data.IDK_PERUBAHAN_HIDUP_JUMLAH_PERUBAHAN_BARANG_DAN_ASET_SETELAH_MENERIMA_PEMBIAYAAN_HEWAN_TERNAK==='undefined'){
            $state.go('createsurvey.error');
            $scope.fdSV.ERROR = 'Indikator Perubahan Hidup -> 9. Apa dan berapa jumlah perubahan barang dan aset yang dimiliki nasabah setelah menerima pembiayaan Mekaar ? -> Ternak'+vetd;
        }
        else if (data.hasOwnProperty('IDK_PERUBAHAN_HIDUP_JUMLAH_PERUBAHAN_BARANG_DAN_ASET_SETELAH_MENERIMA_PEMBIAYAAN_GEROBAK_DAGANG')==false || data.IDK_PERUBAHAN_HIDUP_JUMLAH_PERUBAHAN_BARANG_DAN_ASET_SETELAH_MENERIMA_PEMBIAYAAN_GEROBAK_DAGANG==='' || data.IDK_PERUBAHAN_HIDUP_JUMLAH_PERUBAHAN_BARANG_DAN_ASET_SETELAH_MENERIMA_PEMBIAYAAN_GEROBAK_DAGANG===null || data.IDK_PERUBAHAN_HIDUP_JUMLAH_PERUBAHAN_BARANG_DAN_ASET_SETELAH_MENERIMA_PEMBIAYAAN_GEROBAK_DAGANG===undefined || data.IDK_PERUBAHAN_HIDUP_JUMLAH_PERUBAHAN_BARANG_DAN_ASET_SETELAH_MENERIMA_PEMBIAYAAN_GEROBAK_DAGANG==='undefined'){
            $state.go('createsurvey.error');
            $scope.fdSV.ERROR = 'Indikator Perubahan Hidup -> 9. Apa dan berapa jumlah perubahan barang dan aset yang dimiliki nasabah setelah menerima pembiayaan Mekaar ? -> Gerobak dagang'+vetd;
        }
        else if (data.hasOwnProperty('IDK_PERUBAHAN_HIDUP_JUMLAH_PERUBAHAN_BARANG_DAN_ASET_SETELAH_MENERIMA_PEMBIAYAAN_PERHIASAN')==false || data.IDK_PERUBAHAN_HIDUP_JUMLAH_PERUBAHAN_BARANG_DAN_ASET_SETELAH_MENERIMA_PEMBIAYAAN_PERHIASAN==='' || data.IDK_PERUBAHAN_HIDUP_JUMLAH_PERUBAHAN_BARANG_DAN_ASET_SETELAH_MENERIMA_PEMBIAYAAN_PERHIASAN===null || data.IDK_PERUBAHAN_HIDUP_JUMLAH_PERUBAHAN_BARANG_DAN_ASET_SETELAH_MENERIMA_PEMBIAYAAN_PERHIASAN===undefined || data.IDK_PERUBAHAN_HIDUP_JUMLAH_PERUBAHAN_BARANG_DAN_ASET_SETELAH_MENERIMA_PEMBIAYAAN_PERHIASAN==='undefined'){
            $state.go('createsurvey.error');
            $scope.fdSV.ERROR = 'Indikator Perubahan Hidup -> 9. Apa dan berapa jumlah perubahan barang dan aset yang dimiliki nasabah setelah menerima pembiayaan Mekaar ? -> Perhiasan'+vetd;
        }
        else if (data.hasOwnProperty('IDK_PERUBAHAN_HIDUP_JUMLAH_PERUBAHAN_BARANG_DAN_ASET_SETELAH_MENERIMA_PEMBIAYAAN_LAINNYA')==false || data.IDK_PERUBAHAN_HIDUP_JUMLAH_PERUBAHAN_BARANG_DAN_ASET_SETELAH_MENERIMA_PEMBIAYAAN_LAINNYA==='' || data.IDK_PERUBAHAN_HIDUP_JUMLAH_PERUBAHAN_BARANG_DAN_ASET_SETELAH_MENERIMA_PEMBIAYAAN_LAINNYA===null || data.IDK_PERUBAHAN_HIDUP_JUMLAH_PERUBAHAN_BARANG_DAN_ASET_SETELAH_MENERIMA_PEMBIAYAAN_LAINNYA===undefined || data.IDK_PERUBAHAN_HIDUP_JUMLAH_PERUBAHAN_BARANG_DAN_ASET_SETELAH_MENERIMA_PEMBIAYAAN_LAINNYA==='undefined'){
            $state.go('createsurvey.error');
            $scope.fdSV.ERROR = 'Indikator Perubahan Hidup -> 9. Apa dan berapa jumlah perubahan barang dan aset yang dimiliki nasabah setelah menerima pembiayaan Mekaar ? -> Lainnya'+vetd;
        }
        else if (data.IDK_PERUBAHAN_HIDUP_JUMLAH_PERUBAHAN_BARANG_DAN_ASET_SETELAH_MENERIMA_PEMBIAYAAN_LAINNYA>0 && (data.hasOwnProperty('IDK_PERUBAHAN_HIDUP_JUMLAH_PERUBAHAN_BARANG_DAN_ASET_SETELAH_MENERIMA_PEMBIAYAAN_LAINNYA_DESKRIPSI')==false || data.IDK_PERUBAHAN_HIDUP_JUMLAH_PERUBAHAN_BARANG_DAN_ASET_SETELAH_MENERIMA_PEMBIAYAAN_LAINNYA_DESKRIPSI=='' || data.IDK_PERUBAHAN_HIDUP_JUMLAH_PERUBAHAN_BARANG_DAN_ASET_SETELAH_MENERIMA_PEMBIAYAAN_LAINNYA_DESKRIPSI==null || data.IDK_PERUBAHAN_HIDUP_JUMLAH_PERUBAHAN_BARANG_DAN_ASET_SETELAH_MENERIMA_PEMBIAYAAN_LAINNYA_DESKRIPSI==undefined || data.IDK_PERUBAHAN_HIDUP_JUMLAH_PERUBAHAN_BARANG_DAN_ASET_SETELAH_MENERIMA_PEMBIAYAAN_LAINNYA_DESKRIPSI=='undefined')){
            $state.go('createsurvey.error');
            $scope.fdSV.ERROR = 'Indikator Perubahan Hidup -> 9. Apa dan berapa jumlah perubahan barang dan aset yang dimiliki nasabah setelah menerima pembiayaan Mekaar ? -> Jika lainnya, sebutkan'+vetd;
        }
        
        //10
        
        else if (data.hasOwnProperty('IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SEBELUM_MENERIMA_PEMBIAYAAN_LANTAI')==false || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SEBELUM_MENERIMA_PEMBIAYAAN_LANTAI=='' || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SEBELUM_MENERIMA_PEMBIAYAAN_LANTAI==null || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SEBELUM_MENERIMA_PEMBIAYAAN_LANTAI==undefined || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SEBELUM_MENERIMA_PEMBIAYAAN_LANTAI=='undefined'){
            $state.go('createsurvey.error');
            $scope.fdSV.ERROR = 'Indikator Perubahan Hidup -> 10. Bagaimana kondisi rumah nasabah <b>sebelum</b> menerima pembiayaan Mekaar? -> Lantai'+vetd;
        }
        else if (data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SEBELUM_MENERIMA_PEMBIAYAAN_LANTAI=='LAINNYA' && (data.hasOwnProperty('IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SEBELUM_MENERIMA_PEMBIAYAAN_LANTAI_LAINNYA_DESKRIPSI')==false || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SEBELUM_MENERIMA_PEMBIAYAAN_LANTAI_LAINNYA_DESKRIPSI=='' || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SEBELUM_MENERIMA_PEMBIAYAAN_LANTAI_LAINNYA_DESKRIPSI==null || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SEBELUM_MENERIMA_PEMBIAYAAN_LANTAI_LAINNYA_DESKRIPSI==undefined || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SEBELUM_MENERIMA_PEMBIAYAAN_LANTAI_LAINNYA_DESKRIPSI=='undefined')){
            $state.go('createsurvey.error');
            $scope.fdSV.ERROR = 'Indikator Perubahan Hidup -> 10. Bagaimana kondisi rumah nasabah <b>sebelum</b> menerima pembiayaan Mekaar? -> Lantai -> Jika Lainnya, ketik disini'+vetd;
        }
        
        else if (data.hasOwnProperty('IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SEBELUM_MENERIMA_PEMBIAYAAN_DINDING')==false || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SEBELUM_MENERIMA_PEMBIAYAAN_DINDING=='' || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SEBELUM_MENERIMA_PEMBIAYAAN_DINDING==null || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SEBELUM_MENERIMA_PEMBIAYAAN_DINDING==undefined || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SEBELUM_MENERIMA_PEMBIAYAAN_DINDING=='undefined'){
            $state.go('createsurvey.error');
            $scope.fdSV.ERROR = 'Indikator Perubahan Hidup -> 10. Bagaimana kondisi rumah nasabah <b>sebelum</b> menerima pembiayaan Mekaar? -> Dinding'+vetd;
        }
        else if (data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SEBELUM_MENERIMA_PEMBIAYAAN_DINDING=='LAINNYA' && (data.hasOwnProperty('IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SEBELUM_MENERIMA_PEMBIAYAAN_DINDING_LAINNYA_DESKRIPSI')==false || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SEBELUM_MENERIMA_PEMBIAYAAN_DINDING_LAINNYA_DESKRIPSI=='' || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SEBELUM_MENERIMA_PEMBIAYAAN_DINDING_LAINNYA_DESKRIPSI==null || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SEBELUM_MENERIMA_PEMBIAYAAN_DINDING_LAINNYA_DESKRIPSI==undefined || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SEBELUM_MENERIMA_PEMBIAYAAN_DINDING_LAINNYA_DESKRIPSI=='undefined')){
            $state.go('createsurvey.error');
            $scope.fdSV.ERROR = 'Indikator Perubahan Hidup -> 10. Bagaimana kondisi rumah nasabah <b>sebelum</b> menerima pembiayaan Mekaar? -> Dinding -> Jika Lainnya, ketik disini'+vetd;
        }
        
        else if (data.hasOwnProperty('IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SEBELUM_MENERIMA_PEMBIAYAAN_ATAP')==false || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SEBELUM_MENERIMA_PEMBIAYAAN_ATAP=='' || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SEBELUM_MENERIMA_PEMBIAYAAN_ATAP==null || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SEBELUM_MENERIMA_PEMBIAYAAN_ATAP==undefined || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SEBELUM_MENERIMA_PEMBIAYAAN_ATAP=='undefined'){
            $state.go('createsurvey.error');
            $scope.fdSV.ERROR = 'Indikator Perubahan Hidup -> 10. Bagaimana kondisi rumah nasabah <b>sebelum</b> menerima pembiayaan Mekaar? -> Atap'+vetd;
        }
        else if (data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SEBELUM_MENERIMA_PEMBIAYAAN_ATAP=='LAINNYA' && (data.hasOwnProperty('IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SEBELUM_MENERIMA_PEMBIAYAAN_ATAP_LAINNYA_DESKRIPSI')==false || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SEBELUM_MENERIMA_PEMBIAYAAN_ATAP_LAINNYA_DESKRIPSI=='' || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SEBELUM_MENERIMA_PEMBIAYAAN_ATAP_LAINNYA_DESKRIPSI==null || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SEBELUM_MENERIMA_PEMBIAYAAN_ATAP_LAINNYA_DESKRIPSI==undefined || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SEBELUM_MENERIMA_PEMBIAYAAN_DINDING_LAINNYA_DESKRIPSI=='undefined')){
            $state.go('createsurvey.error');
            $scope.fdSV.ERROR = 'Indikator Perubahan Hidup -> 10. Bagaimana kondisi rumah nasabah <b>sebelum</b> menerima pembiayaan Mekaar? -> Atap -> Jika Lainnya, ketik disini'+vetd;
        }
        
        else if (data.hasOwnProperty('IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SEBELUM_MENERIMA_PEMBIAYAAN_KAMAR_MANDI')==false || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SEBELUM_MENERIMA_PEMBIAYAAN_KAMAR_MANDI=='' || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SEBELUM_MENERIMA_PEMBIAYAAN_KAMAR_MANDI==null || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SEBELUM_MENERIMA_PEMBIAYAAN_KAMAR_MANDI==undefined || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SEBELUM_MENERIMA_PEMBIAYAAN_KAMAR_MANDI=='undefined'){
            $state.go('createsurvey.error');
            $scope.fdSV.ERROR = 'Indikator Perubahan Hidup -> 10. Bagaimana kondisi rumah nasabah <b>sebelum</b> menerima pembiayaan Mekaar? -> Kamar mandi'+vetd;
        }
        else if (data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SEBELUM_MENERIMA_PEMBIAYAAN_KAMAR_MANDI=='LAINNYA' && (data.hasOwnProperty('IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SEBELUM_MENERIMA_PEMBIAYAAN_KAMAR_MANDI_LAINNYA_DESKRIPSI')==false || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SEBELUM_MENERIMA_PEMBIAYAAN_KAMAR_MANDI_LAINNYA_DESKRIPSI=='' || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SEBELUM_MENERIMA_PEMBIAYAAN_KAMAR_MANDI_LAINNYA_DESKRIPSI==null || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SEBELUM_MENERIMA_PEMBIAYAAN_KAMAR_MANDI_LAINNYA_DESKRIPSI==undefined || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SEBELUM_MENERIMA_PEMBIAYAAN_KAMAR_MANDI_LAINNYA_DESKRIPSI=='undefined')){
            $state.go('createsurvey.error');
            $scope.fdSV.ERROR = 'Indikator Perubahan Hidup -> 10. Bagaimana kondisi rumah nasabah <b>sebelum</b> menerima pembiayaan Mekaar? -> Kamar mandi -> Jika Lainnya, ketik disini'+vetd;
        }
        
        else if (data.hasOwnProperty('IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SEBELUM_MENERIMA_PEMBIAYAAN_AKSES_AIR_BERSIH')==false || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SEBELUM_MENERIMA_PEMBIAYAAN_AKSES_AIR_BERSIH=='' || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SEBELUM_MENERIMA_PEMBIAYAAN_AKSES_AIR_BERSIH==null || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SEBELUM_MENERIMA_PEMBIAYAAN_AKSES_AIR_BERSIH==undefined || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SEBELUM_MENERIMA_PEMBIAYAAN_AKSES_AIR_BERSIH=='undefined'){
            $state.go('createsurvey.error');
            $scope.fdSV.ERROR = 'Indikator Perubahan Hidup -> Bagaimana kondisi rumah nasabah <b>sebelum</b> menerima pembiayaan Mekaar? -> Akses air bersih'+vetd;
        }
        else if (data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SEBELUM_MENERIMA_PEMBIAYAAN_AKSES_AIR_BERSIH=='LAINNYA' && (data.hasOwnProperty('IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SEBELUM_MENERIMA_PEMBIAYAAN_AKSES_AIR_BERSIH_LAINNYA_DESKRIPSI')==false || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SEBELUM_MENERIMA_PEMBIAYAAN_AKSES_AIR_BERSIH_LAINNYA_DESKRIPSI=='' || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SEBELUM_MENERIMA_PEMBIAYAAN_AKSES_AIR_BERSIH_LAINNYA_DESKRIPSI==null || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SEBELUM_MENERIMA_PEMBIAYAAN_AKSES_AIR_BERSIH_LAINNYA_DESKRIPSI==undefined || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SEBELUM_MENERIMA_PEMBIAYAAN_AKSES_AIR_BERSIH_LAINNYA_DESKRIPSI=='undefined')){
            $state.go('createsurvey.error');
            $scope.fdSV.ERROR = 'Indikator Perubahan Hidup -> 10. Bagaimana kondisi rumah nasabah <b>sebelum</b> menerima pembiayaan Mekaar? -> Akses air bersih -> Jika Lainnya, ketik disini'+vetd;
        }
        
        else if (data.hasOwnProperty('IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SEBELUM_MENERIMA_PEMBIAYAAN_KEPEMILIKAN')==false || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SEBELUM_MENERIMA_PEMBIAYAAN_KEPEMILIKAN=='' || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SEBELUM_MENERIMA_PEMBIAYAAN_KEPEMILIKAN==null || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SEBELUM_MENERIMA_PEMBIAYAAN_KEPEMILIKAN==undefined || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SEBELUM_MENERIMA_PEMBIAYAAN_KEPEMILIKAN=='undefined'){
            $state.go('createsurvey.error');
            $scope.fdSV.ERROR = 'Indikator Perubahan Hidup -> 10. Bagaimana kondisi rumah nasabah <b>sebelum</b> menerima pembiayaan Mekaar? -> Kepemilikan rumah'+vetd;
        }
        else if (data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SEBELUM_MENERIMA_PEMBIAYAAN_KEPEMILIKAN=='SEWA' && (data.hasOwnProperty('IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SEBELUM_MENERIMA_PEMBIAYAAN_KEPEMILIKAN_SEWA_DESKRIPSI')==false || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SEBELUM_MENERIMA_PEMBIAYAAN_KEPEMILIKAN_SEWA_DESKRIPSI=='' || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SEBELUM_MENERIMA_PEMBIAYAAN_KEPEMILIKAN_SEWA_DESKRIPSI==null || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SEBELUM_MENERIMA_PEMBIAYAAN_KEPEMILIKAN_SEWA_DESKRIPSI==undefined || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SEBELUM_MENERIMA_PEMBIAYAAN_KEPEMILIKAN_SEWA_DESKRIPSI=='undefined')){
            $state.go('createsurvey.error');
            $scope.fdSV.ERROR = 'Indikator Perubahan Hidup -> 10. Bagaimana kondisi rumah nasabah <b>sebelum</b> menerima pembiayaan Mekaar? -> Kepemilikan rumah -> Jika Lainnya, ketik disini'+vetd;
        }
        else if (data.hasOwnProperty('IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SEBELUM_MENERIMA_PEMBIAYAAN_LUAS_BANGUNAN')==false || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SEBELUM_MENERIMA_PEMBIAYAAN_LUAS_BANGUNAN==='' || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SEBELUM_MENERIMA_PEMBIAYAAN_LUAS_BANGUNAN===null || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SEBELUM_MENERIMA_PEMBIAYAAN_LUAS_BANGUNAN===undefined || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SEBELUM_MENERIMA_PEMBIAYAAN_LUAS_BANGUNAN==='undefined'){
            $state.go('createsurvey.error');
            $scope.fdSV.ERROR = 'Indikator Perubahan Hidup -> 10. Bagaimana kondisi rumah nasabah <b>sebelum</b> menerima pembiayaan Mekaar? -> Luas Bagunan'+vetd;
        }
        
        //11
        
        else if (data.hasOwnProperty('IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SETELAH_MENERIMA_PEMBIAYAAN_LANTAI')==false || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SETELAH_MENERIMA_PEMBIAYAAN_LANTAI=='' || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SETELAH_MENERIMA_PEMBIAYAAN_LANTAI==null || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SETELAH_MENERIMA_PEMBIAYAAN_LANTAI==undefined || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SETELAH_MENERIMA_PEMBIAYAAN_LANTAI=='undefined'){
            $state.go('createsurvey.error');
            $scope.fdSV.ERROR = 'Indikator Perubahan Hidup -> 11. Bagaimana kondisi rumah nasabah <b>setelah</b> menerima pembiayaan Mekaar? -> Lantai'+vetd;
        }
        else if (data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SETELAH_MENERIMA_PEMBIAYAAN_LANTAI=='LAINNYA' && (data.hasOwnProperty('IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SETELAH_MENERIMA_PEMBIAYAAN_LANTAI_LAINNYA_DESKRIPSI')==false || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SETELAH_MENERIMA_PEMBIAYAAN_LANTAI_LAINNYA_DESKRIPSI=='' || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SETELAH_MENERIMA_PEMBIAYAAN_LANTAI_LAINNYA_DESKRIPSI==null || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SETELAH_MENERIMA_PEMBIAYAAN_LANTAI_LAINNYA_DESKRIPSI==undefined || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SETELAH_MENERIMA_PEMBIAYAAN_LANTAI_LAINNYA_DESKRIPSI=='undefined')){
            $state.go('createsurvey.error');
            $scope.fdSV.ERROR = 'Indikator Perubahan Hidup -> 11. Bagaimana kondisi rumah nasabah <b>setelah</b> menerima pembiayaan Mekaar? -> Lantai -> Jika Lainnya, ketik disini'+vetd;
        }
        
        else if (data.hasOwnProperty('IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SETELAH_MENERIMA_PEMBIAYAAN_DINDING')==false || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SETELAH_MENERIMA_PEMBIAYAAN_DINDING=='' || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SETELAH_MENERIMA_PEMBIAYAAN_DINDING==null || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SETELAH_MENERIMA_PEMBIAYAAN_DINDING==undefined || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SETELAH_MENERIMA_PEMBIAYAAN_DINDING=='undefined'){
            $state.go('createsurvey.error');
            $scope.fdSV.ERROR = 'Indikator Perubahan Hidup -> 11. Bagaimana kondisi rumah nasabah <b>setelah</b> menerima pembiayaan Mekaar? -> Dinding'+vetd;
        }
        else if (data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SETELAH_MENERIMA_PEMBIAYAAN_DINDING=='LAINNYA' && (data.hasOwnProperty('IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SETELAH_MENERIMA_PEMBIAYAAN_DINDING_LAINNYA_DESKRIPSI')==false || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SETELAH_MENERIMA_PEMBIAYAAN_DINDING_LAINNYA_DESKRIPSI=='' || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SETELAH_MENERIMA_PEMBIAYAAN_DINDING_LAINNYA_DESKRIPSI==null || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SETELAH_MENERIMA_PEMBIAYAAN_DINDING_LAINNYA_DESKRIPSI==undefined || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SETELAH_MENERIMA_PEMBIAYAAN_DINDING_LAINNYA_DESKRIPSI=='undefined')){
            $state.go('createsurvey.error');
            $scope.fdSV.ERROR = 'Indikator Perubahan Hidup -> 11. Bagaimana kondisi rumah nasabah <b>setelah</b> menerima pembiayaan Mekaar? -> Dinding -> Jika Lainnya, ketik disini'+vetd;
        }
        
        else if (data.hasOwnProperty('IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SETELAH_MENERIMA_PEMBIAYAAN_ATAP')==false || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SETELAH_MENERIMA_PEMBIAYAAN_ATAP=='' || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SETELAH_MENERIMA_PEMBIAYAAN_ATAP==null || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SETELAH_MENERIMA_PEMBIAYAAN_ATAP==undefined || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SETELAH_MENERIMA_PEMBIAYAAN_ATAP=='undefined'){
            $state.go('createsurvey.error');
            $scope.fdSV.ERROR = 'Indikator Perubahan Hidup -> 11. Bagaimana kondisi rumah nasabah <b>setelah</b> menerima pembiayaan Mekaar? -> Atap'+vetd;
        }
        else if (data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SETELAH_MENERIMA_PEMBIAYAAN_ATAP=='LAINNYA' && (data.hasOwnProperty('IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SETELAH_MENERIMA_PEMBIAYAAN_ATAP_LAINNYA_DESKRIPSI')==false || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SETELAH_MENERIMA_PEMBIAYAAN_ATAP_LAINNYA_DESKRIPSI=='' || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SETELAH_MENERIMA_PEMBIAYAAN_ATAP_LAINNYA_DESKRIPSI==null || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SETELAH_MENERIMA_PEMBIAYAAN_ATAP_LAINNYA_DESKRIPSI==undefined || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SETELAH_MENERIMA_PEMBIAYAAN_DINDING_LAINNYA_DESKRIPSI=='undefined')){
            $state.go('createsurvey.error');
            $scope.fdSV.ERROR = 'Indikator Perubahan Hidup -> 11. Bagaimana kondisi rumah nasabah <b>setelah</b> menerima pembiayaan Mekaar? -> Atap -> Jika Lainnya, ketik disini'+vetd;
        }
        
        else if (data.hasOwnProperty('IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SETELAH_MENERIMA_PEMBIAYAAN_KAMAR_MANDI')==false || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SETELAH_MENERIMA_PEMBIAYAAN_KAMAR_MANDI=='' || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SETELAH_MENERIMA_PEMBIAYAAN_KAMAR_MANDI==null || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SETELAH_MENERIMA_PEMBIAYAAN_KAMAR_MANDI==undefined || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SETELAH_MENERIMA_PEMBIAYAAN_KAMAR_MANDI=='undefined'){
            $state.go('createsurvey.error');
            $scope.fdSV.ERROR = 'Indikator Perubahan Hidup -> 11. Bagaimana kondisi rumah nasabah <b>setelah</b> menerima pembiayaan Mekaar? -> Kamar mandi'+vetd;
        }
        else if (data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SETELAH_MENERIMA_PEMBIAYAAN_KAMAR_MANDI=='LAINNYA' && (data.hasOwnProperty('IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SETELAH_MENERIMA_PEMBIAYAAN_KAMAR_MANDI_LAINNYA_DESKRIPSI')==false || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SETELAH_MENERIMA_PEMBIAYAAN_KAMAR_MANDI_LAINNYA_DESKRIPSI=='' || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SETELAH_MENERIMA_PEMBIAYAAN_KAMAR_MANDI_LAINNYA_DESKRIPSI==null || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SETELAH_MENERIMA_PEMBIAYAAN_KAMAR_MANDI_LAINNYA_DESKRIPSI==undefined || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SETELAH_MENERIMA_PEMBIAYAAN_KAMAR_MANDI_LAINNYA_DESKRIPSI=='undefined')){
            $state.go('createsurvey.error');
            $scope.fdSV.ERROR = 'Indikator Perubahan Hidup -> 11. Bagaimana kondisi rumah nasabah <b>setelah</b> menerima pembiayaan Mekaar? -> Kamar mandi -> Jika Lainnya, ketik disini'+vetd;
        }
        
        else if (data.hasOwnProperty('IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SETELAH_MENERIMA_PEMBIAYAAN_AKSES_AIR_BERSIH')==false || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SETELAH_MENERIMA_PEMBIAYAAN_AKSES_AIR_BERSIH=='' || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SETELAH_MENERIMA_PEMBIAYAAN_AKSES_AIR_BERSIH==null || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SETELAH_MENERIMA_PEMBIAYAAN_AKSES_AIR_BERSIH==undefined || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SETELAH_MENERIMA_PEMBIAYAAN_AKSES_AIR_BERSIH=='undefined'){
            $state.go('createsurvey.error');
            $scope.fdSV.ERROR = 'Indikator Perubahan Hidup -> 11. Bagaimana kondisi rumah nasabah <b>setelah</b> menerima pembiayaan Mekaar? -> Akses air bersih'+vetd;
        }
        else if (data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SETELAH_MENERIMA_PEMBIAYAAN_AKSES_AIR_BERSIH=='LAINNYA' && (data.hasOwnProperty('IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SETELAH_MENERIMA_PEMBIAYAAN_AKSES_AIR_BERSIH_LAINNYA_DESKRIPSI')==false || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SETELAH_MENERIMA_PEMBIAYAAN_AKSES_AIR_BERSIH_LAINNYA_DESKRIPSI=='' || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SETELAH_MENERIMA_PEMBIAYAAN_AKSES_AIR_BERSIH_LAINNYA_DESKRIPSI==null || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SETELAH_MENERIMA_PEMBIAYAAN_AKSES_AIR_BERSIH_LAINNYA_DESKRIPSI==undefined || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SETELAH_MENERIMA_PEMBIAYAAN_AKSES_AIR_BERSIH_LAINNYA_DESKRIPSI=='undefined')){
            $state.go('createsurvey.error');
            $scope.fdSV.ERROR = 'Indikator Perubahan Hidup -> 11. Bagaimana kondisi rumah nasabah <b>setelah</b> menerima pembiayaan Mekaar? -> Akses air bersih -> Jika Lainnya, ketik disini'+vetd;
        }
        
        else if (data.hasOwnProperty('IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SETELAH_MENERIMA_PEMBIAYAAN_KEPEMILIKAN')==false || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SETELAH_MENERIMA_PEMBIAYAAN_KEPEMILIKAN=='' || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SETELAH_MENERIMA_PEMBIAYAAN_KEPEMILIKAN==null || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SETELAH_MENERIMA_PEMBIAYAAN_KEPEMILIKAN==undefined || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SETELAH_MENERIMA_PEMBIAYAAN_KEPEMILIKAN=='undefined'){
            $state.go('createsurvey.error');
            $scope.fdSV.ERROR = 'Indikator Perubahan Hidup -> 11. Bagaimana kondisi rumah nasabah <b>setelah</b> menerima pembiayaan Mekaar? -> Kepemilikan rumah'+vetd;
        }
        else if (data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SETELAH_MENERIMA_PEMBIAYAAN_KEPEMILIKAN=='SEWA' && (data.hasOwnProperty('IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SETELAH_MENERIMA_PEMBIAYAAN_KEPEMILIKAN_SEWA_DESKRIPSI')==false || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SETELAH_MENERIMA_PEMBIAYAAN_KEPEMILIKAN_SEWA_DESKRIPSI=='' || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SETELAH_MENERIMA_PEMBIAYAAN_KEPEMILIKAN_SEWA_DESKRIPSI==null || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SETELAH_MENERIMA_PEMBIAYAAN_KEPEMILIKAN_SEWA_DESKRIPSI==undefined || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SETELAH_MENERIMA_PEMBIAYAAN_KEPEMILIKAN_SEWA_DESKRIPSI=='undefined')){
            $state.go('createsurvey.error');
            $scope.fdSV.ERROR = 'Indikator Perubahan Hidup -> 11. Bagaimana kondisi rumah nasabah <b>setelah</b> menerima pembiayaan Mekaar? -> Kepemilikan rumah -> Jika Lainnya, ketik disini'+vetd;
        }
        
        else if (data.hasOwnProperty('IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SETELAH_MENERIMA_PEMBIAYAAN_LUAS_BANGUNAN')==false || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SETELAH_MENERIMA_PEMBIAYAAN_LUAS_BANGUNAN==='' || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SETELAH_MENERIMA_PEMBIAYAAN_LUAS_BANGUNAN===null || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SETELAH_MENERIMA_PEMBIAYAAN_LUAS_BANGUNAN===undefined || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SETELAH_MENERIMA_PEMBIAYAAN_LUAS_BANGUNAN==='undefined'){
            $state.go('createsurvey.error');
            $scope.fdSV.ERROR = 'Indikator Perubahan Hidup -> 11. Bagaimana kondisi rumah nasabah <b>setelah</b> menerima pembiayaan Mekaar? -> Luas Bagunan'+vetd;
        }
        else {
            
            $scope.fdSV.ERROR = '';
       
            gF.sL();
            $http({
                method      : "POST",
                url         : apiBase + 'Survey/SV',
                data        : data, 
                headers     : { 
                    'Content-Type' : 'application/x-www-form-urlencoded',
                    'Authorization' : Authorization
                }
            }).then(function success(R) {

    //            $scope.R = R.data.Data;
                if (R.data.Data=='Success'){
                    $state.go('createsurvey.sukses');
                    $scope.fdSV = {};
                } else {
                    $state.go('createsurvey.error');
                }
                console.log(R);

                gF.fL();

            }, function error(R) { console.log(R.statusText); gF.fL(); });
            
        }
    };
    
    $scope.batalSurvey = function(){
        
        var r = confirm("Batal ??? Anda yakin membatalkan survey ini ?");
        if (r == true) {
            $state.go('home');
        } else {}
        
    };
    
    
}]);

App.controller('datasurveyorCtrl',['$localStorage','$location', '$rootScope', '$stateParams', '$state', '$window', '$http', 'apiData', '$scope',
    function($localStorage, $location, $rootScope, $stateParams, $state, $window, $http, apiData , $scope){
    
    console.log($scope.fdSV);
    
}]);

App.controller('datanasabahCtrl',['$localStorage','$location', '$rootScope', '$stateParams', '$state', '$window', '$http', 'apiData', 
    function($localStorage, $location, $rootScope, $stateParams, $state, $window, $http, apiData ){
    
    
    
}]);

App.controller('indikatorkesehatanCtrl',['$localStorage','$location', '$rootScope', '$stateParams', '$state', '$window', '$http', 'apiData', 
    function($localStorage, $location, $rootScope, $stateParams, $state, $window, $http, apiData ){
    
    
    
}]);

App.controller('indikatorperubahanhidupCtrl',['$localStorage','$location', '$rootScope', '$stateParams', '$state', '$window', '$http', 'apiData', 
    function($localStorage, $location, $rootScope, $stateParams, $state, $window, $http, apiData ){
    
    
    
}]);

App.controller('suksesCtrl',['$localStorage','$location', '$rootScope', '$stateParams', '$state', '$window', '$http', 'apiData', 
    function($localStorage, $location, $rootScope, $stateParams, $state, $window, $http, apiData ){
    
    
    
}]);

App.controller('errorCtrl',['$localStorage','$location', '$rootScope', '$stateParams', '$state', '$window', '$http', 'apiData', 
    function($localStorage, $location, $rootScope, $stateParams, $state, $window, $http, apiData ){
    
    
    
}]);

App.controller('updatedatanasabahCtrl',['$localStorage','$location', '$rootScope', '$stateParams', '$state', '$window', '$http', 'apiData', '$scope', 'apiBase', 'gF', 'Authorization',
    function($localStorage, $location, $rootScope, $stateParams, $state, $window, $http, apiData, $scope, apiBase, gF, Authorization ){
    
    $scope.fdUDN = {};
    
    console.log($scope.fdUDN);
    
    $scope.jenisFD = 'UDN';
    
    console.log($scope.jenisFD);
    
    var vetd = ' harus diisi';
    
    $scope.setUDN = function(data){
        
        $scope.fdUDN.NIK_CREATOR = $localStorage.SESSION_LOGIN[0].nik;
        $scope.fdUDN.NAMA_CREATOR = $localStorage.SESSION_LOGIN[0].nama_hris;
        
        console.log($scope.fdUDN);
        
        if (data.hasOwnProperty('NIK_CREATOR')==false || data.NIK_CREATOR=='' || data.NIK_CREATOR==null || data.NIK_CREATOR==undefined || data.NIK_CREATOR=='undefined'){
            $state.go('updatedatanasabah.error');
            $scope.fdUDN.ERROR = 'Terjadi kesalahan saat login. silahkan login ulang dengan cara batalkan survey ini dan logout';
        }
        else if (data.hasOwnProperty('NAMA_CREATOR')==false || data.NAMA_CREATOR=='' || data.NAMA_CREATOR==null || data.NAMA_CREATOR==undefined || data.NAMA_CREATOR=='undefined'){
            $state.go('updatedatanasabah.error');
            $scope.fdUDN.ERROR = 'Terjadi kesalahan saat login. silahkan login ulang dengan cara batalkan survey ini dan logout';
        }
        else if (data.hasOwnProperty('REGION_NAMA')==false || data.REGION_NAMA=='' || data.REGION_NAMA==null || data.REGION_NAMA==undefined || data.REGION_NAMA=='undefined'){
            $state.go('updatedatanasabah.error');
            $scope.fdUDN.ERROR = 'Nama region'+vetd;
        } 
        else if (data.hasOwnProperty('REGION_ID')==false || data.REGION_ID=='' || data.REGION_ID==null || data.REGION_ID==undefined || data.REGION_ID=='undefined'){
            $state.go('updatedatanasabah.error');
            $scope.fdUDN.ERROR = 'Id region'+vetd;
        } 
        else if (data.hasOwnProperty('AREA_NAMA')==false || data.AREA_NAMA=='' || data.AREA_NAMA==null || data.AREA_NAMA==undefined || data.AREA_NAMA=='undefined'){
            $state.go('updatedatanasabah.error');
            $scope.fdUDN.ERROR = 'Nama area'+vetd;
        }
        else if (data.hasOwnProperty('AREA_ID')==false || data.AREA_ID=='' || data.AREA_ID==null || data.AREA_ID==undefined || data.AREA_ID=='undefined'){
            $state.go('updatedatanasabah.error');
            $scope.fdUDN.ERROR = 'Id area'+vetd;
        }
        else if (data.hasOwnProperty('BRANCH_NAMA')==false || data.BRANCH_NAMA=='' || data.BRANCH_NAMA==null || data.BRANCH_NAMA==undefined || data.BRANCH_NAMA=='undefined'){
            $state.go('updatedatanasabah.error');
            $scope.fdUDN.ERROR = 'Nama branch'+vetd;
        }
        else if (data.hasOwnProperty('BRANCH_ID')==false || data.BRANCH_ID=='' || data.BRANCH_ID==null || data.BRANCH_ID==undefined || data.BRANCH_ID=='undefined'){
            $state.go('updatedatanasabah.error');
            $scope.fdUDN.ERROR = 'Id branch'+vetd;
        }
        else if (data.hasOwnProperty('NASABAH_ID')==false || data.NASABAH_ID=='' || data.NASABAH_ID==null || data.NASABAH_ID==undefined || data.NASABAH_ID=='undefined'){
            $state.go('updatedatanasabah.error');
            $scope.fdUDN.ERROR = 'Nasabah'+vetd;
        }
        else if (data.hasOwnProperty('NASABAH_NAMA')==false || data.NASABAH_NAMA=='' || data.NASABAH_NAMA==null || data.NASABAH_NAMA==undefined || data.NASABAH_NAMA=='undefined'){
            $state.go('updatedatanasabah.error');
            $scope.fdUDN.ERROR = 'Nasabah nama'+vetd;
        }
        else if (data.hasOwnProperty('NASABAH_PLAFOND')==false || data.NASABAH_PLAFOND=='' || data.NASABAH_PLAFOND==null || data.NASABAH_PLAFOND==undefined || data.NASABAH_PLAFOND=='undefined'){
            $state.go('updatedatanasabah.error');
            $scope.fdUDN.ERROR = 'Nasabah plafond tidak boleh kosong';
        }
        else if (data.hasOwnProperty('NASABAH_JANGKA_WAKTU')==false || data.NASABAH_JANGKA_WAKTU=='' || data.NASABAH_JANGKA_WAKTU==null || data.NASABAH_JANGKA_WAKTU==undefined || data.NASABAH_JANGKA_WAKTU=='undefined'){
            $state.go('updatedatanasabah.error');
            $scope.fdUDN.ERROR = 'Nasabah jangka waktu tidak boleh kosong';
        }
        else if (data.hasOwnProperty('NASABAH_ALAMAT')==false || data.NASABAH_ALAMAT=='' || data.NASABAH_ALAMAT==null || data.NASABAH_ALAMAT==undefined || data.NASABAH_ALAMAT=='undefined'){
            $state.go('updatedatanasabah.error');
            $scope.fdUDN.ERROR = 'Nasabah alamat tidak boleh kosong';
        }
        else if (data.hasOwnProperty('NASABAH_NAMA_KELOMPOK')==false || data.NASABAH_NAMA_KELOMPOK=='' || data.NASABAH_NAMA_KELOMPOK==null || data.NASABAH_NAMA_KELOMPOK==undefined || data.NASABAH_NAMA_KELOMPOK=='undefined'){
            $state.go('updatedatanasabah.error');
            $scope.fdUDN.ERROR = 'Nasabah nama kelompok tidak boleh kosong';
        }
        else if (data.hasOwnProperty('NASABAH_HARI_PERTEMUAN')==false || data.NASABAH_HARI_PERTEMUAN=='' || data.NASABAH_HARI_PERTEMUAN==null || data.NASABAH_HARI_PERTEMUAN==undefined || data.NASABAH_HARI_PERTEMUAN=='undefined'){
            $state.go('updatedatanasabah.error');
            $scope.fdUDN.ERROR = 'Nasabah hari pertemuan tidak boleh kosong';
        }
        else if (data.hasOwnProperty('NASABAH_NO_REKENING')==false || data.NASABAH_NO_REKENING=='' || data.NASABAH_NO_REKENING==null || data.NASABAH_NO_REKENING==undefined || data.NASABAH_NO_REKENING=='undefined'){
            $state.go('updatedatanasabah.error');
            $scope.fdUDN.ERROR = 'Nasabah nomor rekening tidak boleh kosong';
        }
        else if (data.hasOwnProperty('NASABAH_SIKLUS')==false || data.NASABAH_SIKLUS=='' || data.NASABAH_SIKLUS==null || data.NASABAH_SIKLUS==undefined || data.NASABAH_SIKLUS=='undefined'){
            $state.go('updatedatanasabah.error');
            $scope.fdUDN.ERROR = 'Nasabah siklus tidak boleh kosong';
        }
        else if (data.hasOwnProperty('APAKAH_PUNYA_HP')==false || data.APAKAH_PUNYA_HP=='' || data.APAKAH_PUNYA_HP==null || data.APAKAH_PUNYA_HP==undefined || data.APAKAH_PUNYA_HP=='undefined'){
            $state.go('updatedatanasabah.error');
            $scope.fdUDN.ERROR = 'Apakah nasabah memiliki HP?'+vetd;
        } 
        else if (data.APAKAH_PUNYA_HP=='PUNYA' && (data.hasOwnProperty('TIPE_HP')==false || data.TIPE_HP=='' || data.TIPE_HP==null || data.TIPE_HP==undefined || data.TIPE_HP=='undefined')){
            $state.go('updatedatanasabah.error');
            $scope.fdUDN.ERROR = 'Tipe HP'+vetd;
        }
        else if (data.APAKAH_PUNYA_HP=='PUNYA' && (data.hasOwnProperty('NOMOR_HP')==false || data.NOMOR_HP=='' || data.NOMOR_HP==null || data.NOMOR_HP==undefined || data.NOMOR_HP=='undefined')){
            $state.go('updatedatanasabah.error');
            $scope.fdUDN.ERROR = 'Nomor HP'+vetd;
        }
        else {
            
            $scope.fdUDN.ERROR = '';
            
            gF.sL();
            $http({
                method      : "POST",
                url         : apiBase + 'UpdateDataNasabah/UDN',
                data        : data, 
                headers     : { 
                    'Content-Type' : 'application/x-www-form-urlencoded',
                    'Authorization' : Authorization
                }
            }).then(function success(R) {

    //            $scope.R = R.data.Data;
                if (R.data.Data=='Success'){
                    $state.go('updatedatanasabah.sukses');
                    $scope.fdUDN = {};
                } else {
                    $state.go('updatedatanasabah.error');
                }
                console.log(R);

                gF.fL();

            }, function error(R) { console.log(R.statusText); gF.fL(); });
        }
        
    };
    
    $scope.batalUDN = function(){
        
        var r = confirm("Batal ??? Anda yakin membatalkan ini ?");
        if (r == true) {
            $state.go('home');
        } else {}
        
    };
    
}]);

App.controller('prakondisikantorcreatesurveyCtrl',['$localStorage','$location', '$rootScope', '$stateParams', '$state', '$window', '$http', 'apiData', '$scope', 'gF', 'apiBase', 'Authorization',
    function($localStorage, $location, $rootScope, $stateParams, $state, $window, $http, apiData, $scope, gF, apiBase , Authorization){
        
    $scope.fdPRAKK = {};
    
    $scope.jenisFD = 'PRAKK';
    
    var vetd = ' harus diisi';
    
    $scope.setPRAKK = function(data){
        
        $scope.fdPRAKK.NIK_CREATOR = $localStorage.SESSION_LOGIN[0].nik;
        $scope.fdPRAKK.NAMA_CREATOR = $localStorage.SESSION_LOGIN[0].nama_hris;

        console.log($scope.fdPRAKK);
        
        if (data.hasOwnProperty('NIK_CREATOR')==false || data.NIK_CREATOR=='' || data.NIK_CREATOR==null || data.NIK_CREATOR==undefined || data.NIK_CREATOR=='undefined'){
            $state.go('prakondisikantorcreatesurvey.error');
            $scope.fdPRAKK.ERROR = 'Terjadi kesalahan saat login. silahkan login ulang dengan cara batalkan survey ini dan logout';
        }
        else if (data.hasOwnProperty('NAMA_CREATOR')==false || data.NAMA_CREATOR=='' || data.NAMA_CREATOR==null || data.NAMA_CREATOR==undefined || data.NAMA_CREATOR=='undefined'){
            $state.go('prakondisikantorcreatesurvey.error');
            $scope.fdPRAKK.ERROR = 'Terjadi kesalahan saat login. silahkan login ulang dengan cara batalkan survey ini dan logout';
        }
        else if (data.hasOwnProperty('REGION_NAMA')==false || data.REGION_NAMA=='' || data.REGION_NAMA==null || data.REGION_NAMA==undefined || data.REGION_NAMA=='undefined'){
            $state.go('prakondisikantorcreatesurvey.error');
            $scope.fdPRAKK.ERROR = 'Identitas Responden -> Nama region'+vetd;
        } 
        else if (data.hasOwnProperty('REGION_ID')==false || data.REGION_ID=='' || data.REGION_ID==null || data.REGION_ID==undefined || data.REGION_ID=='undefined'){
            $state.go('prakondisikantorcreatesurvey.error');
            $scope.fdPRAKK.ERROR = 'Identitas Responden -> Id region'+vetd;
        } 
        else if (data.hasOwnProperty('AREA_NAMA')==false || data.AREA_NAMA=='' || data.AREA_NAMA==null || data.AREA_NAMA==undefined || data.AREA_NAMA=='undefined'){
            $state.go('prakondisikantorcreatesurvey.error');
            $scope.fdPRAKK.ERROR = 'Identitas Responden -> Nama area'+vetd;
        }
        else if (data.hasOwnProperty('AREA_ID')==false || data.AREA_ID=='' || data.AREA_ID==null || data.AREA_ID==undefined || data.AREA_ID=='undefined'){
            $state.go('prakondisikantorcreatesurvey.error');
            $scope.fdPRAKK.ERROR = 'Identitas Responden -> Id area'+vetd;
        }
        else if (data.hasOwnProperty('BRANCH_NAMA')==false || data.BRANCH_NAMA=='' || data.BRANCH_NAMA==null || data.BRANCH_NAMA==undefined || data.BRANCH_NAMA=='undefined'){
            $state.go('prakondisikantorcreatesurvey.error');
            $scope.fdPRAKK.ERROR = 'Identitas Responden -> Nama branch'+vetd;
        }
        else if (data.hasOwnProperty('BRANCH_ID')==false || data.BRANCH_ID=='' || data.BRANCH_ID==null || data.BRANCH_ID==undefined || data.BRANCH_ID=='undefined'){
            $state.go('prakondisikantorcreatesurvey.error');
            $scope.fdPRAKK.ERROR = 'Identitas Responden -> Id branch'+vetd;
        }
        else if (data.hasOwnProperty('KAB_KOTA')==false || data.KAB_KOTA=='' || data.KAB_KOTA==null || data.KAB_KOTA==undefined || data.KAB_KOTA=='undefined'){
            $state.go('prakondisikantorcreatesurvey.error');
            $scope.fdPRAKK.ERROR = 'Identitas Responden -> Kab/Kota'+vetd;
            $scope.fdPRAKK.ERROR = 'Identitas Responden -> Id branch'+vetd;
        }
        else if (data.hasOwnProperty('PROVINSI')==false || data.PROVINSI=='' || data.PROVINSI==null || data.PROVINSI==undefined || data.PROVINSI=='undefined'){
            $state.go('prakondisikantorcreatesurvey.error');
            $scope.fdPRAKK.ERROR = 'Identitas Responden -> Provinsi'+vetd;
        }
        else if (data.hasOwnProperty('JABATAN')==false || data.JABATAN=='' || data.JABATAN==null || data.JABATAN==undefined || data.JABATAN=='undefined'){
            $state.go('prakondisikantorcreatesurvey.error');
            $scope.fdPRAKK.ERROR = 'Identitas Responden -> Jabatan'+vetd;
        }
        else if (data.hasOwnProperty('USIA')==false || data.USIA=='' || data.USIA==null || data.USIA==undefined || data.USIA=='undefined'){
            $state.go('prakondisikantorcreatesurvey.error');
            $scope.fdPRAKK.ERROR = 'Identitas Responden -> Usia'+vetd;
        }
        /* Pertanyaan */
        else if (data.hasOwnProperty('PERTANYAAN_1')==false || data.PERTANYAAN_1=='' || data.PERTANYAAN_1==null || data.PERTANYAAN_1==undefined || data.PERTANYAAN_1=='undefined'){
            $state.go('prakondisikantorcreatesurvey.error');
            $scope.fdPRAKK.ERROR = 'Pertanyaan -> 1. Sudah berapa lama anda menjadi karyawan PNM Mekaar?'+vetd;
        }
        else if (data.hasOwnProperty('PERTANYAAN_2')==false || data.PERTANYAAN_2=='' || data.PERTANYAAN_2==null || data.PERTANYAAN_2==undefined || data.PERTANYAAN_2=='undefined'){
            $state.go('prakondisikantorcreatesurvey.error');
            $scope.fdPRAKK.ERROR = 'Pertanyaan -> 2. Apakah pernah menginap di kantor Cabang PNM Mekaar?'+vetd;
        }
        else if (data.hasOwnProperty('PERTANYAAN_3')==false || data.PERTANYAAN_3=='' || data.PERTANYAAN_3==null || data.PERTANYAAN_3==undefined || data.PERTANYAAN_3=='undefined'){
            $state.go('prakondisikantorcreatesurvey.error');
            $scope.fdPRAKK.ERROR = 'Pertanyaan -> 3. Menurut Anda, bagaimana kondisi Ruang Kerja di Kantor Cabang PNM Mekaar saat ini dalam melakukan aktifitas kerja rutin?'+vetd;
        }
        else if (data.hasOwnProperty('PERTANYAAN_4')==false || data.PERTANYAAN_4=='' || data.PERTANYAAN_4==null || data.PERTANYAAN_4==undefined || data.PERTANYAAN_4=='undefined'){
            $state.go('prakondisikantorcreatesurvey.error');
            $scope.fdPRAKK.ERROR = 'Pertanyaan -> 4. Menurut Anda, bagaimana kondisi tempat penyimpanan uang, penyimpanan dokumen dan penyimpanan asset lainnya milik PNM di Kantor Cabang PNM Mekaar saat ini?'+vetd;    
        }
        else if (data.hasOwnProperty('PERTANYAAN_5')==false || data.PERTANYAAN_5=='' || data.PERTANYAAN_5==null || data.PERTANYAAN_5==undefined || data.PERTANYAAN_5=='undefined'){
            $state.go('prakondisikantorcreatesurvey.error');
            $scope.fdPRAKK.ERROR = 'Pertanyaan -> 5. Menurut Anda, bagaimana kondisi peralatan kerja di Kantor Cabang PNM Mekaar saat ini? (Misalnya: Komputer, Internet, Printer, Scanner, dll)'+vetd;    
        }
        else if (data.hasOwnProperty('PERTANYAAN_6')==false || data.PERTANYAAN_6=='' || data.PERTANYAAN_6==null || data.PERTANYAAN_6==undefined || data.PERTANYAAN_6=='undefined'){
            $state.go('prakondisikantorcreatesurvey.error');
            $scope.fdPRAKK.ERROR = 'Pertanyaan -> 6. Menurut Anda, bagaimana kondisi kesiapan Kendaraan Bermotor di Kantor Cabang PNM Mekaar saat ini untuk mendukung pelayanan maksimal kepada nasabah PNM Mekaar?'+vetd;    
        }
        else if (data.hasOwnProperty('PERTANYAAN_7')==false || data.PERTANYAAN_7=='' || data.PERTANYAAN_7==null || data.PERTANYAAN_7==undefined || data.PERTANYAAN_7=='undefined'){
            $state.go('prakondisikantorcreatesurvey.error');
            $scope.fdPRAKK.ERROR = 'Pertanyaan -> 7. Menurut Anda, bagaimana kondisi Fasilitas Kamar Tidur di Kantor Cabang PNM Mekaar saat ini?'+vetd;    
        }
        else if (data.hasOwnProperty('PERTANYAAN_8')==false || data.PERTANYAAN_8=='' || data.PERTANYAAN_8==null || data.PERTANYAAN_8==undefined || data.PERTANYAAN_8=='undefined'){
            $state.go('prakondisikantorcreatesurvey.error');
            $scope.fdPRAKK.ERROR = 'Pertanyaan -> 8. Menurut Anda, bagaimana kondisi kebersian kamar mandi di Kantor Cabang PNM Mekaar saat ini?'+vetd;    
        }
        else if (data.hasOwnProperty('PERTANYAAN_9')==false || data.PERTANYAAN_9=='' || data.PERTANYAAN_9==null || data.PERTANYAAN_9==undefined || data.PERTANYAAN_9=='undefined'){
            $state.go('prakondisikantorcreatesurvey.error');
            $scope.fdPRAKK.ERROR = 'Pertanyaan -> 9. Menurut Anda, bagaimana kondisi ruang dapur di Kantor Cabang PNM Mekaar saat ini untuk melakukan kegiatan kreatifitas membuat makanan diluar aktifitas kerja?'+vetd;    
        }
        else if (data.hasOwnProperty('PERTANYAAN_10')==false || data.PERTANYAAN_10=='' || data.PERTANYAAN_10==null || data.PERTANYAAN_10==undefined || data.PERTANYAAN_10=='undefined'){
            $state.go('prakondisikantorcreatesurvey.error');
            $scope.fdPRAKK.ERROR = 'Pertanyaan -> 10. Menurut Anda, bagaimana kondisi Kantor Cabang PNM Mekaar saat ini apabila digunakan oleh karyawan untuk melakukan kreatifitas? (Misalnya: Latihan Menyayi, Latihan Menari, dll)'+vetd;    
        }
        else if (data.hasOwnProperty('PERTANYAAN_11')==false || data.PERTANYAAN_11=='' || data.PERTANYAAN_11==null || data.PERTANYAAN_11==undefined || data.PERTANYAAN_11=='undefined'){
            $state.go('prakondisikantorcreatesurvey.error');
            $scope.fdPRAKK.ERROR = 'Pertanyaan -> 11. Menurut Anda, bagaimana hubungan antara karyawan Kantor Cabang Mekaar dengan lingkungan/tetangga sekitar pada saat ini?'+vetd;    
        }
        else if (data.hasOwnProperty('PERTANYAAN_12')==false || data.PERTANYAAN_12=='' || data.PERTANYAAN_12==null || data.PERTANYAAN_12==undefined || data.PERTANYAAN_12=='undefined'){
            $state.go('prakondisikantorcreatesurvey.error');
            $scope.fdPRAKK.ERROR = 'Pertanyaan -> 12. Menurut Anda, bagaimana kondisi Kantor Cabang PNM Mekaar saat ini apabila digunakan untuk menerima dan berkumpul dengan keluarga karyawan serta nasabah PNM Mekaar?'+vetd;    
        }
        else if (data.hasOwnProperty('PERTANYAAN_13')==false || data.PERTANYAAN_13=='' || data.PERTANYAAN_13==null || data.PERTANYAAN_13==undefined || data.PERTANYAAN_13=='undefined'){
            $state.go('prakondisikantorcreatesurvey.error');
            $scope.fdPRAKK.ERROR = 'Pertanyaan -> 13. Menurut Anda, bagaimana kepedulian antar karyawan Kantor Cabang PNM Mekaar dalam hal bergotong royong agar selalu terawat serta terjaga kebersihannya?'+vetd;    
        }
        else if (data.hasOwnProperty('PERTANYAAN_14')==false || data.PERTANYAAN_14=='' || data.PERTANYAAN_14==null || data.PERTANYAAN_14==undefined || data.PERTANYAAN_14=='undefined'){
            $state.go('prakondisikantorcreatesurvey.error');
            $scope.fdPRAKK.ERROR = 'Pertanyaan -> 14. Menurut Anda, bagaimana kondisi di Kantor Cabang PNM Mekaar dalam hal keamanan area kamar tidur untuk menyimpan barang-barang pribadi milik karyawan?'+vetd;    
        }
        else if (data.hasOwnProperty('PERTANYAAN_15')==false || data.PERTANYAAN_15=='' || data.PERTANYAAN_15==null || data.PERTANYAAN_15==undefined || data.PERTANYAAN_15=='undefined'){
            $state.go('prakondisikantorcreatesurvey.error');
            $scope.fdPRAKK.ERROR = 'Pertanyaan -> 15. Menurut Anda, bagaimana kepatuhan dan ketepatan waktu Kantor Cabang PNM Mekaar saat ini dalam hal memenuhi kewajibannya? (Misalnya: Membayar PBB, Listrik, Telepon, Keamanan, Kebersihan dan lainnya)'+vetd;    
        }
        else if (data.hasOwnProperty('PERTANYAAN_16')==false || data.PERTANYAAN_16=='' || data.PERTANYAAN_16==null || data.PERTANYAAN_16==undefined || data.PERTANYAAN_16=='undefined'){
            $state.go('prakondisikantorcreatesurvey.error');
            $scope.fdPRAKK.ERROR = 'Pertanyaan -> 16. Menurut Anda, bagaimana kondisi Kantor Cabang PNM Mekaar saat ini apabila digunakan untuk kegiatan acara sosial lingkungan? (Misalnya: Khitanan Masal, PEngajian bersama dengan nasabah PNM Mekaar dan lainnya)'+vetd;    
        }
        else if (data.hasOwnProperty('PERTANYAAN_17')==false || data.PERTANYAAN_17=='' || data.PERTANYAAN_17==null || data.PERTANYAAN_17==undefined || data.PERTANYAAN_17=='undefined'){
            $state.go('prakondisikantorcreatesurvey.error');
            $scope.fdPRAKK.ERROR = 'Pertanyaan -> 17. Menurut Anda, bagaimana kondisi Kantor Cabang PNM Mekaar untuk menerima tetangga dengan ramah yang berkunjung dan membantu apabila dibutuhkan?'+vetd;    
        }
        else if (data.hasOwnProperty('PERTANYAAN_18')==false || data.PERTANYAAN_18=='' || data.PERTANYAAN_18==null || data.PERTANYAAN_18==undefined || data.PERTANYAAN_18=='undefined'){
            $state.go('prakondisikantorcreatesurvey.error');
            $scope.fdPRAKK.ERROR = 'Pertanyaan -> 18. Menurut Anda, bagaimana kondisi Kantor Cabang PNM Mekaar saat ini dalam hal kerapian dan kebersihan halaman sehingga nyaman untuk dilihat?'+vetd;    
        }
        else if (data.hasOwnProperty('PERTANYAAN_19')==false || data.PERTANYAAN_19=='' || data.PERTANYAAN_19==null || data.PERTANYAAN_19==undefined || data.PERTANYAAN_19=='undefined'){
            $state.go('prakondisikantorcreatesurvey.error');
            $scope.fdPRAKK.ERROR = 'Pertanyaan -> 19. Menurut Anda, bagaimana kondisi Kantor Cabang PNM Mekaar apabila sewaktu-waktu digunakan untuk klinik bisnis atau konsultasi bisnis nasabah?'+vetd;    
        }
        else if (data.hasOwnProperty('PERTANYAAN_20')==false || data.PERTANYAAN_20=='' || data.PERTANYAAN_20==null || data.PERTANYAAN_20==undefined || data.PERTANYAAN_20=='undefined'){
            $state.go('prakondisikantorcreatesurvey.error');
            $scope.fdPRAKK.ERROR = 'Pertanyaan -> 20. Menurut Anda, apa yang paling penting untuk diperbaiki di Kantor Cabang PNM Mekaar saat ini?'+vetd;    
        }
        else if (data.hasOwnProperty('PERTANYAAN_21')==false || data.PERTANYAAN_21=='' || data.PERTANYAAN_21==null || data.PERTANYAAN_21==undefined || data.PERTANYAAN_21=='undefined'){
            $state.go('prakondisikantorcreatesurvey.error');
            $scope.fdPRAKK.ERROR = 'Pertanyaan -> 21. Apa keinginan anda untuk Kantor Cabang PNM Mekaar kedepannya? Jelaskan..'+vetd;    
        
        } else {
        
            $scope.fdPRAKK.ERROR = '';

            gF.sL();
            $http({
                method      : "POST",
                url         : apiBase + 'Survey/PRAKK',
                data        : data, 
                headers     : { 
                    'Content-Type' : 'application/x-www-form-urlencoded',
                    'Authorization' : Authorization
                }
            }).then(function success(R) {

    //            $scope.R = R.data.Data;
                if (R.data.Data=='Success'){
                    $state.go('prakondisikantorcreatesurvey.sukses');
                    $scope.fdPRAKK = {};
                } else {
                    $state.go('prakondisikantorcreatesurvey.error');
                }
                console.log(R);

                gF.fL();

            }, function error(R) { console.log(R.statusText); gF.fL(); });
        }
        
    };
    
    $scope.batalPRAKK = function(){
        
        var r = confirm("Batal ??? Anda yakin membatalkan survey ini ?");
        if (r == true) {
            $state.go('home');
        } else {}
        
    };
        
}]);

App.controller('prakondisikantoridentitasrespondenCtrl',['$localStorage','$location', '$rootScope', '$stateParams', '$state', '$window', '$http', 'apiData', '$scope', 'gF', 'apiBase', 'Authorization',
    function($localStorage, $location, $rootScope, $stateParams, $state, $window, $http, apiData, $scope, gF, apiBase , Authorization){
        
        
        
}]);

App.controller('prakondisikantorpertanyaanCtrl',['$localStorage','$location', '$rootScope', '$stateParams', '$state', '$window', '$http', 'apiData', '$scope', 'gF', 'apiBase', 'Authorization',
    function($localStorage, $location, $rootScope, $stateParams, $state, $window, $http, apiData, $scope, gF, apiBase , Authorization){
        
        
        
}]);

App.controller('dashboardCtrl',function($rootScope,$scope,$http,apiBase,Authorization,apiData,gF){
    
    $rootScope.dashboard = [];
    $rootScope.dashboard.region = {
        id : '',
        name : 'All'
    };
    $rootScope.dashboard.area = {
        id : '',
        name : 'All'
    };
    $rootScope.dashboard.branch = {
        id : '',
        name : 'All'
    };
    
    $rootScope.dashboard.startDate = moment();
//    $rootScope.dashboard.endDate = moment().add(1, 'days').add(1, 'hours');
    $rootScope.dashboard.endDate = moment();

    $scope.presets = [
        {
            name    : 'This Day',
            start   : moment().startOf('day'),
            end     : moment().endOf('day'),
        },
        {
            name    : 'This Week',
            start   : moment().startOf('week').startOf('day'),
            end     : moment().endOf('week').endOf('day'),
        }, {
            name    : 'This Month',
            start   : moment().startOf('month').startOf('day'),
            end     : moment().endOf('month').endOf('day'),
        }, {
            name    : 'This Year',
            start   : moment().startOf('year').startOf('day'),
            end     : moment().endOf('year').endOf('day'),
        }
    ];

    $scope.changed = function () {
        console.log('changed start or end datetime objects');
    };
    
    $scope.changedStart = function () {
      console.log('changed start datetime object');
    };
    
    $scope.changedEnd = function () {
      console.log('changed end datetime object');
    };
    
    $scope.closed = function (R) {
      console.log('edit popover closed');
    };
    
    $scope.getAmounts = function(d){
        
        if (apiData.checkauth() == true) {
            
            gF.sL();
            
            $http({
                method      : "GET",
                url         : apiBase + 'MonitoringHeader?startdate='+d['startdate']+'&enddate='+d['enddate']+'&region='+d['region']+'&area='+d['area']+'&branch='+d['branch'],
                dataType    : 'json',
                headers     : { 
                    'Content-Type'  : 'application/json',
                    'Authorization' : Authorization
                }
            })
            .then(function success(R) {

                console.log('Amount',R);

                $scope.debit = R.data.Data[0].DebitAmount;
                $scope.credit = R.data.Data[0].CreditAmount;
                
                gF.fL();

            }, function error(R) { console.log(R.statusText); gF.fL(); });
        }
        
    };
    
//    $rootScope.$watchGroup(['dashboard.region.id','dashboard.area.id','dashboard.branch.id','dashboard.startDate','dashboard.endDate'],function(newValue){
//        if (newValue){
            
//        }
//    });

    $scope.searchAmount = function(){
        if (
                typeof $rootScope.dashboard.region.id != 'undefined' &&
                typeof $rootScope.dashboard.area.id != 'undefined' &&
                typeof $rootScope.dashboard.branch.id != 'undefined' &&
                typeof $rootScope.dashboard.startDate != 'undefined' &&
                typeof $rootScope.dashboard.endDate != 'undefined' 
            ) {
                $scope.getAmounts({
                    startdate : $rootScope.dashboard.startDate.format('YYYY-MM-DD'),
                    enddate   : $rootScope.dashboard.endDate.format('YYYY-MM-DD'),
                    region  : $rootScope.dashboard.region.id,
                    area    : $rootScope.dashboard.area.id,
                    branch  : $rootScope.dashboard.branch.id
                });
            }
    };
    
    $scope.searchAmount();
    
});

App.controller('regionsCtrl',function($rootScope,$scope,$http,apiBase,Authorization,$state,gF){
    
    $scope.getRegions = function(type){
        gF.sL();
        $http({
            method      : "GET",
            url         : apiBase + 'Region/?type='+type,
            dataType    : 'json', 
            headers     : { 
                'Content-Type'  : 'application/json',
                'Authorization' : Authorization
            }
        }).then(function success(R) {

            $scope.regions = R.data.Data;
            
            gF.fL();

        }, function error(R) { console.log(R.statusText); gF.fL(); });
    };
//    $scope.getRegions();
    if ($scope.jenisFD==='UDN') {
        $scope.getRegions('UDN');
    } else if ($scope.jenisFD==='PRAKK') {
        $scope.getRegions('PRAKK');
    } else {
        $scope.getRegions('SV');
    }
    
    $scope.setRegion = function(x){
        
        if (x.type==='UDN'){
            $scope.fdUDN.REGION_ID = x.id;
            $scope.fdUDN.REGION_NAMA = x.name;
            $scope.fdUDN.AREA_ID = '';
            $scope.fdUDN.AREA_NAMA = '';
            $scope.fdUDN.BRANCH_ID = '';
            $scope.fdUDN.BRANCH_NAMA = '';
            
            $scope.fdUDN.NASABAH_ID = '';
            $scope.fdUDN.NASABAH_NAMA = '';
            $scope.fdUDN.NASABAH_BRANCH = '';
            $scope.fdUDN.NASABAH_PLAFOND = '';
            $scope.fdUDN.NASABAH_NO_REKENING = '';
            $scope.fdUDN.NASABAH_JANGKA_WAKTU = '';
            $scope.fdUDN.NASABAH_ALAMAT = '';
            $scope.fdUDN.NASABAH_NAMA_KELOMPOK = '';
            $scope.fdUDN.NASABAH_HARI_PERTEMUAN = '';
            $scope.fdUDN.NASABAH_SIKLUS = '';
            
            $state.go('updatedatanasabah');
            
        } else if (x.type==='PRAKK'){
            
            $scope.fdPRAKK.REGION_ID = x.id;
            $scope.fdPRAKK.REGION_NAMA = x.name;
            $scope.fdPRAKK.AREA_ID = '';
            $scope.fdPRAKK.AREA_NAMA = '';
            $scope.fdPRAKK.BRANCH_ID = '';
            $scope.fdPRAKK.BRANCH_NAMA = '';
            
            $state.go('prakondisikantorcreatesurvey.identitasresponden');
            
         } else {    
             
            $scope.fdSV.REGION_ID = x.id;
            $scope.fdSV.REGION_NAMA = x.name;
            $scope.fdSV.AREA_ID = '';
            $scope.fdSV.AREA_NAMA = '';
            $scope.fdSV.BRANCH_ID = '';
            $scope.fdSV.BRANCH_NAMA = '';
            
            $scope.fdSV.NASABAH_ID = '';
            $scope.fdSV.NASABAH_NAMA = '';
            $scope.fdSV.NASABAH_BRANCH = '';
            $scope.fdSV.NASABAH_PLAFOND = '';
            $scope.fdSV.NASABAH_NO_REKENING = '';
            $scope.fdSV.NASABAH_JANGKA_WAKTU = '';
            $scope.fdSV.NASABAH_ALAMAT = '';
            $scope.fdSV.NASABAH_NAMA_KELOMPOK = '';
            $scope.fdSV.NASABAH_HARI_PERTEMUAN = '';
            $scope.fdSV.NASABAH_SIKLUS = '';
            
            $state.go('createsurvey.datanasabah');
        }
    };
    
});

App.controller('areasCtrl',function($rootScope,$scope,$http,apiBase,Authorization,$state,gF){
    
    $scope.getAreas = function(region,type){
        gF.sL();
        $http({
            method      : "GET",
            url         : apiBase + 'Area?region='+region+'&type='+type,
            dataType    : 'json', 
            headers     : { 
                'Content-Type'  : 'application/json',
                'Authorization' : Authorization
            }
        }).then(function success(R) {

            $scope.areas = R.data.Data;
            
            gF.fL();

        }, function error(R) { console.log(R.statusText); gF.fL(); });
    };
    
    if ($scope.jenisFD==='UDN') {
        $scope.getAreas($scope.fdUDN.REGION_ID,'UDN');
    } else if ($scope.jenisFD==='PRAKK') {
        $scope.getAreas($scope.fdPRAKK.REGION_ID,'PRAKK');
    } else {
        $scope.getAreas($scope.fdSV.REGION_ID,'SV');
    }
    
    $scope.setArea = function(x){
        
        if (x.type==='UDN'){
            $scope.fdUDN.AREA_ID = x.id;
            $scope.fdUDN.AREA_NAMA = x.name;
            $scope.fdUDN.BRANCH_ID = '';
            $scope.fdUDN.BRANCH_NAMA = '';
            
            $scope.fdUDN.NASABAH_ID = '';
            $scope.fdUDN.NASABAH_NAMA = '';
            $scope.fdUDN.NASABAH_BRANCH = '';
            $scope.fdUDN.NASABAH_PLAFOND = '';
            $scope.fdUDN.NASABAH_NO_REKENING = '';
            $scope.fdUDN.NASABAH_JANGKA_WAKTU = '';
            $scope.fdUDN.NASABAH_ALAMAT = '';
            $scope.fdUDN.NASABAH_NAMA_KELOMPOK = '';
            $scope.fdUDN.NASABAH_HARI_PERTEMUAN = '';
            $scope.fdUDN.NASABAH_SIKLUS = '';
            
            $state.go('updatedatanasabah');
            
        } else if (x.type==='PRAKK'){
        
            $scope.fdPRAKK.AREA_ID = x.id;
            $scope.fdPRAKK.AREA_NAMA = x.name;
            $scope.fdPRAKK.BRANCH_ID = '';
            $scope.fdPRAKK.BRANCH_NAMA = '';
            
            $state.go('prakondisikantorcreatesurvey.identitasresponden');
            
        } else {
            $scope.fdSV.AREA_ID = x.id;
            $scope.fdSV.AREA_NAMA = x.name;
            $scope.fdSV.BRANCH_ID = '';
            $scope.fdSV.BRANCH_NAMA = '';
            
            $scope.fdSV.NASABAH_ID = '';
            $scope.fdSV.NASABAH_NAMA = '';
            $scope.fdSV.NASABAH_BRANCH = '';
            $scope.fdSV.NASABAH_PLAFOND = '';
            $scope.fdSV.NASABAH_NO_REKENING = '';
            $scope.fdSV.NASABAH_JANGKA_WAKTU = '';
            $scope.fdSV.NASABAH_ALAMAT = '';
            $scope.fdSV.NASABAH_NAMA_KELOMPOK = '';
            $scope.fdSV.NASABAH_HARI_PERTEMUAN = '';
            $scope.fdSV.NASABAH_SIKLUS = '';
            
            $state.go('createsurvey.datanasabah');
        }
    };
    
});

App.controller('branchsCtrl',function($rootScope,$scope,filterFilter,$http,apiBase,Authorization,$state,gF){
    
    $scope.getBranchs = function(region,area,type){
        gF.sL();
        $http({
            method      : "GET",
            url         : apiBase + 'Branch?region='+region+'&area='+area+'&type='+type,
            dataType    : 'json', 
            headers     : { 
                'Content-Type'  : 'application/json',
                'Authorization' : Authorization
            }
        }).then(function success(R) {

            $scope.branchs = R.data.Data;
            
            gF.fL();

        }, function error(R) { console.log(R.statusText); gF.fL(); });
    };
    if ($scope.jenisFD==='UDN') {
        $scope.getBranchs($scope.fdUDN.REGION_ID,$scope.fdUDN.AREA_ID,'UDN');
    } else if ($scope.jenisFD==='PRAKK') {
        $scope.getBranchs($scope.fdPRAKK.REGION_ID,$scope.fdPRAKK.AREA_ID,'PRAKK');
    } else {
        $scope.getBranchs($scope.fdSV.REGION_ID,$scope.fdSV.AREA_ID,'SV');
    }
    
    $scope.setBranch = function(x){
        if (x.type==='UDN'){
            $scope.fdUDN.BRANCH_ID = x.id;
            $scope.fdUDN.BRANCH_NAMA = x.name;
            
            $scope.fdUDN.NASABAH_ID = '';
            $scope.fdUDN.NASABAH_NAMA = '';
            $scope.fdUDN.NASABAH_BRANCH = '';
            $scope.fdUDN.NASABAH_PLAFOND = '';
            $scope.fdUDN.NASABAH_NO_REKENING = '';
            $scope.fdUDN.NASABAH_JANGKA_WAKTU = '';
            $scope.fdUDN.NASABAH_ALAMAT = '';
            $scope.fdUDN.NASABAH_NAMA_KELOMPOK = '';
            $scope.fdUDN.NASABAH_HARI_PERTEMUAN = '';
            $scope.fdUDN.NASABAH_SIKLUS = '';
            
            $state.go('updatedatanasabah');
            
        } else if (x.type==='PRAKK'){
            
            $scope.fdPRAKK.BRANCH_ID = x.id;
            $scope.fdPRAKK.BRANCH_NAMA = x.name;
            
            $state.go('prakondisikantorcreatesurvey.identitasresponden');
            
        } else {
            $scope.fdSV.BRANCH_ID = x.id;
            $scope.fdSV.BRANCH_NAMA = x.name;
            
            $scope.fdSV.NASABAH_ID = '';
            $scope.fdSV.NASABAH_NAMA = '';
            $scope.fdSV.NASABAH_BRANCH = '';
            $scope.fdSV.NASABAH_PLAFOND = '';
            $scope.fdSV.NASABAH_NO_REKENING = '';
            $scope.fdSV.NASABAH_JANGKA_WAKTU = '';
            $scope.fdSV.NASABAH_ALAMAT = '';
            $scope.fdSV.NASABAH_NAMA_KELOMPOK = '';
            $scope.fdSV.NASABAH_HARI_PERTEMUAN = '';
            $scope.fdSV.NASABAH_SIKLUS = '';
            
            $state.go('createsurvey.datanasabah');
        }
    };
     
});

App.controller('nasabahsCtrl',function($rootScope,$scope,filterFilter,$http,apiBase,Authorization,$state,gF){
    
    $rootScope.searchNasabah = '';
    
    $scope.getNasabahs = function(branch,clue){
        gF.sL();
        $http({
            method      : "GET",
            url         : apiBase + 'Debitur?branch='+branch+'&clue='+clue,
            dataType    : 'json', 
            headers     : { 
                'Content-Type'  : 'application/json',
                'Authorization' : Authorization
            }
        }).then(function success(R) {

            $scope.nasabahs = R.data.Data;
            
            gF.fL();

        }, function error(R) { console.log(R.statusText); gF.fL(); });
    };
    
    if ($scope.jenisFD==='UDN') {
        $scope.getNasabahs($scope.fdUDN.BRANCH_ID,$rootScope.searchNasabah);
    } else {
        $scope.getNasabahs($scope.fdSV.BRANCH_ID,$rootScope.searchNasabah);
    }
    
    $rootScope.$watch('searchNasabah', function(newValues, oldValues, scope) {
        if (newValues) {		
            if ($scope.jenisFD==='UDN') {
                $scope.getNasabahs($scope.fdUDN.BRANCH_ID,$rootScope.searchNasabah);
            } else {
                $scope.getNasabahs($scope.fdSV.BRANCH_ID,$rootScope.searchNasabah);
            }
        }
    });
    
    $scope.setNasabah = function(x,type){
        if (type==='UDN'){ 
            $scope.fdUDN.NASABAH_ID = x.NASABAH_ID;
            $scope.fdUDN.NASABAH_NAMA = x.NASABAH_NAMA;
            $scope.fdUDN.NASABAH_BRANCH = x.NASABAH_BRANCH;
            $scope.fdUDN.NASABAH_PLAFOND = x.NASABAH_PLAFOND;
            $scope.fdUDN.NASABAH_NO_REKENING = x.NASABAH_NO_REKENING;
            $scope.fdUDN.NASABAH_JANGKA_WAKTU = x.NASABAH_JANGKA_WAKTU;
            $scope.fdUDN.NASABAH_ALAMAT = x.NASABAH_ALAMAT;
            $scope.fdUDN.NASABAH_NAMA_KELOMPOK = x.NASABAH_NAMA_KELOMPOK;
            $scope.fdUDN.NASABAH_HARI_PERTEMUAN = x.NASABAH_HARI_PERTEMUAN;
            $scope.fdUDN.NASABAH_SIKLUS = x.NASABAH_SIKLUS;
            $state.go('updatedatanasabah');
        } else {
            $scope.fdSV.NASABAH_ID = x.NASABAH_ID;
            $scope.fdSV.NASABAH_NAMA = x.NASABAH_NAMA;
            $scope.fdSV.NASABAH_BRANCH = x.NASABAH_BRANCH;
            $scope.fdSV.NASABAH_PLAFOND = x.NASABAH_PLAFOND;
            $scope.fdSV.NASABAH_NO_REKENING = x.NASABAH_NO_REKENING;
            $scope.fdSV.NASABAH_JANGKA_WAKTU = x.NASABAH_JANGKA_WAKTU;
            $scope.fdSV.NASABAH_ALAMAT = x.NASABAH_ALAMAT;
            $scope.fdSV.NASABAH_NAMA_KELOMPOK = x.NASABAH_NAMA_KELOMPOK;
            $scope.fdSV.NASABAH_HARI_PERTEMUAN = x.NASABAH_HARI_PERTEMUAN;
            $scope.fdSV.NASABAH_SIKLUS = x.NASABAH_SIKLUS;
            $state.go('createsurvey.datanasabah');
        }
    };
     
});

App.controller('loginCtrl',function($scope,$rootScope,apiBase,$http,$state,$localStorage,Authorization,gF){
    
    $scope.auth = function(d){
        
        gF.sL();
        
        toastLoginFailed.hide();
        
        $http({
            method      : "GET",
            url         : apiBase + "Auth?USERNAME=" + d['username'] + '&PASSWORD=' + d['password'],
            dataType    : "json", 
            headers     : { 
                'Content-Type'  : 'application/json',
                'Authorization' : Authorization
            }
        }).then(function success(R) {

            console.log(R);
            
            if (typeof(R.data.Status) != 'undefined' && R.data.Status == "1") {
                $rootScope.$storage = $localStorage.$default({
                    SESSION_LOGIN : R.data.Data
                });
                $state.go('home');
                console.log($rootScope.$storage);
                console.log(R.data.Data);
            } else {
                $rootScope.$storage = $localStorage.$default({
                    SESSION_LOGIN : []
                });
                $rootScope.$storage.SESSION_LOGIN = [];
                delete $rootScope.$storage.SESSION_LOGIN;
                delete $localStorage.SESSION_LOGIN;
                toastLoginFailed.toggle();
            }
            
            gF.fL();

        }, function error(R) { console.log(R.statusText); gF.fL(); });
        
    };
    
});