// Import the library
import Compressor from "compressorjs";

// Define a function to handle file compression
export default function compressAndDownloadFile(file: any){
  return new Promise<void>((resolve, reject) => {
    // Create a new instance of Compressor
    new Compressor(file, {
      quality: 0.2, // Adjust compression quality as needed
      success(compressedFile) {
        try {
          // Create a Blob object from the compressed file
          const blob = new Blob([compressedFile], {
            type: compressedFile.type,
          });

          // Create a temporary URL for the Blob
          const url = URL.createObjectURL(blob);

          // Create a temporary link element
          const link = document.createElement("a");
          link.href = url;
          link.download = file.name; // Set the download attribute to specify the file.name
          document.body.appendChild(link);

          // Trigger the click event to download the file
          link.click();

          // Clean up
          URL.revokeObjectURL(url);
          document.body.removeChild(link);

          resolve();
        } catch (error) {
          reject(error);
        }
      },
      error(error) {
        reject(error);
      },
    });
  });
};
