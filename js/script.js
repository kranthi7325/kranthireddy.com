/* ----------------------------- parallax effect of landing page image----------*/
	var ypos,image;
	function parallex() {
		image = document.getElementById('image');
		ypos = window.pageYOffset;
		image.style.top = ypos * .6+ 'px';
	}
	window.addEventListener('scroll', parallex),false;

	/*-----validator of contact form------*/


  $(document).ready(function() {
    $('#contact_form').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            name: {
                validators: {
                        stringLength: {
                        min: 2,
                    },
                        notEmpty: {
                        message: 'Please enter your name'
                    }
                }
            },
             
            _replyto: {
                validators: {
                    notEmpty: {
                        message: 'Please enter your email address'
                    },
                    emailAddress: {
                        message: 'Please supply a valid email address'
                    }
                }
            },
            
            comment: {
                validators: {
                      stringLength: {
                    
                        max: 1000,
                        message:'Please enter at least 2 characters and no more than 200'
                    },
                    notEmpty: {
                        message: 'Please enter your message'
                    }
                    }
                }
            }
        })
        .on('success.form.bv', function(e) {
            $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
                $('#contact_form').data('bootstrapValidator').resetForm();

            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');

            // Use Ajax to submit form data
            $.post($form.attr('action'), $form.serialize(), function(result) {
                console.log(result);
            }, 'json');
        });
});

  var width = $(window).width() - 20; 
$("#sec2").width(width);



	
	


