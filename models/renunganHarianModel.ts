import { IRenunganHarian } from "@/types/renunganharian";
import mongoose, { Schema } from "mongoose";

const renunganHarianModel = new mongoose.Schema({
    content : {
        type: String,
    },
    date: {
        type: Date,
    },
    author: {
        type: String,
    },
    title: {
        type: String
    },
    slug: {
        type: String
    },
    verse: {
        type: String
    },
    image : [{
        url : {
            type: String
        },
        sort: {
            type: Number
        }
    }],
    refleksi: {
        type: String
    },
    ayatColor: {
        type: String,
    },
    ayatBgColor: {
        type: String,
    },
    renunganColor: {
        type: String,
    },
    renunganBgColor: {
        type: String,
    },
    refleksiColor: {
        type: String,
    },
    refleksiBgColor: {
        type: String,
    },
    isiAyat: {
        type: String
    }
}, {
    timestamps: true
});

renunganHarianModel.index({date: -1});

const RenunganHarianModel = mongoose.models.RenunganHarianModel ?? mongoose.model<IRenunganHarian>("RenunganHarianModel", renunganHarianModel);
export default RenunganHarianModel;