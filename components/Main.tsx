"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { useState } from "react"
import { useDropzone } from "react-dropzone"
import { toast } from "react-toastify"
import FilePreview from "./FilePreview"

export default function Main() {
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
        toast.error("Only Image compression is supported in picwise.", {
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
  

  
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14 mt-32 sm:mt-12 p-6 bg-blue-50">

        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <div className="grid flex-1 items-start gap-4 md:grid-cols-[1fr_300px]">
            <div className="flex flex-col items-center justify-center bg-muted/40 rounded-lg p-2 sm:p-8">
            <div
                className="my-6 h-full w-full flex-col items-center justify-center rounded-lg border-2 border-dashed border-blue-500 bg-blue-50 text-blue-500 transition-colors hover:border-blue-600  dark:border-blue-700 dark:bg-blue-900 dark:text-blue-400 dark:hover:border-blue-600 dark:hover:bg-blue-800 hidden sm:flex"
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
              {file && (
          <FilePreview file={file} removeFile={removeFile} prev={prev} />
        )}

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
            <div className="grid gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Resize</CardTitle>
                  <CardDescription>Adjust the size of your image.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    <div className="flex items-center gap-2">
                      <Label htmlFor="width">Width</Label>
                      <Slider id="width" min={100} max={1000} step={10} defaultValue={[600]} className="flex-1" />
                      <div className="text-sm text-muted-foreground">600px</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Label htmlFor="height">Height</Label>
                      <Slider id="height" min={100} max={1000} step={10} defaultValue={[400]} className="flex-1" />
                      <div className="text-sm text-muted-foreground">400px</div>
                    </div>
                    <Button size="sm" className="bg-blue-500 hover:bg-blue-600 mt-2">Apply</Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Format Conversion</CardTitle>
                  <CardDescription>Convert your image format.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    <div className="flex items-center gap-2">
                      <Label htmlFor="format">Format</Label>
                      <Select defaultValue="png">
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select format" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="png">PNG</SelectItem>
                          <SelectItem value="jpg">JPEG</SelectItem>
                          <SelectItem value="gif">GIF</SelectItem>
                          <SelectItem value="svg">SVG</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button size="sm" className="bg-blue-500 hover:bg-blue-600 mt-2">Convert</Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Background Removal</CardTitle>
                  <CardDescription>Remove your image background.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    <Button size="sm" className="bg-blue-500 hover:bg-blue-600">Remove Background</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
  )
}
