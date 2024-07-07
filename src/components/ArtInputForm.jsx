import { useState } from 'react';

const ArtInputForm = () => {
    const [fileUploaded, setFileUploaded] = useState(false);
    const [formData, setFormData] = useState({
        judul: '',
        file: null,
    });

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFormData({ ...formData, file });
            setFileUploaded(true);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
    };

    return (
        <div>
            <form className="mx-44" onSubmit={handleSubmit}>
                <div className="grid grid-cols-6 my-8">
                    <div className="flex col-span-2 justify-center items-center">
                        <label className="font-bold">Judul</label>
                    </div>
                    <div className="col-span-3">
                        <input
                            type="text"
                            className="block w-full px-2 py-1 border bg-gray-50 border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-black focus:border-black"
                            name="judul"
                            placeholder="Masukan Judul Karya Anda"
                            value={formData.judul}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                {fileUploaded ? (
                    <div className="flex flex-col items-center justify-center">
                        <p className="items-center justify-center my-4 text-green-600 font-bold ">File telah diunggah!</p>
                        <button
                            type="submit"
                            className="py-1 ml-4 px-12 bg-blue-500 text-white rounded-full shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            Kirim
                        </button>
                    </div>
                ) : (
                    <div className="flex mx-24 items-center justify-center">
                        <label
                            htmlFor="dropzone-file"
                            className="flex flex-col items-center justify-center w-full h-56 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                        >
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg
                                    className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 16"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                    />
                                </svg>
                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                    <span className="font-semibold">klik untuk upload</span> atau drag and drop
                                </p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                    JPG, PNG
                                </p>
                            </div>
                            <input
                                id="dropzone-file"
                                type="file"
                                className="hidden"
                                onChange={handleFileChange}
                            />
                        </label>
                    </div>
                )}
            </form>
        </div>
    );
}

export default ArtInputForm;
