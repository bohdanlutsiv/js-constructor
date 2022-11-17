import {row, col} from './utilts'

function title(block) {
    const {tag = 'h1', styles} = block.options
    return row(col(`<${tag}>${block.velue}</${tag}>`), css(styles))
}

function text(block) {
    return row(col(`<p>${block.velue}</p>`), css(block.options.styles))
}


function columns(block) {
    const html = block.velue.map(col).join('')
    return row(html, css(block.options.styles))
}

function image(block) {
    const {imageStyles: is, alt, styles} = block.options
    return row(`<img src = "${block.velue}" alt="${alt}" style="${css(is)}"/>`, css(block.options.styles))
}

export const templates = {
    title,
    text,
    image,
    columns
}