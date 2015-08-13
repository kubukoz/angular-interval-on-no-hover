angular.module("intervalOnNoHover", []).directive("intervalOnNoHover", function($interval){
    return {
        scope: {intervalOnNoHover: "=", interval: "="},
        link: function(scope, elem){
            var promise;
            var start = function(){
                if(promise == null) promise = $interval(function(){
                    scope.intervalOnNoHover && scope.intervalOnNoHover();
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
