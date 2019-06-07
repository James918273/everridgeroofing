
                    $(document).ready(function(){
	var $mainContainer = $('.main-container');

	$('.navbar-toggle[data-toggle="sidebar"]').click(function(){
		if($mainContainer.hasClass("open")) {
			$mainContainer.removeClass("open");
		}
		else {
			$mainContainer.addClass("open");
		}
	});

	$('.protective-glass').click(function(){
		$mainContainer.removeClass("open");
	});

});  
        
        
                    $(document).ready(function(){

    if($('#map-container').length) {
        
        var geocoder = new google.maps.Geocoder();
        var address = "614 Manor Dr Newark, OH 43055";

        geocoder.geocode( {'address': address}, function(results, status) {

            if (status == google.maps.GeocoderStatus.OK) {
                var latitude = results[0].geometry.location.lat();
                var longitude = results[0].geometry.location.lng();
            } 
        
            // console.log(address);
            // console.log(latitude);
            // console.log(longitude);

            var myLatlng = new google.maps.LatLng(latitude, longitude);

var mapOptions = {
    center: myLatlng,
    zoom: 15,
    draggable: true,
    disableDefaultUI: false,
    scrollwheel: false,
    disableDoubleClickZoom: false,
    streetViewControl: false,
    styles: []
};


    mapOptions.styles = [
        {
            "featureType": "landscape",
            "stylers": [{ "saturation": -100},{"lightness": 65},{"visibility": "on"}]
        },
        {
            "featureType": "poi",
            "stylers": [{"saturation": -100},{"lightness": 51},{"visibility": "simplified"}]
        },
        {
            "featureType": "road.highway",
            "stylers": [{"saturation": -100},{"visibility": "simplified"}]
        },
        {
            "featureType": "road.arterial",
            "stylers": [{"saturation": -100},{"lightness": 30},{"visibility": "on"}]
        },
        {
            "featureType": "road.local",
            "stylers": [{"saturation": -100},{"lightness": 40},{"visibility": "on"}]
        },
        {
            "featureType": "transit",
            "stylers": [{"saturation": -100},{"visibility": "simplified"}]
        },
        {
            "featureType": "administrative.province",
            "stylers": [{"visibility": "off"}]
        },
        {
            "featureType": "water",
            "elementType": "labels",
            "stylers": [{"visibility": "on"},{"lightness": -25},{"saturation": -100}]
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{"hue": "#ffff00"},{"lightness": -25},{"saturation": -97}]
        }
    ];

            var map = new google.maps.Map(document.getElementById("map-container"), mapOptions);

    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        clickable: false
    });

    google.maps.event.addDomListener(window, "resize", function() {
        var center = map.getCenter();
        google.maps.event.trigger(map, "resize");
        map.setCenter(center); 
    });

         });

    }
   
});  
        
                    function initTeamSlides() {

    var $teamSlidesMobile = $("#team-slider-mobile");
    $teamSlidesMobile.responsiveSlides({
        auto: false,
        pager: false,
        speed: 0,
        timeout: 5000,
        prevText: "",
        nextText: "",
        nav: true
    });

    /* slider for team on desktop */
    $('#js-all-bios').slick({
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 3,
      draggable: false
    });
    /* and the modal for each slider */
    $('#js-all-bios li').each(function() {
      var $this = $(this);

      var readMoreLink = $this.find(".link");
      var lightboxId = readMoreLink.attr("data-bio-index");

      readMoreLink.on('click', function(evt) {
        evt.preventDefault();
        window.lofthaus.ui.lightbox.open('#bio-lightbox-' + lightboxId);
      });
    });
}

$(document).ready(function(){

	initTeamSlides();

	$('.team-module .bio-item').each(function() {
		var $this = $(this);

    var readMoreLink = $this.find(".more-link .link");
    var avatar = $this.find(".avatar");

		var lightboxId = readMoreLink.attr("data-bio-index");

		readMoreLink.on('click', function(evt){
			evt.preventDefault();

            window.lofthaus.ui.lightbox.open('#bio-lightbox-' + lightboxId);

            if ('layout-heron' == 'layout-albatross') {
                $(".smart-crop").each(function(){

                    var cropWindow = $(this);
                    var cropImage = $(this).find("img");

                    cropWindow.css("overflow", "hidden");

                    cropImage.css("height", "auto");
                    cropImage.css("width", "auto");

                    if (cropImage.width() > cropImage.height()) {

                        cropImage.css("width", "100%");

                        var cropWindowHeight = cropWindow.height();
                        var difference = (cropWindowHeight - cropImage.height()) / 2;

                        cropImage.css("top", difference + "px");

                    }

                    else if (cropImage.width() < cropImage.height()) {

                        cropImage.css("height", "100%");

                    }

                    else {

                        cropImage.css("width", "100%");

                    }

                });

            }
		});

        avatar.on('click', function(evt){
            evt.preventDefault();

            window.lofthaus.ui.lightbox.open('#bio-lightbox-' + lightboxId);

            if ('layout-heron' == 'layout-albatross') {
                $(".smart-crop").each(function(){

                    var cropWindow = $(this);
                    var cropImage = $(this).find("img");

                    cropWindow.css("overflow", "hidden");

                    cropImage.css("height", "auto");
                    cropImage.css("width", "auto");

                    if (cropImage.width() > cropImage.height()) {

                        cropImage.css("width", "100%");

                        var cropWindowHeight = cropWindow.height();
                        var difference = (cropWindowHeight - cropImage.height()) / 2;

                        cropImage.css("top", difference + "px");

                    }

                    else if (cropImage.width() < cropImage.height()) {

                        cropImage.css("height", "100%");

                    }

                    else {

                        cropImage.css("width", "100%");

                    }

                });

            }

        });
	})
});  
                    $(function () {
  /* Debounce helper */
  function debounce(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() { timeout = null; if (!immediate) {func.apply(context, args);}};
      var callNow = immediate && !timeout; clearTimeout(timeout);
      timeout = setTimeout(later, wait); if (callNow) {func.apply(context, args);}
    };
  }

  /* Settings */
  var defaultMaxHeight = 100;
  var maxQty = 20;
  var defaults = {
    speed: 400,
    maxHeight: defaultMaxHeight,
    moreLink: '<a href="#" class="link">Read More<i class="icon-readmore">v</i></a>',
    lessLink: '<a href="#" class="link">Read Less<i class="icon-readmore">^</i></a>'
  };

  /**
  * Readmore Handler.
  */
  function readMoreFor (selector, limit) {
    var maxLimit = limit || maxQty;
    $(selector).slice(0, maxLimit).each(function() {
      var $this = $(this);
      var height = $this.attr('data-height') ? +$this.attr('data-height') : defaultMaxHeight;
      var settings = $.extend(defaults, { maxHeight: height });
      $this.readmore(settings);

      /* if the `data-desktop-height` value is given,
      *  set the height to that value for desktop. ie > 450px
      */
      if ($this.attr('data-desktop-height')) {
        var isDesktop = $(window).width() >= 450;
        var readmoreHeight = isDesktop ? parseInt($this.attr('data-desktop-height')) : parseInt($this.attr('data-height'));
        var desktopSetting = $.extend(defaults, { maxHeight: readmoreHeight });
        $this.readmore(desktopSetting);
      }
    });
  }

  /** main */
  var main = (function () {
    var callMain = function () {
      readMoreFor('.content-block .readmore');
      readMoreFor('.responsive-reviews-module .readmore');
      readMoreFor('.jsq-readmore'); /* usage: <div class="jsq-readmore"><p>.</p></div> */
    };
    callMain();
    return callMain;
  })();

  $(window).on('resize', debounce(function () { main(); }, 200));
});  
                    window.lofthaus = window.lofthaus || {};
