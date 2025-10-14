import React, { useState } from "react";

export function Upload() {
    const [file, setFile] = useState<File | undefined>();

    async function handleOnSubmit(e: React.SyntheticEvent) {
        e.preventDefault();

        if (typeof file === 'undefined'){return}
        
        const formData = new FormData();
        
        formData.append('file', file);

        const results = await fetch('http://127.0.0.1:8000/api/upload/', {
            method: 'POST',
            body: formData,
        }).then(response => response.json())

        console.log(results);
        // setState('sent');
    }

     function handleOnChange(e: React.FormEvent<HTMLInputElement>) {
        const target = e.target as HTMLInputElement & {
            files: FileList;
        }

        setFile(target.files[0]);
        console.log('file', file)
    }   

    return (
    <div>
        <h1 className="text-xl font-semibold mb-4 self-center">Upload de Usuários CSV</h1>
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="p-6 rounded-2xl shadow-md w-96 text-center">
                <input
                type="file"
                name="csv"
                accept=".csv"
                onChange={handleOnChange}
                />

                <button onClick={handleOnSubmit}>Enviar</button>
            </div>
        </div>
    </div>
  );
}
