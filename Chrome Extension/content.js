/*jshint esversion: 6*/
if (window.location.href.indexOf('wwv_flow.accept') != -1 &&
    !$('input[name="p_flow_id"][value="4000"],input[name="p_flow_id"]').length
) {
    //We are on an Apex URL, but this isn't an apex developer page.
    //e.g. http://*/*/wwv_flow.accept is only sometimes a developer page. It can be arrived from a user.
    //So we must exit
} else {

    consoleThankYouMessage();
    /**
     * @function append
     * @param {} func
     * @param {} params
     */

    function append(func, params) {
        //console.log('trace inside append for content.js')
        var script = $('<script>(' + func.toString() + ')(' + (typeof params == "object" ? JSON.stringify(params) : params) + ')</script>');
        //$('body').append(script);
        $(document.documentElement).append(script);
    }



    let isRunningOnPageDesigner;
    isRunningOnPageDesigner = $('input[name="p_flow_id"][value="4000"]').length != 0 &&
        $('input[name="p_flow_step_id"][value="4500"]').length != 0;

    if (isRunningOnPageDesigner) {
        addPageDesignerCode();
    }

    function addPageDesignerCode() {

        let appendToPage = function(userPreferences) {

            /**
             * Add the inSum logo
             * @function addInsumLogo
             */

            function addInsumLogo() {

                let $insumButton = $('.a-Header-col.a-Header-col--right').append('<button type="button" id="in-logo" class="a-Button a-Button--noLabel a-Button--iconTextButton a-Button--noUI a-Button--navLink js-menuButton a-Button--accountMenu"><image style="height:20px;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABYCAYAAAAKsfL4AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH4QccEzoIjDEd0gAAA31JREFUeNrt2k9Ik3Ecx/HvM5zS3HRbGraJMkk2u8hKghFeDOZFOgRSgvTnogieFLKDHQIPJiRdTShP7WYQIbiDQQOhKMkSbcscyHwwN9l0+swp7telDbPI+Tz792yf983B8/js99pvz/P8nnErYR971PuQxDQx8ZwjJCkFhgAAAEAAAAACAAAQAACAAAAABAAAoMzEMcYwCpgBAEAAAAACAABQhisqxDfNC34Wje3T3uE+8RF/4nV9cRlpizWJv01qY9p/dFAUPhAoEA2KuhlI5gDTvf//tRkNDX8Oega8u2v0IbBA5pjztLtgRERuhZ1u1rZSndpIZcrSx2dLtA9SdiO2Evaxya+3RG3cb3OdOEDenbW07v8otE/4yfiIn+ZDHmLBsbR+csvP9dFlXQNZ9RauYL+C4oP+JeQhHz+U0f+9tTFKMxtEHsMga668RAZVJVcwAG/W3rH3gQXSCo6sH4uPHyIHT+RW2Nm9uutkq2zk8hKAF/zM5Z9LfNK1OXZ85piTZpedNMV3sJ769qRnRFGuf8UshL6zFyuvxZxAs5JWcJBj3kFdTdOkUarkfR/w7GMrm13ulc3g/3EBMfeE8YKfyRpAzpljTnLM36CTEACQ5k5CAECGEDajoWEAZLGn314OhA8EAORaAMjg5ekU72IAyPJdc14sRaQqTtf912vpXsQrOIBqwyBVlOioTm0komSWuDsTS+jrkQCtCuspXejz7qyxo8eQVwBuhZ2uVV2hGlUVVZ2pEP08QaNUkUap4kxqI9mokcKGZhr/MclSMTte+d5Sn6Uzv2YAp+umO6a2lD4oOQ7SZ+nklrausqnF25L2xYJjtBltG44fq2wB4g9ELmhquGQWvVJRQ7mJq26appHFCSZlKXx1d31A1gBdTdMZG/R/zYb7F+9yI4skGuFTcImseou8LkPdCju1mMep3+bK2uAfR3Ar7KK239oYlc85wK2wU099O/VLfPaaDoSe+naacYtbKo8v0OU0QIt5POcG/mhWvYWb+f3LidO2tO3N/RlgzeHBl1rkcA93wtnME16V10k4X8MMyFLB6DZmQCoKqTpEbacVHKQVHACQWq36vKTtASAxU6kRAHIOAAAAAAIAABAAAIAAAAAEAAAgAAAAAQAACAAAQAAAAAIAABAAAIAAAAAEAAAgAAAAAQAACAAAQAAAAJLQL4pcMzh4pdIjAAAAAElFTkSuQmCC"><image></button>');


                $('body').append('<div id="INSUM_button_menu" class="a-Menu" style="position: absolute; top: 39px; right:20px; display: none;" tabindex="-1" role="menu">	  <div class="a-Menu-content"><ul id="INSUM_button_menu_ul"></ul></div></div>');

                let isInClick = false;
                $('#in-logo').on('click.inClick', function(e) {
                    // e.preventDefault();
                    // console.log('Insum logo clicked');
                    $("#INSUM_button_menu").toggle();
                    isInClick = true;
                });

                $('body').on('click.inClick', function(e) {
                    if (!isInClick) {
                        $('#INSUM_button_menu').hide();
                    }
                    isInClick = false;
                });
                window.INSUMCOUNTER = window.INSUMCOUNTER || 1;

                $('#INSUM_button_menu').on('click', function(e) {
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
            function addOptionToINMenu(label, on_label, off_label, on_value, off_value, default_value, callback) {
                if (window.INSUMCOUNTER > 1) {
                    //$('#INSUM_button_menu_ul').append('<hr>');
                }

                let $fieldset = $("#INSUM_button_menu_ul").append(`<li id="INSUM_menu_li_${window.INSUMCOUNTER}"><div style="padding: 10px"><label style="margin-right:4px;color:#666;">${label}</label><fieldset id="INSUM_SWITCH_${window.INSUMCOUNTER}_fieldset" data-INSUMapexProID=${window.INSUMCOUNTER} class="apex-button-group apex-item-yes-no" style="float:right; transform:translateY(-15%)"><legend class="u-VisuallyHidden">switch_label</legend><input type="radio" id="INSUM_SWITCH_${window.INSUMCOUNTER}_Y" name="INSUM_SWITCH_${window.INSUMCOUNTER}_NOSUBMIT" value=${on_value} required="" aria-required="true" onclick="$x_Value('INSUM_SWITCH_${window.INSUMCOUNTER}',this.value);setSwitchSelectionBackground(this);"><label for="INSUM_SWITCH_${window.INSUMCOUNTER}_Y" class="a-Button">${on_label}</label><input type="radio" id="INSUM_SWITCH_${window.INSUMCOUNTER}_N" name="INSUM_SWITCH_${window.INSUMCOUNTER}_NOSUBMIT" value="${off_value}" required="" aria-required="true" onclick="$x_Value('INSUM_SWITCH_${window.INSUMCOUNTER}',this.value);setSwitchSelectionBackground(this);"><label for="INSUM_SWITCH_${window.INSUMCOUNTER}_N" class="a-Button">${off_label}</label><input type="hidden" name="INSUM_SWITCH" value="${default_value}" id="INSUM_SWITCH_${window.INSUMCOUNTER}" autocomplete="off"></fieldset></div></li>`);

                default_value == 1 ? $(`#INSUM_SWITCH_${window.INSUMCOUNTER}_Y`).prop("checked", true) : $(`#INSUM_SWITCH_${window.INSUMCOUNTER}_N`).prop("checked", true);

                $('#INSUM_button_menu div').css('background-color', '#F8F8F8');

                $(`#INSUM_SWITCH_${window.INSUMCOUNTER}`).on('change', function() {
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

                if (currentApex >= 5.1) {
                    $(me).next().css('background-color', '#D0D0D0');
                    if ($(me).val() == '0') {
                        $(me).prev().css('background-color', 'rgb(249,249,249)');
                    } else {
                        $(me).next().next().next().css('background-color', 'rgb(249,249,249)');
                    }
                }
            }

            addInsumLogo();


            //IAPPrefs stands for Insum-Apex-Pro Preferences
            (function(IAPPrefs) {

                IAPPrefs.setPreference = function(cname, cvalue) {
                    userPreferences[cname] = cvalue;
                    var message = {
                        isInsumApexProMessage: true,
                        keyval: {
                            'key': cname,
                            'val': cvalue
                        }
                    };
                    window.postMessage(JSON.stringify(message), '*');
                }


                IAPPrefs.getPreference = function(name) {
                    return userPreferences[name];
                }

            }(window.IAPPrefs = window.IAPPrefs || {}));

            //SAP stands for "show altered properties"
            window.SAP = {};
            (function() {
                SAP.allData = null;
                SAP.version = parseFloat(gApexVersion[0] + gApexVersion[1] + gApexVersion[2]);
                SAP.language = gBuilderLang;
                SAP.sessionId = $('[name="p_instance"]').val();
                SAP.currentNodes = []; //currentNodes is the HTML nodes under consideration
                SAP.currentProps = [];
                SAP.currentComponentTypeId = -1;
                SAP.currentComponentId = -1
                SAP.hideDefaultItems = false;
                SAP.highlightNonDefaults = true;
                SAP.isResettingFromGotoPageFeature = false;
                SAP.colorMode = null;
                SAP.buttonColorWhenActive = null;
                SAP.backgroundColorForHighlighted = null;
                SAP.nuetralBackgroundColor = null;
                createFilterButton();
                createMutationObserver();
                listenForChangesToCompAndCompType();
                initOrResetAllData();

                // Get initial state of SAP.hideDefaultItems and SAP.highlightNonDefaults
                // Also, apply the appropriate css as a result
                $(document).ready(function() {

                    $('body').on('click','.js-ui-mode-btn',setColorMode);
                    setColorMode();
                });

                function setColorMode() {
                    if($('body.apex-theme-standard,body.apex-theme-standard-auto').length > 0) {
                        SAP.colorMode = 'White';
                    } else if($('body.apex-theme-dark,body.apex-theme-dark-auto').length) {
                        SAP.colorMode = 'Dark';
                    } else {
                        //Compatibility with older versions of APEX (as of 20.2)
                        if($('.a-Header-accountDialog-switcher').length == 0) {
                            SAP.colorMode = 'White';
                        } else {
                            SAP.colorMode = ($('.a-Header-accountDialog-switcher.is-off').length == 0 ? 'Dark' : 'White');
                        }
                    }


                    //console.log('Ready - Trace - SAP.colorMode', SAP.colorMode);
                    //console.log($('.a-Header-accountDialog-switcher.is-off'));
                    SAP.buttonColorWhenActive = (SAP.colorMode == 'Dark' ? 'silver' : '#DEEFFB');
                    SAP.backgroundColorForHighlighted = (SAP.colorMode == 'Dark' ? '#656565' : '#fcf8e3');
                    SAP.nuetralBackgroundColor = (SAP.colorMode == 'Dark' ? '#47484a' : '#fcf8e3');
                    //SAP.borderColor = (SAP.colorMode == 'Dark' ? '#656565' : 'lightorange');
                    SAP.boxShadow = 'unset';
                    SAP.nuetralBoxShadow = (SAP.colorMode == 'Dark' ? 'unset' : 'unset');
                    addHighlitingStyleSheet();

                    var filterCookie = IAPPrefs.getPreference('firstFilter');
                    if (!filterCookie) {
                        IAPPrefs.setPreference('firstFilter', 0); // Checks to see if non defaults only has been toggled
                        SAP.hideDefaultItems = false;
                        // alert('non default values are not exclusive by default.')
                    } else if (filterCookie == 1) {
                        $('#pe_showNonDefaults').css('background-color', SAP.buttonColorWhenActive);
                        SAP.hideDefaultItems = true;
                    } else {
                        $('#pe_showNonDefaults').css('background-color', 'rgba(0,0,0,0)');
                        SAP.hideDefaultItems = false;
                    }
                    var highlightCookie = IAPPrefs.getPreference('highlightToggle');
                    //console.log('highlight cookie in document ready', highlightCookie);
                    IAPPrefs.setPreference('highlightToggle', 1); // Checks to see if highlighting has been toggled
                    SAP.highlightNonDefaults = true;

                }

                //Anytime we got to a different page from the #go_to_page element, we must restart
                $('body').on('change', '#go_to_page',
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
                    $(document).bind('selectionChanged', function(e, name, components) {
                        if (components && components.length) {
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
                    $('#peToolbar .a-Toolbar-items.a-Toolbar-items--left,' + //5.1
                      '#peMainToolbar .a-Toolbar-items.a-Toolbar-items--left').append('<button class="a-Button a-Button--noLabel a-Button--withIcon" ' +
                        'onclick="void(0);" aria-label="Show Non-Defaults Only" type="button" ' +
                        'id="pe_showNonDefaults" title="Show Non-Defaults Only">' +
                        '<span style="color:black" class="a-Icon icon-irr-filter" aria-hidden="true">' +
                        '</span></button>');

                    $('#pe_showNonDefaults').bind('click', function() {
                        SAP.hideDefaultItems = !SAP.hideDefaultItems; //Todo: have a button set this
                        if (SAP.hideDefaultItems) {
                            $('#pe_showNonDefaults').css('background-color', SAP.buttonColorWhenActive);
                            IAPPrefs.setPreference('firstFilter', 1);
                            SAP.currentNodes = $('#peComponentProperties [data-property-id]').toArray();


                            updatePropertyNodes();
                        } else {
                            $('#pe_showNonDefaults').css('background-color', 'rgba(0,0,0,0)');
                            IAPPrefs.setPreference('firstFilter', 0);
                            hideOrShowItems($('#peComponentProperties [data-property-id]').toArray(), [])
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

                        if (properties[key].propertyId == pe.PROP['FIRE_ON_PAGE_LOAD']) {
                            //Assumption "Fire on page load" is only for DA's
                            //console.log('Fire on Page Load');
                            //console.log('SAP.allData', SAP.allData);
                            //console.log('SAP.allData[pe.COMP_TYPE['DA_ACTION']].pluginType', SAP.allData[pe.COMP_TYPE['DA_ACTION']].pluginType);
                            //console.log('propties[key]', properties[key]);
                            lPlugin = SAP.allData[pe.COMP_TYPE['DA_ACTION']].pluginType.plugins[$('[data-property-id="' + pe.PROP['DA_ACTION_TYPE'] + '"]').val()];
                            if (lPlugin) {
                                if ($.inArray("ONLOAD", lPlugin.features) !== -1) {
                                    defaultValue = "Y";
                                } else {
                                    defaultValue = "N";
                                }
                            }
                        }



                        properties[key].defaultValue = defaultValue.replace(/\:+$/, ''); //Get rid of any colons at the end.
                        properties[key].defaultValue = properties[key].defaultValue.replace(/[\:]{2,}/, ':'); //Get rid of any double colons

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
                        if (properties[key].propertyId == pe.PROP['SOURCE_TYPE']) { // set SOURCE_TYPE to STATIC, instead of SAP.allData's default which is DB_COLUMN.
                            properties[key].defaultValue = 'ALWAYS_NULL';
                        } else if (properties[key].propertyId == pe.PROP['SOURCE_USED']) { // set SOURCE_USED to 'YES', representing "Only when current value in session state is null"
                            properties[key].defaultValue = 'YES';
                        } else if (properties[key].propertyId == "14") { //We hardcode to 14 because "CURSOR_FOCUS" is not contained in pe.PROP
                            properties[key].defaultValue = 'NO_FIRST_ITEM';
                        } else if (properties[key].propertyId == "30") { //We hardcode to 30 because "FORM_AUTO_COMPLETE" is not contained in pe.PROP
                            properties[key].defaultValue = 'OFF';
                        } else if (properties[key].propertyId == pe.PROP["USER_INTERFACE"]) { //We cant find where this is being set
                            properties[key].defaultValue = 'Desktop';
                        } else if (properties[key].propertyId == pe.PROP["PRINT_WIDTH"]) { //This is being set in a callback, it's easier just to hardcode for now
                            properties[key].defaultValue = '8.5';
                        } else if (properties[key].propertyId == pe.PROP["PRINT_HEIGHT"]) { //This is being set in a callback, it's easier just to hardcode for now
                            properties[key].defaultValue = '11';
                        } else if (properties[key].propertyId == pe.PROP["ELEMENT_HEIGHT"] && //This is being set in a callback for some component types but not others
                            $.inArray(SAP.currentComponentType, [pe.COMP_TYPE['RICH_TEXT_EDITOR'],
                                pe.COMP_TYPE['TEXTAREA'],
                                pe.COMP_TYPE['SHUTTLE']
                            ]) != -1) {
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
                    let gCurrentUserInterface;
                    try {
                        // The following properties are accessible in the Page Designer of APEX versions < 22.2
                        let userInterface = pe.PROP.USER_INTERFACE;
                        gCurrentUserInterface =
                            all.sharedComponents.userInterfaces[all.components[page][currentPageId].getProperty(userInterface).getValue()];
                        //console.log("legacy userInterfaces property was used");
                    } catch (e) {
                        if (e instanceof TypeError) {
                            // For APEX versions >= 22.2 the following property should be used instead
                            gCurrentUserInterface = all.sharedComponents.userInterface;
                            //console.log("new APEX 22.2 userInterface property was used");
                        } else {
                            throw e;
                        }
                    }



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
                        let templateId = $('[data-property-id="' + pe.PROP['REGION_TEMPLATE'] + '"]').val();
                        if (!templateId) {
                            //Assume this is a template for "attributes" component of classic/interactive report/grid
                            templateId = $('[data-property-id="' + 411 + '"]').val(); //NOTE: 411 is hardcoded beecuase I cannot find it in pe.PROP
                        }

                        //console.log('templateId', templateId);
                        for (let templateTypeId in pe.getTheme().templates) {
                            let template;
                            if (template = pe.getTheme().templates[templateTypeId][templateId]) {
                                //console.log('found match, templateTypeId', templateTypeId, 'templateId', templateId, 'template', template);
                                if (!template.presetOptions) {
                                    return "";
                                } else {
                                    let retString = "";
                                    for (let i = 0; i < template.presetOptions.length; i++) {
                                        retString += template.presetOptions[i] + ":"
                                    }
                                    return retString; //.join(':');
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
                            if (SAP.isResettingFromGotoPageFeature) {
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
                    let sharedComponentClicked = false;
                    let observer = new MutationObserver(function(mutations) {
                        //console.log(mutations);
                        SAP.currentNodes = [];
                        let addedNodes = [];
                        for (var i = 0; i < mutations.length; i++) {
                            let rslt;

                            let hasDataPropertyId = false;
                            hasDataPropertyId = $(mutations[i].target).data('property-id');
                            if (hasDataPropertyId) {
                                rslt = $(mutations[i].target);
                            } else {
                                rslt = $(mutations[i].target).find('[data-property-id]');
                            }

                            //console.log('mutations',mutations);
                            //console.log('rslt',rslt);

                            if (mutations[i].addedNodes.length) {

                                if (rslt && rslt.length) {
                                    //A little hack requested by Trent Schafer (way before he left Insum, lol)
                                    if($('#peMain_externalEdit').length == 1 && !sharedComponentClicked) {
                                        $('#peMain_externalEdit').click();

                                        //prevent the double-click bug
                                        sharedComponentClicked = true;
                                        window.setTimeout(function() {
                                            sharedComponentClicked = false;
                                        },500);
                                    }

                                    for (let j = 0; j < rslt.length; j++) {
                                        addedNodes.push((rslt[j]));
                                        let isBoundToChangeEvent;

                                        if ($(rslt[j]).prop('tagName').toLowerCase() == 'div') {
                                            let $inputs = $(rslt[j]).find('input');
                                            isBoundToChangeEvent = $inputs.data('isBoundToChangeEvent');
                                            if (!isBoundToChangeEvent) {
                                                $inputs.bind('change', SAP.reactToChangeOfProperty);
                                                $inputs.data('isBoundToChangeEvent', true);
                                            }
                                        } else {
                                            isBoundToChangeEvent = $(rslt[j]).data('isBoundToChangeEvent');
                                            if (!isBoundToChangeEvent) {
                                                $(rslt[j]).bind('change', SAP.reactToChangeOfProperty);
                                                $(rslt[j]).data('isBoundToChangeEvent', true);
                                            }
                                        }
                                    }
                                }
                            }
                        }

                        //console.log('addedNodes',addedNodes);
                        SAP.currentNodes = addedNodes;
                        //console.log('SAP.currentNodes', SAP.currentNodes);
                        if (SAP.allData && SAP.currentNodes.length) {
                            updatePropertyNodes();
                        } else if (!SAP.allData && !SAP.waitForSAPInterval) {
                            SAP.waitForSAPInterval = setInterval(function() {
                                if (SAP.allData) {
                                    clearInterval(SAP.waitForSAPInterval);
                                    let loc = window.location.href;
                                    let compType;
                                    let compReg;
                                    let comp;
                                    if (compReg = loc.match(/([\d]+)\:([\d]+)$/)) {
                                        compType = compReg[1];
                                        comp = compReg[2];
                                    } else {
                                        comp = null;
                                        compType = pe.COMP_TYPE['PAGE'];
                                    }
                                    //console.log('first time running: compType', compType, 'comp', comp);
                                    SAP.currentComponentTypeId = compType; //This is our first time running, so we are looking at the page component
                                    SAP.currentComponentId = comp; //This is our first time running, so we are looking at the page component

                                    //console.log('SAP.currentNodes', SAP.currentNodes);
                                    updatePropertyNodes();
                                }
                            }, 10);
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
                    if (!$(this).data('property-id')) {
                        toCheck = $(this).parents('[data-property-id]')[0];
                    }

                    //console.log('change triggered for', toCheck)
                    SAP.currentNodes = [toCheck];
                    updatePropertyNodes();
                }

                function addHighlitingStyleSheet() {
                  $('head').append(
                    `
                     <style type="text/css">
                       .iap-highlighted-div {
                         background-color: ` + SAP.backgroundColorForHighlighted + ` !important;
                       }

                       .iap-highlighted-field {
                         background-color: ` + SAP.nuetralBackgroundColor + ` !important;
                         /*border-bottom: 1px solid ` + SAP.borderColor + ` !important;*/
                         box-shadow: unset !important;
                       }
                     </style>
                    `
                  );

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
                            //console.warn('Error! Property ' + propId + ', ComponentId ' + SAP.currentComponentTypeId + ', Not Found!');
                            SAP.currentProps[key].defaultValue = "";
                            SAP.currentProps[key].propertyId = "";
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
                        //var isDebugField = $(this).prop('type') == 'checkbox';
                        let val = "";
                        let id = $(this).data('property-id');
                        if(id == 97) {
                            //Ignore 97 "Sequence" (its always non-default and so uninteresting)
                            return;
                        }
                        switch ($(this).prop('tagName').toLowerCase()) {
                            case 'input':
                            case 'select':
                            case 'textarea':
                            case 'button':
                                if($(this).prop('type') == 'checkbox') {
                                    if($(this).prop('checked') == true) {
                                        val = $(this).val()
                                    } else {
                                        if($(this).val() == 'Y') {
                                            val = 'N'
                                        }else {
                                            val = '';
                                        }
                                    }
                                } else {
                                    val = $(this).val();
                                }
                                break;
                            case 'div':
                                //Check to see whether we are a radio or an array of checkboxes.
                                if ($(this).find('[type="radio"]').length) {
                                    let $checkedItem = $(this).find('input:checked');
                                    if ($checkedItem.length) {
                                        val = $checkedItem.val();
                                    }
                                } else if ($(this).find('[type="checkbox"]').length) {
                                    //Scrape the values of each checkbox into an array, the join the array
                                    let arr = [];
                                    let tmp = $(this).find('[type="checkbox"]');
                                    val = $.each(tmp, function() {
                                        if ($(this).prop('checked')) {
                                            arr.push($(this).val());
                                        }
                                    })
                                    val = arr.join(':');
                                    //console.log('Property for checkbox discovered: ', SAP.currentProps[typeId + '-' + id], 'scraped value', val);
                                } else {
                                    console.warn('Error getting value, found new type of div?', this, $checkedItem);
                                }

                                break;
                        }

                        /*
                        if(isDebugField) {
                            console.log('trace debug field','val',val);
                            console.log('$(this).prop(\'tagName\').toLowerCase()',$(this).prop('tagName').toLowerCase());
                            console.log('SAP.currentProps[typeId + \'-\' + id].defaultValue.trim()',SAP.currentProps[typeId + '-' + id].defaultValue.trim());
                            console.log('typeId',typeId);
                            console.log('id',id);
                            console.log('SAP.currentProps',SAP.currentProps);
                        }*/



                        //Okay, we have the value, and we have the default value. Let's compare.
                        //console.log('Comparing property', SAP.currentProps[typeId + '-' + id], ' with node ', this, ' on property-id = ', id, ' component: ', typeId);
                        //console.log('testing "SAP.currentProps[typeId + "-" + id].defaultValue"', SAP.currentProps[typeId + '-' + id].defaultValue, 'against', val)


                        if (SAP.currentProps[typeId + '-' + id].defaultValue.trim() != ("" + val).trim()) {
                            //console.log('trace b4 adding to nondefault nodes', this);
                            allNonDefaultNodes.push(this);
                        } else {
                            allDefaultNodes.push(this);
                        }
                    });

                    //Now that we've made all of our comparisons, let's apply the highlighting
                    //console.log('considering SAP.highlightNonDefaults', SAP.highlightNonDefaults, 'SAP.hideDefaultItems', SAP.hideDefaultItems)
                    if (SAP.highlightNonDefaults) {
                        addOrRemoveHighlighting(allNonDefaultNodes, allDefaultNodes);
                    }
                    if (SAP.hideDefaultItems) {
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
                        addHighlightClasses(this);
                    });

                    $.each(toDeHighlight, function() {
                        removeHighlightClasses(this)
                    });


                }

                function addHighlightClasses(el) {
                    $(el).addClass('iap-highlighted-field');


                    let $outsideDiv = $(el).parent().parent();
                    $outsideDiv.addClass('iap-highlighted-div');



                }

                function removeHighlightClasses(el) {
                  $(el).removeClass('iap-highlighted-field');

                  let $outsideDiv = $(el).parent().parent();
                  $outsideDiv.removeClass('iap-highlighted-div'); //Back to parent's color

                }

                /**
                 * @function hideOrShowItems
                 * @param {} toShow
                 * @param {} toHide
                 */
                function hideOrShowItems(toShow, toHide) {

                    $.each($('#peComponentProperties [data-property-id]'), function() {
                        //debugger;
                        for (let i = 0; i < toShow.length; i++) {
                            let $outer = $(this).parent().parent();
                            if (toShow[i] == this) {
                                if ($outer.data('isFilteredBecauseIsDefault')) {
                                    //console.log('arrived in finding what we want to show');
                                    $outer.css('display', '');
                                    $outer.data('isFilteredBecauseIsDefault', false);
                                }
                            }
                        }

                        for (let i = 0; i < toHide.length; i++) {
                            let $outer = $(this).parent().parent();
                            if (toHide[i] == this) {
                                if ($outer.css('display') == 'none') {
                                    continue;
                                }
                                $outer.css('display', 'none');
                                $outer.data('isFilteredBecauseIsDefault', true);
                            }
                        }
                    });

                    $.each($('.a-PropertyEditor-propertyGroup'), function() {
                        if (SAP.hideDefaultItems) {
                            let countOfNonDefaults = $(this).find('.a-Property').filter(function() {
                                if ($(this).css('display').toLowerCase() == "none") {
                                    return false;
                                } else if ($(this).data('isFilteredBecauseIsDefault')) {
                                    return false;
                                } else {
                                    return true;
                                }
                            }).length;

                            if (SAP.hideDefaultItems) {
                                if (countOfNonDefaults == 0) {
                                    $(this).css('display', 'none')
                                } else {
                                    $(this).css('display', '');
                                }
                            }
                        } else {
                            $(this).css('display', '');
                        }


                    });

                }




            })();




            /**
             * Make cursor persistent on selected property in property pane on page editor
             * @function focusLastSelectedProperty
             */
            function focusLastSelectedProperty() {

                // Using getPreference and getPreference from builtin Apex functions
                if (IAPPrefs.getPreference("LastSelectedPropCookie") == 1) {
                    // console.log('inside focusLastSelectedProperty');
                    // get curretly selected property id
                    //debugger
                    let currentSelected = $(document.activeElement).data('property-id');
                    let currentPosition;
                    if(currentSelected) {
                       currentPosition = $(document.activeElement)[0].getBoundingClientRect().top;
                    } else {
                      currentPosition = undefined;
                    }

                    // update currentSelected
                    $(document).on('click.updateCurrentSelection', '#pe .u-ScrollingViewport,' +
                                                                   '#peMain .u-ScrollingViewport', function() {
                        let currentSelectedCheck = $(document.activeElement).parents('.a-Property-fieldContainer').find('[data-property-id]').data('property-id');

                        if (currentSelectedCheck) {
                            currentSelected = currentSelectedCheck;
                            currentPosition = $(document.activeElement)[0].getBoundingClientRect().top;
                        }
                        // console.log(currentSelected);
                    });
                    // register focus on selectionChanged event
                    $(document).on('selectionChanged.focusOnPropAfterSelection', function(e, name, components) {
                        //debugger;
                        if (currentSelected &&
                            $(`[data-property-id=${currentSelected}]`) &&
                            $(`[data-property-id=${currentSelected}]`).parent() &&
                            $(`[data-property-id=${currentSelected}]`).parent()[0]
                        ) {
                            //Scroll the property item into view
                            $(`[data-property-id=${currentSelected}]`).parents('.a-Property')[0].scrollIntoView(true);
                            //Oftentimes the scrollbar gets scrolled as well when we do scrollIntoView(), so we make sure it's also in view
                            $('#peToolbar,#peMainToolbar')[0].scrollIntoView();
                            //Now we want to make its viewing position the same as the earlier property
                            $(`[data-property-id=${currentSelected}]`).focus();
                            $('#pe .u-ScrollingViewport,' +
                              '#peMain .u-ScrollingViewport')[0].scrollTop -= currentPosition - $(`[data-property-id=${currentSelected}]`)[0].getBoundingClientRect().top;
                            $(`[data-property-id=${currentSelected}]`).parents('.a-Property')[0].scrollIntoViewIfNeeded();

                        }
                        else
                        {
                          currentSelected = undefined;
                          currentPosition = undefined;
                        }
                    })
                }
                if (IAPPrefs.getPreference("LastSelectedPropCookie") == null) {
                    IAPPrefs.setPreference("LastSelectedPropCookie", 1);
                    focusLastSelectedProperty();
                }
                if (IAPPrefs.getPreference("LastSelectedPropCookie") == 0) {
                    $(document).off("click.updateCurrentSelection");
                    $(document).off("scroll.updateCurrentSelection");
                    $(document).off("selectionChanged.focusOnPropAfterSelection");
                }
            }

            focusLastSelectedProperty();

            // Add focusLastSelectedProperty selection to IN menu
            addOptionToINMenu(label = "Focus Last Propery Selected", on_label = "Enable", off_label = "Disable", on_value = 1, off_value = 0, default_value = IAPPrefs.getPreference("LastSelectedPropCookie"), callback = function(object, object_value, id) {
                IAPPrefs.setPreference("LastSelectedPropCookie", object_value);
                focusLastSelectedProperty();
                $(document).trigger("click.updateCurrentSelection");
            });

            /**
             * Make filter properties peristent over different components.
             * When the user selects different components on the rendering page the filter properties on
             * properties stay consistent.
             * @function persistentFocusProperties
             */
            function persistentFocusProperties() {

                $(document).on('selectionChanged', function(e, name, component) {
                    let filterStr = "#pe > div.a-PropertyEditor-filter > input," +
                                    "#peComponentProperties .a-PropertyEditor-filter input";
                    var $filterInput = $(filterStr);
                    $filterInput.val(window.textToFilter || "");
                    $filterInput.trigger('keyup', {
                        keyCode: 13
                    });

                    // set current value in filter
                    // TODO remove dependency on currentFilter
                    var currentFilter = $(filterStr).val();
                    $(filterStr).on('keyup', function() {
                        window.textToFilter = $(this).val();
                    });
                });
            }

            if (SAP.version < 5.3) {
                persistentFocusProperties();
            }



            /**
             * @function pageItemsToSubmit
             * This function will mark items already selected red in the list upon invocation of popup
             */
            function pageItemsToSubmit() {
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
                    //console.log('registered selectionChanged');
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
                                (intervalCounter === 10 || intervalTimer === 0) ? clearInterval(interval): intervalCounter++;
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
            function autoSearchPagePopupLov() {
                $("#lovDlg_search").on('keyup.autoSearchPagePopupLov', function() {
                    $("#lovDlg_search_button").trigger('click');
                })
            }

            //IAPSnippets - INSUM-APEX-PRO Snippets
            (function(IAPSnippets) {
                createMutationObserver();

                IAPSnippets.editor = {};
                IAPSnippets.suggestions = [];



                $('body').on('dialogclose', function() {
                    IAPSnippets.destroyDecorationAndSnippet();
                });

                $('body').on('click', 'div[aria-describedby="editorDlg"]:has(.ui-dialog-title:contains("PL/SQL")) #editorDlg-codeEditor_autocomplete', function(e) {

                    IAPSnippets.destroyDecorationAndSnippet();
                    IAPPrefs.setPreference('autosuggest', IAPPrefs.getPreference('autosuggest') == 1 ? 0 : 1);
                    if (IAPPrefs.getPreference('autosuggest') == 1) {
                        IAPSnippets.cssOn(true);
                    } else {
                        IAPSnippets.cssOn(false);
                    }
                });

                $('body').on('keyup', function(e) {
                    if (e.keyCode == 27) { //escape key
                        if (IAPSnippets.snippet || IAPSnippets.suggestions.length > 0) {
                            IAPSnippets.destroyDecorationAndSnippet();
                            $('#editorDlg-codeEditor textarea').focus();
                            IAPSnippets.suggestions = [];
                        }
                    }
                });

                IAPSnippets.cssOn = function(isOn) {
                    if (isOn) {
                        $('#editorDlg-codeEditor_autocomplete').css('background-color', 'rgb(222, 239, 251)');
                        $('#editorDlg-codeEditor_autocomplete').prop('title', 'Autocomplete: Ctrl-Space\nAutodetect: On\n');
                    } else {
                        $('#editorDlg-codeEditor_autocomplete').css('background-color', '');
                        $('#editorDlg-codeEditor_autocomplete').prop('title', 'Autocomplete: Ctrl-Space\nAutodetect: Off\n');
                    }
                }

                function createMutationObserver() {
                    let target = $('body')[0];
                    let observer = new MutationObserver(function(mutations) {
                        for (var i = 0; i < mutations.length; i++) {
                            if (mutations[i].addedNodes.length) {
                                //console.log('got mutation', mutations[i]);
                                for (let j = 0; j < mutations[i].addedNodes.length; j++) {
                                    var addedNode = mutations[i].addedNodes[j];
                                    //console.log(addedNode);

                                    $(addedNode).find('.ui-dialog-title').each(function() {

                                        let text = $(this).text();
                                        //console.log(text);
                                        if ( text.indexOf('PL/SQL') != -1
                                           ) {
                                            $('#editorDlg-codeEditor_autocomplete').css('border-radius', '6px');
                                            if (IAPPrefs.getPreference('autosuggest') == undefined) {
                                                IAPPrefs.setPreference('autosuggest', 1);
                                            }
                                            if (IAPPrefs.getPreference('autosuggest')) {
                                                IAPPrefs.setPreference("autosuggest", 1);
                                                IAPSnippets.cssOn(true);
                                            } else {
                                                IAPSnippets.cssOn(false);
                                            }

                                            addSnippetListeners(text);

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
                    IAPSnippets.editor.on('keyup', function(cm, e) {
                        if (e.keyCode == 17) {
                            return;
                        }

                        if (IAPPrefs.getPreference('autosuggest') != 1 && !(e.keyCode == 32 && e.ctrlKey)) {
                            IAPSnippets.destroyDecorationAndSnippet();
                            return;
                        } else if (e.keyCode == 32 && e.ctrlKey) {
                            handleOverlayDecoration();
                        } else if (e.keyCode >= 38 && e.keyCode <= 40) { //Ignore arrow keys
                            IAPSnippets.suggestions = [];
                            return;
                        } else if (e.keyCode == 13 && IAPSnippets.snippet) {
                            let doc = IAPSnippets.editor.doc;
                            let cursor = doc.getCursor();
                            let currLine = cursor.line;
                            let lineText = doc.getLine(currLine);
                            if (lineText.trim() != "") {
                                return;
                            } else {
                                undoNewLine();
                            }
                            expandSnippet();
                            e.stopPropagation();
                            e.preventDefault();
                            return;
                        } else if (e.keyCode == 13) {
                            IAPSnippets.suggestions = [];
                            return;
                        }

                        IAPSnippets.suggestions = getSuggestions();
                        if (!IAPSnippets.suggestions) {
                            IAPSnippets.suggestions = [];
                        }

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
                                    list: IAPSnippets.suggestions,
                                }
                            },
                            completeSingle: false,
                            alignWithWord: false
                        };
                        IAPSnippets.editor.showHint(options);
                    });

                    //Text decorations!
                    IAPSnippets.editor.on('cursorActivity', function() {
                        //We set a timeout to wait for the cursor to update its position
                        //This is a weak solution, but there doesn't seem to be anything in the framework
                        //that let's us know when the cursor's position is updated.
                        if (IAPPrefs.getPreference('autosuggest') != 1) {
                            IAPSnippets.destroyDecorationAndSnippet();
                            return;
                        }
                        setTimeout(handleOverlayDecoration, 100);
                    });

                    IAPSnippets.editor.on('refresh', function() {
                        IAPSnippets.destroyDecorationAndSnippet();
                    });

                }

                function getSuggestions() {
                    //console.log('inside getSuggestions');
                    let allSuggestions = [];
                    let doc = IAPSnippets.editor.doc
                    let cursor = doc.getCursor();
                    let currLine = cursor.line;
                    let currCol = cursor.ch;

                    var lineText = doc.getRange({
                        line: currLine,
                        ch: 0
                    }, {
                        line: currLine,
                        ch: currCol
                    });

                    let lineWords = lineText.match(/[\w]+|\.|;|\(|\)/g);

                    if (!lineWords) {
                        return null;
                    }

                    let wordMaxIndex = lineWords.length - 1;

                    //At least 2 words if The previous word is `.`
                    //At least 1 word if the current word is `.`
                    if ((lineWords[wordMaxIndex - 1] == '.' && wordMaxIndex >= 2) ||
                        (lineWords[wordMaxIndex] == '.') && wordMaxIndex >= 1) {

                        //convert to upper as that's how they're referenced in dataStore.json
                        let prevWord = lineWords[wordMaxIndex] == '.' ? lineWords[wordMaxIndex - 1] : lineWords[wordMaxIndex - 2]
                        prevWord = prevWord.toUpperCase();
                        let doesPackageExist = packageExists(prevWord);

                        //only get function list if there is an exact match of 1 to the prev token
                        if (doesPackageExist) {

                            let packageObj = IAPSnippets.dbDataStore.packages[prevWord];

                            let procedures = packageObj.procedures;
                            for (proc of procedures) {
                                if (stringStartsWith(proc, lineWords[wordMaxIndex]) ||
                                    lineWords[wordMaxIndex] == '.') {
                                    allSuggestions.push(proc);
                                }
                            }

                            let identifiers = packageObj.identifiers;
                            for (ident of identifiers) {
                                if (stringStartsWith(ident, lineWords[wordMaxIndex]) ||
                                    lineWords[wordMaxIndex] == '.') {
                                    allSuggestions.push(ident);
                                }
                            }
                        }

                        //Sometimes a procedure is in docDataStore but not in dbDataStore
                        if (IAPSnippets.docDataStore[prevWord]) {
                            procedures = Object.keys(IAPSnippets.docDataStore[prevWord]);
                            //console.log('procedures', procedures);
                            for (let i = 0; i < procedures.length; i++) {
                                if ((stringStartsWith(procedures[i], lineWords[wordMaxIndex]) ||
                                        lineWords[wordMaxIndex] == '.') &&
                                    allSuggestions.indexOf(procedures[i]) == -1) {
                                    allSuggestions.push(procedures[i]);
                                }
                            }
                        }
                    } else if (lineWords[wordMaxIndex].length > 2) {
                        for (let keyword of IAPSnippets.dbDataStore.keywords) {
                            if (stringStartsWith(keyword, lineWords[wordMaxIndex])) {
                                //allSuggestions.push(IAPSnippets.getKeywordSuggestion(keyword, suggestInfo.prefix));
                                allSuggestions.push(keyword);
                            }
                        }

                        for (pkg in IAPSnippets.dbDataStore.packages) {
                            if (stringStartsWith(pkg, lineWords[wordMaxIndex])) {
                                allSuggestions.push(pkg);
                            }
                        }

                        //Sometimes a package is in docDataStore but not in dbDataStore
                        let packages = Object.keys(IAPSnippets.docDataStore);
                        //console.log('packages', packages);
                        for (let i = 0; i < packages.length; i++) {
                            if (stringStartsWith(packages[i], lineWords[wordMaxIndex]) &&
                                allSuggestions.indexOf(packages[i]) == -1) {
                                allSuggestions.push(packages[i]);
                            }
                        }

                    } else {
                        return null;
                    }

                    if (allSuggestions.length == 1 &&
                        lineWords[wordMaxIndex].toUpperCase() == allSuggestions[0].toUpperCase()) {
                        allSuggestions = [];
                    }

                    let isLowerCase = lineWords[wordMaxIndex].charAt(0).match(/[a-z]/) || lineWords[wordMaxIndex] == '.';
                    if (isLowerCase) {
                        for (let i = 0; i < allSuggestions.length; i++) {
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

                    var lineText = doc.getRange({
                        line: currLine,
                        ch: 0
                    }, {
                        line: currLine,
                        ch: currCol
                    });

                    //console.log(lineText);
                    let fullLastWord = getWordUnderCursor();


                    if (fullLastWord) {
                        //console.log(fullLastWord);
                        fullLastWord = fullLastWord.match(/\w+/);
                        if (fullLastWord && fullLastWord.length) {
                            fullLastWord = fullLastWord[0];
                        } else {
                            fullLastWord = null;
                        }
                    }


                    let lineWords = lineText.match(/[\w]+|\./g);
                    if (!lineWords || !lineWords.length) {
                        IAPSnippets.destroyDecorationAndSnippet();
                        return;
                    }

                    if (lineWords.length < 3) {
                        IAPSnippets.destroyDecorationAndSnippet();
                        return;
                    }

                    let wordMaxIndex = lineWords.length - 1;
                    if (fullLastWord) {
                        lineWords[wordMaxIndex] = fullLastWord;
                    }

                    let packageName;
                    let procName;
                    let snippet;

                    //console.log(lineWords);
                    if (lineWords[wordMaxIndex - 1] != '.') {
                        IAPSnippets.destroyDecorationAndSnippet();
                        return;
                    } else {
                        packageName = lineWords[wordMaxIndex - 2].toUpperCase();
                        procName = lineWords[wordMaxIndex].toUpperCase();
                    }

                    //console.log('lineWord', lineWords, 'packageName', packageName,'procName',procName);

                    if (IAPSnippets.docDataStore[packageName] && IAPSnippets.docDataStore[packageName][procName]) {
                        snippet = IAPSnippets.docDataStore[packageName][procName];
                        //console.log(snippet);
                    } else {
                        IAPSnippets.destroyDecorationAndSnippet();
                        return;
                    }

                    //console.log('Found Snippet Match!');
                    let container = document.createElement('div');
                    let pre = document.createElement('pre');
                    pre.classList.add('overlay');
                    pre.innerHTML = snippet.bodyFullText;
                    pre.innerHTML += snippet.url ? '<br /><a href = ' + snippet.url + ' target="_blank">see documentation</a>' : '';

                    container.appendChild(pre);

                    $(container).on('click', expandSnippet);

                    IAPSnippets.destroyDecorationAndSnippet();

                    IAPSnippets.decoration = container;
                    createDecorationMarker();
                    IAPSnippets.snippet = snippet;
                }

                function createDecorationMarker() {
                    let container = IAPSnippets.decoration;
                    let textarea = $('#editorDlg-codeEditor textarea')[0];
                    let coordinates = getCaretCoordinates(textarea, textarea.selectionEnd);
                    let posTopLeft = $('#editorDlg-codeEditor textarea').offset();
                    posTopLeft.top += coordinates.top + 12;
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

                IAPSnippets.destroyDecorationAndSnippet = function() {
                    $(IAPSnippets.decoration).remove();
                    IAPSnippets.snippet = null;
                }

                function regexIndexOf(str, regex, startpos) {
                    var indexOf = str.substring(startpos || 0).search(regex);
                    return (indexOf >= 0) ? (indexOf + (startpos || 0)) : indexOf;
                }

                function expandSnippet() {
                    //console.log('Arrived in expandSnippet');
                    if (IAPSnippets.snippet) {
                        let body = IAPSnippets.snippet.bodyNoDefault;
                        body = body.trim();
                        if (!body) {
                            return;
                        } else {

                            //Get all whitespace before the first word, so we can maintain the proper indentation
                            let doc = IAPSnippets.editor.doc;
                            let cursor = doc.getCursor();
                            let currLine = cursor.line;
                            let currCol = cursor.ch;
                            var lineText = doc.getLine(currLine);

                            let lineTextLength = lineText.length;
                            IAPSnippets.editor.setCursor({
                                line: currLine,
                                ch: lineTextLength
                            });

                            let startOfChopping = regexIndexOf(lineText, /[^a-zA-Z\.1-9]*$/);

                            doc.setSelection({
                                line: currLine,
                                ch: startOfChopping
                            }, {
                                line: currLine,
                                ch: lineTextLength
                            });

                            doc.replaceSelection('');



                            indentation = lineText.match(/^[\t\s]*/)[0];

                            body = body.replace(/\n/g, '\n' + indentation);

                            body = body.replace(/(\w+)\s*\=>\s*\$\d+/g, '$1 => $1');
                            body = indentation + '  ' + body;
                            doc.replaceSelection('(\n' +
                                '\t' + body +
                                ' );');
                            IAPSnippets.destroyDecorationAndSnippet();
                            IAPSnippets.suggestions = [];
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
                    let lastLineText = doc.getLine(currLine - 1);
                    let lastLineCol = lastLineText.length;

                    doc.setSelection({
                        line: currLine - 1,
                        ch: lastLineCol
                    }, {
                        line: currLine,
                        ch: currCol
                    });
                    doc.replaceSelection('');

                }

                function getWordUnderCursor() {
                    let word = IAPSnippets.editor.findWordAt(IAPSnippets.editor.getCursor());
                    return IAPSnippets.editor.getRange(word.anchor, word.head);
                }

                function packageExists(prefix) {
                    for (pkg in IAPSnippets.dbDataStore.packages) {
                        if (pkg.toUpperCase() === prefix.toUpperCase()) {
                            return true;
                        }
                    }
                    return false;
                }

                function stringStartsWith(str, testStr) {
                    if (!testStr) {
                        return false;
                    }
                    let compare1 = str.slice(0, testStr.length);
                    let compare2 = testStr.toUpperCase();

                    return compare1 == compare2;
                }

            }(window.IAPSnippets = window.IAPSnippets || {}));


        }

        ///
        //Get User Preferences
        chrome.storage.sync.get("allKeys", function(allKeys) {
            allKeys = allKeys.allKeys;
            chrome.storage.sync.get(allKeys, function(allKeyValuesObj) {
                //console.log('allKeyValuesObj', allKeyValuesObj);

                var userPreferences = {};
                for (key in allKeys) {
                    userPreferences[key] = allKeyValuesObj[key];
                }

                append(appendToPage, userPreferences);

            });


        });
    }


    //IAPSelect2 - INSUM-APEX-PRO Select2
    (function(IAPSelect2) {

        if (isRunningOnPageDesigner) {
            $('body').on('click','.js-ui-mode-btn',setColorMode);
            setColorMode();

			createMutationObserver();
      		$('body').find('select').each(function() {
      			makeSelect2(this);
      		});
        }

        function setColorMode() {
            if($('body.apex-theme-standard,body.apex-theme-standard-auto').length > 0) {
                IAPSelect2.colorMode = 'White';
            } else if($('body.apex-theme-dark,body.apex-theme-dark-auto').length) {
                IAPSelect2.colorMode = 'Dark';
            } else {
                //Compatibility with older versions of APEX (as of 20.2)
                if($('.a-Header-accountDialog-switcher').length == 0) {
                    IAPSelect2.colorMode = 'White';
                } else {
                    IAPSelect2.colorMode = ($('.a-Header-accountDialog-switcher.is-off').length == 0 ? 'Dark' : 'White');
                }
            }

            if(IAPSelect2.colorMode == 'Dark') {
              select2DarkModeCss();
            } else {
              $('link[href$="thirdParty/select2-adminlte.css"]').remove();
            }

            updatePropertyEditorWidths();


        }

        function select2DarkModeCss() {
          var link = document.createElement('link');
          link.href =  chrome.runtime.getURL('thirdParty/select2-adminlte.css');
          link.rel = 'stylesheet';
          document.getElementsByTagName("head")[0].appendChild(link);
        }

        function createMutationObserver() {
            let target = $('body')[0];
            let observer = new MutationObserver(function(mutations) {
                for (var i = 0; i < mutations.length; i++) {
                    if (mutations[i].addedNodes.length) {
                        //console.log('got mutation', mutations[i]);
                        let foundSelect2 = false;
                        for (let j = 0; j < mutations[i].addedNodes.length; j++) {
                            var addedNode = mutations[i].addedNodes[j];
                            $(addedNode).find('select').each(function() {
                                makeSelect2(this);
                                foundSelect2 = true;
                            });
                        }
                        if (isRunningOnPageDesigner && foundSelect2) {
                            append(function() {
                                window.updatePropertyEditorWidths()
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


        //Turns a select into a select2
        //Assumption: "me" is a select field
        //"t" stands for "this"
        function makeSelect2(me) {
            let t = me;
            //Do not convert for any of these conditions
            //	It is already a select2
            //	it doesn't have enough options
            //	it doesn't have an id
            //	it's a "multiple"
            //	it's inside of an IRR, IGG, (other plugins pending)
            //console.log('Trace inside makeSelect2', me)
            if ($(t).hasClass("select2-hidden-accessible") ||
                $(t).find('option').length < 7 ||
                !$(t).prop('id') ||
                $(t).prop('multiple') ||
                $(t).parents('.a-IRR-container,.a-IG').length > 0) {
                return;
            } else {
                let id = $(t).prop('id');
                let nullOption = $(t).find('[value=""]').html();
                let selectHeight = $(t).css('min-height') || t.getBoundingClientRect().height + 'px';
                let selectFontSize = $(t).css('font-size') || '12px';
                let selectFontFamily = $(t).css('font-family') || 'Helvetica Neue,Helvetica,Arial,sans-serif';

                //console.log('selectHeight',selectHeight);

                $(t).select2({
                    width: isRunningOnPageDesigner ? '100%' : (parseFloat($(t).css('width')) + 70) + 'px',
                    theme: (IAPSelect2.colorMode == 'Dark' ? 'dark-adminlte' : undefined),
                    allowClear: nullOption ? true : false,
                    placeholder: nullOption ? nullOption : undefined
                });

                //Fix for the "x" button opening select2, taken from https://github.com/select2/select2/issues/5163
                $(t).on('select2:unselecting', function(ev) {
                  if (ev.params.args.originalEvent) {
                      // When unselecting (in multiple mode)
                      ev.params.args.originalEvent.stopPropagation();
                  } else {
                      // When clearing (in single mode)
                      $(this).one('select2:opening', function(ev) { ev.preventDefault(); });
                  }
                  triggerChangeForApex(me, id);
              });



                //Trigger the change event for the node so that Apex knows the value has changed
                $(t).on("select2:select", function(e) {
                    triggerChangeForApex(me, id);
                });

                $(t).on("select2:unselect", function(e) {
                    triggerChangeForApex(me, id);
                });



                $(t).next('.select2')
                    .find('.select2-selection,.select2-selection__rendered,.select2-selection__arrow')
                    .css({
                        height: selectHeight,
                        'line-height': selectHeight,
                        'font-size': selectFontSize,
                        'font-family': selectFontFamily,
                    });




                //Call the select2 when the select's "change" event occurs.
                append(function(params) {
                    let id = params.id;
                    $('#' + id).on('change', function() {
                        //console.log('inside append from makeselect2', this);
                        window.postMessage(JSON.stringify({
                            isInsumApexProMessage: true,
                            idOfChangedSelect: id
                        }), '*')
                    });
                }, {
                    id: id
                });
            }



        }

        function triggerChangeForApex(me, id) {
            $(me).trigger('change');
            append(function(idObj) {
                $('#' + idObj.id).trigger('change');
            }, {
                id: id
            });
        }

        //When the select's change event occurs, the select2 doesn't change in response.
        //This function fixes that behavior.
        IAPSelect2.handleSelect2Change = function(id) {
            $('#' + id).trigger('change.select2');
        }

        //Jquery modal dialog's block interaction on the page with anything outside of them.
        //This is the best solution, found here: https://github.com/select2/select2/issues/1246
        append(
            function() {
                patchSelect2ThroughJqueryDialogs();

                function patchSelect2ThroughJqueryDialogs() {
                    if ($.ui && $.ui.dialog && $.ui.dialog.prototype._allowInteraction) {
                        var ui_dialog_interaction = $.ui.dialog.prototype._allowInteraction;
                        $.ui.dialog.prototype._allowInteraction = function(e) {
                            if ($(e.target).closest('.select2-dropdown').length) return true;
                            return ui_dialog_interaction.apply(this, arguments);
                        };
                    }
                }
            });

        //This function fixes the "strangeness" of PropertyEditor Select2 widths.
        //  For example, it fixes an issue where if the property editor is on the right,
        //   and the width of property editor is small
        //   and the item chosen in the select2 is long
        //   then if the select2's width is simply "100%" it would outstretch the width of property editor.
        function updatePropertyEditorWidths() {
            append(
                function() {
                    window.updatePropertyEditorWidths = function() {
                        $('.select2').each(function() {

                          //LOV Dialog selects initialize with the wrong size so we set it to 100%
                          if($(this).parents('#lovDlg')) {
                            $(this).css('width', '100%');
                            return;
                          }

                          $(this).css('width', '0px');
                          let $parent = $(this).parents('.a-Property');

                          let $label = $parent.find('.a-Property-labelContainer');
                          let labelWidth = $label.css('display') == 'table-cell' ? $label.outerWidth() : 0;

                          let $button = $parent.find('.a-Property-buttonContainer button');
                          let buttonWidth = ($button.outerWidth() || -10) + 30;

                          let parentWidth = $parent.outerWidth();

                          let remainingWidth = (parentWidth - labelWidth - buttonWidth) + 'px';

                          let $selectContainer = $(this).parents('.a-Property-fieldContainer');

                          if ($label.css('display') == 'table-cell') {
                              $selectContainer.css('max-width', '100%');
                              $selectContainer.css('width', '100%');
                              $(this).css('width', remainingWidth);
                          } else {

                              $selectContainer.css('max-width', '');
                              $selectContainer.css('width', remainingWidth);

                              $(this).css('width', remainingWidth);

                          }

                        });
                    }

                    $('body').on('splitterchange', function(e, f) {
                        updatePropertyEditorWidths();
                    })

                    window.setInterval(function() {
                        updatePropertyEditorWidths();
                    }, 100);

                });

        }

    }(window.IAPSelect2 = window.IAPSelect2 || {}));




    function consoleThankYouMessage() {

        let weAreTopWindow;
        try {
            weAreTopWindow = window.self == window.top;
        } catch (e) {
            //The top window blocked our access due to a same-origin policy.
            //This will never occur in apex unless the developers ever add iframes from a different origin
            weAreTopWindow = false;
        }
        if (weAreTopWindow) {
            console.log('Thank you for using Insum-Apex-Pro!\n' +
                'Github: https://github.com/insum-labs/insum-apex-pro\n' +
                'Who We Are: https://www.insum.ca');
        }

    }

    window.addEventListener("message", function(e) {
        //console.log('Got message ', e.data);
        try {
            let data = JSON.parse(e.data);
            if (data.isInsumApexProMessage && data.keyval) {
                let key = data.keyval.key;
                let val = data.keyval.val;
                chrome.storage.sync.set({
                    key: val
                }, function() {
                    chrome.storage.sync.get('allKeys', function(allKeys) {
                        if (!allKeys.allKeys) {
                            allKeys.allKeys = {};
                        }
                        allKeys = allKeys.allKeys;
                        allKeys[key] = val;
                        //console.log('setting allkeys to: ', allKeys );
                        chrome.storage.sync.set({
                            'allKeys': allKeys
                        });
                    });

                });
            } else if (data.isInsumApexProMessage && data.idOfChangedSelect) {
                //console.log('change received', data.idOfChangedSelect);
                IAPSelect2.handleSelect2Change(data.idOfChangedSelect);
            }
        } catch (err) {

        }
    }, false);

}
