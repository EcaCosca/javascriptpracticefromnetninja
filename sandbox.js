const content = document.querySelectorAll('p');

content.forEach(para => {
    console.log(para.innerText.includes('error'))
    
    if (para.innerText.includes("error")) {
        para.classList.add('error');
    } else if (para.innerText.includes("success")){
        para.classList.add('success');
    };
})

content.forEach(para => {
    console.log(para)
    
})
