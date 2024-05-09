const User = require('../Models/userModel');
const bcrypt=require('bcryptjs')
const jwt = require('jsonwebtoken')
const mailSender=require('../config/mailSender')
const Token = require('../Models/tokenModel');
const Form = require('../Models/Form');
const PoliceStation = require('../Models/PoliceStation');




const registerUser = async (req, res) => {
    const { user, email, password } = req.body;
    try {
        const userExists = await User.findOne({ email });

        if (userExists) {
            return res.status(200).send({ success: false, msg: 'User already registered with this email' });
        }else{
			try {
				var salt =await bcrypt.genSalt(10);
				var hashpass =await bcrypt.hash(password, salt);
				const newEntry =await User.create({
					user:user,
					email:email,
					password:hashpass,
					status:1
				})
				
				await mailSender(newEntry,'verify-mail')

				return res.status(200).send({ success: true, msg: 'User registered successfully and a verification mail has been sent to your email' })	;

				//nohashing
				// const newEntry = new User(req.body);
				// await newEntry.save();
				// return res.status(200).send({ success: true, msg: 'User registered successfully' })	;
			} catch (error) {
				return res.status(400).send({ success: false, msg: error });
			}
			
		}
    } catch (error) {
        console.error(error);
        return res.status(400).send({ success: false, msg: 'Something went wrong' });
    }
}

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
		const user = await User.findOne( {email});
        if (user) {
			if (user && (await bcrypt.compare(password,user.password))) {
				if(user.isVerified){
					const tokendata={
						_id:user._id,
						user:user.user,
						email:user.email
					}
					const token =jwt.sign(tokendata,process.env.JWT_KEY,{expiresIn:'30d'})
					return res.status(200).send({ success: true, msg: 'Login successfully' ,token:token});
				}else{
					return res.send({success:false,msg:"Email is not verified,Please check your mail"})
				}
				
			}else{
				return res.send({success:false,msg:"Invalid Creddentials"})
			}           
        }else{
			return res.send({success:false,msg:"Invalid Creddentials"})
		}

		//hashing
		// const user = await User.findOne( {email});
        // if (user) {
		// 	if (user && (await bcrypt.compare(password,user.password))) {
		// 		return res.status(200).send({ success: true, msg: 'Login successfully' });
		// 	}else{
		// 		return res.send({success:false,msg:"Invalid Creddentials"})
		// 	}           
        // }else{
		// 	return res.send({success:false,msg:"Invalid Creddentials"})
		// }

		//nohashing
        // const user = await User.findOne( {email ,password});
        // if (user) {
		// 	console.log(user)
        //     return res.status(200).send({ success: true, msg: 'Login successfully' });
        // }else{
		// 	return res.send({success:false,msg:"Invalid Creddentials"})
		// }
    } catch (error) {
        return res.status(400).send({ success: false, msg: 'Something went wrong' });
    }
}

const userData=async(req,res)=>{
	try{
		res.status(200).send({success:true,data:req.body.user})
	}catch(error){
		res.status(4000).send(error)
	}
}


const updateUser = async (req, res) => {
    try {
        const { updateUser } = req.body;
        const email = updateUser.email;
        const user = await User.findOne({ email });

        if (user && (await bcrypt.compare(updateUser.cupassword, user.password))) {
            const salt = await bcrypt.genSalt(10);
            const hashpass = await bcrypt.hash(updateUser.password, salt);
            await User.findByIdAndUpdate(user._id, {
                name: updateUser.name,
                email: updateUser.email,
                password: hashpass
            });
            return res.status(200).send({ success: true, msg: 'Password updated successfully' });
        } else {
            return res.status(400).send({ msg: "No user or Something went wrong" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).send({ msg: "Something went wrong" });
    }
}

const verifyMail=async(req,res)=>{
	try {
		const tokenDetail=await Token.findOne({token:req.body.token})
		if(tokenDetail){
			await User.findOneAndUpdate({ _id: tokenDetail.userid }, { isVerified: true })
			await Token.findOneAndDelete({token:req.body.token})

			return res.status(200).send({ success: true, msg: 'Email verified successfully' });
		}else{
			return res.status(500).send({ msg: "Invalid token" });
		}
	} catch (error) {
		console.log(error)
		return res.status(500).send({ msg: "Invalid token" });
	}
}

const submitForm = async (req, res) => {
    try {
        const {
			userId,
            name,
            address,
            phoneNumber,
            age,
            sourceStation,
            destinationStation,
            travelReason,
            travelDate,
            travelTime,
            returnDate,
            returnTime
        } = req.body;
		// console.log(req.body)
        const { photo, signature } = req.files;

        const newForm = new Form({
			userId,
            name,
            address,
            phoneNumber,
            age,
            sourceStation,
            destinationStation,
            travelReason,
            travelDate,
            travelTime,
            returnDate,
            returnTime,
            photo: photo[0].originalname, 
            signature: signature[0].originalname 
        });

        await newForm.save();

        return res.status(201).json({ success: true, message: 'Form submitted successfully' });
    } catch (error) {
        console.error('Error submitting form:', error);
        return res.status(500).json({ success: false, error: 'An error occurred while submitting the form' });
    }
}



const getAllFormData = async (req, res) => {
	try {
	  const formData = await Form.find();
  
	  if (formData) {
		return res.status(200).json({ success: true, data: formData });
	  } else {
		return res.status(404).json({ success: false, message: 'No form data found' });
	  }
	} catch (error) {
	  console.error('Error fetching form data:', error);
	  return res.status(500).json({ success: false, error: 'An error occurred while fetching form data' });
	}
  };

const submitstation=async(req,res)=>{
	try {
		const { name, email, password, location, headPoliceName, description, status } = req.body;
	
		const newPoliceStation = new PoliceStation({
		  name,
		  email,
		  password,
		  location,
		  headPoliceName,
		  description,
		  status,
		  headPoliceImage: req.files['headPoliceImage'][0].originalname, 
		  policeStationImage: req.files['policeStationImage'][0].originalname 
		});
	
		await newPoliceStation.save();

		res.status(201).json({ message: 'Police station details added successfully' });
	  } catch (error) {
		console.error('Error adding police station details:', error);
		res.status(500).json({ error: 'Internal server error' });
	  }
}

const getAllPoliceData = async (req, res) => {
	try {
	  const policestationData = await PoliceStation.find();
	  if (policestationData) {
		return res.status(200).json({ success: true, data: policestationData });
	  } else {
		return res.status(404).json({ success: false, message: 'No policestation data found' });
	  }
	} catch (error) {
	  console.error('Error fetching form data:', error);
	  return res.status(500).json({ success: false, error: 'An error occurred while fetching policestation data' });
	}
  };

  const loginpoliceUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await PoliceStation.findOne({ email });
        if (user) {
            if (user.password === password) { 
                let userType = '';
                if (user.status === 0) {
                    userType = 'admin';
                } else if (user.status === 1) {
                    userType = 'police';
                }
                const userInfo = {
					_id: user._id,
					email: user.email,
					userType: userType,
					location: user.location,
				};
				
                return res.status(200).send({ success: true, msg: 'Login successfully', userInfo: userInfo });
            } else { 
                return res.send({ success: false, msg: "Invalid Credentials" });
            }
        } else {
            return res.send({ success: false, msg: "Invalid Credentials" });
        }
    } catch (error) {
        return res.status(400).send({ success: false, msg: 'Something went wrong' });
    }
};

