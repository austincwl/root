const form = document.querySelector('#create-meme');
const memes = document.querySelector('#memes');
const deleteButton = document.getElementsByClassName('delete');
let numMemes = 0;

form.addEventListener('submit', function(e){
    console.log('e.target...');
    const submitMeme = e.target.querySelector('#submit-meme');
    

    console.log(e.target.style.backgroundColor);
    e.preventDefault();
    console.log(e);
    console.log('TopText: '+ e.target.querySelector('#top-text').value);
    console.log('BottomText: '+ e.target.querySelector('#bottom-text').value);
    console.log('ImageLink: '+ e.target.querySelector('#image-link').value);

    topText = e.target.querySelector('#top-text').value
    bottomText = e.target.querySelector('#bottom-text').value
    imageLink  = e.target.querySelector('#image-link').value

    if(topText && bottomText && imageLink){
        e.target.querySelector('#top-text').value = '';
        e.target.querySelector('#bottom-text').value = '';
        e.target.querySelector('#image-link').value = '';
        generateMeme(topText,bottomText,imageLink);

        //button indicator styles
        submitMeme.style.backgroundColor = 'green';
        setTimeout(function(){
            submitMeme.style.backgroundColor = 'white'
        },250);
    }
    else{
        submitMeme.style.backgroundColor = 'red';
        setTimeout(function(){
            submitMeme.style.backgroundColor = 'white'
        },100);
    }
});



function generateMeme(topText, bottomText, imageLink){
    const newMemeCont = document.createElement('li');
    const newMeme = document.createElement('div');
    const image = document.createElement('img');
    const tText = document.createElement('div');
    const bText = document.createElement('div');
    const hover = document.createElement('div');
    const btnHover = document.createElement('button');
    
    newMemeCont.className='flex-item ';
    newMemeCont.id = 'memeNum'+numMemes;
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

    //hover
    hover.className = 'hover';
    //hover.innerText='hover_inner_text';
    
    btnHover.innerText = 'DELETE';
    btnHover.className = 'delete';
    btnHover.id='deleteNum'+numMemes;
    btnHover.addEventListener('click', function(e){
        console.log('CLICKED DELETE');
        console.log(e.target.id);
        console.log(e.target);
        const p1 = e.target.parentElement.parentElement;
        console.log(p1);
        e.target.parentElement.parentElement.remove();
        //const currentMeme = document.querySelector('e.target.
        //btnHover.parentElement.parentElement.innerHTML=''
    });
    hover.appendChild(btnHover);


    //CREATE MEME
    newMemeCont.appendChild(tText);
    newMemeCont.appendChild(bText);
    newMemeCont.appendChild(image);
    newMemeCont.appendChild(hover);
    console.log('newMemeCont:')
    console.log(newMemeCont);

    //ADD MEME TO DOCUMENT CONTAINER
    memes.appendChild(newMemeCont);

    if(memes.querySelector('#bt'+numMemes).firstChild.length>15){
        console.log('greater than 15');
        memes.querySelector('#bt'+numMemes).className = 'bottom-center-double text';
    }

    console.log('NEW MEME GENERATED');
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

