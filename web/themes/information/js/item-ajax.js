jQuery( document ).ready(function() {

    

    jQuery('#edit-highest-education-qualification').on('change', '', function (e) {
		if(jQuery(".cmulf-form-wrapper").find("select[name='highest_education_qualification'] option:selected" ).text()!="Other"){
			jQuery("#edit-other-highest-education").val('');
		}
});
jQuery('#edit-field-of-study').on('change', '', function (e) {
    if(jQuery(".cmulf-form-wrapper").find("select[name='field_of_study'] option:selected" ).text()!="Other"){
        jQuery("#edit-other-field-of-study").val('');
        jQuery(".form-item-indian-university-other").hide();
    }
});

if(jQuery("#edit-indian-university option:selected").text()=="Other"){
 
    // jQuery(".form-item-indian-university-other").hide();
    // jQuery(".form-item-indian-university-other input").val('');
    jQuery("#edit-outside-university-other").val('');
	jQuery(".form-item-indian-university-other").attr("required", true);
	jQuery(".js-form-item-indian-university-other label").addClass("js-form-required form-required");
    jQuery(".form-item-outside-university-other").hide();
    
}else{
 jQuery(".form-item-outside-university-other").hide();
 jQuery(".form-item-indian-university-other").hide();
 
}

if(jQuery("#edit-outside-university option:selected").text()=="Other"){
 
    // jQuery(".form-item-indian-university-other").hide();
    // jQuery(".form-item-indian-university-other input").val('');
    jQuery("#edit-india-university-other").val('');
	jQuery(".form-item-outside-university-other").show();
	jQuery(".form-item-outside-university-other").attr("required", true);
	jQuery(".form-item-outside-university-other label").addClass("js-form-required form-required");
    jQuery(".form-item-indian-university-other").hide();
    
}else{
 jQuery(".form-item-outside-university-other").hide();
 jQuery(".form-item-indian-university-other").hide();
 
}
if(jQuery("#edit-percentage-cgi option:selected" ).text()=="-Select Any One-"){
    jQuery(".form-item-percentage-cgi-obtained,.form-item-base-maximum-score").hide();
    jQuery(".form-item-percentage-obtained ").hide();
}else if(jQuery("#edit-percentage-cgi option:selected" ).text()=="CGI"){
    jQuery(".form-item-percentage-cgi-obtained,.form-item-base-maximum-score").show();
    jQuery(".form-item-percentage-obtained ").hide();
}else{
    jQuery(".form-item-percentage-cgi-obtained,.form-item-base-maximum-score").hide();
    jQuery(".form-item-percentage-obtained ").show();
}    

jQuery('#edit-organisation').on('change', '', function (e) {
		if(jQuery("#create-item").find("select[name='organisation'] option:selected" ).text()!="Other"){
			jQuery("#edit-organisation-other").val('');
		}
});
jQuery('#edit-indian-university').on('change', '', function (e) {
		if(jQuery(".cmulf-form-wrapper").find("select[name='indian_university'] option:selected" ).text()=="Other"){
			jQuery(".form-item-indian-university-other").show();
          
        jQuery(".form-item-indian-university-other input").val('');
		jQuery(".form-item-indian-university-other").attr("required", true);
	jQuery(".js-form-item-indian-university-other label").addClass("js-form-required form-required");
       
		}else if(jQuery(".cmulf-form-wrapper").find("select[name='indian_university'] option:selected" ).text()=="Mumbai University"){
           jQuery(".form-item-mumbai-university").show();
           jQuery(".form-item-delhi-university, .form-item-madras-university").hide();
           jQuery("#edit-madras-university , #edit-delhi-university")[0].selectedIndex = 0;
    	}else if(jQuery(".cmulf-form-wrapper").find("select[name='indian_university'] option:selected" ).text()=="University of Delhi (DU)"){
            jQuery(".form-item-delhi-university").show();
            jQuery(".form-item-mumbai-university, .form-item-madras-university").hide();
            jQuery("#edit-madras-university , #edit-mumbai-university")[0].selectedIndex = 0;
        }else if(jQuery(".cmulf-form-wrapper").find("select[name='indian_university'] option:selected" ).text()=="University of Madras"){
            jQuery(".form-item-madras-university").show();
            jQuery(".form-item-mumbai-university, .form-item-delhi-university").hide();
            jQuery("#edit-delhi-university , #edit-mumbai-university")[0].selectedIndex = 0;
     }else{
            jQuery(".form-item-indian-university-other").hide();
            jQuery(".form-item-indian-university-other input").val('');
            jQuery("#edit-madras-university, #edit-mumbai-university, #edit-delhi-university")[0].selectedIndex = 0;
            jQuery("select").selectpicker('refresh');
		}
});
jQuery('#edit-where-was-your-university-located').on('change', '', function (e) {
    if(jQuery(".cmulf-form-wrapper").find("select[name='where_was_your_university_located'] option:selected" ).text()=="Outside India"){
        jQuery(".form-item-madras-university, .form-item-indian-university-other, .form-item-mumbai-university").hide();
        jQuery(".form-item-indian-university-other,.form-item-delhi-university").hide();
  
        jQuery("#edit-outside-university")[0].selectedIndex = 0;
        jQuery("#edit-indian-university")[0].selectedIndex = 0;
        
        jQuery("select").selectpicker('refresh');
    }else{
        jQuery(".form-item-outside-university-other input").val('');
        jQuery(".form-item-outside-university-other").hide();
        jQuery( "#edit-outside-university-other").prop('disabled',true)
        jQuery( "#edit-where-was-your-university-located").focus();
    } 
});

jQuery('#edit-outside-university').on('change', '', function (e) {
		if(jQuery(".cmulf-form-wrapper").find("select[name='outside_university'] option:selected" ).text()=="Other"){
			jQuery(".form-item-indian-university-other").hide();
            jQuery(".form-item-outside-university-other").show();
		}else{
		jQuery(".form-item-outside-university-other").hide();
        jQuery(".form-item-outside-university-other input").val('');
		}
});

jQuery('#edit-percentage-cgi').on('change', '', function (e) {
		if(jQuery(".cmulf-form-wrapper").find("select[name='percentage_cgi'] option:selected" ).text()=="-Select Any One-"){
			jQuery("#edit-percentage-obtained").val('');
			jQuery("#edit-percentage-cgi-obtained, #edit-base-maximum-score").val('');
jQuery(".form-item-percentage-cgi-obtained,.form-item-base-maximum-score").hide();
	jQuery(".form-item-percentage-obtained ").hide();

			
		}else if(jQuery(".cmulf-form-wrapper").find("select[name='percentage_cgi'] option:selected" ).text()=="CGI"){
				jQuery("#edit-percentage-obtained").val('');
				jQuery(".form-item-percentage-cgi-obtained,.form-item-base-maximum-score").show();
				jQuery(".form-item-percentage-obtained ").hide();
		}else if(jQuery(".cmulf-form-wrapper").find("select[name='percentage_cgi'] option:selected" ).text()=="Percentage"){
				jQuery("#edit-percentage-cgi-obtained, #edit-base-maximum-score").val('');
				
				jQuery(".form-item-percentage-cgi-obtained,.form-item-base-maximum-score").hide();
				jQuery(".form-item-percentage-obtained ").show();
		}
});
    	// var url = "http://localhost/ddc_portal/ddc/web/";
		 var url = drupalSettings.CustomGeneralPath.baseUrl;
var page = 1;
var current_page = 1;
var total_page = 0;
var is_ajax_fire = 0;
var sid = jQuery("#create-item").find("input[name='sec_sid']").val();
var fourthsid = jQuery("#create-item-part").find("input[name='sec_sid']").val();
var page_third=jQuery("#edit-page-third").val();
var page_fourth=jQuery("#edit-page-fourth").val();


/* manage data list */
function manageData() {
    jQuery.ajax({
        dataType: 'json',
		
          url: url+'/get-inserted-data',		
		
		
        data:{
            page:page,
            sid:sid,
			fourthsid:fourthsid,
			page_third:page_third,
			page_fourth:page_fourth
        }
    }).done(function(data){
        console.log(data);
    	total_page = Math.ceil(data.total/10);
    	current_page = page;
        
        jQuery('#pagination').twbsPagination({
	        totalPages: total_page,
	        visiblePages: current_page,
	        onPageClick: function (event, pageL) {
	        	page = pageL;
                if(is_ajax_fire != 0){
	        	  getPageData();
                }
	        }
	    });
    jQuery('#pagination2').twbsPagination({
	        totalPages: total_page,
	        visiblePages: current_page,
	        onPageClick: function (event, pageL) {
	        	page = pageL;
                if(is_ajax_fire != 0){
	        	  getPagePartData();
                }
	        }
	    });
     
       if(page_third==3){
    	manageRow(data.data);
	   }else{
		   managePartRow(data.data);
	   }
        is_ajax_fire = 1;


    });


}
if(jQuery("#edit-page-third").val()==3 || jQuery("#edit-page-fourth").val()==4){
    manageData();
}
/* Get Page Data*/
function getPageData() {
	jQuery.ajax({
    	dataType: 'json',
    	url: url+'/get-inserted-data',
        data: {page:page, sid:sid,
			page_third:page_third}
	}).done(function(data){
 
		manageRow(data.data);
	});
}
var current_path = location.href;
if(current_path == url+'/cmulf-dashboard'){
	//jQuery('.total-cmulf-from-data').load('/cmulf-export-dashboarddownload');
	//var endpoint = '/cmulf-export-dashboarddownload';
	//Drupal.ajax({ url: endpoint }).execute();
function geDataDownload() {
	var url_part = '/cmulf-export-dashboarddownload';
	jQuery.ajax({
    	Type: 'GET',
    	url: url + url_part,
		cache: false
        //data: {page:page, sid:sid,
			//page_third:page_third}
	}).done(function(data){
		 	manageDownloadRowData(data);
	});
}

geDataDownload();
}
function manageDownloadRowData(data){
    var	rows = '';
	jQuery.each( data, function( key, value ) {
       
	  	rows = rows + '<tr>';
		rows = rows + '<td>'+value.id+'</td>';
		rows = rows + '<td>'+value.full_name+'</td>';
	  	rows = rows + '<td>'+value.email_id+'</td>';
	  	rows = rows + '<td>'+value.phone_number+'</td>';
		rows = rows + '<td>'+value.gender+'</td>';
		rows = rows + '<td>'+value.dob +'</td>';
		rows = rows + '<td>'+value.father_mother_name+'</td>';		
        rows = rows + '<td>'+value.position_applied_for+'</td>';		
	  	rows = rows + '<td>'+value.citizenship +'</td>';
		rows = rows + '<td>Resume</td>';
	  	rows = rows + '<td data-id="'+value.id+'"  data-type="part3">';
        rows = rows + '<span class="btn view"><a href="'+url+'/cmulf-download/'+value.unique_id+'" target="_blank">View</a></span>';
        rows = rows + '</td>';
	  	rows = rows + '</tr>';
	});
		//console.log(data.data);
		//console.log(data);
		jQuery("#tb-data tbody").html(rows);
}

jQuery(".btn_next_search_download").click(function(e){
    e.preventDefault();
    // var form_action = jQuery("#create-item").find("form").attr("action");
    // var title = jQuery("#create-item").find("input[name='title']").val();
    var form_action ='/cmulf-export-dashboarddownload-filter-data'; //jQuery("#custom-cmulf-form").find("form").attr("action");
    var position_applied_for = jQuery("#create-item-download-search").find("select[name='position_applied_for'] option:selected" ).val();
   // var full_name = jQuery("#create-item-download-search").find("input[name='full_name']").val();
    var email_id = jQuery("#create-item-download-search").find("input[name='email_id']").val();
    var phone_number = jQuery("#create-item-download-search").find("input[name='phone_number']").val();
    var app_id = jQuery("#create-item-download-search").find("input[name='app_id']").val();
    //var end_date = jQuery("#create-item-download-search").find("input[name='organisation_end_date']").val();
    //var id = jQuery("#create-item-download-search").find("input[name='sec_sid']").val();
    
         if(position_applied_for !='' || phone_number !='' || app_id !='' || email_id!=''){
    //if(title != '' && description != ''){
        jQuery.ajax({
            dataType: 'json',
            type:'POST',
            url: url + form_action,
            data:{
                position_applied_for:position_applied_for,
                //full_name:full_name,
                app_id:app_id,
                phone_number:phone_number,
                email_id:email_id,
                //end_date:end_date,
                //id:id
            }
        }).done(function(data){
            //if(data.msg=="Start date must be earlier than end date!"){
                //alert(data.msg);
            //}else if(data.msg=="End date must be less than Today`s Date!"){
                //alert(data.msg);
            //}else if(data.msg=="Record already exists!"){
			    //alert(data.msg);
			 //}else{
            //jQuery("#create-item-download-search").find("input[name='email_id']").prop('disabled', true)
            jQuery("#create-item-download-search").find("input[name='phone_number']").val('');
            jQuery("#create-item-download-search").find("input[name='app_id']").val('');
            jQuery("#create-item-download-search").find("input[name='position_applied_for']").val('');
            //jQuery("#create-item").find("input[name='organisation_end_date']").val('');
            manageDownloadRowData(data);
        //}
            //jQuery(".modal").modal('hide');
          //  toastr.success('Item Created Successfully.', 'Success Alert', {timeOut: 5000});
          //alert("Item Created Successfully");
        });
    }else{
        alert("Field can not be blank");
    }
    


});
jQuery.date = function(dateObject) {
    var d = new Date(dateObject);
    var day = d.getDate();
    var month = d.getMonth() + 1;
    var year = d.getFullYear();
    if (day < 10) {
        day = "0" + day;
    }
    if (month < 10) {
        month = "0" + month;
    }
    var date = day + "/" + month + "/" + year;

    return date;
};
/* Add new Item table row */
function manageRow(data) {
	var	rows = '';
	jQuery.each( data, function( key, value ) {
       
	  	rows = rows + '<tr>';
	  	rows = rows + '<td>'+value.org_type+'</td>';
	  	rows = rows + '<td>'+value.org_name+'</td>';
        rows = rows + '<td>'+value.org_oth+'</td>';
	  	rows = rows + '<td>'+value.desig+'</td>';
        rows = rows + '<td>'+jQuery.date(value.start_date)+'</td>';
	  	rows = rows + '<td>'+jQuery.date(value.end_date)+'</td>';
	  	rows = rows + '<td data-id="'+value.id+'"  data-type="part3">';
        rows = rows + '<span class="btn-danger remove-item"><i class="fa fa-trash"></i></span>';
        rows = rows + '</td>';
	  	rows = rows + '</tr>';
	});
    console.log(data);

	jQuery("tbody").html(rows);
}


/* Create new Item */
jQuery(".crud-submit").click(function(e){
    e.preventDefault();
    // var form_action = jQuery("#create-item").find("form").attr("action");
    // var title = jQuery("#create-item").find("input[name='title']").val();
    var form_action ='/create-insert'; //jQuery("#custom-cmulf-form").find("form").attr("action");
    var organisation_type = jQuery("#create-item").find("select[name='organisation_type'] option:selected" ).text()
    var organisation_name = jQuery("#create-item").find("select[name='organisation'] option:selected" ).text()
    var organisation_other = jQuery("#create-item").find("input[name='organisation_other']").val();
    var organisation_desigation = jQuery("#create-item").find("input[name='organisation_desigation']").val();
    var start_date = jQuery("#create-item").find("input[name='organisation_start_date']").val();
    var end_date = jQuery("#create-item").find("input[name='organisation_end_date']").val();
    var sid = jQuery("#create-item").find("input[name='sec_sid']").val();
    
         if(organisation_type !='-Select Any One-' && organisation_name !='-Select Any One-' && organisation_desigation !='' && start_date !='' && end_date!=''){
    //if(title != '' && description != ''){
        jQuery.ajax({
            dataType: 'json',
            type:'POST',
            url: url + form_action,
            data:{
                organisation_type:organisation_type,
                organisation_name:organisation_name,
                organisation_other:organisation_other,
                organisation_desigation:organisation_desigation,
                start_date:start_date,
                end_date:end_date,
                sid:sid
            }
        }).done(function(data){
            if(data.msg=="Start date must be earlier than end date!"){
                alert(data.msg);
            }else if(data.msg=="End date must be less than Today`s Date!"){
                alert(data.msg);
            }else if(data.msg=="Please note that your work experience particulars have to be added in descending chronological order (starting with the most recent experience first) and different work experience with overlapping dates are not to be included in this section."){
			    alert(data.msg);
			 }else{
            jQuery("#edit-organisation-type")[0].selectedIndex = 0;
            jQuery("#edit-organisation")[0].selectedIndex = 0;           
            jQuery("select").selectpicker('refresh');
            jQuery("#create-item").find("input[name='organisation_other']").prop('disabled', true)
            jQuery("#create-item").find("input[name='organisation_other']").val('');
            jQuery("#create-item").find("input[name='organisation_desigation']").val('');
            jQuery("#create-item").find("input[name='organisation_start_date']").val('');
            jQuery("#create-item").find("input[name='organisation_end_date']").val('');
            getPageData();
        }
            //jQuery(".modal").modal('hide');
          //  toastr.success('Item Created Successfully.', 'Success Alert', {timeOut: 5000});
          //alert("Item Created Successfully");
        });
    }else{
        alert("Field can not be blank");
    }
    


});






/* manage data list */

/* Get Page Data*/
function getPagePartData() {
	jQuery.ajax({
    	dataType: 'json',
    	url: url+'/get-inserted-data',
    	data: {page:page,fourthsid:fourthsid,page_fourth:page_fourth}
	}).done(function(data){
		managePartRow(data.data);
	});
}


/* Add new Item table row */
function managePartRow(data) {
	var	rows = '';
	jQuery.each( data, function( key, value ) {
        console.log(value)
	  	rows = rows + '<tr>';
	  	rows = rows + '<td>'+value.org_type+'</td>';
	  	rows = rows + '<td>'+value.org_name+'</td>';
	  	rows = rows + '<td>'+value.desig+'</td>';
        rows = rows + '<td>'+jQuery.date(value.start_date)+'</td>';
	  	rows = rows + '<td>'+jQuery.date(value.end_date)+'</td>';
	  	rows = rows + '<td data-id="'+value.id+'" data-type="part4">';
        rows = rows + '<span class="btn-danger remove-item-part"><i class="fa fa-trash"></i></span>';
        rows = rows + '</td>';
	  	rows = rows + '</tr>';
	});


	jQuery("tbody").html(rows);
}


/* Create new Item */
jQuery(".crud-submit-part").click(function(e){
    e.preventDefault();
    // var form_action = jQuery("#create-item-part").find("form").attr("action");
    // var title = jQuery("#create-item-part").find("input[name='title']").val();
    var form_action ='/create-insert-part'; //jQuery("#custom-cmulf-form").find("form").attr("action");
    var organisation_type = jQuery("#create-item-part").find("select[name='organisation_type_part_time'] option:selected").text();
    var organisation_name = jQuery("#create-item-part").find("input[name='organisation_part_time']").val();
    //var organisation_other = jQuery("#create-item-part").find("input[name='organisation_other']").val();
    var organisation_desigation = jQuery("#create-item-part").find("input[name='organisation_desigation_part_time']").val();
    var start_date = jQuery("#create-item-part").find("input[name='organisation_start_date_part_time']").val();
    var end_date = jQuery("#create-item-part").find("input[name='organisation_end_date_part_time']").val();
    var sid = jQuery("#create-item-part").find("input[name='sec_sid']").val();
    if(organisation_type !='-Select Any One-' && organisation_name !='' && organisation_desigation !='' && start_date!='' & end_date !=='' ){

   
     
    //if(title != '' && description != ''){
        jQuery.ajax({
            dataType: 'json',
            type:'POST',
            url: url + form_action,
            data:{
                organisation_type:organisation_type,
                organisation_name:organisation_name,
                organisation_desigation:organisation_desigation,
                start_date:start_date,
                end_date:end_date,
                sid:sid
            }
        }).done(function(data){
            if(data.msg=="Start date must be earlier than end date!"){
                alert(data.msg);
            }else if(data.msg=="End date must be less than Today`s Date!"){
                alert(data.msg);
             }else if(data.msg=="Please note that different work experience with overlapping dates are not to be included in this section."){
			    alert(data.msg);
			 }else{
            jQuery("#edit-organisation-type-part-time")[0].selectedIndex = 0;
            jQuery("select").selectpicker('refresh');
            jQuery("#create-item-part").find("input[name='organisation_part_time']").val('');
            jQuery("#create-item-part").find("input[name='organisation_desigation_part_time']").val('');
            jQuery("#create-item-part").find("input[name='organisation_start_date_part_time']").val('');
            jQuery("#create-item-part").find("input[name='organisation_end_date_part_time']").val('');
            //jQuery("#create-item-part").find("input[name='sec_sid']").val('');
            getPagePartData();
            }
            //jQuery(".modal").modal('hide');
          //  toastr.success('Item Created Successfully.', 'Success Alert', {timeOut: 5000});
         // alert("Item Created Successfully");
        });
    }else{
        alert("Field can not be blank");
        exit();
    }
    // }
    // else{
    //     alert('You are missing title or description.2')
    // }


});
/* Remove Item */
jQuery("body").on("click",".remove-item",function(){
    var id = jQuery(this).parent("td").data('id');
	var type = jQuery(this).parent("td").data('type');
    var c_obj = jQuery(this).parents("tr");


    jQuery.ajax({
        dataType: 'json',
        type:'POST',
        url: url + '/data-delete',
        data:{id:id,type:type}
    }).done(function(data){
        c_obj.remove();
        // toastr.success('Item Deleted Successfully.', 'Success Alert', {timeOut: 5000});
        getPageData();
    });


});
/* Remove Item */
jQuery("body").on("click",".remove-item-part",function(){
    var id = jQuery(this).parent("td").data('id');
	var type = jQuery(this).parent("td").data('type');
    var c_obj = jQuery(this).parents("tr");


    jQuery.ajax({
        dataType: 'json',
        type:'POST',
        url: url + '/data-delete',
        data:{id:id,type:type}
    }).done(function(data){
        c_obj.remove();
        // toastr.success('Item Deleted Successfully.', 'Success Alert', {timeOut: 5000});
        getPagePartData();
    });


});


/* Edit Item */
jQuery("body").on("click",".edit-item",function(){


    var id = jQuery(this).parent("td").data('id');
    var title = jQuery(this).parent("td").prev("td").prev("td").text();
    var description = jQuery(this).parent("td").prev("td").text();


    jQuery("#edit-item").find("input[name='title']").val(title);
    jQuery("#edit-item").find("textarea[name='description']").val(description);
    jQuery("#edit-item").find(".edit-id").val(id);


});


/* Updated new Item */
jQuery(".crud-submit-edit").click(function(e){


    e.preventDefault();
    var form_action = jQuery("#edit-item").find("form").attr("action");
    var title = jQuery("#edit-item").find("input[name='title']").val();


    var description = jQuery("#edit-item").find("textarea[name='description']").val();
    var id = jQuery("#edit-item").find(".edit-id").val();


    if(title != '' && description != ''){
        jQuery.ajax({
            dataType: 'json',
            type:'POST',
            url: url + form_action,
            data:{title:title, description:description,id:id}
        }).done(function(data){
            getPageData();
          //  jQuery(".modal").modal('hide');
            //toastr.success('Item Updated Successfully.', 'Success Alert', {timeOut: 5000});
        });
    }else{
        alert('You are missing title or description1.')
    }


});

function manageOption(data){
	var rows="";
		rows = '<option value="">-Select Any One-</option>';
jQuery.each( data, function( key, value ) {
        
	  	rows = rows + '<option value="'+ value.value + '">' +  value.value + '</option>';
	  
	
	});


	jQuery("#edit-organisation").html(rows);
	jQuery("select").selectpicker('refresh');
}
     
   
});  