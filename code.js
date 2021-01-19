function Pal(word){

    let splitword = word.split("")

    splitword = splitword.reverse()

    splitword = splitword.join("")

    if(word.toLowerCase().replace(/\s/g, "") === splitword.toLowerCase().replace(/\s/g, "")){
        return word+" is Palindrome"
    }
    else{
        return word+" is not Palindrome"
    }

}

Pal("amma")