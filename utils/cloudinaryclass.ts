import cloudinary from "cloudinary";

class CloudinaryClass {
    constructor(private cloudName: string, private apiKey: string, private apiSecret: string, private slug: string){
        cloudinary.v2.config({
            cloud_name: cloudName,
            api_key: apiKey,
            api_secret: apiSecret
        })
    }

    public async UploadImage(base64: string) : Promise<cloudinary.UploadApiResponse> {
        const result = await cloudinary.v2.uploader.upload(base64, {
            folder: this.slug
        })

        return result;
    }

    public async UpdateImage(base64: string, id: string) : Promise<cloudinary.UploadApiResponse> {
        await cloudinary.v2.uploader.destroy(id);
        const result = await cloudinary.v2.uploader.upload(base64, {
            folder: this.slug
        })

        return result;
    }

    public async DeleteImage(id: string) {
        await cloudinary.v2.uploader.destroy(id);
    }
}

export default CloudinaryClass;