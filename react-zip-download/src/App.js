import Download from './components/Download';
import { Folder } from 'react-feather';
import './index.css';

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
