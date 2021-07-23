// even pada saat di klik
$('.page-scroll').on('click', function(e){
	e.preventDefault();
	// abil isi href
	var tujuan = $(this).attr('href');
	// tangkap elemen ybs
	var elemenTujuan = $(tujuan);
	
	var pos = elemenTujuan.offset().top -50;
	
	$('body, html').animate ({
		scrollTop : pos
	
	});

	

})
