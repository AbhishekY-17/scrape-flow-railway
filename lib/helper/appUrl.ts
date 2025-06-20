export function getAppUrl(path: string) {
    // depending on where it is deployed, appUrl changes accordingly
    const appUrl = process.env.NEXT_PUBLIC_APP_URL;
    return `${appUrl}/${path}`
}