var BrowserDetect = BrowserDetect || {
        init: function () {
            this.browser = this.searchString(this.dataBrowser) || "unknown";
            this.version = this.searchVersion(navigator.userAgent)
                || this.searchVersion(navigator.appVersion)
                || "unknown";
            this.OS = this.searchString(this.dataOS) || "unknown";
        },
        searchString: function (data) {
            for (var i=0;i<data.length;i++)	{
                var dataString = data[i].string;
                var dataProp = data[i].prop;
                this.versionSearchString = data[i].versionSearch || data[i].identity;
                if (dataString) {
                    if (dataString.indexOf(data[i].subString) != -1)
                        return data[i].identity;
                }
                else if (dataProp)
                    return data[i].identity;
            }
        },
        searchVersion: function (dataString) {
            var index = dataString.indexOf(this.versionSearchString);
            if (index == -1) return;
            return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
        },
        dataBrowser: [
            {
                string: navigator.userAgent,
                subString: "Chrome",
                identity: "Chrome"
            },
            {
                string: navigator.userAgent,
                subString: "Opera",
                identity: "Opera",
                versionSearch: "Version"
            },
            {
                string: navigator.userAgent,
                subString: "Android",
                identity: "Android",
                versionSearch: "Version"
            },
            {
                string: navigator.userAgent,
                subString: "Safari",
                identity: "Safari",
                versionSearch: "Version"
            },
            {
                string: navigator.userAgent,
                subString: "Firefox",
                identity: "Firefox"
            },
            {		// for newer Netscapes (6+)
                string: navigator.userAgent,
                subString: "Netscape",
                identity: "Netscape"
            },
            {
                string: navigator.userAgent,
                subString: "MSIE",
                identity: "Explorer",
                versionSearch: "MSIE"
            },
            {
                string: navigator.userAgent,
                subString: "Gecko",
                identity: "Mozilla",
                versionSearch: "rv"
            },
            { 		// for older Netscapes (4-)
                string: navigator.userAgent,
                subString: "Mozilla",
                identity: "Netscape",
                versionSearch: "Mozilla"
            }
        ],
        dataOS : [
            {
                string: navigator.platform,
                subString: "Win",
                identity: "Windows"
            },
            {
                string: navigator.platform,
                subString: "Mac",
                identity: "Mac"
            },
            {
                string: navigator.platform,
                subString: "Android",
                identity: "Android"
            },
            {
                string: navigator.userAgent,
                subString: "iPhone",
                identity: "iPhone/iPod"
            },
            {
                string: navigator.userAgent,
                subString: "iPad",
                identity: "iPad"
            },
            {
                string: navigator.platform,
                subString: "Linux",
                identity: "Linux"
            }
        ]
    };
BrowserDetect.init();

window.lofthaus.contactform = (function ($) {

    var FORM_SELECTOR = '.simple-contact-form-module form.contact-form',
        SUPPORTED_FIELDS = 'input:not("[type=submit], [type=button], [type=hidden]"):visible, textarea:visible, select:visible';
    var STATUS_MESSAGE_SELECTOR = '.simple-contact-form-module .status-message',
        RESET_BUTTON = '.simple-contact-form-module .status-message .reset-button';

    var $form = $(FORM_SELECTOR),
        $fields = $form.find(SUPPORTED_FIELDS),
        $statusMessage = $(STATUS_MESSAGE_SELECTOR);

    function showSubmitSuccessStatusMessage() {
        $form.fadeOut(500, function() {
            $statusMessage.fadeIn(500);
        });
    }

    function trackSessionWebLead() {
        ga('send', 'event', 'conversions', 'click', 'desktop and responsive form submission');
    }

    function onSubmitSuccess(responseData) {
        showSubmitSuccessStatusMessage();
        trackSessionWebLead();
    }

    function initSpamTrap() {
        var spamTrap = $form.find('input[name="_yodleST"]');
        var formButton = $form.find(' .form-footer #contactBtn');
        formButton.click(function (event) {
            spamTrap.val('x537hd');
            return true;
        });
    }

    function getErrorMessageByType(type) {
        switch(type) {
            case 'required':
                return 'Required.';
            //end required
            case 'email':
                return 'Invalid email address.';

            case 'tel':
                return 'Invalid phone number.';

            case 'url':
                return 'Invalid web URL.';

            case 'zip':
                return 'Invalid zip code.';

            case 'number':
                return 'Invalid number.';

            case 'currency':
                return 'Invalid amount';

            case 'rate':
                return 'Invalid percentage (0-100).';

            case 'custom':
                return invalidMessage;
            default:
                return 'Invalid entry.';
        }
    }

    function getAllValidators($selector) {
        var validators = {},
            dataInputType = $selector.attr('data-input-type');

        if($selector.attr('required')) {
            validators.notEmpty = {
                message: getErrorMessageByType("required")
            };
        }
        if($selector.attr('type')==='email' || dataInputType==='email') {
            validators.emailAddress = {
                message: getErrorMessageByType("email")
            };
        }
        if(dataInputType==='tel') {
            validators.phone = {
                country: 'US',
                message: getErrorMessageByType("tel")
            };
        }

        return validators;
    }

    function getAllFields() {
        var allFields={};

        $fields.each(function() {
            var $this = $(this),
                validators = getAllValidators($this),
                name = $this.attr('name');

            allFields[name] = {
                validators: validators,
                trigger: 'blur'
            };
        });

        return allFields;
    }

    function initFormValidation() {
        $form.bootstrapValidator({
            fields: getAllFields()
        })
        .on('success.form.bv', function(e) {
            e.preventDefault();

            var $currentForm = $(e.target);
            var bv = $currentForm.data('bootstrapValidator');

            var userId = getCookie('uid');
            $form.find('input[name="uid"]').val(userId || "unknown");

            $.post(window.location.protocol + '//labs.natpal.com/capture.weblead.ajax?trkLead=true', $form.serialize(), function() {
                onSubmitSuccess();
                $form.bootstrapValidator('resetForm', true);
            }, 'json');
        });
    }

    function getCookie(key) {
        var cookieMatch = document.cookie.match('(?:^| )' + key + '=([^;]*)');
        return cookieMatch === null ? '' : cookieMatch[1];
    }

    function initNewMessageButton() {
        $(RESET_BUTTON).on('click', function() {
            $statusMessage.fadeOut(500, function() {
                $form.fadeIn(500);
            });
        });
    }

    function initAttributionFields() {
        $form.find('input[name="pageVisited"]').val(encodeURIComponent(location.href));
        $form.find('input[name="referrer"]').val(encodeURIComponent(document.referrer));
        $form.find('input[name="browser"]').val(encodeURIComponent(BrowserDetect.browser));
        $form.find('input[name="browserVersion"]').val(encodeURIComponent(BrowserDetect.version));
        $form.find('input[name="OS"]').val(encodeURIComponent(BrowserDetect.OS));
    }

    return {
        init: function(){
            initFormValidation();
            initNewMessageButton();
            initAttributionFields();
            initSpamTrap();
        }
    };

})(jQuery);

