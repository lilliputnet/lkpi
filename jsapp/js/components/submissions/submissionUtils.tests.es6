import {
  simpleSurvey,
  simpleSurveyChoices,
  simpleSurveySubmission,
  simpleSurveyDisplayData,
  simpleSurveySubmissionEmpty,
  simpleSurveyDisplayDataEmpty,
  repeatSurvey,
  repeatSurveySubmission,
  repeatSurveyDisplayData,
  nestedRepeatSurvey,
  nestedRepeatSurveySubmission,
  nestedRepeatSurveyDisplayData,
  matrixSurvey,
  matrixSurveyChoices,
  matrixSurveySubmission,
  matrixSurveyDisplayData,
  groupsSurvey,
  groupsSurveyChoices,
  groupsSurveySubmission,
  groupsSurveyDisplayData,
  everythingSurvey,
  everythingSurveyChoices,
  everythingSurveySubmission,
  everythingSurveyDisplayData,
  matrixRepeatSurvey,
  matrixRepeatSurveyChoices,
  matrixRepeatSurveySubmission,
  matrixRepeatSurveyDisplayData,
  submissionWithAttachmentsWithUnicode,
} from './submissionUtils.mocks';
import {getValidFilename, getMediaAttachment, getSubmissionDisplayData} from './submissionUtils';

describe('getSubmissionDisplayData', () => {
  it('should return a valid data for a survey with a group', () => {
      const test = getSubmissionDisplayData(simpleSurvey, simpleSurveyChoices, 1, simpleSurveySubmission).children;
      const target = simpleSurveyDisplayData;
      expect(test).to.deep.equal(target);
  });

  it('should return a null data entries for a survey with no answers', () => {
      const test = getSubmissionDisplayData(simpleSurvey, simpleSurveyChoices, 0, simpleSurveySubmissionEmpty).children;
      const target = simpleSurveyDisplayDataEmpty;
      expect(test).to.deep.equal(target);
  });

  it('should return a valid data for a survey with a repeat group', () => {
      const test = getSubmissionDisplayData(repeatSurvey, null, 0, repeatSurveySubmission).children;
      const target = repeatSurveyDisplayData;
      expect(test).to.deep.equal(target);
  });

  it('should return a valid data for a survey with nested repeat groups', () => {
      const test = getSubmissionDisplayData(nestedRepeatSurvey, null, 0, nestedRepeatSurveySubmission).children;
      const target = nestedRepeatSurveyDisplayData;
      expect(test).to.deep.equal(target);
  });

  it('should return a valid data for a survey with a matrix', () => {
      const test = getSubmissionDisplayData(matrixSurvey, matrixSurveyChoices, 0, matrixSurveySubmission).children;
      const target = matrixSurveyDisplayData;
      expect(test).to.deep.equal(target);
  });

  it('should return a valid data for a survey with all kinds of groups', () => {
      const test = getSubmissionDisplayData(groupsSurvey, groupsSurveyChoices, 0, groupsSurveySubmission).children;
      const target = groupsSurveyDisplayData;
      expect(test).to.deep.equal(target);
  });

  it('should return a valid data for every possible question type', () => {
      const test = getSubmissionDisplayData(everythingSurvey, everythingSurveyChoices, 0, everythingSurveySubmission).children;
      const target = everythingSurveyDisplayData;
      expect(test).to.deep.equal(target);
  });

  it('should return a valid data for a matrix group inside repeat group', () => {
      const test = getSubmissionDisplayData(matrixRepeatSurvey, matrixRepeatSurveyChoices, 0, matrixRepeatSurveySubmission).children;
      const target = matrixRepeatSurveyDisplayData;
      expect(test).to.deep.equal(target);
  });
});

describe('getValidFilename', () => {
  it('should return a file name which matches Django renaming', () => {
    const fileName = submissionWithAttachmentsWithUnicode.A_picture;
    const test = getValidFilename(fileName);
    const target = 'Un_ete_au_Quebec_Canada-19_41_32.jpg';
    expect(test).to.equal(target);
  });
});

describe('getMediaAttachment', () => {
  it('should return an attachment object', () => {
    const fileName = submissionWithAttachmentsWithUnicode.A_picture;
    const test = getMediaAttachment(submissionWithAttachmentsWithUnicode, fileName);
    const target = submissionWithAttachmentsWithUnicode._attachments[0];
    expect(test).to.deep.equal(target);
  });
});
