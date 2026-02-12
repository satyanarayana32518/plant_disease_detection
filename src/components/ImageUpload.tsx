import { useState, DragEvent, ChangeEvent } from 'react';
import { Upload, X, Camera } from 'lucide-react';

interface ImageUploadProps {
  uploadedImage: string | null;
  onImageSelect: (file: File) => void;
  onReset: () => void;
  fileInputRef: React.RefObject<HTMLInputElement>;
}

function ImageUpload({ uploadedImage, onImageSelect, onReset, fileInputRef }: ImageUploadProps) {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files.length > 0 && files[0].type.startsWith('image/')) {
      onImageSelect(files[0]);
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      onImageSelect(files[0]);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-green-100 hover:shadow-3xl transition-all duration-300 animate-fade-in-up">
      <div className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 p-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -mr-16 -mt-16 animate-pulse"></div>
        </div>
        <div className="relative z-10 flex items-center gap-3 text-white">
          <Camera className="w-6 h-6 animate-bounce" />
          <h2 className="text-2xl font-bold">Upload Plant Image</h2>
        </div>
      </div>

      <div className="p-8">
        {!uploadedImage ? (
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={handleClick}
            className={`border-3 border-dashed rounded-2xl p-12 text-center cursor-pointer transition-all duration-300 ${
              isDragging
                ? 'border-green-500 bg-gradient-to-br from-green-50 to-emerald-50 scale-105 shadow-lg'
                : 'border-gray-300 hover:border-green-400 hover:bg-gradient-to-br hover:from-green-50 hover:to-emerald-50 hover:shadow-lg'
            }`}
          >
            <div className="flex flex-col items-center gap-4">
              <div className={`p-6 rounded-full transition-all duration-300 ${
                isDragging ? 'bg-green-200 scale-110' : 'bg-green-100 group-hover:scale-110'
              }`}>
                <Upload className="w-14 h-14 text-green-600 animate-float" />
              </div>
              <div>
                <p className="text-xl font-bold text-gray-800 mb-2">
                  Drop your plant image here
                </p>
                <p className="text-gray-600 mb-3">
                  or click to browse your device
                </p>
                <p className="text-xs text-gray-500 font-medium">
                  JPG, PNG, WebP formats • Up to 10MB
                </p>
              </div>
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
          </div>
        ) : (
          <div className="relative group animate-fade-in-up">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-50 to-white p-2">
              <img
                src={uploadedImage}
                alt="Uploaded plant"
                className="w-full h-auto max-h-[500px] object-contain rounded-xl"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 rounded-xl"></div>
            </div>
            <button
              onClick={onReset}
              className="absolute top-6 right-6 bg-gradient-to-br from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 active:scale-95 hover:shadow-2xl"
              title="Remove image"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="mt-6 flex items-center justify-center gap-2 text-green-600">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50"></div>
              <span className="text-sm font-bold">Image ready for AI analysis</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ImageUpload;
