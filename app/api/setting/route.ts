import { createEdgeRouter } from "next-connect";
import { admin, protect } from "@/middlewares/auth";
import { NextRequestWithUser } from "@/types/user";
import dbConnect from "@/utils/dbConnect";
import { addUpdateSetting, getSetting } from "@/controllers/settingController";

const router = createEdgeRouter<NextRequestWithUser, {}>();
dbConnect();

router.get(getSetting)
router.use(protect).post(addUpdateSetting);

export async function POST(request: NextRequestWithUser, ctx: {}): Promise<any> {
    return router.run(request, ctx);
}

export async function GET(request: NextRequestWithUser, ctx: {}): Promise<any> {
    return router.run(request, ctx);
}