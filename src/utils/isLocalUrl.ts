const localUrlRegexp = /^(?!http)\/.*$/;

export function isLocalUrl(url: string): boolean {
    return localUrlRegexp.test(url);
}
