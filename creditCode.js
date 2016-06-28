//  统一社会信用代码 
function isCreditCode(creditCode){   
	toastr.options.positionClass = 'toast-center-center';
  toastr.options.timeOut = 1000;
	if (creditCode.length != 18) {
	 	toastr.warning('长度不等于18位!');       
		return false;       
	} 
  var reg = /^([0-9A-Z]){18}$/;
  if (!reg.test(creditCode)) {
    toastr.warning('错误的统一社会信用代码!'); 
    return false;
  } 
  var str = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var wi =[1,3,9,27,19,26,16,17,20,29,25,13,8,24,10,30,28];
	var sum = 0;
    for (var i = 0; i < 17; i++) {
      sum += str.indexOf(creditCode.charAt(i)) * wi[i];
  }
  var C18 = 31 - (sum % 31);
  if (C18 == 31) {
      C18 = '0';
  }else{
      C18 = str.substr(C18,1);
  }

		if(creditCode.substr(17,1)== C18){ 
		    toastr.info('校验通过!'); 
			return true;     
		}else{   
			toastr.warning('校验不通过!'); 
			return false;      
		}       
	}

/*统一社会信用代码生成*/
function generatorCreditCode(){
  $("#creditCode").val("");   

  var regOrg = getRegistrationOrg("9");//默认工商
  var orgtype = "1";//默认企业
  var num = parseInt(Math.random()*99);
  var area = areas[num];
  var num = parseInt(((Math.random()*(99999999-10000000))+10000000));
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
  var orgCode = num+""+C9;
  var code = regOrg+orgtype+area+orgCode;
  var str = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var wi =[1,3,9,27,19,26,16,17,20,29,25,13,8,24,10,30,28];
  var sum = 0;
    for (var i = 0; i < 17; i++) {
      sum += str.indexOf(code.charAt(i)) * wi[i];
  }
  var C18 = 31 - (sum % 31);
  if (C18 == 31) {
      C18 = '0';
  }else{
      C18 = str.substr(C18,1);
    }
   $("#creditCode").val(code+C18);   
}


/**  
* 返回一个随机的大写字母
*/  
function getUpperCharacter(){  
	character = String.fromCharCode(Math.floor( Math.random() * 26) + "A".charCodeAt(0)); 
	return character; 
}


/*获得登记机构*/
function getRegistrationOrg(num){
	var result;
	switch(num){
		case "1":
          result=1; //机构编制
          break;
        case "2":
          result=2; //外交
          break;
        case "3":
          result=3; //教育
          break; 
        case "4":
          result=4; //公安
          break; 
        case "5":
          result=5; //民政
          break; 
        case "6":
          result=6; //司法
          break; 
        case "7":
          result=7; //交通运输
          break; 
        case "8":
          result=8; //文化
          break; 
        case "9":
          result=9; //工商
          break; 
        case "10":
          result=A; //旅游局
          break;
        case "11":
          result=B; //宗教事务管理
          break;
        case "12":
          result=C; //全国总工会
          break;
        case "13":
          result=D; //人民解放军总后勤部
          break;
        case "14":
          result=E; //省级人民政府
          break;
        case "15":
          result=F; //地市级人民政府
          break;
        case "16":
          result=G; //区县级人民政府
          break;
        case "17":
          result=Y; //其他
          break;
	 }
    return result;
 }