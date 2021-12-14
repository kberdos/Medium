document.getElementById('flipButton').addEventListener("click", e=> {
    document.body.classList.toggle("light-mode");
    elem.fadeOut(function(){
        elem.html(text[counter]);
        counter++;
        if(counter >= text.length) { counter = 0; }
        elem.fadeIn();
    });
});

var textOne = 
                'I hate you<br> '+
                'Nothing you do is going to make me say<br> '+
                'I can truly be happy with someone<br> '+
                'You make me believe that<br> '+
                'There could be more to love than this<br> '+
                'I will never imagine that<br> '+
                'You are my best friend<br> '+
                'And all my thoughts tell me<br> '+
                'Our relationship can\'t improve<br> '+
                'I can\'t stand all the people who say<br> '+
                'Two souls can love forever<br> '+
                'I belive with all my mind that<br> '+
                'You hurt me beyond repair<br> '+
                'And even when <br> '+
                'We hold hands in the moonlight<br> '+
                'I look forward to each time<br> '+
                'You leave without a trace<br> '+
                'My heart breaks when<br> '+
                'You remind me of what we\'ve accomplished<br> '+
                'A smile fills my face when<br> '+
                'I think of moving on<br> '+
                'Never again will I say<br> '+
                'I love you<br></br>';

var textTwo = 
                'I love you<br>'+
                'Never again will I say<br> '+
                'I think of moving on<br> '+
                'A smile fills my face when<br> '+
                'You remind me of what we\'ve accomplished<br> '+
                'My heart breaks when<br> '+
                'You leave without a trace<br> '+
                'I look forward to each time<br> '+
                'We hold hands in the moonlight<br> '+
                'And even when <br> '+
                'You hurt me beyond repair<br> '+
                'I belive with all my mind that<br> '+
                'Two souls can love forever<br> '+
                'I can\'t stand all the people who say<br> '+
                'Our relationship can\'t improve<br> '+
                'And all my thoughts tell me<br> '+
                'You are my best friend<br> '+
                'I will never imagine that<br> '+
                'There could be more to love than this<br> '+
                'You make me believe that<br> '+
                'I can truly be happy with someone<br> '+
                'Nothing you do is going to make me say<br> '+
                'I hate you<br> ';

var text = [textOne, textTwo];
var counter = 1;
var elem = $("#text");