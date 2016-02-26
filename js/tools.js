(function($) {

    $(document).ready(function() {

        $('.form-input input').each(function() {
            if ($(this).val() == '') {
                $(this).parent().find('span').css({'display': 'block'});
            }
        });

        $('.form-input input').focus(function() {
            $(this).parent().find('span').css({'display': 'none'});
        });

        $('.form-input input').blur(function() {
            if ($(this).val() == '') {
                $(this).parent().find('span').css({'display': 'block'});
            }
        });

        $('.form-checkbox input:checked').parent().addClass('checked');
        $('.form-checkbox span').click(function() {
            $(this).toggleClass('checked');
            $(this).find('input').prop('checked', $(this).hasClass('checked')).trigger('change');
        });

        $('input.maskPhone').mask('+7 (999) 999-99-99');

        $('input.datepicker').datepicker({minDate: "-80Y", maxDate: "-16Y", changeMonth: true, changeYear: true, yearRange: "c-99:c+99"});
        window.setInterval(function() {
            $('input.datepicker').each(function() {
                if ($(this).val() != '') {
                    $(this).parent().find('span').css({'display': 'none'});
                }
            });
        }, 100);

        $('form').validate({
            ignore: '',
            invalidHandler: function(form, validatorcalc) {
                validatorcalc.showErrors();
                var errors = validatorcalc.numberOfInvalids();
                if (errors) {
                    $('.text-error').show();
                }

                $('.form-checkbox').each(function() {
                    var curField = $(this);
                    if (curField.find('label.error').length > 0) {
                        $('.text-error').show();
                    }
                });
            }
        });

    });

})(jQuery);