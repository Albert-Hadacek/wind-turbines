//code found on https://www.npmjs.com/package/use-file-picker

import { useFilePicker } from "use-file-picker";

export default function FilePicker(props) {

  const [
    openFileSelector,
    { filesContent, loading, errors, plainFiles, clear }
  ] = useFilePicker({
    multiple: true,
    
    readAs: "DataURL", // available formats: "Text" | "BinaryString" | "ArrayBuffer" | "DataURL"
   
    accept: [".json", ".pdf", ".csv"],  // accept: '.ics,.pdf', '.csv'

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

  let files = {plainFiles.map((file) => (
    <div key={file.name}>{file.name}</div>
  ))}

  return (
    <div>
      <button onClick={() => openFileSelector()} props={files}>Select file </button>
      <button onClick={() => clear()}>Clear</button>
      <br />
      Number of selected files:
      {plainFiles.length}
      <br />
      {/* If readAs is set to DataURL, You can display an image */}
      {!!filesContent.length && <img src={filesContent[0].content} />}
      <br />
      {files}
    </div>
  );
}