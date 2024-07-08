// pages/api/search.ts
export default async function handler(req: any, res: any) {
    const { cookie } = req.query;
  // https://apiv2.vieclam24h.vn/seeker/fe/resume/201965208?id=201965208&options=1

    const apiUrl = `https://optisix.monday.com/boards/leftpane_workspace_data?workspace_id=6404069&boards_only=false`;
  
    try {
        let query = "query { folders (workspace_ids: 6404069) { name id children { id name }}}";

       const response = await fetch ("https://api.monday.com/v2", {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
            'Authorization' : 'eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjI5Njg5OTA5MCwiYWFpIjoxMSwidWlkIjo1MTUzOTA4MiwiaWFkIjoiMjAyMy0xMS0xN1QwNzoxMDozOS4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MTY2OTUxMjMsInJnbiI6InVzZTEifQ.2iuavWH4Uc_gsAGwJJgIKX2Bu7Zw2XwiAXYbrWbaj-Y'
           },
           body: JSON.stringify({
             'query' : query
           })
          })
      const data = await response.json();
      res.status(response.status).json(data);
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
  