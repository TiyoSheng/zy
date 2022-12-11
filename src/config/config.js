
const hostname = window.location.hostname

export const BASE_URL = hostname == 'www.xiaote.com' ? `https://lcen.xiaote.net` : `https://stg-lcen.xiaote.net`
export const WSS_URL = hostname == 'www.xiaote.com' ? `wss://lcen.xiaote.net` : `wss://lcen.xiaote.net`
