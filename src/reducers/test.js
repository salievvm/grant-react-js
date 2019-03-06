import {
    TEST_LANGUAGE_CHOOSED,
    TEST_CHOOSED,
    TEST_ORDERED,
    TEST_SELECTIVE_MODULE_SELECTED,
    TEST_STARTED,
    TEST_MODULE_ACTIVATED,
    TEST_MODULE_QUESTION_DISPLAYED,
    TEST_MODULE_QUESTION_ANSWER_CHECKED,
    USER_VARIANT_ANSWER_REMOVED,
    ANSWER_SLICED_FROM_USER_VARIANT,
    TEST_FINISHED,
    TEST_RESULT_FETCHED,
} from '../types';

export default function test(state = {}, action = {}) {
    switch (action.type) {
        case TEST_LANGUAGE_CHOOSED:
            return { ...state, ...action.data }
        case TEST_CHOOSED:
            return { ...state, ...action.data }
        case TEST_ORDERED:
            return { ...state, ...action.data }
        case TEST_SELECTIVE_MODULE_SELECTED:
            if (!state.selectedModuleIds) {
                state.selectedModuleIds = {};
                state.selectedModuleIds = {
                    [Object.keys(action.data)[0]]: Object.values(action.data)[0]
                }
            } else {
                state.selectedModuleIds = {
                    ...state.selectedModuleIds, ...action.data
                }
            }
            return state;
        case TEST_STARTED:
            state.inTestProcess = true;
            return {...state};
        case TEST_MODULE_ACTIVATED:
            state.activeTestModule = action.testModule
            return { ...state };
        case TEST_MODULE_QUESTION_DISPLAYED:
            state.displayedQuestion = action.question;
            return { ...state }
        case TEST_MODULE_QUESTION_ANSWER_CHECKED:
            if (!state.userAnswers) {
                state.userAnswers = [];
                state.userAnswers.push(action.answer)
            } else {
                let theSameVariant = false;
                const updatedUserAnswers = state.userAnswers.map(userAnswer => {
                    if (userAnswer.userVariantId === action.answer.userVariantId) {
                        theSameVariant = true;
                        userAnswer.answerIds.push(action.answer.answerIds[0]);
                    }
                    return userAnswer;
                })
                if(!theSameVariant) state.userAnswers.push(action.answer);
                if(theSameVariant) state.userAnswers = updatedUserAnswers;
            }
            return { ...state }
        case USER_VARIANT_ANSWER_REMOVED:
            if(!state.userAnswers) return state;
            const userVariantId = action.userVariantId;
            const userAnswers = state.userAnswers;
            const updatedUserAnswers = userAnswers.filter(userAnswer => userAnswer.userVariantId !== userVariantId);
            state.userAnswers = updatedUserAnswers;
            return {...state}
        case ANSWER_SLICED_FROM_USER_VARIANT:
            state.userAnswers.map(userAnswer => {
                if(userAnswer.userVariantId === action.slicedAnswer.userVariantId) {
                    const updatedAnswerIds = userAnswer.answerIds.filter(id => id !== action.slicedAnswer.answerId);
                    userAnswer.answerIds = updatedAnswerIds;
                }

                return state.userAnswers;
            })
            return {...state}
        case TEST_FINISHED:
            state.inTestProcess = false;
            state.finishedTestResult = action.finishedTestResult;
            return {...state}
        case TEST_RESULT_FETCHED:
            state.fetchedTestResult = action.fetchedTestResult;
            return {...state}
        default:
            return state;
    }
}