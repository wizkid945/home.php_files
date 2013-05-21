<!--

var browserName;
var browserVersion;
var browserVersionDecimal = 0;
var browserPlatform;
var tempVersion;

if (navigator.appName.toLowerCase().indexOf("netscape") != -1)
{
    browserName = "NS";
    browserVersion = parseInt(navigator.appVersion.charAt(0));
}
else if (navigator.appName.toLowerCase().indexOf("microsoft") != -1)
{
    browserName = "MSIE";
    tempVersion = parseInt(navigator.appVersion.charAt(0));
    if (tempVersion < 4)
      browserVersion = tempVersion;
    else {
      browserVersion = parseInt(navigator.appVersion.substr((navigator.appVersion.indexOf("MSIE ") + 5),1));
      browserVersionDecimal = parseInt(navigator.appVersion.substr((navigator.appVersion.indexOf("MSIE ") + 7),1));
    }

}
else
{
    browserName = "?";
    browserVersion = parseInt(navigator.appVersion.charAt(0));
}

if ((browserName == "NS") && (browserVersion < 4))
  browserPlatform = "WINDOWS"
else
{
  if (navigator.platform.toLowerCase().indexOf("win") != -1)
      browserPlatform = "WINDOWS";
  else if (navigator.platform.toLowerCase().indexOf("mac") != -1)
      browserPlatform = "MAC";
  else
      browserPlatform = "?";
}


// -- Contador para objeto TextArea.
function LimitaCampo(campo,tam){
	var tamanho = document.form[campo].value.length;
	var tex=document.form[campo].value;
	if (tamanho>=tam) {
		document.form[campo].value=tex.substring(0,tam); 
	}
	return true;
}

// --
function SetTexto(campo,txt) { campo.innerHTML = txt ; }


function FormataDado(campo,tammax,pos,teclapres){
	var tecla = teclapres.keyCode;
	vr = document.form[campo].value;
	vr = vr.replace( "-", "" );
	vr = vr.replace( ".", "" );
	vr = vr.replace( "/", "" );
	tam = vr.length ;

	if (tam < tammax && tecla != 8){ tam = vr.length + 1 ; }

	if (tecla == 8 ){ tam = tam - 1 ; }
			
	if ( tecla == 8 || tecla == 88 || tecla >= 48 && tecla <= 57 || tecla >= 96 && tecla <= 105 ){
		if ( tam <= 2 ){
	 		document.form[campo].value = vr ;}
		if ( tam > pos && tam <= tammax ){
			document.form[campo].value = vr.substr( 0, tam - pos ) + '-' + vr.substr( tam - pos, tam );}
	}
}

function FormataValor(campo,tammax,teclapres) {
	var tecla = teclapres.keyCode;
	vr = document.form[campo].value;
	vr = vr.replace( "/", "" );
	vr = vr.replace( "/", "" );
	vr = vr.replace( ",", "" );
	vr = vr.replace( ".", "" );
	vr = vr.replace( ".", "" );
	vr = vr.replace( ".", "" );
	vr = vr.replace( ".", "" );
	tam = vr.length;

	if (tam < tammax && tecla != 8){ tam = vr.length + 1 ; }

	if (tecla == 8 ){	tam = tam - 1 ; }
		
	if ( tecla == 8 || tecla >= 48 && tecla <= 57 || tecla >= 96 && tecla <= 105 ){
		if ( tam <= 2 ){ 
	 		document.form[campo].value = vr ; }
	 	if ( (tam > 2) && (tam <= 5) ){
	 		document.form[campo].value = vr.substr( 0, tam - 2 ) + ',' + vr.substr( tam - 2, tam ) ; }
	 	if ( (tam >= 6) && (tam <= 8) ){
	 		document.form[campo].value = vr.substr( 0, tam - 5 ) + '.' + vr.substr( tam - 5, 3 ) + ',' + vr.substr( tam - 2, tam ) ; }
	 	if ( (tam >= 9) && (tam <= 11) ){
	 		document.form[campo].value = vr.substr( 0, tam - 8 ) + '.' + vr.substr( tam - 8, 3 ) + '.' + vr.substr( tam - 5, 3 ) + ',' + vr.substr( tam - 2, tam ) ; }
	 	if ( (tam >= 12) && (tam <= 14) ){
	 		document.form[campo].value = vr.substr( 0, tam - 11 ) + '.' + vr.substr( tam - 11, 3 ) + '.' + vr.substr( tam - 8, 3 ) + '.' + vr.substr( tam - 5, 3 ) + ',' + vr.substr( tam - 2, tam ) ; }
	 	if ( (tam >= 15) && (tam <= 17) ){
	 		document.form[campo].value = vr.substr( 0, tam - 14 ) + '.' + vr.substr( tam - 14, 3 ) + '.' + vr.substr( tam - 11, 3 ) + '.' + vr.substr( tam - 8, 3 ) + '.' + vr.substr( tam - 5, 3 ) + ',' + vr.substr( tam - 2, tam ) ;}
	}		
	
}

