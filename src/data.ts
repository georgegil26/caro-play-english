import { Level, Question } from './types';

export const LEVELS: Level[] = [
  {
    id: 1,
    title: "The Island of Nouns",
    topics: ["Sustantivos", "Pronombres", "Verbo To Be"],
    color: "bg-emerald-400",
    icon: "🏝️"
  },
  {
    id: 2,
    title: "Simple City",
    topics: ["Present Simple", "Do/Does", "Acciones cotidianas"],
    color: "bg-amber-400",
    icon: "🏙️"
  },
  {
    id: 3,
    title: "Action Canyon",
    topics: ["Adjetivos", "Verbos de acción", "Presente Continuo"],
    color: "bg-orange-400",
    icon: "🏜️"
  },
  {
    id: 4,
    title: "Perfect Galaxy",
    topics: ["Present Perfect", "Participios Pasados", "Have/Has"],
    color: "bg-indigo-500",
    icon: "🌌"
  },
  {
    id: 5,
    title: "Preposition Peaks",
    topics: ["Preposiciones", "Posesivos"],
    color: "bg-blue-400",
    icon: "🏔️"
  },
  {
    id: 6,
    title: "Past Port",
    topics: ["Pasado Simple", "Preguntas WH-"],
    color: "bg-purple-400",
    icon: "⚓"
  },
  {
    id: 7,
    title: "Future Fortress",
    topics: ["Futuro (Going to)", "Comparativos"],
    color: "bg-rose-400",
    icon: "🏰"
  },
  {
    id: 8,
    title: "Continuous Canyon",
    topics: ["Past Continuous", "Was/Were", "Actions in the past"],
    color: "bg-cyan-500",
    icon: "🌪️"
  },
  {
    id: 9,
    title: "Will Woods",
    topics: ["Future Simple (Will)", "Predictions", "Promises"],
    color: "bg-lime-500",
    icon: "🌲"
  }
];

