
import { databases } from '../../services/Appwrite';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { ip, userAgent } = req.body;

      // Create a new document in the "Visitors" collection
      const visitor = await databases.createDocument(
        '673a2b75000b120fbafd', // Replace with your database ID
        '673a2b950005d60cdec3', // Replace with your visitors collection ID
        'unique()', // Document ID (use unique() to auto-generate a unique ID)
        {
          ip,
          userAgent,
          timestamp: new Date().toISOString(),
        }
      );

      res.status(200).json({ message: 'Visitor tracked successfully', visitor });
    } catch (error) {
      res.status(500).json({ error: 'Error tracking visitor', details: error });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
