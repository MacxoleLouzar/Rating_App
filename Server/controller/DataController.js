import dataService from "../service/dataService.js";

export const getAllDataSheet = async(req, res)=>{
    try{
        const spreadsheet = await dataService.getAllData();
        res.status(200).json({data: spreadsheet})
    }
    catch(err){
        res.status(500).send({error: err.message});
    }
};

export const getSingleDataSheet = async(req, res)=>{
    try{
        const spreadsheet = await dataService.getSingleData(req.params.id);
        res.status(200).json({data: spreadsheet});
    }
    catch(err){
       res.status(500).send({error: err.message});
    }
}

export const AddDataToSheet = async(req, res)=>{
    try{
        const spread = await dataService.AddData(req.body);
        res.status(201).json({data: spread, message: 'Data ended successful'});
    }
    catch(err){
        res.status(500).send({error: err.message})
    }
};


export  const updateDataGoogleSheet = async(req, res)=>{
    try{
        const spread = await dataService.updateData(req.params.id, req.body);
        res.status(201).json({data: spread, message: 'updated successful'})
    }
    catch(err){
        res.status(500).json({error: err.message})
    }
}

export const deleteDataGoogleSheet = async(req, res)=>{
    try{
        const delspread =  await dataService.deleteSheet(req.params.id)
        res.json({data: delspread, message: 'Deleted'});
    }
    catch(err){
        res.status(500).send({error: err.message})
    }
}

export default{
    getAllDataSheet,
    getSingleDataSheet,
    AddDataToSheet,
    updateDataGoogleSheet,
    deleteDataGoogleSheet
};

// const readGoogleSheet = (req, res) => {
//     fetch("https://sheetdb.io/api/v1/xcuq48o2wlen4")
//       .then((res) => res.json())
//       .then((data) => (data));
//   };

//   const createGoogleSheet = () => {
//     fetch("https://sheetdb.io/api/v1/xcuq48o2wlen4", {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         data: [
//           {
//             id: "4",
//             name: "Sam",
//             rating: 4,
//             comment: "Great work"
//           },
//         ],
//       }),
//     })
//       .then((response) => response.json())
//       .then((data) => console.log(data));
//   };

//   const updateGoogleSheet = () => {
//     fetch("https://sheetdb.io/api/v1/xcuq48o2wlen4", {
//       method: "PATCH",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         data: {
//           id: "1",
//         },
//       }),
//     })
//       .then((response) => response.json())
//       .then((data) => console.log(data));
//   };

//   const deleteGoogleSheet = () => {
//     fetch("https://sheetdb.io/api/v1/xcuq48o2wlen4/id/4", {
//       method: "DELETE",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => console.log(data));
//   };
