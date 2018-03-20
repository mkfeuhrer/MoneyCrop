toAccount = 0 ;
web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
abi = JSON.parse('[{"constant":false,"inputs":[{"name":"ownid","type":"uint256"},{"name":"capacity","type":"uint256"},{"name":"price","type":"uint256"}],"name":"addStore","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"transportOrderCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"userCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"id","type":"uint256"}],"name":"sendPass","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"orderType","type":"uint256"},{"name":"orderId","type":"uint256"},{"name":"newStatus","type":"uint256"}],"name":"changeDelivered","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"storeInfo","outputs":[{"name":"id","type":"uint256"},{"name":"ownId","type":"uint256"},{"name":"capacity","type":"uint256"},{"name":"price","type":"uint256"},{"name":"remain","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"name","type":"string"},{"name":"ownid","type":"uint256"},{"name":"quantity","type":"uint256"},{"name":"price","type":"uint256"}],"name":"addCrop","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"ownid","type":"uint256"},{"name":"capacity","type":"uint256"},{"name":"price","type":"uint256"}],"name":"addTransport","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"orderType","type":"uint256"},{"name":"orderId","type":"uint256"},{"name":"newStatus","type":"uint256"}],"name":"changePicked","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"cropId","type":"uint256"},{"name":"storeId","type":"uint256"},{"name":"quant","type":"uint256"}],"name":"addStoreOrder","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"userInfo","outputs":[{"name":"name","type":"string"},{"name":"contact","type":"string"},{"name":"userid","type":"uint256"},{"name":"usertype","type":"uint256"},{"name":"location","type":"string"},{"name":"email","type":"string"},{"name":"pass","type":"string"},{"name":"balance","type":"uint256"},{"name":"userAddress","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"userIsPresent","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"orderType","type":"uint256"},{"name":"orderId","type":"uint256"},{"name":"newStatus","type":"uint256"}],"name":"changeStatus","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"transportInfo","outputs":[{"name":"id","type":"uint256"},{"name":"ownId","type":"uint256"},{"name":"capacity","type":"uint256"},{"name":"price","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"userIdList","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"transportOrderInfo","outputs":[{"name":"orderId","type":"uint256"},{"name":"orderType","type":"uint256"},{"name":"orderTaken","type":"uint256"},{"name":"transportId","type":"uint256"},{"name":"senderId","type":"uint256"},{"name":"recieverId","type":"uint256"},{"name":"quantity","type":"uint256"},{"name":"statusOrder","type":"uint256"},{"name":"delivered","type":"uint256"},{"name":"picked","type":"uint256"},{"name":"accept","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"id","type":"uint256"}],"name":"getUserName","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"storeCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"name","type":"string"},{"name":"contact","type":"string"},{"name":"userid","type":"uint256"},{"name":"usertype","type":"uint256"},{"name":"location","type":"string"},{"name":"email","type":"string"},{"name":"pass","type":"string"}],"name":"registerMe","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"orderType","type":"uint256"},{"name":"orderId","type":"uint256"},{"name":"newStatus","type":"uint256"}],"name":"changeAccept","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"transportCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"buyerOrderInfo","outputs":[{"name":"orderId","type":"uint256"},{"name":"cropId","type":"uint256"},{"name":"buyerId","type":"uint256"},{"name":"transportId","type":"uint256"},{"name":"transportOrderId","type":"uint256"},{"name":"storeId","type":"uint256"},{"name":"quantity","type":"uint256"},{"name":"statusOrder","type":"uint256"},{"name":"delivered","type":"uint256"},{"name":"picked","type":"uint256"},{"name":"accept","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"orderType","type":"uint256"},{"name":"orderTaken","type":"uint256"},{"name":"transportId","type":"uint256"}],"name":"addTransportOrder","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"email","type":"string"}],"name":"getUserId","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"cropId","type":"uint256"},{"name":"buyerId","type":"uint256"},{"name":"quant","type":"uint256"}],"name":"addBuyerOrder","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"cropCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"storeOrderInfo","outputs":[{"name":"orderId","type":"uint256"},{"name":"cropId","type":"uint256"},{"name":"storeId","type":"uint256"},{"name":"transportId","type":"uint256"},{"name":"transportOrderId","type":"uint256"},{"name":"quantity","type":"uint256"},{"name":"statusOrder","type":"uint256"},{"name":"delivered","type":"uint256"},{"name":"picked","type":"uint256"},{"name":"accept","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"storeOrderCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"buyerOrderCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"cropInfo","outputs":[{"name":"id","type":"uint256"},{"name":"name","type":"string"},{"name":"ownId","type":"uint256"},{"name":"quantity","type":"uint256"},{"name":"price","type":"uint256"},{"name":"amountSold","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]');

