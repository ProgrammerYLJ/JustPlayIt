function GM_wait() {
if(typeof window.jQuery == 'undefined') {
var GM_JQ = document.createElement('script');
   GM_JQ.src = 'http://code.jquery.com/jquery-1.10.1.min.js';
   GM_JQ.type = 'text/javascript';
   document.getElementsByTagName('head')[0].appendChild(GM_JQ);
   window.setTimeout(GM_wait,100);
}else { $ = window.jQuery;letsJQuery(); }
}
GM_wait();

function letsJQuery() {
var imgLink;
var tarr=[];
$('a').each(function(i,n){
imgLink = $(n).attr('href');

if(imgLink.substr(imgLink.length - 3)=="jpg" || imgLink.substr(imgLink.length - 3)=="png"){
	
	if(tarr.length>0){
		if(imgLink!=tarr[tarr.length-1]){
			tarr.push(imgLink);
		}
	}
	else{
		tarr.push(imgLink);
	}
		
}
});

for(i=0;i<tarr.length;i++){
 window.open(tarr[i]);
}
}

//Reference: 
// http://mesak.tw/software/589/how-to-change-a-link-into-a-picture-looking-directly