const getAllFormDatavalid = async (req, res) => {
    try {
        const formData = await Form.find();
        
        if (formData) {
            return res.status(200).json({ success: true, data: formData });
        } else {
            return res.status(404).json({ success: false, message: 'No form data found' });
        }
    } catch (error) {
        console.error('Error fetching form data:', error);
        return res.status(500).json({ success: false, error: 'An error occurred while fetching form data' });
    }
};

const approveTrip = async (req, res) => {
    const { formId } = req.body;
    try {
        await Form.findByIdAndUpdate(formId, { approvalStatus: 1 });
        res.status(200).send({ success: true, message: 'Trip approved successfully' });
    } catch (error) {
        console.error('Error approving trip:', error);
        res.status(500).send({ success: false, message: 'Error approving trip' });
    }
};

const rejectTrip = async (req, res) => {
    const { formId } = req.body;
    try {
        await Form.findByIdAndUpdate(formId, { approvalStatus: 0 });
        res.status(200).send({ success: true, message: 'Trip rejected successfully' });
    } catch (error) {
        console.error('Error rejecting trip:', error);
        res.status(500).send({ success: false, message: 'Error rejecting trip' });
    }
};

const allUser = async (req, res) => {
    try {
        const formData = await User.find();
        
        if (formData) {
            return res.status(200).json({ success: true, data: formData });
        } else {
            return res.status(404).json({ success: false, message: 'No form data found' });
        }
    } catch (error) {
        console.error('Error fetching form data:', error);
        return res.status(500).json({ success: false, error: 'An error occurred while fetching form data' });
    }
};

const activeTrip= async(req,res)=>{
	const { id } = req.body;
    try {
        const trip = await Form.findOne({ _id: id });
        if (!trip) {
            return res.status(404).json({ message: 'Trip not found' });
        }
        res.json(trip);
    } catch (error) {
        console.error('Error retrieving trip by ID:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}


const submitAlert = async (req, res) => {
    try {
        const { userId, coordinates } = req.body;

        const updateResult = await Form.updateOne(
            { _id: userId },
            {
                $set: {
                    alertData: coordinates.stateDistrict, // Set alertData field
                    alertTime: new Date(),
                }
            }
        );

        if (updateResult.nModified === 1) {
            return res.status(200).json({ success: true, message: 'Alert data updated successfully' });
        } else {
            return res.status(404).json({ success: false, message: 'User not found' });
        }
    } catch (error) {
        console.error('Error updating alert data:', error);
        return res.status(500).json({ success: false, error: 'An error occurred while updating alert data' });
    }
};


const submitStatus = async (req, res) => {
    try {
        const { userId, tripStatus } = req.body;
        const updateResult = await Form.updateOne(
            { _id: userId },
            {
                $set: {
                    tripStatus:tripStatus , 
                }
            }
        );
    } catch (error) {
        console.error('Error updating alert data:', error);
        return res.status(500).json({ success: false, error: 'An error occurred while updating alert data' });
    }
};

const submitAlerts = async (req, res) => {
    try {
        const { userId, status,policeId } = req.body;

        const updateResult = await Form.updateOne(
            { _id: userId },
            {
                $set: {
                    status:status ,
					policeId:policeId
                }
            }
        );
    } catch (error) {
        console.error('Error updating alert data:', error);
        return res.status(500).json({ success: false, error: 'An error occurred while updating alert data' });
    }
};


module.exports = {
    registerUser,
	loginUser,
	userData,
	updateUser,
	verifyMail,
	submitForm,
	getAllFormData,
	submitstation,
	getAllPoliceData,
	loginpoliceUser,
	getAllFormDatavalid,
	approveTrip,
	rejectTrip,
	allUser,
	activeTrip,
	submitAlert,
	submitStatus,
	submitAlerts
}

