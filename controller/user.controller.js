const UserService = require("../service/user.service");

const CreateUser = async (req, res) => {
   var messages = {}
   let data ={};
    try {
        reqBody = req.body;

        const email = await UserService.findemail(reqBody.Email);
        if (email) { throw new Error("Email Already exit (" + email.Email + ") Please Enter New Email") };

        const user = await UserService.CreatUser(reqBody);
        if (!user) throw new Error("User Data Not Created...");
        res.status(200).json({
            success: true,
            messsage: "User SuucessFully Created ...",
            data: user,
            // messages:messages
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}


const ViewUserall = async (req, res) => {
    try {
        const UserList = await UserService.ViewUser();
        if (!UserList) throw new Error("User Data IS Emty..");

        res.status(200).json({
            success: true,
            messsage: "User Data SuccessFully View...",
            data: UserList
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

const ViewUser = async (req, res) => {
    try {
        const id = req.params.id;
        const userdata = await UserService.findById(id);

        if (!userdata) {
            throw new Error("User Not Found...");
        }

        res.status(200).json({
            success: true,
            messsage: "User Data SuucessFully Get..",
            data: userdata
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const userdata = await UserService.findById(id);

        if (!userdata) {
            throw new Error("User Not Found...");
        }
        await UserService.deleteUser(id);
        res.status(200).json({
            success: true,
            messsage: "User Data SuucessFully Delete..",
            data: userdata
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

const allUserDelete = async (req, res) => {
    try {
        var UserData = await UserService.allUserDelete();

        res.status(200).json({
            success: true,
            messsage: "All User Data SuucessFully Delete..",
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}
const UpdateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const userdata = await UserService.findById(id);
        if (!userdata) {
            throw new Error("User Not Found...");
        }
        const { firstName, lastName, Email, Password } = req.body;
        await UserService.updateUser(id, { firstName, lastName, Email, Password });
        res.status(200).json({
            success: true,
            messsage: "User Data SuucessFully Updated...",
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

const CountUser = async (req, res) => {
    try {
        const { count, rows } = await UserService.CountData();
        if (!count) throw new Error("User Data IS Emty..");

        res.status(200).json({
            success: true,
            messsage: "User Data Count SuccessFully...",
            count: count,
            data: rows
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

//row user
const RowQueryUser = async (req, res) => {
    try {
        const userData = await UserService.rowUser();

        res.status(200).json({
            success: true,
            messsage: "User Data SuccessFully View...",
            data: userData
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}
module.exports = {
    CreateUser,
    ViewUserall,
    ViewUser,
    deleteUser,
    UpdateUser,
    allUserDelete,
    CountUser,
    RowQueryUser
}