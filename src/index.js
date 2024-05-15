document.querySelector("#add-one").addEventListener("click", (event)=>{
    const result = document.querySelector("#results")
    result.textContent = Number(result.textContent) + 1
})