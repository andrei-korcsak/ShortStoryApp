import { useState, useRef } from 'react';
import './App.css';

function App() {
    const [sentences, setSentences] = useState([]);
    const [sortedSentences, setSortedSentences] = useState([]);
    const [fileName, setFileName] = useState('');
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
    };

    const handleSort = () => {
        const sorted = [...sentences].sort((a, b) => a.localeCompare(b));
        setSortedSentences(sorted);
    };

    const handleClear = () => {
        setSentences([]);
        setSortedSentences([]);
        setFileName('');
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    return (
        <div className="app-container">
            <h1>Short Story Application</h1>
            <div className="top-controls">
                <label htmlFor="fileInput">Import a file: </label>
                <input
                    id="fileInput"
                    type="file"
                    accept=".txt"
                    onChange={handleFileChange}
                    ref={fileInputRef}
                />
                {fileName && <span style={{ marginLeft: '10px' }}>{fileName}</span>}
                <button onClick={handleSort} disabled={sentences.length === 0} style={{ marginLeft: '20px' }}>
                    Sort
                </button>
                <button onClick={handleClear} disabled={sentences.length === 0 && !fileName} style={{ marginLeft: '10px' }}>
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