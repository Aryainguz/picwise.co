"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FilePreview from "./FilePreview";

export default function Main() {
  const [file, setFile] = useState<File | null>(null);
  const [fileType, setFileType] = useState<string>("");
  const [prev, setPrev] = useState<any>(null);
  const [width, setWidth] = useState<number>(600);
  const [height, setHeight] = useState<number>(400);
  const [format, setFormat] = useState<string>("png");
  const [loading, setloading] = useState<boolean>(false);

  const removeFile = () => {
    setFile(null);
    setPrev(null);
  };


    // for mobile
    const onFileSelect = (file: any) => {
      setloading(true);
      setFile(file);
      setFileType(file.type);
      setloading(false);
    };

  const handleImageProcessing = async () => {
    if (file) {
      const reader = new FileReader();

      reader.onloadend = async () => {
        try {
          // Ensure reader.result is not null
          if (reader.result) {
            // Convert result to base64 string, removing the data URL part if necessary
            const base64String = (reader.result as string).split(",")[1];

            const response = await fetch("/api/process", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                buffer: base64String,
                width,
                height,
                format,
              }),
            });

            const data = await response.json();
            if (response.ok) {
              // Create a new file object for the preview
              const imageBlob = new Blob(
                [Uint8Array.from(atob(data.image), (c) => c.charCodeAt(0))],
                { type: `image/${format}` }
              );
              const imageUrl = URL.createObjectURL(imageBlob);
              setPrev(imageUrl);
              setFile(
                new File(
                  [imageBlob],
                  `${file.name.split(".")[0]}.${format}`,
                  { type: `image/${format}` }
                )
              );

              // Trigger download
              const a = document.createElement("a");
              a.href = imageUrl;
              a.download = `${file.name.split(".")[0]}.${format}`;
              document.body.appendChild(a);
              a.click();
              document.body.removeChild(a);
              URL.revokeObjectURL(imageUrl); 
              setPrev(null);
              setFile(null);
              toast.success("Converted Image Downloaded successfully!");
            } else {
              toast.error(data.error || "Failed to process image.");
            }
          } else {
            toast.error("Failed to read file.");
          }
        } catch (error) {
          toast.error("Failed to process image.");
        }
      };

      reader.readAsDataURL(file); // Read file as Data URL (base64)
    }
  };

  const onDrop = (files: File[]) => {
    if (files.length > 1) {
      toast.error("Please upload one image at a time.", {
        position: "top-right",
      });
      return;
    }
    if (!files[0].type.startsWith("image/")) {
      toast.error("Only image processing is supported.", {
        position: "top-right",
      });
      return;
    }
    const uploadedFile = files[0];
    const objectUrl = URL.createObjectURL(uploadedFile);
    const img = new Image();
  
    img.onload = () => {
      setWidth(img.width);  // Set width from the image
      setHeight(img.height); // Set height from the image
    };
    
    img.src = objectUrl; // Trigger image loading
  
    setFile(files[0]);
    setFileType(files[0].type);
    setPrev(URL.createObjectURL(files[0]));
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="flex flex-col gap-4 mt-12 sm:mt-12 p-4 bg-blue-50 md:p-6">
    <ToastContainer />
    <main className="flex flex-col gap-4 sm:px-6 sm:py-0 md:gap-8">
      <div className="flex flex-col gap-4 md:grid md:grid-cols-1 lg:grid-cols-[1fr_300px]">
        {/* Dropbox Section */}
        <div className="flex flex-col items-center justify-center gap-8">
            <div className="flex w-full max-w-4xl flex-col items-center justify-center rounded-lg border border-blue-200 bg-white p-8 shadow-lg dark:border-blue-800 dark:bg-blue-900 ">
              <h1 className="text-3xl font-bold text-blue-950 dark:text-white">
              Drag and Drop Images
              </h1>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Upload your image to get started.
              </p>

              <div
                className="mt-6 h-64 w-full flex-col items-center justify-center rounded-lg border-2 border-dashed border-blue-500 bg-blue-50 p-4 text-blue-500 transition-colors hover:border-blue-600  dark:border-blue-700 dark:bg-blue-900 dark:text-blue-400 dark:hover:border-blue-600 dark:hover:bg-blue-800 hidden xl:flex"
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

              <div className="flex xl:hidden mt-6 h-64 w-full flex-col items-center justify-center rounded-lg border-2 border-dashed border-blue-500 bg-blue-50 p-4 text-blue-500 transition-colors hover:border-blue-600  dark:border-blue-700 dark:bg-blue-900 dark:text-blue-400 dark:hover:border-blue-600 dark:hover:bg-blue-800">
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

          {file && (
            <FilePreview file={file} removeFile={removeFile} prev={prev} />
          )}
        </div>
  
        {/* Cards Section */}
        <div className="flex flex-col gap-4 w-full mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Resize Image</CardTitle>
              <CardDescription>
                Choose width and height to resize your image.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <Label htmlFor="width">Width - {width}</Label>
              <Slider
                min={100}
                max={1920}
                value={[width]}
                onValueChange={(value: any) => setWidth(value[0])}
              />
              <Label htmlFor="height">Height - {height}</Label>
              <Slider
                min={100}
                max={1080}
                value={[height]}
                onValueChange={(value: any) => setHeight(value[0])}
              />
              <Button onClick={handleImageProcessing}
              className="bg-blue-500 hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800"
              >Apply Changes</Button>
            </CardContent>
          </Card>
  
          <Card>
            <CardHeader>
              <CardTitle>Convert Format</CardTitle>
              <CardDescription>
                Choose a format to convert your image.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <Select onValueChange={(value) => setFormat(value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select format" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="png">PNG</SelectItem>
                  <SelectItem value="jpg">JPG</SelectItem>
                  <SelectItem value="webp">WEBP</SelectItem>
                  <SelectItem value="gif">GIF</SelectItem>
                </SelectContent>
              </Select>
              <Button 
              className="bg-blue-500 hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800"
              onClick={handleImageProcessing}>Convert</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  </div>
  
  );
}
