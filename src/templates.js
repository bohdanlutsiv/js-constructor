import {row, col} from './utilts'

function title(block) {
    const {tag = 'h1', styles} = block.options
    return row(col(`<${tag}>${block.velue}</${tag}>`), css(styles))
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