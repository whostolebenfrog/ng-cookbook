'use strict';

/* Controllers */


function MyCtrl1() {}

function MyCtrl2() {}

function ModalDialog($scope, $routeParams) {

    $scope.detailId = $routeParams.detail;

    $scope.hideModal = function() {
        return $scope.detailId == undefined;
    }

}
