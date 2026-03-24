import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Trophy, 
  Map as MapIcon, 
  User, 
  Star, 
  ChevronRight, 
  CheckCircle2, 
  XCircle,
  Coins,
  ArrowLeft
} from 'lucide-react';
import { LEVELS, QUESTIONS } from './data';
import { UserProfile, Question, Level } from './types';

// --- Components ---

const WelcomeScreen = ({ onStart }: { onStart: (name: string, avatar: string) => void }) => {
  const [name, setName] = useState('');
  const [selectedAvatar, setSelectedAvatar] = useState('🦁');
  const avatars = ['🦁', '🦊', '🐼', '🐨', '🐯', '🐸'];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-md mx-auto bg-white p-10 rounded-[40px] shadow-2xl border-b-8 border-slate-200 text-center flex flex-col gap-8"
    >
      <div className="flex flex-col gap-2">
        <h2 className="text-4xl font-display text-sky-600">¡Bienvenido!</h2>
        <p className="text-slate-500 font-medium">¿Cómo te llamas, pequeño explorador?</p>
      </div>

      <input 
        type="text" 
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Tu nombre aquí..."
        className="w-full p-5 bg-slate-50 border-4 border-slate-100 rounded-3xl text-2xl font-bold text-slate-700 focus:border-sky-400 outline-none transition-all text-center"
      />

      <div className="flex flex-col gap-4">
        <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Elige tu avatar</p>
        <div className="grid grid-cols-3 gap-4">
          {avatars.map(avatar => (
            <button
              key={avatar}
              onClick={() => setSelectedAvatar(avatar)}
              className={`text-4xl p-4 rounded-2xl transition-all ${
                selectedAvatar === avatar 
                  ? 'bg-sky-100 border-4 border-sky-400 scale-110' 
                  : 'bg-slate-50 border-4 border-transparent hover:border-slate-200'
              }`}
            >
              {avatar}
            </button>
          ))}
        </div>
      </div>

      <button 
        onClick={() => name.trim() && onStart(name, selectedAvatar)}
        disabled={!name.trim()}
        className="w-full py-5 bg-emerald-500 text-white rounded-3xl font-bold text-2xl shadow-xl hover:bg-emerald-400 transition-all border-b-8 border-emerald-700 active:border-b-0 active:translate-y-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        ¡Empezar Aventura!
      </button>
    </motion.div>
  );
};

const ProgressBar = ({ current, total }: { current: number; total: number }) => (
  <div className="w-full bg-slate-200 h-4 rounded-full overflow-hidden border-2 border-slate-300">
    <motion.div 
      className="bg-yellow-400 h-full"
      initial={{ width: 0 }}
      animate={{ width: `${(current / total) * 100}%` }}
    />
  </div>
);

interface LevelCardProps {
  level: Level;
  isUnlocked: boolean;
  onClick: () => void;
  key?: React.Key;
}

function LevelCard({ level, isUnlocked, onClick }: LevelCardProps) {
  return (
    <motion.button
      whileHover={isUnlocked ? { scale: 1.05 } : {}}
      whileTap={isUnlocked ? { scale: 0.95 } : {}}
      onClick={onClick}
      disabled={!isUnlocked}
      className={`relative p-6 rounded-3xl shadow-xl border-b-8 transition-all flex flex-col items-center text-center gap-3 ${
        isUnlocked ? `${level.color} border-black/20 cursor-pointer` : 'bg-slate-300 border-slate-400 grayscale cursor-not-allowed'
      }`}
    >
      <span className="text-6xl mb-2">{level.icon}</span>
      <h3 className="text-xl font-bold text-white drop-shadow-md">{level.title}</h3>
      <div className="flex flex-wrap justify-center gap-1">
        {level.topics.map(t => (
          <span key={t} className="text-[10px] bg-white/30 px-2 py-0.5 rounded-full text-white font-semibold">
            {t}
          </span>
        ))}
      </div>
      {!isUnlocked && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/10 rounded-3xl">
          <span className="text-4xl">🔒</span>
        </div>
      )}
    </motion.button>
  );
}

