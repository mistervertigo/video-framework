function pintaReproductorKaltura(e, k, b, f, q, g, o) {
    var m = "Video-MARCA";
    if (typeof b == "undefined" || b.length == 0) {
        b = m
    }
    if (typeof b == "undefined" || o.length == 0) {
        o = k
    }
    var h = e.parentNode;
    var p = document.createElement("script");
    if (getFlashVersion() == 0) {
        var a = "8704987";
        var l = "http://k.uecdn.es/html5/html5lib/v1.7.4.1/mwEmbedLoader.php";
        var n = "'flashvars':{ 'autoPlay' : true, 'vast.numPreroll': 1, 'vast.skipOffset': 5, 'vast.storeSession': false, 'vast.postrollStartWith': 1, 'vast.postrollInterval': 1, ";
        n += "'vast.prerollUrl': '" + g.substring(0, g.indexOf("&")).replace("vast.prerollUrl=", "") + "',";
        n += "'vast.postrolllUrl': '" + g.substring(g.indexOf("&") + 1).replace("vast.postrollUrl=", "") + "',";
        n += "'vast.timeout': 4, 'vast.preSequence': 1, 'vast.numPostroll': 1, 'vast.postSequence': 1, 'adsOnReplay': true, 'streamerType': 'hdnetworkmanifest', 'akamaiHD': { 'loadingPolicy': 'preInitialize', 'asyncInit': true}},"
    } else {
        var a = "8705105";
        var l = "http://k.uecdn.es/p/110/sp/11000/embedIframeJs/uiconf_id/" + a + "/partner_id/110";
        var n = "'flashvars':{'autoPlay' : true, 'doubleClick.adTagUrl': '" + g.substring(0, g.indexOf("&")).replace("vast.prerollUrl=", "") + "', 'vast.postrollUrl': '" + g.substring(g.indexOf("&") + 1).replace("vast.postrollUrl=", "") + "'},"
    }
    loadScript(l, function() {
        var r = document.createElement("div");
        r.id = "kaltura_object_" + k;
        if (typeof f == "string" && typeof q == "string") {
            r.className = "jsKalturaObject";
            r.style.width = f;
            r.style.height = parseInt(h.parentNode.offsetWidth / 1.67) + "px"
        } else {
            r.style.width = f + "px";
            r.style.height = q + "px"
        }
        h.insertBefore(r, e);
        h.removeChild(e);
        var u = document.createElement("script");
        var t = "kWidget.embed({'targetId': 'kaltura_object_" + k + "' ,";
        t += "'wid': '_110',";
        t += "'uiconf_id' : '" + a + "', ";
        t += "'entry_id' : '" + k + "',";
        t += n;
        t += "'params':{ 'wmode': 'transparent', 'width': '100%', 'height': '100%', 'title': '" + b + "' },";
        t += "'readyCallback': function( playerId ){ var kdp = document.getElementById( playerId );  kdp.addJsListener( 'doPlay', 'doPlayCallback'); }});";
        u.text = t;
        h.appendChild(u)
    });
}