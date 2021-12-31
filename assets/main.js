//     Generate html table to Excel format on page
function generateExcel(el,fileName) {
	var clon = el.clone();
	var html = clon.wrap('<div>').parent().html();
    
	//add more symbols if needed...
	while (html.indexOf('á') != -1) html = html.replace(/á/g, '&aacute;');
	while (html.indexOf('é') != -1) html = html.replace(/é/g, '&eacute;');
	while (html.indexOf('í') != -1) html = html.replace(/í/g, '&iacute;');
	while (html.indexOf('ó') != -1) html = html.replace(/ó/g, '&oacute;');
	while (html.indexOf('ú') != -1) html = html.replace(/ú/g, '&uacute;');
	while (html.indexOf('º') != -1) html = html.replace(/º/g, '&ordm;');
	html = html.replace(/<td>/g, "<td>&nbsp;");

    var element = document.createElement('a');
    element.setAttribute('href', 'data:application/vnd.ms-excel,' + encodeURIComponent(html));
    element.setAttribute('download', fileName);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    
	// window.open('data:application/vnd.ms-excel,' + encodeURIComponent(html));
    }

//   Generate html table to CSV format on page
function generateCSV($table, filename) {
        var $rows = $table.find('tr:has(td),tr:has(th)'),
        tmpColDelim = String.fromCharCode(11), // vertical tab character
        tmpRowDelim = String.fromCharCode(0), // null character
        colDelim = '","',
        rowDelim = '"\r\n"',
        // Grab text from table into CSV formatted string
        csv = '"' + $rows.map(function (i, row) {
            var $row = $(row), $cols = $row.find('td,th');
            return $cols.map(function (j, col) {
                var $col = $(col), text = $col.text();
                return text.replace(/"/g, '""'); // escape double quotes
            }).get().join(tmpColDelim);

        }).get().join(tmpRowDelim)
            .split(tmpRowDelim).join(rowDelim)
            .split(tmpColDelim).join(colDelim) + '"',

        // Data URI
        csvData = 'data:application/csv;charset=utf-8,' + encodeURIComponent(csv);
        if (window.navigator.msSaveBlob) { // IE 10+
            //alert('IE' + csv);
            window.navigator.msSaveOrOpenBlob(new Blob([csv], {type: "text/plain;charset=utf-8;"}), "csvname.csv")
        } 
        else {
            $(this).attr({ 'download': filename, 'href': csvData, 'target': '_blank' }); 
        }
    }    