fetch("http://123.207.32.32:8000/home/multidata")
.then(res => res.json())
.then(res => { console.log(res.data.banner) })