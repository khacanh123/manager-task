// pages/api/login.js
export default async function handler(req: any, res: any) {
    const response = await fetch('https://apiv2.vieclam24h.vn/employer/fe/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaGFubmVsX2NvZGUiOiJ2bDI0aCIsInVzZXIiOm51bGx9.SKJl1eBZJcTAXu3rzOrJ7pqFkj9ySP9sxdLFb0FADho'
      },
      body: JSON.stringify(req.body)
    });
  
    const data = await response.json();
    res.status(response.status).json(data);
  }
  