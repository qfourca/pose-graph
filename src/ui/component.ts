export default class Component {
    private parent: HTMLElement
    constructor(parent: HTMLElement) {
        this.parent = parent
    }
    public render(html: string) {
        this.befRender()
        html = html
        const tempElement = document.createElement("div")
        tempElement.innerHTML = html.trim().replaceAll("\n", " ")
        tempElement.childNodes.forEach((child) => {
            this.getParent().appendChild(child)
        })
        this.aftRender()
    }
    protected befRender() {

    }
    protected aftRender() {

    }
    public getParent() {
        return this.parent
    }
    protected get(name: string) {
        return this.parent.getElementsByClassName(name)[0]
    }
    protected gets(name: string) {
        return this.parent.getElementsByClassName(name)
    }
}
// customElements.define("my-component", Component)