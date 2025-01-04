import { createEdgeRouter } from "next-connect";
import { authAdmin } from "@/controllers/userController";
import { NextRequestWithUser } from "@/types/user";
import dbConnect from "@/utils/dbConnect";

const router = createEdgeRouter<NextRequestWithUser, {}>();
dbConnect();
router.post(authAdmin);

export async function POST(request: NextRequestWithUser, ctx: {}): Promise<any> {
    return router.run(request, ctx);
}