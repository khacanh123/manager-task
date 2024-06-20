// pages/api/search.ts
export default async function handler(req: any, res: any) {
    const { id, token } = req.query;
  // https://apiv2.vieclam24h.vn/seeker/fe/resume/201965208?id=201965208&options=1

    const apiUrl = `https://apiv2.vieclam24h.vn/seeker/fe/resume/${id}?id=${id}&options=1`;
  
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
  