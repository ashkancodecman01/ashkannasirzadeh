const searchBox = document.getElementById('searchBox');
const result_box = document.getElementById('result-c');
searchBox.addEventListener('keyup', () => {
    result_box.innerHTML = '';
    let valToSearch = searchBox.value;
    let results = search(valToSearch);
    results.forEach((v,i) => {
        let link = 'https://' + v.path;
        $('#result-c').append(`
            <div class="result">
                <div class="result-top"><a href="${link}">${v.path}</a></div>
                <div class="result-bottom">${v.content}</div>
            </div>
        `);
    });
})
function search (valToSearch) {
    let results = [];
    treasure.forEach((v,i) => {
        var re = new RegExp(valToSearch, 'g');
        let a = v.content.match(re);
        if (a) results.push(v);
    });
    return results;
}
window.onload = function () {
    searchBox.focus();
}