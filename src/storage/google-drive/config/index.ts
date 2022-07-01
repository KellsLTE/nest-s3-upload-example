export const DriveConfig = {
  projectId: process.env.GCLOUD_PROJECT,
  keyFilename: process.env.GCS_KEYFILE,
  bucket: process.env.GCS_BUCKET,
  filename: (req, file, cb) => {
    const fileNameSplit = file.originalname.split('.');
    const fileExt = fileNameSplit[fileNameSplit.length - 1];
    cb(null, `${Date.now()}.${fileExt}`);
  },
};
