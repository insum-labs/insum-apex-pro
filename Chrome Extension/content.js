/*jshint esversion: 6*/

console.log('Thank you for using Insum-Apex-Pro!\nHave a question or request?\nContact Ben Shumway at bshumway@insum.ca\nCheers');



/**
* @function append
* @param {} func
* @param {} params
*/

function append(func, params) {
		var script = $('<script>(' + func.toString() + ')(' + (typeof params == "object" ? JSON.stringify(params) : params) + ')</script>');
		$('body').append(script);
}

let appendToPage = function(userPreferences) {




/**
* Add the inSum logo
* @function addInsumLogo
*/

function addInsumLogo() {

	let $insumButton = $('.a-Header-col.a-Header-col--right').append('<button type="button" id="in-logo" class="a-Button a-Button--noLabel a-Button--iconTextButton a-Button--noUI a-Button--navLink js-menuButton a-Button--accountMenu"><image style="height:20px;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABYCAYAAAAKsfL4AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH4QccEzoIjDEd0gAAA31JREFUeNrt2k9Ik3Ecx/HvM5zS3HRbGraJMkk2u8hKghFeDOZFOgRSgvTnogieFLKDHQIPJiRdTShP7WYQIbiDQQOhKMkSbcscyHwwN9l0+swp7telDbPI+Tz792yf983B8/js99pvz/P8nnErYR971PuQxDQx8ZwjJCkFhgAAAEAAAAACAAAQAACAAAAABAAAoMzEMcYwCpgBAEAAAAACAABQhisqxDfNC34Wje3T3uE+8RF/4nV9cRlpizWJv01qY9p/dFAUPhAoEA2KuhlI5gDTvf//tRkNDX8Oega8u2v0IbBA5pjztLtgRERuhZ1u1rZSndpIZcrSx2dLtA9SdiO2Evaxya+3RG3cb3OdOEDenbW07v8otE/4yfiIn+ZDHmLBsbR+csvP9dFlXQNZ9RauYL+C4oP+JeQhHz+U0f+9tTFKMxtEHsMga668RAZVJVcwAG/W3rH3gQXSCo6sH4uPHyIHT+RW2Nm9uutkq2zk8hKAF/zM5Z9LfNK1OXZ85piTZpedNMV3sJ769qRnRFGuf8UshL6zFyuvxZxAs5JWcJBj3kFdTdOkUarkfR/w7GMrm13ulc3g/3EBMfeE8YKfyRpAzpljTnLM36CTEACQ5k5CAECGEDajoWEAZLGn314OhA8EAORaAMjg5ekU72IAyPJdc14sRaQqTtf912vpXsQrOIBqwyBVlOioTm0komSWuDsTS+jrkQCtCuspXejz7qyxo8eQVwBuhZ2uVV2hGlUVVZ2pEP08QaNUkUap4kxqI9mokcKGZhr/MclSMTte+d5Sn6Uzv2YAp+umO6a2lD4oOQ7SZ+nklrausqnF25L2xYJjtBltG44fq2wB4g9ELmhquGQWvVJRQ7mJq26appHFCSZlKXx1d31A1gBdTdMZG/R/zYb7F+9yI4skGuFTcImseou8LkPdCju1mMep3+bK2uAfR3Ar7KK239oYlc85wK2wU099O/VLfPaaDoSe+naacYtbKo8v0OU0QIt5POcG/mhWvYWb+f3LidO2tO3N/RlgzeHBl1rkcA93wtnME16V10k4X8MMyFLB6DZmQCoKqTpEbacVHKQVHACQWq36vKTtASAxU6kRAHIOAAAAAAIAABAAAIAAAAAEAAAgAAAAAQAACAAAQAAAAAIAABAAAIAAAAAEAAAgAAAAAQAACAAAQAAAAJLQL4pcMzh4pdIjAAAAAElFTkSuQmCC"><image></button>');


	$('body').append('<div id="INSUM_button_menu" class="a-Menu" style="position: absolute; top: 39px; right:20px; display: none;" tabindex="-1" role="menu">	  <div class="a-Menu-content"><ul id="INSUM_button_menu_ul"></ul></div></div>');

	//console.log($insumButton);

	let isInClick = false;
	$('#in-logo').on('click.inClick', function(e) {
		// e.preventDefault();
		// console.log('Insum logo clicked');
		$("#INSUM_button_menu").toggle();
		isInClick = true;
	});

	$('body').on('click.inClick', function(e) {
		if(!isInClick) {
			$('#INSUM_button_menu').hide();
		}
		isInClick = false;
	});
	window.INSUMCOUNTER = window.INSUMCOUNTER || 1;

	$('#INSUM_button_menu').on('click',function(e) {
		e.stopPropagation();
	});
}

/**
 * @callback toggleChangeCallback
 * @param {object} thisObject 'this' is passed into the function
 * @param {(string|Number|Boolean)} thisValue value for 'this.value' is sent to the callback
*/

/**
* This function adds toggle options to IN dropdown menu on page designer.
*	@function addOptionToINMenu
* @param {string} label Label for toggle button
* @param {string} on_label Lable for toggle button True value
* @param {string} off_label Lable for toggle button False value
* @param {(string|number|boolean)} on_value internal value when toggle is on
* @param {(string|Number|Boolean)} off_value internal value when toggle is off
* @param {(string|Number|Boolean)} on_value internal value when toggle is on
* @param {Number} default_value default value (0 or 1; 0: off, 1: on) of the toggle when user first uses the extension
* @param {toggleChangeCallback} callback callback function handles the onchange response for change of value.
*/
function addOptionToINMenu(label, on_label, off_label, on_value, off_value, default_value, callback){
	if(window.INSUMCOUNTER > 1){
		//$('#INSUM_button_menu_ul').append('<hr>');
	}

	let $fieldset = $("#INSUM_button_menu_ul").append(`<li id="INSUM_menu_li_${window.INSUMCOUNTER}"><div style="padding: 10px"><label style="margin-right:4px;color:#666;">${label}</label><fieldset id="INSUM_SWITCH_${window.INSUMCOUNTER}_fieldset" data-INSUMapexProID=${window.INSUMCOUNTER} class="apex-button-group apex-item-yes-no" style="float:right; transform:translateY(-15%)"><legend class="u-VisuallyHidden">switch_label</legend><input type="radio" id="INSUM_SWITCH_${window.INSUMCOUNTER}_Y" name="INSUM_SWITCH_${window.INSUMCOUNTER}_NOSUBMIT" value=${on_value} required="" aria-required="true" onclick="$x_Value('INSUM_SWITCH_${window.INSUMCOUNTER}',this.value);setSwitchSelectionBackground(this);"><label for="INSUM_SWITCH_${window.INSUMCOUNTER}_Y" class="a-Button">${on_label}</label><input type="radio" id="INSUM_SWITCH_${window.INSUMCOUNTER}_N" name="INSUM_SWITCH_${window.INSUMCOUNTER}_NOSUBMIT" value="${off_value}" required="" aria-required="true" onclick="$x_Value('INSUM_SWITCH_${window.INSUMCOUNTER}',this.value);setSwitchSelectionBackground(this);"><label for="INSUM_SWITCH_${window.INSUMCOUNTER}_N" class="a-Button">${off_label}</label><input type="hidden" name="INSUM_SWITCH" value="${default_value}" id="INSUM_SWITCH_${window.INSUMCOUNTER}" autocomplete="off"></fieldset></div></li>`);

	default_value == 1 ? $(`#INSUM_SWITCH_${window.INSUMCOUNTER}_Y`).prop("checked", true) : $(`#INSUM_SWITCH_${window.INSUMCOUNTER}_N`).prop("checked", true);

	$('#INSUM_button_menu div').css('background-color','#F8F8F8');

	$(`#INSUM_SWITCH_${window.INSUMCOUNTER}`).on('change', function(){
			callback(this, this.value);
	});

	window.INSUMCOUNTER += 1;
}


/**
 *
 * This function fixes a bug wherein, after a user clicks a selection switch from INSUM_button_menu,
 * the background-color doesn't change immediately.
 * So we change the background-color ourselves.
 * @function setSwitchSelectionBackground
 * @param {object} me The DOM input that was clicked
 */
window.setSwitchSelectionBackground = function setSwitchSelectionBackground(me) {
	let currentApex = parseFloat((gApexVersion[0] + gApexVersion[1] + gApexVersion[2]));

	if(currentApex >= 5.1) {
		$(me).next().css('background-color', '#D0D0D0');
		if($(me).val() == '0') {
			$(me).prev().css('background-color', 'rgb(249,249,249)');
		} else {
			$(me).next().next().next().css('background-color', 'rgb(249,249,249)');
		}
	}
}

addInsumLogo();


//IAPPrefs stands for Insum-Apex-Pro Preferences
(function( IAPPrefs ) {

		IAPPrefs.setPreference =  function(cname, cvalue) {
			userPreferences[cname] = cvalue;
			var message = {isInsumApexProMessage: true, keyval: {'key': cname, 'val': cvalue} };
			window.postMessage(JSON.stringify(message), '*');
		}


		IAPPrefs.getPreference = function(name){
				return userPreferences[name];
		}

}( window.IAPPrefs = window.IAPPrefs || {} ));

//SAP stands for "show altered properties"
(function(SAP) {
		SAP.allData = null;
		let html = $('body').html();
		SAP.version = html.match(/gApexVersion[\r\n\s\t]*=[\r\n\s\t]*"([^"]+)"/)[1];
		SAP.version = parseFloat(SAP.version.substr(0,3));
		SAP.language = html.match(/gLanguage[\r\n\s\t]*=[\r\n\s\t]*"([^")]+)"/)[1];
		SAP.sessionId = $('[name="p_instance"]').val();
		SAP.currentNodes = []; //currentNodes is the HTML nodes under consideration
		SAP.currentProps = [];
		SAP.currentComponentTypeId = -1;
		SAP.currentComponentId = -1
		SAP.hideDefaultItems = false;
		SAP.highlightNonDefaults = true;
		SAP.isResettingFromGotoPageFeature = false;
		createFilterButton();
		createHighlightButton();
		createMutationObserver();
		listenForChangesToCompAndCompType();
		initOrResetAllData();

		$(document).ready(function(){
				// alert('page is loading');
				var filterCookie = IAPPrefs.getPreference('firstFilter');
				if (!filterCookie){
						IAPPrefs.setPreference('firstFilter',0); // Checks to see if non defaults only has been toggled
						SAP.hideDefaultItems = false;
						// alert('non default values are not exclusive by default.')
				}else if (filterCookie == 1) {
					$('#pe_showNonDefaults').css('background-color','#DEEFFB');
					$('#pe_showNonDefaults').css('border','1px solid #B6DAF6');
					SAP.hideDefaultItems = true;

				}else{
					$('#pe_showNonDefaults').css('background-color','#FFFFFF');
					$('#pe_showNonDefaults').css('border','none');
					SAP.hideDefaultItems = false;
				}
				var highlightCookie = IAPPrefs.getPreference('highlightToggle');
				// alert(highlightCookie);
				if (highlightCookie ){
						// alert('highlightCookie = false');
						SAP.highlightNonDefaults = true;
						IAPPrefs.setPreference('highlightToggle',1); // Checks to see if highlighting has been toggled
						$('#pe_toggleNonDefaults').css('background-color','#DEEFFB');
						$('#pe_toggleNonDefaults').css('border','1px solid #B6DAF6');
						// alert('highlightCookie set to true');
						// alert('Default values set');
				}else if (highlightCookie == true) {
					// alert('highlightCookie = 1');
					SAP.highlightNonDefaults = true;
					$('#pe_toggleNonDefaults').css('background-color','#DEEFFB');
					$('#pe_toggleNonDefaults').css('border','1px solid #B6DAF6');

				}else{
					// alert('highlightCookie = 0');
					SAP.highlightNonDefaults = true;
					$('#pe_toggleNonDefaults').css('background-color','#DEEFFB');
					$('#pe_toggleNonDefaults').css('border','none');
				}
		}) ;


		$('body').on('change','#go_to_page',
			function() {
				SAP.currentComponentTypeId = pe.COMP_TYPE['PAGE'];
				SAP.isResettingFromGotoPageFeature = true;
				initOrResetAllData();
			}
		);


		/**
		* @function listenForChangesToCompAndCompType
		*/
		function listenForChangesToCompAndCompType() {
				$(document).bind('selectionChanged',function(e,name,components) {
					if(components && components.length) {
						let comp = components[0];
						SAP.currentComponentId = comp.id;
						SAP.currentComponentTypeId = comp.typeId;
					}
			});
		}

		/**
		* This function creates the "Filter Defaults" button
		* @function createFilterButton
		*/
		function createFilterButton() {
			$('#peToolbar .a-Toolbar-items.a-Toolbar-items--left').append('<button class="a-Button a-Button--noLabel a-Button--withIcon" ' +
																																		'onclick="void(0);" aria-label="Show Non-Defaults Only" type="button" '+
																																		'id="pe_showNonDefaults" title="Show Non-Defaults Only">'+
																																		'<span style="color:black" class="a-Icon icon-irr-filter" aria-hidden="true">'+
																																		'</span></button>');

			$('#pe_showNonDefaults').bind('click', function() {
					SAP.hideDefaultItems = !SAP.hideDefaultItems; //Todo: have a button set this
							if(SAP.hideDefaultItems ) {
									$('#pe_showNonDefaults').css('background-color','#DEEFFB');
									$('#pe_showNonDefaults').css('border','1px solid #B6DAF6');
									IAPPrefs.setPreference('firstFilter',1);
									SAP.currentNodes = $('#peComponentProperties [data-property-id]').toArray();


									updatePropertyNodes();
							}else {
									$('#pe_showNonDefaults').css('background-color','#FFFFFF');
									$('#pe_showNonDefaults').css('border','none');
									IAPPrefs.setPreference('firstFilter',0);
									hideOrShowItems($('#peComponentProperties [data-property-id]').toArray(), [])
						 }
			});
		}

		/**
		* @function createHighlightButton
		*/
		function createHighlightButton() {
			$('#peToolbar .a-Toolbar-items.a-Toolbar-items--left').append('<button class="a-Button a-Button--noLabel a-Button--withIcon" ' +
																																		'onclick="void(0);" aria-label="Toggle Non-Defaults" type="button" ' +
																																		'id="pe_toggleNonDefaults" title="Toggle Non-Defaults">' +
																																		'<span style="color:black" class="a-Icon icon-edit" aria-hidden="true">'+
																																		'</span></button>');
			$('#pe_toggleNonDefaults').bind('click', function() {
					SAP.highlightNonDefaults = !SAP.highlightNonDefaults;
							if(SAP.highlightNonDefaults ) {
									$('#pe_toggleNonDefaults').css('background-color','#DEEFFB');
									$('#pe_toggleNonDefaults').css('border','1px solid #B6DAF6');

									SAP.currentNodes = $('#peComponentProperties [data-property-id]').toArray();


									updatePropertyNodes();
									// alert('now highlighting non-default values');
									IAPPrefs.setPreference('highlightToggle',1);
							}else{
									$('#pe_toggleNonDefaults').css('background-color','#FFFFFF');
									$('#pe_toggleNonDefaults').css('border','none');

									//Remove all highlighting
									addOrRemoveHighlighting([], $('#peComponentProperties [data-property-id]').toArray());


									IAPPrefs.setPreference('highlightToggle',0);
					}
			});
		}

	/**
	* @function deReferenceProps
	* @param {} properties
	*/
	function deReferenceProps(properties) {
		//console.log('properties to dereferenc:', properties);
			for (var key in properties) {
					let defaultValue = properties[key].defaultValue;
					let placeDefaultBack = false;
					let infiniteLoopCheck = 0;
					if (defaultValue.indexOf('#DEFAULT#') != -1) {
							defaultValue = defaultValue.replace('#DEFAULT#', '');
							placeDefaultBack = true;
					}
					let val;
					while (val = defaultValue.match(/#\w+#/)) { //while a match exists, set val to the match
							defaultValue = defaultValue.replace(/#\w+#/, attemptDeReference(val[0])) + ':';
							infiniteLoopCheck++;
							if (infiniteLoopCheck > 20) {
									//OOPS!
									console.warn('ERROR: Infinite Loop in attempting to de-reference', properties[key], val);
									break;
							}
					}
					if (placeDefaultBack) {
							defaultValue = "#DEFAULT#:" + defaultValue;
					}

					if(properties[key].propertyId == pe.PROP['FIRE_ON_PAGE_LOAD'])  {//Assumption "Fire on page load" is only for DA's
						//console.log('Fire on Page Load');
						//console.log('SAP.allData', SAP.allData);
						//console.log('SAP.allData[pe.COMP_TYPE['DA_ACTION']].pluginType', SAP.allData[pe.COMP_TYPE['DA_ACTION']].pluginType);
						//console.log('propties[key]', properties[key]);
						lPlugin = SAP.allData[pe.COMP_TYPE['DA_ACTION']].pluginType.plugins[$('[data-property-id="'+pe.PROP['DA_ACTION_TYPE']+'"]').val()];
						if(lPlugin) {
							if ( $.inArray( "ONLOAD", lPlugin.features ) !== -1 ) {
										defaultValue = "Y";
								} else {
										defaultValue = "N";
								}
						}
					}



					properties[key].defaultValue = defaultValue.replace(/\:+$/,'');//Get rid of any colons at the end.
					properties[key].defaultValue = properties[key].defaultValue.replace(/[\:]{2,}/,':');//Get rid of any double colons

					/*if(properties[key].propertyId == pe.PROP['REGION_TEMPLATE']) {
						//console.log('arrived at PROP['REGION_TEMPLATE']', pe.getRegionTemplate(SAP.currentComponentId))
						properties[key].defaultValue = pe.getRegionTemplate(SAP.currentComponentId).id;
					}*/

					/*
						HARD CODED DEFAULTS! Note: these defaults are hardcoded for any of the below reasons:
						Reason 1: The default value provided by pe is not intuitive to the user
						Reason 2: I coudln't find where in the code the default value is being set
						Reason 3: The default was set by a callback in pe.callback.js o
					*/
					//
					if(properties[key].propertyId == pe.PROP['SOURCE_TYPE']) { // set SOURCE_TYPE to STATIC, instead of SAP.allData's default which is DB_COLUMN.
						properties[key].defaultValue = 'ALWAYS_NULL';
					} else if(properties[key].propertyId == pe.PROP['SOURCE_USED']) { // set SOURCE_USED to 'YES', representing "Only when current value in session state is null"
						properties[key].defaultValue = 'YES';
					} else if(properties[key].propertyId == "14") { //We hardcode to 14 because "CURSOR_FOCUS" is not contained in pe.PROP
						properties[key].defaultValue = 'NO_FIRST_ITEM';
					} else if(properties[key].propertyId == "30") { //We hardcode to 14 because "FORM_AUTO_COMPLETE" is not contained in pe.PROP
						properties[key].defaultValue = 'OFF';
					} else if(properties[key].propertyId == pe.PROP["USER_INTERFACE"]) { //We cant find where this is being set
						properties[key].defaultValue = 'Desktop';
					}  else if(properties[key].propertyId == pe.PROP["PRINT_WIDTH"]) { //This is being set in a callback, it's easier just to hardcode for now
						properties[key].defaultValue = '8.5';
					} else if(properties[key].propertyId == pe.PROP["PRINT_HEIGHT"]) { //This is being set in a callback, it's easier just to hardcode for now
						properties[key].defaultValue = '11';
					} else if(properties[key].propertyId == pe.PROP["ELEMENT_HEIGHT"] && //This is being set in a callback for some component types but not others
										$.inArray(SAP.currentComponentType, [pe.COMP_TYPE['RICH_TEXT_EDITOR'],
																												 pe.COMP_TYPE['TEXTAREA'],
																												 pe.COMP_TYPE['SHUTTLE']]) != -1) {
						properties[key].defaultValue = '5';
					}

			 }
			//console.log('properties dereferenced:', properties);
			return properties;
	}

	/**
	* @function attemptDeReference
	* @param {} val
	*/
	function attemptDeReference(val) {
			let all = pe.getAll();
			let currentPageId = pe.getCurrentPageId();
			let page = pe.COMP_TYPE.PAGE;
			let userInterface = pe.PROP.USER_INTERFACE;
			let gCurrentUserInterface =
					all.sharedComponents.userInterfaces[all.components[page][currentPageId].getProperty(userInterface).getValue()];



			switch (val) {
					case "#PAGE_ID#":
							return currentPageId;
					case "#PLEASE_CHANGE#":
							return format("PLACEHOLDER.PLEASE_CHANGE");
					case "#PRINT_LINK_TEXT#":
							return format("PLACEHOLDER.PRINT_LINK_TEXT");
					case "#DEFAULT_REGION_TEMPLATE#":
							return pe.getTheme().defaultTemplates.region;
					case "#DEFAULT_FIELD_TEMPLATE#":
							return pe.getTheme().defaultTemplates.field;
					case "#DEFAULT_BUTTON_TEMPLATE#":
							return pe.getTheme().defaultTemplates.button;
					case "#DEFAULT_REPORT_TEMPLATE#":
							return pe.getTheme().defaultTemplates.report;
					case "#DEFAULT_LIST_TEMPLATE#":
							return pe.getTheme().defaultTemplates.list;
					case "#DEFAULT_NAV_LIST_TEMPLATE#":
							return gCurrentUserInterface.navList.templateId || "";
					case "#DEFAULT_BREADCRUMB_TEMPLATE#":
							return pe.getTheme().defaultTemplates.breadcrumb;
					case "#DEFAULT_CALENDAR_TEMPLATE#":
							return pe.getTheme().defaultTemplates.calendar;
					case "#DEFAULT_NAV_LIST_POSITION#":
							return gCurrentUserInterface.navList.position || "";
			}
			//Still here? Then we are dealing with #PRESET_TEMPLATE_OPTIONS#
			//THANKS TO VINCENT MORNEAU for providing the means to a relatively easy solution.
			if (val == '#PRESET_TEMPLATE_OPTIONS#') {
					let templateId = $('[data-property-id="'+pe.PROP['REGION_TEMPLATE']+'"]').val();
					if(!templateId) {
						//Assume this is a template for "attributes" component of classic/interactive report/grid
						templateId = $('[data-property-id="'+411+'"]').val(); //NOTE: 411 is hardcoded beecuase I cannot find it in pe.PROP
					}

					//console.log('templateId', templateId);
					for(let templateTypeId in pe.getTheme().templates) {
						let template;
						if(template = pe.getTheme().templates[templateTypeId][templateId]) {
							//console.log('found match, templateTypeId', templateTypeId, 'templateId', templateId, 'template', template);
							if(!template.presetOptions) {
								return "";
							} else {
								let retString = "";
								for(let i = 0; i < template.presetOptions.length; i++){
									retString += template.presetOptions[i] + ":"
								}
								return retString;//.join(':');
							}
						}
					}
					return "";
			}
			return "";
	}

	/**
	* @function format
	* @param {} pKey
	*/
	function format(pKey) { //Copied from pe code
			var pattern = apex.lang.getMessage("MODEL." + pKey),
					args = [pattern].concat(Array.prototype.slice.call(arguments, 1));
			return apex.lang.format.apply(this, args);
	}

	/**
	* @function initOrResetAllData
	*/
	function initOrResetAllData() {
			SAP.allData = null;
			var interval = setInterval(function() {
					var cache = [];
					let allData = pe.getAll();
					if (allData && allData.componentTypes && allData.componentTypes[pe.COMP_TYPE['APPLICATION']]) {
							clearInterval(interval);
							SAP.allData = allData.componentTypes;
							if(SAP.isResettingFromGotoPageFeature) {
								SAP.isResettingFromGotoPageFeature = false;
								updatePropertyNodes();
							}
					} else {
							return;
					}
			}, 10);
	}


	/**
	* @function createMutationObserver
	*/
	function createMutationObserver() {
			let target = $('#peComponentProperties')[0];
			let observer = new MutationObserver(function(mutations) {
					//console.log(mutations);
					SAP.currentNodes = [];
					let addedNodes = [];
					for (var i = 0; i < mutations.length; i++) {
							let rslt;

							let hasDataPropertyId = false;
							hasDataPropertyId = $(mutations[i].target).data('property-id');
							if(hasDataPropertyId) {
								rslt = $(mutations[i].target);
							} else {
								rslt = $(mutations[i].target).find('[data-property-id]');
							}


							if (mutations[i].addedNodes.length) {

									if (rslt && rslt.length) {
											for (let j = 0; j < rslt.length; j++) {
													addedNodes.push((rslt[j]));
													let isBoundToChangeEvent;

													if($(rslt[j]).prop('tagName').toLowerCase() == 'div') {
														let $inputs = $(rslt[j]).find('input');
														isBoundToChangeEvent = $inputs.data('isBoundToChangeEvent');
														if(!isBoundToChangeEvent) {
															$inputs.bind('change', SAP.reactToChangeOfProperty);
															$inputs.data('isBoundToChangeEvent', true);
														}
													} else {
														isBoundToChangeEvent =$(rslt[j]).data('isBoundToChangeEvent');
														if(!isBoundToChangeEvent) {
															$(rslt[j]).bind('change', SAP.reactToChangeOfProperty);
															$(rslt[j]).data('isBoundToChangeEvent', true);
														}
													}
											}
									}
							}
					}

					//console.log(addedNodes);
					SAP.currentNodes = addedNodes;
					//console.log('SAP.currentNodes', SAP.currentNodes);
					if(SAP.allData && SAP.currentNodes.length) {
						updatePropertyNodes();
					} else if(!SAP.allData && ! SAP.waitForSAPInterval) {
							SAP.waitForSAPInterval = setInterval(function(){
								if(SAP.allData) {
									clearInterval(SAP.waitForSAPInterval);
									let loc = window.location.href;
									let compType;
									let compReg;
									let comp;
									if(compReg = loc.match(/([\d]+)\:([\d]+)$/)) {
										compType = compReg[1];
										comp = compReg[2];
									} else {
										comp = null;
										compType = pe.COMP_TYPE['PAGE'];
									}
									//console.log('first time running: compType', compType, 'comp', comp);
									SAP.currentComponentTypeId = compType;//This is our first time running, so we are looking at the page component
									SAP.currentComponentId = comp;//This is our first time running, so we are looking at the page component

									//console.log('SAP.currentNodes', SAP.currentNodes);
									updatePropertyNodes();
								}
							},10);
					}
			});

			let config = {
					childList: true,
					subtree: true
			};
			observer.observe(target, config);
	}



	SAP.reactToChangeOfProperty = function() {
		let toCheck = this;
		if(!$(this).data('property-id')) {
			toCheck = $(this).parents('[data-property-id]')[0];
		}

		if($(toCheck).data('property-id') == pe.PROP['REGION_TYPE']){
			return;
		}
		//console.log('change triggered for', toCheck)
		SAP.currentNodes = [toCheck];
		updatePropertyNodes();
	}



	/**
	* Assumption SAP.currentNodes is populated with the nodes we want to check
	* @function updatePropertyNodes
	*/
	function updatePropertyNodes() {
			getAllProperties();
			compareFieldsToDefaults();
			//addSelect2.convertSelectsToSelect2();
	}

	/**
	* This function first gets the currentComponentType and currentComponentTypeId
	* The function then sets SAP.currentProps to the properties contained in SAP.currentNodes. It also de-references those properties.
	* ASSSUMPTION: SAP.currentNodes is populated.
	* @function getAllProperties
	*/
	function getAllProperties() {

		let nonDefaultItems = [];
		SAP.currentProps = {};

		for (let j = 0; j < SAP.currentNodes.length; j++) {
				let node = SAP.currentNodes[j];
				//console.log(node);

				let propId = $(node).data('property-id');
				if (!propId) {
						console.warn('Error, undefined propId', node);
				}

				let key = SAP.currentComponentTypeId + '-' + propId;
				SAP.currentProps[key] = {};
				let prop = SAP.allData[SAP.currentComponentTypeId].properties[propId];

				if (!prop) {
						console.warn('Error! Property ' + propId + ', ComponentId ' + SAP.currentComponentTypeId + ', Not Found!');
				} else {
							SAP.currentProps[key].defaultValue = prop.defaultValue;
							SAP.currentProps[key].propertyId = prop.propertyId;
				}
		};
		//Now that we have all of the currentProps, we need to de-reference their substitution strings
		SAP.currentProps = deReferenceProps(SAP.currentProps);
	}

	/**
	* Assumption: SAP.currentProps and SAP.currentNodes have been correctly instantiated
	* @function compareFieldsToDefaults
	*/
	function compareFieldsToDefaults() {
			//console.log(SAP.currentNodes);
			let typeId = SAP.currentComponentTypeId;
			let allNonDefaultNodes = [];
			let allDefaultNodes = [];
			$.each(SAP.currentNodes, function() {
					let val = "";
					let id = $(this).data('property-id');
					switch ($(this).prop('tagName').toLowerCase()) {
							case 'input':
							case 'select':
							case 'textarea':
							case 'button':
									val = $(this).val();
									break;
							case 'div':
									//Check to see whether we are a radio or an array of checkboxes.
									if($(this).find('[type="radio"]').length) {
										let $checkedItem = $(this).find('input:checked');
										if ($checkedItem.length) {
												val = $checkedItem.val();
										}
									}
									else if ($(this).find('[type="checkbox"]').length) {
										//Scrape the values of each checkbox into an array, the join the array
										let arr = [];
										let tmp = $(this).find('[type="checkbox"]');
										val = $.each(tmp, function() {
											if($(this).prop('checked')) {
												arr.push($(this).val());
											}
										})
										val = arr.join(':');
										//console.log('Property for checkbox discovered: ', SAP.currentProps[typeId + '-' + id], 'scraped value', val);
									}
									else {
										console.warn('Error getting value, found new type of div?', this, $checkedItem);
								 }

									break;
					}




					//Okay, we have the value, and we have the default value. Let's compare.
					//console.log('Comparing property', SAP.currentProps[typeId + '-' + id], ' with node ', this, ' on property-id = ', id, ' component: ', typeId);
					//console.log('testing "SAP.currentProps[typeId + "-" + id].defaultValue"', SAP.currentProps[typeId + '-' + id].defaultValue, 'against', val)


					if (SAP.currentProps[typeId + '-' + id].defaultValue.trim() != ("" + val).trim()) {
							allNonDefaultNodes.push(this);
					} else {
							allDefaultNodes.push(this);
					}
			});

			//Now that we've made all of our comparisons, let's apply the highlighting
			//console.log('considering SAP.highlightNonDefaults', SAP.highlightNonDefaults, 'SAP.hideDefaultItems', SAP.hideDefaultItems)
			if(SAP.highlightNonDefaults) {
				addOrRemoveHighlighting(allNonDefaultNodes, allDefaultNodes);
			}
			if(SAP.hideDefaultItems) {
				hideOrShowItems(allNonDefaultNodes, allDefaultNodes);
			}
	}

	/**
	* @function addOrRemoveHighlighting
	* @param {} toHighlight
	* @param {} toDeHighlight
	*/
	function addOrRemoveHighlighting(toHighlight, toDeHighlight) {
		//console.log('allNonDefaultNodes', allNonDefaultNodes)
		$.each(toHighlight, function() {
			$(this).css('background-color','#FFFFFF');
			$(this).parent().parent().css('background-color', '#fcf8e3'); //This color is taken from https://v4-alpha.getbootstrap.com/components/alerts
			$(this).parent().parent().css('border', '1px solid #faf2cc'); //This color is also taken from there
																																		//The old colors were FFEFB1 and FFE065

			$(this).css('border', '1px solid #FFE065'); //Color is yellow
		});

		$.each(toDeHighlight, function() {
			//$(this).css('background-color','#FFFFFF');
			$(this).parent().parent().css('background-color', '#FFFFFF'); //Back to white
			$(this).parent().parent().css('border', ''); //No more color!
			$(this).css('border', ''); //Color is yellow
		});



	}

	/**
	* @function hideOrShowItems
	* @param {} toShow
	* @param {} toHide
	*/
	function hideOrShowItems(toShow, toHide) {

		$.each($('#peComponentProperties [data-property-id]'), function() {
			//debugger;
				for(let i = 0; i < toShow.length; i++) {
					let $outer = $(this).parent().parent();
					if(toShow[i] == this) {
						if($outer.data('isFilteredBecauseIsDefault')) {
							//console.log('arrived in finding what we want to show');
							$outer.css('display', '');
							$outer.data('isFilteredBecauseIsDefault', false);
						}
					}
				}

				for(let i = 0; i < toHide.length; i++) {
					let $outer = $(this).parent().parent();
					if(toHide[i] == this) {
						if($outer.css('display') == 'none') {
								continue;
						}
						$outer.css('display', 'none');
						$outer.data('isFilteredBecauseIsDefault', true);
					}
				}
		});

		$.each($('.a-PropertyEditor-propertyGroup'), function() {
				if(SAP.hideDefaultItems) {
					let countOfNonDefaults = $(this).find('.a-Property').filter(function() {
						if($(this).css('display').toLowerCase() == "none") {
								return false;
							} else if($(this).data('isFilteredBecauseIsDefault')){
								return false;
							}
							else {
								return true;
							}
						}).length;

						if(SAP.hideDefaultItems) {
							if(countOfNonDefaults == 0) {
								$(this).css('display','none')
							} else {
								$(this).css('display','');
							}
						}
				}
				else {
					$(this).css('display', '');
				}


			});

	}





})(window.SAP = window.SAP || {});








	/**
	* Make cursor persistent on selected property in property pane on page editor
	* @function focusLastSelectedProperty
	*/
	function focusLastSelectedProperty(){
		// Using getPreference and getPreference from builtin Apex functions
		if(IAPPrefs.getPreference("LastSeclectedPropCookie") == 1){
			// console.log('inside focusLastSelectedProperty');
			// get curretly selected property id
			var currentSelected = $(document.activeElement).data('property-id');
			// update currentSelected
			$(document).on('click.updateCurrentSelection', function(){
				let currentSelectedCheck = $(document.activeElement).data('property-id');
				if(currentSelectedCheck){
					currentSelected = currentSelectedCheck;
				}
				// console.log(currentSelected);
			});
			// register focus on selectionChanged event
			$(document).on('selectionChanged.focusOnPropAfterSelection', function(e, name, components){
				if(currentSelected &&
					$(`[data-property-id=${currentSelected}]`) &&
					$(`[data-property-id=${currentSelected}]`).parent() &&
					$(`[data-property-id=${currentSelected}]`).parent()[0]
				) {
					$(`[data-property-id=${currentSelected}]`).parents('.a-Property')[0].scrollIntoView();
					$(`[data-property-id=${currentSelected}]`).focus();
				}
			})
		}
		if(IAPPrefs.getPreference("LastSeclectedPropCookie") === null){
			IAPPrefs.setPreference("LastSeclectedPropCookie", 1);
			focusLastSelectedProperty();
		}
		if(IAPPrefs.getPreference("LastSeclectedPropCookie") == 0){
			$(document).off("click.updateCurrentSelection");
			$(document).off("selectionChanged.focusOnPropAfterSelection");
		}
	}

	focusLastSelectedProperty();

	// Add focusLastSelectedProperty selection to IN menu
	addOptionToINMenu(label="Focus Last Propery Selected", on_label="Enable", off_label="Disable", on_value=1, off_value=0, default_value=IAPPrefs.getPreference("LastSeclectedPropCookie"), callback=function(object, object_value, id){
		IAPPrefs.setPreference("LastSeclectedPropCookie", object_value);
		focusLastSelectedProperty();
		$(document).trigger("click.updateCurrentSelection");
	});

	/**
	* Make filter properties peristent over different components.
	* When the user selects different components on the rendering page the filter properties on
	* properties stay consistent.
	* @function persistentFocusProperties
	*/
	function persistentFocusProperties(){

			$(document).on('selectionChanged', function(e, name, component){
				var $filterInput = $("#pe > div.a-PropertyEditor-filter > input");
				$filterInput.val(window.textToFilter || "");
				$filterInput.trigger('keyup', {keyCode:13} );

				// set current value in filter
				// TODO remove dependency on currentFilter
				var currentFilter = $("#pe > div.a-PropertyEditor-filter > input").val();
				$("#pe > div.a-PropertyEditor-filter > input").on('keyup', function(){
						window.textToFilter = $(this).val();
					});
			});
	}

	if(SAP.version < 5.3) {
		persistentFocusProperties();
	}



	/**
	 * @function pageItemsToSubmit
	 * This function will mark items already selected red in the list upon invocation of popup
	 */
	function pageItemsToSubmit(){
		/*
			 Property-IDs:
			   215:
				 88: Affected Elements selection
				 "888122401495541038": Dynamic action execute PL/SQL code - Items to Return
				 "1811567115248315739": Dynamic action execute PL/SQL code - Items to Submit

				 **Update: We probably do not need these id's as we can just use the regex for the button.

			 Button IDs
			    There are many places on the page where that button ID is dynamically generated.
					So, we can use this RegExp "pe_\d+_lovBtn" for whiuch corresponding jQuery Selector
					is $("[id^=pe_][id$=lovBtn]").
			 Popup Values:
			 		'lovDlg_lovEntries' this is the id for the popup window from where we can get all the
					row and values.
		 */
		 $(document).on("selectionChanged.pageItemsToSubmit", function(e, name, component) {
		   $.each($("[id^=pe_][id$=lovBtn]"), function() {
		     $(this).on('click.pageItemsToSubmit', function() {
					 // this function is defined after this funtion
					 autoSearchPagePopupLov();
		       let currentValueInput;
		       let tdElement = $(this).parent().prev().children().val();
		       let intervalTimer;
		       if (tdElement.search(',') > -1) {
		         currentValueInput = tdElement.split(',');
		         intervalTimer = 0; // immediately check
		       } else if (tdElement.search(' ') > -1) {
		         currentValueInput = tdElement.split(' ');
		         intervalTimer = 30;
		       } else {
		         currentValueInput = tdElement;
		         intervalTimer = 30;
		       }
		       let intervalCounter = 0;
		       let interval = setInterval(function() {
		         $("#lovDlg_lovEntries > tbody").children().each(function() {
		           if (currentValueInput.indexOf($($(this).children()[0]).text()) > -1) {
		             $($($(this).children()[0]).children()[0]).css('color', 'red');
		             // console.log($($($(this).children()[0]).children()[0]).text());
		           }
		         });
		         // check if total iterations is 10 or not.
		         (intervalCounter === 10 || intervalTimer === 0) ? clearInterval(interval) : intervalCounter++;
		       }, intervalTimer);
		     });
		   });
		 });
	}

	pageItemsToSubmit();

	/**
	 * @function autoSearchPagePopupLov
	 * This function will trigger search on available items whenever user starts typing.
	 */
	function autoSearchPagePopupLov(){
		$("#lovDlg_search").on('keyup.autoSearchPagePopupLov', function(){
			$("#lovDlg_search_button").trigger('click');
		})
	}


