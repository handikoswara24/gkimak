import { createEdgeRouter } from "next-connect";
import { NextRequestWithUser } from "@/types/user";
import dbConnect from "@/utils/dbConnect";
import { getJemaatByPhone } from "@/controllers/jemaatController";

const router = createEdgeRouter<NextRequestWithUser, {}>();
dbConnect();


router.post(getJemaatByPhone);

export async function POST(request: NextRequestWithUser, ctx: {}): Promise<any> {
    return router.run(request, ctx);
}