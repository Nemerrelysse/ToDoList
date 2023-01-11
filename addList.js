/**
 * @param {HTMLFormElement} root
 * @param {InitOptions} [options]
 */

export const init =(root, lists)=>{
    const handleSubmit=async(event)=>{
        event.preventDefault()

        const listName=document.getElementById("name").value

        const element=createListElement(listName)

        lists.append(element)

    }

    root.addEventListener("submit", handleSubmit)
}

const createListElement = (list)=>{
    const element=document.createElement("li")
    element.classList.add("menu_item")

    const titre = document.createElement("p")
    titre.classList.add("menu_item_text")
    titre.textContent=list

    element.append(titre)

    return element
}
