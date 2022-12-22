import { Client } from 'appwrite'

export const appwrite = new Client()
    .setEndpoint('http://localhost/v1')
    .setProject('draperweb-meta-dev')
