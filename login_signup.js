toAccount = 0 ;
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545/"));
abi = JSON.parse('[{"constant":false,"inputs":[{"name":"ownid","type":"uint256"},{"name":"capacity","type":"uint256"},{"name":"price","type":"uint256"}],"name":"addStore","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"transportOrderCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"userCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"id","type":"uint256"}],"name":"sendPass","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"orderType","type":"uint256"},{"name":"orderId","type":"uint256"},{"name":"newStatus","type":"uint256"}],"name":"changeDelivered","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"storeInfo","outputs":[{"name":"id","type":"uint256"},{"name":"ownId","type":"uint256"},{"name":"capacity","type":"uint256"},{"name":"price","type":"uint256"},{"name":"remain","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"name","type":"string"},{"name":"ownid","type":"uint256"},{"name":"quantity","type":"uint256"},{"name":"price","type":"uint256"}],"name":"addCrop","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"ownid","type":"uint256"},{"name":"capacity","type":"uint256"},{"name":"price","type":"uint256"}],"name":"addTransport","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"orderType","type":"uint256"},{"name":"orderId","type":"uint256"},{"name":"newStatus","type":"uint256"}],"name":"changePicked","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"cropId","type":"uint256"},{"name":"storeId","type":"uint256"},{"name":"quant","type":"uint256"}],"name":"addStoreOrder","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"userInfo","outputs":[{"name":"name","type":"string"},{"name":"contact","type":"string"},{"name":"userid","type":"uint256"},{"name":"usertype","type":"uint256"},{"name":"location","type":"string"},{"name":"email","type":"string"},{"name":"pass","type":"string"},{"name":"balance","type":"uint256"},{"name":"userAddress","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"userIsPresent","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"orderType","type":"uint256"},{"name":"orderId","type":"uint256"},{"name":"newStatus","type":"uint256"}],"name":"changeStatus","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"transportInfo","outputs":[{"name":"id","type":"uint256"},{"name":"ownId","type":"uint256"},{"name":"capacity","type":"uint256"},{"name":"price","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"userIdList","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"transportOrderInfo","outputs":[{"name":"orderId","type":"uint256"},{"name":"orderType","type":"uint256"},{"name":"orderTaken","type":"uint256"},{"name":"transportId","type":"uint256"},{"name":"senderId","type":"uint256"},{"name":"recieverId","type":"uint256"},{"name":"quantity","type":"uint256"},{"name":"statusOrder","type":"uint256"},{"name":"delivered","type":"uint256"},{"name":"picked","type":"uint256"},{"name":"accept","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"id","type":"uint256"}],"name":"getUserName","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"storeCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"name","type":"string"},{"name":"contact","type":"string"},{"name":"userid","type":"uint256"},{"name":"usertype","type":"uint256"},{"name":"location","type":"string"},{"name":"email","type":"string"},{"name":"pass","type":"string"}],"name":"registerMe","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"orderType","type":"uint256"},{"name":"orderId","type":"uint256"},{"name":"newStatus","type":"uint256"}],"name":"changeAccept","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"transportCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"buyerOrderInfo","outputs":[{"name":"orderId","type":"uint256"},{"name":"cropId","type":"uint256"},{"name":"buyerId","type":"uint256"},{"name":"transportId","type":"uint256"},{"name":"transportOrderId","type":"uint256"},{"name":"storeId","type":"uint256"},{"name":"quantity","type":"uint256"},{"name":"statusOrder","type":"uint256"},{"name":"delivered","type":"uint256"},{"name":"picked","type":"uint256"},{"name":"accept","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"orderType","type":"uint256"},{"name":"orderTaken","type":"uint256"},{"name":"transportId","type":"uint256"}],"name":"addTransportOrder","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"email","type":"string"}],"name":"getUserId","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"cropId","type":"uint256"},{"name":"buyerId","type":"uint256"},{"name":"quant","type":"uint256"}],"name":"addBuyerOrder","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"cropCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"storeOrderInfo","outputs":[{"name":"orderId","type":"uint256"},{"name":"cropId","type":"uint256"},{"name":"storeId","type":"uint256"},{"name":"transportId","type":"uint256"},{"name":"transportOrderId","type":"uint256"},{"name":"quantity","type":"uint256"},{"name":"statusOrder","type":"uint256"},{"name":"delivered","type":"uint256"},{"name":"picked","type":"uint256"},{"name":"accept","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"storeOrderCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"buyerOrderCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"cropInfo","outputs":[{"name":"id","type":"uint256"},{"name":"name","type":"string"},{"name":"ownId","type":"uint256"},{"name":"quantity","type":"uint256"},{"name":"price","type":"uint256"},{"name":"amountSold","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]');
registerUserContract = web3.eth.contract(abi);

contractInstance = registerUserContract.at('0xf864d8bf41a61f4cbdbf6e4d0ec38d14114fa6e0');
data = "" ;

noofuser=contractInstance.userCount.call().c[0];
toAccount=noofuser;

function addUser(){
    //fetching values from html
    console.log("Called add user");
	name=$("#username").val();
	contact=$("#usercontact").val();
	usertype=$("#usertype").val();
	ulocation=$("#userlocation").val();
	email=$("#useremail").val();
	pass=$("#userpass").val();
	cpass=$("#usercpass").val();

	userTypeId=parseInt( findUserTypeId(usertype) ); //finding id for user type


	if( name=="" || contact == "" || usertype == "" || ulocation == "" || email == "" || pass == "" || cpass == "" )
	{
		alert("Please fill all the details.");
	}
	else{

		if(pass == cpass){
			contractInstance.registerMe(name,contact,toAccount,userTypeId,ulocation,email,pass,{ from: web3.eth.accounts[toAccount],gas: 3000000});
			noofuser=contractInstance.userCount.call().c[0];
			toAccount=noofuser;
			alert("user successfully registered");
			//displayUsers();
		}
		else
		{
			alert("Passwords not matched");
		}
	}
}
function displayUsers(){
	data = "";
  for (i = 0; i < contractInstance.userCount.call().c[0] ; i++ ) {

  	var det = contractInstance.userInfo.call ( contractInstance.userIdList.call(i) ) + '';
  	console.log(det);
  }
}

function findUserTypeId ( userType ){
	
	if(userType == "Farmer")
		return "0";
	else if(userType == "Storage")
		return "1";
	else if(userType == "Transportation")
		return "2";
	else if(userType == "Buyer")
		return "3";

}
$('.login-form-submit').on("click",function(event){
	event.preventDefault();
	console.log("callse login");
	email=$("#email").val();
	pass=$("#pass").val();

	userId = parseInt( contractInstance.getUserId.call( email ) );

	allDetails = contractInstance.userInfo( userId )+'';

	var arrDetails = allDetails.split(',');

	passwd = arrDetails[6];

	console.log("pass: "+pass+" : "+passwd);

	if(passwd == pass)
	{
			if(arrDetails[3]==0)
		   	{
		   		window.location.href="./Farmer_dash.html?temp="+userId;
				console.log("login successfull");
			}
			else if(arrDetails[3]==1)
		   	{
		   		window.location.href="./Storage_dash.html?temp="+userId;
				console.log("login successfull");
			}
			else if(arrDetails[3]==2)
		   	{
		   		window.location.href="./Transport_dash.html?temp="+userId;
				console.log("login successfull");
			}
			else if(arrDetails[3]==3)
		   	{
		   		window.location.href="./Buyer_dash.html?temp="+userId;
				console.log("login successfull");
			}
	}
	else
	{
		alert("wrong password");
	}
});


displayUsers();