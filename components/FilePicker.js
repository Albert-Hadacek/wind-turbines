//code found on https://www.npmjs.com/package/use-file-picker

import { useFilePicker } from "use-file-picker";
import {Button} from 'semantic-ui-react'

export default function FilePicker() {
  const [
    openFileSelector,
    { filesContent, loading, errors, plainFiles, clear }
  ] = useFilePicker({
    multiple: true,
    
    readAs: "DataURL", // available formats: "Text" | "BinaryString" | "ArrayBuffer" | "DataURL"
   
    accept: [".json", ".pdf", ".csv"],  // accept: '.ics,.pdf', '.csv'
    
    limitFilesConfig: { min: 1, max: 3 }
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


  return (
    <>
    <div className="upload-wrapper">
      <Button color='teal' onClick={() => openFileSelector()} loading={loading}>Select file</Button>
      <Button color='red' onClick={() => clear()} loading={loading}>Clear</Button>
    </div>
      {plainFiles.map((file) => (
        <div className="upload-item" key={file.name}>{file.name}</div>
      ))}
    </>
  );
}