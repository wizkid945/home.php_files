var ajaxGet
	function loadAjaxGet(url, idWrite, tRequest, opcao)
	{
		if(tRequest!="GET" || tRequest!="POST")
			tRequest = "GET";
		element	=  document.getElementById(idWrite);
		 if(opcao!='alert')
			element.innerHTML  = "<div style='text-align:center; font-family:Tahoma, Arial, Helvetica; font-size:9px; color:#ff0000; margin-top:140px; margin-bottom:200px;'>c a r r e g a n d o<br><img src='../js/preloader.gif'> </div>";   
	// code for Mozilla, etc.
	if (window.XMLHttpRequest)
	  {
	  ajaxGet=new XMLHttpRequest()
	  ajaxGet.onreadystatechange=function(){
		if (ajaxGet.readyState==4)
		{
				// if OK
				if (ajaxGet.status==200)
				{
					retorno = (ajaxGet.responseText)
					if(opcao=='alert')			
					  alert(unescape(retorno.replace(/\+/g," ")));
					else{
						texto = unescape(retorno.replace(/\+/g," "));
						element.innerHTML=texto;
					}
				}
				else
				{
					alert("Problem Ao Tentar Abrir Arquivo:" + ajaxGet.statusText)
				}
		  }
	  }
	  ajaxGet.open(tRequest,url,true)
	  ajaxGet.send(null)
	  }
	// code for IE
	else if (window.ActiveXObject)
	  {
	  ajaxGet=new ActiveXObject("Microsoft.XMLHTTP")
		if (ajaxGet)
		{
		ajaxGet.onreadystatechange=function(){
		if (ajaxGet.readyState==4)
		{
				// if OK
				if (ajaxGet.status==200)
				{
					retorno = (ajaxGet.responseText)
					if(opcao=='alert')			
					  alert(unescape(retorno.replace(/\+/g," ")));
					else{
						texto = unescape(retorno.replace(/\+/g," "));
						element.innerHTML=texto;
					}
				  //alert(element.innerHTML);
				}
				else
				{
					alert("Problem Ao Tentar Abrir Arquivo:" + ajaxGet.statusText)
				}
		  }
	  }
		ajaxGet.open(tRequest,url,true)
		if(tRequest=="POST")
			ajaxGet.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		ajaxGet.send()
		}
	  }
	}

function url_encode(str) { 
	var hex_chars = "0123456789ABCDEF"; 
	var noEncode = /^([a-zA-Z0-9\_\-\.])$/; 
	var n, strCode, hex1, hex2, strEncode = ""; 

	for(n = 0; n < str.length; n++) { 
		if (noEncode.test(str.charAt(n))) { 
			strEncode += str.charAt(n); 
		} else { 
			strCode = str.charCodeAt(n); 
			hex1 = hex_chars.charAt(Math.floor(strCode / 16)); 
			hex2 = hex_chars.charAt(strCode % 16); 
			strEncode += "%" + (hex1 + hex2); 
		} 
	} 
	return strEncode; 
}
function url_decode(str) { 
	var n, strCode, strDecode = ""; 

	for (n = 0; n < str.length; n++) { 
		if (str.charAt(n) == "%") { 
			strCode = str.charAt(n + 1) + str.charAt(n + 2); 
			strDecode += String.fromCharCode(parseInt(strCode, 16)); 
			n += 2; 
		} else { 
			strDecode += str.charAt(n); 
		} 
	} 

	return strDecode; 
}

var ajaxPost = false;
function loadAjaxPost(url, parameters, divId, opcao) {
  ajaxPost = false;
  divId = document.getElementById(divId);
  if (window.XMLHttpRequest) { // Mozilla, Safari,...
	 ajaxPost = new XMLHttpRequest();
	 if (ajaxPost.overrideMimeType) {
		ajaxPost.overrideMimeType('text/xml');
	 }
  } else if (window.ActiveXObject) { // IE
	 try {
		ajaxPost = new ActiveXObject("Msxml2.XMLHTTP");
	 } catch (e) {
		try {
		   ajaxPost = new ActiveXObject("Microsoft.XMLHTTP");
		} catch (e) {}
	 }
  }
  if (!ajaxPost) {
	 alert('Cannot create XMLHTTP instance');
	 return false;
  }
  if(opcao!="alert"){
	if(divId)
		divId.innerHTML='carregando';
  }

  ajaxPost.onreadystatechange = function alertContents() {
					  if (ajaxPost.readyState == 4) {
						 if (ajaxPost.status == 200) {
							//alert(ajaxPost.responseText);
							ajaxFinish = 1;
							result = ajaxPost.responseText;
							texto = unescape(result.replace(/\+/g," "));
							minhastring = texto.indexOf("OK", 0);

							if(minhastring>=0)
								ajaxGetTxt = 1;
							else
								ajaxGetTxt = 0;

							if(opcao=='alert')
								alert(texto);
							else
								divId.innerHTML=texto;
						 } else {
							alert('There was a problem with the request.');
						 }
					  }
					}
  ajaxPost.open('POST', url, true);
  ajaxPost.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  ajaxPost.setRequestHeader("Content-length", parameters.length);
  ajaxPost.setRequestHeader("Connection", "close");
  ajaxPost.send(parameters);
}
function valida() {
      if(document.getElementById('email').value.indexOf("@")==-1 || document.getElementById('email').value.indexOf(".")==-1){
         alert("E-mail invalido!");
         document.getElementById('email').focus();
      return false;
      }
loadAjaxPost('news.php?cmd=inserir', 'email='+document.getElementById('email').value, '', 'alert')
}
