export function getPathLink(links: string[], index: number){
    return '/'+links.slice(0,index+1).join("/")
}