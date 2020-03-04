jQuery(document).ready(function ($) {
    $('#passBox').focus();
    $('#passBox').on('keydown', function (e) {
        if (e.keyCode == 13) {
            $('#sendBtn').click();
        }
    });
    $('#sendBtn').click(function () {
        let pass = $('#passBox').val();
        if (pass == 'ashi') {
            $('.hide-c').css('display', 'none');
            $('.content').css('display', 'block');
        } else {
            $('#passBox').val('');
        }
    });
});