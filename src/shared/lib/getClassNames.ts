import classNames from "classnames";

type classImg = {
    readonly [key: string]: string;
}

export function getClassNames(check: boolean, styles: classImg, mainClass: string, mods: string){
    return classNames(styles[`${mainClass}`], {
        [styles[`${mods}`]] : check,
    })
}