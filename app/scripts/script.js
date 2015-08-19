/**
 * Create the module. Set it up to use html5 mode.
 */
window.MyOpengifs = angular.module('myOpengifs', ['elasticsearch'],
    ['$locationProvider', function($locationProvider){
        $locationProvider.html5Mode(true);
    }]
);

/**
 * Create a service to power calls to Elasticsearch. We only need to
 * use the _search endpoint.
 */
MyOpengifs.factory('gifService',
    ['$q', 'esFactory', '$location', function($q, elasticsearch, $location){
        var client = elasticsearch({
            host: 'http://search.gif.gallery'
        });

        /**
         * Given a term and an offset, load another round of 10 gifs.
         *
         * Returns a promise.
         */
        var search = function(term, offset){
            console.log(term)
            var deferred = $q.defer();
            var query = {
                "match": {
                    "_all": term
                }
            };

            client.search({
                "index": 'gifs',
                "type": 'gif',
                "body": {
                    "size": 500,
                    "from": (offset || 0) * 10,
                    "query": query
                }
            }).then(function(result) {
                console.log(result);
                var ii = 0, hits_in, hits_out = [];
                hits_in = (result.hits || {}).hits || [];
                for(;ii < hits_in.length; ii++){
                    hits_out.push(hits_in[ii]._source);
                }
                deferred.resolve(hits_out);
            }, deferred.reject);

            return deferred.promise;
        };


        return {
            "search": search
        };
    }]
);

/**
 * Create a controller to interact with the UI.
 */
MyOpengifs.controller('gifCtrl',
    ['gifService', '$scope', '$location', function(gifs, $scope, $location){
        // Provide some nice initial choices
        var initChoices = [
            "a",
        ];
        var idx = Math.floor(Math.random() * initChoices.length);

        // Initialize the scope defaults.
        $scope.gifs = [];        // An array of gif results to display
        $scope.page = 0;            // A counter to keep track of our current page
        $scope.allResults = false;  // Whether or not all results have been found.

        // And, a random search term to start if none was present on page load.
        $scope.searchTerm = $location.search().q || initChoices[idx];

        /**
         * A fresh search. Reset the scope variables to their defaults, set
         * the q query parameter, and load more results.
         */
        $scope.search = function(){
            $scope.page = 0;
            $scope.gifs = [];
            $scope.allResults = false;
            $location.search({'q': $scope.searchTerm});
            $scope.loadMore();
        };

        /**
         * Load the next page of results, incrementing the page counter.
         * When query is finished, push results onto $scope.gifs and decide
         * whether all results have been returned (i.e. were 10 results returned?)
         */
        $scope.loadMore = function(){
            gifs.search($scope.searchTerm, $scope.page++).then(function(results){
                if(results.length !== 10){
                    $scope.allResults = true;
                }

                var ii = 0;
                for(;ii < results.length; ii++){
                    $scope.gifs.push(results[ii]);
                }
            });
        };

        // Load results on first run
        $scope.loadMore();
    }]
);