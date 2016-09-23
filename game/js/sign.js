function getLength(str){
	return str.replace(/[^\x00-xff]/g,"xx").length;
}
function findStr(str,n){
	var tmp=0;
	for(var i=0;i<str.length;i++){
		if(str.charAt(i)==n){
			tmp++;
		}
	}
	return tmp;
}
window.onload=function(){
	var aInput=document.getElementsByTagName('input');

	var oName=aInput[0];
	var pwd=aInput[1];
	var pwd2=aInput[2];
	var mail=aInput[10];
	var name=aInput[3];
	var job=aInput[6];
	var age=aInput[7];
	var tel=aInput[9];
	
	
	var ap=document.getElementsByTagName('p');
	var name_msg=ap[0];
	var pwd_msg=ap[1];
	var pwd2_msg=ap[2];
	var mail_msg=ap[9];
	var name_msg=ap[3];
	var job_msg=ap[5];
	var age_msg=ap[6];
	var tel_msg=ap[8];
	
	var count=document.getElementById('count');
	var aEm=document.getElementsByTagName('em');
	
	var name_length=0;
	
	
	//用户名
	oName.onfocus=function(){
		name_msg.style.display="block";
		
	};
	oName.onkeyup=function(){
		count.style.visibility="visible";
		name_length=getLength(this.value);
		count.innerHTML=name_length+"个字符";
		if(name_length==0){
			count.style.visibility="hidden";
		}
	};
	oName.onblur=function(){
		var re=/[^\w\u4e00-\u9fa5]/g;
		if(re.test(this.value)){
			name_msg.innerHTML='含有非法字符！';
		}else if(this.value==""){
			name_msg.innerHTML='用户名不能为空!';
		}else if (name_length>25) {
			name_msg.innerHTML='长度超过25个字符';
		}else if (name_length<6) {
			name_msg.innerHTML='长度小于6个字符';
		}else{
			count.style.visibility="hidden";
			name_msg.innerHTML='';
		}
	};
	
	//密码
	pwd.onfocus=function(){
		pwd_msg.style.display="block";
	};
	pwd.onkeyup=function(){
		
		if(this.value.length>5){
			aEm[1].className="active";
			pwd2.removeAttribute("disabled");
			pwd2_msg.style.display="block";
			
		}else{
			aEm[1].className="";
			pwd2.setAttribute("disabled");
			pwd2_msg.style.display="none";
		};
		if(this.value.length>10){
			aEm[2].className="active";
		}else{
			aEm[2].className="";
		}
	};
	pwd.onblur=function(){
		var m=findStr(pwd.value,pwd.value[0]);
		var re_n=/[^\d]/g;
		var re_t=/[^a-zA-z]/g;
		
		//不能为空
		if(this.value==""){
			pwd_msg.innerHTML='密码不能为空';
		}
		//不能为相同字符
		else if(m==this.value.length){
			pwd_msg.innerHTML='不能用相同字符';
		}
		//长度应为6到16个字符
		else if(this.value.length>16||this.value.length<6){
			pwd_msg.innerHTML='长度不符合要求';
		}
		//不能全为数字
		else if(!re_n.test(this.value)){
			pwd_msg.innerHTML='密码不能全为数字';
		}
		//不能全为字母
		else if(!re_t.test(this.value)){
			pwd_msg.innerHTML='密码不能全为字母';
		}
		else{
			pwd_msg.innerHTML='';
		}
	};
	//确认密码
	pwd2.onblur=function(){
		if(this.value!=pwd.value){
			pwd2_msg.innerHTML='两次密码输入不一致，请重新输入';
		}else{
			pwd2_msg.innerHTML='';
		}
	};
	
	//邮箱验证
	mail.onblur=function(){
		var re_b=/\@{1}/g;
		if(!re_b.test(this.value)){
			mail_msg.style.display="block";
			mail_msg.innerHTML='不是有效的邮箱格式';
		}
		else{
			mail_msg.innerHTML='';
		}
	};
	//姓名
	name.onblur=function(){
		if(this.value==""){
			name_msg.style.display="block";
			name_msg.innerHTML='姓名不能为空';
		}
		else{
			name_msg.innerHTML='';
		}
	};
	//职业
	job.onblur=function(){
		if(this.value==""){
			job_msg.style.display="block";
			job_msg.innerHTML='职业不能为空';
		}
		else{
			job_msg.innerHTML='';
		}
	};
	//年龄
	age.onblur=function(){
		if(this.value==""){
			age_msg.style.display="block";
			age_msg.innerHTML='年龄不能为空';
		}
		else{
			age_msg.innerHTML='';
		}
	};
	//电话
	tel.onblur=function(){
		if(this.value==""){
			tel_msg.style.display="block";
			tel_msg.innerHTML='姓名不能为空';
		}
		else{
			tel_msg.innerHTML='';
		}
	};
};