registerUserContract = web3.eth.contract(abi);

contractInstance = registerUserContract.at('0x6e508468abc8c799193387d6787f7bb2454524c5');
data = "" ;

var url = window.location.href + '';
console.log(url);
var arr = url.split("=");
toAccount=arr[1];
console.log("toAccount: "+toAccount);

var naam = contractInstance.getUserName.call(toAccount)+'';
$('#welcome').text("WELCOME " + naam);
$('#welcome').css("text-transform","uppercase");
$('#submit').on("click",function(e){
	e.preventDefault();
	postCrop();
});
function postCrop(){
	cropName=$("#cropname").val();
	cropQuant=parseInt($("#quantity").val());
	cropPrice=parseInt($("#price").val());
	
	contractInstance.addCrop(cropName, toAccount, cropQuant , cropPrice, { from: web3.eth.accounts[toAccount],gas: 3000000});
	alert("Add Posted");
	showCrops();
}

function showCrops()
{
	data = "";

	for (i = 0; i < contractInstance.cropCount.call().c[0] ; i++ ) {
		str = contractInstance.cropInfo.call(i)+'';
		console.log(str);
		var arr = str.split(',');
		id = parseInt(arr[2]);
		if(id == toAccount)
		{
			left = parseInt(arr[3]) - parseInt(arr[5]);
			data += "<tr> <td> " + arr[0] + "</td><td> "+ arr[1] + "</td><td> " + arr[3] + "</td><td> " + arr[4] + "</td><td> " + left + "</td></tr>";
		}
	}
  	$("#cropTable").html(data);
}

function showAllStores(){
	data ="";
	for (i = 0; i < contractInstance.storeCount.call().c[0] ; i++ ) {
		str = contractInstance.storeInfo.call(i)+'';
		console.log(str);
		var arr = str.split(',');
		id = parseInt(arr[1]);
		name = contractInstance.getUserName.call(id)+'';
		var data1 = "<td>  <input type='text' placeholder='Crop Id' class='form-control' id='get_value1'></td><td> <input type='text' placeholder='Quantity' class='form-control' id='get_value2'></td><td><script>var1=document.getElementById('get_value1').value;var2=document.getElementById('get_value2').value;</script><button class='get_value' onClick='xy("+arr[0]+",var1,var2)'>SUBMIT</button></td></tr>";

		data += "<tr> <td> " + arr[0] + "</td><td> "+ name + "</td><td> " + arr[4] + "</td><td> " + arr[3] + "</td>" + data1;
		// $('#s1').html(arr[0]);
		// $('#s2').html(name);
		// $('#s3').html(arr[4]);
		// $('#s4').html(arr[3]);
	}
	 	$("#storageTable").html(data);
}

function showAllTransports(){
	data ="";
	for (i = 0; i < contractInstance.transportCount.call().c[0] ; i++ ) {
		str = contractInstance.transportInfo.call(i)+'';
		console.log(str);
		var arr = str.split(',');
		id = parseInt(arr[1]);
		name = contractInstance.getUserName.call(id)+'';
		data += "<tr> <td> " + arr[0] + "</td><td> "+ name + "</td><td> " + arr[2] + "</td><td> " + arr[3] + "</td></tr>";
	}
	$("#transportTable").html(data);
}

// store order--------------------------------------------
// $('#get_value').on("click","tbody",function(){
function xy(storeId, cropId, quant)
{	console.log("clicked");
	// var storeId = $().index();
	console.log(storeId);
	// var cropId = $('.get_value1')[storeId].val();
	// var quant = $('.get_value2')[storeId].val();
	console.log(cropId);
	console.log(quant);
	//placeStoreOrder(cropId,storeId,quant);
}

