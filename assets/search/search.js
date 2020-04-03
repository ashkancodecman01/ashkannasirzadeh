const searchBox = document.getElementById('searchBox');
const result_box = document.getElementById('result-c');
searchBox.addEventListener('keyup', () => {
    result_box.innerHTML = '';
    let valToSearch = searchBox.value;
    let results = search(valToSearch);
    results.forEach((v,i) => {
        $('#result-c').append(`<div class="result result-top">${v.path}</div><div class="result result-bottom">${v.content}</div>`);
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