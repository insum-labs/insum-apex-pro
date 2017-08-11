console.log('Running Apex Property Highlighter');

/**
* @function append
* @param {} func
* @param {} params
*/

function append(func, params) {
		var script = $('<script>(' + func.toString() + ')(' + (typeof params == "object" ? JSON.stringify(params) : params) + ')</script>');
		$('body').append(script);
}

let appendToPage = function() {

/**
* Add the inSum logo
* @function addInsumLogo
*/

function addInsumLogo() {

	let $insumButton = $('.a-Header-col.a-Header-col--right').append('<button type="button" id="in-logo" class="a-Button a-Button--noLabel a-Button--iconTextButton a-Button--noUI a-Button--navLink js-menuButton a-Button--accountMenu"><image style="height:20px;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABYCAYAAAAKsfL4AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH4QccEzoIjDEd0gAAA31JREFUeNrt2k9Ik3Ecx/HvM5zS3HRbGraJMkk2u8hKghFeDOZFOgRSgvTnogieFLKDHQIPJiRdTShP7WYQIbiDQQOhKMkSbcscyHwwN9l0+swp7telDbPI+Tz792yf983B8/js99pvz/P8nnErYR971PuQxDQx8ZwjJCkFhgAAAEAAAAACAAAQAACAAAAABAAAoMzEMcYwCpgBAEAAAAACAABQhisqxDfNC34Wje3T3uE+8RF/4nV9cRlpizWJv01qY9p/dFAUPhAoEA2KuhlI5gDTvf//tRkNDX8Oega8u2v0IbBA5pjztLtgRERuhZ1u1rZSndpIZcrSx2dLtA9SdiO2Evaxya+3RG3cb3OdOEDenbW07v8otE/4yfiIn+ZDHmLBsbR+csvP9dFlXQNZ9RauYL+C4oP+JeQhHz+U0f+9tTFKMxtEHsMga668RAZVJVcwAG/W3rH3gQXSCo6sH4uPHyIHT+RW2Nm9uutkq2zk8hKAF/zM5Z9LfNK1OXZ85piTZpedNMV3sJ769qRnRFGuf8UshL6zFyuvxZxAs5JWcJBj3kFdTdOkUarkfR/w7GMrm13ulc3g/3EBMfeE8YKfyRpAzpljTnLM36CTEACQ5k5CAECGEDajoWEAZLGn314OhA8EAORaAMjg5ekU72IAyPJdc14sRaQqTtf912vpXsQrOIBqwyBVlOioTm0komSWuDsTS+jrkQCtCuspXejz7qyxo8eQVwBuhZ2uVV2hGlUVVZ2pEP08QaNUkUap4kxqI9mokcKGZhr/MclSMTte+d5Sn6Uzv2YAp+umO6a2lD4oOQ7SZ+nklrausqnF25L2xYJjtBltG44fq2wB4g9ELmhquGQWvVJRQ7mJq26appHFCSZlKXx1d31A1gBdTdMZG/R/zYb7F+9yI4skGuFTcImseou8LkPdCju1mMep3+bK2uAfR3Ar7KK239oYlc85wK2wU099O/VLfPaaDoSe+naacYtbKo8v0OU0QIt5POcG/mhWvYWb+f3LidO2tO3N/RlgzeHBl1rkcA93wtnME16V10k4X8MMyFLB6DZmQCoKqTpEbacVHKQVHACQWq36vKTtASAxU6kRAHIOAAAAAAIAABAAAIAAAAAEAAAgAAAAAQAACAAAQAAAAAIAABAAAIAAAAAEAAAgAAAAAQAACAAAQAAAAJLQL4pcMzh4pdIjAAAAAElFTkSuQmCC"><image></button>')

	$('body').append('<div id="INSUM_button_menu" class="a-Menu" style="position: absolute; top: 39px; right:20px; display: none;" tabindex="-1" role="menu">	  <div class="a-Menu-content"><ul id="INSUM_button_menu_ul"></ul></div></div>');

	$insumButton.bind('click', function(e) {
		// e.preventDefault();
		console.log('Insum logo clicked');
		$("#INSUM_button_menu").toggle();
	})
	window.INSUMCOUNTER = window.INSUMCOUNTER || 1;
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
	let $fieldset = $("#INSUM_button_menu_ul").append(`<li><div style="padding: 10px"><label>${label}</label><fieldset id="INSUM_SWITCH_${window.INSUMCOUNTER}_fieldset" data-INSUMapexProID=${window.INSUMCOUNTER} class="apex-button-group apex-item-yes-no"><legend class="u-VisuallyHidden">switch_label</legend><input type="radio" id="INSUM_SWITCH_${window.INSUMCOUNTER}_Y" name="INSUM_SWITCH_${window.INSUMCOUNTER}_NOSUBMIT" value=${on_value} required="" aria-required="true" onclick="$x_Value('INSUM_SWITCH_${window.INSUMCOUNTER}',this.value)"><label for="INSUM_SWITCH_${window.INSUMCOUNTER}_Y" class="a-Button">${on_label}</label><input type="radio" id="INSUM_SWITCH_${window.INSUMCOUNTER}_N" name="INSUM_SWITCH_${window.INSUMCOUNTER}_NOSUBMIT" value="${off_value}" required="" aria-required="true" onclick="$x_Value('INSUM_SWITCH_${window.INSUMCOUNTER}',this.value)"><label for="INSUM_SWITCH_${window.INSUMCOUNTER}_N" class="a-Button">${off_label}</label><input type="hidden" name="INSUM_SWITCH" value="${default_value}" id="INSUM_SWITCH_${window.INSUMCOUNTER}" autocomplete="off"></fieldset></div></li>`);

	default_value == 1 ? $(`#INSUM_SWITCH_${window.INSUMCOUNTER}_Y`).prop("checked", true) : $(`#INSUM_SWITCH_${window.INSUMCOUNTER}_N`).prop("checked", true);

	$(`#INSUM_SWITCH_${window.INSUMCOUNTER}`).on('change', function(){
		callback(this, this.value);
	});

	window.INSUMCOUNTER += 1;
}

addInsumLogo();


//SAP stands for "show altered properties"
(function(SAP) {
		SAP.allData = null;
		let html = $('body').html();
		SAP.version = html.match(/gApexVersion[\r\n\s\t]*=[\r\n\s\t]*"([^"]+)"/)[1];
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
				var filterCookie = getCookie('firstFilter');
				if (!filterCookie){
						setCookie('firstFilter',0); // Checks to see if non defaults only has been toggled
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
				var highlightCookie = getCookie('highlightToggle');
				// alert(highlightCookie);
				if (highlightCookie ){
						// alert('highlightCookie = false');
						SAP.highlightNonDefaults = true;
						setCookie('highlightToggle',1); // Checks to see if highlighting has been toggled
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
					SAP.highlightNonDefaults = false;
					$('#pe_toggleNonDefaults').css('background-color','#FFFFFF');
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
									setCookie('firstFilter',1);
									SAP.currentNodes = $('#peComponentProperties [data-property-id]').toArray();


									updatePropertyNodes();
							}else {
									$('#pe_showNonDefaults').css('background-color','#FFFFFF');
									$('#pe_showNonDefaults').css('border','none');
									setCookie('firstFilter',0);
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
									setCookie('highlightToggle',1);
							}else{
									$('#pe_toggleNonDefaults').css('background-color','#FFFFFF');
									$('#pe_toggleNonDefaults').css('border','none');

									//Remove all highlighting
									addOrRemoveHighlighting([], $('#peComponentProperties [data-property-id]').toArray());


									setCookie('highlightToggle',0);
					}
			});
		}

		/**
		* @function setCookie
		* @param {} cname
		* @param {} cvalue
		*/
		function setCookie(cname, cvalue) {
				document.cookie = cname + "=" + cvalue + ";" + "path=/";
		}

		/**
		* @function getCookie
		* @param {} name
		*/
		function getCookie(name){
				var pattern = RegExp(name + "=.[^;]*")
				matched = document.cookie.match(pattern)
				if(matched){
						var cookie = matched[0].split('=')
						return cookie[1]
				}
				return false
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
							},10)
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
		// Using GetCookie and SetCookie from builtin Apex functions
		if(window.GetCookie("LastSeclectedPropCookie") == 1){
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
				$(`[data-property-id=${currentSelected}]`).focus();
			})
		}
		if(window.GetCookie("LastSeclectedPropCookie") === null){
			window.SetCookie("LastSeclectedPropCookie", 1);
			focusLastSelectedProperty();
		}
		if(window.GetCookie("LastSeclectedPropCookie") == 0){
			$(document).off("click.updateCurrentSelection");
			$(document).off("selectionChanged.focusOnPropAfterSelection");
		}
	}

	focusLastSelectedProperty();

	// Add focusLastSelectedProperty selection to IN menu
	addOptionToINMenu(label="Focus Last Propery Selected", on_label="Enable", off_label="Disable", on_value=1, off_value=0, default_value=window.GetCookie("LastSeclectedPropCookie"), callback=function(object, object_value, id){
		window.SetCookie("LastSeclectedPropCookie", object_value);
		focusLastSelectedProperty();
	});

	/**
	* Make filter properties peristent over different components.
	* When the user selects different components on the rendering page the filter properties on
	* properties stay consistent.
	* @function persistentFocusProperties
	*/
	function persistentFocusProperties(textToFilter){
		// console.log("inside persistentFocusProperties");
		if(window.GetCookie("PersistentFocusCookie") == 1){
			$(document).on('selectionChanged.PersistentFocus_1', function(e, name, component){
				// set current value in filter
				// TODO remove dependency on currentFilter
				var currentFilter = $("#pe > div.a-PropertyEditor-filter > input").val();
				$("#pe > div.a-PropertyEditor-filter > input").on('keyup', function(){
						currentFilter = $(this).val();
						textToFilter = currentFilter;
						console.log(currentFilter);
					});

			});

			$(document).on('selectionChanged.PersistentFocus_2', function(e, name, component){
				if(textToFilter != undefined || textToFilter != ""){
					$("#pe > div.a-PropertyEditor-filter > input").val(textToFilter);
					$("#pe > div.a-PropertyEditor-filter > input").trigger('keyup', {keyCode: 13});
				}
			});
		}
		if(window.GetCookie("PersistentFocusCookie") === null){
			window.SetCookie("PersistentFocusCookie", 1);
			persistentFocusProperties(window.textToFilter = window.textToFilter || "");
		}
		if(window.GetCookie("PersistentFocusCookie") == 0){
			$(document).off("selectionChanged.PersistentFocus_1");
			$(document).off("selectionChanged.PersistentFocus_2");
		}
	}

	persistentFocusProperties(window.textToFilter = window.textToFilter || "");

	// Add persistentFocusProperties selection to IN menu
	addOptionToINMenu(label="Persistent Filter Properties", on_label="Enable", off_label="Disable", on_value=1, off_value=0, default_value=window.GetCookie("PersistentFocusCookie"), callback=function(object, object_value, id){
		window.SetCookie("PersistentFocusCookie", object_value);
		persistentFocusProperties(window.textToFilter = window.textToFilter || "");
	});

}




append(appendToPage);
