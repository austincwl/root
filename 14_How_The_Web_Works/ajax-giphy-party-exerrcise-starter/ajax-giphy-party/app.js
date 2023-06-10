console.log('start app.js');
const key = 'EvdrhLP8E6QGnzKcNZ59u1DjznRQHubR';

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
    console.log('ret:');
    console.log(ret);
    return ret;
}

search('bear');