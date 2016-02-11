angular.module('appname')
        .directive('ajaxMessage', ajaxMessageData);


function ajaxMessageData($timeout)
{
    var ajaxMessage = {
        link: link,
        restrict: "EA",
        template: "<div ng-if=\"successData\" style=\"border-radius: 2px;padding: 7px;margin-right: 10px;\" class=\"dd animated bounceInDown alert-success\">{{ messageSuccess }}</div> <div ng-if=\"errorData\" style=\"border-radius: 2px;padding: 7px;margin-right: 10px;\" class=\" alert-danger dd animated bounceInUp \">{{ messageError }}</div>",
        scope: {
            isSuccess: '=',
            messageSuccess: '@messageSuccess',
            messageError: '@messageError'
        }
    };

    return ajaxMessage;

    function link($scope)
    {
        $scope.$watch('isSuccess', function (value) {
            if (value === 'success') {
                $scope.successData = true;
                $timeout(function () {
                    $scope.successData = false;
                }, 3000);
                $scope.isSuccess = '';
            } else if(value === 'error') {
                $scope.errorData = true;
                $timeout(function () {
                    $scope.errorData = false;
                }, 3000);
                $scope.isSuccess = '';
            }
        });

    }
}