export const QUESTIONS: Question[] = [
  // --- LEVEL 1: Sustantivos, Pronombres y Verbo To Be (+, -, ?) ---
  {
    id: "q1_1", level: 1, type: "multiple-choice",
    instruction: "Affirmative (+): Complete 'He ___ a doctor.'",
    options: ["am", "is", "are", "be"], correctAnswer: "is",
    explanation: "En afirmativo (+), para 'He' usamos 'is'."
  },
  {
    id: "q1_2", level: 1, type: "multiple-choice",
    instruction: "Negative (-): Complete 'I ___ not hungry.'",
    options: ["am", "is", "are", "be"], correctAnswer: "am",
    explanation: "En negativo (-), usamos 'am not' para 'I'."
  },
  {
    id: "q1_3", level: 1, type: "multiple-choice",
    instruction: "Question (?): '___ you ready?'",
    options: ["Am", "Is", "Are", "Be"], correctAnswer: "Are",
    explanation: "Para preguntas (?), el verbo 'To Be' va al principio. 'Are you...?'"
  },
  {
    id: "q1_4", level: 1, type: "order",
    instruction: "Order the Negative (-) sentence:",
    options: ["not", "is", "She", "sad"], correctAnswer: ["She", "is", "not", "sad"],
    explanation: "Estructura negativa: Sujeto + is + not + adjetivo."
  },
  {
    id: "q1_5", level: 1, type: "order",
    instruction: "Order the Question (?):",
    options: ["they", "Are", "happy", "?"], correctAnswer: ["Are", "they", "happy", "?"],
    explanation: "Estructura de pregunta: Verbo + Sujeto + Adjetivo + ?"
  },
  {
    id: "q1_6", level: 1, type: "multiple-choice",
    instruction: "Affirmative (+): 'It ___ a beautiful day.'",
    options: ["am", "is", "are", "be"], correctAnswer: "is",
    explanation: "Afirmativo: 'It is'."
  },
  {
    id: "q1_7", level: 1, type: "multiple-choice",
    instruction: "Negative (-): 'We ___ not at home.'",
    options: ["am", "is", "are", "be"], correctAnswer: "are",
    explanation: "Negativo: 'We are not'."
  },
  {
    id: "q1_8", level: 1, type: "multiple-choice",
    instruction: "Question (?): '___ it a cat?'",
    options: ["Am", "Is", "Are", "Be"], correctAnswer: "Is",
    explanation: "Pregunta: 'Is it...?'"
  },
  {
    id: "q1_9", level: 1, type: "multiple-choice",
    instruction: "Which is a PRONOUN?",
    options: ["Dog", "Blue", "You", "Jump"], correctAnswer: "You",
    explanation: "'You' es un pronombre personal."
  },
  {
    id: "q1_10", level: 1, type: "multiple-choice",
    instruction: "Which is a NOUN?",
    options: ["Run", "Apple", "Big", "Fast"], correctAnswer: "Apple",
    explanation: "'Apple' es un sustantivo (cosa)."
  },

  // --- LEVEL 2: Presente Simple (sin To Be) (+, -, ?) ---
  {
    id: "q2_1_new", level: 2, type: "multiple-choice",
    instruction: "Affirmative (+): 'I ___ apples.'",
    options: ["eat", "eats", "eating", "am eat"], correctAnswer: "eat",
    explanation: "Con 'I', el verbo se queda igual en presente simple."
  },
  {
    id: "q2_2_new", level: 2, type: "multiple-choice",
    instruction: "Affirmative (+): 'She ___ apples.'",
    options: ["eat", "eats", "eating", "is eat"], correctAnswer: "eats",
    explanation: "Con 'She', añadimos 's' al verbo."
  },
  {
    id: "q2_3_new", level: 2, type: "multiple-choice",
    instruction: "Negative (-): 'I ___ not like milk.'",
    options: ["am", "do", "does", "is"], correctAnswer: "do",
    explanation: "Usamos 'do not' para negar con 'I'."
  },
  {
    id: "q2_4_new", level: 2, type: "multiple-choice",
    instruction: "Negative (-): 'He ___ not like milk.'",
    options: ["do", "does", "is", "has"], correctAnswer: "does",
    explanation: "Usamos 'does not' para negar con 'He'."
  },
  {
    id: "q2_5_new", level: 2, type: "multiple-choice",
    instruction: "Question (?): '___ you play soccer?'",
    options: ["Do", "Does", "Are", "Is"], correctAnswer: "Do",
    explanation: "Usamos 'Do' para preguntar a 'you'."
  },
  {
    id: "q2_6_new", level: 2, type: "multiple-choice",
    instruction: "Question (?): '___ she play soccer?'",
    options: ["Do", "Does", "Is", "Has"], correctAnswer: "Does",
    explanation: "Usamos 'Does' para preguntar a 'she'."
  },
  {
    id: "q2_7_new", level: 2, type: "order",
    instruction: "Order the sentence (+):",
    options: ["play", "They", "tennis"], correctAnswer: ["They", "play", "tennis"],
    explanation: "Sujeto + Verbo + Complemento."
  },
  {
    id: "q2_8_new", level: 2, type: "order",
    instruction: "Order the negative sentence (-):",
    options: ["do", "not", "We", "run"], correctAnswer: ["We", "do", "not", "run"],
    explanation: "Sujeto + do + not + verbo."
  },
  {
    id: "q2_9_new", level: 2, type: "order",
    instruction: "Order the question (?):",
    options: ["you", "Do", "study", "?"], correctAnswer: ["Do", "you", "study", "?"],
    explanation: "Do + Sujeto + Verbo + ?"
  },
  {
    id: "q2_10_new", level: 2, type: "multiple-choice",
    instruction: "Which is correct?",
    options: ["He speaks", "He speak", "He speaking", "He is speak"], correctAnswer: "He speaks",
    explanation: "En presente simple, He/She/It llevan 's'."
  },

  // --- LEVEL 3: Adjetivos, Verbos y Presente Continuo (+, -, ?) ---
  {
    id: "q2_1", level: 3, type: "multiple-choice",
    instruction: "Affirmative (+): 'She is ___ a song.'",
    options: ["sing", "sings", "singing", "sang"], correctAnswer: "singing",
    explanation: "Afirmativo (+): is + verbo-ing."
  },
  {
    id: "q2_2", level: 3, type: "multiple-choice",
    instruction: "Negative (-): 'I am ___ eating.'",
    options: ["no", "not", "never", "don't"], correctAnswer: "not",
    explanation: "Negativo (-): am + not + verbo-ing."
  },
  {
    id: "q2_3", level: 3, type: "multiple-choice",
    instruction: "Question (?): '___ they playing?'",
    options: ["Am", "Is", "Are", "Do"], correctAnswer: "Are",
    explanation: "Pregunta (?): Are + they + verbo-ing?"
  },
  {
    id: "q2_4", level: 3, type: "order",
    instruction: "Order the Negative (-) sentence:",
    options: ["is", "He", "not", "sleeping"], correctAnswer: ["He", "is", "not", "sleeping"],
    explanation: "Sujeto + is + not + verbo-ing."
  },
  {
    id: "q2_5", level: 3, type: "order",
    instruction: "Order the Question (?):",
    options: ["she", "Is", "dancing", "?"], correctAnswer: ["Is", "she", "dancing", "?"],
    explanation: "Is + Sujeto + verbo-ing + ?"
  },
  {
    id: "q2_6", level: 3, type: "multiple-choice",
    instruction: "Affirmative (+): 'The birds ___ flying.'",
    options: ["am", "is", "are", "be"], correctAnswer: "are",
    explanation: "Afirmativo: 'Birds are flying'."
  },
  {
    id: "q2_7", level: 3, type: "multiple-choice",
    instruction: "Negative (-): 'It is ___ raining.'",
    options: ["no", "not", "don't", "isn't"], correctAnswer: "not",
    explanation: "Negativo: 'It is not raining'."
  },
  {
    id: "q2_8", level: 3, type: "multiple-choice",
    instruction: "Question (?): '___ I dreaming?'",
    options: ["Am", "Is", "Are", "Do"], correctAnswer: "Am",
    explanation: "Pregunta: 'Am I dreaming?'"
  },
  {
    id: "q2_9", level: 3, type: "multiple-choice",
    instruction: "Which is an ADJECTIVE?",
    options: ["Eat", "Beautiful", "House", "Walk"], correctAnswer: "Beautiful",
    explanation: "'Beautiful' es un adjetivo (describe algo)."
  },
  {
    id: "q2_10", level: 3, type: "multiple-choice",
    instruction: "Which is a VERB?",
    options: ["Table", "Jump", "Green", "Small"], correctAnswer: "Jump",
    explanation: "'Jump' es una acción (verbo)."
  },

  // --- LEVEL 4: Presente Perfecto (+, -, ?) ---
  {
    id: "q6_1", level: 4, type: "multiple-choice",
    instruction: "Affirmative (+): 'I ___ seen that movie.'",
    options: ["have", "has", "am", "do"], correctAnswer: "have",
    explanation: "Para 'I', usamos 'have' + participio."
  },
  {
    id: "q6_2", level: 4, type: "multiple-choice",
    instruction: "Negative (-): 'She ___ not finished yet.'",
    options: ["have", "has", "is", "does"], correctAnswer: "has",
    explanation: "Para 'She', usamos 'has' + not + participio."
  },
  {
    id: "q6_3", level: 4, type: "multiple-choice",
    instruction: "Question (?): '___ you ever eaten sushi?'",
    options: ["Have", "Has", "Do", "Are"], correctAnswer: "Have",
    explanation: "Pregunta (?): 'Have you...?'"
  },
  {
    id: "q6_4", level: 4, type: "multiple-choice",
    instruction: "Affirmative (+): 'He ___ lost his keys.'",
    options: ["have", "has", "is", "was"], correctAnswer: "has",
    explanation: "Para 'He', usamos 'has'."
  },
  {
    id: "q6_5", level: 4, type: "multiple-choice",
    instruction: "Negative (-): 'We ___ not visited the museum.'",
    options: ["have", "has", "are", "do"], correctAnswer: "have",
    explanation: "Para 'We', usamos 'have'."
  },
  {
    id: "q6_6", level: 4, type: "multiple-choice",
    instruction: "Question (?): '___ it rained today?'",
    options: ["Have", "Has", "Is", "Was"], correctAnswer: "Has",
    explanation: "Para 'It', usamos 'Has'."
  },
  {
    id: "q6_7", level: 4, type: "order",
    instruction: "Order the Affirmative (+) sentence:",
    options: ["gone", "home", "have", "They"], correctAnswer: ["They", "have", "gone", "home"],
    explanation: "Sujeto + have/has + participio + complemento."
  },
  {
    id: "q6_8", level: 4, type: "order",
    instruction: "Order the Negative (-) sentence:",
    options: ["seen", "not", "have", "I", "him"], correctAnswer: ["I", "have", "not", "seen", "him"],
    explanation: "Sujeto + have/has + not + participio."
  },
  {
    id: "q6_9", level: 4, type: "order",
    instruction: "Order the Question (?):",
    options: ["finished", "Have", "you", "?"], correctAnswer: ["Have", "you", "finished", "?"],
    explanation: "Have/Has + Sujeto + Participio + ?"
  },
  {
    id: "q6_10", level: 4, type: "multiple-choice",
    instruction: "What is the past participle of 'EAT'?",
    options: ["eat", "ate", "eaten", "eating"], correctAnswer: "eaten",
    explanation: "El participio pasado de 'eat' es 'eaten'."
  },

  // --- LEVEL 5: Preposiciones y Posesivos ---
  {
    id: "q3_1", level: 5, type: "multiple-choice",
    instruction: "Where is the ball? (Encima)",
    options: ["In", "On", "Under", "Behind"], correctAnswer: "On",
    explanation: "Encima se dice 'On'."
  },
  {
    id: "q3_2", level: 5, type: "multiple-choice",
    instruction: "Complete: 'This is ___ book.' (de ella)",
    options: ["my", "your", "his", "her"], correctAnswer: "her",
    explanation: "Posesivo de 'She' es 'her'."
  },
  {
    id: "q3_3", level: 5, type: "multiple-choice",
    instruction: "Where is the cat? (Dentro)",
    options: ["In", "On", "Under", "Next to"], correctAnswer: "In",
    explanation: "Dentro se dice 'In'."
  },
  {
    id: "q3_4", level: 5, type: "multiple-choice",
    instruction: "Complete: 'That is ___ dog.' (de él)",
    options: ["my", "his", "her", "its"], correctAnswer: "his",
    explanation: "Posesivo de 'He' es 'his'."
  },
  {
    id: "q3_5", level: 5, type: "multiple-choice",
    instruction: "The book is ___ the table. (Debajo)",
    options: ["On", "In", "Under", "Above"], correctAnswer: "Under",
    explanation: "Debajo se dice 'Under'."
  },
  {
    id: "q3_6", level: 5, type: "multiple-choice",
    instruction: "It is ___ car. (de nosotros)",
    options: ["my", "your", "our", "their"], correctAnswer: "our",
    explanation: "Posesivo de 'We' es 'our'."
  },
  {
    id: "q3_7", level: 5, type: "multiple-choice",
    instruction: "The apple is ___ the box. (Al lado de)",
    options: ["In", "On", "Next to", "Behind"], correctAnswer: "Next to",
    explanation: "Al lado de se dice 'Next to'."
  },
  {
    id: "q3_8", level: 5, type: "multiple-choice",
    instruction: "They are ___ toys. (de ellos)",
    options: ["my", "his", "her", "their"], correctAnswer: "their",
    explanation: "Posesivo de 'They' es 'their'."
  },
  {
    id: "q3_9", level: 5, type: "multiple-choice",
    instruction: "The sun is ___ the clouds. (Detrás)",
    options: ["In", "On", "Behind", "Under"], correctAnswer: "Behind",
    explanation: "Detrás se dice 'Behind'."
  },
  {
    id: "q3_10", level: 5, type: "multiple-choice",
    instruction: "Is this ___ pencil? (tuyo)",
    options: ["my", "your", "his", "her"], correctAnswer: "your",
    explanation: "Posesivo de 'You' es 'your'."
  },

  // --- LEVEL 6: Pasado Simple (+, -, ?) y Preguntas WH- ---
  {
    id: "q4_1", level: 6, type: "multiple-choice",
    instruction: "Affirmative (+): 'I ___ a movie yesterday.'",
    options: ["watch", "watches", "watched", "watching"], correctAnswer: "watched",
    explanation: "Afirmativo (+): Pasado regular termina en -ed."
  },
  {
    id: "q4_2", level: 6, type: "multiple-choice",
    instruction: "Negative (-): 'They ___ not go out.'",
    options: ["do", "does", "did", "done"], correctAnswer: "did",
    explanation: "Negativo (-): Usamos 'did not' para todos los sujetos."
  },
  {
    id: "q4_3", level: 6, type: "multiple-choice",
    instruction: "Question (?): '___ you see the cat?'",
    options: ["Do", "Does", "Did", "Was"], correctAnswer: "Did",
    explanation: "Pregunta (?): Usamos 'Did' al principio."
  },
  {
    id: "q4_4", level: 6, type: "order",
    instruction: "Order the Negative (-) sentence:",
    options: ["eat", "not", "did", "He"], correctAnswer: ["He", "did", "not", "eat"],
    explanation: "Sujeto + did + not + verbo."
  },
  {
    id: "q4_5", level: 6, type: "order",
    instruction: "Order the Question (?):",
    options: ["they", "Did", "play", "?"], correctAnswer: ["Did", "they", "play", "?"],
    explanation: "Did + Sujeto + Verbo + ?"
  },
  {
    id: "q4_6", level: 6, type: "multiple-choice",
    instruction: "Affirmative (+): 'She ___ to the park.'",
    options: ["go", "goes", "went", "gone"], correctAnswer: "went",
    explanation: "Afirmativo: Pasado de 'go' es 'went'."
  },
  {
    id: "q4_7", level: 6, type: "multiple-choice",
    instruction: "Negative (-): 'We ___ not sleep well.'",
    options: ["do", "does", "did", "didn't"], correctAnswer: "did",
    explanation: "Negativo: 'We did not'."
  },
  {
    id: "q4_8", level: 6, type: "multiple-choice",
    instruction: "Question (?): '___ he finish?'",
    options: ["Do", "Does", "Did", "Was"], correctAnswer: "Did",
    explanation: "Pregunta: 'Did he...?'"
  },
  {
    id: "q4_9", level: 6, type: "multiple-choice",
    instruction: "___ is your name?",
    options: ["Who", "What", "Where", "When"], correctAnswer: "What",
    explanation: "Usamos 'What' para nombres."
  },
  {
    id: "q4_10", level: 6, type: "multiple-choice",
    instruction: "___ do you live?",
    options: ["Who", "What", "Where", "Why"], correctAnswer: "Where",
    explanation: "Usamos 'Where' para lugares."
  },

  // --- LEVEL 7: Futuro Going to (+, -, ?) y Comparativos ---
  {
    id: "q5_1", level: 7, type: "multiple-choice",
    instruction: "Affirmative (+): 'I am ___ to dance.'",
    options: ["go", "goes", "going", "gone"], correctAnswer: "going",
    explanation: "Afirmativo (+): am + going to."
  },
  {
    id: "q5_2", level: 7, type: "multiple-choice",
    instruction: "Negative (-): 'She is ___ going to cry.'",
    options: ["no", "not", "don't", "never"], correctAnswer: "not",
    explanation: "Negativo (-): is + not + going to."
  },
  {
    id: "q5_3", level: 7, type: "multiple-choice",
    instruction: "Question (?): '___ they going to win?'",
    options: ["Am", "Is", "Are", "Do"], correctAnswer: "Are",
    explanation: "Pregunta (?): Are + they + going to...?"
  },
  {
    id: "q5_4", level: 7, type: "order",
    instruction: "Order the Negative (-) sentence:",
    options: ["not", "going", "am", "I", "to", "go"], correctAnswer: ["I", "am", "not", "going", "to", "go"],
    explanation: "Sujeto + am + not + going to + verbo."
  },
  {
    id: "q5_5", level: 7, type: "order",
    instruction: "Order the Question (?):",
    options: ["is", "going", "Is", "he", "to", "eat", "?"], correctAnswer: ["Is", "he", "going", "to", "eat", "?"],
    explanation: "Is + Sujeto + going to + verbo + ?"
  },
  {
    id: "q5_6", level: 7, type: "multiple-choice",
    instruction: "Affirmative (+): 'We ___ going to study.'",
    options: ["am", "is", "are", "be"], correctAnswer: "are",
    explanation: "Afirmativo: 'We are going to'."
  },
  {
    id: "q5_7", level: 7, type: "multiple-choice",
    instruction: "Negative (-): 'It is ___ going to rain.'",
    options: ["no", "not", "isn't", "never"], correctAnswer: "not",
    explanation: "Negativo: 'It is not going to'."
  },
  {
    id: "q5_8", level: 7, type: "multiple-choice",
    instruction: "Question (?): '___ you going to help?'",
    options: ["Am", "Is", "Are", "Do"], correctAnswer: "Are",
    explanation: "Pregunta: 'Are you going to...?'"
  },
  {
    id: "q5_9", level: 7, type: "multiple-choice",
    instruction: "A plane is ___ than a car.",
    options: ["fast", "faster", "fastest", "more fast"], correctAnswer: "faster",
    explanation: "Comparativo: adj + er."
  },
  {
    id: "q5_10", level: 7, type: "multiple-choice",
    instruction: "An elephant is ___ than a mouse.",
    options: ["big", "bigger", "biggest", "more big"], correctAnswer: "bigger",
    explanation: "Comparativo: big -> bigger."
  },

  // --- LEVEL 8: Pasado Continuo (+, -, ?) ---
  {
    id: "q7_1", level: 8, type: "multiple-choice",
    instruction: "Affirmative (+): 'I ___ sleeping when you called.'",
    options: ["am", "was", "were", "be"], correctAnswer: "was",
    explanation: "Para 'I', usamos 'was' + verbo-ing en pasado continuo."
  },
  {
    id: "q7_2", level: 8, type: "multiple-choice",
    instruction: "Negative (-): 'They ___ not playing soccer.'",
    options: ["was", "were", "are", "do"], correctAnswer: "were",
    explanation: "Para 'They', usamos 'were' + not + verbo-ing."
  },
  {
    id: "q7_3", level: 8, type: "multiple-choice",
    instruction: "Question (?): '___ she dancing at the party?'",
    options: ["Was", "Were", "Is", "Did"], correctAnswer: "Was",
    explanation: "Pregunta (?): 'Was she...?'"
  },
  {
    id: "q7_4", level: 8, type: "order",
    instruction: "Order the Affirmative (+) sentence:",
    options: ["working", "was", "He"], correctAnswer: ["He", "was", "working"],
    explanation: "Sujeto + was/were + verbo-ing."
  },
  {
    id: "q7_5", level: 8, type: "order",
    instruction: "Order the Negative (-) sentence:",
    options: ["not", "We", "were", "singing"], correctAnswer: ["We", "were", "not", "singing"],
    explanation: "Sujeto + were + not + verbo-ing."
  },
  {
    id: "q7_6", level: 8, type: "multiple-choice",
    instruction: "Affirmative (+): 'You ___ eating pizza.'",
    options: ["was", "were", "are", "be"], correctAnswer: "were",
    explanation: "Para 'You', usamos 'were'."
  },
  {
    id: "q7_7", level: 8, type: "multiple-choice",
    instruction: "Negative (-): 'It ___ not raining.'",
    options: ["was", "were", "is", "doesn't"], correctAnswer: "was",
    explanation: "Para 'It', usamos 'was'."
  },
  {
    id: "q7_8", level: 8, type: "multiple-choice",
    instruction: "Question (?): '___ I talking too loud?'",
    options: ["Was", "Were", "Am", "Did"], correctAnswer: "Was",
    explanation: "Pregunta: 'Was I...?'"
  },
  {
    id: "q7_9", level: 8, type: "multiple-choice",
    instruction: "Which is the correct 'ing' form of 'RUN'?",
    options: ["runing", "running", "runs", "ran"], correctAnswer: "running",
    explanation: "Doblamos la 'n' en 'running'."
  },
  {
    id: "q7_10", level: 8, type: "multiple-choice",
    instruction: "Complete: 'She ___ reading a book.'",
    options: ["was", "were", "is", "be"], correctAnswer: "was",
    explanation: "Pasado continuo: 'She was reading'."
  },

  // --- LEVEL 9: Futuro Simple (Will) (+, -, ?) ---
  {
    id: "q8_1", level: 9, type: "multiple-choice",
    instruction: "Affirmative (+): 'I ___ help you tomorrow.'",
    options: ["will", "am", "going", "do"], correctAnswer: "will",
    explanation: "Futuro simple (+): Usamos 'will' para promesas o decisiones rápidas."
  },
  {
    id: "q8_2", level: 9, type: "multiple-choice",
    instruction: "Negative (-): 'They ___ not come to the party.'",
    options: ["will", "do", "are", "won't"], correctAnswer: "will",
    explanation: "Negativo (-): 'will not' (o 'won't')."
  },
  {
    id: "q8_3", level: 9, type: "multiple-choice",
    instruction: "Question (?): '___ it rain later?'",
    options: ["Will", "Is", "Does", "Do"], correctAnswer: "Will",
    explanation: "Pregunta (?): 'Will it...?'"
  },
  {
    id: "q8_4", level: 9, type: "order",
    instruction: "Order the Affirmative (+) sentence:",
    options: ["be", "will", "It", "sunny"], correctAnswer: ["It", "will", "be", "sunny"],
    explanation: "Sujeto + will + verbo base."
  },
  {
    id: "q8_5", level: 9, type: "order",
    instruction: "Order the Negative (-) sentence:",
    options: ["not", "will", "She", "cry"], correctAnswer: ["She", "will", "not", "cry"],
    explanation: "Sujeto + will + not + verbo base."
  },
  {
    id: "q8_6", level: 9, type: "multiple-choice",
    instruction: "Affirmative (+): 'We ___ win the game!'",
    options: ["will", "are", "do", "shall"], correctAnswer: "will",
    explanation: "Afirmativo: 'We will win'."
  },
  {
    id: "q8_7", level: 9, type: "multiple-choice",
    instruction: "Negative (-): 'I ___ not forget.'",
    options: ["will", "do", "am", "won't"], correctAnswer: "will",
    explanation: "Negativo: 'I will not forget'."
  },
  {
    id: "q8_8", level: 9, type: "multiple-choice",
    instruction: "Question (?): '___ you marry me?'",
    options: ["Will", "Do", "Are", "Shall"], correctAnswer: "Will",
    explanation: "Pregunta: 'Will you...?'"
  },
  {
    id: "q8_9", level: 9, type: "multiple-choice",
    instruction: "What is the short form of 'WILL NOT'?",
    options: ["willn't", "won't", "don't", "can't"], correctAnswer: "won't",
    explanation: "'Will not' se abrevia como 'won't'."
  },
  {
    id: "q8_10", level: 9, type: "multiple-choice",
    instruction: "Complete: 'The robot ___ talk.'",
    options: ["will", "is", "does", "be"], correctAnswer: "will",
    explanation: "Futuro: 'The robot will talk'."
  }
];



