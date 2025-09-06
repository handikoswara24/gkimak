import { createEdgeRouter } from "next-connect";
import { admin, protect } from "@/middlewares/auth";
import { NextRequestWithUser } from "@/types/user";
import dbConnect from "@/utils/dbConnect";
import { addOption, getAllOption } from "@/controllers/optionController";



const router = createEdgeRouter<NextRequestWithUser, {}>();
dbConnect();

router.use(protect).get(getAllOption)
router.use(protect).post(addOption);

export async function POST(request: NextRequestWithUser, ctx: {}): Promise<any> {
    return router.run(request, ctx);
}

export async function GET(request: NextRequestWithUser, ctx: {}): Promise<any> {
    return router.run(request, ctx);
}