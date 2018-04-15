// Main Entry of Angular
//Here I put all the data modules of what we are going to use.


var app = angular.module('frontapp', ['ui.router', 'ngAnimate', 'ngSanitize', 'base64', 'ui.bootstrap']);


app.directive('fileModel', ['$parse', function($parse) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;

            element.bind('change', function() {
                scope.$apply(function() {
                    modelSetter(scope, element[0].files[0]);
                });
            });
        }
    };
}]);




app.factory('fileReader', ["$q", "$log", function($q, $log) {
    var onLoad = function(reader, deferred, scope) {
        return function() {
            scope.$apply(function() {
                deferred.resolve(reader.result);
            });
        }
    }

    var onError = function(reader, deferred, scope) {
        return function() {
            scope.$apply(function() {
                deferred.reject(reader.result);
            });
        };
    };

    var getReader = function(deferred, scope) {
        var reader = new FileReader();
        reader.onload = onLoad(reader, deferred, scope);
        reader.onerror = onError(reader, deferred, scope);
        return reader;
    };

    var readAsDataURL = function(file, scope) {
        var deferred = $q.defer();
        var reader = getReader(deferred, scope);
        reader.readAsDataURL(file);
        return deferred.promise;
    };

    return {
        readAsDataUrl: readAsDataURL
    };
}]);




app.factory('Music', ['$http', '$base64', function($http, $base64,) {
    var musicObject = {
        allMusics: [],
        music: [],
        one: {}
    };




    musicObject.getAll = function(orderString) {

        if (orderString) {
            return $http.get('../music?order=' + orderString).then(function(res) {
                angular.copy(res.data, musicObject.musics)
            }, function(res) {
                console.log(res.data.toString());
            });
        } else {
            return $http.get('../piao').then(function(res) {
                angular.copy(res.data, musicObject.musics)
            }, function(res) {
                console.log(res.data.toString());
            });
        }

    };

    return musicObject;
}]);