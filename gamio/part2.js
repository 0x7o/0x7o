$("#form").on("submit", function(e){
        e.preventDefault();
        $("main").animate({opacity: 0}, 1000);
        $("#loading").animate({opacity: 1}, 1000);
        $("#s").html('<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span><span class="visually-hidden">Loading...</span>')
        $('#s').attr('disabled', true);
        console.log('Pending...')
	$.ajax({
		url: '/new-world/',
		method: 'post',
		dataType: 'html',
		data: $(this).serialize(),
		success: function(data){
			document.location.href = data;
		}
	});
});
