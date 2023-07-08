import { ToastHandler } from "../components/Toast/Toast";

export const uploadImage = async (media, setpost, setUpload) => {
  setUpload(true);
  const data = new FormData();
  data.append("file", media);
  data.append("upload_preset", "ovaqn7lw");
  // data.append("cloud_name", "dgesxov4w");
  const requestOptions = {
    method: "POST",
    body: data,
  };
  await fetch(
    `https://api.cloudinary.com/v1_1/dgesxov4w/${
      media?.type === "image/jpeg" ? "image" : "video"
    }/upload`,
    requestOptions
  )
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      data.resource_type === "video"
        ? setpost((prev) => ({ ...prev, postVideo: data.url }))
        : setpost((prev) => ({ ...prev, postImage: data.url }));
      setUpload(false);
      ToastHandler("success", `${data.resource_type} ready to post !`);
    })
    .catch((error) => {
      console.error(error);
      ToastHandler("error", "video upload failed");
    });
};
