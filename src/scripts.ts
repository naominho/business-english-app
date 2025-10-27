// スクリプトデータの型定義
export interface Script {
    id: string;
    scenario: 'presentation' | 'doctor' | 'support';
    level: 'beginner' | 'intermediate' | 'advanced';
    title: string;
    sentences: string[];
  }
  
  // 架空の医療機器会社情報
  export const companyInfo = {
    name: 'MedTech Solutions Inc.',
    product: 'SmartMonitor X200',
    description: 'バイタルサインモニタリングシステム'
  };
  
  // スクリプトデータ
  export const scripts: Script[] = [
    // プレゼンテーション - 初級
    {
      id: 'presentation-beginner',
      scenario: 'presentation',
      level: 'beginner',
      title: '新製品紹介プレゼンテーション（初級）',
      sentences: [
        'Good morning, everyone.',
        'My name is John Smith.',
        'I am from MedTech Solutions.',
        'Today, I will introduce our new product.',
        'It is called SmartMonitor X200.',
        'This is a patient monitoring system.',
        'It monitors vital signs in real-time.',
        'The system is very easy to use.',
        'It has a touch screen display.',
        'Thank you for your attention.'
      ]
    },
    
    // プレゼンテーション - 中級
    {
      id: 'presentation-intermediate',
      scenario: 'presentation',
      level: 'intermediate',
      title: '新製品紹介プレゼンテーション（中級）',
      sentences: [
        'Good morning, ladies and gentlemen.',
        'Thank you for taking the time to join us today.',
        'I am pleased to introduce our latest innovation, the SmartMonitor X200.',
        'This advanced monitoring system represents a significant breakthrough in patient care.',
        'It provides continuous real-time monitoring of vital signs including heart rate, blood pressure, and oxygen saturation.',
        'The device features an intuitive touchscreen interface that reduces training time.',
        'All data is automatically transmitted to our secure cloud platform.',
        'This enables healthcare professionals to monitor patients remotely.',
        'I would be happy to answer any questions you may have.',
        'Thank you very much for your attention.'
      ]
    },
    
    // プレゼンテーション - 上級
    {
      id: 'presentation-advanced',
      scenario: 'presentation',
      level: 'advanced',
      title: '新製品紹介プレゼンテーション（上級）',
      sentences: [
        'Good morning, distinguished guests and colleagues.',
        'I would like to express my sincere gratitude for your presence at today\'s product launch.',
        'It is with great pleasure that I introduce the SmartMonitor X200, which represents a paradigm shift in continuous patient monitoring technology.',
        'Our development team has integrated cutting-edge artificial intelligence algorithms that can predict potential complications up to 6 hours in advance.',
        'The system features multi-parameter monitoring capabilities with synchronized data acquisition at a sampling rate of 500 Hz, ensuring unprecedented accuracy.',
        'Furthermore, the device incorporates advanced cybersecurity protocols compliant with HIPAA and GDPR regulations, guaranteeing patient data privacy.',
        'Clinical trials conducted across 15 major medical institutions have demonstrated a 35% reduction in adverse events when compared to conventional monitoring systems.',
        'I am confident that this technology will significantly enhance patient outcomes while simultaneously reducing the workload of healthcare professionals.',
        'I welcome any questions or discussions regarding the technical specifications or implementation strategies.',
        'Thank you for your time and consideration.'
      ]
    },
    
    // 医師への製品説明 - 初級
    {
      id: 'doctor-beginner',
      scenario: 'doctor',
      level: 'beginner',
      title: '医師への製品説明（初級）',
      sentences: [
        'Hello, Doctor.',
        'Thank you for your time.',
        'This is the SmartMonitor X200.',
        'It monitors patient vital signs.',
        'The screen shows heart rate and blood pressure.',
        'You can see the data in real-time.',
        'The alarm sounds when there is a problem.',
        'It is very reliable.',
        'Many hospitals use this system.',
        'Do you have any questions?'
      ]
    },
    
    // 医師への製品説明 - 中級
    {
      id: 'doctor-intermediate',
      scenario: 'doctor',
      level: 'intermediate',
      title: '医師への製品説明（中級）',
      sentences: [
        'Good afternoon, Doctor.',
        'I appreciate you taking the time to learn about our monitoring system.',
        'The SmartMonitor X200 offers comprehensive vital signs monitoring for your patients.',
        'It continuously tracks heart rate, blood pressure, respiratory rate, and oxygen saturation.',
        'The high-resolution display provides clear, easy-to-read waveforms and numerical values.',
        'You can customize alarm thresholds based on individual patient needs.',
        'The system stores up to 72 hours of trend data for review.',
        'Integration with your existing EMR system is straightforward and secure.',
        'Would you like me to demonstrate any specific features?',
        'I am here to answer any questions you might have.'
      ]
    },
    
    // 医師への製品説明 - 上級
    {
      id: 'doctor-advanced',
      scenario: 'doctor',
      level: 'advanced',
      title: '医師への製品説明（上級）',
      sentences: [
        'Good afternoon, Doctor. I understand you are evaluating monitoring solutions for your intensive care unit.',
        'The SmartMonitor X200 has been specifically designed to meet the demanding requirements of critical care environments.',
        'It features 12-lead ECG monitoring with advanced arrhythmia detection algorithms that have been validated against the MIT-BIH database with 99.2% accuracy.',
        'The invasive blood pressure monitoring module supports simultaneous measurement from multiple arterial lines with a frequency response exceeding industry standards.',
        'Our proprietary AI-driven early warning system analyzes multi-parameter trends to identify patients at risk of deterioration, with a sensitivity of 87% and a specificity of 92% in detecting sepsis up to 6 hours before clinical manifestation.',
        'The device seamlessly integrates with HL7-compliant hospital information systems, ensuring bidirectional data flow without disrupting existing workflows.',
        'From a clinical evidence perspective, our post-market surveillance data from over 500 institutions demonstrates a significant reduction in code blue events and improved patient outcomes.',
        'I would be delighted to arrange a trial period in your unit so you can evaluate the system\'s performance with your patient population.',
        'What specific clinical scenarios or technical requirements would you like to discuss further?',
        'Thank you for considering our solution for your department.'
      ]
    },
    
    // 技術サポート - 初級
    {
      id: 'support-beginner',
      scenario: 'support',
      level: 'beginner',
      title: '技術サポート（初級）',
      sentences: [
        'Hello, this is technical support.',
        'How can I help you today?',
        'I understand the problem.',
        'Please check the power cable first.',
        'Is the device turned on?',
        'Try restarting the system.',
        'Press the power button for 5 seconds.',
        'Is it working now?',
        'I will send a technician if needed.',
        'Thank you for calling.'
      ]
    },
    
    // 技術サポート - 中級
    {
      id: 'support-intermediate',
      scenario: 'support',
      level: 'intermediate',
      title: '技術サポート（中級）',
      sentences: [
        'Good morning, this is technical support for MedTech Solutions.',
        'I will be assisting you with your SmartMonitor X200 today.',
        'Could you please describe the issue you are experiencing?',
        'I see. Let me check the system status remotely.',
        'According to the diagnostics, there appears to be a sensor connectivity issue.',
        'Please verify that all sensors are properly connected to the main unit.',
        'Could you also check if the sensor cables are damaged?',
        'I will walk you through the calibration procedure step by step.',
        'If the problem persists, I can schedule an on-site service visit.',
        'Is there anything else I can help you with today?'
      ]
    },
    
    // 技術サポート - 上級
    {
      id: 'support-advanced',
      scenario: 'support',
      level: 'advanced',
      title: '技術サポート（上級）',
      sentences: [
        'Good afternoon, this is senior technical support at MedTech Solutions. I understand you are experiencing intermittent signal artifacts on your SmartMonitor X200.',
        'I have accessed your device\'s diagnostic logs remotely and noticed several error codes related to the analog-to-digital converter.',
        'Based on the timestamp correlation, these errors coincide with the artifact occurrences you reported, suggesting a potential hardware issue rather than environmental interference.',
        'To isolate the problem, I recommend performing a comprehensive system diagnostic using the advanced troubleshooting menu accessible through the service mode.',
        'Please navigate to Settings, then press and hold the Menu button for 10 seconds to enter service mode, then select "Advanced Diagnostics" and run the "ADC Performance Test."',
        'If the test reveals any failure in the ADC channels, we will need to replace the signal processing board, which I can expedite for delivery within 24 hours.',
        'In the interim, you can continue monitoring using the unaffected parameters, though I would recommend increasing your manual verification frequency as a precautionary measure.',
        'I will also escalate this case to our engineering team for root cause analysis, as we have not seen this specific failure mode in our field population previously.',
        'Would you like me to schedule a remote training session for your biomedical engineering team on advanced troubleshooting procedures?',
        'I will follow up with you tomorrow to ensure the issue has been completely resolved. Please do not hesitate to contact me directly if you need any further assistance.'
      ]
    }
  ];
  
  // スクリプトを取得する関数
  export function getScript(scenario: string, level: string): Script | undefined {
    return scripts.find(s => s.scenario === scenario && s.level === level);
  }