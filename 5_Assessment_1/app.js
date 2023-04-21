const form = document.querySelector('#create-meme');
const memes = document.querySelector('#memes');
let numMemes = 0;

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
    tText.id = 'tt'+numMemes;
    console.log('ttID = tt'+numMemes);
    tText.className = 'top-center text';
    bText.innerText = bottomText;
    bText.id = 'bt'+numMemes;
    console.log('btID = bt'+numMemes);
    bText.className = 'bottom-center text';

    //CREATE MEME
    newMemeCont.appendChild(tText);
    newMemeCont.appendChild(bText);
    newMemeCont.appendChild(image);
    console.log('newMemeCont:')
    console.log(newMemeCont);

    //ADD MEME TO DOCUMENT CONTAINER
    memes.appendChild(newMemeCont);

    if(memes.querySelector('#bt'+numMemes).firstChild.length>15){
        console.log('greater than 15');
        memes.querySelector('#bt'+numMemes).className = 'bottom-center-double text';
    }

    numMemes++
}

    /*
    //FORMAT TEXT
    console.log('resizing text');
    console.log(document.querySelector('#tt0').clientHeight);
    let height = 0;
    let maxHeight = 30;
    let maxSize = document.querySelector('#tt0').clientHeight;

    overflow = (height>maxHeight || document.querySelector('#tt0').style.fontSize>maxSize)

    

    
    let i = 0;
    while(!overflow){
        document.querySelector('#tt0').style.fontSize = i + 'px';
        console.log('current font size:'+document.querySelector('#tt0').style.fontSize);
        console.log('increasing font size, i='+i);
        console.log(ele);
        i++;
        
        height = document.querySelector('#tt0').clientHeight;
        console.log('height: ' + height);

        overflow = (height>maxHeight || i>maxSize)
    }

    document.querySelector('#tt0').style.fontSize = (i-1) + 'px';
    //console.log('passing to resizeText: ');
    //console.log(newMemeCont.querySelector('#tt'+numMemes));
    const newMemeContEle = resizeText(30,50,newMemeCont.querySelector('#tt'+numMemes));
    //resizeText(30,50,newMemeCont.querySelector('#bt'));
    
    
    

    const topTextFinal = document.querySelector('#tt'+numMemes);
    console.log('topTextFinal');
    console.log(topTextFinal);
    console.log(document.querySelector('#tt0'));
    console.log(document.querySelector('#tt0').clientHeight);
    //memes.appendChild(newMemeContEle);

    numMemes++;
}*/

/*
let width = 0;
let height = 0;

function isOverFlown(element, max) {
    //const context = element.getContext("2d");
    //const width = context.measureText(element.innerText);
    console.log('enter isOverFlown');
    console.log(element);
    console.log(element.firstChild);
    height = element.clientHeight;
    width = element.clientWidth;
    
    console.log('text height: ' + height);
    console.log('text width: ' + width);
    console.log('text height2: ' + element.clientHeight);
    console.log('text width2: ' + element.clientWidth);
    console.log('return isOverFlown');
    return height > max; /*|| element.clientWidth;
    //return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
}
*/

/*function resizeText(maxHeight, maxSize, ele){
    let overflow = false;
    let i = 1;
    let height = ele.clientHeight;
    let width = ele.clientWidth;

    

    overflow = (height>maxHeight || ele.style.fontSize>maxSize)

    console.log('resizing text');
    console.log(document.querySelector('#tt0').clientHeight);

    while(!overflow){
        ele.style.fontSize = i + 'px';
        console.log('current font size:'+ele.style.fontSize);
        //console.log('increasing font size, i='+i);
        //console.log(ele);
        i++;
        
        height = ele.clientHeight;
        console.log('height: ' + height);
        overflow = (height>maxHeight || i>maxSize)
    }

    ele.style.fontSize = (i-1) + 'px';
    return ele;
}*/