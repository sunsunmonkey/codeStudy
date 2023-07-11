const routerView = document.querySelector(".router-view");

const aEls = document.querySelectorAll("a")
const  BASE_PATH = location.pathname;

for(let aEl of aEls) {
    aEl.addEventListener('click',(e)=>{
        e.preventDefault();
        const href = aEl.getAttribute('href')
        history.pushState(null,'', BASE_PATH+href)
        historyChange()
    })
}

function historyChange(){
    switch (location.pathname.substring(BASE_PATH.length)) {
        case '/home':
            routerView.innerHTML = '<h1>home</h1>'
            break;
        case  '/about':
            routerView.innerHTML = '<h1>about</h1>'
            break;
        default:
            routerView.innerHTML = 'defalut'
            break;
    }
}

window.addEventListener('popstate',historyChange)
window.addEventListener('go',historyChange)