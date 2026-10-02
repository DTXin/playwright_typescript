import { request } from "@playwright/test";

/**
 * Returns valid token for the given username and password.
 */
export async function getToken() {
    let headers = await getHeader();
    let data = await getData();

    const contextRequest = await request.newContext();
    const response = await contextRequest.post("/auth", {
        headers,
        data,
    });

    const body = await response.json();
    return body.token;
}

export async function getHeader() {
    return {
        "Content-Type": "application/json"
    };
}

export async function getData() {
    return {
        username: "admin",
        password: "password123"
    };
}

/**
 * @returns a header object with the token.
 */
export async function createHeader(token?: string) {
    return {
        cookie: `token=${token}`,
    };
}