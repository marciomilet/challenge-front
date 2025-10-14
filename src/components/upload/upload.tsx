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
    <div>
        <h1 className="text-xl font-semibold mb-4 self-center">Upload de Usuários CSV</h1>
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="p-6 rounded-2xl shadow-md w-96 text-center">
                <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    {
                    isDragActive ?
                    <p>Drop the files here ...</p> :
                    <p>Drag 'n' drop some files here, or click to select files</p>
                    }
                </div>
                <button onClick={handleOnSubmit}>Enviar</button>
            </div>
        </div>
    </div>
  );
}
