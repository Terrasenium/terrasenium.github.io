var langselect = function(lng) {
	var date = new Date( new Date().getTime() + 3600*1000*24*365 );
	document.cookie = "language=" + lng + "; expires=" + date.toUTCString();
}
	
var virusselect = function() {
	var date = new Date( new Date().getTime() + 3600*1000*24*365 );
	var chk = document.getElementById('chkVirus');
	var state = chk.checked ? "1" : "0";
	document.cookie = "viruschk=" + state + "; expires=" + date.toUTCString();
}

var verifymail = function(warn) {
	if ( (document.sendmail.fromname.value == "") || (document.sendmail.frommsg.value == "") ) {
		alert(warn);
		return false;
	} else return true;
}
