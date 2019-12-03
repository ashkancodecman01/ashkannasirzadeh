jQuery(document).ready(function($) {
    var array = [
        ['1', 'MyThinks', ''],
        ['2', 'ashkan-nasirzadeh.ir', 'http://www.ashkan-nasirzadeh.ir/'],
        ['3', 'sitemap', 'http://www.ashkan-nasirzadeh.ir/sitemap/index.html']
    ];


    function textInner(array = []) {
        array.forEach(function(v, i) {
            if (v[1] != '' && v[2] != '') {
                $('*[data-txt="txt' + v[0] + '"]').prepend(v[1] + `<a href='${v[2]}' target='_blank'> &#128279;</a>`);
            } else {
                $('*[data-txt="txt' + v[0] + '"]').prepend(v[1]);
            }
        });
    }


    $('#nav > div').click(function() {
        let dataListChilds = $(this).attr('data-list-childs');
        let motherMarginLeft = parseInt($(this).css('margin-left'));

        if (dataListChilds !== undefined) {
            $('*[data-list-parent]').each(function(i, v) {
                let dataListParent = $(this).attr('data-list-parent');
                if (dataListParent == dataListChilds) {
                    $(this).css('display', $(this).css('display') == 'none' ? 'block' : 'none');
                    let marginLeft = $(this).css('display') == 'none' ? 0 : motherMarginLeft + 30;
                    $(this).css('margin-left', marginLeft);
                }
            });
        }
    });
    textInner(array);

});

function open_closeAll() {
    let temp = document.querySelectorAll('[data-txt]');
    temp.forEach(function(v, i) {
        console.log(v);
        v.click();
    });
}
