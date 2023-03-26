export const convertBase64 = (file: File | null): Promise<string> => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    if (!file) return reject("File doesn't exist");
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      resolve(fileReader.result as string);
    };

    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};

