
import jwt from 'jsonwebtoken'

import { NextResponse } from "next/server";
import ErrorHandler from "@/utils/errorHandler";
import { NextHandler } from "next-connect";
import { NextRequestWithUser } from '@/types/user';
import User from '@/models/userModel';

const protect = async (req: NextRequestWithUser, event: any, next: NextHandler) => {
    let token: string | null = null;
    const authorization = req.headers.get("authorization");
    if (
        authorization &&
        authorization.startsWith('Bearer')
    ) {
        try {
            token = authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as jwt.JwtPayload;

            req.user = await User.findById(decoded.id).select('-password -features');

            return next();
        } catch (error) {
            return NextResponse.json(
                {
                    errMessage: `Not authorized, token failed`,
                },
                { status: 401 }
            );
            //throw new ErrorHandler('Not authorized, token failed', 401);
        }
    }

    if (!token) {
        return NextResponse.json(
            {
                errMessage: `Not authorized, token failed`,
            },
            { status: 401 }
        );
        //throw new ErrorHandler('Not authorized, no token', 401);
    }
}

const admin = (req: NextRequestWithUser, event: any, next: NextHandler) => {
    if (req.user && req.user.role == "admin") {
        return next();
    } else {
        throw new ErrorHandler('Not authorized as an admin', 401);
    }
}

const user = (req: NextRequestWithUser, event: any, next: NextHandler) => {
    if (req.user && req.user.role == "user") {
        return next();
    } else {
        throw new ErrorHandler('Not authorized as an user', 401);
    }
}

const userOrAdmin = (req: NextRequestWithUser, event: any, next: NextHandler) => {
    if (req.user && (req.user.role == "user" || req.user.role == "admin")) {
        return next();
    } else {
        throw new ErrorHandler('Not authorized as an user', 401);
    }
}

const wo = (req: NextRequestWithUser, event: any, next: NextHandler) => {
    if (req.user && req.user.role == "wo") {
        return next()
    } else {
        throw new ErrorHandler('Not authorized as wo', 401);
    }
}

const woOrAdmin = (req: NextRequestWithUser, event: any, next: NextHandler) => {
    if (req.user && (req.user.role == "wo" || req.user.role == "admin")) {
        return next();
    } else {
        throw new ErrorHandler('Not authorized as an admin or wo', 401);
    }
}


export { protect, admin, wo, woOrAdmin, user, userOrAdmin }