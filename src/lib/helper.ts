/**
 * get data from local storage
 * @param key is key of variable in localstorage
 * @returns the value of key
 */
export function getFromLocalStorage(key: string): string | null {
    if (typeof window !== 'undefined') {
        return window.localStorage.getItem(key);
    }
    return null;
}

/**
 * Check if current url start with root url . Input: isMatchURL(/a/b, /a) Output: true
 * @param url
 * @returns
 */
export function isMatchURL(current: string, root: string) {
    const firstPart = '/' + current.split('/')[1];
    return firstPart === root;
}
