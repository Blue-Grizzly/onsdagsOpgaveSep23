function construct(list, container, itemRenderer){
    const ListRenderer = {
        list: list,
        container: document.querySelector(container),
        itemRenderer: itemRenderer,
        render(){
            this.container.innerHTML = "";
            for (const item of this.list) {
                const html = this.itemRenderer.render(item);
                this.container.insertAdjacentHTML("beforeend", html);
            }
        }
    }

    return ListRenderer;
}


export {construct};