$(document).ready(function($) {
    window.lofthaus.contactform.init();
});  
        
        
                    $(document).ready(function(){
	if($('#paymentMethodsTrigger').length) {
		$('#paymentMethodsTrigger').on('click', function(e) {
			e.preventDefault();
			window.lofthaus.ui.lightbox.open('#paymentMethodsLightbox');
		});

		var $paymentMethodsLightbox = $('#paymentMethodsLightbox');
		$(window).resize(function(){
			if($(window).width() <= 956) {
		        //resize lightbox container
		        $paymentMethodsLightbox.css('width',0.9*$(window).width());
		    } 
		    else {
		    	$paymentMethodsLightbox.css('width', "956px");
		    }  
		});
	}
});  
                    window.lofthaus = window.lofthaus || {};
window.lofthaus.openstatus = (function ($) {
    var OPEN_TEXT = "<span class=\"open\">We're Open. </span><span class=\"action\">Call Now!</span>",
        DEFAULT_TEXT = "Call Today";

    if ('layout-heron' == 'layout-albatross') {
        var OPEN_TEXT = "Call Now",
            DEFAULT_TEXT = "Call";

        var OVERLAY_OPEN_TEXT = "We're Open.";
    }

    function getOpenStatus() {
        var tzo = '-400';
        if (tzo == 'None') {
            tzo = clientLocal.getTimezoneOffset(); 
        }

        var hours = {"showBusinessOpenOnWebsite": false, "collectedBy": "client services", "monday": {"status": "OPEN", "closeMilitaryTime": 1700, "openMilitaryTime": 800}, "tuesday": {"status": "OPEN", "closeMilitaryTime": 1700, "openMilitaryTime": 800}, "friday": {"status": "OPEN", "closeMilitaryTime": 1700, "openMilitaryTime": 800}, "wednesday": {"status": "OPEN", "closeMilitaryTime": 1700, "openMilitaryTime": 800}, "thursday": {"status": "OPEN", "closeMilitaryTime": 1700, "openMilitaryTime": 800}, "sunday": {"status": "CLOSED", "closeMilitaryTime": 1700, "openMilitaryTime": 800}, "showHoursOnWebsite": true, "emergency_247": false, "saturday": {"status": "OPEN", "closeMilitaryTime": 1700, "openMilitaryTime": 800}, "id": 8147749287},
            bizLocal = 0 - parseInt(tzo)/100,
            clientLocal = new Date(),
            relativeOffset = clientLocal.getTimezoneOffset()/60 - bizLocal,
            days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

        if (hours.showHoursOnWebsite && hours.showBusinessOpenOnWebsite) {
            var clientHour = clientLocal.getHours() + relativeOffset,
                clientMinutes = clientLocal.getMinutes().toString();
                clientDay = clientLocal.getDay();
                
            var clientTime, openTime, closeTime, bizDayName, bizDay;

            if (clientHour>=24) {
                clientDay = clientDay+1;
                clientHour = clientHour-24;
            }
            if (clientHour<0)  {
                clientDay = clientDay-1;
                clientHour = clientHour + 24;
            }
            
            bizDayName = days[clientDay];
            bizDay = hours[bizDayName];

            if (bizDay.status=="OPEN_ALL_DAY") {
                return true;
            }


            if (bizDay.status=="OPEN") {
                openTime = bizDay.openMilitaryTime;
                closeTime = bizDay.closeMilitaryTime;

                clientHour = clientHour.toString();
                if ( clientMinutes.length == 1 ) {
                    clientMinutes = '0' + clientMinutes;
                }
                clientTime = parseInt(clientHour + clientMinutes);

                
                if(clientTime>=openTime && clientTime < closeTime) {
                    return true;
                }
            }
        }
        
        return false;
    }

    function initOpenText() {
        var $heading = $('#open-status');

        if(getOpenStatus()) {
            $heading.html(OPEN_TEXT);
        }
        else {
            $heading.html(DEFAULT_TEXT);
        }

        if ('layout-heron' == 'layout-albatross') {
            var $heading = $('#overlay-open-status');

            if(getOpenStatus()) {
                $heading.html(OVERLAY_OPEN_TEXT);
            }
            else {
                $heading.html("");
            }
        }

    }

    return {
        initOpenText: initOpenText
    };
})(jQuery);

