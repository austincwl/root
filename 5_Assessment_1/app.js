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
    const newMemeCont = document.createElement('li');
    const newMeme = document.createElement('div');
    const image = document.createElement('img');
    const tText = document.createElement('div');
    const bText = document.createElement('div');
    
    newMemeCont.className='flex-item';
    //newMeme.className = 'container';
    image.src = imageLink;
    image.className = 'image';
    tText.innerText = topText;
    tText.id = 'tt';
    tText.className = 'top-center text';
    bText.innerText = bottomText;
    bText.id = 'bt';
    bText.className = 'bottom-center text';

    newMemeCont.appendChild(tText);
    newMemeCont.appendChild(bText);
    newMemeCont.appendChild(image);
    console.log('newMemeCont:')
    console.log(newMemeCont);

    console.log('passing to resizeText: ');
    console.log(newMemeCont);
    newMemeContResized = resizeText(1,100,newMemeCont.querySelector('#tt'));
    
    
    //newMemeCont.appendChild(newMeme);
    memes.appendChild(newMemeCont);
    //memes.appendChild(newMemeContResized);

}

function isOverFlown(element, max) {
    //const context = element.getContext("2d");
    //const width = context.measureText(element.innerText);
    const width = element.clientWidth;
    return width > max;
    //return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
}

function resizeText(minSize, maxSize, ele){
    let overflow = isOverFlown(ele,maxSize);
    let i = minSize;

    console.log('resizing text');

    while(!overflow && i<maxSize){
        ele.style.fontSize = i + 'px';
        if(isOverFlown(ele,maxSize)){
            ele.style.fontSize = i-1 + 'px';
            break;
        }
        else{
            console.log('current font size:'+ele.style.fontSize);
            console.log('increasing font size, i='+i);
            console.log(ele);
            i++;
        }
        
    }
    return ele;
}