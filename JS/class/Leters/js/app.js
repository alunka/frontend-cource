let input = document.querySelector('.usertext')
let btn = document.querySelector('.btn')



btn.addEventListener('click', addLetters = () => {
    let letters = {}

    
    for (let i = 0; i < input.value.length; i++) {
        for (let b = 0;  b <= Object.keyes(letters).length; b++) {
            if (input.value[i] !== Object.keyes(letters)[b]) {
                letters[input.value[i]] = 0
            }
        }
    }
    console.log(letters);
} )
  