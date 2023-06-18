console.log('start app.js');
const key = 'EvdrhLP8E6QGnzKcNZ59u1DjznRQHubR';
const $gifs = $('gifs');

async function search(prompt, num = 5, offset = 0, rating = 'g', lang = 'en'){
    const ret = await axios.get('http://api.giphy.com/v1/gifs/search', 
        {params:{
            q: prompt,
            api_key: key,
            limit: num,
            offset:offset,
            rating: rating,
            lang: lang
        } });
    console.log('_ret_');
    console.log(ret);
    addGif(ret);
    return ret;
}

function addGif(newGif){
    const $gif = newGif;
    const $gifSrc = $gif.data.data[0].images.original.url;
    console.log('url: ' + $gifSrc);
    console.log('_gif_');
    console.log($gif.data.data[0]);
    const $gifEle = $('<img>', {src: $gifSrc, class:'gif'});
    console.log('gifEle_');
    console.log($gifEle);
    $gifs.append($gifEle);
}

$(document).ready(function(){
    console.debug('document ready');
    $('#submit').on('click', function(e){
        console.log('_e_');
        console.log(e);
        e.preventDefault();
        let $q = $('#search').val()
        console.log('search term: ' + $q);
        search($q);
        $('#search').val('');
    });
    $('#clear').on('click', function(e){
        e.preventDefault();
        $gifs.empty();
    });
});