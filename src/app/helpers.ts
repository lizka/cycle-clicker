export function log (...args: any[]): void {
    const first = args.shift();
    return console.log(first, ...args); // tslint:disable-line:no-console
}
