import { placeholderImage } from "@/lib/images";
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
    image: placeholderImage("spanish-greetings"),
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
    image: placeholderImage("spanish-introductions"),
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
    image: placeholderImage("spanish-everyday-words"),
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
    image: placeholderImage("spanish-culture-corner"),
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
    image: placeholderImage("french-greetings"),
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
    image: placeholderImage("french-introductions"),
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
    image: placeholderImage("french-everyday-words"),
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
    image: placeholderImage("japanese-greetings"),
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
    image: placeholderImage("japanese-introductions"),
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
    image: placeholderImage("japanese-everyday-words"),
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
  // Korean — korean-basics-1
  // ---------------------------------------------------------------------
  {
    id: "korean-greetings",
    unitId: "korean-basics-1",
    languageId: "korean",
    order: 1,
    title: "Greetings",
    description: "Learn how to say hello and goodbye in Korean.",
    type: "audio",
    xpReward: 10,
    goal: "Greet someone and say goodbye confidently.",
    image: placeholderImage("korean-greetings"),
    vocabulary: [
      { id: "ko-v1", term: "안녕하세요 (Annyeonghaseyo)", translation: "Hello" },
      { id: "ko-v2", term: "안녕히 가세요 (Annyeonghi gaseyo)", translation: "Goodbye" },
      { id: "ko-v3", term: "감사합니다 (Gamsahamnida)", translation: "Thank you" },
      { id: "ko-v4", term: "죄송합니다 (Joesonghamnida)", translation: "Sorry" },
      { id: "ko-v5", term: "네 (Ne)", translation: "Yes" },
    ],
    phrases: [
      { id: "ko-p1", text: "만나서 반갑습니다 (Mannaseo bangapseumnida)", translation: "Nice to meet you" },
      { id: "ko-p2", text: "잘 지내요? (Jal jinaeyo?)", translation: "How are you?" },
    ],
    activities: [
      {
        id: "ko-a1",
        type: "multiple-choice",
        prompt: "How do you say 'Hello' in Korean?",
        options: [
          "안녕하세요 (Annyeonghaseyo)",
          "감사합니다 (Gamsahamnida)",
          "죄송합니다 (Joesonghamnida)",
          "네 (Ne)",
        ],
        correctAnswer: "안녕하세요 (Annyeonghaseyo)",
      },
      {
        id: "ko-a2",
        type: "listen",
        prompt: "Listen to the audio and type what you hear.",
        correctAnswer: "감사합니다 (Gamsahamnida)",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are a friendly, encouraging Korean teacher speaking with a beginner student. Speak slowly, use simple sentences, gently correct mistakes, and praise effort. Keep the conversation focused on greetings.",
      greeting: "안녕하세요! 저는 당신의 한국어 선생님이에요. 배울 준비 됐나요?",
      focusAreas: ["pronunciation", "greetings vocabulary", "confidence building"],
    },
  },
  {
    id: "korean-introductions",
    unitId: "korean-basics-1",
    languageId: "korean",
    order: 2,
    title: "Introductions",
    description: "Introduce yourself and ask someone's name.",
    type: "chat",
    xpReward: 15,
    goal: "Introduce yourself and ask someone's name and origin.",
    image: placeholderImage("korean-introductions"),
    vocabulary: [
      { id: "ko-v6", term: "제 이름은 ...입니다 (Je ireumeun ... imnida)", translation: "My name is ..." },
      { id: "ko-v7", term: "이름이 뭐예요? (Ireumi mwoyeyo?)", translation: "What is your name?" },
      { id: "ko-v8", term: "저는 ...에서 왔어요 (Jeoneun ... eseo wasseoyo)", translation: "I am from ..." },
    ],
    phrases: [
      { id: "ko-p3", text: "제 이름은 민수입니다 (Je ireumeun Minsu imnida)", translation: "My name is Minsu" },
      { id: "ko-p4", text: "어디에서 왔어요? (Eodieseo wasseoyo?)", translation: "Where are you from?" },
    ],
    activities: [
      {
        id: "ko-a3",
        type: "translate",
        prompt: "Translate: 'My name is Jiho'",
        correctAnswer: "제 이름은 지호입니다 (Je ireumeun Jiho imnida)",
      },
      {
        id: "ko-a4",
        type: "multiple-choice",
        prompt: "What does '이름이 뭐예요?' mean?",
        options: ["How are you?", "What is your name?", "Where are you from?", "Goodbye"],
        correctAnswer: "What is your name?",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are a friendly Korean conversation partner helping a beginner practice introductions. Ask the student's name and where they are from, respond warmly, and gently correct grammar mistakes.",
      greeting: "다시 안녕하세요! 자기소개를 연습해봐요. 이름이 뭐예요?",
      focusAreas: ["self-introduction", "question formation", "listening comprehension"],
    },
  },
  {
    id: "korean-numbers",
    unitId: "korean-basics-1",
    languageId: "korean",
    order: 3,
    title: "Numbers",
    description: "Count from one to five in Korean.",
    type: "vocabulary",
    xpReward: 10,
    goal: "Recognize and use the numbers 1 through 5.",
    image: placeholderImage("korean-numbers"),
    vocabulary: [
      { id: "ko-v9", term: "하나 (Hana)", translation: "One" },
      { id: "ko-v10", term: "둘 (Dul)", translation: "Two" },
      { id: "ko-v11", term: "셋 (Set)", translation: "Three" },
      { id: "ko-v12", term: "넷 (Net)", translation: "Four" },
      { id: "ko-v13", term: "다섯 (Daseot)", translation: "Five" },
    ],
    phrases: [{ id: "ko-p5", text: "하나, 둘, 셋! (Hana, dul, set!)", translation: "One, two, three!" }],
    activities: [
      {
        id: "ko-a5",
        type: "match",
        prompt: "Match each Korean number to its English meaning.",
        options: ["하나 (Hana)", "둘 (Dul)", "셋 (Set)", "넷 (Net)"],
        correctAnswer: "하나 (Hana) - One",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are a patient Korean vocabulary coach. Quiz the student on numbers one through five using short counting exercises.",
      greeting: "숫자를 연습해봐요. 준비 됐나요?",
      focusAreas: ["numbers", "recall speed"],
    },
  },
  {
    id: "korean-family",
    unitId: "korean-basics-1",
    languageId: "korean",
    order: 4,
    title: "Family & Friends",
    description: "Talk about your family members.",
    type: "vocabulary",
    xpReward: 15,
    goal: "Name close family members in Korean.",
    image: placeholderImage("korean-family"),
    vocabulary: [
      { id: "ko-v14", term: "가족 (Gajok)", translation: "Family" },
      { id: "ko-v15", term: "엄마 (Eomma)", translation: "Mom" },
      { id: "ko-v16", term: "아빠 (Appa)", translation: "Dad" },
      { id: "ko-v17", term: "친구 (Chingu)", translation: "Friend" },
    ],
    phrases: [{ id: "ko-p6", text: "이 분은 제 엄마예요 (I buneun je eommayeyo)", translation: "This is my mom" }],
    activities: [
      {
        id: "ko-a6",
        type: "translate",
        prompt: "Translate: 'Friend'",
        correctAnswer: "친구 (Chingu)",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are a friendly Korean vocabulary coach helping a beginner talk about family. Use simple sentences and encourage the student to describe their own family.",
      greeting: "가족에 대해 이야기해봐요!",
      focusAreas: ["family vocabulary", "sentence usage"],
    },
  },
  {
    id: "korean-food-drink",
    unitId: "korean-basics-1",
    languageId: "korean",
    order: 5,
    title: "Food & Drink",
    description: "Order food and talk about what you like to eat.",
    type: "chat",
    xpReward: 15,
    goal: "Ask for food and drink and say what tastes good.",
    image: placeholderImage("korean-food-drink"),
    vocabulary: [
      { id: "ko-v18", term: "물 (Mul)", translation: "Water" },
      { id: "ko-v19", term: "밥 (Bap)", translation: "Rice / Meal" },
      { id: "ko-v20", term: "커피 (Keopi)", translation: "Coffee" },
      { id: "ko-v21", term: "맛있어요 (Masisseoyo)", translation: "It's delicious" },
    ],
    phrases: [{ id: "ko-p7", text: "물 주세요 (Mul juseyo)", translation: "Water, please" }],
    activities: [
      {
        id: "ko-a7",
        type: "multiple-choice",
        prompt: "How do you say 'delicious' in Korean?",
        options: ["물 (Mul)", "맛있어요 (Masisseoyo)", "밥 (Bap)", "커피 (Keopi)"],
        correctAnswer: "맛있어요 (Masisseoyo)",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are a friendly Korean conversation partner practicing food and drink vocabulary with a beginner. Ask what they want to eat or drink and react warmly.",
      greeting: "무엇을 먹고 싶어요?",
      focusAreas: ["food vocabulary", "ordering phrases"],
    },
  },
  {
    id: "korean-time-days",
    unitId: "korean-basics-1",
    languageId: "korean",
    order: 6,
    title: "Time & Days",
    description: "Talk about today, tomorrow, and the days of the week.",
    type: "vocabulary",
    xpReward: 10,
    goal: "Use basic time words in a sentence.",
    image: placeholderImage("korean-time-days"),
    vocabulary: [
      { id: "ko-v22", term: "오늘 (Oneul)", translation: "Today" },
      { id: "ko-v23", term: "내일 (Naeil)", translation: "Tomorrow" },
      { id: "ko-v24", term: "어제 (Eoje)", translation: "Yesterday" },
      { id: "ko-v25", term: "월요일 (Woryoil)", translation: "Monday" },
    ],
    phrases: [{ id: "ko-p8", text: "오늘 뭐 해요? (Oneul mwo haeyo?)", translation: "What are you doing today?" }],
    activities: [
      {
        id: "ko-a8",
        type: "translate",
        prompt: "Translate: 'Tomorrow'",
        correctAnswer: "내일 (Naeil)",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are a patient Korean vocabulary coach practicing time words with a beginner student.",
      greeting: "시간 표현을 연습해봐요!",
      focusAreas: ["time vocabulary", "sentence usage"],
    },
  },
  {
    id: "korean-weather",
    unitId: "korean-basics-1",
    languageId: "korean",
    order: 7,
    title: "Weather",
    description: "Describe the weather in Korean.",
    type: "video",
    xpReward: 10,
    goal: "Describe hot, cold, and rainy weather.",
    image: placeholderImage("korean-weather"),
    vocabulary: [
      { id: "ko-v26", term: "날씨 (Nalssi)", translation: "Weather" },
      { id: "ko-v27", term: "더워요 (Deowoyo)", translation: "It's hot" },
      { id: "ko-v28", term: "추워요 (Chuwoyo)", translation: "It's cold" },
      { id: "ko-v29", term: "비가 와요 (Biga wayo)", translation: "It's raining" },
    ],
    phrases: [{ id: "ko-p9", text: "오늘 날씨 어때요? (Oneul nalssi eottaeyo?)", translation: "How's the weather today?" }],
    activities: [
      {
        id: "ko-a9",
        type: "multiple-choice",
        prompt: "How do you say 'It's raining' in Korean?",
        options: ["더워요 (Deowoyo)", "추워요 (Chuwoyo)", "비가 와요 (Biga wayo)", "날씨 (Nalssi)"],
        correctAnswer: "비가 와요 (Biga wayo)",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are a Korean culture and language guide narrating a short video lesson about the weather. Keep explanations brief and beginner-appropriate.",
      greeting: "오늘의 날씨에 대해 알아볼까요?",
      focusAreas: ["weather vocabulary", "listening comprehension"],
    },
  },
  {
    id: "korean-directions",
    unitId: "korean-basics-1",
    languageId: "korean",
    order: 8,
    title: "Directions",
    description: "Ask for and give simple directions.",
    type: "chat",
    xpReward: 15,
    goal: "Use left, right, here, and there in a sentence.",
    image: placeholderImage("korean-directions"),
    vocabulary: [
      { id: "ko-v30", term: "왼쪽 (Oenjjok)", translation: "Left" },
      { id: "ko-v31", term: "오른쪽 (Oreunjjok)", translation: "Right" },
      { id: "ko-v32", term: "여기 (Yeogi)", translation: "Here" },
      { id: "ko-v33", term: "저기 (Jeogi)", translation: "There" },
    ],
    phrases: [{ id: "ko-p10", text: "왼쪽으로 가세요 (Oenjjogeuro gaseyo)", translation: "Go to the left" }],
    activities: [
      {
        id: "ko-a10",
        type: "translate",
        prompt: "Translate: 'Right'",
        correctAnswer: "오른쪽 (Oreunjjok)",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are a friendly Korean conversation partner practicing directions with a beginner. Ask for and give simple directions.",
      greeting: "길을 물어보는 연습을 해봐요!",
      focusAreas: ["direction vocabulary", "question formation"],
    },
  },
  {
    id: "korean-shopping",
    unitId: "korean-basics-1",
    languageId: "korean",
    order: 9,
    title: "Shopping",
    description: "Ask about prices and buy something.",
    type: "chat",
    xpReward: 15,
    goal: "Ask how much something costs and buy an item.",
    image: placeholderImage("korean-shopping"),
    vocabulary: [
      { id: "ko-v34", term: "얼마예요? (Eolmayeyo?)", translation: "How much is it?" },
      { id: "ko-v35", term: "이거 주세요 (Igeo juseyo)", translation: "Give me this, please" },
      { id: "ko-v36", term: "싸요 (Ssayo)", translation: "It's cheap" },
      { id: "ko-v37", term: "비싸요 (Bissayo)", translation: "It's expensive" },
    ],
    phrases: [{ id: "ko-p11", text: "이거 얼마예요? (Igeo eolmayeyo?)", translation: "How much is this?" }],
    activities: [
      {
        id: "ko-a11",
        type: "multiple-choice",
        prompt: "How do you ask 'How much is it?' in Korean?",
        options: ["얼마예요? (Eolmayeyo?)", "싸요 (Ssayo)", "비싸요 (Bissayo)", "이거 주세요 (Igeo juseyo)"],
        correctAnswer: "얼마예요? (Eolmayeyo?)",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are a friendly Korean conversation partner practicing shopping phrases with a beginner. Role-play a simple shop interaction.",
      greeting: "쇼핑할 때 쓰는 표현을 연습해봐요!",
      focusAreas: ["shopping vocabulary", "numbers"],
    },
  },
  {
    id: "korean-hobbies",
    unitId: "korean-basics-1",
    languageId: "korean",
    order: 10,
    title: "Hobbies",
    description: "Talk about the things you enjoy doing.",
    type: "vocabulary",
    xpReward: 15,
    goal: "Name a few common hobbies in Korean.",
    image: placeholderImage("korean-hobbies"),
    vocabulary: [
      { id: "ko-v38", term: "취미 (Chwimi)", translation: "Hobby" },
      { id: "ko-v39", term: "영화 (Yeonghwa)", translation: "Movie" },
      { id: "ko-v40", term: "음악 (Eumak)", translation: "Music" },
      { id: "ko-v41", term: "운동 (Undong)", translation: "Exercise" },
    ],
    phrases: [{ id: "ko-p12", text: "제 취미는 음악 듣기예요 (Je chwimineun eumak deutgiyeyo)", translation: "My hobby is listening to music" }],
    activities: [
      {
        id: "ko-a12",
        type: "translate",
        prompt: "Translate: 'Movie'",
        correctAnswer: "영화 (Yeonghwa)",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are a patient Korean vocabulary coach helping a beginner talk about hobbies. Encourage the student to share their own hobbies.",
      greeting: "취미에 대해 이야기해볼까요?",
      focusAreas: ["hobby vocabulary", "sentence usage"],
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
    image: placeholderImage("german-greetings"),
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
    image: placeholderImage("german-introductions"),
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
    image: placeholderImage("german-everyday-words"),
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
  // Chinese — chinese-basics-1
  // ---------------------------------------------------------------------
  {
    id: "chinese-greetings",
    unitId: "chinese-basics-1",
    languageId: "chinese",
    order: 1,
    title: "Greetings",
    description: "Learn how to say hello and goodbye in Mandarin.",
    type: "audio",
    xpReward: 10,
    goal: "Greet someone and say goodbye confidently.",
    image: placeholderImage("chinese-greetings"),
    vocabulary: [
      { id: "zh-v1", term: "你好 (Nǐ hǎo)", translation: "Hello" },
      { id: "zh-v2", term: "再见 (Zàijiàn)", translation: "Goodbye" },
      { id: "zh-v3", term: "谢谢 (Xièxiè)", translation: "Thank you" },
      { id: "zh-v4", term: "对不起 (Duìbùqǐ)", translation: "Sorry" },
      { id: "zh-v5", term: "是 (Shì)", translation: "Yes" },
    ],
    phrases: [
      { id: "zh-p1", text: "很高兴认识你 (Hěn gāoxìng rènshi nǐ)", translation: "Nice to meet you" },
      { id: "zh-p2", text: "你好吗？(Nǐ hǎo ma?)", translation: "How are you?" },
    ],
    activities: [
      {
        id: "zh-a1",
        type: "multiple-choice",
        prompt: "How do you say 'Hello' in Mandarin?",
        options: ["你好 (Nǐ hǎo)", "再见 (Zàijiàn)", "谢谢 (Xièxiè)", "对不起 (Duìbùqǐ)"],
        correctAnswer: "你好 (Nǐ hǎo)",
      },
      {
        id: "zh-a2",
        type: "listen",
        prompt: "Listen to the audio and type what you hear.",
        correctAnswer: "谢谢 (Xièxiè)",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are a friendly, encouraging Mandarin Chinese teacher speaking with a beginner student. Speak slowly, use simple sentences, gently correct mistakes, and praise effort. Keep the conversation focused on greetings.",
      greeting: "你好！我是你的中文老师。准备好学习了吗？",
      focusAreas: ["pronunciation", "greetings vocabulary", "confidence building"],
    },
  },
  {
    id: "chinese-introductions",
    unitId: "chinese-basics-1",
    languageId: "chinese",
    order: 2,
    title: "Introductions",
    description: "Introduce yourself and ask someone's name.",
    type: "chat",
    xpReward: 15,
    goal: "Introduce yourself and ask someone's name and origin.",
    image: placeholderImage("chinese-introductions"),
    vocabulary: [
      { id: "zh-v6", term: "我叫... (Wǒ jiào...)", translation: "My name is ..." },
      { id: "zh-v7", term: "你叫什么名字？(Nǐ jiào shénme míngzì?)", translation: "What is your name?" },
      { id: "zh-v8", term: "我来自... (Wǒ láizì...)", translation: "I am from ..." },
    ],
    phrases: [
      { id: "zh-p3", text: "我叫李明 (Wǒ jiào Lǐ Míng)", translation: "My name is Li Ming" },
      { id: "zh-p4", text: "你从哪里来？(Nǐ cóng nǎlǐ lái?)", translation: "Where are you from?" },
    ],
    activities: [
      {
        id: "zh-a3",
        type: "translate",
        prompt: "Translate: 'My name is Wei'",
        correctAnswer: "我叫伟 (Wǒ jiào Wěi)",
      },
      {
        id: "zh-a4",
        type: "multiple-choice",
        prompt: "What does '你叫什么名字？' mean?",
        options: ["How are you?", "What is your name?", "Where are you from?", "Goodbye"],
        correctAnswer: "What is your name?",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are a friendly Mandarin conversation partner helping a beginner practice introductions. Ask the student's name and where they are from, respond warmly, and gently correct grammar mistakes.",
      greeting: "你好，我们再聊聊！练习自我介绍吧。你叫什么名字？",
      focusAreas: ["self-introduction", "question formation", "listening comprehension"],
    },
  },
  {
    id: "chinese-numbers",
    unitId: "chinese-basics-1",
    languageId: "chinese",
    order: 3,
    title: "Numbers",
    description: "Count from one to five in Mandarin.",
    type: "vocabulary",
    xpReward: 10,
    goal: "Recognize and use the numbers 1 through 5.",
    image: placeholderImage("chinese-numbers"),
    vocabulary: [
      { id: "zh-v9", term: "一 (Yī)", translation: "One" },
      { id: "zh-v10", term: "二 (Èr)", translation: "Two" },
      { id: "zh-v11", term: "三 (Sān)", translation: "Three" },
      { id: "zh-v12", term: "四 (Sì)", translation: "Four" },
      { id: "zh-v13", term: "五 (Wǔ)", translation: "Five" },
    ],
    phrases: [{ id: "zh-p5", text: "一，二，三！(Yī, èr, sān!)", translation: "One, two, three!" }],
    activities: [
      {
        id: "zh-a5",
        type: "match",
        prompt: "Match each Mandarin number to its English meaning.",
        options: ["一 (Yī)", "二 (Èr)", "三 (Sān)", "四 (Sì)"],
        correctAnswer: "一 (Yī) - One",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are a patient Mandarin vocabulary coach. Quiz the student on numbers one through five using short counting exercises.",
      greeting: "我们来练习数字吧，准备好了吗？",
      focusAreas: ["numbers", "recall speed"],
    },
  },
  {
    id: "chinese-family",
    unitId: "chinese-basics-1",
    languageId: "chinese",
    order: 4,
    title: "Family & Friends",
    description: "Talk about your family members.",
    type: "vocabulary",
    xpReward: 15,
    goal: "Name close family members in Mandarin.",
    image: placeholderImage("chinese-family"),
    vocabulary: [
      { id: "zh-v14", term: "家人 (Jiārén)", translation: "Family" },
      { id: "zh-v15", term: "妈妈 (Māma)", translation: "Mom" },
      { id: "zh-v16", term: "爸爸 (Bàba)", translation: "Dad" },
      { id: "zh-v17", term: "朋友 (Péngyǒu)", translation: "Friend" },
    ],
    phrases: [{ id: "zh-p6", text: "这是我妈妈 (Zhè shì wǒ māma)", translation: "This is my mom" }],
    activities: [
      {
        id: "zh-a6",
        type: "translate",
        prompt: "Translate: 'Friend'",
        correctAnswer: "朋友 (Péngyǒu)",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are a friendly Mandarin vocabulary coach helping a beginner talk about family. Use simple sentences and encourage the student to describe their own family.",
      greeting: "我们来聊聊家人吧！",
      focusAreas: ["family vocabulary", "sentence usage"],
    },
  },
  {
    id: "chinese-food-drink",
    unitId: "chinese-basics-1",
    languageId: "chinese",
    order: 5,
    title: "Food & Drink",
    description: "Order food and talk about what you like to eat.",
    type: "chat",
    xpReward: 15,
    goal: "Ask for food and drink and say what tastes good.",
    image: placeholderImage("chinese-food-drink"),
    vocabulary: [
      { id: "zh-v18", term: "水 (Shuǐ)", translation: "Water" },
      { id: "zh-v19", term: "米饭 (Mǐfàn)", translation: "Rice" },
      { id: "zh-v20", term: "咖啡 (Kāfēi)", translation: "Coffee" },
      { id: "zh-v21", term: "好吃 (Hǎochī)", translation: "Delicious" },
    ],
    phrases: [{ id: "zh-p7", text: "请给我水 (Qǐng gěi wǒ shuǐ)", translation: "Water, please" }],
    activities: [
      {
        id: "zh-a7",
        type: "multiple-choice",
        prompt: "How do you say 'delicious' in Mandarin?",
        options: ["水 (Shuǐ)", "好吃 (Hǎochī)", "米饭 (Mǐfàn)", "咖啡 (Kāfēi)"],
        correctAnswer: "好吃 (Hǎochī)",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are a friendly Mandarin conversation partner practicing food and drink vocabulary with a beginner. Ask what they want to eat or drink and react warmly.",
      greeting: "你想吃什么？",
      focusAreas: ["food vocabulary", "ordering phrases"],
    },
  },
  {
    id: "chinese-time-days",
    unitId: "chinese-basics-1",
    languageId: "chinese",
    order: 6,
    title: "Time & Days",
    description: "Talk about today, tomorrow, and the days of the week.",
    type: "vocabulary",
    xpReward: 10,
    goal: "Use basic time words in a sentence.",
    image: placeholderImage("chinese-time-days"),
    vocabulary: [
      { id: "zh-v22", term: "今天 (Jīntiān)", translation: "Today" },
      { id: "zh-v23", term: "明天 (Míngtiān)", translation: "Tomorrow" },
      { id: "zh-v24", term: "昨天 (Zuótiān)", translation: "Yesterday" },
      { id: "zh-v25", term: "星期一 (Xīngqīyī)", translation: "Monday" },
    ],
    phrases: [{ id: "zh-p8", text: "你今天做什么？(Nǐ jīntiān zuò shénme?)", translation: "What are you doing today?" }],
    activities: [
      {
        id: "zh-a8",
        type: "translate",
        prompt: "Translate: 'Tomorrow'",
        correctAnswer: "明天 (Míngtiān)",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are a patient Mandarin vocabulary coach practicing time words with a beginner student.",
      greeting: "我们来练习时间表达吧！",
      focusAreas: ["time vocabulary", "sentence usage"],
    },
  },
  {
    id: "chinese-weather",
    unitId: "chinese-basics-1",
    languageId: "chinese",
    order: 7,
    title: "Weather",
    description: "Describe the weather in Mandarin.",
    type: "video",
    xpReward: 10,
    goal: "Describe hot, cold, and rainy weather.",
    image: placeholderImage("chinese-weather"),
    vocabulary: [
      { id: "zh-v26", term: "天气 (Tiānqì)", translation: "Weather" },
      { id: "zh-v27", term: "热 (Rè)", translation: "Hot" },
      { id: "zh-v28", term: "冷 (Lěng)", translation: "Cold" },
      { id: "zh-v29", term: "下雨 (Xiàyǔ)", translation: "Raining" },
    ],
    phrases: [{ id: "zh-p9", text: "今天天气怎么样？(Jīntiān tiānqì zěnmeyàng?)", translation: "How's the weather today?" }],
    activities: [
      {
        id: "zh-a9",
        type: "multiple-choice",
        prompt: "How do you say 'raining' in Mandarin?",
        options: ["热 (Rè)", "冷 (Lěng)", "下雨 (Xiàyǔ)", "天气 (Tiānqì)"],
        correctAnswer: "下雨 (Xiàyǔ)",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are a Mandarin culture and language guide narrating a short video lesson about the weather. Keep explanations brief and beginner-appropriate.",
      greeting: "我们来看看今天的天气吧！",
      focusAreas: ["weather vocabulary", "listening comprehension"],
    },
  },
  {
    id: "chinese-directions",
    unitId: "chinese-basics-1",
    languageId: "chinese",
    order: 8,
    title: "Directions",
    description: "Ask for and give simple directions.",
    type: "chat",
    xpReward: 15,
    goal: "Use left, right, here, and there in a sentence.",
    image: placeholderImage("chinese-directions"),
    vocabulary: [
      { id: "zh-v30", term: "左边 (Zuǒbiān)", translation: "Left" },
      { id: "zh-v31", term: "右边 (Yòubiān)", translation: "Right" },
      { id: "zh-v32", term: "这里 (Zhèlǐ)", translation: "Here" },
      { id: "zh-v33", term: "那里 (Nàlǐ)", translation: "There" },
    ],
    phrases: [{ id: "zh-p10", text: "往左边走 (Wǎng zuǒbiān zǒu)", translation: "Go to the left" }],
    activities: [
      {
        id: "zh-a10",
        type: "translate",
        prompt: "Translate: 'Right'",
        correctAnswer: "右边 (Yòubiān)",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are a friendly Mandarin conversation partner practicing directions with a beginner. Ask for and give simple directions.",
      greeting: "我们来练习问路吧！",
      focusAreas: ["direction vocabulary", "question formation"],
    },
  },
  {
    id: "chinese-shopping",
    unitId: "chinese-basics-1",
    languageId: "chinese",
    order: 9,
    title: "Shopping",
    description: "Ask about prices and buy something.",
    type: "chat",
    xpReward: 15,
    goal: "Ask how much something costs and buy an item.",
    image: placeholderImage("chinese-shopping"),
    vocabulary: [
      { id: "zh-v34", term: "多少钱？(Duōshǎo qián?)", translation: "How much is it?" },
      { id: "zh-v35", term: "我要这个 (Wǒ yào zhège)", translation: "I want this" },
      { id: "zh-v36", term: "便宜 (Piányí)", translation: "Cheap" },
      { id: "zh-v37", term: "贵 (Guì)", translation: "Expensive" },
    ],
    phrases: [{ id: "zh-p11", text: "这个多少钱？(Zhège duōshǎo qián?)", translation: "How much is this?" }],
    activities: [
      {
        id: "zh-a11",
        type: "multiple-choice",
        prompt: "How do you ask 'How much is it?' in Mandarin?",
        options: ["多少钱？(Duōshǎo qián?)", "便宜 (Piányí)", "贵 (Guì)", "我要这个 (Wǒ yào zhège)"],
        correctAnswer: "多少钱？(Duōshǎo qián?)",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are a friendly Mandarin conversation partner practicing shopping phrases with a beginner. Role-play a simple shop interaction.",
      greeting: "我们来练习购物用语吧！",
      focusAreas: ["shopping vocabulary", "numbers"],
    },
  },
  {
    id: "chinese-hobbies",
    unitId: "chinese-basics-1",
    languageId: "chinese",
    order: 10,
    title: "Hobbies",
    description: "Talk about the things you enjoy doing.",
    type: "vocabulary",
    xpReward: 15,
    goal: "Name a few common hobbies in Mandarin.",
    image: placeholderImage("chinese-hobbies"),
    vocabulary: [
      { id: "zh-v38", term: "爱好 (Àihào)", translation: "Hobby" },
      { id: "zh-v39", term: "电影 (Diànyǐng)", translation: "Movie" },
      { id: "zh-v40", term: "音乐 (Yīnyuè)", translation: "Music" },
      { id: "zh-v41", term: "运动 (Yùndòng)", translation: "Exercise" },
    ],
    phrases: [{ id: "zh-p12", text: "我的爱好是听音乐 (Wǒ de àihào shì tīng yīnyuè)", translation: "My hobby is listening to music" }],
    activities: [
      {
        id: "zh-a12",
        type: "translate",
        prompt: "Translate: 'Movie'",
        correctAnswer: "电影 (Diànyǐng)",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are a patient Mandarin vocabulary coach helping a beginner talk about hobbies. Encourage the student to share their own hobbies.",
      greeting: "我们来聊聊爱好吧！",
      focusAreas: ["hobby vocabulary", "sentence usage"],
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
    image: placeholderImage("nepali-greetings"),
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
    image: placeholderImage("nepali-introductions"),
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
    image: placeholderImage("nepali-everyday-words"),
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
