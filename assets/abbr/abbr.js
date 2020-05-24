$basicArray = [
    {"phrase": "powershell ISE", "abbr": "ISE", "standFor": "Integrated Scripting Environment"},
    {"phrase": "HTTP messages are passed in a format similar to that used by the Internet mail [RFC5322] and the MIME [RFC2045]", "abbr": "MIME", "standFor": "Multipurpose Internet Mail Extensions"},
    {"phrase": "http", "abbr": "http", "standFor": "Hypertext Transfer Protocol"},
    {"phrase": "URI", "abbr": "URI", "standFor": "Uniform Resource Identifire"},
    {"phrase": "URL", "abbr": "URL", "standFor": "Uniform Resource Locator"},
    {"phrase": "URN", "abbr": "URN", "standFor": "Uniform Resource Name"},
    {"phrase": "JRE", "abbr": "JRE", "standFor": "Java Runtime Environment"},
    {"phrase": "JDK", "abbr": "JDK", "standFor": "Java Development kit"},
    {"phrase": "jar", "abbr": "jar", "standFor": "java archive"},
    {"phrase": "http server:generally a web server like Apache Web Server or IIS", "abbr": "IIS", "standFor": "Internet Information Services"},
    {"phrase": "", "abbr": "CDN", "standFor": "Content Delivery Network"},
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