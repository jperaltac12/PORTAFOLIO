




//*********************************
$('#r1').click(function() {
    Swal.fire({
        icon: 'info',
        iconColor:'#17a2b8',
        html:'<lottie-player src="https://lottie.host/da6f571b-ef3e-46f9-9018-53ed3a2cd0ed/Ox6qpkqe6B.json"  speed="1" style="width: 100%; height: 200" loop autoplay mode="normal"></lottie-player><p>This website is designed with professional purposes only, and its not intended to be commercialized nor to have any sort of revenue from it, its content serves as proof of the skills developed as Front-End Developer. Any other type of usage is prohibited.</P>',

        title: 'General Information',
        position:'center',
        customClass:{
            confirmButton: 'btn btn-info',
        },
        confirmButtonText: '<i class="fa fa-thumbs-up"><i>  Accept',
        showClass: {
            popup: 'animated zoomIn',
        },
        hideClass: {
            popup: 'animated zoomOut',
        },
        showCloseButton: true,
        footer: '<p class="text-info"> All Rights Reserved</p>'
    });
});

//*********************************