function SaltaCampo (campo,prox,tammax,teclapres){
	var tecla = teclapres.keyCode;
	vr = document.form[campo].value;
	if( tecla == 109 || tecla == 188 || tecla == 110 || tecla == 111 || tecla == 223 || tecla == 108 ){
		document.form[campo].value = vr.substr( 0, vr.length - 1 ); }
	else{
	 	vr = vr.replace( "-", "" );
	 	vr = vr.replace( "/", "" );
	 	vr = vr.replace( "/", "" );
	 	vr = vr.replace( ",", "" );
	 	vr = vr.replace( ".", "" );
	 	vr = vr.replace( ".", "" );
	 	vr = vr.replace( ".", "" );
	 	vr = vr.replace( ".", "" );
	 	tam = vr.length;	
		
	 	if (tecla != 0 && tecla != 9 && tecla != 16 ){
			if ( tam == tammax ){
				if ( document.form[prox] )
					document.form[prox].focus();
			}
		}
	}
}

function FormataData(Campo,teclapres) {
	var tecla = teclapres.keyCode;
	vr = document.form[Campo].value;
	vr = vr.replace( ".", "" );
	vr = vr.replace( "/", "" );
	vr = vr.replace( "/", "" );
	tam = vr.length + 1;

	if ( tecla != 9 && tecla != 8 ){
		if ( tam > 2 && tam < 5 )
			document.form[Campo].value = vr.substr( 0, tam - 2  ) + '/' + vr.substr( tam - 2, tam );
		if ( tam >= 5 && tam <= 10 )
			document.form[Campo].value = vr.substr( 0, 2 ) + '/' + vr.substr( 2, 2 ) + '/' + vr.substr( 4, 4 ); }
}


function FormataHora(Campo,teclapres) {
	var tecla = teclapres.keyCode
	vr = document.form[Campo].value
	vr = vr.replace( ":", "" )
	vr = vr.replace( ".", "" )
	vr = vr.replace( "/", "" )
	vr = vr.replace( "/", "" )
	tam = vr.length + 1

	if ( tecla != 9 && tecla != 8 ){
		if ( tam > 2 && tam < 5 )
			document.form[Campo].value = vr.substr( 0, tam - 2  ) + ':' + vr.substr( tam - 2, tam )
	}
}


function FormataCpf(campo,tammax,teclapres) {
	var tecla = teclapres.keyCode;
	vr = document.form[campo].value;
	vr = vr.replace( "/", "" );
	vr = vr.replace( "/", "" );
	vr = vr.replace( ",", "" );
	vr = vr.replace( ".", "" );
	vr = vr.replace( ".", "" );
	vr = vr.replace( ".", "" );
	vr = vr.replace( ".", "" );
	vr = vr.replace( "-", "" );
	vr = vr.replace( "-", "" );
	vr = vr.replace( "-", "" );
	vr = vr.replace( "-", "" );
	vr = vr.replace( "-", "" );
	tam = vr.length;

	if (tam < tammax && tecla != 8){ tam = vr.length + 1 ; }

	if (tecla == 8 ){	tam = tam - 1 ; }
		
	if ( tecla == 8 || tecla >= 48 && tecla <= 57 || tecla >= 96 && tecla <= 105 ){
		if ( tam <= 2 ){ 
	 		document.form[campo].value = vr ; }
	 	if ( (tam > 2) && (tam <= 5) ){
	 		document.form[campo].value = vr.substr( 0, tam - 2 ) + '-' + vr.substr( tam - 2, tam ) ; }
	 	if ( (tam >= 6) && (tam <= 8) ){
	 		document.form[campo].value = vr.substr( 0, tam - 5 ) + '.' + vr.substr( tam - 5, 3 ) + '-' + vr.substr( tam - 2, tam ) ; }
	 	if ( (tam >= 9) && (tam <= 11) ){
	 		document.form[campo].value = vr.substr( 0, tam - 8 ) + '.' + vr.substr( tam - 8, 3 ) + '.' + vr.substr( tam - 5, 3 ) + '-' + vr.substr( tam - 2, tam ) ; }
	 	if ( (tam >= 12) && (tam <= 14) ){
	 		document.form[campo].value = vr.substr( 0, tam - 11 ) + '.' + vr.substr( tam - 11, 3 ) + '.' + vr.substr( tam - 8, 3 ) + '.' + vr.substr( tam - 5, 3 ) + '-' + vr.substr( tam - 2, tam ) ; }
	 	if ( (tam >= 15) && (tam <= 17) ){
	 		document.form[campo].value = vr.substr( 0, tam - 14 ) + '.' + vr.substr( tam - 14, 3 ) + '.' + vr.substr( tam - 11, 3 ) + '.' + vr.substr( tam - 8, 3 ) + '.' + vr.substr( tam - 5, 3 ) + '-' + vr.substr( tam - 2, tam ) ;}
	}		
}

