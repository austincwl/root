const form = document.querySelector('#create-meme');
const memes = document.querySelector('#memes');

form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log(e);
    console.log('TopText: '+ e.target.querySelector('#top-text').value);
    console.log('BottomText: '+ e.target.querySelector('#bottom-text').value);
    console.log('ImageLink: '+ e.target.querySelector('#image-link').value);

    topText = e.target.querySelector('#top-text').value
    bottomText = e.target.querySelector('#bottom-text').value
    imageLink  = e.target.querySelector('#image-link').value

    generateMeme(topText,bottomText,imageLink);
});

function generateMeme(topText, bottomText, imageLink){
    const newMemeCont = document.createElement('div');
    const newMeme = document.createElement('div');
    const image = document.createElement('img');
    const tText = document.createElement('div');
    const bText = document.createElement('div');
    
    newMemeCont.className='flex-item';
    //newMeme.className = 'container';
    image.src = imageLink;
    image.className = 'image';
    tText.innerText = topText;
    tText.className = 'top-center';
    bText.innerText = bottomText;
    bText.className = 'bottom-center';

    newMemeCont.appendChild(tText);
    newMemeCont.appendChild(bText);
    newMemeCont.appendChild(image);
    
    //newMemeCont.appendChild(newMeme);
    memes.appendChild(newMemeCont);

}