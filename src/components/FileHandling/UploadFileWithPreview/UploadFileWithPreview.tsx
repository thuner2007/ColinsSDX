import './UploadFileWithPreview.css';
import React, { useState } from 'react';

interface Props {
  showBorder?: boolean;
  reseizable?: boolean;
}

const UploadFileWithPreview: React.FC<Props> = ({ showBorder, reseizable }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileText, setFileText] = useState<string>('');

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    if (fileList && fileList.length > 0) {
      const file = fileList[0];
      setSelectedFile(file); // Update selected file state
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        setFileText(content); // Set text content of the file

        try {
          const jsonContent = JSON.parse(content);
          // If parsing is successful, the file is a valid JSON file
          // You can further validate the JSON content here if needed
          console.log('JSON file uploaded:', jsonContent);
        } catch (error) {
          // If parsing fails, the file is not a valid JSON file
          console.error('Error parsing JSON:', error);
          // You can handle this error in your UI, like showing a message to the user
        }
      };
      reader.readAsText(file);
    }
  };
  const randomBorderColor = getRandomColor();
  return (
    <div
      className="mainDivUploadFileWithPreview"
      style={{
        border: showBorder ? '2px solid ' + randomBorderColor : 'none',
      }}
    >
      <textarea
        style={{
          resize: reseizable ? 'both' : 'none',
        }}
        className="inputFieldFileUploadFileWithPreview"
        value={fileText || ''}
        readOnly
      ></textarea>
      <div className="verticalDivUploadFileWithPreview">
        <label
          className="uploadButtonUploadFileWithPreview"
          htmlFor="fileInput"
        >
          Choose file
        </label>
        <button className="uploadButtonUploadFileWithPreview">
          Upload file
        </button>
      </div>
      <input
        style={{ display: 'none' }}
        type="file"
        id="fileInput"
        name="fileInput"
        onChange={handleFileChange}
      ></input>
    </div>
  );
};

export default UploadFileWithPreview;
