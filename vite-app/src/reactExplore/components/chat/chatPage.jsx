import React, { useState } from 'react';

const QuestionPage = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState('');
  const [replies, setReplies] = useState([]);

  const handleQuestionChange = (e) => {
    setCurrentQuestion(e.target.value);
  };

  const handleQuestionSubmit = (e) => {
    e.preventDefault();
    if (currentQuestion.trim() !== '') {
      const newQuestion = {
        id: questions.length + 1,
        text: currentQuestion.trim(),
      };
      setQuestions([...questions, newQuestion]);
      setCurrentQuestion('');

      // Simulate reply from the system
      const newReply = {
        id: replies.length + 1,
        text: `Reply to question "${newQuestion.text}"`,
      };
      setReplies([...replies, newReply]);
    }
  };

  return (
    <div>
      <h1>Student Questions</h1>
      <div>
        {questions.map((question) => (
          <div key={question.id}>
            <strong>Question:</strong> {question.text}
          </div>
        ))}
      </div>
      <div>
        <form onSubmit={handleQuestionSubmit}>
          <input
            type='text'
            value={currentQuestion}
            onChange={handleQuestionChange}
            placeholder='Ask a question...'
          />
          <button type='submit'>Submit</button>
        </form>
      </div>
      <div>
        {replies.map((reply) => (
          <div key={reply.id}>
            <strong>Reply:</strong> {reply.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionPage;
