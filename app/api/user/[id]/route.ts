import { createEdgeRouter } from "next-connect";
import { deleteUser, updateUserProfile } from "@/controllers/userController";
import { admin, protect } from "@/middlewares/auth";
import { NextRequestWithUser } from "@/types/user";
import dbConnect from "@/utils/dbConnect";

interface RequestContext {
    params: {
        id: string;
    };
}

const router = createEdgeRouter<NextRequestWithUser, RequestContext>();
dbConnect();
router.use(protect, admin).put(updateUserProfile);
router.use(protect, admin).delete(deleteUser);
export async function PUT(request: NextRequestWithUser, ctx: RequestContext): Promise<any> {
    return router.run(request, ctx);
}

export async function DELETE(request: NextRequestWithUser, ctx: RequestContext): Promise<any> {
    return router.run(request, ctx);
}
