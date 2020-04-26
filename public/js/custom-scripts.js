$(document).ready(function(){ 

	 	 var sliders = new Array();
		 $('.bxslider').each(function(i){
				sliders[i] = $(this).bxSlider({
					mode: 'fade',
					startSlide: 0,
					pager: true,
					controls: false,
					auto: false,
					slideMargin: 0
					
					 
				});

		});

		 $(document).on('click', "#btnSwitch", function(){


		 		var option = $(this).data('switch');

		 		var $opt = (option==1)? "OFF":"ON";

		 		if(confirm("Switch this feature " + $opt + "?")){
			 		$.ajax({
								type: "POST",
								url: "toggle-nav-feature.php",
								data: "option=" + option,
									success: function(data) { 
										//alert(data);
										$(".msg").html(data);
										location.reload();
									},
									error:function(x,e) {
									    if (x.status==0) {
									        alert('You are offline!!\n Please Check Your Network.');
									    } else if(x.status==404) {
									        alert('Requested URL not found.');
									    } else if(x.status==500) {
									        alert('Internel Server Error.');
									    } else if(e=='parsererror') {
									        alert('Error.\nParsing JSON Request failed.');
									    } else if(e=='timeout'){
									        alert('Request Time out.');
									    } else {
									        alert('Unknow Error.\n'+x.responseText);
									    }
									}	
					});
				}	



		 });

		$(document).on('change', "#nav-font, #slogan-font", function(){

				var font = $(this).val();

				$(".text-sample").css("font-family", font);

		}); 	

		 $(document).on('click', "#btnNavSettings", function(){

		 		//var photo = $(this).data('id');

		 		$.ajax({
							type: "POST",
							url: "save-nav-settings.php",
							data: $("#frmNavSettings").serialize(),
								success: function(data) { 
									//alert(data);
									$(".msg").html(data);
									location.reload();
								},
								error:function(x,e) {
								    if (x.status==0) {
								        alert('You are offline!!\n Please Check Your Network.');
								    } else if(x.status==404) {
								        alert('Requested URL not found.');
								    } else if(x.status==500) {
								        alert('Internel Server Error.');
								    } else if(e=='parsererror') {
								        alert('Error.\nParsing JSON Request failed.');
								    } else if(e=='timeout'){
								        alert('Request Time out.');
								    } else {
								        alert('Unknow Error.\n'+x.responseText);
								    }
								}	
				});	


		 });

		 $(document).on('click', "#selectAsHeader", function(){

		 		var photo = $(this).data('id');

		 		$.ajax({
							type: "POST",
							url: "save-header.php",
							data: "photo=" + photo,
								success: function(data) { 
									//alert(data);
									$(".bannerPhoto").empty();
									$(".bannerPhoto").html(data);
									$(".msg").html("<div class='alert alert-success'>Header Updated!</div>").fadeOut(5000);
									location.reload();
								},
								error:function(x,e) {
								    if (x.status==0) {
								        alert('You are offline!!\n Please Check Your Network.');
								    } else if(x.status==404) {
								        alert('Requested URL not found.');
								    } else if(x.status==500) {
								        alert('Internel Server Error.');
								    } else if(e=='parsererror') {
								        alert('Error.\nParsing JSON Request failed.');
								    } else if(e=='timeout'){
								        alert('Request Time out.');
								    } else {
								        alert('Unknow Error.\n'+x.responseText);
								    }
								}	
				});	


		 });

		 $(document).on('click', "#btnSaveRowOptions", function(){


		 			var $row = $(this).data("row");

		 		$.ajax({
							type: "POST",
							url: "save-row-options.php",
							data: $("#frmRowOptions").serialize() + "&row=" + $row,
								success: function(data) {
									$(".msg").html(data).fadeOut(5000);
									location.reload();
									//alert(data);
								},
								error:function(x,e) {
								    if (x.status==0) {
								        alert('You are offline!!\n Please Check Your Network.');
								    } else if(x.status==404) {
								        alert('Requested URL not found.');
								    } else if(x.status==500) {
								        alert('Internel Server Error.');
								    } else if(e=='parsererror') {
								        alert('Error.\nParsing JSON Request failed.');
								    } else if(e=='timeout'){
								        alert('Request Time out.');
								    } else {
								        alert('Unknow Error.\n'+x.responseText);
								    }
								}	
				});


		 });

		 $(document).on('click', "#btnremovephoto", function(){


		 		if(confirm("Remove this photo from the slider?")){

		 				//alert("Function in progress!");

		 				var photo = $(this).data('id');

		 				$.ajax({
							type: "POST",
							url: "delete-photo.php",
							data: "photo=" + photo,
								success: function(data) {
									if(data!=""){
										alert(data);
									} else {
										location.reload();
									}
								},
								error:function(x,e) {
								    if (x.status==0) {
								        alert('You are offline!!\n Please Check Your Network.');
								    } else if(x.status==404) {
								        alert('Requested URL not found.');
								    } else if(x.status==500) {
								        alert('Internel Server Error.');
								    } else if(e=='parsererror') {
								        alert('Error.\nParsing JSON Request failed.');
								    } else if(e=='timeout'){
								        alert('Request Time out.');
								    } else {
								        alert('Unknow Error.\n'+x.responseText);
								    }
								}	
						});

		 		}


		 });

		$(document).on('click', "#btnSaveOrder", function(){

				var slideid = $(this).data('sliderid'); 

				$.ajax({
						type: "POST",
						url: "arrange-photos.php",
						data: $("#frmGallery").serialize() + "&slideid=" + slideid,
							success: function(data) {
								 
								
									$(".msg").html(data).fadeOut(5000);
									location.reload();
									//alert(data);


							},
							error:function(x,e) {
							    if (x.status==0) {
							        alert('You are offline!!\n Please Check Your Network.');
							    } else if(x.status==404) {
							        alert('Requested URL not found.');
							    } else if(x.status==500) {
							        alert('Internel Server Error.');
							    } else if(e=='parsererror') {
							        alert('Error.\nParsing JSON Request failed.');
							    } else if(e=='timeout'){
							        alert('Request Time out.');
							    } else {
							        alert('Unknow Error.\n'+x.responseText);
							    }
							}	
				});


		}); 	

		 
		 $(document).on('click', '#btnChangeOrder', function(){


		 		$.ajax({
						type: "POST",
						url: "change-order.php",
						data: $("#frmmanagehome").serialize(),
							success: function(data) {
								 
								
									$(".msg").html(data).fadeOut(5000);
									location.reload();


							},
							error:function(x,e) {
							    if (x.status==0) {
							        alert('You are offline!!\n Please Check Your Network.');
							    } else if(x.status==404) {
							        alert('Requested URL not found.');
							    } else if(x.status==500) {
							        alert('Internel Server Error.');
							    } else if(e=='parsererror') {
							        alert('Error.\nParsing JSON Request failed.');
							    } else if(e=='timeout'){
							        alert('Request Time out.');
							    } else {
							        alert('Unknow Error.\n'+x.responseText);
							    }
							}	
				});



		 });

        $(document).on('click', "#btnSaveSlider", function(){ 
        		 
        		var slider = $(this).data('slider');
				var row = $(this).data('row');

        		 $.ajax({
						type: "POST",
						url: "save-to-slide.php",
						data: $("#frmCheckPhotos").serialize(),
							success: function(data) {
								 

								

								$("#bxslider"+slider+""+row).empty();
								 
								$("#bxslider"+slider+""+row).append(data);
 
								/*$('.bxslider').each(function(i){
								  		sliders[i].reloadSlider();
								 });*/
							 	
								location.reload(); 	
 								  

								 //alert("#bxslider"+slider+""+row);
								 //alert(data);
								 $(".msg").html("<div class='alert alert-info text-center'>Sliders Updated!</div>").fadeOut(5000);

							},
							error:function(x,e) {
							    if (x.status==0) {
							        alert('You are offline!!\n Please Check Your Network.');
							    } else if(x.status==404) {
							        alert('Requested URL not found.');
							    } else if(x.status==500) {
							        alert('Internel Server Error.');
							    } else if(e=='parsererror') {
							        alert('Error.\nParsing JSON Request failed.');
							    } else if(e=='timeout'){
							        alert('Request Time out.');
							    } else {
							        alert('Unknow Error.\n'+x.responseText);
							    }
							}	
				});


        });

		 $(document).on('change', "select[name='location-on-slider']", function(){

		 		var location = $(this).val();

		 		$.ajax({
						type: "POST",
						url: "get_sublocation.php",
						data: "location=" + location,
							success: function(data) {
								 
								$("select[name='sublocation-on-slider']").empty();

								$("select[name='sublocation-on-slider']").append(data);

							},
							error:function(x,e) {
							    if (x.status==0) {
							        alert('You are offline!!\n Please Check Your Network.');
							    } else if(x.status==404) {
							        alert('Requested URL not found.');
							    } else if(x.status==500) {
							        alert('Internel Server Error.');
							    } else if(e=='parsererror') {
							        alert('Error.\nParsing JSON Request failed.');
							    } else if(e=='timeout'){
							        alert('Request Time out.');
							    } else {
							        alert('Unknow Error.\n'+x.responseText);
							    }
							}	
				});



		 });


		 $(document).on('change', "select[name='animals-on-slider']", function(){


		 		var animal = $(this).val();

		 		$.ajax({
						type: "POST",
						url: "get_subanimals.php",
						data: "animal=" + animal,
							success: function(data) {
								 
								$("select[name='subanimals-on-slider']").empty();

								$("select[name='subanimals-on-slider']").append(data);

							},
							error:function(x,e) {
							    if (x.status==0) {
							        alert('You are offline!!\n Please Check Your Network.');
							    } else if(x.status==404) {
							        alert('Requested URL not found.');
							    } else if(x.status==500) {
							        alert('Internel Server Error.');
							    } else if(e=='parsererror') {
							        alert('Error.\nParsing JSON Request failed.');
							    } else if(e=='timeout'){
							        alert('Request Time out.');
							    } else {
							        alert('Unknow Error.\n'+x.responseText);
							    }
							}	
				});



		 });

		 $(document).on('click', "#btnSearchPhotos", function(){


		 		//alert($(this).val());

		 		var type = $("select[name='mediatype']").val();
		 		var year = $("select[name='photoyear']").val();
		 		var animals = $("select[name='animals-on-slider']").val();
		 		var subanimals = $("select[name='subanimals-on-slider']").val();
		 		var location = $("select[name='location-on-slider']").val();
		 		var sublocation = $("select[name='sublocation-on-slider']").val();
		 		var trip = $("select[name='cbotrips']").val();
		 		var ph = $("input[name='ph']").val();
		 		var row = $("input[name='row']").val();
		 		var pic = $("input[name='pic']").val();


		 		$.ajax({
						type: "POST",
						url: "slider.filters.php",
						data: "type=" + type + "&year=" + year + "&animal=" + animals + "&sanimal=" + subanimals + "&location=" + location + "&slocation=" + sublocation + "&trip=" + trip + "&ph=" + ph + "&row=" + row + "&pic=" + pic,
							success: function(data) {
								 
								 //alert(data);
								 $(".photoContainer").empty();
								 $(".photoContainer").append(data);
								 
							},
							error:function(x,e) {
							    if (x.status==0) {
							        alert('You are offline!!\n Please Check Your Network.');
							    } else if(x.status==404) {
							        alert('Requested URL not found.');
							    } else if(x.status==500) {
							        alert('Internel Server Error.');
							    } else if(e=='parsererror') {
							        alert('Error.\nParsing JSON Request failed.');
							    } else if(e=='timeout'){
							        alert('Request Time out.');
							    } else {
							        alert('Unknow Error.\n'+x.responseText);
							    }
							}	
				});



		 });


		 $(document).on('click', "#btnSearchBanner", function(){


		 		//alert($(this).val());

		 		var type = $("select[name='mediatype']").val();
		 		var year = $("select[name='photoyear']").val();
		 		var animals = $("select[name='animals-on-slider']").val();
		 		var subanimals = $("select[name='subanimals-on-slider']").val();
		 		var location = $("select[name='location-on-slider']").val();
		 		var sublocation = $("select[name='sublocation-on-slider']").val();
		 		var trip = $("select[name='cbotrips']").val();
		 		var ph = $("input[name='ph']").val();
		 		var row = $("input[name='row']").val();
		 		var pic = $("input[name='pic']").val();


		 		$.ajax({
						type: "POST",
						url: "banner.filters.php",
						data: "type=" + type + "&year=" + year + "&animal=" + animals + "&sanimal=" + subanimals + "&location=" + location + "&slocation=" + sublocation + "&trip=" + trip + "&ph=" + ph + "&row=" + row + "&pic=" + pic,
							success: function(data) {
								 
								 //alert(data);
								 $(".photoContainer").empty();
								 $(".photoContainer").append(data);
								 
							},
							error:function(x,e) {
							    if (x.status==0) {
							        alert('You are offline!!\n Please Check Your Network.');
							    } else if(x.status==404) {
							        alert('Requested URL not found.');
							    } else if(x.status==500) {
							        alert('Internel Server Error.');
							    } else if(e=='parsererror') {
							        alert('Error.\nParsing JSON Request failed.');
							    } else if(e=='timeout'){
							        alert('Request Time out.');
							    } else {
							        alert('Unknow Error.\n'+x.responseText);
							    }
							}	
				});



		 });

		$(document).on('click', "input[name='photo[]']", function(){

				//alert($(this).val());
				
		         
				 
				var checked = $(this).is(':checked');
				
				var retvalue = true;
 
			    


			    if(checked){

			    	retvalue = true;

			    } else {

			    	if(confirm("Don't use this photo?")){

			    		$(this).attr("checked");
			    		retvalue = false;

			    	} else {

			    		return false;
			    		//retvalue = true;

			    	}

			    }

			   /* $.ajax({
						type: "POST",
						url: "save-to-slide.php",
						data: "slider=" + slider + "&slide=" + slide + "&check=" + retvalue,
							success: function(data) {
								 

								$(".row_"+row+" .position_"+position+" #bxslider"+position+"_"+row).empty();
								 
								$(".row_"+row+" .position_"+position+" #bxslider"+position+"_"+row).append(data);
 

								$(".row_"+row+" input[name='photo_"+position+"']").val(slider);

 								  $('.bxslider').each(function(i){
								  	sliders[i].reloadSlider();
								  });

							},
							error:function(x,e) {
							    if (x.status==0) {
							        alert('You are offline!!\n Please Check Your Network.');
							    } else if(x.status==404) {
							        alert('Requested URL not found.');
							    } else if(x.status==500) {
							        alert('Internel Server Error.');
							    } else if(e=='parsererror') {
							        alert('Error.\nParsing JSON Request failed.');
							    } else if(e=='timeout'){
							        alert('Request Time out.');
							    } else {
							        alert('Unknow Error.\n'+x.responseText);
							    }
							}	
				});*/

		});


		$(document).on('click', '.save-custom-filter', function(){

				var type = $("select[name='cbotype']").val();
				var year = $("select[name='cboyear']").val();
				var animal = $("select[name='cboanimals-filter']").val();
				var sanimal = $("select[name='cboSubAnimals-filter']").val();
				var location = $("select[name='cbolocation-filter']").val();
				var slocation = $("select[name='cboSubLocation']").val();
				var trip = $("select[name='cbotrips']").val();
				var photo = $(this).data('id');

				$.ajax({
						type: "POST",
						url: "save.custom.filters.php",
						data: "photo=" + photo + "&type=" + type + "&year=" + year + "&animal=" + animal + "&sanimal=" + sanimal + "&location=" + location + "&slocation=" + slocation + "&trip=" + trip,
							success: function(data) {
								 
								 if(data!=""){
									alert(data);
								 } else {
								 	alert("Filter Saved!");
								 }
								 //alert(data);
								 
							},
							error:function(x,e) {
							    if (x.status==0) {
							        alert('You are offline!!\n Please Check Your Network.');
							    } else if(x.status==404) {
							        alert('Requested URL not found.');
							    } else if(x.status==500) {
							        alert('Internel Server Error.');
							    } else if(e=='parsererror') {
							        alert('Error.\nParsing JSON Request failed.');
							    } else if(e=='timeout'){
							        alert('Request Time out.');
							    } else {
							        alert('Unknow Error.\n'+x.responseText);
							    }
							}	
				});


		});

		$(document).on('click',"input[name='show_wmark']", function(){

				var checked = $(this).is(':checked');
				var photo = $(this).data('id');
				var retvalue = true;
			    
			    if(checked){

			    	retvalue = true;

			    } else {

			    	if(confirm("Don't use watermark on this photo?")){

			    		$(this).attr("checked");
			    		retvalue = false;

			    	} else {

			    		return false;
			    		//retvalue = true;

			    	}

			    }

			    $.ajax({
						type: "POST",
						url: "remove-watermark.php",
						data: "photo=" + photo + "&checked=" + retvalue,
							success: function(data) {
								 
								 if(data!=""){
									alert(data);
								 }
								 
							},
							error:function(x,e) {
							    if (x.status==0) {
							        alert('You are offline!!\n Please Check Your Network.');
							    } else if(x.status==404) {
							        alert('Requested URL not found.');
							    } else if(x.status==500) {
							        alert('Internel Server Error.');
							    } else if(e=='parsererror') {
							        alert('Error.\nParsing JSON Request failed.');
							    } else if(e=='timeout'){
							        alert('Request Time out.');
							    } else {
							        alert('Unknow Error.\n'+x.responseText);
							    }
							}	
				});


			    //alert(retvalue);

		});
	


		$(document).on('click',"input[name='show_in_home']", function(){

				var checked = $(this).is(':checked');
				var photo = $(this).data('id');
				var retvalue = true;
			    
			    if(checked){

			    	retvalue = true;

			    } else {

			    	if(confirm("Don't use this on homepage?")){

			    		$(this).attr("checked");
			    		retvalue = false;

			    	} else {

			    		return false;
			    		//retvalue = true;

			    	}

			    }

			    $.ajax({
						type: "POST",
						url: "check-photo.php",
						data: "photo=" + photo + "&checked=" + retvalue,
							success: function(data) {
								 
								 if(data!=""){
									alert(data);
								 }
								 
							},
							error:function(x,e) {
							    if (x.status==0) {
							        alert('You are offline!!\n Please Check Your Network.');
							    } else if(x.status==404) {
							        alert('Requested URL not found.');
							    } else if(x.status==500) {
							        alert('Internel Server Error.');
							    } else if(e=='parsererror') {
							        alert('Error.\nParsing JSON Request failed.');
							    } else if(e=='timeout'){
							        alert('Request Time out.');
							    } else {
							        alert('Unknow Error.\n'+x.responseText);
							    }
							}	
				});


			    //alert(retvalue);

		});


		$(document).on('click', ".delete-row", function(){ 

				var row = $(this).data('row');

				if(confirm("Delete this row?")){

					$(this).closest('tr').remove();

				$.ajax({
						type: "POST",
						url: "delete-row.php",
						data: "row=" + row,
							success: function(data) {
								if(data!=""){
									alert(data);
								}
							},
							error:function(x,e) {
							    if (x.status==0) {
							        alert('You are offline!!\n Please Check Your Network.');
							    } else if(x.status==404) {
							        alert('Requested URL not found.');
							    } else if(x.status==500) {
							        alert('Internel Server Error.');
							    } else if(e=='parsererror') {
							        alert('Error.\nParsing JSON Request failed.');
							    } else if(e=='timeout'){
							        alert('Request Time out.');
							    } else {
							        alert('Unknow Error.\n'+x.responseText);
							    }
							}	
				});


				} else {
					return false;
				}


		});


		$(document).on('click',".new-row", function(){


			
				var table = $(".homesetting tbody");

				
				$.ajax({
						type: "POST",
						url: "new-row.php",
						data: "row=1",
							success: function(data) {
								if(data){
									$(data).appendTo(table);
								} 

								//alert(data);
							},
							error:function(x,e) {
							    if (x.status==0) {
							        alert('You are offline!!\n Please Check Your Network.');
							    } else if(x.status==404) {
							        alert('Requested URL not found.');
							    } else if(x.status==500) {
							        alert('Internel Server Error.');
							    } else if(e=='parsererror') {
							        alert('Error.\nParsing JSON Request failed.');
							    } else if(e=='timeout'){
							        alert('Request Time out.');
							    } else {
							        alert('Unknow Error.\n'+x.responseText);
							    }
							}	
				});




		});


		$(document).on('click',".save-row", function(){

				var row = $(this).data('row');
				var photo1 = $(".row_"+row+" input[name='photo_1']").val();
				var photo2 = $(".row_"+row+" input[name='photo_2']").val();
				var photo3 = $(".row_"+row+" input[name='photo_3']").val();
				var template = $(".cborow_"+row).val();

				//alert("Row:"+row+" P1:"+photo1+" P2:"+photo2+" P3:"+photo3+" Temp:"+template);

				$.ajax({ 
						type: "POST",
						url: "save-row.php",
						data: "row=" + row + "&p1=" + photo1 +"&p2=" + photo2 +"&p3=" + photo3 +"&temp=" + template,
							success: function(data) {
								if(data){
									$(".msg").empty();
									$(".msg").append(data).fadeIn(200).fadeOut(5000);
								} 
							},
							error:function(x,e) {
							    if (x.status==0) {
							        alert('You are offline!!\n Please Check Your Network.');
							    } else if(x.status==404) {
							        alert('Requested URL not found.');
							    } else if(x.status==500) {
							        alert('Internel Server Error.');
							    } else if(e=='parsererror') {
							        alert('Error.\nParsing JSON Request failed.');
							    } else if(e=='timeout'){
							        alert('Request Time out.');
							    } else {
							        alert('Unknow Error.\n'+x.responseText);
							    }
							}	
				});




		});


		$(document).on('click', ".select-photo", function(){


				var photo = $(this).data('photo');
				var row = $(this).data('row');
				var position = $(this).data('pic');	

				//alert("Photo: "+photo+"Row: "+row+"Position: "+position);

				$.ajax({
						type: "POST",
						url: "select-photos.php",
						data: "img=" + photo,
							success: function(data) {
								 


								$(".row_"+row+" .position_"+position).html(data);
								$(".row_"+row+" input[name='photo_"+position+"']").val(photo);
								 
								$(".close-modal").click();
							},
							error:function(x,e) {
							    if (x.status==0) {
							        alert('You are offline!!\n Please Check Your Network.');
							    } else if(x.status==404) {
							        alert('Requested URL not found.');
							    } else if(x.status==500) {
							        alert('Internel Server Error.');
							    } else if(e=='parsererror') {
							        alert('Error.\nParsing JSON Request failed.');
							    } else if(e=='timeout'){
							        alert('Request Time out.');
							    } else {
							        alert('Unknow Error.\n'+x.responseText);
							    }
							}	
				});


		});


		$(document).on('change', ".cborow", function(){

				var cbo = $(this).data('row');
				var cboValue = $(this).val();
				
				var formatOne =  `<div class="row"> 
                     <div class="col-md-4 text-center"> 
                         <div class="box position_1">
                         	<ul class="bxslider gallery list-unstyled cS-hidden" id="bxslider1`+cbo+`">
                            </ul>
                         </div>
                         <input type="hidden" name="photo_1"> 
                         
                         <div class="btn-group btns-groupi">

                          <a rel="modal:open" href="photo-gallery.php?row=`+cbo+`&pic=1"  class="btn btn-info btn-sm">Select Pic</a>

                          <button type="button" class="btn btn-primary dropdown-toggle btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Add Slider
                          </button>
                          <div class="dropdown-menu">
                              <a href="filters.php?photo=0" rel="modal:open" class="dropdown-item">Filter</a> 

                              <a rel="modal:open" href="photo-slider.php?ph=0&pic=1&row=`+cbo+`&temp=1"  class="dropdown-item" >Add Picture</a> 
                          </div>
                          	<a rel="modal:open" href="manage-slider.php?row=`+cbo+`&pic=1"  class="btn btn-warning btn-sm">Manage Slider</a>
                        </div>
                       </div> 
                       <div class="col-md-4 text-center"> 
                         <div class="box position_2">
                         	<ul class="bxslider gallery list-unstyled cS-hidden" id="bxslider2`+cbo+`">
                            </ul>
                         </div>
                         <input type="hidden" name="photo_2"> 
                         
                         <div class="btn-group btns-groupi">

                          <a rel="modal:open" href="photo-gallery.php?row=`+cbo+`&pic=2"  class="btn btn-info btn-sm">Select Pic</a>

                          <button type="button" class="btn btn-primary dropdown-toggle btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Add Slider
                          </button>
                          <div class="dropdown-menu">
                              <a href="filters.php?photo=0" rel="modal:open" class="dropdown-item">Filter</a> 

                              <a rel="modal:open" href="photo-slider.php?ph=0&pic=2&row=`+cbo+`&temp=1"  class="dropdown-item" >Add Picture</a> 
                          </div>
                          <a rel="modal:open" href="manage-slider.php?row=`+cbo+`&pic=2"  class="btn btn-warning btn-sm">Manage Slider</a>
                        </div>
                       </div> 
                       <div class="col-md-4 text-center"> 
                        <div class="box position_3">
                        	<ul class="bxslider gallery list-unstyled cS-hidden" id="bxslider3`+cbo+`">
                            </ul>
                        </div>
                        <input type="hidden" name="photo_3"> 
                         
                         <div class="btn-group btns-groupi">

                          <a rel="modal:open" href="photo-gallery.php?row=`+cbo+`&pic=3"  class="btn btn-info btn-sm">Select Pic</a>

                          <button type="button" class="btn btn-primary dropdown-toggle btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Add Slider
                          </button>
                          <div class="dropdown-menu">
                              <a href="filters.php?photo=0" rel="modal:open" class="dropdown-item">Filter</a> 

                              <a rel="modal:open" href="photo-slider.php?ph=0&pic=3&row=`+cbo+`&temp=1"  class="dropdown-item" >Add Picture</a> 
                          </div>
                          <a rel="modal:open" href="manage-slider.php?row=`+cbo+`&pic=3"  class="btn btn-warning btn-sm">Manage Slider</a>
                        </div>
                       </div> 
                     </div>`;

 

                var formatTwo = `<div class="row">
                        <div class="col-md-4 text-center">
                          <div class="box position_1">
                          	<ul class="bxslider gallery list-unstyled cS-hidden" id="bxslider1`+cbo+`">
                            </ul>
                          </div>
                          <input type="hidden" name="photo_1">
                          

                        <div class="btn-group btns-groupi">

                          <a rel="modal:open" href="photo-gallery.php?row=`+cbo+`&pic=1"  class="btn btn-info btn-sm">Select Pic</a>

                          <button type="button" class="btn btn-primary dropdown-toggle btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Add Slider
                          </button>
                          <div class="dropdown-menu">
                              <a href="filters.php?photo=0" rel="modal:open" class="dropdown-item">Filter</a> 

                              <a rel="modal:open" href="photo-slider.php?ph=0&pic=1&row=`+cbo+`&temp=2"  class="dropdown-item" >Add Picture</a> 
                          </div>
                          <a rel="modal:open" href="manage-slider.php?row=`+cbo+`&pic=1"  class="btn btn-warning btn-sm">Manage Slider</a>
                        </div>


                          <div class="clearfix"></div>  

                          <div class="box position_2">
                          	<ul class="bxslider gallery list-unstyled cS-hidden" id="bxslider2`+cbo+`">
                            </ul>
                          </div>
                          <input type="hidden" name="photo_2">
                          

                        <div class="btn-group btns-groupi">

                          <a rel="modal:open" href="photo-gallery.php?row=`+cbo+`&pic=2"  class="btn btn-info btn-sm">Select Pic</a>

                          <button type="button" class="btn btn-primary dropdown-toggle btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Add Slider
                          </button>
                          <div class="dropdown-menu">
                              <a href="filters.php?photo=0" rel="modal:open" class="dropdown-item">Filter</a> 

                              <a rel="modal:open" href="photo-slider.php?ph=0&pic=2&row=`+cbo+`&temp=2"  class="dropdown-item" >Add Picture</a> 
                          </div>
                          <a rel="modal:open" href="manage-slider.php?row=`+cbo+`&pic=2"  class="btn btn-warning btn-sm">Manage Slider</a>
                        </div>

                        </div>
                         
                        <div class="col-md-8 text-center">
                          <div class="large-box position_3">
                          	<ul class="bxslider gallery list-unstyled cS-hidden" id="bxslider3`+cbo+`">
                            </ul>
                          </div>
                          <input type="hidden" name="photo_3">
                          

                        <div class="btn-group btns-groupi">

                          <a rel="modal:open" href="photo-gallery.php?row=`+cbo+`&pic=3"  class="btn btn-info btn-sm">Select Pic</a>

                          <button type="button" class="btn btn-primary dropdown-toggle btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Add Slider
                          </button>
                          <div class="dropdown-menu">
                              <a href="filters.php?photo=0" rel="modal:open" class="dropdown-item">Filter</a> 

                              <a rel="modal:open" href="photo-slider.php?ph=0&pic=3&row=`+cbo+`&temp=2"  class="dropdown-item" >Add Picture</a> 
                          </div>
                          <a rel="modal:open" href="manage-slider.php?row=`+cbo+`&pic=3"  class="btn btn-warning btn-sm">Manage Slider</a>
                        </div>


                        </div>
                      </div>`;     


                var formatThree = `<div class="row">
                        <div class="col-md-8 text-center">
                          <div class="large-box position_1">
                          	<ul class="bxslider gallery list-unstyled cS-hidden" id="bxslider1`+cbo+`">
                            </ul>
                          </div>
                          <input type="hidden" name="photo_1">
                          
                          <div class="btn-group btns-groupi">

                          <a rel="modal:open" href="photo-gallery.php?row=`+cbo+`&pic=1"  class="btn btn-info btn-sm">Select Pic</a>

                          <button type="button" class="btn btn-primary dropdown-toggle btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Add Slider
                          </button>
                          <div class="dropdown-menu">
                              <a href="filters.php?photo=0" rel="modal:open" class="dropdown-item">Filter</a> 

                              <a rel="modal:open" href="photo-slider.php?ph=0&pic=1&row=`+cbo+`&temp=3"  class="dropdown-item" >Add Picture</a> 
                          </div>
                          <a rel="modal:open" href="manage-slider.php?row=`+cbo+`&pic=1"  class="btn btn-warning btn-sm">Manage Slider</a>
                        </div>
                        </div>

                        <div class="col-md-4 text-center">
                          <div class="box position_2">
                          	<ul class="bxslider gallery list-unstyled cS-hidden" id="bxslider2`+cbo+`">
                            </ul>
                          </div>
                          <input type="hidden" name="photo_2">
                          
                          <div class="btn-group btns-groupi">

                          <a rel="modal:open" href="photo-gallery.php?row=`+cbo+`&pic=2"  class="btn btn-info btn-sm">Select Pic</a>

                          <button type="button" class="btn btn-primary dropdown-toggle btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Add Slider
                          </button>
                          <div class="dropdown-menu">
                              <a href="filters.php?photo=0" rel="modal:open" class="dropdown-item">Filter</a> 

                              <a rel="modal:open" href="photo-slider.php?ph=0&pic=2&row=`+cbo+`&temp=3"  class="dropdown-item" >Add Picture</a> 
                          </div>
                          <a rel="modal:open" href="manage-slider.php?row=`+cbo+`&pic=2"  class="btn btn-warning btn-sm">Manage Slider</a>
                        </div>

                          <div class="clearfix"></div>  

                          <div class="box position_3">
                          	<ul class="bxslider gallery list-unstyled cS-hidden" id="bxslider3`+cbo+`">
                            </ul>
                          </div>
                          <input type="hidden" name="photo_3">
                          <div class="btn-group btns-groupi">

                          <a rel="modal:open" href="photo-gallery.php?row=`+cbo+`&pic=3"  class="btn btn-info btn-sm">Select Pic</a>

                          <button type="button" class="btn btn-primary dropdown-toggle btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Add Slider
                          </button>
                          <div class="dropdown-menu">
                              <a href="filters.php?photo=0" rel="modal:open" class="dropdown-item">Filter</a> 

                              <a rel="modal:open" href="photo-slider.php?ph=0&pic=3&row=`+cbo+`&temp=3"  class="dropdown-item" >Add Picture</a> 
                          </div>
                          <a rel="modal:open" href="manage-slider.php?row=`+cbo+`&pic=3"  class="btn btn-warning btn-sm">Manage Slider</a>
                        </div>

                        </div>
                      </div>`;
                      
                 var formatFour = `<div class="row">
                      <div class="col-md-6 text-center">
                        <div class="medium-box position_1">
                        	<ul class="bxslider gallery list-unstyled cS-hidden" id="bxslider1`+cbo+`">
                            </ul>
                        </div>
                        <input type="hidden" name="photo_1">
                        
                        <div class="btn-group btns-groupi">

                          <a rel="modal:open" href="photo-gallery.php?row=`+cbo+`&pic=1"  class="btn btn-info btn-sm">Select Pic</a>

                          <button type="button" class="btn btn-primary dropdown-toggle btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Add Slider
                          </button>
                          <div class="dropdown-menu">
                              <a href="filters.php?photo=0" rel="modal:open" class="dropdown-item">Filter</a> 

                              <a rel="modal:open" href="photo-slider.php?ph=0&pic=1&row=`+cbo+`&temp=4"  class="dropdown-item" >Add Picture</a> 
                          </div>
                          <a rel="modal:open" href="manage-slider.php?row=`+cbo+`&pic=1"  class="btn btn-warning btn-sm">Manage Slider</a>
                        </div>
                      </div>
                      <div class="col-md-6 text-center">
                        <div class="medium-box position_2">
                        	<ul class="bxslider gallery list-unstyled cS-hidden" id="bxslider2`+cbo+`">
                            </ul>	
                        </div>
                        <input type="hidden" name="photo_2">
                        <input type="hidden" name="photo_3" value="0">
                        
                        <div class="btn-group btns-groupi">

                          <a rel="modal:open" href="photo-gallery.php?row=`+cbo+`&pic=2"  class="btn btn-info btn-sm">Select Pic</a>

                          <button type="button" class="btn btn-primary dropdown-toggle btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Add Slider
                          </button>
                          <div class="dropdown-menu">
                              <a href="filters.php?photo=0" rel="modal:open" class="dropdown-item">Filter</a> 

                              <a rel="modal:open" href="photo-slider.php?ph=0&pic=2&row=`+cbo+`&temp=4"  class="dropdown-item" >Add Picture</a> 
                          </div>
                          <a rel="modal:open" href="manage-slider.php?row=`+cbo+`&pic=2"  class="btn btn-warning btn-sm">Manage Slider</a>
                        </div>
                      </div>
                    </div>`;

                 var formatFive = `<div class="row">
                      <div class="col-md-12 text-center">
                        <div class="larger-box position_1">
                        	<ul class="bxslider gallery list-unstyled cS-hidden" id="bxslider1`+cbo+`">
                            </ul>
                        </div>
                        <input type="hidden" name="photo_1">
                        <input type="hidden" name="photo_2" value="0">
                        <input type="hidden" name="photo_3" value="0">
                        
                        <div class="btn-group btns-groupi">

                          <a rel="modal:open" href="photo-gallery.php?row=`+cbo+`&pic=1"  class="btn btn-info btn-sm">Select Pic</a>

                          <button type="button" class="btn btn-primary dropdown-toggle btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Add Slider
                          </button>
                          <div class="dropdown-menu">
                              <a href="filters.php?photo=0" rel="modal:open" class="dropdown-item">Filter</a> 

                              <a rel="modal:open" href="photo-slider.php?ph=0&pic=1&row=`+cbo+`&temp=5"  class="dropdown-item" >Add Picture</a> 
                          </div>
                          <a rel="modal:open" href="manage-slider.php?row=`+cbo+`&pic=1"  class="btn btn-warning btn-sm">Manage Slider</a>
                        </div>

                      </div>
                      
                    </div>`;

                    var formatSix = `<div class="row">
                      <div class="col-md-6 text-center">
                        <div class="two-square-box position_1">
                        	<ul class="bxslider gallery list-unstyled cS-hidden" id="bxslider1`+cbo+`">
                            </ul>
                        </div>
                        <input type="hidden" name="photo_1">
                        
                        <div class="btn-group btns-groupi">

                          <a rel="modal:open" href="photo-gallery.php?row=`+cbo+`&pic=1"  class="btn btn-info btn-sm">Select Pic</a>

                          <button type="button" class="btn btn-primary dropdown-toggle btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Add Slider
                          </button>
                          <div class="dropdown-menu">
                              <a href="filters.php?photo=0" rel="modal:open" class="dropdown-item">Filter</a> 

                              <a rel="modal:open" href="photo-slider.php?ph=0&pic=1&row=`+cbo+`&temp=6"  class="dropdown-item" >Add Picture</a> 
                          </div>
                          <a rel="modal:open" href="manage-slider.php?row=`+cbo+`&pic=1"  class="btn btn-warning btn-sm">Manage Slider</a>
                        </div>
                      </div>
                      <div class="col-md-6 text-center">
                        <div class="two-square-box position_2">
                        	<ul class="bxslider gallery list-unstyled cS-hidden" id="bxslider2`+cbo+`">
                            </ul>	
                        </div>
                        <input type="hidden" name="photo_2">
                        <input type="hidden" name="photo_3" value="0">
                        
                        <div class="btn-group btns-groupi">

                          <a rel="modal:open" href="photo-gallery.php?row=`+cbo+`&pic=2"  class="btn btn-info btn-sm">Select Pic</a>

                          <button type="button" class="btn btn-primary dropdown-toggle btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Add Slider
                          </button>
                          <div class="dropdown-menu">
                              <a href="filters.php?photo=0" rel="modal:open" class="dropdown-item">Filter</a> 

                              <a rel="modal:open" href="photo-slider.php?ph=0&pic=2&row=`+cbo+`&temp=6"  class="dropdown-item" >Add Picture</a> 
                          </div>
                          <a rel="modal:open" href="manage-slider.php?row=`+cbo+`&pic=2"  class="btn btn-warning btn-sm">Manage Slider</a>
                        </div>
                      </div>
                    </div>`;

                    var formatSeven =  `<div class="row"> 
                     <div class="col-md-4 text-center"> 
                         <div class="square-box position_1">
                         	<ul class="bxslider gallery list-unstyled cS-hidden" id="bxslider1`+cbo+`">
                            </ul>
                         </div>
                         <input type="hidden" name="photo_1"> 
                         
                         <div class="btn-group btns-groupi">

                          <a rel="modal:open" href="photo-gallery.php?row=`+cbo+`&pic=1"  class="btn btn-info btn-sm">Select Pic</a>

                          <button type="button" class="btn btn-primary dropdown-toggle btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Add Slider
                          </button>
                          <div class="dropdown-menu">
                              <a href="filters.php?photo=0" rel="modal:open" class="dropdown-item">Filter</a> 

                              <a rel="modal:open" href="photo-slider.php?ph=0&pic=1&row=`+cbo+`&temp=7"  class="dropdown-item" >Add Picture</a> 
                          </div>
                          	<a rel="modal:open" href="manage-slider.php?row=`+cbo+`&pic=1"  class="btn btn-warning btn-sm">Manage Slider</a>
                        </div>
                       </div> 
                       <div class="col-md-4 text-center"> 
                         <div class="square-box position_2">
                         	<ul class="bxslider gallery list-unstyled cS-hidden" id="bxslider2`+cbo+`">
                            </ul>
                         </div>
                         <input type="hidden" name="photo_2"> 
                         
                         <div class="btn-group btns-groupi">

                          <a rel="modal:open" href="photo-gallery.php?row=`+cbo+`&pic=2"  class="btn btn-info btn-sm">Select Pic</a>

                          <button type="button" class="btn btn-primary dropdown-toggle btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Add Slider
                          </button>
                          <div class="dropdown-menu">
                              <a href="filters.php?photo=0" rel="modal:open" class="dropdown-item">Filter</a> 

                              <a rel="modal:open" href="photo-slider.php?ph=0&pic=2&row=`+cbo+`&temp=7"  class="dropdown-item" >Add Picture</a> 
                          </div>
                          <a rel="modal:open" href="manage-slider.php?row=`+cbo+`&pic=2"  class="btn btn-warning btn-sm">Manage Slider</a>
                        </div>
                       </div> 
                       <div class="col-md-4 text-center"> 
                        <div class="square-box position_3">
                        	<ul class="bxslider gallery list-unstyled cS-hidden" id="bxslider3`+cbo+`">
                            </ul>
                        </div>
                        <input type="hidden" name="photo_3"> 
                         
                         <div class="btn-group btns-groupi">

                          <a rel="modal:open" href="photo-gallery.php?row=`+cbo+`&pic=3"  class="btn btn-info btn-sm">Select Pic</a>

                          <button type="button" class="btn btn-primary dropdown-toggle btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Add Slider
                          </button>
                          <div class="dropdown-menu">
                              <a href="filters.php?photo=0" rel="modal:open" class="dropdown-item">Filter</a> 

                              <a rel="modal:open" href="photo-slider.php?ph=0&pic=3&row=`+cbo+`&temp=7"  class="dropdown-item" >Add Picture</a> 
                          </div>
                          <a rel="modal:open" href="manage-slider.php?row=`+cbo+`&pic=3"  class="btn btn-warning btn-sm">Manage Slider</a>
                        </div>
                       </div> 
                     </div>`;              

              if(cboValue==1){
              		$(".row_"+cbo).html(formatOne);
              } else if(cboValue==2){
              		$(".row_"+cbo).html(formatTwo);
              } else if(cboValue==3){
              		$(".row_"+cbo).html(formatThree);
              } else if(cboValue==4){
              		$(".row_"+cbo).html(formatFour);
              } else if(cboValue==5){
              		$(".row_"+cbo).html(formatFive);
			  } else if(cboValue==6){
              		$(".row_"+cbo).html(formatSix);
              } else if(cboValue==7){
              		$(".row_"+cbo).html(formatSeven);		
              } else {
              		alert("Please select row format!");
              }


		});


		 


		$(document).on('click', ".update-custom-photo", function(){

				var img = $(this).data('update');
				var cbosize = $("select[name='cbocustomsize-"+img+"']").val();

				$.ajax({
						type: "POST",
						url: "update-custom-photos.php",
						data: "img=" + img + "&cbosize=" + cbosize,
							success: function(data) {
								if(data==""){
									$('#customhomephotos').DataTable().ajax.reload();
									//$('#homephotos').DataTable().ajax.reload();
								} else {
									alert(data);
								}
								//alert(data);
							},
							error:function(x,e) {
							    if (x.status==0) {
							        alert('You are offline!!\n Please Check Your Network.');
							    } else if(x.status==404) {
							        alert('Requested URL not found.');
							    } else if(x.status==500) {
							        alert('Internel Server Error.');
							    } else if(e=='parsererror') {
							        alert('Error.\nParsing JSON Request failed.');
							    } else if(e=='timeout'){
							        alert('Request Time out.');
							    } else {
							        alert('Unknow Error.\n'+x.responseText);
							    }
							}	
					});	



		});


		$(document).on('click', ".add-to-group", function(){

				var count = $("input[name='count_photos']").val();
				var totalcount = parseInt(count)+1;
				$("input[name='count_photos']").val(totalcount);

				if(totalcount<=3){

					var grp = $("input[name='group']").val();
					var img = $(this).data('image');	

					$.ajax({
						type: "POST",
						url: "add-custom-photos.php",
						data: "grp=" + grp + "&img=" + img,
							success: function(data) {
								if(data==""){
									$('#customhomephotos').DataTable().ajax.reload();
									$('#homephotos').DataTable().ajax.reload();
								} else {
									alert(data);
								}
							},
							error:function(x,e) {
							    if (x.status==0) {
							        alert('You are offline!!\n Please Check Your Network.');
							    } else if(x.status==404) {
							        alert('Requested URL not found.');
							    } else if(x.status==500) {
							        alert('Internel Server Error.');
							    } else if(e=='parsererror') {
							        alert('Error.\nParsing JSON Request failed.');
							    } else if(e=='timeout'){
							        alert('Request Time out.');
							    } else {
							        alert('Unknow Error.\n'+x.responseText);
							    }
							}	
					});	

				} else {

						alert("Max Photo of 3 reach!");

				}


		});


		$(".showvidpicoption").on('click', function(){


				$(".vidpicoption").toggle();


		});




		$(document).on('change',"select[name='cboSubAnimals']", function(){


				//alert($(this).val());

				 let subAnimal = $(this).val();

				$.ajax({
					type: "POST",
					url: "uploader/get-location.php",
					data: "sanimal=" + subAnimal,
						success: function(data) {
							$(".postlocation").empty();
							$(".postlocation").html(data);
						},
						error:function(x,e) {
						    if (x.status==0) {
						        alert('You are offline!!\n Please Check Your Network.');
						    } else if(x.status==404) {
						        alert('Requested URL not found.');
						    } else if(x.status==500) {
						        alert('Internel Server Error.');
						    } else if(e=='parsererror') {
						        alert('Error.\nParsing JSON Request failed.');
						    } else if(e=='timeout'){
						        alert('Request Time out.');
						    } else {
						        alert('Unknow Error.\n'+x.responseText);
						    }
						}	
				});	


		});



		$(document).on('click', ".del-trips", function(){

			let trip = $(this).data('id');

			 if(confirm("Delete this trip?")){

			 	$.ajax({
					type: "POST",
					url: "remove-trip.php",
					data: "trip=" + trip,
						success: function(data) {
							if(data==""){
								$('#tbltrips').DataTable().ajax.reload();
							} else {
								alert(data);
							}
						},
						error:function(x,e) {
						    if (x.status==0) {
						        alert('You are offline!!\n Please Check Your Network.');
						    } else if(x.status==404) {
						        alert('Requested URL not found.');
						    } else if(x.status==500) {
						        alert('Internel Server Error.');
						    } else if(e=='parsererror') {
						        alert('Error.\nParsing JSON Request failed.');
						    } else if(e=='timeout'){
						        alert('Request Time out.');
						    } else {
						        alert('Unknow Error.\n'+x.responseText);
						    }
						}	
				});	


			 } else {
			 	return false;
			 }

		});


		$(document).on('click', ".btn-del-subloc", function(){

			let subL = $(this).data('id');

			 if(confirm("Delete this sub location?")){

			 	$.ajax({
					type: "POST",
					url: "remove-sublocation.php",
					data: "slo=" + subL,
						success: function(data) {
							if(data==""){
								$('#tblsublocation').DataTable().ajax.reload();
							} else {
								alert(data);
							}
						},
						error:function(x,e) {
						    if (x.status==0) {
						        alert('You are offline!!\n Please Check Your Network.');
						    } else if(x.status==404) {
						        alert('Requested URL not found.');
						    } else if(x.status==500) {
						        alert('Internel Server Error.');
						    } else if(e=='parsererror') {
						        alert('Error.\nParsing JSON Request failed.');
						    } else if(e=='timeout'){
						        alert('Request Time out.');
						    } else {
						        alert('Unknow Error.\n'+x.responseText);
						    }
						}	
				});	


			 } else {
			 	return false;
			 }

		});


		$(document).on('click', ".btn-del", function(){

			let lid = $(this).data('id');

			 if(confirm("Delete this location?")){

			 	$.ajax({
					type: "POST",
					url: "remove-location.php",
					data: "lid=" + lid,
						success: function(data) {
							if(data==""){
								$('#tbllocation').DataTable().ajax.reload();
							} else {
								alert(data);
							}
						},
						error:function(x,e) {
						    if (x.status==0) {
						        alert('You are offline!!\n Please Check Your Network.');
						    } else if(x.status==404) {
						        alert('Requested URL not found.');
						    } else if(x.status==500) {
						        alert('Internel Server Error.');
						    } else if(e=='parsererror') {
						        alert('Error.\nParsing JSON Request failed.');
						    } else if(e=='timeout'){
						        alert('Request Time out.');
						    } else {
						        alert('Unknow Error.\n'+x.responseText);
						    }
						}	
				});	


			 } else {
			 	return false;
			 }

		});

		$(document).on('click', ".btndelSubAnimal", function(){


			let said = $(this).data('id');

			 if(confirm("Delete this sub animal?")){

			 	$.ajax({
					type: "POST",
					url: "remove-sub-animal.php",
					data: "aid=" + said,
						success: function(data) {
							if(data==""){
								$('#tblsubanimal').DataTable().ajax.reload();
							} else {
								alert(data);
							}
						},
						error:function(x,e) {
						    if (x.status==0) {
						        alert('You are offline!!\n Please Check Your Network.');
						    } else if(x.status==404) {
						        alert('Requested URL not found.');
						    } else if(x.status==500) {
						        alert('Internel Server Error.');
						    } else if(e=='parsererror') {
						        alert('Error.\nParsing JSON Request failed.');
						    } else if(e=='timeout'){
						        alert('Request Time out.');
						    } else {
						        alert('Unknow Error.\n'+x.responseText);
						    }
						}	
				});	


			 } else {
			 	return false;
			 }


		});


		$(document).on('click', ".delAnimal", function(){

				let aid = $(this).data('id');

			 if(confirm("Delete this animal?")){

			 	$.ajax({
					type: "POST",
					url: "remove-animal.php",
					data: "aid=" + aid,
						success: function(data) {
							if(data==""){
								$('#tblAnimals').DataTable().ajax.reload();
							} else {
								alert(data);
							}
						},
						error:function(x,e) {
						    if (x.status==0) {
						        alert('You are offline!!\n Please Check Your Network.');
						    } else if(x.status==404) {
						        alert('Requested URL not found.');
						    } else if(x.status==500) {
						        alert('Internel Server Error.');
						    } else if(e=='parsererror') {
						        alert('Error.\nParsing JSON Request failed.');
						    } else if(e=='timeout'){
						        alert('Request Time out.');
						    } else {
						        alert('Unknow Error.\n'+x.responseText);
						    }
						}	
				});	


			 } else {
			 	return false;
			 }

		});


		$(document).on('click', ".btndelete", function(){

				//alert($(this).data('id'));

				let pid = $(this).data('id');

			if(confirm("Delete this photo?")){	

				$.ajax({
					type: "POST",
					url: "remove-photo.php",
					data: "ph=" + pid,
						success: function(data) {
							if(data==""){
								$('#tblphotodetails').DataTable().ajax.reload();
							} else {
								alert(data);
							}
						},
						error:function(x,e) {
						    if (x.status==0) {
						        alert('You are offline!!\n Please Check Your Network.');
						    } else if(x.status==404) {
						        alert('Requested URL not found.');
						    } else if(x.status==500) {
						        alert('Internel Server Error.');
						    } else if(e=='parsererror') {
						        alert('Error.\nParsing JSON Request failed.');
						    } else if(e=='timeout'){
						        alert('Request Time out.');
						    } else {
						        alert('Unknow Error.\n'+x.responseText);
						    }
						}	
				});	

			} else {

				return false;

			}	



		});


		$("#btnFilter").on('click', function(){

			let yr = $("#cboyear").val();
			let animal  = $("select[name='cboanimals']").val();
			let sanimal = $("select[name='cboSubAnimals']").val();
			let location = $("select[name='cbolocation']").val();
			let slocation = $("select[name='cboSubLocation']").val();
			let type = $("select[name='cbotype']").val();
			let trip = $("select[name='cbotrips']").val();	


			window.open('photos.php?yr='+yr+'&an=' +animal+'&sani='+sanimal+'&loc='+location+'&sloc='+slocation+'&type='+type+'&trip='+trip, '_self');	



		});



		$("#animal-1").on('change', function(){

			//alert($(this).val());

			$.ajax({
					type: "POST",
					url: "uploader/get-sub-animals.php",
					data: "ani=" + $(this).val() ,
						success: function(data) {

							$(".sanimal-wrap").html(data);
							//alert(data);
						},
						error:function(x,e) {
						    if (x.status==0) {
						        alert('You are offline!!\n Please Check Your Network.');
						    } else if(x.status==404) {
						        alert('Requested URL not found.');
						    } else if(x.status==500) {
						        alert('Internel Server Error.');
						    } else if(e=='parsererror') {
						        alert('Error.\nParsing JSON Request failed.');
						    } else if(e=='timeout'){
						        alert('Request Time out.');
						    } else {
						        alert('Unknow Error.\n'+x.responseText);
						    }
						}	
			});

		});



		/*$("#location-1").on('change', function(){

			 

			$.ajax({
					type: "POST",
					url: "uploader/get-sub-location.php",
					data: "loc=" + $(this).val() ,
						success: function(data) {

							$(".slocation-wrap").html(data);
							//alert(data);
						},
						error:function(x,e) {
						    if (x.status==0) {
						        alert('You are offline!!\n Please Check Your Network.');
						    } else if(x.status==404) {
						        alert('Requested URL not found.');
						    } else if(x.status==500) {
						        alert('Internel Server Error.');
						    } else if(e=='parsererror') {
						        alert('Error.\nParsing JSON Request failed.');
						    } else if(e=='timeout'){
						        alert('Request Time out.');
						    } else {
						        alert('Unknow Error.\n'+x.responseText);
						    }
						}	
			});

		});*/


		$(document).on('change',"#animal-filter, #subAnimals-filter, #location-filter, #slocation-filter, #year-filter, #type-filter, #trip-filter", function(){


			let animal = $("#animal-filter").val();
			let sanimal = $("#subAnimals-filter").val();
			let location = $("#location-filter").val();
			let slocation = $("#slocation-filter").val();
			let year = $("#year-filter").val();
			let type = $("#type-filter").val();
			let trip = $("#trip-filter").val();

			$("#tblphotodetails").DataTable({
				"processing": false,
				"destroy": true,
					"ajax":{
					"url" : "jsonPhotoStatus.php",
					"type" : "POST",
					"data": {
						"animal": animal, 
						"sanimal": sanimal,
						"location": location,
						"slocation": slocation,
						"year": year,
						"type": type,
						"trip": trip 
					}
				}
			});

			


				/*$.ajax({
					type: "POST",
					url: "jsonPhotoStatus.php",
					data: "animal=" + animal + "&location=" + location + "&slocation=" + slocation + "&sanimal=" + sanimal + "&year=" + year + "&type=" + type + "&trip=" + trip,
						success: function(data) {
							console.log(data);
							 
						}
				});	*/


		});


		$(document).on('change', "#animal-filter", function(){

				$.ajax({
					type: "POST",
					url: "get-sub-animals-filter.php",
					data: "ani=" + $(this).val() ,
						success: function(data) {

							$(".subanimalresult").html(data);
							//alert(data);
						},
						error:function(x,e) {
						    if (x.status==0) {
						        alert('You are offline!!\n Please Check Your Network.');
						    } else if(x.status==404) {
						        alert('Requested URL not found.');
						    } else if(x.status==500) {
						        alert('Internel Server Error.');
						    } else if(e=='parsererror') {
						        alert('Error.\nParsing JSON Request failed.');
						    } else if(e=='timeout'){
						        alert('Request Time out.');
						    } else {
						        alert('Unknow Error.\n'+x.responseText);
						    }
						}	
				});

		});


		$(document).on('change', "#location-filter", function(){

				$cbo = $(this).data('location');


				$.ajax({
					type: "POST",
					url: "get-sub-location.php",
					data: "loc=" + $(this).val() + "&cbo=" + $cbo,
						success: function(data) {
							//$("#subloc-"+$cbo).html(data);
							$(".postsublocation").empty();
							$(".postsublocation").html(data);
						}
				});

		});


		


		$("#homephotos").DataTable({
			"processing": false,
			"paging":   false,
	        "ordering": false,
	        "info":     false,
	        "searching": false,
			"ajax":{
			"url" : "jsonHomePhoto.php",
			"type" : "POST",
			"data": {
				"ph": 1,  
			}
			}
		});

		$("#customhomephotos").DataTable({
			"processing": false,
			"paging":   false,
	        "ordering": false,
	        "info":     false,
	        "searching": false,
			"ajax":{
			"url" : "jsonCustomHomePhoto.php",
			"type" : "POST",
			"data": {
				"ph": $("input[name='group']").val(),  
			}
			}
		});

		$("#tbltrips").DataTable({
			"processing": false,
			"ajax":{
			"url" : "jsonTrips.php",
			"type" : "POST",
			"data": {
				"trip": 1,  
			}
			}
		});


		$("#btnSaveOrder").on('click', function(){

				$.ajax({
					type: "POST",
					url: "save-order.php",
					data: $("#frmOrder").serialize(),
						success: function(data) {
							//alert(data);
							$(".msg").empty();
							$(".msg").append(data).fadeIn(1000).fadeOut(2000);
						}
				});	

		});


		$(document).on('click',".btnupdate", function(){


				let set = $(this).data('id');
				let ishome = $("#show_in_home-"+set).is(':checked');
				let animal = $("#animal-"+set).val();
				let sAnimal = $("#subAnimals-"+set).val();
				let location = $("#location-"+set).val();
				let sLocation = $("#slocation-"+set).val();
				let cboyear = $("#cboyear-"+set).val();
				let ftype = $("#ftype-"+set).val();
				let desc = $("#desc-"+set).val();
				let trip = $("#trip-"+set).val();
				//$(this).attr("value","Updating...");

				//console.log(ishome);

				$.ajax({
					type: "POST",
					url: "update-photo.php",
					data: "ph=" + set +"&home=" + ishome +"&ani=" + animal + "&sani=" + sAnimal + "&loc=" + location + "&sloc="+sLocation+"&yr="+cboyear+"&type=" + ftype + "&des=" + desc + "&trip=" + trip,
						success: function(data) {
							$(".msg").empty();
							$(".msg").append(data).fadeIn(200).fadeOut(5000);
							//$('#tblphotodetails').DataTable().ajax.reload();
						},
						error:function(x,e) {
						    if (x.status==0) {
						        alert('You are offline!!\n Please Check Your Network.');
						    } else if(x.status==404) {
						        alert('Requested URL not found.');
						    } else if(x.status==500) {
						        alert('Internel Server Error.');
						    } else if(e=='parsererror') {
						        alert('Error.\nParsing JSON Request failed.');
						    } else if(e=='timeout'){
						        alert('Request Time out.');
						    } else {
						        alert('Unknow Error.\n'+x.responseText);
						    }
						}	
				});	



		});


		$(".addSubAni").on('click', function(){ 

			if($("select[name='cboanimals']").val()==""){
				alert("Please select Animal Kind.");
				$("select[name='cboanimals']").focus();
			} else if($("input[name='subani']").val()==""){
				alert("Please enter Animal.");
				$("input[name='subani']").focus();
			} else {

				$.ajax({
					type: "POST",
					url: "add-sub-animal.php",
					data: $("#frmSubAnimal").serialize(),
						success: function(data) {
							$('#tblsubanimal').DataTable().ajax.reload();
							$("#frmSubAnimal")[0].reset();
							//console.log(data);
						}
				});

			}	


		});

		$("#tblsubanimal").DataTable({

			"processing": false,
			"ajax":{
			"url" : "jsonSubAnimals.php",
			"type" : "POST",
			"data": {
				"sAnimal": 1,  
			}
			}

		});



		$("#tblAnimals").DataTable({
			"processing": false,
			"ajax":{
			"url" : "jsonAnimals.php",
			"type" : "POST",
			"data": {
				"animal": 1,  
			}
			}
		});


		$(".addAnimal").on('click',function(){

			if($("input[name='animal']").val()==""){

				alert("Please enter animal kind!");

			} else {

			 $.ajax({
					type: "POST",
					url: "add-animal.php",
					data: $("#frmAnimal").serialize(),
						success: function(data) {
							$('#tblAnimals').DataTable().ajax.reload();
							$("#frmAnimal")[0].reset();
							$(".subanimal").empty();
							$(".subanimal").html(data);
							 
						}
				});

			}

		});


		$(document).on('change', "select[name='cboanimals']", function(){

				$cbo = $(this).data('animal');


				$.ajax({
					type: "POST",
					url: "uploader/get-sub-animals.php",
					data: "ani=" + $(this).val() + "&cbo=" + $cbo,
						success: function(data) {
							$("#subani-"+$cbo).html(data);
						}
				});


		});

		$(document).on('change', "select[name='cbolocation']", function(){

			$cbo = $(this).data('location');


				$.ajax({
					type: "POST",
					url: "uploader/get-sub-location.php",
					data: "loc=" + $(this).val() + "&cbo=" + $cbo,
						success: function(data) {
							//$("#subloc-"+$cbo).html(data);
							$(".slocation-wrap").empty();
							$(".slocation-wrap").html(data);
						}
				});

		});



		$("#tblsublocation").DataTable({

			"processing": false,
			"ajax":{
			"url" : "jsonSubLocations.php",
			"type" : "POST",
			"data": {
				"slocation": 1,  
			}
			}

		});

		$(".addSubLoc").on('click', function(){

			if($("select[name='cbolocation']").val()==""){
				alert("Please select location.");
				$("select[name='cbolocation']").focus();
			} else if($("input[name='subloc']").val()==""){
				alert("Please enter sub location.");
				$("input[name='subloc']").focus();
			} else {

				$.ajax({
					type: "POST",
					url: "add-sub-location.php",
					data: $("#frmSublocation").serialize(),
						success: function(data) {
							$('#tblsublocation').DataTable().ajax.reload();
							$("#frmSublocation")[0].reset();
							
						}
				});

			}	


		});

		$("#tbllocation").DataTable({
			"processing": false,
			"ajax":{
			"url" : "jsonLocations.php",
			"type" : "POST",
			"data": {
				"location": 1,  
			}
			}
		});



		$(".addLocation").on('click',function(){

			if($("input[name='location']").val()==""){

				alert("Please enter location!");

			} else {

			 $.ajax({
					type: "POST",
					url: "add-location.php",
					data: $("#frmlocation").serialize(),
						success: function(data) {
							$('#tbllocation').DataTable().ajax.reload();
							$("#frmlocation")[0].reset();
							$(".sublocation").empty();
							$(".sublocation").html(data);
						}
				});

			}

		});


		$(".addTrip").on('click',function(){

			if($("input[name='trip']").val()==""){

				alert("Please enter trip!");

			} else {

			 	$.ajax({
					type: "POST",
					url: "add-trip.php",
					data: $("#frmtrip").serialize(),
						success: function(data) {
							$('#tbltrips').DataTable().ajax.reload();
							$("#frmtrip")[0].reset();							
						}
				});

			}

		});


		$("#tblgalleries").DataTable({
			"processing": false,
			"ajax":{
			"url" : "jsonGalleries.php",
			"type" : "POST",
			"data": {
				"galleries": 1,  
			}
			}
		});

		$("#tblphotodetails").DataTable({
			"processing": false,
			"ajax":{
			"url" : "jsonPhotoDetails.php",
			"type" : "POST",
			"data": {
				"photos": 1,  
			}
			}
		});


		$("#tblSlider").DataTable();


		$("#uploader").on('click', function(){


				$('#images')[0].click();


		});

		$('#images').on('change', function() {
		  for (var i = 0; i < this.files.length; i++) {
		    var fr = new FileReader();
		    fr.onload = function(e) {
		      $('#uploader').append('<img src="' + e.target.result + '" width="50px" height="50px">')
		    }
		    fr.readAsDataURL(this.files[i]);
		  }
		});


		$(document).on('click','.remove',function(){

			let gid = $(this).data('id');

			if(confirm("Remove this gallery?")){
				$.ajax({
					type: "POST",
					url: "remove-gallery.php",
					data: 'gal=' + gid,
						success: function(data) {
							$('#tblgalleries').DataTable().ajax.reload();
						}
				});
			}

		});


});

function readLogo(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    $('#watermark_logo')
                        .attr('src', e.target.result)
                        .width(120)
                        .height(120);
                };

                reader.readAsDataURL(input.files[0]);
                $("#frmwatermark").attr('action','setLogo.php');
				$("#frmwatermark").submit();
            }
}