// pages/api/search.ts
export default async function handler(req: any, res: any) {
    const { query } = req.body;
  // https://apiv2.vieclam24h.vn/seeker/fe/resume/201965208?id=201965208&options=1

    // const apiUrl = `https://optisix.monday.com/boards/leftpane_workspace_data?workspace_id=6404069&boards_only=false`;
  
    const apiUrl = 'https://api.monday.com/v2';
    try {
    //     const query = `
    //     {
    //       boards(ids: [6586384268]) {
    //         id
    //         name
    //         items(limit: 100, page: 1) {
    //           id
    //           name
    //           column_values {
    //             id
    //             text
    //             title
    //             value
    //           }
    //         }
    //       }
    //     }
    //   `;
    // let query = "{ boards(ids: [6586350972]) { items_page(limit: 1) { cursor items { id name  column_values { id type text value ... on MirrorValue { mirrored_items { linked_item { id name column_values { id text }} } } } } } } }";
    // let query = "query {items (ids: 6585176301) { subitems  { id column_values { value text } } } } ";

// const query = ` query {
//         items (ids: 6585176778) {
//             id
//             name
//           }
//         }`;
      
    
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjI5Njg5OTA5MCwiYWFpIjoxMSwidWlkIjo1MTUzOTA4MiwiaWFkIjoiMjAyMy0xMS0xN1QwNzoxMDozOS4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MTY2OTUxMjMsInJnbiI6InVzZTEifQ.2iuavWH4Uc_gsAGwJJgIKX2Bu7Zw2XwiAXYbrWbaj-Y",
        },
        body: JSON.stringify({ query }),
      });
    
      const result = await response.json();
      res.status(response.status).json(result);
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
  