function VerificaJava()	{
	if (navigator.javaEnabled())
		document.form.javas.value="sim"
}

function IsNumeric(pNum){

	if (pNum==''){
		return false;
	}
	for (var i = 0; i < pNum.length; i++){
		var ch = pNum.substring(i, i + 1);
		if (ch < '0' || '9' < ch){
			return false;
		}
	}
	return true;
}


function IsDecimal(pNum){

	if (pNum==''){
		return false;
	}
	
	for (var i = 0; i < pNum.length; i++){
		var ch = pNum.substring(i, i + 1);
		if ((ch < '0' || '9' < ch) && (ch != ',') && (ch != '.') && (ch != '-')){
			return false;
		}
	}
	return true;
}


function IsDate(pData){

	if(pData.length<10 || pData.length>10){

		return false;
	}

	var ano = '' + pData.substring(6,10);
	var mes = '' + pData.substring(3,5);
	var dia = '' + pData.substring(0,2);
	
	if (!IsNumeric(ano) || !IsNumeric(mes) || !IsNumeric(dia)){
		return false;
	}
			
	if(dia>'31'){
		return false;
	}
				
	if(mes>'12'){
		return false;
	}

	if(ano<='1900'){
		return false;
	}

	if(mes=='02'){
		if(ano%4!=0 && dia>'28'){
			return false;
		}
		else{
			if(dia>'29'){
				return false;
			}
		}
	}
	
	if(mes<='07'){
		if(mes%2==0 && dia>'30'){
			return false;
		}
	}
	else{
		if(mes>'09'){
			if(mes%2!=0 && dia>'30'){
				return false;
			}
		}
	}
					
	return true
}

//FUNÇÃO PARA VALIDAR UMA HORA INFORMADA
function IsHour(pHora){

	if (pHora != ''){
	
		if(pHora.length < 4 || pHora.length > 5){
			return false
		}

		var aux = pHora.indexOf(":")
		var hora = pHora.substring(0,aux)
		var min = pHora.substring(aux+1,pHora.length)
	
		if(hora > 23 || hora < 0){
			return false
		}
					
		if(min > 59 || min < 0){
			return false
		}
	}
	
	return true
}


