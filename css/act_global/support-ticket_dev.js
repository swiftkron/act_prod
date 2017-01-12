/* Google Search Formatting */
.gsc-refinementsArea, .gsc-above-wrapper-area, .gs-visibleUrl, .gsc-table-result, .gsc-cursor-box{
  display:none !important;
}
.gsc-control-cse, .gsc-result{
  border:none !important;
  background:#edf0f2 !important;
}
.gs-webResult.gs-result a.gs-title:link, .gs-webResult.gs-result a.gs-title:link b, .gs-imageResult a.gs-title:link, .gs-imageResult a.gs-title:link b {
    color: #008cc5 !important;
}
.gs-webResult.gs-result a.gs-title:hover, .gs-webResult.gs-result a.gs-title:hover b, .gs-imageResult a.gs-title:hover, .gs-imageResult a.gs-title:hover b {
    color: #fe5000 !important;
}
.gs-result .gs-title, .gs-result .gs-title * {
    text-decoration: none !important;
}
.gsc-result .gs-title{
  height:1.4em !important;
}
.gs-title{
  font-size:14px !important;
}

#formSubmit{
  display:block;
  max-width:200px;
  margin:24px auto;
}
#description{display:none;}
.ticketSummary{
  display:none;
}

.mod{
	margin:24px auto;
	padding:12px 24px;
	background:#dfe3e6;
	color:#2a353d;
	text-align:center;
}
.supportForm{
}
#ticketForm input[type=text], #ticketForm select, #ticketForm textarea{
	width:90%;
	border:#a5b7c2 1px solid;
	padding:6px;
}
#ticketForm input[type=text].needsfilled, #ticketForm input[type=email].needsfilled, #ticketForm select.needsfilled, #ticketForm textarea.needsfilled{
	border:#fe5000 1px solid;
}
#ticketForm input[type=submit]{
	display:block;
	margin:24px auto;
}
.required{color:#FE5000;}
.hint{color:#a5b7c2;font-size:.65em;font-style:oblique;}
.label label{
	margin-top:24px;
	color:#000;
}

.returnMsg{
	display:none;
}
.returnMsg h2{
}
.returnError{
  display:none;
	background:#FFF;
	border:#cc0000 2px solid;
	color:#2a353d;
}
.returnError h2{
	color:#cc0000;
}

/* emarketing version specifics */
.engage, .dexone, .sagecrm, .hibu, .dkb, .aem, .sem{
  display:none;
}