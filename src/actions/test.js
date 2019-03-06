import {
    TEST_LANGUAGE_CHOOSED,
    TEST_CHOOSED, TEST_ORDERED,
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
import api from '../api';

const testLanguageChoosed = data => ({
    type: TEST_LANGUAGE_CHOOSED,
    data
});

const testChoosed = data => ({
    type: TEST_CHOOSED,
    data
});

const testOrdered = data => ({
    type: TEST_ORDERED,
    data
});

const testSelectiveModuleSelected = data => ({
    type: TEST_SELECTIVE_MODULE_SELECTED,
    data
});

const testStarted = () => ({
    type: TEST_STARTED
});

const testModuleActivated = testModule => ({
    type: TEST_MODULE_ACTIVATED,
    testModule
});

const testModuleQuestionDisplayed = question => ({
    type: TEST_MODULE_QUESTION_DISPLAYED,
    question
});

const testModuleQuestionAnswerChecked = answer => ({
    type: TEST_MODULE_QUESTION_ANSWER_CHECKED,
    answer
});

const userVariantAnswerRemoved = userVariantId => ({
    type: USER_VARIANT_ANSWER_REMOVED,
    userVariantId
});

const answerSlicedFromUserAnswers = (userVariantId, answerId) => ({
    type: ANSWER_SLICED_FROM_USER_VARIANT,
    slicedAnswer: {userVariantId, answerId}
});

const testFinished = finishedTestResult => ({
    type: TEST_FINISHED,
    finishedTestResult
});

const testResultFetched = result => ({
    type: TEST_RESULT_FETCHED,
    fetchedTestResult: result
});

export const chooseTestLanguage = language => dispatch =>
    dispatch(testLanguageChoosed(language));

export const getTestByLanguage = language => dispatch =>
    api.test.getByLanguage(language.id).then(res => {
        dispatch(testChoosed(res));
    });

export const selectTestSelectiveModule = data => dispatch =>
    dispatch(testSelectiveModuleSelected(data));

export const orderTest = data => dispatch =>
    api.test.order(data).then((generatedTest) => {
        dispatch(testOrdered(generatedTest));
    });

export const startTest = () => dispatch => 
    new Promise((resolve, reject) => {
        resolve(dispatch(testStarted()))
    });

export const activateTestModule = testModule => dispatch =>
    dispatch(testModuleActivated(testModule));

export const displayTestModuleQuestion = question => dispatch => 
    dispatch(testModuleQuestionDisplayed(question))

export const checkTestModuleQuestionAnswer = answer => dispatch =>
    dispatch(testModuleQuestionAnswerChecked(answer));

export const removeUserVariantAnswer = userVariantId => dispatch =>
    dispatch(userVariantAnswerRemoved(userVariantId));

export const sliceAnswerFromUserAnswers = (userVariantId, answerId) => dispatch =>
    dispatch(answerSlicedFromUserAnswers(userVariantId, answerId));

export const finishTest = userAnswers => dispatch =>
    api.test.finish(userAnswers).then(finishedTestResult => dispatch(testFinished(finishedTestResult)));

export const fetchTestResult = orderId => dispatch =>
    api.test.result(orderId).then(result => dispatch(testResultFetched(result)));