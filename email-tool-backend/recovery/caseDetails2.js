import prisma from "../taskJob/auth/prisma.js";
import cloudinary from "../utils/cloudinaryConfig.js";

// main signup handler
export const caseDetails2 = async (req, res) => {
  const {email, description ,} = req.validated.body;

  try {

 if (!req.files || req.files.length === 0) {
      return res.status(400).json({
        success: false,
        message: "No images evidence uploaded",
      });
    }

    // ✅ Upload images to Cloudinary
    const imgurls = await Promise.all(
      req.files.map(
        (file) =>
          new Promise((resolve, reject) => {
            const stream = cloudinary.uploader.upload_stream(
              {
                folder: "user_uploads",
                transformation: [{ width: 1000, crop: "limit" }],
                resource_type: "image",
              },
              (err, result) => (err ? reject(err) : resolve(result.secure_url)),
            );
            stream.end(file.buffer);
          }),
      ),
    );

    // update case
    const user = await prisma.case.update({
      where: { email },
      data: { description, images: imgurls },
    });

    return res.status(200).json({
      success: true,
      message: "We Received Your Case Details, Please Continue.",
    });

  } catch (error) {
    //log error activity
    await prisma.caseactivity.create({
      data: {
        email,
        message: error.message,
      },
    });

    return res.status(500).json({
      success: false,
      message: "Something went wrong please try again",
    });
  }
};
