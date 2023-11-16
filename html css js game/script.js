const buttonEl = document.querySelector("button")

const after_exlplaination = document.querySelector(".text-explain-game")

const all_words_place = document.querySelector(".words-place")

const countEl = document.querySelector(".scores .count")

const timeEl = document.querySelector(".time")

const inputEl = document.querySelector("input")

const words = 

["Rust","Hello","Programming","Code"

,"Javascript","Town","Country","testing","Youtube",

"Linkedin","Twiter","Github",

"leetcode","Internet","Python",

"Scala","Destruction","Pardigm","Styling","Cascade"

,"Documentary","Coding","Funny","Working",

"Dependencies","Task","Runner","Roles","Test","Playing"]

inputEl.onpaste = ()=>{
    return false;
}

buttonEl.addEventListener("click",(e)=>{
    
    inputEl.focus()

    e.target.style.display="none"
    
    Comparaison()

})

function create_all_span(){

    all_words_place.innerText = ''

    words.forEach((ee)=>{ 

        const spanEl = document.createElement("span")

        const word = document.createTextNode(ee)

        spanEl.appendChild(word)

        spanEl.classList.add("word-style")

        all_words_place.appendChild(spanEl)

    })

}

function calling_random_word(){

    const divEl = document.createElement("div")

    console.log(document.querySelectorAll(".words-place span").length)
    
    const random = Math.floor(Math.random()*document.querySelectorAll(".words-place span").length)

    const text = document.createTextNode(words[random])

    divEl.appendChild(text)

    divEl.classList.add("style")

    buttonEl.after(divEl)

    inputEl.value = words[random].toLocaleLowerCase()
    // inputEl.value = ''
    // document.querySelectorAll(".words-place span")[random].remove()

}

function Comparaison(){

    create_all_span()
    
    calling_random_word()
    
    let i=3
    
    let counter = setInterval(()=>{
        
        timeEl.innerText = `${--i}`
        
        if(i==0){
            
            if(document.querySelector(".style").innerText.toLowerCase() == inputEl.value){

                if(document.querySelectorAll(".words-place span").length>=0){

                    document.querySelector(".style").innerText=''
    
                    inputEl.value= ''
    
                    i=4
                    
                    calling_random_word()
            
                }

                // if(document.querySelectorAll(".words-place span").length==0){
                    if(document.querySelectorAll(".words-place span").length==0){
                        
                        document.querySelector(".style").innerText='congr'
    
                        // inputEl.value= ''
                        inputEl.value= document.querySelector(".style").innerText.toLowerCase()
        
                    clearInterval(counter)

                }

            }else{

                clearInterval(counter)

            }

        }
            
    },10)

}
