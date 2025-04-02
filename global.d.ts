
declare global {
    interface Window {
        gapi: typeof gapi;
    }

    const gapi: typeof import("gapi");
}

export {};
