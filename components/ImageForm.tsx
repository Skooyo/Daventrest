"use client";

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import Link from "next/link";

import FileUploader from "@/components/FileUploader";
import { uploadFile } from "@/utils/ipfs";

const ImageForm = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [formData, setFormData] = useState({
    title: "",
    files: [] as File[],
    imageUrl: "",
    description: "",
  })

  const formSchema = z.object({
    imageTitle: z.string().optional(),
    description: z.string().optional(),
    imageUrl: z.string().optional()
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      imageTitle: "",
      description: "",
      imageUrl: ""
    },
  });

  const uploadToIpfs = async (file: any) => {
    console.log("Uploading file to ipfs");
    console.log(file);
    setIsUploading(true);
    const resData = await uploadFile(file);
    const imageLink = `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/${resData.IpfsHash}`
    console.log("IPFS Hash is:", imageLink);
    setIsUploading(false);
  }

  return (
    <div className="w-full h-fit p-5 pb-20">
      <Form {...form}>
            <form
              onSubmit={() => {}}
              className="bg-[#ffffff] h-full flex flex-col gap-y-8"
            >
              <div className="flex flex-col gap-3">

                {/* Image Title */}
                <FormField
                    control={form.control}
                    name="imageTitle"
                    render={({ field }) => (
                      <FormItem>
                        {/* <FormLabel>Image Title:</FormLabel> */}
                        <FormControl>
                          <Input
                            {...field}
                            className="rounded-2xl border-0 bg-gray-50 w-full py-2 "
                            placeholder="Image Title"
                            onChange={(e) => {
                              field.onChange((e.target.value)); // Parse the input value as an integer
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                <FormField
                  control={form.control}
                  name="imageUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                      <FileUploader
                        imageUrl = {formData.imageUrl}
                        setFiles={setFiles}
                        uploadToIpfs = {uploadToIpfs}
                        onFieldChange={(url: string) => setFormData(prevState =>({ ...prevState, imageUrl: url}))}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem> 
                  )} 
                />

                {/* Image Description */}
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      {/* <FormLabel>Image Title:</FormLabel> */}
                      <FormControl>
                        <Textarea
                          {...field}
                          className="resize-none rounded-2xl bg-gray-50"
                          placeholder="Image Description"
                          onChange={(e) => {
                            field.onChange(e);
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

              </div>
            </form>
          </Form>
          <div className="items-center justify-center w-full flex my-12">
          <Link
            className="font-semibold p-2 rounded-2xl flex items-center justify-center w-1/4 text-lg text-white bg-primary drop-shadow-xl hover:bg-opacity-100"
            href = "/"
          >
            Upload Image
          </Link>
        </div>
    </div>
  );
}
export default ImageForm;