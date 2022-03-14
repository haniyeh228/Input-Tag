function deleteTag(id) {
    const tag = document.getElementById('tag-' + id);
    tag.remove();
}
const tagInput = document.getElementById("tag-input");
var id = 1;
tagInput.addEventListener("keypress", function (event) {
    if (event.keyCode == 13 && tagInput.value != "") {
        const tags = document.getElementById("tags");
        tags.innerHTML += `<span class="tag fas fa-tag" id='tag-${id}'>
        ${tagInput.value}
        <button onclick='deleteTag(${id})'>X</button>  
        </span >`;
        id++;




    }


});