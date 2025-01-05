import React, { useState } from 'react';

const WordCloud = () => {
    const [words, setWords] = useState([
        { text: 'Digital Marketing', size: 'text-3xl' },
        { text: 'Web Development', size: 'text-2xl' },
        { text: 'Social Media', size: 'text-xl' },
        { text: 'Content Creation', size: 'text-2xl' },
        { text: 'SEO', size: 'text-lg' },
        { text: 'Analytics', size: 'text-xl' },
        { text: 'Strategy', size: 'text-2xl' },
        { text: 'Innovation', size: 'text-xl' }
    ]);

    const [newWord, setNewWord] = useState('');

    const getRandomSize = () => {
    const sizes = ['text-lg', 'text-xl', 'text-2xl', 'text-3xl'];
    return sizes[Math.floor(Math.random() * sizes.length)];
    };

    const getRandomPosition = () => {
        return {
      transform: `translate(${Math.random() * 50}px, ${Math.random() * 30}px)`
        };
    };

    const addWord = (e) => {
    e.preventDefault();
    if (newWord.trim()) {
        setWords([...words, { 
        text: newWord.trim(), 
        size: getRandomSize()
        }]);
        setNewWord('');
    }
    };

    return (
    <div className="max-w-4xl mx-auto p-4">
        <div className="mb-8">
        <h2 className="text-2xl text-pink-500 mb-4">Community Word Cloud</h2>
        <p className="text-white mb-4">Add your words to describe what digital marketing means to you:</p>
        
        <form onSubmit={addWord} className="flex gap-4 mb-6">
            <input
                type="text"
                value={newWord}
                onChange={(e) => setNewWord(e.target.value)}
                className="flex-1 bg-gray-800 text-white px-4 py-2 rounded-lg border border-pink-500 focus:outline-none focus:border-pink-400"
                placeholder="Enter a word or phrase"
                maxLength={30}
            />
            <button 
                type="submit"
                className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition-colors"
            >
            Add
                </button>
        </form>
        </div>

    <div className="bg-gray-900 rounded-lg p-8 min-h-[400px]">
        <div className="flex flex-wrap gap-4 justify-center items-center">
        {words.map((word, index) => (
            <span
                key={`${word.text}-${index}`}
                className={`${word.size} text-pink-500 hover:text-pink-400 transition-all duration-300 cursor-default px-2`}
                style={getRandomPosition()}
            >
                {word.text}
            </span>
            ))}
        </div>
        </div>
    </div>
    );
};

export default WordCloud;