//IAPSnippets - INSUM-APEX-PRO Snippets
(function( IAPSnippets) {
	createMutationObserver();

	IAPSnippets.editor = {};

	$('body').on('dialogclose', function() {
		destroyDecorationAndSnippet();
	});

	function createMutationObserver() {
			let target = $('body')[0];
			let observer = new MutationObserver(function(mutations) {
					for (var i = 0; i < mutations.length; i++) {
						if (mutations[i].addedNodes.length) {
							//console.log('got mutation', mutations[i]);
							for (let j = 0; j < mutations[i].addedNodes.length; j++) {
								var addedNode = mutations[i].addedNodes[j];
								//console.log(addedNode);
								//
								//
								$(addedNode).find('.ui-dialog-title').each(function() {
									//console.log('found ui-dialog-title', $(this).text());
									let text = $(this).text().trim();
									if(text == 'Code Editor - PL/SQL Code') {
										//console.log('Detected - Opened Pl/SQL Editor!');
										addSnippetListeners();

										//Break out of the loop by returning false;
										return false;
									}
								});
							}
						}
				}
			});

			let config = {
					childList: true,
					subtree: true
			};
			//console.log('observing', target);
			observer.observe(target, config);
	}


	function addSnippetListeners() {
		IAPSnippets.editor = $('.CodeMirror')[0].CodeMirror;
		IAPSnippets.editor.on('keyup', function(cm,e) {

			if(e.keyCode >= 38 && e.keyCode <= 40) { //Ignore arrow keys
				return;
			}

			if(e.keyCode == 13 && IAPSnippets.snippet) {
				undoNewLine();
				expandSnippet();
				e.stopPropagation();
				e.preventDefault();
				return;
			} else if (e.keyCode == 13) {
				return;
			}

			let suggestions = getSuggestions();
			if(!suggestions) {
				suggestions = [];
			}
			//if(suggestions && suggestions.length) {

			let cursor = IAPSnippets.editor.getCursor();
			let line = IAPSnippets.editor.getLine(cursor.line)
	    let start = cursor.ch;
			let end = cursor.ch;
	    while (start && /\w/.test(line.charAt(start - 1))) --start;
	    while (end < line.length && /\w/.test(line.charAt(end))) ++end;

			var options = {
				hint: function() {
					return {
						from: CodeMirror.Pos(cursor.line, start),
							to: CodeMirror.Pos(cursor.line, end),
						list: suggestions,
					}
				},
				completeSingle: false,
				alignWithWord: false
			};
			IAPSnippets.editor.showHint(options);
				//}
		});

		//Text decorations!
		IAPSnippets.editor.on('cursorActivity', function() {
			setTimeout(handleOverlayDecoration, 200);
		});

		IAPSnippets.editor.on('refresh', function() {
			destroyDecorationAndSnippet();
		});



	}

  function getSuggestions() {
		//console.log('inside getSuggestions');
		let allSuggestions = [];
		let doc = IAPSnippets.editor.doc
		let cursor = doc.getCursor();
		let currLine = cursor.line;
		let currCol = cursor.ch;

		var lineText = doc.getRange({line: currLine, ch: 0}, {line: currLine, ch: currCol});

		let lineWords = lineText.match(/[\w]+|\.|;|\(|\)/g);

	  if(!lineWords) {
	    return null;
	  }

		let wordMaxIndex = lineWords.length-1;

		//At least 2 words if The previous word is `.`
		//At least 1 word if the current word is `.`
		if ((lineWords[wordMaxIndex-1] == '.' && wordMaxIndex >= 2) ||
		    (lineWords[wordMaxIndex] == '.' ) && wordMaxIndex >= 1 ) {

				//convert to upper as that's how they're referenced in dataStore.json
				let prevWord = lineWords[wordMaxIndex] == '.' ? lineWords[wordMaxIndex-1] : lineWords[wordMaxIndex-2]
				prevWord = prevWord.toUpperCase();
				let doesPackageExist = packageExists(prevWord);

				//only get function list if there is an exact match of 1 to the prev token
				if (doesPackageExist){

						let packageObj = IAPSnippets.dbDataStore.packages[prevWord];

						let procedures = packageObj.procedures;
						for (proc of procedures){
							  if(stringStartsWith(proc, lineWords[wordMaxIndex]) ||
									 lineWords[wordMaxIndex] == '.') {
									allSuggestions.push(proc);
								}
						}

						let identifiers = packageObj.identifiers;
						for (ident of identifiers){
							if(stringStartsWith(ident, lineWords[wordMaxIndex]) ||
								 lineWords[wordMaxIndex] == '.') {
								allSuggestions.push(ident);
							}
						}
				}

				//Sometimes a procedure is in docDataStore but not in dbDataStore
				if(IAPSnippets.docDataStore[prevWord]) {
					procedures = Object.keys(IAPSnippets.docDataStore[prevWord]);
					console.log('procedures', procedures);
					for(let i = 0; i < procedures.length; i++) {
						if((stringStartsWith(procedures[i], lineWords[wordMaxIndex])  ||
							  lineWords[wordMaxIndex] == '.') &&
							  allSuggestions.indexOf(procedures[i]) == -1) {
							allSuggestions.push(procedures[i]);
						}
					}
				}
		}
		else if(lineWords[wordMaxIndex].length >= 2) {
				for (let keyword of IAPSnippets.dbDataStore.keywords){
						if (stringStartsWith(keyword, lineWords[wordMaxIndex])){
								//allSuggestions.push(IAPSnippets.getKeywordSuggestion(keyword, suggestInfo.prefix));
								allSuggestions.push(keyword);
						}
				}

				for (pkg in IAPSnippets.dbDataStore.packages){
						if (stringStartsWith(pkg, lineWords[wordMaxIndex])){
								allSuggestions.push(pkg);
						}
				}

				//Sometimes a package is in docDataStore but not in dbDataStore
				let packages = Object.keys(IAPSnippets.docDataStore);
				console.log('packages', packages);
				for(let i = 0; i < packages.length; i++) {
					if(stringStartsWith(packages[i], lineWords[wordMaxIndex]) &&
						 allSuggestions.indexOf(packages[i]) == -1) {
						allSuggestions.push(packages[i]);
					}
				}

		} else {
			return null;
		}

		if(allSuggestions.length == 1 &&
			lineWords[wordMaxIndex].toUpperCase() == allSuggestions[0].toUpperCase()) {
			allSuggestions = [];
		}

		let isLowerCase = lineWords[wordMaxIndex].charAt(0).match(/[a-z]/) || lineWords[wordMaxIndex] == '.';
		if(isLowerCase) {
			for(let i = 0; i < allSuggestions.length; i++) {
				allSuggestions[i] = allSuggestions[i].toLowerCase();
			}
		}

		return allSuggestions;
	}

	function handleOverlayDecoration() {

		// first check to see if we are inside of a function,
		// if so get the linetext of the line corresponding to the opening parenthesis
		let cursorIsInsideOfParetheses;


		let doc = IAPSnippets.editor.doc;

		let cursor = doc.getCursor();
		let currLine = cursor.line;
		let currCol = cursor.ch;

		var lineText = doc.getRange({line: currLine, ch: 0}, {line: currLine, ch: currCol});

		//console.log(lineText);
		let fullLastWord = getWordUnderCursor();


		if(fullLastWord) {
			//console.log(fullLastWord);
			fullLastWord = fullLastWord.match(/\w+/);
			if(fullLastWord && fullLastWord.length) {
				fullLastWord = fullLastWord[0];
			}
			 else {
				fullLastWord = null;
			}
		}


		let lineWords = lineText.match(/[\w]+|\./g);
		if(!lineWords || !lineWords.length) {
			destroyDecorationAndSnippet();
			return;
		}

		if(lineWords.length < 3) {
			destroyDecorationAndSnippet();
			return;
		}

		let wordMaxIndex = lineWords.length-1;
		if(fullLastWord) {
			lineWords[wordMaxIndex] = fullLastWord;
		}

		let packageName;
		let procName;
		let snippet;

		//console.log(lineWords);
		if(lineWords[wordMaxIndex -1] != '.') {
			destroyDecorationAndSnippet();
			return;
		} else {
			packageName = lineWords[wordMaxIndex-2].toUpperCase();
			procName = lineWords[wordMaxIndex].toUpperCase();
		}

		//console.log('lineWord', lineWords, 'packageName', packageName,'procName',procName);

		if(IAPSnippets.docDataStore[packageName] && IAPSnippets.docDataStore[packageName][procName]) {
			snippet = IAPSnippets.docDataStore[packageName][procName];
			//console.log(snippet);
		} else {
			destroyDecorationAndSnippet();
			return;
		}

		//console.log('Found Snippet Match!');
		let container = document.createElement('div');
		let pre = document.createElement('pre');
		pre.classList.add('overlay');
		pre.innerHTML = snippet.bodyFullText;
		pre.innerHTML += snippet.url ? '<br /><a href = ' + snippet.url + ' target="_blank">more..</a>' : '';

		container.appendChild(pre);

		$(container).on('click', expandSnippet);

		destroyDecorationAndSnippet();

		IAPSnippets.decoration = container;
		createDecorationMarker();
		IAPSnippets.snippet = snippet;
		//console.log('set decoration', IAPSnippets.decoration);

	}

	function createDecorationMarker(){
		let container = IAPSnippets.decoration;
		let textarea = $('#editorDlg-codeEditor textarea')[0];
		let coordinates = getCaretCoordinates(textarea, textarea.selectionEnd);
		let posTopLeft = $('#editorDlg-codeEditor textarea').offset();
		posTopLeft.top += coordinates.top+12;
		posTopLeft.left += coordinates.left;
		$(container).css('top', posTopLeft.top);
		$(container).css('left', posTopLeft.left);
		$(container).css('position', 'absolute');
		$(container).css('z-index', '9001');
		$(container).css('background-color', 'lightblue');
		$(container).css('font-size', '10px');
		$(container).find('pre').css('display', 'inline');

		$('body').append(container);
	}

	function destroyDecorationAndSnippet() {
		$(IAPSnippets.decoration).remove();
		IAPSnippets.snippet = null;
	}

	function expandSnippet() {
		//console.log('Arrived in expandSnippet');
		if(IAPSnippets.snippet) {
			let body = IAPSnippets.snippet.bodyNoDefault;
			body = body.trim();
			if(!body) {
				return;
			} else {

				//Get all whitespace before the first word, so we can maintain the proper indentation
				let doc = IAPSnippets.editor.doc;
				let cursor = doc.getCursor();
				let currLine = cursor.line;
				let currCol = cursor.ch;
				var lineText = doc.getLine(currLine);

				let lineTextLength = lineText.length;
				IAPSnippets.editor.setCursor( {line: currLine, ch:lineTextLength } );

				let startOfChopping = lineText.regexIndexOf(/[^a-zA-Z\.1-9]*$/);

				doc.setSelection({line:currLine,ch:startOfChopping},{line:currLine,ch:lineTextLength});

				doc.replaceSelection('');



				indentation = lineText.match(/^[\t\s]*/)[0];

				body = body.replace(/\n/g, '\n' + indentation);

				body = body.replace(/(\w+)\s*\=>\s*\$\d+/g, '$1 => $1');
				body = indentation + '  ' + body;
				doc.replaceSelection('(\n' +
															 '\t' + body +
														 ' );');
				destroyDecorationAndSnippet();
			}
		}
	}

	//Undo's the new line that's created when the user hits the enter key
	function undoNewLine() {
		//Get all whitespace before the first word, so we can maintain the proper indentation
		let doc = IAPSnippets.editor.doc;
		let cursor = doc.getCursor();
		let currLine = cursor.line;
		let currCol = cursor.ch;
		var lineText = doc.getLine(currLine-1);
		let lastLineCol = lineText.length;

		let  = lineText.length;

		doc.setSelection({line:currLine-1,ch:lastLineCol},{line:currLine,ch:currCol});
		doc.replaceSelection('');

	}

	function getWordUnderCursor() {
		let word = IAPSnippets.editor.findWordAt(IAPSnippets.editor.getCursor());
		return IAPSnippets.editor.getRange(word.anchor, word.head);
	}

	function packageExists(prefix){
		for (pkg in IAPSnippets.dbDataStore.packages){
				if (pkg.toUpperCase() === prefix.toUpperCase()){
						return true;
				}
		}
		return false;
	}

	function stringStartsWith(str, testStr){
		if (!testStr){
				return false;
		}
		let compare1 = str.slice(0, testStr.length);
		let compare2 = testStr.toUpperCase();

		return compare1 == compare2;
	}

	String.prototype.regexIndexOf = function(regex, startpos) {
	    var indexOf = this.substring(startpos || 0).search(regex);
	    return (indexOf >= 0) ? (indexOf + (startpos || 0)) : indexOf;
	}

	}( window.IAPSnippets = window.IAPSnippets || {}));


}

