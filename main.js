fetch('https://emojihub.yurace.pro/api/all')
.then(res => res.json())
.then(data => console.log(data))