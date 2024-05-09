const mongoose=require('mongoose')

const connection=async()=>{
	try{
		const con= await mongoose.connect(process.env.MONGO_URI)
		if(con)
		console.log('connected');
		else
		console.log('not connected');

	}catch(error){
		console.log('something went wrong');
	}
}
module.exports = connection