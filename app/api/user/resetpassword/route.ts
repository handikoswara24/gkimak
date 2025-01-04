import { createEdgeRouter } from "next-connect";
import { resetUserPassword } from "@/controllers/userController";
import { admin, protect } from "@/middlewares/auth";
import { NextRequestWithUser } from "@/types/user";
import dbConnect from "@/utils/dbConnect";

const router = createEdgeRouter<NextRequestWithUser, {}>();
dbConnect();
router.use(protect, admin).post(resetUserPassword);

export async function POST(request: NextRequestWithUser, ctx: {}): Promise<any> {
    return router.run(request, ctx);
}