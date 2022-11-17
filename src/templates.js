import {row, col} from './utilts'

function title(block) {
    const tag = block.options.tag ?? 'h1'

    return row(col(`<${tag}>${block.velue}</${tag}>`))
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