function IsEmail(email){

	if ((email.search(/;/i) == -1) &&
	    (email.search(/,/i) == -1) &&
	    (email.indexOf("..") == -1) &&
	    (email.indexOf(".@") == -1) &&
	    (email.indexOf("@.") == -1) &&
	    (email.search(/ /i) == -1) &&
	    (email.search(/"/i) == -1) &&
	    (email.search(/'/i) == -1) &&
	    (email.indexOf("^") == -1) &&
	    (email.search(/`/i) == -1) &&
	    (email.search(/´/i) == -1) &&
	    (email.search(/~/i) == -1) &&
	    (email.search(/ç/i) == -1) &&
	    (email.length != 0) &&
	    (email.search(/@/i) >= 2) &&
	    (email.substr(0,1) != ".") &&               //Não pode começar com ponto
	    (email.substr(email.length-1) != ".") &&    //Não pode terminar com ponto
	    (email.indexOf("hotmail.com.br") == -1) &&
	    (email.indexOf("aol.com.br") == -1) &&
	    (email.indexOf("globo.com.br") == -1) &&
	    (email.indexOf(" ") == -1))
		return true;
	else
		return false; 
}

function Mid(campo,x,y){

	var res;
	if(x>0)
		x = x-1;
	if(x+y > campo.length)
		y = campo.length
	else
		y = x + y;
	res = campo.substring(x,y);
	return res;
}

	
function Left(campo,x){

	var res;
	if(x > campo.length)
		x = campo.length;
	res = campo.substring(0,x);
	return res;
}

	
function Right(campo,x){

	var res;
	if(x > campo.length){
		res = campo;
		return res;
	}
	res = campo.substring(campo.length-x,campo.length);
	return res;
}

	
function UCase(campo){

	return campo.toUpperCase()
}

	
function LCase(campo){

	return campo.toLowerCase()
}

	
function RTrim(campo){

	y=true;
	while(y==true){
		x = campo.length;
		if(Right(campo,1)==' '){
			campo = Left(campo,x-1);
			y=true;
		}
		else{
			y=false
		}
	}
	return campo;
}

	
function LTrim(campo){

	y=true;
	while(y==true){
		x = campo.length-1;
		if(Left(campo,1)==' '){
			campo = Right(campo,x);
			y=true;
		}
		else{
			y=false;
		}
	}
	return campo;
}

	
function Trim(campo){

	return RTrim(LTrim(campo));
}


//FUNÇÃO PARA OCULTAR OU TORNAR VISÍVEL UM OBJETO DE UMA PÁGINA
function ShowHide(opcao,id) {
	
	el = document.all ? document.all[id] : 
	dom ? document.getElementById(id) : 
	document.layers[id];
	els = dom ? el.style : el;

	if (dom) {
	  if (opcao == 1) els.visibility = "visible"
	  else els.visibility = "hidden"
	}
	else if (ns4){
	  if (opcao == 1) els.visibility = "show"
	  else els.visibility = "hide"
	}

}

function IsNumber() {
	if ((event.keyCode >= 48) && (event.keyCode <= 57))
		return true;
	else
		return false;
}

function somenteNumero(campo) {
	if (!/^\d*$/.test(campo.value)) {		
		campo.value = campo.value.replace(/[^\d]/g,"");
	}
}

// Tecla Enter se comportando como Tab
function SetFocus(campo){
	if(window.event.srcElement.type == 'text' || window.event.srcElement.type == 'password'){ 
		var ele = window.event.srcElement;
		//var index = ele.sourceIndex;
		if(window.event.keyCode == 13){
			//document.all.item(index + 2).focus(); 
			if (campo.disabled == false){
				if (campo.type != 'select-one')
					campo.select()
				else
					campo.focus()
			}
			
			window.event.returnValue = false;     
		}
	} 
}

/**
* Tecla Enter se comportando como Tab
* Modificada para funcionar no IE e Firefox
*/
function enterTab(e,idCampo){
	campo = document.getElementById(idCampo);
	if (browserName == "MSIE"){
		keyCode = e.keyCode;
		typeElement = e.srcElement.type;
	} else {
		keyCode = e.which;
		typeElement = e.target.type;
	}		
	
	if(typeElement == 'text' || typeElement == 'password'){ 		
		if(keyCode == 13){			
			if (campo.disabled == false){
				if (campo.type != 'select-one')
					campo.select()
				else
					campo.focus()
			}
			
			if (browserName == "MSIE"){
				e.returnValue = false;
			} else {
				e.preventDefault();
			}
			
		}
	} 

}

// Função utilizada para validação de CPF e CNPJ
function modulo(str) {

   	soma=0;
   	ind=2;
   	for(pos=str.length-1;pos>-1;pos=pos-1) {
   		soma = soma + (parseInt(str.charAt(pos)) * ind);
   		ind++;
   		if(str.length>11) {
   			if(ind>9) ind=2;
   		}
	}
   	resto = soma - (Math.floor(soma / 11) * 11);
   	if(resto < 2) {
    	return 0
   	}
   	else {
   		return 11 - resto
   	}
}

// Função para validação do CPF
function IsCPF(valor) {

	primeiro=valor.substr(1,1);
	falso=true;
	size=valor.length;
	if (size!=11){
		return false;
	}
	size--;
	for (i=2; i<size-1; ++i){
		proximo=(valor.substr(i,1));
		if (primeiro!=proximo) {
			falso=false
		}
	}
	if (falso){
		return false;
	}
   	if(modulo(valor.substring(0,valor.length - 2)) + "" + modulo(valor.substring(0,valor.length - 1)) != valor.substring(valor.length - 2,valor.length)) {
   		return false;
   	}
   	return true
}


// Função para validação do cnpj
function IsCNPJ(valor) {

	primeiro=valor.substr(1,1);
	falso=true;
	size=valor.length;
	if (size!=14){
		return false;
	}
	size--;
	for (i=2; i<size-1; ++i){
		proximo=(valor.substr(i,1));
		if (primeiro!=proximo) {
			falso=false
		}
	}
	
	if (falso){
		return;
	}
	
   	if(modulo(valor.substring(0,valor.length - 2)) + "" + modulo(valor.substring(0,valor.length - 1)) !=valor.substring(valor.length - 2,valor.length)) {
   		return false;
   	}
   	return true
}

//======================================================
// FUNÇÃO PARA ABRIR O FORMULÁRIO DE PESQUISA DE CIDADES 
//======================================================
function PesquisaCidades(uf,nome,campo_uf,campo_nome,campo_numg)
{
   url = "pesqcidades.asp?uf=" + uf + "&nome=" + nome + "&campo_uf=" + campo_uf + "&campo_nome=" + campo_nome + "&campo_numg=" + campo_numg
   
   if(navigator.appName.indexOf("Netscape")>=0){
		window.open(url,"pesqcidades","resizable=no,scrollbars=yes,status=no,toolbar=no,location=no,menubar=no,width=450,height=190,screenX=230,screenY=250")
   } else {
		window.open(url,"pesqcidades","resizable=no,scrollbars=yes,status=no,toolbar=no,location=no,menubar=no,width=450,height=190,top=" + (window.screenTop + 130) + ",left=" + (window.screenLeft + 100))
   }
		
}	

function FechaForm(){
	if (event.keyCode == 27){
		window.close()
	}
}

function pesquisarCEP(){
	var URL = "busca_CEP.htm";
	window.open(URL,'busca_CEP','scrollbars=no,screenX=150,screenY=150,width=338,height=333');
}


//==============================================================
// FUNÇÃO PARA MONTAR AS TAB's DOS FORMULARIO
//==============================================================
function AlteraTab(tab,ntabs){

	for (i=1;i<=ntabs;i++){		
		document.getElementById('tab' + i).style.display = "none"		
		document.getElementById('imgtab' + i).style.display = "none"				
	}
	document.getElementById('tab' + tab).style.display = "block"
	document.getElementById('imgtab' + tab).style.display = "block"	
	
}


function montaTabs(vRotulos,nTabs) {

	if (vRotulos.length > 0) {
		nRotulos = vRotulos.length
		sAux=""
		for (i=0;i<vRotulos.length;i++) {
			sAux += "<div id='imgtab" + (i+1) + "' style='display:none'>" + '\n'

			sAux += "<table border=0 width=255 height=26 cellspacing=0 cellpadding=0 align=left background='images/tab_" + (i+1) + "_" + nTabs + ".jpg'>" + '\n'
			sAux += "<tr align=center>" + '\n'
			for (j=0;j<vRotulos.length;j++) {
				//TAB EM DESTAQUE
				if (i==j) {
					sAux += "<td width='" + parseInt(100/nRotulos) + "%'><a href='javascript:AlteraTab(" + (j+1) + "," + nTabs + ")' class=link-tab><b>" + vRotulos[j] + "</b></a></td>" + '\n'
				} else {
					sAux += "<td width='" + parseInt(100/nRotulos) + "%'><a href='javascript:AlteraTab(" + (j+1) + "," + nTabs + ")' class=link-tab>" + vRotulos[j] + "</a></td>"
				}
			}
			sAux += "</tr>"
			sAux += "</table>"
			sAux += "</div>"
		}
		document.write(sAux)
	}
	
}

/**
* Troca a fonte de uma 
*/
function trocaClass(id,classe){
	document.getElementById(id).className=classe;
}
//-->
