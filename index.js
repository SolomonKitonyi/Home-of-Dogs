document.addEventListener("DOMContentLoaded", () => {
    getData()
    let getBtn = document.querySelector(".get-dog")
    let like = document.querySelector("#like");
    let likes = document.querySelector("#likes")

    getBtn.addEventListener("click" , () => {
            like.classList.remove("red")
            location.reload(false)
            getData()
    })
    like.addEventListener("click", (e) => {
        likes.textContent = parseInt(likes.textContent.charAt(0)) + 1 + likes.textContent.substring(1)
        likes.classList.add("red")

    })
    let form = document.querySelector("form")
    form.addEventListener("submit",(e) => {
        e.preventDefault()
        let input = document.querySelector("#comment-input")
        console.log(input.value)
        let p = document.createElement("p")
        p.textContent= input.value
        let comments = document.querySelector(".comments")
        comments.appendChild(p)
        input.value=""

    })
})
function getData() {
fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then(data => {
        let image = document.querySelector("#image")
        image.src = data.message;
    })
}