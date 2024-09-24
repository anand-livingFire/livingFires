import React, { useState } from 'react';
import { uploadBanner } from '../../api/bannerApi';

const BannerUploadForm = () => {
  const [file, setFile] = useState(null);
  const [uploadSuccess, setUploadSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await uploadBanner(file);
    setUploadSuccess(result.Location); // AWS S3 returns the file URL in `Location`
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Upload Banner:
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
        />
      </label>
      <button type="submit">Upload</button>
      {uploadSuccess && <div>Uploaded! File URL: {uploadSuccess}</div>}
    </form>
  );
};

export default BannerUploadForm;
