// import Download from './components/Download';
import { Folder } from 'react-feather';
import JSZipUtils from 'jszip-utils';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import './index.css';

const Download = () => {
  var zip = new JSZip();
  var count = 0;
  var zipFilename = 'zipFilename.zip';

  // add the links to your media/text/csv/other files

  var urls = [
    'https://s3.us-west-2.amazonaws.com/content-creation-platform/d6a5f93d6037160875fbfb1cf016a877.mp4',
    'https://s3.us-west-2.amazonaws.com/content-creation-platform/6595c4326427a336bb99f7952c99120e.mp4',
    'data:image/jpeg;base64,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'
  ];

  var donwloadAll = () =>
    urls.forEach(function (url, index) {
      var filename = 'file-' + index;
      // loading a file and add it in a zip file
      JSZipUtils.getBinaryContent(url, async function (err, data) {
        if (err) {
          throw err; // or handle the error
        }
        zip.file(filename, data, { binary: true });
        count++;
        if (count == urls.length) {
          var zipFile = await zip.generateAsync({ type: 'blob' });
          saveAs(zipFile, zipFilename);
        }
      });
    });
  return (
    <button onClick={donwloadAll} className='downloadButton'>
      Download the folder
    </button>
  );
};

export default function App() {
  return (
    <div className='mainDivContainer'>
      <div className='mainDiv'>
        <Folder color='#f5b507' size={50} />
        <h5 style={{ margin: '20px' }}>
          Download the zip folder containing your files
        </h5>
      </div>
      <div className='App'>
        <Download />
      </div>
    </div>
  );
}
