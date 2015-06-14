$(function() {
    "use strict";


    /* ==========================================================================
   countdown
   ========================================================================== */

    $('.countdown').downCount({
        date: '12/15/2014 12:00:00' // m/d/y
    });
		


    /* ==========================================================================
   Preload
   ========================================================================== */

    $(window).load(function() {

        $("#status").fadeOut();

        $("#preloader").delay(1000).fadeOut("slow");
    })		
		


    /* ==========================================================================
   onscroll animation
   ========================================================================== */

    if ($(window).width() > 992) {

        $(window).fadeThis({
            'reverse': false
        });
    };


    /* ==========================================================================
       Number animation
       ========================================================================== */




    $('.counter').waypoint(function() {

        var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',');

        $('.total-number-1').animateNumber({
            number: 50000, //change value here
            numberStep: comma_separator_number_step
        }, 2000);

        $('.total-number-2').animateNumber({
            number: 20000, //change value here
            numberStep: comma_separator_number_step
        }, 2000);

        $('.total-number-3').animateNumber({
            number: 15000, //change value here
            numberStep: comma_separator_number_step
        }, 2000);

        $('.total-number-4').animateNumber({
            number: 10000, //change value here
            numberStep: comma_separator_number_step
        }, 2000);



    }, {
        offset: '80%'

    });


    /* ==========================================================================
     sub form
     ========================================================================== */

    var $form = $('#mc-form');

    $('#mc-subscribe').on('click', function(event) {
        if (event) event.preventDefault();
        register($form);
    });

    function register($form) {
        $.ajax({
            type: $form.attr('method'),
            url: $form.attr('action'),
            data: $form.serialize(),
            cache: false,
            dataType: 'json',
            contentType: "application/json; charset=utf-8",
            error: function(err) {
                $('#mc-notification').hide().html('<span class="alert">Could not connect to server. Please try again later.</span>').fadeIn("slow");

            },
            success: function(data) {

                if (data.result != "success") {
                    var message = data.msg.substring(4);
                    $('#mc-notification').hide().html('<span class="alert"><i class="fa fa-info-circle"></i>' + message + '</span>').fadeIn("slow");
                    $('#mc-form input[type="email"]').removeClass('success-input').addClass('error-input');
                } else {
                    var message = data.msg.substring(4);
                    $('#mc-notification').hide().html('<span class="success"><i class="fa fa-paper-plane"></i>' + 'Awesome! We sent you a confirmation email.' + '</span>').fadeIn("slow");
                    $('#mc-form input[type="email"]').removeClass('error-input').addClass('success-input');
                }
            }
        });
    }

 $('#contactus-form').validate({
        highlight: function(element, errorClass) {
            $(element).fadeOut(function() {
                $(element).fadeIn();
            });
        },
        rules: {
           'data[ContactUs][first_name]': {
                required: true,
                minlength: 2
            },
			'data[ContactUs][last_name]': {
                required: true,
                minlength: 2
            },
            'data[ContactUs][mail]': {
                required: true,
                email: true
            },
           'data[ContactUs][message]': {
                required: true,
                minlength: 10
            }
        },
        messages: {
            'data[ContactUs][first_name]': "<i class='fa fa-info-circle'></i>Please specify your first name",
			'data[ContactUs][last_name]': "<i class='fa fa-info-circle'></i>Please specify your last name",
            'data[ContactUs][mail]': {
                required: "<i class='fa fa-info-circle'></i>We need your email address to contact you",
                email: "<i class='fa fa-info-circle'></i>Please enter a valid email address."
            },
            'data[ContactUs][message]': "<i class='fa fa-info-circle'></i>Please enter your message"
        }/* ,
        submitHandler: function(form) {
            $(form).ajaxSubmit({
                type: "POST",
                data: $(form).serialize(),
                url: SITE_URL+"/users/contact_us",
                success: function() {
					$("#ContactUsFirstName").attr('value','');
					$("#ContactUsLastName").attr('value','');
					$("#ContactUsMail").attr('value','');
					$("#ContactUsMessage").attr('value','');
                    $('.success-sf').slideDown();
					
                },
                error: function() {
                    $('.error-sf').slideDown();
                }
            });
        } */
    }); 

    /* ==========================================================================
   ScrollTop Button
   ========================================================================== */


    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.scroll-top a').fadeIn(200);
        } else {
            $('.scroll-top a').fadeOut(200);
        }
    });


    $('.scroll-top a').click(function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });

	
	
	$('#UserMemberSignupForm').validate({
        highlight: function(element, errorClass) {
            $(element).fadeOut(function() {
                $(element).fadeIn();
            });
        },
        rules: {
            'data[User][first_name]': {
                required: true
            },
			'data[User][last_name]': {
                required: true
            },
            'data[User][email]': {
                required: true,
                email: true
            },
			'data[User][zipcode]': {
                required: true
            },
			'data[User][city]': {
                required: true
            },
			'data[User][about_us]': {
                required: true
            }
        },
        messages: {
            'data[User][first_name]': "<i class='fa fa-info-circle'></i>First Name is required.",
			'data[User][last_name]': "<i class='fa fa-info-circle'></i>Last Name is required.",
			'data[User][email]': "<i class='fa fa-info-circle'></i>Email is required.",
			'data[User][zipcode]': "<i class='fa fa-info-circle'></i>Zipcode is required.",
			'data[User][city]': "<i class='fa fa-info-circle'></i>City is required.",
			'data[User][about_us]': "<i class='fa fa-info-circle'></i>Hear about us is required.",
           
        }
    });
	
	
	
	$('#UserPractitionersSignupForm').validate({
        highlight: function(element, errorClass) {
            $(element).fadeOut(function() {
                $(element).fadeIn();
            });
        },
        rules: {
            'data[User][first_name]': {
                required: true
            },
			'data[User][last_name]': {
                required: true
            },
			
            'data[User][email]': {
                required: true,
                email: true
            },
			'data[User][zipcode]': {
                required: true
            },
			'data[User][city]': {
                required: true
            },
			'data[User][about_us]': {
                required: true
            }
        },
        messages: {
            'data[User][first_name]': "<i class='fa fa-info-circle'></i>First Name is required.",
			'data[User][last_name]': "<i class='fa fa-info-circle'></i>Last Name is required.",
			//'data[User][business_name]': "<i class='fa fa-info-circle'></i>Business Name is required.",
			'data[User][email]': "<i class='fa fa-info-circle'></i>Email is required.",
			'data[User][zipcode]': "<i class='fa fa-info-circle'></i>Zipcode is required.",
			'data[User][city]': "<i class='fa fa-info-circle'></i>City is required.",
			'data[User][about_us]': "<i class='fa fa-info-circle'></i>Hear about us is required.",
           
        }
    });
	
	
	
	$('#invitation-form').validate({
        highlight: function(element, errorClass) {
            $(element).fadeOut(function() {
                $(element).fadeIn();
            });
        },
        rules: {
           'data[User][name]': {
                required: true,
                minlength: 2
            },
            'data[User][email]': {
                required: true,
                email: true
            },
            'data[User][captcha]': {
                required: true
            },
            'data[User][friend_email]': {
                checkFriendEmailError:true ,
				checkFriendEmailValidationError:true 
            }
        },
        messages: {
            'data[User][name]': "<i class='fa fa-info-circle'></i>Please enter friends name.",
			'data[User][captcha]': "<i class='fa fa-info-circle'></i>Please enter captcha code..",
            'data[User][email]': {
                required: "<i class='fa fa-info-circle'></i>Please enter email address. ",
                email: "<i class='fa fa-info-circle'></i>Please enter a valid email address."
            }
        }
    });
	
	
	jQuery.validator.addMethod("checkFriendEmailError", function(value, element) {
	var friendemail = jQuery('#UserFriendEmail').val();
		if (friendemail.length == 0) {           
				return false;
			}
		else{
			return true;	
		}
	}, "<i class='fa fa-info-circle'></i>Address is required for invitation.");
	
	jQuery.validator.addMethod("checkFriendEmailValidationError", function(value, element) {
	
		
		var emailList = jQuery('#UserFriendEmail').val();
		
		emailList = emailList.replace(/^\s+|\s+$/g,'')
		
		
		var emails = emailList.split(",");



		var valid = true;
		var regex = /^(([^<>()[\]\\.,;:@\"]+(\.[^<>()[\]\\.,;:@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		for (var i = 0; i < emails.length; i++) {
			 if( emails[i] == "" || ! regex.test(emails[i])){
				 valid = false;
			 }
		}
		if(!valid)
		{
			return false;
		}
		else
		{
			return true;
		}		


		
	 
		
	}, "<i class='fa fa-info-circle'></i>Please Enter the valid email address for invitation"); 
});



