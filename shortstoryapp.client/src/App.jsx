import { useState, useRef } from 'react';
import './App.css';

function App() {
    const [sentences, setSentences] = useState([]);
    const [sortedSentences, setSortedSentences] = useState([]);
    const [fileName, setFileName] = useState('');
    const [isSortDisabled, setIsSortDisabled] = useState(false);
    const fileInputRef = useRef(null);

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;
        setFileName(file.name);

        const text = await file.text();
        const rawSentences = text
            .split(/(?<=[.?!])\s+/)
            .map(s => s.trim())
            .filter(s => s.length > 0);
        setSentences(rawSentences);
        setSortedSentences([]);
        setIsSortDisabled(false);
    };

    const handleSort = () => {
        const sorted = [...sentences].sort((a, b) => a.localeCompare(b));
        setSortedSentences(sorted);
        setIsSortDisabled(true);
    };

    const handleClear = () => {
        setSentences([]);
        setSortedSentences([]);
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
                <label htmlFor="fileInput" className="file-label">Import a file</label>
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
                    disabled={sentences.length === 0 || isSortDisabled}
                    style={{ marginLeft: '20px' }}
                >
                    Sort
                </button>
                <button
                    className="button-red"
                    onClick={handleClear}
                    disabled={sentences.length === 0 && !fileName}
                    style={{ marginLeft: '10px' }}
                >
                    Clear
                </button>
            </div>
            <div className="sorted-text-area">
                {(sortedSentences.length > 0 ? sortedSentences : sentences).map((s, i) => (
                    <div key={i}>{s}</div>
                ))}
            </div>
        </div>
    );
}

export default App;