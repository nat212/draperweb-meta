export function mergeClasses(...classNames: (string | undefined)[]): string {
    return classNames.filter(cn => !!cn).join(' ');
}
