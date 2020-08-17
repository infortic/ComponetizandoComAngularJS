angular.module("inforTIC")
    .directive("bannerTic", function () {
        return {
            templateUrl: "app/directives/banners/bannerPrincipal-html.html",
                        replace: true,
            restrict: "AE",
            scope: {
                bannerOneSpanOne : "@",
                bannerOneTextOne : "@",
                bannerOneSpanTow : "@",
                bannerOneTextTow : "@",                   
                bannerClipOne : "@",
                bannerUperCaseOne : "@",                
                oneVarOne : "@",
                oneVarTow : "@",
                oneVarTree : "@",
            },

            link: function (scope, element, attrs, ctrl) {
                scope.openGrade = function () {
                    abrirPopUp(scope)
                }
            }
        };
    });