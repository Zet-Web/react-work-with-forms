export const validate = (element) => {
  let error = [true, ''];

  if (element.validation.required) {
    const valid = element.value.trim() !== '';
    const message = `${!valid ? 'This field is required' : ''}`;
    error = !valid ? [valid, message] : error;
  }

  if (element.validation.minNum) {
    const valid = parseInt(element.value.trim()) >= element.validation.minNum;
    const message = `${
      !valid ? `Sorry , the minimum age is ${element.validation.minNum}` : ''
    }`;
    error = !valid ? [valid, message] : error;
  }
  return error;
};
