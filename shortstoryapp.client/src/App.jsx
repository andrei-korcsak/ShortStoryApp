import { useState, useRef } from 'react';
import './App.css';

function App() {
    const [fileContent, setFileContent] = useState('');
    const [fileName, setFileName] = useState('');
    const [isSortDisabled, setIsSortDisabled] = useState(false);
    const fileInputRef = useRef(null);

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;
        setFileName(file.name);

        const text = await file.text();
        setFileContent(text);
        setIsSortDisabled(false);
    };

    const handleSort = () => {
        const lines = fileContent.split('\n');
        const sorted = lines.sort((a, b) => a.localeCompare(b)).join('\n');
        setFileContent(sorted);
        setIsSortDisabled(true);
    };

    const handleClear = () => {
        setFileContent('');
        setFileName('');
        setIsSortDisabled(false);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    return (
        <div className="app-container">
            <h1>Short Story Application</h1>
            <div className="top-controls">
                <label htmlFor="fileInput" className="file-label">Import File</label>
                <input
                    id="fileInput"
                    className="file-input"
                    type="file"
                    accept=".txt"
                    onChange={handleFileChange}
                    ref={fileInputRef}
                />
                <input
                    type="text"
                    disabled
                    value={fileName || "File Name"}
                    className="file-name-box"
                />
                <button
                    className="button-blue"
                    onClick={handleSort}
                    disabled={!fileContent || isSortDisabled}
                    style={{ marginLeft: '20px' }}
                >
                    Sort
                </button>
                <button
                    className="button-red"
                    onClick={handleClear}
                    disabled={!fileContent && !fileName}
                    style={{ marginLeft: '10px' }}
                >
                    Clear
                </button>
            </div>
            <div className="sorted-text-area" style={{padding: 0}}>
                <pre className="pre-content">
                    {fileContent}
                </pre>
            </div>
        </div>
    );
}

export default App;