function placeStoreOrder(cropId,storeId,quant){

	//////////CropId CropQuantity StoreId will be given.
		contractInstance.addStoreOrder(cropId, storeId, quant , { from: web3.eth.accounts[toAccount],gas: 3000000});
}
//-------------------------------------------------------------

// transport oredr-------------------------------------------
$('#get_value_transport').on("click",function(){
	var orderType = $('#orderType').val();
	var orderTaken = $('#orderId').val();
	placeTransportOrder(orderTaken,orderType);
});
function placeTransportOrder(){
	/////////Now orderType & orderId will be obtained for transportation
	//e.preventDefault();
	var orderType = $('#orderType').val();
	var orderTaken = $('#orderId').val();
	var tid = $('#transportId').val();
		console.log(orderTaken);
		console.log(orderType);
		console.log(tid);
		contractInstance.addTransportOrder(orderType, orderTaken, tid ,{ from: web3.eth.accounts[toAccount],gas: 3000000});
}
//----------------------------------------------------------------

//buyer-----------------------------------------------------------
function showBuyerOrder() {
	data ="";
	for (i = 0; i < contractInstance.buyerOrderCount.call().c[0] ; i++ ) {
		str = contractInstance.buyerOrderInfo.call(i)+'';
		console.log(str);
		var arr = str.split(',');
		
		cropID = parseInt(arr[1]);
		crop = contractInstance.cropInfo.call(cropID)+'';
		var cp = crop.split(',');
		id = parseInt(cp[2]);

		if(id == toAccount){
			///////////////STATUS CODES YET TO BE USED................
			data += "<tr> <td> " + arr[0] + "</td><td> "+ arr[1] + "</td><td> " + contractInstance.getUserName.call(arr[2]) + "</td><td> " + arr[6] + "</td><td class='status'>Pick Up</td></tr>";	
		}		
	}
	$("#buyerOrderTable").html(data);
	$('.status').css("cursor","pointer");
	$('.status').addClass("pickUp");
}
$('#buyerOrderTable').on("click", '.status', function(){

	if($('.status').text() == "Pick Up"){
		$('.status').text("On the Way");
		$(this).removeClass("pickUp");
		$(this).addClass("onWay");
	}
	else if($(this).text() == "On the Way"){
		$(this).text("Delivered");
		$(this).removeClass("onWay");
		$(this).addClass("delivered");
	}
	else{
		$(this).css("click","disabled");
	}
});

function showStoreOrders(){
	data="";
	for (i = 0; i < contractInstance.storeOrderCount.call().c[0] ; i++ ) {
		str = contractInstance.storeOrderInfo.call(i)+'';
		console.log(str);
		var arr = str.split(',');
		
		cropID = parseInt(arr[1]);
		crop = contractInstance.cropInfo.call(cropID)+'';
		var cp = crop.split(',');
		id = parseInt(cp[2]);

		if(id == toAccount){
			cropID = parseInt(arr[1]);
			var st = contractInstance.cropInfo.call(cropID)+'';
			var arr1 =st.split(',');
			ownerName=contractInstance.getUserName.call(arr1[2])+'';
			
			///////////////STATUS CODES YET TO BE USED................
			data += "<tr> <td> " + arr[0] + "</td><td> "+ arr[1] + "</td><td> " + arr[2] + "</td><td> " + arr[5] + "</td></tr>";	
		}		
	}
	$("#buyerStoreTable").html(data);
}

function acceptBuyerOrder(){
	orderType = 0;
	newState = 1;
	///////////////////////////////////OrderId will be obtained
	contractInstance.changeAccept(orderType, orderId, newState, { from: web3.eth.accounts[toAccount],gas: 3000000});
}

function declineBuyerOrder(){
	orderType = 0;
	newState = 0;
	///////////////////////////////////OrderId will be obtained
	contractInstance.changeAccept(orderType, orderId, newState, { from: web3.eth.accounts[toAccount],gas: 3000000});
}

function pickBuyerOrder(){
	orderType = 1;
	newState = 1;
	///////////////////////////////////OrderId will be obtained
	contractInstance.changePicked(orderType, orderId, newState, { from: web3.eth.accounts[toAccount],gas: 3000000});
}
showCrops();
showAllStores();
showAllTransports();
showStoreOrders();
showBuyerOrder();