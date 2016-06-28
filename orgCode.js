/**
* 生成组织机构代码
*/
function generatorOrgCode(){
	var max = 99999999;
    var min = 10000000;
	var num = parseInt(((Math.random()*(max-min))+min));
	var ws = [ 3, 7, 9, 10, 5, 8, 4, 2 ];
	var sum = 0;
	for (var i = 0; i < 8; i++) {
			sum += (num+"").charAt(i)* ws[i];
	}
	var C9 = 11 - (sum % 11);
	if (C9 == 11) {
		C9 = '0';
	} else if (C9 == 10) {
		C9 = 'X';
	} else {
		C9 = C9 + '';
	}
	$("#orgCode").val(num+"-"+C9);
}





/**
 * 验证组织机构合法性方法
 */
function orgCodeValidate(value) {
	toastr.options.positionClass = 'toast-center-center';
    toastr.options.timeOut = 1000;
	if (value.trim() != "") {
		var values = value.split("-");
		var ws = [ 3, 7, 9, 10, 5, 8, 4, 2 ];
		var str = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
		var reg = /^([0-9A-Z]){8}$/;
		if (!reg.test(values[0])) {
			toastr.warning('错误的组织机构代码!'); 
			return false;
		}
		var sum = 0;
		for (var i = 0; i < 8; i++) {
			sum += str.indexOf(values[0].charAt(i)) * ws[i];
		}
		var C9 = 11 - (sum % 11);
		var YC9 = values[1] + '';
		if (C9 == 11) {
			C9 = '0';
		} else if (C9 == 10) {
			C9 = 'X';
		} else {
			C9 = C9 + '';
		}
		if(YC9 == C9){
			toastr.info('正确的组织机构代码!'); 
			return true;
		}else{
			toastr.warning('错误的组织机构代码!'); 
			return false; 
		}
	}else{
		toastr.warning('请生成或者输入组织机构代码!'); 
		return false;   

	}
}