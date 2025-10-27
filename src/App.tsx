import React, { useState } from 'react';
import './App.css';
import TrainingScreen from './TrainingScreen';

type Screen = 'scenario' | 'level' | 'training';
type Scenario = 'presentation' | 'doctor' | 'support';
type Level = 'beginner' | 'intermediate' | 'advanced';

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('scenario');
  const [selectedScenario, setSelectedScenario] = useState<Scenario | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<Level | null>(null);

  return (
    <div className="App">
      <header className="App-header">
        <h1>ビジネス英語トレーニング</h1>
        <p>医療機器業界特化型</p>
      </header>

      <main className="App-main">
        {currentScreen === 'scenario' && (
          <div className="screen">
            <h2>シチュエーションを選択してください</h2>
            <div className="button-group">
              <button 
                className="scenario-button"
                onClick={() => {
                  setSelectedScenario('presentation');
                  setCurrentScreen('level');
                }}
              >
                プレゼンテーション<br/>（新製品紹介）
                <span className="role">営業担当者</span>
              </button>
              
              <button 
                className="scenario-button"
                onClick={() => {
                  setSelectedScenario('doctor');
                  setCurrentScreen('level');
                }}
              >
                医師への製品説明
                <span className="role">営業担当者</span>
              </button>
              
              <button 
                className="scenario-button"
                onClick={() => {
                  setSelectedScenario('support');
                  setCurrentScreen('level');
                }}
              >
                技術サポート
                <span className="role">技術者</span>
              </button>
            </div>
          </div>
        )}

        {currentScreen === 'level' && (
          <div className="screen">
            <h2>難易度を選択してください</h2>
            <div className="button-group">
              <button 
                className="level-button"
                onClick={() => {
                  setSelectedLevel('beginner');
                  setCurrentScreen('training');
                }}
              >
                初級
                <span className="description">短い文・ゆっくりスピード</span>
              </button>
              
              <button 
                className="level-button"
                onClick={() => {
                  setSelectedLevel('intermediate');
                  setCurrentScreen('training');
                }}
              >
                中級
                <span className="description">標準的な文・通常スピード</span>
              </button>
              
              <button 
                className="level-button"
                onClick={() => {
                  setSelectedLevel('advanced');
                  setCurrentScreen('training');
                }}
              >
                上級
                <span className="description">複雑な文・ネイティブスピード</span>
              </button>
            </div>
          </div>
        )}

        {currentScreen === 'training' && selectedScenario && selectedLevel && (
          <TrainingScreen 
            scenario={selectedScenario}
            level={selectedLevel}
            onBack={() => {
              setCurrentScreen('scenario');
              setSelectedScenario(null);
              setSelectedLevel(null);
            }}
          />
        )}
      </main>
    </div>
  );
}

export default App;