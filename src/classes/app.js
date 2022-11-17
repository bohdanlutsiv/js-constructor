export class App {
    constructor(model) {
        this.model = model
    }

    init() {
        const site = new Site('#site')

site.render(model)

const updateCallback = newBlock => {
    this.model.push(newBlock)
    site.render(this.model)
}

new Sidebar('#panel', updateCallback)
    
    }
}