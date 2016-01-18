/**
 * Created by hensleym on 1/13/16.
 */
angular.module('myApp.controllers')
    .controller('ChatModalInstanceCtrl', ['$scope', '$modalInstance', 'widget', 'getChatFirebaseStore', function ($scope, $modalInstance, widget, getChatFirebaseStore){
        $scope.widget = widget;
        $scope.messagesRef = getChatFirebaseStore();
        $scope.username = '';
        $scope.message = '';
        $scope.userNameNotPresent = true;

        $scope.close = function(){
            $modalInstance.dismiss('cancel');
        };

        $scope.usernameFieldKeyPress = function(){
            $scope.userNameNotPresent = ($scope.username == '');
        };

        $scope.messageFieldKeyPress = function($e){
            if ($e.keyCode == 13) {
                //FIELD VALUES

                //SAVE DATA TO FIREBASE AND EMPTY FIELD
                $scope.messagesRef.push({name:$scope.username, text:$scope.message});
                $scope.message = '';
            }
        };

        $scope.messagesRef.limitToLast(10).on('child_added', function (snapshot) {
            //GET DATA
            var messageList = $('#example-messages');
            var data = snapshot.val();
            var username = data.name || "anonymous";
            var message = data.text;

            //CREATE ELEMENTS MESSAGE & SANITIZE TEXT
            var messageElement = $("<li>");
            var nameElement = $("<strong class='example-chat-username'></strong>")
            nameElement.text(username);
            messageElement.text(message).prepend(nameElement);

            //ADD MESSAGE
            messageList.append(messageElement)

            //SCROLL TO BOTTOM OF MESSAGE LIST
            messageList[0].scrollTop = messageList[0].scrollHeight;
        });
    }]);