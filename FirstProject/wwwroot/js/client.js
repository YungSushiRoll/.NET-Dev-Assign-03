﻿$(function () {
    // preload audio
    var toast = new Audio('media/toast.wav');

    $('.code').on('click', function (e) {
        e.preventDefault();
        // first pause the audio (in case it is still playing)
        toast.pause();
        // reset the audio
        toast.currentTime = 0;
        // play audio
        toast.play();
        $('#product').html($(e.target).data('product'));
        $('#code').html($(e.target).data('code'));
        $('#toast').toast({ autohide: false }).toast('show');
    });

    $(document).on('keyup',
        key => {
            if (key.key == 'Escape') {
                $('#toast').toast('hide');
            }
        });

});