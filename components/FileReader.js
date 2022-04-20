//form https://react-papaparse.js.org/demo

import Papa, { useCSVReader } from 'react-papaparse'

export default function CSVReader() {

  const { CSVReader } = useCSVReader();

  const parseFile = file => {
    Papa.parse(file);
  }

  return (
    <CSVReader
      onUploadAccepted={(results) => {
        console.log('---------------------------');
        console.log(results);
        console.log('---------------------------');
      }}
    >
      {({
        getRootProps,
        acceptedFile,
        ProgressBar,
        getRemoveFileProps,
      }) => (
        <>
          <div >
            <button type='button' {...getRootProps()} >
              Browse file
            </button>
            <div >
              {acceptedFile && acceptedFile.name}
            </div>
            <button {...getRemoveFileProps()} >
              Remove
            </button>
          </div>
          <ProgressBar />
        </>
      )}
    </CSVReader>
  );
}