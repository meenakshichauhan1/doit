//if ($.fn.dataTable.isDataTable('table.display')) {
//    table = $('table.display').DataTable();
//}
//else {
$.extend(true, $.fn.dataTable.defaults, {
     
    scrollX: true,
    scrollCollapse: true, 

    order: [],
    columnDefs: [{ orderable: false, targets: ['noExport'] }],

});
var table = $('#cmulf_export_data').DataTable({
    
    //var table = $('table.display').dataTable({
    destroy: true,
    "pagingType": "first_last_numbers",
    stateSave: true,
     
    dom: 'Bfrtip',
    "dom": "<'row'<'col-sm-3'B><'col-sm-6 text-right'f>><'row'<'col-sm-12'<'table-responsive't>r>><'row'<'col-sm-5'i><'col-sm-7'p>>",
    "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
    extend: 'collection',
    text: 'Export', 
     
    buttons: [
    { extend: 'pageLength', className: 'btn-succes' },
     {
        extend: 'excelHtml5',
        text: 'export to Excel',
        customize: function (xlsx) {
        
            //copy _createNode function from source
            function _createNode(doc, nodeName, opts) {
                var tempNode = doc.createElement(nodeName);
        
                if (opts) {
                    if (opts.attr) {
                        $(tempNode).attr(opts.attr);
                    }
        
                    if (opts.children) {
                        $.each(opts.children, function (key, value) {
                            tempNode.appendChild(value);
                        });
                    }
        
                    if (opts.text !== null && opts.text !== undefined) {
                        tempNode.appendChild(doc.createTextNode(opts.text));
                    }
                }
        
                return tempNode;
            }
        
            var sheet = xlsx.xl.worksheets['sheet1.xml'];
            var mergeCells = $('mergeCells', sheet);
            mergeCells[0].children[0].remove(); // remove merge cell 1st row
        
            var rows = $('row', sheet);
            rows[0].children[0].remove(); // clear header cell
        
            // create new cell
            rows[0].appendChild(_createNode(sheet, 'c', {
                attr: {
                    t: 'inlineStr',
                    r: 'Q1', //address of new cell
                    s: 51 // center style - https://www.datatables.net/reference/button/excelHtml5
                },
                children: {
                    row: _createNode(sheet, 'is', {
                        children: {
                            row: _createNode(sheet, 't', {
                                text: 'HR Information	'
                            })
                        }
                    })
                }
            }));
      
    
            // set new cell merged
            mergeCells[0].appendChild(_createNode(sheet, 'mergeCell', {
                attr: {
                    ref: 'Q1:U1' // merge address
                }
            }));
        
            mergeCells.attr('count', mergeCells.attr('count') + 1);
        
            // add another merged cell
        }
     }
    ]
});
 