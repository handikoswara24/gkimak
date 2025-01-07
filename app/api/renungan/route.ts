import { createEdgeRouter } from "next-connect";
import { admin, protect } from "@/middlewares/auth";
import { NextRequestWithUser } from "@/types/user";
import dbConnect from "@/utils/dbConnect";
import { addRenungan, getAllRenungan } from "@/controllers/renunganHarianController";

const router = createEdgeRouter<NextRequestWithUser, {}>();
dbConnect();

router.get(getAllRenungan)
router.use(protect).post(addRenungan);

export async function POST(request: NextRequestWithUser, ctx: {}): Promise<any> {
    return router.run(request, ctx);
}

export async function GET(request: NextRequestWithUser, ctx: {}): Promise<any> {
    return router.run(request, ctx);
}