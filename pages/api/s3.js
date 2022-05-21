// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { S3Client, ListObjectsV2Command } from "@aws-sdk/client-s3";

export default async function handler(req, res) {
  const s3Client = new S3Client({
    credentials: {
      accessKeyId: process.env.ACCESS_KEY_ID,
      secretAccessKey: process.env.SECRET_ACCESS_KEY,
    },
    region: "us-east-1",
  });
  const objects = new ListObjectsV2Command({ Bucket: "schuster-videos" });

  const data = await s3Client.send(objects);
  console.log(data);
  res.status(200).json({ data });
}
