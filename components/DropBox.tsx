"use client";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import compressAndDownloadFile from "../utils/compressionAlgo";
import FilePreview from "./FilePreview";

const DropBox = () => {
  const [file, setFile] = useState(null);
  const [fileType, setFileType] = useState("");
  const [loading, setloading] = useState(false);
  const [prev, setPrev] = useState("");

  const removeFile = () => {
    setFile(null);
    setFileType("");
  };

  type MyDropzoneProps = {
    onDrop: (files: File[]) => void;
  };

  // for desktop
  const onDrop = (files: any) => {
    if (files.length > 1) {
      toast.error("Please upload one image at a time.", {
        position: "top-right",
      });
      return;
    }
    if (!files[0].type.startsWith("image/")) {
      toast.error("Only Image compression is supported in PicWise.", {
        position: "top-right",
      });
      return;
    }
    setloading(true);
    setFile(files[0]);
    setFileType(files[0].type);
    setPrev(URL.createObjectURL(files[0]));
    setloading(false);
  };

  // for mobile
  const onFileSelect = (file: any) => {
    setloading(true);
    setFile(file);
    setFileType(file.type);
    setloading(false);
  };

  const compress = () => {
    setloading(true);
    if (file && fileType.startsWith("image/")) {
      compressAndDownloadFile(file);
      toast.success("Image compressed and downloaded successfully!", {
        position: "top-right",
      });
    } else {
      toast.error("Only Image compression is supported in PicWise.", {
        position: "top-right",
      });
    }
    setloading(false);
    setFile(null);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <>
      <ToastContainer />

      <main className="flex-1 bg-blue-50 dark:bg-blue-950 mt-12">
        <div className="container mx-auto py-8 px-6">
          <div className="flex flex-col items-center justify-center gap-8">
            <div className="flex w-full max-w-4xl flex-col items-center justify-center rounded-lg border border-blue-200 bg-white p-8 shadow-lg dark:border-blue-800 dark:bg-blue-900 ">
              <h1 className="text-3xl font-bold text-blue-950 dark:text-white">
                Compress Your Images
              </h1>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Drag and drop your images here to compress them with our pixel
                perfect compression.
              </p>

              <div
                className="mt-6 h-64 w-full flex-col items-center justify-center rounded-lg border-2 border-dashed border-blue-500 bg-blue-50 p-4 text-blue-500 transition-colors hover:border-blue-600  dark:border-blue-700 dark:bg-blue-900 dark:text-blue-400 dark:hover:border-blue-600 dark:hover:bg-blue-800 hidden sm:flex"
                {...getRootProps()}
              >
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-64 rounded-lg cursor-pointer bg-blue-50"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      className="w-8 h-8 mb-4 text-blue-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    {isDragActive ? (
                      <p className="mb-2 p-4 sm:p-0 font-bold text-xl text-gray-500">
                        <span>Drop the files here</span>
                      </p>
                    ) : (
                      <>
                        <p className="mb-2 p-4 sm:p-0 font-bold text-xl text-gray-500">
                          <span>Click to upload</span> or{" "}
                          <span className="text-blue-500">Drag</span> and
                          <span className="text-blue-500"> Drop</span>
                        </p>
                        <p className="text-xs text-gray-500">
                          SVG, PNG, JPG or GIF
                        </p>
                      </>
                    )}
                  </div>
                  <input
                    id="dropzone-file"
                    className="hidden"
                    {...getInputProps()}
                  />
                </label>
              </div>

              <div className="flex sm:hidden mt-6 h-64 w-full flex-col items-center justify-center rounded-lg border-2 border-dashed border-blue-500 bg-blue-50 p-4 text-blue-500 transition-colors hover:border-blue-600  dark:border-blue-700 dark:bg-blue-900 dark:text-blue-400 dark:hover:border-blue-600 dark:hover:bg-blue-800">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-64 rounded-lg cursor-pointer bg-blue-50"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      className="w-8 h-8 mb-4 text-blue-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="mb-2 p-4 sm:p-0 font-bold text-xl text-gray-500">
                      <span>Click to upload</span> or{" "}
                      <span className="text-blue-500">Drag</span> and
                      <span className="text-blue-500"> Drop</span>
                    </p>
                    <p className="text-xs text-gray-500">
                      SVG, PNG, JPG or GIF
                    </p>
                  </div>
                  <input
                    id="dropzone-file"
                    type="file"
                    className="hidden"
                    onChange={(e: React.ChangeEvent<any>) =>
                      onFileSelect(e.target.files[0])
                    }
                  />
                </label>
              </div>
            </div>
          </div>
        </div>

        {file && (
          <FilePreview file={file} removeFile={removeFile} prev={prev} />
        )}
        <div className="btn flex justify-center mt-2">
          <button
            disabled={!file}
            type="button"
            className="text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-12 py-2.5 text-center me-2 mb-2 disabled:bg-gray-400"
            onClick={compress}
          >
            {loading ? (
              <svg
                aria-hidden="true"
                className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            ) : (
              <span>Compress and Download</span>
            )}
          </button>
        </div>
      </main>
    </>
  );
};

export default DropBox;
