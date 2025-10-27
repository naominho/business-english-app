import React, { useState, useEffect } from 'react';
import { getScript, Script } from './scripts';

interface TrainingScreenProps {
  scenario: string;
  level: string;
  onBack: () => void;
}

type TrainingStep = 'input' | 'practice' | 'output' | 'feedback';

export default function TrainingScreen({ scenario, level, onBack }: TrainingScreenProps) {
  const [script, setScript] = useState<Script | null>(null);
  const [currentStep, setCurrentStep] = useState<TrainingStep>('input');
  const [isListening, setIsListening] = useState(false);
  const [recognizedText, setRecognizedText] = useState('');
  const [feedback, setFeedback] = useState<string>('');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [countdown, setCountdown] = useState<number>(0);

  useEffect(() => {
    const foundScript = getScript(scenario, level);
    if (foundScript) {
      setScript(foundScript);
    }
  }, [scenario, level]);

  const speakText = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = level === 'beginner' ? 0.8 : level === 'intermediate' ? 1.0 : 1.2;
    utterance.onend = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utterance);
  };

  const speakAllSentences = () => {
    if (script) {
      const allText = script.sentences.join(' ');
      speakText(allText);
      setIsSpeaking(true);
    }
  };

  const stopSpeaking = () => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  };

  const startListening = () => {
    setCountdown(3);
    
    const countdownInterval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(countdownInterval);
          
          // カウントダウン終了後に録音開始
          setTimeout(() => {
            console.log('録音開始');
            const recognition = new (window as any).webkitSpeechRecognition();
            recognition.lang = 'en-US';
            recognition.continuous = true;
            recognition.interimResults = true;
  
            recognition.onstart = () => {
              console.log('音声認識開始');
              setIsListening(true);
              setRecognizedText('');
            };
  
            recognition.onresult = (event: any) => {
              console.log('結果取得:', event.results);
              let transcript = '';
              for (let i = 0; i < event.results.length; i++) {
                transcript += event.results[i][0].transcript;
              }
              console.log('認識されたテキスト:', transcript);
              setRecognizedText(transcript);
            };
  
            recognition.onerror = (event: any) => {
              console.log('エラー発生:', event.error);
              if (event.error !== 'no-speech') {
                setIsListening(false);
              }
            };
  
            recognition.onend = () => {
              console.log('音声認識終了');
              setIsListening(false);
            };
  
            recognition.start();
          }, 100);
          
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const generateFeedback = () => {
    if (!script || !recognizedText) {
      setFeedback('音声が認識されませんでした。');
      return;
    }

    const originalText = script.sentences.join(' ').toLowerCase();
    const spokenText = recognizedText.toLowerCase();
    const words1 = originalText.split(/\s+/);
    const words2 = spokenText.split(/\s+/);
    const commonWords = words1.filter(word => words2.includes(word));
    const similarity = commonWords.length / Math.max(words1.length, words2.length);

    if (similarity > 0.8) {
      setFeedback('素晴らしい！スクリプト通りに正確に話せています。');
    } else if (similarity > 0.6) {
      setFeedback('良くできました！ほぼスクリプト通りに話せています。');
    } else if (similarity > 0.4) {
      setFeedback('まずまずです。もう少し練習しましょう。');
    } else {
      setFeedback('もう少し練習が必要です。');
    }

    setCurrentStep('feedback');
  };

  if (!script) {
    return <div>読み込み中...</div>;
  }

  return (
    <div className="training-screen">
      <div className="training-header">
        <button onClick={onBack} className="back-button">トップに戻る</button>
        <h2>{script.title}</h2>
      </div>
      
      <div className="step-indicator">
  <div 
    className={currentStep === 'input' ? 'step active' : 'step'} 
    onClick={() => setCurrentStep('input')}
    style={{cursor: 'pointer'}}
  >
    1. インプット
  </div>
  <div 
    className={currentStep === 'practice' ? 'step active' : 'step'} 
    onClick={() => setCurrentStep('practice')}
    style={{cursor: 'pointer'}}
  >
    2. 練習
  </div>
  <div 
    className={currentStep === 'output' ? 'step active' : 'step'} 
    onClick={() => setCurrentStep('output')}
    style={{cursor: 'pointer'}}
  >
    3. アウトプット
  </div>
  <div 
    className={currentStep === 'feedback' ? 'step active' : 'step'} 
    onClick={() => setCurrentStep('feedback')}
    style={{cursor: 'pointer'}}
  >
    4. フィードバック
  </div>
</div>
{currentStep === 'input' && (
  <div className="step-content">
    <h3>スクリプトを確認しましょう</h3>
    <p className="instruction">文章をクリックすると、その文だけ音声で聞けます</p>
    <div className="script-display">
      {script.sentences.map((sentence, index) => (
        <p 
          key={index}
          className="script-sentence clickable"
          onClick={() => speakText(sentence)}
        >
          {index + 1}. {sentence}
        </p>
      ))}
    </div>
    {!isSpeaking ? (
      <button onClick={speakAllSentences}>🔊 全文を聞く</button>
    ) : (
      <button onClick={stopSpeaking} className="stop-button">⏹ 停止</button>
    )}
    <button onClick={() => setCurrentStep('practice')}>次へ</button>
  </div>
)}

      {currentStep === 'practice' && (
        <div className="step-content">
          <h3>声に出して練習しましょう</h3>
          <div className="script-display">
            {script.sentences.map((sentence, index) => (
              <p key={index}>{index + 1}. {sentence}</p>
            ))}
          </div>
          <button onClick={() => setCurrentStep('output')}>次へ</button>
          <button onClick={() => setCurrentStep('input')}>戻る</button>
        </div>
      )}

{currentStep === 'output' && (
  <div className="step-content">
    <h3>話してみましょう</h3>
    
    {countdown > 0 && (
      <div>
        <p className="instruction">録音開始まで...</p>
        <div style={{fontSize: '4rem', fontWeight: 'bold', color: '#3b82f6', textAlign: 'center', margin: '2rem 0'}}>
          {countdown}
        </div>
      </div>
    )}
    
    {countdown === 0 && !isListening && !recognizedText && (
      <div>
        <p className="instruction">
          準備ができたら「録音開始」をクリックしてください。<br/>
          3秒のカウントダウン後、自動的に録音が始まります。
        </p>
        <button onClick={startListening}>🎤 録音開始</button>
      </div>
    )}
    
    {isListening && (
      <div>
        <div style={{fontSize: '1.5rem', color: '#ef4444', textAlign: 'center', margin: '1rem 0', fontWeight: 'bold'}}>
          🔴 録音中... 今すぐ話してください！
        </div>
        <button onClick={() => setIsListening(false)} className="stop-button">⏹ 録音停止</button>
      </div>
    )}
    
    {recognizedText && (
      <div className="recognized-text">
        <h4>認識されたテキスト:</h4>
        <p>{recognizedText}</p>
        <button onClick={generateFeedback}>評価を見る</button>
        <button onClick={() => {
          setRecognizedText('');
          setCountdown(0);
        }} className="secondary-button">もう一度録音</button>
      </div>
    )}
    <button onClick={() => setCurrentStep('practice')}>戻る</button>
  </div>
)}
      {currentStep === 'feedback' && (
        <div className="step-content">
          <h3>フィードバック</h3>
          <p>{feedback}</p>
          <div>
            <h4>元のスクリプト:</h4>
            <p>{script.sentences.join(' ')}</p>
          </div>
          <div>
            <h4>あなたが話した内容:</h4>
            <p>{recognizedText}</p>
          </div>
          <button onClick={() => {
            setCurrentStep('input');
            setRecognizedText('');
            setFeedback('');
          }}>もう一度</button>
          <button onClick={onBack}>戻る</button>
        </div>
      )}
    </div>
  );
}