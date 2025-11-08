// tests/api.spec.ts
import { test, expect } from '@playwright/test';
import {StatusCodes} from "http-status-codes";
let baseURL: string = 'http://localhost:3000/users';

test.describe('User management API', () => {

    test('find user: should return a user by ID', async ({ request }) => {
        const response = await request.post(`${baseURL}`);
        const responseBody = await response.json()
        const userId = responseBody.id
        const getResponse = await request.get(baseURL + '/' + userId);
        expect.soft(getResponse.status()).toBe(StatusCodes.OK);
        const getResponseBody = await getResponse.json()
        expect.soft(getResponseBody.id).toBe(userId);
        console.log(getResponseBody)
    });

    test('find user: should return 404 if user not found', async ({ request }) => {
        const response = await request.post(`${baseURL}`);
        const responseBody = await response.json()
        const userId = responseBody.id
        const delResponse = await request.delete(baseURL + '/' + userId);
        expect.soft(delResponse.status()).toBe(StatusCodes.OK);
        const getResponse = await request.get(baseURL + '/' + userId);
        expect.soft(getResponse.status()).toBe(StatusCodes.NOT_FOUND);
    });

    test('create user: should add a new user', async ({ request }) => {
        const response = await request.post(`${baseURL}`);
        expect.soft(response.status()).toBe(StatusCodes.CREATED);
        const responseBody = await response.json()
        expect.soft(responseBody.id).toBeDefined();
        expect.soft(responseBody.name).toBeDefined();
        expect.soft(responseBody.email).toBeDefined();
        expect.soft(responseBody.phone).toBeDefined();
        console.log(responseBody)
    });

    test('delete user: should delete a user by ID', async ({ request }) => {
        const response = await request.post(`${baseURL}`);
        const responseBody = await response.json()
        const userId = responseBody.id
        //console.log(responseBody)
        const delResponse = await request.delete(baseURL + '/' + userId);
        expect.soft(delResponse.status()).toBe(StatusCodes.OK);
        const delResponseBody = await delResponse.json()
        expect.soft(delResponseBody[0].id).toBe(userId);
        //console.log(delResponseBody[0].id)
        //console.log(delResponseBody)
    });

    test('delete user: should return 404 if user not found', async ({ request }) => {
        const response = await request.post(`${baseURL}`);
        const responseBody = await response.json()
        const userId = responseBody.id
        const delResponse = await request.delete(baseURL + '/' + userId);
        expect.soft(delResponse.status()).toBe(StatusCodes.OK);
        const delAgainResponse = await request.delete(baseURL + '/' + userId);
        expect.soft(delAgainResponse.status()).toBe(StatusCodes.NOT_FOUND);
    });

});
