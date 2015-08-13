angular.module("kzIntervalUnlessHover", []).directive("intervalUnlessHover", function($interval){
    return {
        scope: {intervalUnlessHover: "=", interval: "="},
        link: function(scope, elem){
            var promise;
            var start = function(){
                if(promise == null) promise = $interval(function(){
                    scope.intervalUnlessHover && scope.intervalUnlessHover();
                }, scope.interval || 1000)
            };
            var stop = function(){
                if(promise!=null){
                    $interval.cancel(promise);
                    promise = null;
                }
            };
            elem.on("mouseout", start);
            elem.on("mouseover", stop);
            start();
        }
    }
})
