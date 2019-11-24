const User = require('./users');
const Question = require('./question');
const Tags = require('./tags');

User.belongsToMany(Question, { through: 'UserQuestions' });
Question.belongsToMany(User, { through: 'UserQuestions' });

Question.belongsToMany(Tags, { through: 'QuestionsTags' });
Tags.belongsToMany(Question, { through: 'QuestionsTags' });

module.exports = { User, Question, Tags };