///
//Get User Preferences
chrome.storage.sync.get("allKeys", function(allKeys) {
	allKeys = allKeys.allKeys;
	chrome.storage.sync.get(allKeys, function (allKeyValuesObj) {
			//console.log('allKeyValuesObj', allKeyValuesObj);

			var userPreferences = {};

			for(key in allKeys) {
				userPreferences[key] = allKeyValuesObj[key];
			}

			append(appendToPage, userPreferences);

	});


});


//IAPSelect2 - INSUM-APEX-PRO Select2
(function( IAPSelect2) {

	createMutationObserver();

	function createMutationObserver() {
			let target = $('body')[0];
			let observer = new MutationObserver(function(mutations) {
					for (var i = 0; i < mutations.length; i++) {
						if (mutations[i].addedNodes.length) {
							//console.log('got mutation', mutations[i]);
							for (let j = 0; j < mutations[i].addedNodes.length; j++) {
								var addedNode = mutations[i].addedNodes[j];
								//console.log(addedNode);
								$(addedNode).find('select').each(function() {
									if($(this).find('option').length > 6) {
										$(this).select2();
										//Trigger the change event for the node so that Apex knows the value has changed
										//TODO: Make sure it has an id, if it doesn't then we'll have to find it some other way.
										$(this).on("select2:select", function (e) {
											//console.log(this,'changed');
											$(this).trigger('change');
											append(function(idObj) {
												$('#'+idObj.id).trigger('change');
											}, {id: $(this)[0].id} );
										});
									}

								});
							}
						}
				}
			});

			let config = {
					childList: true,
					subtree: true
			};
			//console.log('observing', target);
			observer.observe(target, config);
	}


}( window.IAPSelect2 = window.IAPSelect2 || {} ));




window.addEventListener("message", function(e) {
	//console.log('Got message ', e.data);
	try {
		let data = JSON.parse(e.data);
		if(data.isInsumApexProMessage) {
			let key = data.keyval.key;
			let val = data.keyval.val;
			chrome.storage.sync.set({key: val}, function() {
				chrome.storage.sync.get('allKeys', function(allKeys) {
					if(!allKeys.allKeys) {
						allKeys.allKeys = {};
					}
					allKeys = allKeys.allKeys;
					allKeys[key] = val;
					//console.log('setting allkeys to: ', allKeys );
					chrome.storage.sync.set({'allKeys': allKeys});
				});

			});
		}
	} catch(err) {

	}
}, false);
