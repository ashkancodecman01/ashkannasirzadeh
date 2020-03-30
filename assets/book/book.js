$basicArray = [
    {"name": "Name", "author": "Author"},
    {"name": "HTTP Pocket Reference", "author": "Clinton Wong"},
    {"name": "Web Protocols and Practice", "author": "Balachander Krishnamurthy, Jennifer Rexford"},
    {"name": "HTTP Developer's Handbook", "author": "Chris Shiflett"},
    {"name": "HTTP Essentials", "author": "Stephen A. Thomas"},
    {"name": "HTTP The Definitive Guide", "author": "David Gourley, Brian Totty, Marjorie Sayer, Anshu Aggarwal"},
    {"name": "Learning HTTP/2", "author": "Stephen Ludin, Javier Garza"},
]
jQuery(document).ready(function ($) {
    $basicArray.forEach(function (v, i) {
        let name = v.name;
        let author = v.author;
        $('#table').append(`
            <tr>
                <td>` + name + `</td>
                <td>` + author + `</td>
            </tr>
        `);
    })

});