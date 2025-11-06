// tests/api.spec.ts
import { test, expect } from '@playwright/test';
let baseURL: string = 'http://localhost:3000/users';

test.describe('User management API', () => {

    test('all users: should return empty array when no users', async ({ request }) => {
        const response = await request.get(`${baseURL}`);
        expect(response.status()).toBe(200);
        const responseBody = await response.text()
        expect(responseBody).toBe('[]');
    });

    test('find user: should return a user by ID', async ({ request }) => {
        const response = await request.post(`${baseURL}`);
        const responseBody = await response.json()
        const userId = responseBody.id
        const getResponse = await request.get(baseURL + '/' + userId);
        expect(getResponse.status()).toBe(200);
        const getResponseBody = await getResponse.json()
        expect(getResponseBody.id).toBe(userId);
        console.log(getResponseBody)
    });

    test('find user: should return 404 if user not found', async ({ request }) => {

    });

    test('create user: should add a new user', async ({ request }) => {
        const response = await request.post(`${baseURL}`);
        expect(response.status()).toBe(201);
        const responseBody = await response.json()
        expect(responseBody.id).toBeDefined();
        expect(responseBody.name).toBeDefined();
        expect(responseBody.email).toBeDefined();
        expect(responseBody.phone).toBeDefined();
        console.log(responseBody)
    });

    test('delete user: should delete a user by ID', async ({ request }) => {

    });

    test('delete user: should return 404 if user not found', async ({ request }) => {

    });


});
