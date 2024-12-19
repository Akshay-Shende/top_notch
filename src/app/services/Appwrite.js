// lib/appwrite.js
import { Client, Databases } from 'appwrite';

// Initialize Appwrite Client
const client = new Client()
  .setEndpoint('https://cloud.appwrite.io/v1') // Replace with your Appwrite endpoint
  client.setProject('673a29730028ec4ddc5e');

const databases = new Databases(client);

export { databases };
