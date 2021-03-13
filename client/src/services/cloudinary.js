import { useEffect, useState } from "react";
import { loadScript } from "./utils";

export const CLOUD_NAME = "djyerevgr";

export const Cloudinary = {
  widget_script: "https://widget.cloudinary.com/v2.0/global/all.js",
  options: {
    cloudName: CLOUD_NAME,
    uploadPreset: "jfopnpe8",
    cropping: true,
    multiple: false,
    resourceType: "image",
  },
};

export const useCloudinaryWidget = (callback) => {
  const [widget, setWidget] = useState();

  const initUploaderWidget = async () => {
    await loadScript(Cloudinary.widget_script);

    setWidget(
      window.cloudinary.createUploadWidget(Cloudinary.options, callback)
    );
  };

  useEffect(() => {
    initUploaderWidget();
  }, []);

  return { widget };
};
