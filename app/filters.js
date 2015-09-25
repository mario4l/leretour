angular.module('journalApp')
.filter('unsafe', function($sce) { 
    return $sce.trustAsHtml;
});