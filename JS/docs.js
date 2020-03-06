/*var timestamp = Number(new Date());
var storageRef = firebase.storage().ref(timestamp.toString());

var $ = jQuery;
var file_data = $(‘#uploadZip’).prop(‘files’)[0];

storageRef.put(file_data);*/

var storageRef = firebase.storage().ref();
yiiRef = storageRef.child('images/favicon.png');
yiiRef2 = storageRef.child('images/favicon.png');
// You can access metadata about the file
yiiRef.name === yiiRef2.name 
>>> true
yiiRef.fullPath === yiiRef2.fullPath 
>>> false