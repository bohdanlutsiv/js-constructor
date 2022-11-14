export function title(block) {
    return `
    <div class="row">
        <div class="col-sm">
            <h1>${block.velue}</h1>
        </div>
    </div>    
    `
}

export function text(block) {
    return `
    <div class="row">
    <div class="col-sm">
        <p>${block.velue}</p>
    </div>
</div>
    `
}

export function columns(block) {
    const html = block.velue.map(item => `<div class="col-sm">${item}</div>`)
    return `
    <div class="row">
        ${html.join('')}
    </div>
    `
}

export function image(block) {
    return `
        <div class = "row">
        <img src = "${block.velue}"
        </div>
    `
}

export const templates = {
    title,
    text,
    image,
    columns
}