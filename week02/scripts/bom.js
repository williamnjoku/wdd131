const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");



button.addEventListener('click', function() {
    if (input.value.trim() !== '') {
        const li = document.createElement("li");
        const delButton = document.createElement("button");
        delButton.textContent = "❌";
        delButton.setAttribute("aria-label", `Delete`)
        li.textContent = input.value;
        li.append(delButton);
        list.append(li);

        delButton.addEventListener('click', function() {
            list.removeChild(li);
            input.focus();
        });
        input.value = '';
        input.focus();
    }
});





