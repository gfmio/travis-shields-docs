import vinyl from "vinyl";

/** Generates a function that checks if file ends in the extension provided */
const fileEndsIn = (ext: string) => {
  return (file: vinyl) => file.extname === ext;
};

export default fileEndsIn;