$(document).ready(function() {
	window.lofthaus.openstatus.initOpenText();
});  
                    $(document).ready(function($) {

    function onSubmitSuccess() {
        $('.simple-referral-module .module-body').hide();
        $('.simple-referral-module .thanks-message').show();
    }

    function onSubmitError() {
        alert("Error submitting referral. Please try again.")
    }

    function getUrlParameterByName(name) {
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }


    if (getUrlParameterByName('referrer')) {
        window.lofthaus.ui.lightbox.open('#referralLightbox');

        $('.simple-referral-module #close-button').click(function() {
            window.lofthaus.ui.lightbox.close('#referralLightbox');
        });

        $('#referrer-id-input').val(getUrlParameterByName('referrer'));



        $('.simple-referral-module .form').bootstrapValidator ({
            framework: 'bootstrap',
            fields: {

                firstName1: {
                    validators: {
                        notEmpty: { message: "Required." }
                    },
                    trigger: 'blur keyup'
                },
                email1: {
                    validators: {
                        notEmpty: { message: "Required." },
                        emailAddress: { message: "Invalid email address." }
                    },
                    trigger: 'blur keyup'
                },
                email2: {
                    validators: {
                        emailAddress: { message: "Invalid email address." }
                    },
                    trigger: 'blur keyup'
                },
                email3: {
                    validators: {
                        emailAddress: { message: "Invalid email address." }
                    },
                    trigger: 'blur keyup'
                }

            }
        })
        .on('success.form.bv', function(e) {
            e.preventDefault();

            var $currentForm = $(e.target);
            var bv = $currentForm.data('bootstrapValidator');

            $.post(window.location.protocol +'//labs.natpal.com/referral', $('.simple-referral-module .form').serialize(), function(){
                onSubmitSuccess();
                $('.simple-referral-module .form').bootstrapValidator('resetForm', true);
            });
        });
    };


});


  
                    $(document).ready(function(){

	$.fn.bookAppiontmentWidget = function() {

        window.lofthaus.ui.lightbox.open('#book-now-modal');

        var openDays = ['CLOSED', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN'];

        var openTimes = {
            sunday: {
                open: '800',
                close: '1700'
            },
            monday: {
                open: '800',
                close: '1700'
            },
            tuesday: {
                open: '800',
                close: '1700'
            },
            wednesday: {
                open: '800',
                close: '1700'
            },
            thursday: {
                open: '800',
                close: '1700'
            },
            friday: {
                open: '800',
                close: '1700'
            },
            saturday: {
                open: '800',
                close: '1700'
            }
        }

        $("#timepicker").timepicker({
            timeFormat: 'h:mm p',
            minTime: '9:00',
            interval: '30',
            maxTime: '17:00',
            change: function(time) {
                $("#timepicker").trigger("change");
            }
        });

        $("#datepicker").datepicker({
            showAnim: "slideDown",
            minDate: '0',
            beforeShowDay: function(date) {

                if (openDays[date.getDay()] == "CLOSED" || openDays[date.getDay()] == "BY_APPOINTMENT") {
                    return [false, ''];
                } else {
                    return [true, ''];
                }

            },
            onSelect: function(){
                $("#timepicker").prop('disabled', false);

                $("#timepicker").val('');
                $(".ui-timepicker-standard .ui-timepicker-viewport").scrollTop(0);

                var date = $(this).datepicker('getDate');
                var dayOfWeek = date.getUTCDay();

                var dayOfWeekName = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"][dayOfWeek];

                $('#timepicker').data('TimePicker').options.minTime = openTimes[dayOfWeekName].open;
                $('#timepicker').data('TimePicker').options.maxTime = openTimes[dayOfWeekName].close;
                $('#timepicker').data('TimePicker').items = null;
                $('#timepicker').data('TimePicker').widget.instance = null;

            }
        });

        $('#book-now-modal .book-now-form').bootstrapValidator ({
            framework: 'bootstrap',
            fields: {

                appointmentName: {
                    validators: {
                        notEmpty: { message: "Required." }
                    },
                    trigger: 'blur keyup'
                },
                appointmentEmail: {
                    validators: {
                        emailAddress: { message: "Invalid email address." }
                    },
                    trigger: 'blur keyup'
                },
                appointmentDate: {
                    validators: {
                        notEmpty: { message: "Required." }
                    },
                    trigger: 'change'
                },
                appointmentTime: {
                    validators: {
                        notEmpty: { message: "Required." }
                    },
                    trigger: 'change'
                }

            }
        })
        .on('success.form.bv', function(e) {
            e.preventDefault();

            console.log("submitted");

            var $currentForm = $(e.target);
            var bv = $currentForm.data('bootstrapValidator');

                    $.ajax({
                        type: "GET",
                        url: window.location.protocol + '//labs.natpal.com/trk/lead',
                        data: $('#book-now-modal .book-now-form').serialize(),
                        dataType: 'jsonp',
                        complete: function(){
                            $("#book-now-modal .modal-info .intro").hide();
                            $('#book-now-modal .book-now-form').hide();
                            $('#book-now-modal .book-now-form').bootstrapValidator('resetForm', true);

                            $("#book-now-modal .modal-info .confirmation-message").show();
                        }
                    });
                });

    };

    $(".navbar-header #book-now-modal").remove();

	$(".book-now-button").on('click', function(evt){
		evt.preventDefault();
        $(this).bookAppiontmentWidget();
	});

	/**
     * jQuery Timepicker - v1.3.2 - 2014-09-13
     * http://timepicker.co
     *
     * Enhances standard form input fields helping users to select (or type) times.
     *
     * Copyright (c) 2014 Willington Vega; Licensed MIT, GPL
     */

    if (typeof jQuery !== 'undefined') {
        (function($, undefined) {

            function pad(str, ch, length) {
                return (new Array(length + 1 - str.length).join(ch)) + str;
            }

            function normalize() {
                if (arguments.length === 1) {
                    var date = arguments[0];
                    if (typeof date === 'string') {
                        date = $.fn.timepicker.parseTime(date);
                    }
                    return new Date(0, 0, 0, date.getHours(), date.getMinutes(), date.getSeconds());
                } else if (arguments.length === 3) {
                    return new Date(0, 0, 0, arguments[0], arguments[1], arguments[2]);
                } else if (arguments.length === 2) {
                    return new Date(0, 0, 0, arguments[0], arguments[1], 0);
                } else {
                    return new Date(0, 0, 0);
                }
            }

            $.TimePicker = function() {
                var widget = this;

                widget.container = $('.ui-timepicker-container');
                widget.ui = widget.container.find('.ui-timepicker');

                if (widget.container.length === 0) {
                    widget.container = $('<div></div>').addClass('ui-timepicker-container')
                                        .addClass('ui-timepicker-hidden ui-helper-hidden')
                                        .appendTo('body')
                                        .hide();
                    widget.ui = $( '<div></div>' ).addClass('ui-timepicker')
                                        .addClass('ui-widget ui-widget-content ui-menu')
                                        .addClass('ui-corner-all')
                                        .appendTo(widget.container);
                    widget.viewport = $('<ul></ul>').addClass( 'ui-timepicker-viewport' )
                                        .appendTo( widget.ui );

                    if ($.fn.jquery >= '1.4.2') {
                        widget.ui.delegate('a', 'mouseenter.timepicker', function() {
                            // passing false instead of an instance object tells the function
                            // to use the current instance
                            widget.activate(false, $(this).parent());
                        }).delegate('a', 'mouseleave.timepicker', function() {
                            widget.deactivate(false);
                        }).delegate('a', 'click.timepicker', function(event) {
                            event.preventDefault();
                            widget.select(false, $(this).parent());
                        });
                    }

                    widget.ui.bind('click.timepicker, scroll.timepicker', function() {
                        clearTimeout(widget.closing);
                    });
                }
            };

            $.TimePicker.count = 0;
            $.TimePicker.instance = function() {
                if (!$.TimePicker._instance) {
                    $.TimePicker._instance = new $.TimePicker();
                }
                return $.TimePicker._instance;
            };

            $.TimePicker.prototype = {
                // extracted from from jQuery UI Core
                // http://github,com/jquery/jquery-ui/blob/master/ui/jquery.ui.core.js
                keyCode: {
                    ALT: 18,
                    BLOQ_MAYUS: 20,
                    CTRL: 17,
                    DOWN: 40,
                    END: 35,
                    ENTER: 13,
                    HOME: 36,
                    LEFT: 37,
                    NUMPAD_ENTER: 108,
                    PAGE_DOWN: 34,
                    PAGE_UP: 33,
                    RIGHT: 39,
                    SHIFT: 16,
                    TAB: 9,
                    UP: 38
                },

                _items: function(i, startTime) {
                    var widget = this, ul = $('<ul></ul>'), item = null, time, end;

                    // interval should be a multiple of 60 if timeFormat is not
                    // showing minutes
                    if (i.options.timeFormat.indexOf('m') === -1 && i.options.interval % 60 !== 0) {
                        i.options.interval = Math.max(Math.round(i.options.interval / 60), 1) * 60;
                    }

                    if (startTime) {
                        time = normalize(startTime);
                    } else if (i.options.startTime) {
                        time = normalize(i.options.startTime);
                    } else {
                        time = normalize(i.options.startHour, i.options.startMinutes);
                    }

                    end = new Date(time.getTime() + 24 * 60 * 60 * 1000);

                    while(time < end) {
                        if (widget._isValidTime(i, time)) {
                            item = $('<li>').addClass('ui-menu-item').appendTo(ul);
                            $('<a>').addClass('ui-corner-all').text($.fn.timepicker.formatTime(i.options.timeFormat, time)).appendTo(item);
                            item.data('time-value', time);
                        }
                        time = new Date(time.getTime() + i.options.interval * 60 * 1000);
                    }

                    return ul.children();
                },

                _isValidTime: function(i, time) {
                    var min = null, max = null;

                    time = normalize(time);

                    if (i.options.minTime !== null) {
                        min = normalize(i.options.minTime);
                    } else if (i.options.minHour !== null || i.options.minMinutes !== null) {
                        min = normalize(i.options.minHour, i.options.minMinutes);
                    }

                    if (i.options.maxTime !== null) {
                        max = normalize(i.options.maxTime);
                    } else if (i.options.maxHour !== null || i.options.maxMinutes !== null) {
                        max = normalize(i.options.maxHour, i.options.maxMinutes);
                    }

                    if (min !== null && max !== null) {
                        return time >= min && time <= max;
                    } else if (min !== null) {
                        return time >= min;
                    } else if (max !== null) {
                        return time <= max;
                    }

                    return true;
                },

                _hasScroll: function() {
                    // fix for jQuery 1.6 new prop method
                    var m = typeof this.ui.prop !== 'undefined' ? 'prop' : 'attr';
                    return this.ui.height() < this.ui[m]('scrollHeight');
                },

                /**
                 * TODO: Write me!
                 *
                 * @param i
                 * @param direction
                 * @param edge
                 * */
                _move: function(i, direction, edge) {
                    var widget = this;
                    if (widget.closed()) {
                        widget.open(i);
                    }
                    if (!widget.active) {
                        widget.activate( i, widget.viewport.children( edge ) );
                        return;
                    }
                    var next = widget.active[direction + 'All']('.ui-menu-item').eq(0);
                    if (next.length) {
                        widget.activate(i, next);
                    } else {
                        widget.activate( i, widget.viewport.children( edge ) );
                    }
                },

                //
                // protected methods
                //

                register: function(node, options) {
                    var widget = this, i = {}; // timepicker instance object

                    i.element = $(node);

                    if (i.element.data('TimePicker')) {
                        return;
                    }

                    i.options = $.metadata ? $.extend({}, options, i.element.metadata()) : $.extend({}, options);
                    i.widget = widget;

                    // proxy functions for the exposed api methods
                    $.extend(i, {
                        next: function() {return widget.next(i) ;},
                        previous: function() {return widget.previous(i) ;},
                        first: function() { return widget.first(i) ;},
                        last: function() { return widget.last(i) ;},
                        selected: function() { return widget.selected(i) ;},
                        open: function() { return widget.open(i) ;},
                        close: function(force) { return widget.close(i, force) ;},
                        closed: function() { return widget.closed(i) ;},
                        destroy: function() { return widget.destroy(i) ;},

                        parse: function(str) { return widget.parse(i, str) ;},
                        format: function(time, format) { return widget.format(i, time, format); },
                        getTime: function() { return widget.getTime(i) ;},
                        setTime: function(time, silent) { return widget.setTime(i, time, silent); },
                        option: function(name, value) { return widget.option(i, name, value); }
                    });

                    widget._setDefaultTime(i);
                    widget._addInputEventsHandlers(i);

                    i.element.data('TimePicker', i);
                },

                _setDefaultTime: function(i) {
                    if (i.options.defaultTime === 'now') {
                        i.setTime(normalize(new Date()));
                    } else if (i.options.defaultTime && i.options.defaultTime.getFullYear) {
                        i.setTime(normalize(i.options.defaultTime));
                    } else if (i.options.defaultTime) {
                        i.setTime($.fn.timepicker.parseTime(i.options.defaultTime));
                    }
                },

                _addInputEventsHandlers: function(i) {
                    var widget = this;

                    i.element.bind('keydown.timepicker', function(event) {
                        switch (event.which || event.keyCode) {
                        case widget.keyCode.ENTER:
                        case widget.keyCode.NUMPAD_ENTER:
                            event.preventDefault();
                            if (widget.closed()) {
                                i.element.trigger('change.timepicker');
                            } else {
                                widget.select(i, widget.active);
                            }
                            break;
                        case widget.keyCode.UP:
                            i.previous();
                            break;
                        case widget.keyCode.DOWN:
                            i.next();
                            break;
                        default:
                            if (!widget.closed()) {
                                i.close(true);
                            }
                            break;
                        }
                    }).bind('focus.timepicker', function() {
                        i.open();
                    }).bind('blur.timepicker', function() {
                        i.close();
                    }).bind('change.timepicker', function() {
                        if (i.closed()) {
                            i.setTime($.fn.timepicker.parseTime(i.element.val()));
                        }
                    });
                },

                select: function(i, item) {
                    var widget = this, instance = i === false ? widget.instance : i;
                    clearTimeout(widget.closing);
                    widget.setTime(instance, $.fn.timepicker.parseTime(item.children('a').text()));
                    widget.close(instance, true);
                },

                activate: function(i, item) {
                    var widget = this, instance = i === false ? widget.instance : i;

                    if (instance !== widget.instance) {
                        return;
                    } else {
                        widget.deactivate();
                    }

                    if (widget._hasScroll()) {
                        var offset = item.offset().top - widget.ui.offset().top,
                            scroll = widget.ui.scrollTop(),
                            height = widget.ui.height();
                        if (offset < 0) {
                            widget.ui.scrollTop(scroll + offset);
                        } else if (offset >= height) {
                            widget.ui.scrollTop(scroll + offset - height + item.height());
                        }
                    }

                    widget.active = item.eq(0).children('a').addClass('ui-state-hover')
                                                            .attr('id', 'ui-active-item')
                                              .end();
                },

                deactivate: function() {
                    var widget = this;
                    if (!widget.active) { return; }
                    widget.active.children('a').removeClass('ui-state-hover').removeAttr('id');
                    widget.active = null;
                },

                /**
                 * _activate, _deactivate, first, last, next, previous, _move and
                 * _hasScroll were extracted from jQuery UI Menu
                 * http://github,com/jquery/jquery-ui/blob/menu/ui/jquery.ui.menu.js
                 */

                //
                // public methods
                //

                next: function(i) {
                    if (this.closed() || this.instance === i) {
                        this._move(i, 'next', '.ui-menu-item:first');
                    }
                    return i.element;
                },

                previous: function(i) {
                    if (this.closed() || this.instance === i) {
                        this._move(i, 'prev', '.ui-menu-item:last');
                    }
                    return i.element;
                },

                first: function(i) {
                    if (this.instance === i) {
                        return this.active && this.active.prevAll('.ui-menu-item').length === 0;
                    }
                    return false;
                },

                last: function(i) {
                    if (this.instance === i) {
                        return this.active && this.active.nextAll('.ui-menu-item').length === 0;
                    }
                    return false;
                },

                selected: function(i) {
                    if (this.instance === i)  {
                        return this.active ? this.active : null;
                    }
                    return null;
                },

                open: function(i) {
                    var widget = this,
                        selectedTime = i.getTime(),
                        arrange = i.options.dynamic && selectedTime;

                    // return if dropdown is disabled
                    if (!i.options.dropdown) { return i.element; }

                    // if a date is already selected and options.dynamic is true,
                    // arrange the items in the list so the first item is
                    // cronologically right after the selected date.
                    // TODO: set selectedTime
                    if (i.rebuild || !i.items || arrange) {
                        i.items = widget._items(i, arrange ? selectedTime : null);
                    }

                    // remove old li elements keeping associated events, then append
                    // the new li elements to the ul
                    if (i.rebuild || widget.instance !== i || arrange) {
                        // handle menu events when using jQuery versions previous to
                        // 1.4.2 (thanks to Brian Link)
                        // http://github.com/wvega/timepicker/issues#issue/4
                        if ($.fn.jquery < '1.4.2') {
                            widget.viewport.children().remove();
                            widget.viewport.append(i.items);
                            widget.viewport.find('a').bind('mouseover.timepicker', function() {
                                widget.activate(i, $(this).parent());
                            }).bind('mouseout.timepicker', function() {
                                widget.deactivate(i);
                            }).bind('click.timepicker', function(event) {
                                event.preventDefault();
                                widget.select(i, $(this).parent());
                            });
                        } else {
                            widget.viewport.children().detach();
                            widget.viewport.append(i.items);
                        }
                    }

                    i.rebuild = false;

                    // theme
                    widget.container.removeClass('ui-helper-hidden ui-timepicker-hidden ui-timepicker-standard ui-timepicker-corners').show();

                    switch (i.options.theme) {
                    case 'standard':
                        widget.container.addClass('ui-timepicker-standard');
                        break;
                    case 'standard-rounded-corners':
                        widget.container.addClass('ui-timepicker-standard ui-timepicker-corners');
                        break;
                    default:
                        break;
                    }

                    /* resize ui */

                    // we are hiding the scrollbar in the dropdown menu adding a 40px
                    // padding to the wrapper element making the scrollbar appear in the
                    // part of the wrapper that's hidden by the container (a DIV).
                    if ( ! widget.container.hasClass( 'ui-timepicker-no-scrollbar' ) && ! i.options.scrollbar ) {
                        widget.container.addClass( 'ui-timepicker-no-scrollbar' );
                        widget.viewport.css( { paddingRight: 40 } );
                    }

                    var containerDecorationHeight = widget.container.outerHeight() - widget.container.height(),
                        zindex = i.options.zindex ? i.options.zindex : i.element.offsetParent().css( 'z-index' ),
                        elementOffset = i.element.offset();

                    // position the container right below the element, or as close to as possible.
                    widget.container.css( {
                        top: elementOffset.top + i.element.outerHeight(),
                        left: elementOffset.left
                    } );

                    // then show the container so that the browser can consider the timepicker's
                    // height to calculate the page's total height and decide if adding scrollbars
                    // is necessary.
                    widget.container.show();

                    // now we need to calculate the element offset and position the container again.
                    // If the browser added scrollbars, the container's original position is not aligned
                    // with the element's final position. This step fixes that problem.
                    widget.container.css( {
                        left: i.element.offset().left,
                        height: widget.ui.outerHeight() + containerDecorationHeight,
                        width: i.element.outerWidth(),
                        zIndex: zindex,
                        cursor: 'default'
                    } );

                    var calculatedWidth = widget.container.width() - ( widget.ui.outerWidth() - widget.ui.width() );

                    // hardcode ui, viewport and item's width. I couldn't get it to work using CSS only
                    widget.ui.css( { width: calculatedWidth } );
                    widget.viewport.css( { width: calculatedWidth } );
                    i.items.css( { width: calculatedWidth } );

                    // XXX: what's this line doing here?
                    widget.instance = i;

                    // try to match input field's current value with an item in the
                    // dropdown
                    if (selectedTime) {
                        i.items.each(function() {
                            var item = $(this), time;

                            if ($.fn.jquery < '1.4.2') {
                                time = $.fn.timepicker.parseTime(item.find('a').text());
                            } else {
                                time = item.data('time-value');
                            }

                            if (time.getTime() === selectedTime.getTime()) {
                                widget.activate(i, item);
                                return false;
                            }
                            return true;
                        });
                    } else {
                        widget.deactivate(i);
                    }

                    // don't break the chain
                    return i.element;
                },

                close: function(i, force) {
                    var widget = this;
                    if (widget.closed() || force) {
                        clearTimeout(widget.closing);
                        if (widget.instance === i) {
                            widget.container.addClass('ui-helper-hidden ui-timepicker-hidden').hide();
                            widget.ui.scrollTop(0);
                            widget.ui.children().removeClass('ui-state-hover');
                        }
                    } else {
                        widget.closing = setTimeout(function() {
                            widget.close(i, true);
                        }, 150);
                    }
                    return i.element;
                },

                closed: function() {
                    return this.ui.is(':hidden');
                },

                destroy: function(i) {
                    var widget = this;
                    widget.close(i, true);
                    return i.element.unbind('.timepicker').data('TimePicker', null);
                },

                //

                parse: function(i, str) {
                    return $.fn.timepicker.parseTime(str);
                },

                format: function(i, time, format) {
                    format = format || i.options.timeFormat;
                    return $.fn.timepicker.formatTime(format, time);
                },

                getTime: function(i) {
                    var widget = this,
                        current = $.fn.timepicker.parseTime(i.element.val());

                    // if current value is not valid, we return null.
                    // stored Date object is ignored, because the current value
                    // (valid or invalid) always takes priority
                    if (current instanceof Date && !widget._isValidTime(i, current)) {
                        return null;
                    } else if (current instanceof Date && i.selectedTime) {
                        // if the textfield's value and the stored Date object
                        // have the same representation using current format
                        // we prefer the stored Date object to avoid unnecesary
                        // lost of precision.
                        if (i.format(current) === i.format(i.selectedTime)) {
                            return i.selectedTime;
                        } else {
                            return current;
                        }
                    } else if (current instanceof Date) {
                        return current;
                    } else {
                        return null;
                    }
                },

                setTime: function(i, time, silent) {
                    var widget = this, previous = i.selectedTime;

                    if (typeof time === 'string') {
                        time = i.parse(time);
                    }

                    if (time && time.getMinutes && widget._isValidTime(i, time)) {
                        time = normalize(time);
                        i.selectedTime = time;
                        i.element.val(i.format(time, i.options.timeFormat));

                        // TODO: add documentaion about setTime being chainable
                        if (silent) { return i; }
                    } else {
                        i.selectedTime = null;
                    }

                    // custom change event and change callback
                    // TODO: add documentation about this event
                    if (previous !== null || i.selectedTime !== null) {
                        i.element.trigger('time-change', [time]);
                        if ($.isFunction(i.options.change)) {
                            i.options.change.apply(i.element, [time]);
                        }
                    }

                    return i.element;
                },

                option: function(i, name, value) {
                    if (typeof value === 'undefined') {
                        return i.options[name];
                    }

                    var time = i.getTime(),
                        options, destructive;

                    if (typeof name === 'string') {
                        options = {};
                        options[name] = value;
                    } else {
                        options = name;
                    }

                    // some options require rebuilding the dropdown items
                    destructive = ['minHour', 'minMinutes', 'minTime',
                                   'maxHour', 'maxMinutes', 'maxTime',
                                   'startHour', 'startMinutes', 'startTime',
                                   'timeFormat', 'interval', 'dropdown'];


                    $.each(options, function(name) {
                        i.options[name] = options[name];
                        i.rebuild = i.rebuild || $.inArray(name, destructive) > -1;
                    });

                    if (i.rebuild) {
                        i.setTime(time);
                    }
                }
            };

            $.TimePicker.defaults =  {
                timeFormat: 'hh:mm p',
                minHour: null,
                minMinutes: null,
                minTime: null,
                maxHour: null,
                maxMinutes: null,
                maxTime: null,
                startHour: null,
                startMinutes: null,
                startTime: null,
                interval: 30,
                dynamic: true,
                theme: 'standard',
                zindex: null,
                dropdown: true,
                scrollbar: false,
                // callbacks
                change: function(/*time*/) {}
            };

            $.TimePicker.methods = {
                chainable: [
                    'next',
                    'previous',
                    'open',
                    'close',
                    'destroy',
                    'setTime'
                ]
            };

            $.fn.timepicker = function(options) {
                // support calling API methods using the following syntax:
                //   $(...).timepicker('parse', '11p');
                if (typeof options === 'string') {
                    var args = Array.prototype.slice.call(arguments, 1),
                        method, result;

                    // chainable API methods
                    if (options === 'option' && arguments.length > 2) {
                        method = 'each';
                    } else if ($.inArray(options, $.TimePicker.methods.chainable) !== -1) {
                        method = 'each';
                    // API methods that return a value
                    } else {
                        method = 'map';
                    }

                    result = this[method](function() {
                        var element = $(this), i = element.data('TimePicker');
                        if (typeof i === 'object') {
                            return i[options].apply(i, args);
                        }
                    });

                    if (method === 'map' && this.length === 1) {
                        return $.makeArray(result).shift();
                    } else if (method === 'map') {
                        return $.makeArray(result);
                    } else {
                        return result;
                    }
                }

                // calling the constructor again on a jQuery object with a single
                // element returns a reference to a TimePicker object.
                if (this.length === 1 && this.data('TimePicker')) {
                    return this.data('TimePicker');
                }

                var globals = $.extend({}, $.TimePicker.defaults, options);

                return this.each(function() {
                    $.TimePicker.instance().register(this, globals);
                });
            };

            /**
             * TODO: documentation
             */
            $.fn.timepicker.formatTime = function(format, time) {
                var hours = time.getHours(),
                    hours12 = hours % 12,
                    minutes = time.getMinutes(),
                    seconds = time.getSeconds(),
                    replacements = {
                        hh: pad((hours12 === 0 ? 12 : hours12).toString(), '0', 2),
                        HH: pad(hours.toString(), '0', 2),
                        mm: pad(minutes.toString(), '0', 2),
                        ss: pad(seconds.toString(), '0', 2),
                        h: (hours12 === 0 ? 12 : hours12),
                        H: hours,
                        m: minutes,
                        s: seconds,
                        p: hours > 11 ? 'PM' : 'AM'
                    },
                    str = format, k = '';
                for (k in replacements) {
                    if (replacements.hasOwnProperty(k)) {
                        str = str.replace(new RegExp(k,'g'), replacements[k]);
                    }
                }
                // replacements is not guaranteed to be order and the 'p' can cause problems
                str = str.replace(new RegExp('a','g'), hours > 11 ? 'pm' : 'am');
                return str;
            };

            /**
             * Convert a string representing a given time into a Date object.
             *
             * The Date object will have attributes others than hours, minutes and
             * seconds set to current local time values. The function will return
             * false if given string can't be converted.
             *
             * If there is an 'a' in the string we set am to true, if there is a 'p'
             * we set pm to true, if both are present only am is setted to true.
             *
             * All non-digit characters are removed from the string before trying to
             * parse the time.
             *
             * ''       can't be converted and the function returns false.
             * '1'      is converted to     01:00:00 am
             * '11'     is converted to     11:00:00 am
             * '111'    is converted to     01:11:00 am
             * '1111'   is converted to     11:11:00 am
             * '11111'  is converted to     01:11:11 am
             * '111111' is converted to     11:11:11 am
             *
             * Only the first six (or less) characters are considered.
             *
             * Special case:
             *
             * When hours is greater than 24 and the last digit is less or equal than 6, and minutes
             * and seconds are less or equal than 60, we append a trailing zero and
             * start parsing process again. Examples:
             *
             * '95' is treated as '950' and converted to 09:50:00 am
             * '46' is treated as '460' and converted to 05:00:00 am
             * '57' can't be converted and the function returns false.
             *
             * For a detailed list of supported formats check the unit tests at
             * http://github.com/wvega/timepicker/tree/master/tests/
             */
            $.fn.timepicker.parseTime = (function() {
                var patterns = [
                        // 1, 12, 123, 1234, 12345, 123456
                        [/^(\d+)$/, '$1'],
                        // :1, :2, :3, :4 ... :9
                        [/^:(\d)$/, '$10'],
                        // :1, :12, :123, :1234 ...
                        [/^:(\d+)/, '$1'],
                        // 6:06, 5:59, 5:8
                        [/^(\d):([7-9])$/, '0$10$2'],
                        [/^(\d):(\d\d)$/, '$1$2'],
                        [/^(\d):(\d{1,})$/, '0$1$20'],
                        // 10:8, 10:10, 10:34
                        [/^(\d\d):([7-9])$/, '$10$2'],
                        [/^(\d\d):(\d)$/, '$1$20'],
                        [/^(\d\d):(\d*)$/, '$1$2'],
                        // 123:4, 1234:456
                        [/^(\d{3,}):(\d)$/, '$10$2'],
                        [/^(\d{3,}):(\d{2,})/, '$1$2'],
                        //
                        [/^(\d):(\d):(\d)$/, '0$10$20$3'],
                        [/^(\d{1,2}):(\d):(\d\d)/, '$10$2$3']
                    ],
                    length = patterns.length;

                return function(str) {
                    var time = normalize(new Date()),
                        am = false, pm = false, h = false, m = false, s = false;

                    if (typeof str === 'undefined' || !str.toLowerCase) { return null; }

                    str = str.toLowerCase();
                    am = /a/.test(str);
                    pm = am ? false : /p/.test(str);
                    str = str.replace(/[^0-9:]/g, '').replace(/:+/g, ':');

                    for (var k = 0; k < length; k = k + 1) {
                        if (patterns[k][0].test(str)) {
                            str = str.replace(patterns[k][0], patterns[k][1]);
                            break;
                        }
                    }
                    str = str.replace(/:/g, '');

                    if (str.length === 1) {
                        h = str;
                    } else if (str.length === 2) {
                        h = str;
                    } else if (str.length === 3 || str.length === 5) {
                        h = str.substr(0, 1);
                        m = str.substr(1, 2);
                        s = str.substr(3, 2);
                    } else if (str.length === 4 || str.length > 5) {
                        h = str.substr(0, 2);
                        m = str.substr(2, 2);
                        s = str.substr(4, 2);
                    }

                    if (str.length > 0 && str.length < 5) {
                        if (str.length < 3) {
                            m = 0;
                        }
                        s = 0;
                    }

                    if (h === false || m === false || s === false) {
                        return false;
                    }

                    h = parseInt(h, 10);
                    m = parseInt(m, 10);
                    s = parseInt(s, 10);

                    if (am && h === 12) {
                        h = 0;
                    } else if (pm && h < 12) {
                        h = h + 12;
                    }

                    if (h > 24) {
                        if (str.length >= 6) {
                            return $.fn.timepicker.parseTime(str.substr(0,5));
                        } else {
                            return $.fn.timepicker.parseTime(str + '0' + (am ? 'a' : '') + (pm ? 'p' : ''));
                        }
                    } else {
                        time.setHours(h, m, s);
                        return time;
                    }
                };
            })();
        })(jQuery);
    }


});  
