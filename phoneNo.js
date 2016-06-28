/*s生成手机号*/
function generatorPhoneNo(){
   var haoduan = haoDuan(parseInt((Math.random()*34)+1));
    var max = 99999999;
    var min = 10000000;
   var num = parseInt(((Math.random()*(max-min))+min));
	$("#phoneNo").val(haoduan+""+num);

}

/*号段*/
function haoDuan(num){
	var hd =['130','131','132','133','134','135','136','137','138','139','145','147','150','151','152','153','156','157','158','159','170','176','177','178','180','181','182','183','184','185','186','187','188','189'];
	if(null !=num){
		return hd[num-1];
	}
}

/*校验*/
function checkMobile(s) {
	toastr.options.positionClass = 'toast-center-center';
    toastr.options.timeOut = 1000;
	var regu = /^1[3|4|5|7|8][0-9]\d{8}$/;
	var re = new RegExp(regu);
	if (re.test(s)) {
		toastr.info('正确格式手机号码!'); 
		return true;
	} else {
	
		toastr.warning('校验不通过!'); 
		return false;   
	}
}