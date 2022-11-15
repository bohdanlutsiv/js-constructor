import {row, col} from './utilts'

function title(block) {
    return row(col(<h1>${block.velue}</h1>))
}

function text(block) {
    return row(col(<p>${block.velue}</p>))
}


function columns(block) {
    const html = block.velue.map(col).join('')
    return row(html)
}

function image(block) {
    return row(<img src = "${block.velue}" />)
}

export const templates = {
    title,
    text,
    image,
    columns
}