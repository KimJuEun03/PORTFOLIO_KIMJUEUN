(function(){
    
        const spanEl = document.querySelector('main .f2 h1 span')
        const txtArr = ['기획하는','도전적인','연구하는','매력적인','열정적인']
        index = 0
        let currentTxt = txtArr[index].split('')
    
        function writeTxt(){
            spanEl.textContent += currentTxt.shift();
            if(currentTxt.length !== 0){
                setTimeout(writeTxt,Math.floor(Math.random()*100))
            }
            else{
                currentTxt = spanEl.textContent.split('');
                setTimeout(deleteTxt, 1200)
            }
        }
        function deleteTxt(){
            currentTxt.pop()
            spanEl.textContent = currentTxt.join('')
            if(currentTxt.length !== 0){
                setTimeout(deleteTxt, Math.floor(Math.random() * 100))
            }
            else{
                index = (index + 1) % txtArr.length;
                currentTxt = txtArr[index].split('')
                writeTxt();
    
            }
        }
        writeTxt()
    
    })();

