
export function regexHtml(html){
    let regex = /(<([^>]+)>)/ig;
    return html.replace(regex,'')
}