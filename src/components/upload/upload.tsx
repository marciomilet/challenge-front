import React, { useCallback } from "react";
import {useDropzone} from "react-dropzone";

export function Upload() {

    const onDrop = useCallback((acceptedFiles: File[]) => {
        const file = new FileReader

        file.onload = function() {

        }
        file.readAsDataURL(acceptedFiles[0])
    }, [])
    const {acceptedFiles, getRootProps, getInputProps, isDragActive} = useDropzone({
        onDrop,
        accept: {
            'text/csv': ['.csv']
        },
        maxFiles: 1

    })


    async function handleOnSubmit(e: React.SyntheticEvent) {
        e.preventDefault();

        if (typeof acceptedFiles[0] === 'undefined'){return}
        
        const formData = new FormData();
        
        formData.append('file', acceptedFiles[0]);

        const results = await fetch('http://127.0.0.1:8000/api/upload/', {
            method: 'POST',
            body: formData,
        }).then(response => response.json())

        console.log(results);
    } 

    return (
    <div className="min-h-screen flex flex-col items-center justify-center text-gray-100 px-4">
        <h1 className="text-3xl font-bold mb-8 text-white tracking-wide">Users upload CSV</h1>
        <div className="flex flex-col items-center justify-center h-screen">
            
                <div {...getRootProps()} className={`w-full max-w-md border-2 border-dashed rounded-2xl p-10 text-center transition 
                    ${isDragActive ? 'border-blue-400 bg-blue-900/30' : 'border-gray-700 bg-gray-800/40'} 
                     hover:border-blue-500 hover:bg-gray-800/60 cursor-pointer`}>
                    <input {...getInputProps()} />
                    {
                    isDragActive ?
                    <p>Drop the files here ...</p> :
                    <p> Drag 'n' drop some files here, or click to select files</p>
                    }
            </div>
            <button
                onClick={handleOnSubmit}
                className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl 
                shadow-md transition-all duration-200 focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black">Send</button>
        </div>
    </div>
  );
}
