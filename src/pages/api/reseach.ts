// pages/api/search.ts
export default async function handler(req: any, res: any) {
    const { q, token } = req.query;
  
    const apiUrl = `https://apiv2.vieclam24h.vn/seeker/fe/search/resume?per_page=143&province_ids[0]=73&q=${q}&updated_at=7&action=search&includes=is_seen`;
  
    try {
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
  
      const data = await response.json();
      res.status(response.status).json(data);
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
  