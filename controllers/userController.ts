import catchAsyncErrors from "@/middlewares/catchAsyncErrors";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import ErrorHandler from "@/utils/errorHandler";
import generateToken from "@/utils/generateToken";
import { Pagination } from "@/types/pagination";

const registerUser = catchAsyncErrors(async (req: NextRequest) => {
    const body = await req.json();
    const { username, password, role, name } = body;

    if (username) {
        const userExists = await User.findOne({ username })

        if (userExists) {
            throw new ErrorHandler("User already exists", 400);
        }
    }

    const user = await User.create({
        username,
        password,
        role,
        name
    })

    if (user) {
        return NextResponse.json({
            _id: user._id,
            username: user.name
        })
    } else {
        throw new ErrorHandler("Failed to create User", 400);
    }
})

const authAdmin = catchAsyncErrors(async (req: NextRequest) => {
    const body = await req.json();
    const { username, password } = body;
    const user = await User.findOne({ username })

    if (user && (await user.matchPassword(password))) {
        return NextResponse.json({
            _id: user._id,
            username: user.username,
            name: user.name,
            role: user.role,
            token: generateToken(user._id.toString()),
        });
    }
    else {
        throw new ErrorHandler("Invalid username or password", 400);
    }
});


const getAllUser = catchAsyncErrors(async (req: NextRequest) => {
    const page = Number(req.nextUrl.searchParams.get("page") ?? 1);
    const numberPerPage = Number(req.nextUrl.searchParams.get("numberPerPage") ?? 20);
    const search = req.nextUrl.searchParams.get("search") ?? "";
    let query = {};

    if(search){
        query = {
            "$or" : [
                {
                    username : {
                        $regex : search,
                        '$options' : 'i'
                    }
                },
                {
                    name: {
                        $regex : search,
                        '$options' : 'i'
                    }
                }
            ]
        }
    }

    const users = await User.find(query).select("-password")
        .skip((page - 1) * numberPerPage).limit(numberPerPage);
    const total = await User.countDocuments();
    const pagination: Pagination = {
        numberPerPage,
        page,
        total
    }
    return NextResponse.json({
        users,
        pagination
    });
});

const deleteUser = catchAsyncErrors(async (req: NextRequest, { params }: { params: { id: string } }) => {
    const user = await User.findById(params.id);
    if (user) {
        await user.deleteOne();

        return NextResponse.json({
            message: 'User removed'
        });
    } else {
        throw new ErrorHandler("User not found", 404);
    }
});

const updateUserProfile = catchAsyncErrors(async (req: NextRequest, { params }: { params: { id: string } }) => {
    const user = await User.findById(params.id);
    const body = await req.json();
    if (user) {
        user.name = body.name || user.name;
        user.username = body.username || user.username;
        user.role = body.role || user.role;
        if(body.password){
            user.password = body.password;
        }

        const updatedUser = await user.save();

        return NextResponse.json({
            _id: updatedUser._id,
            username: updatedUser.username,
        });
    }

    throw new ErrorHandler("User not found", 404);
});

const resetUserPassword = catchAsyncErrors(async (req: NextRequest) => {
    const body = await req.json();
    const { id } = body;
    const user = await User.findById(id);

    if (user) {
        const password = "123456";
        user.password = password;
        await user.save();
        return NextResponse.json({
            message: 'Change Password Success'
        });
    } else {
        throw new ErrorHandler("User not found", 404);
    }
});

const getUserBySearch = catchAsyncErrors(async (req: NextRequest) => {
    const search = req.nextUrl.searchParams.get("search") ?? "";
    const users = await User.find({ username: new RegExp(search, "i") }).select("-password").limit(10);
    return NextResponse.json({
        users
    });
});

const template = catchAsyncErrors(async (req: NextRequest) => {
    return NextResponse.json({

    });
});

export {
    registerUser,
    authAdmin,
    getAllUser,
    deleteUser,
    updateUserProfile,
    resetUserPassword,
    getUserBySearch,
}