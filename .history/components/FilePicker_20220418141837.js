import { useFilePicker } from "use-file-picker";
import React from "react";

export default function App() {
  const [
    openFileSelector,
    { filesContent, loading, errors, plainFiles, clear }
  ] = useFilePicker({
    multiple: true,
    readAs: "DataURL", // available formats: "Text" | "BinaryString" | "ArrayBuffer" | "DataURL"
    // accept: '.ics,.pdf', '.csv'
    accept: [".json", ".pdf", ".csv"],
    limitFilesConfig: { min: 2, max: 3 }
    // minFileSize: 1, // in megabytes
    // maxFileSize: 1,
    // readFilesContent: false, // ignores file content
  });

  if (errors.length) {
    return (
      <div>
        <button onClick={() => openFileSelector()}>
          Something went wrong, retry!{" "}
        </button>
        {errors[0].fileSizeTooSmall && "File size is too small!"}
        {errors[0].fileSizeToolarge && "File size is too large!"}
        {errors[0].readerError && "Problem occured while reading file!"}
        {errors[0].maxLimitExceeded && "Too many files"}
        {errors[0].minLimitNotReached && "Not enought files"}
      </div>
    );
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <button onClick={() => openFileSelector()}>Select file </button>
      <button onClick={() => clear()}>Clear</button>
      <br />
      Number of selected files:
      {plainFiles.length}
      <br />
      {/* If readAs is set to DataURL, You can display an image */}
      {!!filesContent.length && <img src={filesContent[0].content} />}
      <br />
      {plainFiles.map((file) => (
        <div key={file.name}>{file.name}</div>
      ))}
    </div>
  );
}