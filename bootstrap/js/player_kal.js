
function getKalturaPlayer(idKal){	
  pvpDirecto = "0_64uuhu33"; 
  pvpBackUp = "0_f3cm4bst"; 
  pruebaPromo = "0_6370pida"; 
 
  flowpub = pruebaPromo;
  
  //playerWrappper = document.getElementById("videoWrapper");
  playerWrappper.innerHTML = '\<\script type="text/javascript" src="http://k.uecdn.es/p/110/sp/11000/embedIframeJs/uiconf_id/'+idKal+'/partner_id/110">\<\/script>\<\object id="kaltura_player_1401882208" name="kaltura_player_1401882208" type="application/x-shockwave-flash" allowFullScreen="true" allowNetworking="all"  allowScriptAccess="always" bgcolor="#000000" xmlns:dc="http://purl.org/dc/terms/" xmlns:media="http://search.yahoo.com/searchmonkey/media/" rel="media:video" resource="http://k.uecdn.es/index.php/kwidget/cache_st/1401882208/wid/_110/uiconf_id/'+idKal+'/entry_id/'+flowpub+'" data="http://k.uecdn.es/index.php/kwidget/cache_st/1401882208/wid/_110/uiconf_id/'+idKal+'/entry_id/'+flowpub+'">\<\param name="allowFullScreen" value="true" />\<\param name="allowNetworking" value="all" />\<\param name="allowScriptAccess" value="always" />\<\param name="bgcolor" value="#000000" />\<\param name="flashVars" value="&{FLAVOR}" />\<\param name="movie" value="http://k.uecdn.es/index.php/kwidget/cache_st/1401882208/wid/_110/uiconf_id/'+idKal+'/entry_id/'+flowpub+'" /> \<\a rel="media:thumbnail" href="http://v.uecdn.es/p/110/sp/11000/thumbnail/entry_id/'+flowpub+'/width/120/height/90/bgcolor/000000/type/2">\<\/a> \<\span property="dc:description" content="Niagara">\<\/span>\<\span property="media:title" content="DIGITAL PLUS  - NIAGARA">\<\/span> \<\span property="media:width" content="400">\<\/span>\<\span property="media:height" content="330">\<\/span> \<\span property="media:type" content="application/x-shockwave-flash">\<\/span> \<\/object>';
}
var tellmeflash = getFlashVersion();
if (tellmeflash == 0) { //HTML5
	getKalturaPlayer('8705137');
} else { //Flash
	getKalturaPlayer('8705140');
}

if (getFlashVersion() == 0) {
	document.createElement("script");
	
}else{
	
}