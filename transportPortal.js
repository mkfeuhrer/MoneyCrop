toAccount = 0 ;
web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
abi = JSON.parse('[{"constant":false,"inputs":[{"name":"ownid","type":"uint256"},{"name":"capacity","type":"uint256"},{"name":"price","type":"uint256"}],"name":"addStore","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"transportOrderCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"userCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"id","type":"uint256"}],"name":"sendPass","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"orderType","type":"uint256"},{"name":"orderId","type":"uint256"},{"name":"newStatus","type":"uint256"}],"name":"changeDelivered","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"storeInfo","outputs":[{"name":"id","type":"uint256"},{"name":"ownId","type":"uint256"},{"name":"capacity","type":"uint256"},{"name":"price","type":"uint256"},{"name":"remain","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"name","type":"string"},{"name":"ownid","type":"uint256"},{"name":"quantity","type":"uint256"},{"name":"price","type":"uint256"}],"name":"addCrop","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"ownid","type":"uint256"},{"name":"capacity","type":"uint256"},{"name":"price","type":"uint256"}],"name":"addTransport","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"orderType","type":"uint256"},{"name":"orderId","type":"uint256"},{"name":"newStatus","type":"uint256"}],"name":"changePicked","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"cropId","type":"uint256"},{"name":"storeId","type":"uint256"},{"name":"quant","type":"uint256"}],"name":"addStoreOrder","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"userInfo","outputs":[{"name":"name","type":"string"},{"name":"contact","type":"string"},{"name":"userid","type":"uint256"},{"name":"usertype","type":"uint256"},{"name":"location","type":"string"},{"name":"email","type":"string"},{"name":"pass","type":"string"},{"name":"balance","type":"uint256"},{"name":"userAddress","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"userIsPresent","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"orderType","type":"uint256"},{"name":"orderId","type":"uint256"},{"name":"newStatus","type":"uint256"}],"name":"changeStatus","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"transportInfo","outputs":[{"name":"id","type":"uint256"},{"name":"ownId","type":"uint256"},{"name":"capacity","type":"uint256"},{"name":"price","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"userIdList","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"transportOrderInfo","outputs":[{"name":"orderId","type":"uint256"},{"name":"orderType","type":"uint256"},{"name":"orderTaken","type":"uint256"},{"name":"transportId","type":"uint256"},{"name":"senderId","type":"uint256"},{"name":"recieverId","type":"uint256"},{"name":"quantity","type":"uint256"},{"name":"statusOrder","type":"uint256"},{"name":"delivered","type":"uint256"},{"name":"picked","type":"uint256"},{"name":"accept","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"id","type":"uint256"}],"name":"getUserName","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"storeCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"name","type":"string"},{"name":"contact","type":"string"},{"name":"userid","type":"uint256"},{"name":"usertype","type":"uint256"},{"name":"location","type":"string"},{"name":"email","type":"string"},{"name":"pass","type":"string"}],"name":"registerMe","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"orderType","type":"uint256"},{"name":"orderId","type":"uint256"},{"name":"newStatus","type":"uint256"}],"name":"changeAccept","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"transportCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"buyerOrderInfo","outputs":[{"name":"orderId","type":"uint256"},{"name":"cropId","type":"uint256"},{"name":"buyerId","type":"uint256"},{"name":"transportId","type":"uint256"},{"name":"transportOrderId","type":"uint256"},{"name":"storeId","type":"uint256"},{"name":"quantity","type":"uint256"},{"name":"statusOrder","type":"uint256"},{"name":"delivered","type":"uint256"},{"name":"picked","type":"uint256"},{"name":"accept","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"orderType","type":"uint256"},{"name":"orderTaken","type":"uint256"},{"name":"transportId","type":"uint256"}],"name":"addTransportOrder","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"email","type":"string"}],"name":"getUserId","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"cropId","type":"uint256"},{"name":"buyerId","type":"uint256"},{"name":"quant","type":"uint256"}],"name":"addBuyerOrder","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"cropCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"storeOrderInfo","outputs":[{"name":"orderId","type":"uint256"},{"name":"cropId","type":"uint256"},{"name":"storeId","type":"uint256"},{"name":"transportId","type":"uint256"},{"name":"transportOrderId","type":"uint256"},{"name":"quantity","type":"uint256"},{"name":"statusOrder","type":"uint256"},{"name":"delivered","type":"uint256"},{"name":"picked","type":"uint256"},{"name":"accept","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"storeOrderCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"buyerOrderCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"cropInfo","outputs":[{"name":"id","type":"uint256"},{"name":"name","type":"string"},{"name":"ownId","type":"uint256"},{"name":"quantity","type":"uint256"},{"name":"price","type":"uint256"},{"name":"amountSold","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]');
registerUserContract = web3.eth.contract(abi);

