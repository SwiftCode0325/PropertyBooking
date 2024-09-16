const uploadImageToImgBB = async (imageFile) => {
  const apiKey = "9c65d3231291ff8c24142f61ec7b4c83";
  const formData = new FormData();
  formData.append("image", imageFile);

  try {
    const response = await fetch(
      `https://api.imgbb.com/1/upload?key=${apiKey}`,
      {
        method: "POST",
        body: formData,
      }
    );

    const result = await response.json();

    if (result.success) {
      return result.data.url; // Return the direct image URL
    } else {
      throw new Error(result.data.error.message);
    }
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
};

export default uploadImageToImgBB;
