const User = require('./users');
const Questions = require('./questions');
const Tags = require('./tags');

User.belongsToMany(Questions, { through: 'UserQuestions' });
Questions.belongsToMany(User, { through: 'UserQuestions' });

Questions.belongsToMany(Tags, { through: 'QuestionsTags' });
Tags.belongsToMany(Questions, { through: 'QuestionsTags' });

module.exports = { User, Questions, Tags };
