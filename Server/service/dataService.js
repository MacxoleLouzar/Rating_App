import GoogleSheet from '../Model/dataModel.js'

const getAllData = async ()=>{
    return await GoogleSheet.find()
};

const getSingleData = async ()=>{
    return await GoogleSheet.findById(id)
};

const AddData = async (spread)=>{
    return await GoogleSheet.create(spread)
};

const updateData = async (id, spread) =>{
    return await GoogleSheet.findByIdAndUpdate(id, spread)
};

const deleteSheet = async(id) =>{
    return await GoogleSheet.findByIdAndRemove(id)
};

export default {
   getAllData,
   getSingleData,
   AddData,
   updateData,
   deleteSheet,
};