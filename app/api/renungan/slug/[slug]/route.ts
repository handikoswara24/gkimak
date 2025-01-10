import { createEdgeRouter } from "next-connect";
import { NextRequestWithUser } from "@/types/user";
import dbConnect from "@/utils/dbConnect";
import { getRenunganBySlug } from "@/controllers/renunganHarianController";

interface RequestContext {
    params: {
        slug: string;
    };
}

const router = createEdgeRouter<NextRequestWithUser, RequestContext>();
dbConnect();
router.get(getRenunganBySlug);

export async function GET(request: NextRequestWithUser, ctx: RequestContext): Promise<any> {
    return router.run(request, ctx);
}