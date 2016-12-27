//  统一社会信用代码 
function isCreditCode(creditCode){
  toastr.options.positionClass = 'toast-center-center';
  toastr.options.timeOut = 1000;

  creditCode = creditCode.toUpperCase();
  if(creditCode.length!=18){
    toastr.warning('信用代码证必须为18位!'); 
    return false;  
  }
  
  var sum = 0;
  var arr=new Array();
  arr=creditCode.split("");
  for(var i=0;i<arr.length-1;i++){
    var c=arr[i];
    if(typeof(c)=="NaN"||typeof(c)=="undefined"){
     toastr.warning('请输入正确的信用代码证!'); 
      return false;
    }
    var a=getMapC(c);//获得代码对应数值
    if(typeof(a)=="NaN"||typeof(a)=="undefined"){
      toastr.warning('请输入正确的信用代码证!'); 
      return false;
    }
    var b=getMapW((i+1).toString()); //获得当前位数权重
    if(typeof(b)=="NaN"||typeof(b)=="undefined"){
      toastr.warning('请输入正确的信用代码证!'); 
      return false;
    }
    sum += a * b;
    if(typeof(sum)=="NaN"||typeof(sum)=="undefined"){
      toastr.warning('请输入正确的信用代码证!'); 
      return false;
    }
  }

  var mod=sum%31;
  var res = getMapR((31-mod).toString());//计算校验码
  if(typeof(res)=="NaN"||typeof(res)=="undefined"){
      toastr.warning('请输入正确的信用代码证!'); 
      return false;
  }
  console.info(res.toString());
  console.info(arr[arr.length-1]);
  if(arr[arr.length-1]!=(res.toString())){
    toastr.warning('请输入正确的信用代码证!'); 
    return false;
  }
   toastr.info('校验通过!'); 
  return true;
}

function getMapC(pa){
  var result;
  switch (pa) {
     case "0" :
          result=0;
          break;
       case "1" :
          result=1;
          break;
       case "2" :
          result=2;
          break;
       case "3" :
          result=3;
          break;
       case "4" :
          result=4;
          break;
       case "5" :
          result=5;
          break;
       case "6" :
          result=6;
          break;
       case "7" :
          result=7;
          break;
       case "8" :
          result=8;
          break;
       case "9" :
          result=9;
          break;
       case "A" :
          result=10;
          break;
       case "B" :
          result=11;
          break;
       case "C" :
          result=12;
          break;
       case "D" :
          result=13;
          break;
       case "E" :
          result=14;
          break;
       case "F" :
          result=15;
          break;
       case "G" :
          result=16;
          break;
       case "H" :
          result=17;
          break;
       case "J" :
          result=18;
          break;
       case "K" :
          result=19;
          break;
       case "L" :
          result=20;
          break;
       case "M" :
          result=21;
          break;
       case "N" :
          result=22;
          break;
       case "P" :
          result=23;
          break;
       case "Q" :
          result=24;
          break;
       case "R" :
          result=25;
          break;
       case "T" :
          result=26;
          break;
       case "U" :
          result=27;
          break;
       case "W" :
          result=28;
          break;
       case "X" :
          result=29;
          break;
       case "Y" :
          result=30;
          break;
  }
  return result;
}

function getMapW(pa){
  var result;
  switch (pa) {
     case "1" :
          result=1;
          break;
       case "2" :
          result=3;
          break;
       case "3" :
          result=9;
          break;
       case "4" :
          result=27;
          break;
       case "5" :
          result=19;
          break;
       case "6" :
          result=26;
          break;
       case "7" :
          result=16;
          break;
       case "8" :
          result=17;
          break;
       case "9" :
          result=20;
          break;
       case "10" :
          result=29;
          break;
       case "11" :
          result=25;
          break;
       case "12" :
          result=13;
          break;
       case "13" :
          result=8;
          break;
       case "14" :
          result=24;
          break;
       case "15" :
          result=10;
          break;
       case "16" :
          result=30;
          break;
       case "17" :
          result=28;
          break;
  }
  return result;
}

function getMapR(pa){
  var result;
  switch (pa) {
     case "0" :
          result="0";
          break;
       case "1" :
          result="1";
          break;
       case "2" :
          result="2";
          break;
       case "3" :
          result="3";
          break;
       case "4" :
          result="4";
          break;
       case "5" :
          result="5";
          break;
       case "6" :
          result="6";
          break;
       case "7" :
          result="7";
          break;
       case "8" :
          result="8";
          break;
       case "9" :
          result="9";
          break;
       case "10" :
          result="A";
          break;
       case "11" :
          result="B";
          break;
       case "12" :
          result="C";
          break;
       case "13" :
          result="D";
          break;
       case "14" :
          result="E";
          break;
       case "15" :
          result="F";
          break;
       case "16" :
          result="G";
          break;
       case "17" :
          result="H";
          break;
       case "18" :
          result="J";
          break;
       case "19" :
          result="K";
          break;
       case "20" :
          result="L";
          break;
       case "21" :
          result="M";
          break;
       case "22" :
          result="N";
          break;
       case "23" :
          result="P";
          break;
       case "24" :
          result="Q";
          break;
       case "25" :
          result="R";
          break;
       case "26" :
          result="T";
          break;
       case "27" :
          result="U";
          break;
       case "28" :
          result="W";
          break;
       case "29" :
          result="X";
          break;
       case "30" :
          result="Y";
          break;
       case "31" :
          result="0";
          break;
  }
  return result;
}


/*统一社会信用代码生成*/
function generatorCreditCode(){
  $("#creditCode").val("");   

  var regOrg = getRegOrgCode("9");//默认工商
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
      sum += getMapC(code.charAt(i))* getMapW((i+1).toString());
  }
  var C18 = 31 - (sum % 31);
  if (C18 == 31) {
      C18 = '0';
  }
   $("#creditCode").val(code+getMapR(C18.toString()));   
}

/*获得登记机构*/
function getRegOrgCode(num){
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