jQuery(document).ready(function() {

 
    var url = "http://localhost/ddc_portal/ddc/web/";
var page = 1;
var current_page = 1;
var total_page = 0;
var is_ajax_fire = 0;


manageData();


/* manage data list */
function manageData() {
    jQuery.ajax({
        dataType: 'json',
        url: url+'getData_part.php',
        data: {page:page}
    }).done(function(data){
    	total_page = Math.ceil(data.total/10);
    	current_page = page;
        getPageData();

    	// jQuery('#pagination').twbsPagination({
	    //     totalPages: total_page,
	    //     visiblePages: current_page,
	    //     onPageClick: function (event, pageL) {
	    //     	page = pageL;
        //         if(is_ajax_fire != 0){
	    //     	  getPageData();
        //         }
	    //     }
	    // });


    	manageRow(data.data);
        is_ajax_fire = 1;


    });


}


/* Get Page Data*/
function getPageData() {
	jQuery.ajax({
    	dataType: 'json',
    	url: url+'getData_part.php',
    	data: {page:page}
	}).done(function(data){
		manageRow(data.data);
	});
}


/* Add new Item table row */
function manageRow(data) {
	var	rows = '';
	jQuery.each( data, function( key, value ) {
        console.log(value)
	  	rows = rows + '<tr>';
	  	rows = rows + '<td>'+value.org_type+'</td>';
	  	rows = rows + '<td>'+value.org_name+'</td>';
        rows = rows + '<td>'+value.org_oth+'</td>';
	  	rows = rows + '<td>'+value.desig+'</td>';
        rows = rows + '<td>'+value.start_date+'</td>';
	  	rows = rows + '<td>'+value.end_date+'</td>';
	  	rows = rows + '<td data-id="'+value.id+'">';
        
        rows = rows + '<button class="btn btn-danger remove-item">Delete</button>';
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
    var form_action ='create_part.php'; //jQuery("#custom-cmulf-form").find("form").attr("action");
    var organisation_type = jQuery("#create-item-part").find("select[name='organisation_type']").val();
    var organisation_name = jQuery("#create-item-part").find("select[name='organisation_name']").val();
    var organisation_other = jQuery("#create-item-part").find("input[name='organisation_other']").val();
    var organisation_desigation = jQuery("#create-item-part").find("input[name='organisation_desigation']").val();
    var start_date = jQuery("#create-item-part").find("input[name='start_date']").val();
    var end_date = jQuery("#create-item-part").find("input[name='end_date']").val();
    var sid = jQuery("#create-item-part").find("input[name='sec_sid']").val();
    

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
            jQuery("#create-item-part").find("select[name='organisation_type']").val('');
            jQuery("#create-item-part").find("select[name='organisation_name']").val('');
            jQuery("#create-item-part").find("input[name='organisation_other']").val('');
            jQuery("#create-item-part").find("input[name='organisation_desigation']").val('');
            jQuery("#create-item-part").find("input[name='start_date']").val('');
            jQuery("#create-item-part").find("input[name='end_date']").val('');
            jQuery("#create-item-part").find("input[name='sec_sid']").val('');
            getPageData();
            //jQuery(".modal").modal('hide');
          //  toastr.success('Item Created Successfully.', 'Success Alert', {timeOut: 5000});
          alert("Item Created Successfully");
        });
    // }
    // else{
    //     alert('You are missing title or description.2')
    // }


});


/* Remove Item */
jQuery("body").on("click",".remove-item",function(){
    var id = jQuery(this).parent("td").data('id');
    var c_obj = jQuery(this).parents("tr");


    jQuery.ajax({
        dataType: 'json',
        type:'POST',
        url: url + 'delete.php',
        data:{id:id}
    }).done(function(data){
        c_obj.remove();
        toastr.success('Item Deleted Successfully.', 'Success Alert', {timeOut: 5000});
        getPageData();
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
});