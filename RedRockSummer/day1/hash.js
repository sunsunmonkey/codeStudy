const routerView = document.querySelector(".router-view");

window.addEventListener("hashchange",()=>{
    switch (location.hash) {
        case '#/home':
            routerView.innerHTML = '<h1>home</h1>'
            break;
        case '#/about':
            routerView.innerHTML = '<h1>about</h1>'
            break;
        default:
            routerView.innerHTML = 'default'
            break;
    }
})