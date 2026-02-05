const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

let chaptersArray = getChapterList() || [];

function setChapterList() {
    localStorage.setItem('chaptersList', JSON.stringify(chaptersArray));
};

function getChapterList() {
    return JSON.parse(localStorage.getItem('chaptersList'));
};

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
};

function displayList(item) {
    let li = document.createElement("li");
    let deleteButton = document.createElement("button");
    li.textContent = item;
    deleteButton.textContent = "❌";
    deleteButton.classList.add('delete');
    deleteButton.setAttribute("aria-label", "delete");
    li.append(deleteButton);
    list.append(li);
    deleteButton.addEventListener("click", function() {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    })
};

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

button.addEventListener("click", function() {
    if (input.value.trim() !== "") {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList(input.value);
        input.value = '';
    }
    input.focus();
});