interface ChallengeScreenProps {
  level: Level;
  onComplete: (points: number) => void;
  onBack: () => void;
}

const ChallengeScreen = ({ 
  level, 
  onComplete, 
  onBack 
}: ChallengeScreenProps) => {
  const levelQuestions = QUESTIONS.filter(q => q.level === level.id);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [orderedSelection, setOrderedSelection] = useState<string[]>([]);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [score, setScore] = useState(0);
  const [showSummary, setShowSummary] = useState(false);

  const playSound = (type: 'correct' | 'incorrect' | 'win') => {
    const sounds = {
      correct: 'https://assets.mixkit.co/active_storage/sfx/2000/2000-preview.mp3',
      incorrect: 'https://assets.mixkit.co/active_storage/sfx/2003/2003-preview.mp3',
      win: 'https://assets.mixkit.co/active_storage/sfx/1435/1435-preview.mp3'
    };
    const audio = new Audio(sounds[type]);
    audio.play().catch(e => console.log('Audio play blocked:', e));
  };

  const currentQuestion = levelQuestions[currentIndex];

  const handleAnswer = (option: string) => {
    if (feedback) return;

    if (currentQuestion.type === 'multiple-choice') {
      setSelectedOption(option);
      const isCorrect = option === currentQuestion.correctAnswer;
      setFeedback(isCorrect ? 'correct' : 'incorrect');
      playSound(isCorrect ? 'correct' : 'incorrect');
      if (isCorrect) setScore(s => s + 10);
    } else if (currentQuestion.type === 'order') {
      if (orderedSelection.includes(option)) {
        setOrderedSelection(prev => prev.filter(o => o !== option));
      } else {
        const newSelection = [...orderedSelection, option];
        setOrderedSelection(newSelection);
        
        if (newSelection.length === currentQuestion.options.length) {
          const isCorrect = JSON.stringify(newSelection) === JSON.stringify(currentQuestion.correctAnswer);
          setFeedback(isCorrect ? 'correct' : 'incorrect');
          playSound(isCorrect ? 'correct' : 'incorrect');
          if (isCorrect) setScore(s => s + 15);
        }
      }
    }
  };

  const nextQuestion = () => {
    if (currentIndex < levelQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOption(null);
      setOrderedSelection([]);
      setFeedback(null);
    } else {
      playSound('win');
      setShowSummary(true);
    }
  };

  if (showSummary) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md mx-auto bg-white p-10 rounded-[40px] shadow-2xl border-b-8 border-slate-200 text-center flex flex-col gap-6"
      >
        <div className="text-8xl mb-4">🏆</div>
        <h2 className="text-4xl font-display text-slate-800">¡Nivel Completado!</h2>
        <div className="flex justify-center gap-2 mb-4">
          {[1, 2, 3].map(star => (
            <Star 
              key={star} 
              className={`w-12 h-12 ${score >= star * 10 ? 'text-yellow-400 fill-yellow-400' : 'text-slate-200'}`} 
            />
          ))}
        </div>
        <div className="bg-sky-50 p-6 rounded-3xl border-2 border-sky-100">
          <div className="text-slate-500 font-bold uppercase tracking-widest text-sm mb-1">Puntos Ganados</div>
          <div className="text-5xl font-display text-sky-600">+{score}</div>
        </div>
        <button 
          onClick={() => onComplete(score)}
          className="w-full py-5 bg-emerald-500 text-white rounded-3xl font-bold text-2xl shadow-xl hover:bg-emerald-400 transition-all border-b-8 border-emerald-700 active:border-b-0 active:translate-y-2"
        >
          ¡Genial!
        </button>
      </motion.div>
    );
  }

  if (!currentQuestion) return <div>No questions for this level yet!</div>;

  return (
    <div className="max-w-2xl mx-auto p-4 flex flex-col gap-6 h-full">
      <div className="flex items-center justify-between gap-4">
        <button onClick={onBack} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <ProgressBar current={currentIndex + 1} total={levelQuestions.length} />
        <div className="flex items-center gap-1 font-bold text-yellow-600">
          <Coins className="w-5 h-5" />
          {score}
        </div>
      </div>

      <motion.div 
        key={currentQuestion.id}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-white p-8 rounded-3xl shadow-2xl border-2 border-slate-100 flex flex-col gap-6"
      >
        <h2 className="text-2xl font-bold text-slate-700 text-center">
          {currentQuestion.instruction}
        </h2>

        {currentQuestion.type === 'order' && (
          <div className="flex flex-wrap justify-center gap-2 min-h-[60px] p-4 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200">
            {orderedSelection.map((word, i) => (
              <motion.span 
                key={`${word}-${i}`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="bg-sky-500 text-white px-4 py-2 rounded-xl font-bold text-lg shadow-md"
              >
                {word}
              </motion.span>
            ))}
          </div>
        )}

        {currentQuestion.image && (
          <div className="w-full aspect-video rounded-2xl overflow-hidden border-4 border-slate-100 shadow-inner">
            <img 
              src={currentQuestion.image} 
              alt="Challenge" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        )}

        <div className="grid grid-cols-2 gap-4">
          {currentQuestion.options.map((option) => (
            <motion.button
              key={option}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleAnswer(option)}
              className={`p-6 rounded-2xl text-xl font-bold border-b-4 transition-all ${
                currentQuestion.type === 'order' && orderedSelection.includes(option)
                  ? 'bg-slate-200 border-slate-300 text-slate-400 opacity-50'
                  : selectedOption === option
                    ? feedback === 'correct'
                      ? 'bg-emerald-500 border-emerald-700 text-white'
                      : 'bg-rose-500 border-rose-700 text-white'
                    : 'bg-slate-50 border-slate-200 hover:border-sky-400 text-slate-600'
              }`}
            >
              {option}
            </motion.button>
          ))}
        </div>
      </motion.div>

      <AnimatePresence>
        {feedback && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className={`p-6 rounded-3xl shadow-2xl flex flex-col items-center gap-4 text-center ${
              feedback === 'correct' ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'
            }`}
          >
            <div className="flex items-center gap-2 text-2xl font-bold">
              {feedback === 'correct' ? (
                <><CheckCircle2 className="w-8 h-8" /> ¡Excelente!</>
              ) : (
                <><XCircle className="w-8 h-8" /> ¡Ups! Casi...</>
              )}
            </div>
            <p className="text-lg font-medium">{currentQuestion.explanation}</p>
            <button 
              onClick={nextQuestion}
              className={`px-8 py-3 rounded-full text-white font-bold text-xl shadow-lg transition-transform hover:scale-105 active:scale-95 ${
                feedback === 'correct' ? 'bg-emerald-500' : 'bg-rose-500'
              }`}
            >
              Continuar
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


// --- Main App ---

export default function App() {
  const [user, setUser] = useState<UserProfile>(() => {
    const saved = localStorage.getItem('caro_play_english_user');
    if (saved) return JSON.parse(saved);
    return {
      id: '1',
      name: 'Explorer',
      avatar: '🦁',
      level: 1,
      points: 0,
      unlockedLevels: [1],
      achievements: []
    };
  });

  useEffect(() => {
    localStorage.setItem('caro_play_english_user', JSON.stringify(user));
  }, [user]);

  const [view, setView] = useState<'map' | 'challenge' | 'profile' | 'welcome'>(
    user.name === 'Explorer' ? 'welcome' : 'map'
  );
  const [activeLevel, setActiveLevel] = useState<Level | null>(null);

  const handleStart = (name: string, avatar: string) => {
    setUser(prev => ({ ...prev, name, avatar }));
    setView('map');
  };

  const startLevel = (level: Level) => {
    setActiveLevel(level);
    setView('challenge');
  };

  const completeLevel = (earnedPoints: number) => {
    if (!activeLevel) return;
    
    setUser(prev => {
      const nextLevelId = activeLevel.id + 1;
      const isNewUnlock = !prev.unlockedLevels.includes(nextLevelId) && nextLevelId <= LEVELS.length;
      
      return {
        ...prev,
        points: prev.points + earnedPoints,
        unlockedLevels: isNewUnlock 
          ? [...prev.unlockedLevels, nextLevelId] 
          : prev.unlockedLevels
      };
    });
    
    setView('map');
    setActiveLevel(null);
  };

  return (
    <div className="min-h-screen bg-sky-50 font-sans pb-20">
      {/* Header */}
      <header className="bg-white border-b-4 border-slate-100 p-4 sticky top-0 z-10 shadow-sm">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center text-3xl shadow-inner">
              {user.avatar}
            </div>
            <div>
              <h1 className="font-display text-xl text-sky-600 leading-none">Caro play english</h1>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Level {user.level}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="bg-yellow-50 px-4 py-2 rounded-full border-2 border-yellow-200 flex items-center gap-2">
              <Coins className="w-5 h-5 text-yellow-500" />
              <span className="font-bold text-yellow-700">{user.points}</span>
            </div>
            <button 
              onClick={() => setView('profile')}
              className="p-2 hover:bg-slate-50 rounded-xl transition-colors"
            >
              <User className="w-6 h-6 text-slate-500" />
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-6">
        <AnimatePresence mode="wait">
          {view === 'welcome' && (
            <WelcomeScreen onStart={handleStart} />
          )}

          {view === 'map' && (
            <motion.div 
              key="map"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <div className="col-span-full mb-4">
                <h2 className="text-3xl font-display text-slate-800 mb-2">Tu Mapa de Aventuras</h2>
                <p className="text-slate-500 font-medium">Desbloquea nuevos mundos aprendiendo gramática.</p>
              </div>
              {LEVELS.map((level) => (
                <LevelCard 
                  key={level.id} 
                  level={level} 
                  isUnlocked={user.unlockedLevels.includes(level.id)}
                  onClick={() => startLevel(level)}
                />
              ))}
            </motion.div>
          )}

          {view === 'challenge' && activeLevel && (
            <motion.div
              key="challenge"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
            >
              <ChallengeScreen 
                level={activeLevel} 
                onComplete={completeLevel}
                onBack={() => setView('map')}
              />
            </motion.div>
          )}

          {view === 'profile' && (
            <motion.div
              key="profile"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="bg-white p-8 rounded-3xl shadow-xl border-2 border-slate-100"
            >
              <div className="flex items-center gap-6 mb-8">
                <div className="text-8xl bg-slate-50 p-6 rounded-full shadow-inner">{user.avatar}</div>
                <div>
                  <h2 className="text-4xl font-display text-slate-800">{user.name}</h2>
                  <p className="text-slate-500 text-xl">Grammar Hero in Training</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-sky-50 p-6 rounded-2xl border-2 border-sky-100">
                  <Star className="w-8 h-8 text-sky-500 mb-2" />
                  <div className="text-3xl font-bold text-sky-700">{user.points}</div>
                  <div className="text-sky-600 font-medium uppercase text-xs tracking-widest">Total Points</div>
                </div>
                <div className="bg-emerald-50 p-6 rounded-2xl border-2 border-emerald-100">
                  <Trophy className="w-8 h-8 text-emerald-500 mb-2" />
                  <div className="text-3xl font-bold text-emerald-700">{user.unlockedLevels.length}</div>
                  <div className="text-emerald-600 font-medium uppercase text-xs tracking-widest">Worlds Unlocked</div>
                </div>
              </div>

              <button 
                onClick={() => setView('map')}
                className="w-full py-4 bg-slate-800 text-white rounded-2xl font-bold text-xl hover:bg-slate-700 transition-colors"
              >
                Volver al Mapa
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t-4 border-slate-100 p-4 flex justify-around items-center z-10">
        <button 
          onClick={() => setView('map')}
          className={`flex flex-col items-center gap-1 ${view === 'map' ? 'text-sky-500' : 'text-slate-400'}`}
        >
          <MapIcon className="w-6 h-6" />
          <span className="text-[10px] font-bold uppercase">Mapa</span>
        </button>
        <button 
          onClick={() => setView('profile')}
          className={`flex flex-col items-center gap-1 ${view === 'profile' ? 'text-sky-500' : 'text-slate-400'}`}
        >
          <User className="w-6 h-6" />
          <span className="text-[10px] font-bold uppercase">Perfil</span>
        </button>
      </nav>
    </div>
  );
}
