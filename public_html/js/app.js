var App = angular.module('App', ['onsen' , 'ui.router' , 'ngStorage' , 'ngMask' , 'g1b.datetime-range' , 'g1b.scroll-events' , 'angularMoment', 'base64','angularjs-datetime-picker']);

App.config( function($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider, $provide, $base64 ) {
    
    $provide.value("apiBase", "http://10.61.3.37/api_SurveyMekaar/index.php/");
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
                pageTitle: 'Buat'
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


App.run(['$sessionStorage','$location', '$rootScope', '$stateParams', '$state', '$window', '$http', 'apiData',  'apiBase',
    function($localStorage, $location, $rootScope, $stateParams, $state, $window, $http, apiData , apiBase) {
        
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
    
    var vetd = ' harus diisi.';
    
    $scope.setSV = function(data){
        
        /* Validasi Data Surveyor */
        
        if (data.hasOwnProperty('NAMA_KEPALA_CABANG')==false || data.NAMA_KEPALA_CABANG=='' || data.NAMA_KEPALA_CABANG==null || data.NAMA_KEPALA_CABANG==undefined || data.NAMA_KEPALA_CABANG=='undefined'){
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
            $scope.fdSV.ERROR = 'Data surveyor -> Lokasi cabang (menit)'+vetd;
        }
        else if (data.hasOwnProperty('GEOGRAFIS_CABANG')==false || data.GEOGRAFIS_CABANG=='' || data.GEOGRAFIS_CABANG==null || data.GEOGRAFIS_CABANG==undefined || data.GEOGRAFIS_CABANG=='undefined'){
            $state.go('createsurvey.error');
            $scope.fdSV.ERROR = 'Data surveyor -> Geografis cabang (menit)'+vetd;
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
            $scope.fdSV.ERROR = 'Indikator Kesehatan -> 2. Apakah nasabah/anggota keluarga pernah mengalami sakit selama 1 tahun terakhir? -> Biaya berobat'+vetd;
        }
        else if (data.IDK_KESEHATAN_SAKIT_SELAMA_1_TAHUN=='PERNAH' && (data.hasOwnProperty('IDK_KESEHATAN_SAKIT_SELAMA_1_TAHUN_CARA_MENGATASI_KESULITAN')==false || data.IDK_KESEHATAN_SAKIT_SELAMA_1_TAHUN_CARA_MENGATASI_KESULITAN=='' || data.IDK_KESEHATAN_SAKIT_SELAMA_1_TAHUN_CARA_MENGATASI_KESULITAN==null || data.IDK_KESEHATAN_SAKIT_SELAMA_1_TAHUN_CARA_MENGATASI_KESULITAN==undefined || data.IDK_KESEHATAN_SAKIT_SELAMA_1_TAHUN_CARA_MENGATASI_KESULITAN=='undefined')){
            $state.go('createsurvey.error');
            $scope.fdSV.ERROR = 'Indikator Kesehatan -> 2. Apakah nasabah/anggota keluarga pernah mengalami sakit selama 1 tahun terakhir? -> Cara mengatasi kesulitan'+vetd;
        }
        else if (data.IDK_KESEHATAN_SAKIT_SELAMA_1_TAHUN=='PERNAH' && data.IDK_KESEHATAN_SAKIT_SELAMA_1_TAHUN_CARA_MENGATASI_KESULITAN=='LAINNYA' && (data.hasOwnProperty('IDK_KESEHATAN_SAKIT_SELAMA_1_TAHUN_CARA_MENGATASI_KESULITAN_LAINNYA_DESKRIPSI')==false || data.IDK_KESEHATAN_SAKIT_SELAMA_1_TAHUN_CARA_MENGATASI_KESULITAN_LAINNYA_DESKRIPSI=='' || data.IDK_KESEHATAN_SAKIT_SELAMA_1_TAHUN_CARA_MENGATASI_KESULITAN_LAINNYA_DESKRIPSI==null || data.IDK_KESEHATAN_SAKIT_SELAMA_1_TAHUN_CARA_MENGATASI_KESULITAN_LAINNYA_DESKRIPSI==undefined || data.IDK_KESEHATAN_SAKIT_SELAMA_1_TAHUN_CARA_MENGATASI_KESULITAN_LAINNYA_DESKRIPSI=='undefined')){
            $state.go('createsurvey.error');
            $scope.fdSV.ERROR = 'Indikator Kesehatan -> 2. Apakah nasabah/anggota keluarga pernah mengalami sakit selama 1 tahun terakhir? -> Cara mengatasi kesulitan'+vetd;
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
        else if (data.hasOwnProperty('IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SEBELUM_MENERIMA_PEMBIAYAAN')==false || data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SEBELUM_MENERIMA_PEMBIAYAAN=='' || data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SEBELUM_MENERIMA_PEMBIAYAAN==null || data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SEBELUM_MENERIMA_PEMBIAYAAN==undefined || data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SEBELUM_MENERIMA_PEMBIAYAAN=='undefined'){
            $state.go('createsurvey.error');
            $scope.fdSV.ERROR = 'Indikator Perubahan Hidup -> 7. Dimana nasabah biasanya menabung sebelum menerima pembiayaan Mekaar?'+vetd;
        }
        else if (data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SEBELUM_MENERIMA_PEMBIAYAAN=='LAINNYA' && (data.hasOwnProperty('IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SEBELUM_MENERIMA_PEMBIAYAAN_LAINNYA_DESKRIPSI')==false || data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SEBELUM_MENERIMA_PEMBIAYAAN_LAINNYA_DESKRIPSI=='' || data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SEBELUM_MENERIMA_PEMBIAYAAN_LAINNYA_DESKRIPSI==null || data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SEBELUM_MENERIMA_PEMBIAYAAN_LAINNYA_DESKRIPSI==undefined || data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SEBELUM_MENERIMA_PEMBIAYAAN_LAINNYA_DESKRIPSI=='undefined')){
            $state.go('createsurvey.error');
            $scope.fdSV.ERROR = 'Indikator Perubahan Hidup -> 7. Dimana nasabah biasanya menabung sebelum menerima pembiayaan Mekaar? -> Jika lainnya, sebutkan'+vetd;
        }
        else if (data.hasOwnProperty('IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SEBELUM_MENERIMA_PEMBIAYAAN_NOMINAL_YANG_DISISIHKAN_SETIAP_BULAN')==false || data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SEBELUM_MENERIMA_PEMBIAYAAN_NOMINAL_YANG_DISISIHKAN_SETIAP_BULAN==='' || data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SEBELUM_MENERIMA_PEMBIAYAAN_NOMINAL_YANG_DISISIHKAN_SETIAP_BULAN===null || data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SEBELUM_MENERIMA_PEMBIAYAAN_NOMINAL_YANG_DISISIHKAN_SETIAP_BULAN===undefined || data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SEBELUM_MENERIMA_PEMBIAYAAN_NOMINAL_YANG_DISISIHKAN_SETIAP_BULAN==='undefined'){
            $state.go('createsurvey.error');
            $scope.fdSV.ERROR = 'Indikator Perubahan Hidup -> 7. Dimana nasabah biasanya menabung sebelum menerima pembiayaan Mekaar? -> Nominal yang disisihkan untuk menabung setiap bulan'+vetd;
        }
        
        else if (data.hasOwnProperty('IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SETELAH_MENERIMA_PEMBIAYAAN')==false || data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SETELAH_MENERIMA_PEMBIAYAAN=='' || data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SETELAH_MENERIMA_PEMBIAYAAN==null || data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SETELAH_MENERIMA_PEMBIAYAAN==undefined || data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SETELAH_MENERIMA_PEMBIAYAAN=='undefined'){
            $state.go('createsurvey.error');
            $scope.fdSV.ERROR = 'Indikator Perubahan Hidup -> 8. Dimana nasabah biasanya menabung setelah menerima pembiayaan Mekaar?'+vetd;
        }
        else if (data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SETELAH_MENERIMA_PEMBIAYAAN=='LAINNYA' && (data.hasOwnProperty('IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SETELAH_MENERIMA_PEMBIAYAAN_LAINNYA_DESKRIPSI')==false || data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SETELAH_MENERIMA_PEMBIAYAAN_LAINNYA_DESKRIPSI=='' || data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SETELAH_MENERIMA_PEMBIAYAAN_LAINNYA_DESKRIPSI==null || data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SETELAH_MENERIMA_PEMBIAYAAN_LAINNYA_DESKRIPSI==undefined || data.IDK_PERUBAHAN_HIDUP_DIMANA_MENABUNG_SETELAH_MENERIMA_PEMBIAYAAN_LAINNYA_DESKRIPSI=='undefined')){
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
        else if (data.hasOwnProperty('IDK_PERUBAHAN_HIDUP_JUMLAH_PERUBAHAN_BARANG_DAN_ASET_SETELAH_MENERIMA_PEMBIAYAAN_TABUNGAN')==false || data.IDK_PERUBAHAN_HIDUP_JUMLAH_PERUBAHAN_BARANG_DAN_ASET_SETELAH_MENERIMA_PEMBIAYAAN_TABUNGAN==='' || data.IDK_PERUBAHAN_HIDUP_JUMLAH_PERUBAHAN_BARANG_DAN_ASET_SETELAH_MENERIMA_PEMBIAYAAN_TABUNGAN===null || data.IDK_PERUBAHAN_HIDUP_JUMLAH_PERUBAHAN_BARANG_DAN_ASET_SETELAH_MENERIMA_PEMBIAYAAN_TABUNGAN===undefined || data.IDK_PERUBAHAN_HIDUP_JUMLAH_PERUBAHAN_BARANG_DAN_ASET_SETELAH_MENERIMA_PEMBIAYAAN_TABUNGAN==='undefined'){
            $state.go('createsurvey.error');
            $scope.fdSV.ERROR = 'Indikator Perubahan Hidup -> 9. Apa dan berapa jumlah perubahan barang dan aset yang dimiliki nasabah setelah menerima pembiayaan Mekaar ? -> Tabungan'+vetd;
        }
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
        else if (data.hasOwnProperty('IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SEBELUM_MENERIMA_PEMBIAYAAN_LUAS_BANGUNAN')==false || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SEBELUM_MENERIMA_PEMBIAYAAN_LUAS_BANGUNAN=='' || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SEBELUM_MENERIMA_PEMBIAYAAN_LUAS_BANGUNAN==null || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SEBELUM_MENERIMA_PEMBIAYAAN_LUAS_BANGUNAN==undefined || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SEBELUM_MENERIMA_PEMBIAYAAN_LUAS_BANGUNAN=='undefined'){
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
        
        else if (data.hasOwnProperty('IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SETELAH_MENERIMA_PEMBIAYAAN_LUAS_BANGUNAN')==false || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SETELAH_MENERIMA_PEMBIAYAAN_LUAS_BANGUNAN=='' || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SETELAH_MENERIMA_PEMBIAYAAN_LUAS_BANGUNAN==null || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SETELAH_MENERIMA_PEMBIAYAAN_LUAS_BANGUNAN==undefined || data.IDK_PERUBAHAN_HIDUP_KONDISI_RUMAH_SETELAH_MENERIMA_PEMBIAYAAN_LUAS_BANGUNAN=='undefined'){
            $state.go('createsurvey.error');
            $scope.fdSV.ERROR = 'Indikator Perubahan Hidup -> 11. Bagaimana kondisi rumah nasabah <b>setelah</b> menerima pembiayaan Mekaar? -> Luas Bagunan'+vetd;
        }
        else {
            
            $scope.fdSV.NIK_CREATOR = $localStorage.SESSION_LOGIN[0].nik;
            $scope.fdSV.NAMA_CREATOR = $localStorage.SESSION_LOGIN[0].nama_hris;
       
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
    
    $scope.getRegions = function(){
        gF.sL();
        $http({
            method      : "GET",
            url         : apiBase + 'Region',
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
    $scope.getRegions();
    
    $scope.setRegion = function(id,name){
        $scope.fdSV.REGION_ID = id;
        $scope.fdSV.REGION_NAMA = name;
        $scope.fdSV.AREA_ID = '';
        $scope.fdSV.AREA_NAMA = '';
        $scope.fdSV.BRANCH_ID = '';
        $scope.fdSV.BRANCH_NAMA = '';
        $state.go('createsurvey.datanasabah');
    };
    
});

App.controller('areasCtrl',function($rootScope,$scope,$http,apiBase,Authorization,$state,gF){
    
    $scope.getAreas = function(region){
        gF.sL();
        $http({
            method      : "GET",
            url         : apiBase + 'Area?region='+region,
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
    $scope.getAreas($scope.fdSV.REGION_ID);
    
    $scope.setArea = function(id,name){
        $scope.fdSV.AREA_ID = id;
        $scope.fdSV.AREA_NAMA = name;
        $scope.fdSV.BRANCH_ID = '';
        $scope.fdSV.BRANCH_NAMA = '';
        $state.go('createsurvey.datanasabah');
    };
    
});

App.controller('branchsCtrl',function($rootScope,$scope,filterFilter,$http,apiBase,Authorization,$state,gF){
    
    $scope.getBranchs = function(region,area){
        gF.sL();
        $http({
            method      : "GET",
            url         : apiBase + 'Branch?region='+region+'&area='+area,
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
    $scope.getBranchs($scope.fdSV.REGION_ID,$scope.fdSV.AREA_ID);
    
    $scope.setBranch = function(id,name){
        $scope.fdSV.BRANCH_ID = id;
        $scope.fdSV.BRANCH_NAMA = name;
        $state.go('createsurvey.datanasabah');
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
    $scope.getNasabahs($scope.fdSV.BRANCH_ID,$rootScope.searchNasabah);
    
    $rootScope.$watch('searchNasabah', function(newValues, oldValues, scope) {
        if (newValues) {		
            $scope.getNasabahs($scope.fdSV.BRANCH_ID,$rootScope.searchNasabah);
        }
    });
    
    $scope.setNasabah = function(x){
        $scope.fdSV.NASABAH_ID = x.NASABAH_ID;
        $scope.fdSV.NASABAH_NAMA = x.NASABAH_NAMA;
        $scope.fdSV.NASABAH_BRANCH = x.NASABAH_BRANCH;
        $scope.fdSV.NASABAH_PLAFOND = x.NASABAH_PLAFOND;
        $scope.fdSV.NASABAH_NO_REKENING = x.NASABAH_NO_REKENING;
        $scope.fdSV.NASABAH_JANGKA_WAKTU = x.NASABAH_JANGKA_WAKTU;
        $scope.fdSV.NASABAH_ALAMAT = x.NASABAH_ALAMAT;
        $scope.fdSV.NASABAH_NAMA_KELOMPOK = x.NASABAH_NAMA_KELOMPOK;
        $scope.fdSV.NASABAH_HARI_PERTEMUAN = x.NASABAH_HARI_PERTEMUAN;
        $state.go('createsurvey.datanasabah');
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
                toastLoginFailed.toggle();
            }
            
            gF.fL();

        }, function error(R) { console.log(R.statusText); gF.fL(); });
        
    };
    
});