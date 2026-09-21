import { Lesson } from "@/types/learning";

export const lessons: Lesson[] = [
  // ---------------------------------------------------------------------
  // Spanish — spanish-basics-1
  // ---------------------------------------------------------------------
  {
    id: "spanish-greetings",
    unitId: "spanish-basics-1",
    languageId: "spanish",
    order: 1,
    title: "Greetings",
    description: "Learn how to say hello and goodbye in Spanish.",
    type: "audio",
    xpReward: 10,
    goal: "Greet someone and say goodbye confidently.",
    vocabulary: [
      { id: "es-v1", term: "Hola", translation: "Hello" },
      { id: "es-v2", term: "Buenos días", translation: "Good morning" },
      { id: "es-v3", term: "Adiós", translation: "Goodbye" },
      { id: "es-v4", term: "Por favor", translation: "Please" },
      { id: "es-v5", term: "Gracias", translation: "Thank you" },
    ],
    phrases: [
      { id: "es-p1", text: "¿Cómo estás?", translation: "How are you?" },
      { id: "es-p2", text: "Mucho gusto", translation: "Nice to meet you" },
    ],
    activities: [
      {
        id: "es-a1",
        type: "multiple-choice",
        prompt: "How do you say 'Hello' in Spanish?",
        options: ["Hola", "Adiós", "Gracias", "Por favor"],
        correctAnswer: "Hola",
      },
      {
        id: "es-a2",
        type: "listen",
        prompt: "Listen to the audio and type what you hear.",
        correctAnswer: "Buenos días",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are a friendly, encouraging Spanish teacher speaking with a beginner student. Speak slowly, use simple sentences, gently correct mistakes, and praise effort. Keep the conversation focused on greetings.",
      greeting: "¡Hola! Soy tu profesor de español. ¿Listo para aprender?",
      focusAreas: ["pronunciation", "greetings vocabulary", "confidence building"],
    },
  },
  {
    id: "spanish-introductions",
    unitId: "spanish-basics-1",
    languageId: "spanish",
    order: 2,
    title: "Introductions",
    description: "Introduce yourself and ask where someone is from.",
    type: "chat",
    xpReward: 15,
    goal: "Introduce yourself and ask someone's name and origin.",
    vocabulary: [
      { id: "es-v6", term: "Me llamo", translation: "My name is" },
      { id: "es-v7", term: "¿Cómo te llamas?", translation: "What is your name?" },
      { id: "es-v8", term: "Soy de", translation: "I am from" },
      { id: "es-v9", term: "Encantado/a", translation: "Delighted (to meet you)" },
    ],
    phrases: [
      { id: "es-p3", text: "Me llamo Ana", translation: "My name is Ana" },
      { id: "es-p4", text: "¿De dónde eres?", translation: "Where are you from?" },
    ],
    activities: [
      {
        id: "es-a3",
        type: "translate",
        prompt: "Translate: 'My name is Carlos'",
        correctAnswer: "Me llamo Carlos",
      },
      {
        id: "es-a4",
        type: "multiple-choice",
        prompt: "What does '¿Cómo te llamas?' mean?",
        options: ["How are you?", "What is your name?", "Where are you from?", "Goodbye"],
        correctAnswer: "What is your name?",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are a friendly Spanish conversation partner helping a beginner practice introductions. Ask the student's name and where they are from, respond warmly, and gently correct grammar mistakes.",
      greeting: "¡Hola de nuevo! Practiquemos cómo presentarnos. ¿Cómo te llamas?",
      focusAreas: ["self-introduction", "question formation", "listening comprehension"],
    },
  },
  {
    id: "spanish-everyday-words",
    unitId: "spanish-basics-1",
    languageId: "spanish",
    order: 3,
    title: "Everyday Words",
    description: "Common words you'll use every day.",
    type: "vocabulary",
    xpReward: 15,
    goal: "Recognize and use five common everyday nouns.",
    vocabulary: [
      { id: "es-v10", term: "Agua", translation: "Water" },
      { id: "es-v11", term: "Casa", translation: "House" },
      { id: "es-v12", term: "Comida", translation: "Food" },
      { id: "es-v13", term: "Amigo", translation: "Friend" },
      { id: "es-v14", term: "Tiempo", translation: "Time / Weather" },
    ],
    phrases: [
      { id: "es-p5", text: "Necesito agua", translation: "I need water" },
      { id: "es-p6", text: "Mi casa es grande", translation: "My house is big" },
    ],
    activities: [
      {
        id: "es-a5",
        type: "match",
        prompt: "Match each Spanish word to its English translation.",
        options: ["Agua", "Casa", "Comida", "Amigo"],
        correctAnswer: "Agua - Water",
      },
      {
        id: "es-a6",
        type: "translate",
        prompt: "Translate: 'Friend'",
        correctAnswer: "Amigo",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are a patient Spanish vocabulary coach. Quiz the student on everyday words using short example sentences and provide the English translation if they struggle.",
      greeting: "Vamos a practicar palabras del día a día. ¿Preparado?",
      focusAreas: ["everyday vocabulary", "sentence usage", "recall speed"],
    },
  },
  {
    id: "spanish-culture-corner",
    unitId: "spanish-basics-1",
    languageId: "spanish",
    order: 4,
    title: "Culture Corner",
    description: "A short video lesson on everyday life in Spain.",
    type: "video",
    xpReward: 10,
    goal: "Recognize common cultural greetings and customs.",
    vocabulary: [
      { id: "es-v15", term: "Siesta", translation: "Afternoon rest" },
      { id: "es-v16", term: "Tapas", translation: "Small shared dishes" },
    ],
    phrases: [{ id: "es-p7", text: "¡Buen provecho!", translation: "Enjoy your meal!" }],
    activities: [
      {
        id: "es-a7",
        type: "multiple-choice",
        prompt: "What are 'tapas'?",
        options: ["A dance", "Small shared dishes", "A greeting", "A type of music"],
        correctAnswer: "Small shared dishes",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are a Spanish culture guide narrating a short video lesson. Keep explanations brief, friendly, and beginner-appropriate.",
      greeting: "¡Bienvenido! Hoy exploramos la cultura española.",
      focusAreas: ["cultural context", "listening comprehension"],
    },
  },

  // ---------------------------------------------------------------------
  // French — french-basics-1
  // ---------------------------------------------------------------------
  {
    id: "french-greetings",
    unitId: "french-basics-1",
    languageId: "french",
    order: 1,
    title: "Greetings",
    description: "Learn how to say hello and goodbye in French.",
    type: "audio",
    xpReward: 10,
    goal: "Greet someone and say goodbye confidently.",
    vocabulary: [
      { id: "fr-v1", term: "Bonjour", translation: "Hello" },
      { id: "fr-v2", term: "Bonsoir", translation: "Good evening" },
      { id: "fr-v3", term: "Au revoir", translation: "Goodbye" },
      { id: "fr-v4", term: "S'il vous plaît", translation: "Please" },
      { id: "fr-v5", term: "Merci", translation: "Thank you" },
    ],
    phrases: [
      { id: "fr-p1", text: "Comment ça va?", translation: "How are you?" },
      { id: "fr-p2", text: "Enchanté(e)", translation: "Nice to meet you" },
    ],
    activities: [
      {
        id: "fr-a1",
        type: "multiple-choice",
        prompt: "How do you say 'Hello' in French?",
        options: ["Bonjour", "Au revoir", "Merci", "S'il vous plaît"],
        correctAnswer: "Bonjour",
      },
      {
        id: "fr-a2",
        type: "listen",
        prompt: "Listen to the audio and type what you hear.",
        correctAnswer: "Bonsoir",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are a friendly, encouraging French teacher speaking with a beginner student. Speak slowly, use simple sentences, gently correct mistakes, and praise effort. Keep the conversation focused on greetings.",
      greeting: "Bonjour ! Je suis ton professeur de français. Prêt à apprendre ?",
      focusAreas: ["pronunciation", "greetings vocabulary", "confidence building"],
    },
  },
  {
    id: "french-introductions",
    unitId: "french-basics-1",
    languageId: "french",
    order: 2,
    title: "Introductions",
    description: "Introduce yourself and ask where someone is from.",
    type: "chat",
    xpReward: 15,
    goal: "Introduce yourself and ask someone's name and origin.",
    vocabulary: [
      { id: "fr-v6", term: "Je m'appelle", translation: "My name is" },
      { id: "fr-v7", term: "Comment tu t'appelles?", translation: "What is your name?" },
      { id: "fr-v8", term: "Je viens de", translation: "I come from" },
      { id: "fr-v9", term: "Et toi?", translation: "And you?" },
    ],
    phrases: [
      { id: "fr-p3", text: "Je m'appelle Marie", translation: "My name is Marie" },
      { id: "fr-p4", text: "D'où viens-tu?", translation: "Where are you from?" },
    ],
    activities: [
      {
        id: "fr-a3",
        type: "translate",
        prompt: "Translate: 'My name is Luc'",
        correctAnswer: "Je m'appelle Luc",
      },
      {
        id: "fr-a4",
        type: "multiple-choice",
        prompt: "What does 'Comment tu t'appelles?' mean?",
        options: ["How are you?", "What is your name?", "Where are you from?", "Goodbye"],
        correctAnswer: "What is your name?",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are a friendly French conversation partner helping a beginner practice introductions. Ask the student's name and where they are from, respond warmly, and gently correct grammar mistakes.",
      greeting: "Re-bonjour ! Pratiquons les présentations. Comment tu t'appelles ?",
      focusAreas: ["self-introduction", "question formation", "listening comprehension"],
    },
  },
  {
    id: "french-everyday-words",
    unitId: "french-basics-1",
    languageId: "french",
    order: 3,
    title: "Everyday Words",
    description: "Common words you'll use every day.",
    type: "vocabulary",
    xpReward: 15,
    goal: "Recognize and use five common everyday nouns.",
    vocabulary: [
      { id: "fr-v10", term: "Eau", translation: "Water" },
      { id: "fr-v11", term: "Maison", translation: "House" },
      { id: "fr-v12", term: "Nourriture", translation: "Food" },
      { id: "fr-v13", term: "Ami", translation: "Friend" },
      { id: "fr-v14", term: "Temps", translation: "Time / Weather" },
    ],
    phrases: [
      { id: "fr-p5", text: "J'ai besoin d'eau", translation: "I need water" },
      { id: "fr-p6", text: "Ma maison est grande", translation: "My house is big" },
    ],
    activities: [
      {
        id: "fr-a5",
        type: "match",
        prompt: "Match each French word to its English translation.",
        options: ["Eau", "Maison", "Nourriture", "Ami"],
        correctAnswer: "Eau - Water",
      },
      {
        id: "fr-a6",
        type: "translate",
        prompt: "Translate: 'Friend'",
        correctAnswer: "Ami",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are a patient French vocabulary coach. Quiz the student on everyday words using short example sentences and provide the English translation if they struggle.",
      greeting: "Pratiquons des mots du quotidien. Prêt(e) ?",
      focusAreas: ["everyday vocabulary", "sentence usage", "recall speed"],
    },
  },

  // ---------------------------------------------------------------------
  // Japanese — japanese-basics-1
  // ---------------------------------------------------------------------
  {
    id: "japanese-greetings",
    unitId: "japanese-basics-1",
    languageId: "japanese",
    order: 1,
    title: "Greetings",
    description: "Learn how to say hello and goodbye in Japanese.",
    type: "audio",
    xpReward: 10,
    goal: "Greet someone and say goodbye confidently.",
    vocabulary: [
      { id: "ja-v1", term: "こんにちは (Konnichiwa)", translation: "Hello" },
      { id: "ja-v2", term: "おはよう (Ohayou)", translation: "Good morning" },
      { id: "ja-v3", term: "さようなら (Sayounara)", translation: "Goodbye" },
      { id: "ja-v4", term: "お願いします (Onegaishimasu)", translation: "Please" },
      { id: "ja-v5", term: "ありがとう (Arigatou)", translation: "Thank you" },
    ],
    phrases: [
      { id: "ja-p1", text: "元気ですか？(Genki desu ka?)", translation: "How are you?" },
      { id: "ja-p2", text: "はじめまして (Hajimemashite)", translation: "Nice to meet you" },
    ],
    activities: [
      {
        id: "ja-a1",
        type: "multiple-choice",
        prompt: "How do you say 'Hello' in Japanese?",
        options: [
          "こんにちは (Konnichiwa)",
          "さようなら (Sayounara)",
          "ありがとう (Arigatou)",
          "お願いします (Onegaishimasu)",
        ],
        correctAnswer: "こんにちは (Konnichiwa)",
      },
      {
        id: "ja-a2",
        type: "listen",
        prompt: "Listen to the audio and type what you hear.",
        correctAnswer: "おはよう (Ohayou)",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are a friendly, encouraging Japanese teacher speaking with a beginner student. Speak slowly, use simple sentences, gently correct mistakes, and praise effort. Keep the conversation focused on greetings.",
      greeting: "こんにちは！私はあなたの日本語の先生です。準備はいいですか？",
      focusAreas: ["pronunciation", "greetings vocabulary", "confidence building"],
    },
  },
  {
    id: "japanese-introductions",
    unitId: "japanese-basics-1",
    languageId: "japanese",
    order: 2,
    title: "Introductions",
    description: "Introduce yourself and ask where someone is from.",
    type: "chat",
    xpReward: 15,
    goal: "Introduce yourself and ask someone's name and origin.",
    vocabulary: [
      { id: "ja-v6", term: "私は...です (Watashi wa ... desu)", translation: "I am ..." },
      { id: "ja-v7", term: "お名前は？(Onamae wa?)", translation: "What is your name?" },
      { id: "ja-v8", term: "...から来ました (...kara kimashita)", translation: "I come from ..." },
      { id: "ja-v9", term: "よろしく (Yoroshiku)", translation: "Nice to meet you" },
    ],
    phrases: [
      { id: "ja-p3", text: "私は田中です (Watashi wa Tanaka desu)", translation: "I am Tanaka" },
      {
        id: "ja-p4",
        text: "どこから来ましたか？(Doko kara kimashita ka?)",
        translation: "Where are you from?",
      },
    ],
    activities: [
      {
        id: "ja-a3",
        type: "translate",
        prompt: "Translate: 'I am Yuki'",
        correctAnswer: "私は雪です (Watashi wa Yuki desu)",
      },
      {
        id: "ja-a4",
        type: "multiple-choice",
        prompt: "What does 'お名前は？' mean?",
        options: ["How are you?", "What is your name?", "Where are you from?", "Goodbye"],
        correctAnswer: "What is your name?",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are a friendly Japanese conversation partner helping a beginner practice introductions. Ask the student's name and where they are from, respond warmly, and gently correct grammar mistakes.",
      greeting: "また会いましたね！自己紹介を練習しましょう。お名前は？",
      focusAreas: ["self-introduction", "question formation", "listening comprehension"],
    },
  },
  {
    id: "japanese-everyday-words",
    unitId: "japanese-basics-1",
    languageId: "japanese",
    order: 3,
    title: "Everyday Words",
    description: "Common words you'll use every day.",
    type: "vocabulary",
    xpReward: 15,
    goal: "Recognize and use five common everyday nouns.",
    vocabulary: [
      { id: "ja-v10", term: "水 (Mizu)", translation: "Water" },
      { id: "ja-v11", term: "家 (Ie)", translation: "House" },
      { id: "ja-v12", term: "食べ物 (Tabemono)", translation: "Food" },
      { id: "ja-v13", term: "友達 (Tomodachi)", translation: "Friend" },
      { id: "ja-v14", term: "時間 (Jikan)", translation: "Time" },
    ],
    phrases: [
      { id: "ja-p5", text: "水をください (Mizu wo kudasai)", translation: "Water, please" },
      { id: "ja-p6", text: "私の家は大きいです (Watashi no ie wa ookii desu)", translation: "My house is big" },
    ],
    activities: [
      {
        id: "ja-a5",
        type: "match",
        prompt: "Match each Japanese word to its English translation.",
        options: ["水 (Mizu)", "家 (Ie)", "食べ物 (Tabemono)", "友達 (Tomodachi)"],
        correctAnswer: "水 (Mizu) - Water",
      },
      {
        id: "ja-a6",
        type: "translate",
        prompt: "Translate: 'Friend'",
        correctAnswer: "友達 (Tomodachi)",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are a patient Japanese vocabulary coach. Quiz the student on everyday words using short example sentences and provide the English translation if they struggle.",
      greeting: "日常の単語を練習しましょう。準備はいいですか？",
      focusAreas: ["everyday vocabulary", "sentence usage", "recall speed"],
    },
  },

  // ---------------------------------------------------------------------
  // German — german-basics-1
  // ---------------------------------------------------------------------
  {
    id: "german-greetings",
    unitId: "german-basics-1",
    languageId: "german",
    order: 1,
    title: "Greetings",
    description: "Learn how to say hello and goodbye in German.",
    type: "audio",
    xpReward: 10,
    goal: "Greet someone and say goodbye confidently.",
    vocabulary: [
      { id: "de-v1", term: "Hallo", translation: "Hello" },
      { id: "de-v2", term: "Guten Morgen", translation: "Good morning" },
      { id: "de-v3", term: "Auf Wiedersehen", translation: "Goodbye" },
      { id: "de-v4", term: "Bitte", translation: "Please" },
      { id: "de-v5", term: "Danke", translation: "Thank you" },
    ],
    phrases: [
      { id: "de-p1", text: "Wie geht's?", translation: "How are you?" },
      { id: "de-p2", text: "Freut mich", translation: "Nice to meet you" },
    ],
    activities: [
      {
        id: "de-a1",
        type: "multiple-choice",
        prompt: "How do you say 'Hello' in German?",
        options: ["Hallo", "Auf Wiedersehen", "Danke", "Bitte"],
        correctAnswer: "Hallo",
      },
      {
        id: "de-a2",
        type: "listen",
        prompt: "Listen to the audio and type what you hear.",
        correctAnswer: "Guten Morgen",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are a friendly, encouraging German teacher speaking with a beginner student. Speak slowly, use simple sentences, gently correct mistakes, and praise effort. Keep the conversation focused on greetings.",
      greeting: "Hallo! Ich bin dein Deutschlehrer. Bist du bereit zu lernen?",
      focusAreas: ["pronunciation", "greetings vocabulary", "confidence building"],
    },
  },
  {
    id: "german-introductions",
    unitId: "german-basics-1",
    languageId: "german",
    order: 2,
    title: "Introductions",
    description: "Introduce yourself and ask where someone is from.",
    type: "chat",
    xpReward: 15,
    goal: "Introduce yourself and ask someone's name and origin.",
    vocabulary: [
      { id: "de-v6", term: "Ich heiße", translation: "My name is" },
      { id: "de-v7", term: "Wie heißt du?", translation: "What is your name?" },
      { id: "de-v8", term: "Ich komme aus", translation: "I come from" },
      { id: "de-v9", term: "Und du?", translation: "And you?" },
    ],
    phrases: [
      { id: "de-p3", text: "Ich heiße Anna", translation: "My name is Anna" },
      { id: "de-p4", text: "Woher kommst du?", translation: "Where are you from?" },
    ],
    activities: [
      {
        id: "de-a3",
        type: "translate",
        prompt: "Translate: 'My name is Max'",
        correctAnswer: "Ich heiße Max",
      },
      {
        id: "de-a4",
        type: "multiple-choice",
        prompt: "What does 'Wie heißt du?' mean?",
        options: ["How are you?", "What is your name?", "Where are you from?", "Goodbye"],
        correctAnswer: "What is your name?",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are a friendly German conversation partner helping a beginner practice introductions. Ask the student's name and where they are from, respond warmly, and gently correct grammar mistakes.",
      greeting: "Hallo nochmal! Lass uns Vorstellungen üben. Wie heißt du?",
      focusAreas: ["self-introduction", "question formation", "listening comprehension"],
    },
  },
  {
    id: "german-everyday-words",
    unitId: "german-basics-1",
    languageId: "german",
    order: 3,
    title: "Everyday Words",
    description: "Common words you'll use every day.",
    type: "vocabulary",
    xpReward: 15,
    goal: "Recognize and use five common everyday nouns.",
    vocabulary: [
      { id: "de-v10", term: "Wasser", translation: "Water" },
      { id: "de-v11", term: "Haus", translation: "House" },
      { id: "de-v12", term: "Essen", translation: "Food" },
      { id: "de-v13", term: "Freund", translation: "Friend" },
      { id: "de-v14", term: "Zeit", translation: "Time" },
    ],
    phrases: [
      { id: "de-p5", text: "Ich brauche Wasser", translation: "I need water" },
      { id: "de-p6", text: "Mein Haus ist groß", translation: "My house is big" },
    ],
    activities: [
      {
        id: "de-a5",
        type: "match",
        prompt: "Match each German word to its English translation.",
        options: ["Wasser", "Haus", "Essen", "Freund"],
        correctAnswer: "Wasser - Water",
      },
      {
        id: "de-a6",
        type: "translate",
        prompt: "Translate: 'Friend'",
        correctAnswer: "Freund",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are a patient German vocabulary coach. Quiz the student on everyday words using short example sentences and provide the English translation if they struggle.",
      greeting: "Lass uns Alltagswörter üben. Bereit?",
      focusAreas: ["everyday vocabulary", "sentence usage", "recall speed"],
    },
  },
  // ---------------------------------------------------------------------
  // Nepali — nepali-basics-1
  // ---------------------------------------------------------------------
  {
    id: "nepali-greetings",
    unitId: "nepali-basics-1",
    languageId: "nepali",
    order: 1,
    title: "Greetings",
    description: "Learn how to say hello and goodbye in Nepali.",
    type: "audio",
    xpReward: 10,
    goal: "Greet someone and say goodbye confidently.",
    vocabulary: [
      { id: "ne-v1", term: "नमस्ते (Namaste)", translation: "Hello" },
      { id: "ne-v2", term: "शुभ प्रभात (Shubha Prabhat)", translation: "Good morning" },
      { id: "ne-v3", term: "फेरि भेटौला (Feri Bhetaula)", translation: "Goodbye" },
      { id: "ne-v4", term: "कृपया (Kripaya)", translation: "Please" },
      { id: "ne-v5", term: "धन्यवाद (Dhanyabad)", translation: "Thank you" },
    ],
    phrases: [
      {
        id: "ne-p1",
        text: "तपाईंलाई कस्तो छ? (Tapailai kasto cha?)",
        translation: "How are you?",
      },
      {
        id: "ne-p2",
        text: "तपाईंलाई भेटेर खुशी लाग्यो (Tapailai bheter khushi lagyo)",
        translation: "Nice to meet you",
      },
    ],
    activities: [
      {
        id: "ne-a1",
        type: "multiple-choice",
        prompt: "How do you say 'Hello' in Nepali?",
        options: [
          "नमस्ते (Namaste)",
          "फेरि भेटौला (Feri Bhetaula)",
          "धन्यवाद (Dhanyabad)",
          "कृपया (Kripaya)",
        ],
        correctAnswer: "नमस्ते (Namaste)",
      },
      {
        id: "ne-a2",
        type: "listen",
        prompt: "Listen to the audio and type what you hear.",
        correctAnswer: "शुभ प्रभात (Shubha Prabhat)",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are a friendly, encouraging Nepali teacher speaking with a beginner student. Speak slowly, use simple sentences, gently correct mistakes, and praise effort. Keep the conversation focused on greetings.",
      greeting: "नमस्ते! म तपाईंको नेपाली शिक्षक हुँ। सिक्न तयार हुनुहुन्छ?",
      focusAreas: ["pronunciation", "greetings vocabulary", "confidence building"],
    },
  },
  {
    id: "nepali-introductions",
    unitId: "nepali-basics-1",
    languageId: "nepali",
    order: 2,
    title: "Introductions",
    description: "Introduce yourself and ask where someone is from.",
    type: "chat",
    xpReward: 15,
    goal: "Introduce yourself and ask someone's name and origin.",
    vocabulary: [
      { id: "ne-v6", term: "मेरो नाम ... हो (Mero naam ... ho)", translation: "My name is ..." },
      { id: "ne-v7", term: "तपाईंको नाम के हो? (Tapaiko naam ke ho?)", translation: "What is your name?" },
      { id: "ne-v8", term: "म ... बाट आएको हुँ (Ma ... bata aayeko hun)", translation: "I come from ..." },
      { id: "ne-v9", term: "खुशी लाग्यो (Khushi lagyo)", translation: "Nice to meet you" },
    ],
    phrases: [
      { id: "ne-p3", text: "मेरो नाम सीता हो (Mero naam Sita ho)", translation: "My name is Sita" },
      {
        id: "ne-p4",
        text: "तपाईं कहाँबाट आउनुभयो? (Tapai kahabata aaunubhayo?)",
        translation: "Where are you from?",
      },
    ],
    activities: [
      {
        id: "ne-a3",
        type: "translate",
        prompt: "Translate: 'My name is Ram'",
        correctAnswer: "मेरो नाम राम हो (Mero naam Ram ho)",
      },
      {
        id: "ne-a4",
        type: "multiple-choice",
        prompt: "What does 'तपाईंको नाम के हो?' mean?",
        options: ["How are you?", "What is your name?", "Where are you from?", "Goodbye"],
        correctAnswer: "What is your name?",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are a friendly Nepali conversation partner helping a beginner practice introductions. Ask the student's name and where they are from, respond warmly, and gently correct grammar mistakes.",
      greeting: "फेरि नमस्ते! आउनुहोस् परिचय गराउने अभ्यास गरौं। तपाईंको नाम के हो?",
      focusAreas: ["self-introduction", "question formation", "listening comprehension"],
    },
  },
  {
    id: "nepali-everyday-words",
    unitId: "nepali-basics-1",
    languageId: "nepali",
    order: 3,
    title: "Everyday Words",
    description: "Common words you'll use every day.",
    type: "vocabulary",
    xpReward: 15,
    goal: "Recognize and use five common everyday nouns.",
    vocabulary: [
      { id: "ne-v10", term: "पानी (Pani)", translation: "Water" },
      { id: "ne-v11", term: "घर (Ghar)", translation: "House" },
      { id: "ne-v12", term: "खाना (Khana)", translation: "Food" },
      { id: "ne-v13", term: "साथी (Sathi)", translation: "Friend" },
      { id: "ne-v14", term: "समय (Samaya)", translation: "Time" },
    ],
    phrases: [
      { id: "ne-p5", text: "मलाई पानी चाहियो (Malai pani chahiyo)", translation: "I need water" },
      { id: "ne-p6", text: "मेरो घर ठूलो छ (Mero ghar thulo cha)", translation: "My house is big" },
    ],
    activities: [
      {
        id: "ne-a5",
        type: "match",
        prompt: "Match each Nepali word to its English translation.",
        options: ["पानी (Pani)", "घर (Ghar)", "खाना (Khana)", "साथी (Sathi)"],
        correctAnswer: "पानी (Pani) - Water",
      },
      {
        id: "ne-a6",
        type: "translate",
        prompt: "Translate: 'Friend'",
        correctAnswer: "साथी (Sathi)",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are a patient Nepali vocabulary coach. Quiz the student on everyday words using short example sentences and provide the English translation if they struggle.",
      greeting: "दैनिक प्रयोग हुने शब्दहरू अभ्यास गरौं। तयार हुनुहुन्छ?",
      focusAreas: ["everyday vocabulary", "sentence usage", "recall speed"],
    },
  },
];

export const getLessonsByUnitId = (unitId: string): Lesson[] =>
  lessons
    .filter((lesson) => lesson.unitId === unitId)
    .sort((a, b) => a.order - b.order);

export const getLessonsByLanguageId = (languageId: string): Lesson[] =>
  lessons
    .filter((lesson) => lesson.languageId === languageId)
    .sort((a, b) => a.order - b.order);

export const getLessonById = (lessonId: string): Lesson | undefined =>
  lessons.find((lesson) => lesson.id === lessonId);