contractInstance = registerUserContract.at('0x6e508468abc8c799193387d6787f7bb2454524c5');
data = "" ;

var url = window.location.href + '';
console.log(url);
var arr = url.split("=");
asd=arr[1]+'';
var arr1=asd.split("#");
toAccount=arr1[0];
console.log("toAccount: "+toAccount);

function postTransport(){
	//e.preventDefault();
	capacity=parseInt($("#capacity").val());
	price=parseInt($("#price").val());
	contractInstance.addTransport(toAccount,capacity,price, { from: web3.eth.accounts[toAccount],gas: 3000000});
	console.log("Add Posted");
	showAdds();	
}

function showAdds()
{
	data = "";
	console.log( contractInstance.transportCount.call().c[0] );
	for (i = 0; i < contractInstance.transportCount.call().c[0] ; i++ ) {
		str = contractInstance.transportInfo.call(i)+'';
		console.log(str);
		var arr = str.split(',');
		id = parseInt(arr[1]);
		if(id == toAccount){
			data += "<tr> <td> " + arr[0] + "</td><td> "+ arr[2] + "</td><td> " + arr[3] +  "</td><td><button class='btn btn-primary accept-add'>Accept</button></td></tr>";
		}
	}
  	$("#showTransport").html(data);
}
$('#showTransport').css("text-align","center");
$('#showTransport').on("click",".accept-add",function(){
	$(this).text("Accepted");
	$(this).css({
		"backgroundColor":"green"
	});

});

function showAllOrders(){
	data="";
	for (i = 0; i < contractInstance.transportOrderCount.call().c[0] ; i++ ) {
		str = contractInstance.transportOrderInfo.call(i)+'';
		console.log(str);
		var arr = str.split(',');
		tid = parseInt(arr[3]);
		str1=contractInstance.transportInfo.call(tid)+'';
		var arr1=str1.split(',');
		id =parseInt(arr1[1]);

		if(id == toAccount){
			sendID = parseInt(arr[4]);
			senderName = contractInstance.getUserName.call(sendID);
			recieveID = parseInt(arr[5]);
			recieverName = contractInstance.getUserName.call(recieveID);
			
			///////////////STATUS CODES YETTO BE USED................
			data += "<tr> <td> " + arr[0] + "</td><td> "+ senderName + "</td><td> " + recieverName + "</td><td> " + arr[6] + "</td></tr>";	
		}	
	}
	$("#show_orders").html(data);
}

function acceptFarmerOrder(){
	orderType = 2;
	newState = 1;
	///////////////////////////////////OrderId will be obtained
	contractInstance.changeAccept(orderType, orderId, newState, { from: web3.eth.accounts[toAccount],gas: 3000000});
}

function declineFarmerOrder(){
	orderType = 2;
	newState = 0;
	///////////////////////////////////OrderId will be obtained
	contractInstance.changeAccept(orderType, orderId, newState, { from: web3.eth.accounts[toAccount],gas: 3000000});
}

function pickTransportOrder(){
	orderType = 2;
	newState = 1;
	///////////////////////////////////OrderId will be obtained
	contractInstance.changePicked(orderType, orderId, newState, { from: web3.eth.accounts[toAccount],gas: 3000000});
}

function deliverTransportOrder(){
	orderType = 2;
	newState = 1;
	///////////////////////////////////OrderId will be obtained
	contractInstance.changePicked(orderType, orderId, newState, { from: web3.eth.accounts[toAccount],gas: 3000000});
}
showAdds();
showAllOrders();