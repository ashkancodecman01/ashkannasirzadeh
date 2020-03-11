$basicArray = [
    {"phrase": "powershell ISE", "abbr": "ISE", "standFor": "Integrated Scripting Environment"},
]
jQuery(document).ready(function ($) {
    $basicArray.forEach(function (v, i) {
        let phrase = v.phrase;
        let abbr = v.abbr;
        let standFor = v.standFor;
        $('#table').append(`
            <tr>
                <td>` + phrase + `</td>
                <td>` + abbr + `</td>
                <td>` + standFor + `</td>
            </tr>
        `);
    })

});