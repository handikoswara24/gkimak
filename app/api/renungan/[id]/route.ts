import { createEdgeRouter } from "next-connect";
import { admin, protect } from "@/middlewares/auth";
import { NextRequestWithUser } from "@/types/user";
import dbConnect from "@/utils/dbConnect";
import { deleteRenungan, updateRenungan } from "@/controllers/renunganHarianController";

interface RequestContext {
    params: {
        id: string;
    };
}

const router = createEdgeRouter<NextRequestWithUser, RequestContext>();
dbConnect();
router.use(protect).put(updateRenungan);
router.use(protect).delete(deleteRenungan);
export async function PUT(request: NextRequestWithUser, ctx: RequestContext): Promise<any> {
    return router.run(request, ctx);
}

export async function DELETE(request: NextRequestWithUser, ctx: RequestContext): Promise<any> {
    return router.run(request, ctx);
}
