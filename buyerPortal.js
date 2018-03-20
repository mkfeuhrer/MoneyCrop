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


function showAllOrders(){
	data ="";
	for (i = 0; i < contractInstance.buyerOrderCount.call().c[0] ; i++ ) {
		str = contractInstance.buyerOrderInfo.call(i)+'';
		console.log(str);
		var arr = str.split(',');
		id = parseInt(arr[2]);

		if(id == toAccount){
			cropID = parseInt(arr[1]);
			var st = contractInstance.cropInfo.call(cropID)+'';
			var arr1 =st.split(',');
			ownerName=contractInstance.getUserName.call(arr1[2])+'';
			///////////////STATUS CODES YETTO BE USED................
			data += "<tr> <td> " + arr[0] + "</td><td> "+ arr[1] + "</td><td> " + ownerName + "</td><td> " + arr[6] + "</td></tr>";	
		}		
	}
	$("#buyer_orders").html(data);
}

function showAllCrops(){
	data ="";
	for (i = 0; i < contractInstance.cropCount.call().c[0] ; i++ ) {
		str = contractInstance.cropInfo.call(i)+'';
		console.log(str);
		var arr = str.split(',');
		id = parseInt(arr[2]);
		left = parseInt(arr[3]) - parseInt(arr[5]);
		data += "<tr> <td> " + arr[0] + "</td><td> "+ arr[1] + "</td><td> " + arr[4] + "</td><td> " + left + "</td></tr>";
	}
	$("#crop_show").html(data);
}

function placeCropOrder(){
	//////////CropId CropQuantitywill be given.
	//cropId = 
	//quant = 
	//e.preventDefault();
	var cropId = $('#cropId').val();
	var quant = $('#quan').val();
	contractInstance.addBuyerOrder(cropId, toAccount, quant , { from: web3.eth.accounts[toAccount],gas: 3000000});
}

function deliverBuyerOrder(){
	orderType = 0;
	newState = 1;
	///////////////////////////////////OrderId will be obtained
	contractInstance.changePicked(orderType, orderId, newState, { from: web3.eth.accounts[toAccount],gas: 3000000});
}
showAllOrders();
showAllCrops();