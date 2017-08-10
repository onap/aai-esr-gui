/*

 Copyright 2017, Huawei Technologies Co., Ltd.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.

 */


app.factory("controllerDataService", function($http, DataService, $log){
    var uri = '';
    return {
        getControllerData : function() {
            /*return $http({
                url: 'http://localhost:3000/api/getControllerData',
                method: 'GET',
                headers: {'Content-Type': 'application/json'}
            }).then(function(response){
                //$log.info(response);
                return response.data;
            });*/
            return DataService.get(uri+'/onapapi/aai/esr/v1/sdncontrollers')
                .then(function(response){
                    $log.info("in get data service data is  :"+response);
                    console.log(response);
                    return response;
                });
        },
        addControllerData : function(controllerData) {
            /*return $http({
                url: 'http://localhost:3000/api/addProvinceData',
                method: 'POST',
                data: provinceDetail,
                headers: {'Content-Type': 'application/json '}
            }).then(function(response){
                console.log("Response : ");
                $log.info(response.data);
                return response.data;
            });*/
            return DataService.post(uri+'/onapapi/aai/esr/v1/sdncontrollers', controllerData)
                .then(function(response){
                    console.log("Successfully added.. Data returned in DataService is");
                    console.log(response.data);
                    return response.data;
                });
        },
        deleteControllerData : function(id) {
            /*return $http({
                url: 'http://localhost:3000/api/deleteProvinceData',
                method: 'POST',
                data: {'idList':idList},
                headers: {'Content-Type': 'application/json'}
            }).then(function(response){
                console.log("Successfully Deleted..");
                $log.info(response);
                return response.data;
            });*/
            return DataService.delete(uri+'/onapapi/aai/esr/v1/sdncontrollers/'+id)
                .then(function(response){
                    $log.info("in delete data service data is  :"+response);
                    console.log(response);
                    return response;
                });
        },
        editControllerData : function(controllerData) {
            /*return $http({
                url: 'http://localhost:3000/api/editProvinceData',
                method: 'POST',
                data: provinceDetail,
                headers: {'Content-Type': 'application/json'}
            }).then(function(response){
                console.log("Successfully Edited...");
                $log.info(response);
                return response.data;
            });*/

            return DataService.put(uri+'/onapapi/aai/esr/v1/sdncontrollers', controllerData)
                .then(function(response){
                    console.log("Successfully edited.. Data returned in DataService is");
                    console.log(response.data);
                    return response.data;
                });
        }
    }
});