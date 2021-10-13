
current_pos = localStorage.getItem('progress')
console.log(current_pos)
window.scrollTo(0,current_pos)
let processScroll = () => {
    let docElem = document.documentElement,
    docBody = document.body,
    scrollTop = docElem['scrollTop'] || docBody['scrollTop'],  //browser support, docElem or docBody  // the heigth we are on currently starting from top 
    scrollBottom = (docElem['scrollHeight'] || docBody['scrollHeight']) - window.innerHeight, // the heigth of the entire content
    scrollPercent = scrollTop / scrollBottom *100
    localStorage.setItem('progress',scrollTop)
    console.log(parseInt(scrollPercent) + '%'+ ' = ' + scrollTop + ' / ' + scrollBottom)
    document.getElementById('progress-bar').setAttribute('value', scrollPercent)
    document.getElementById('progress-indicator').innerHTML = parseInt(scrollPercent)+'%'

}

document.addEventListener('scroll', processScroll)