/*
* 营业执照注册号生成
*/
function generatorBusLicenseNum(){
	var area = areas[parseInt(Math.random()*99)];
	var num = parseInt(Math.random()*9);
	var max =9999999;
	var min =1000000;
	var num2 = parseInt(Math.random()*(max-min)+min);
	var temp = area+num+num2;

	var s = [];
	var p = [];
	var a = [];
	var m = 10;
	p[0] = m;
	for (var i = 0; i < temp.length; i++) {
		a[i] = parseInt(temp.charAt(i), m);
		s[i] = (p[i] % (m + 1)) + a[i];
		if (0 == s[i] % m) {
			p[i + 1] = 10 * 2;
		} else {
			p[i + 1] = (s[i] % m) * 2;
		}
	}
	$("#busLicenseNum").val(temp+s[14]);
}

/**
*验证营业执照是否合法：营业执照长度须为15位数字，前14位为顺序码，
*最后一位为根据GB/T 17710 1999(ISO 7064:1993)的混合系统校验位生成算法
*计算得出。此方法即是根据此算法来验证最后一位校验位是否政正确。如果
*最后一位校验位不正确，则认为此营业执照号不正确(不符合编码规则)。
*以下说明来自于网络:
*我国现行的营业执照上的注册号都是15位的，不存在13位的，从07年开始国
*家进行了全面的注册号升级就全部都是15位的了，如果你看见的是13位的注
*册号那肯定是假的。
*15位数字的含义，代码结构工商注册号由14位数字本体码和1位数字校验码
*组成，其中本体码从左至右依次为：6位首次登记机关码、8位顺序码。　　
*   一、前六位代表的是工商行政管理机关的代码，国家工商行政管理总局用
*           “100000”表示，省级、地市级、区县级登记机关代码分别使用6位行
*             政区划代码表示。设立在经济技术开发区、高新技术开发区和保税区
*             的工商行政管理机关（县级或县级以上）或者各类专业分局应由批准
*             设立的上级机关统一赋予工商行政管理机关代码，并报国家工商行政
*             管理总局信息化管理部门备案。
*   二、顺序码是7-14位，顺序码指工商行政管理机关在其管辖范围内按照先
*             后次序为申请登记注册的市场主体所分配的顺序号。为了便于管理和
*              赋码，8位顺序码中的第1位（自左至右）采用以下分配规则：
*　　          1）内资各类企业使用“0”、“1”、“2”、“3”；
*　　          2）外资企业使用“4”、“5”；
*　　          3）个体工商户使用“6”、“7”、“8”、“9”。　　
*   顺序码是系统根据企业性质情况自动生成的。　　
*三、校验码是最后一位，校验码用于检验本体码的正确性
*/
function busLicenseValidate(busCode) {
	toastr.options.positionClass = 'toast-center-center';
 	toastr.options.timeOut = 1000;
	var ret = false;
	if (busCode.length == 15) {
		var sum = 0;
		var s = [];
		var p = [];
		var a = [];
		var m = 10;
		p[0] = m;
		for (var i = 0; i < busCode.length; i++) {
			a[i] = parseInt(busCode.substr(i), m);
			s[i] = (p[i] % (m + 1)) + a[i];
			if (0 == s[i] % m) {
				p[i + 1] = 10 * 2;
			} else {
				p[i + 1] = (s[i] % m) * 2;
			}
		}
		if (1 == (s[14] % m)) {
			 toastr.info('校验通过，正确营业执照注册号!'); 
			ret = true;
		} else {
			 toastr.warning('此注册号不符合校验规则!'); 
			ret = false;
		}
	} else if ("" == busCode.trim()) {
		 toastr.warning('请输入营业执照注册号!'); 
		ret = false;
	}
	return ret;
}