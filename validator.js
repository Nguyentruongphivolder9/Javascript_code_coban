// Đối tượng (Validator)

function Validator(options) {

    function getParent(element, selector) {
        while (element.parentElement){
            if (element.parentElement.matches(selector)){
                return element.parentElement;
            }
            element = element.parentElement;
        }
    }

    var selectorRule = {};

    function validate(inputElement, rule) {
        var errorMessage;
        var parentElement = getParent(inputElement, options.formGroupSelector)
        var errorElement = parentElement.querySelector(options.errorSelectors)

        // Lấy ra các rules của selector
        var rules = selectorRule[rule.selector]
        // Lặp ra từng rules và kiểm tra
        // Nếu có lỗi thì dừng việc kiểm tra
        for (var i = 0; i < rules.length; i++) {
            switch(inputElement.type){
                case 'radio':
                    errorMessage = rules[i](
                        formElement.querySelector(rule.selector + ':checked')
                    );
                    break;
                case 'checkbox':
                    errorMessage = rules[i](
                        formElement.querySelector(rule.selector + ':checked')
                    );
                    break;
                default:
                    errorMessage = rules[i](inputElement.value)
            }
            if(errorMessage) break;
        }

        if (errorMessage) {
            errorElement.innerText = errorMessage
            parentElement.classList.add('invalid')
        } else {
            errorElement.innerText = ''
            parentElement.classList.remove('invalid')
        }

        return !errorMessage;
    }

    // Lấy element của form
    var formElement = document.querySelector(options.form)
    if (formElement) {
        // Khi submit form
        formElement.onsubmit = (e) => {
            e.preventDefault();

            var isFormValid = true;
            // Lặp qua từng rules và validate
            options.rules.forEach((rule) => {
                var inputElement = formElement.querySelector(rule.selector);
                var isValid = validate(inputElement, rule);
                if(!isValid){
                    isFormValid = false;
                }
            });

            if(isFormValid) {
                // Trường hợp submit với javascript
                if(typeof options.onSubmit === 'function') {

                    var enableInputs = formElement.querySelectorAll('[name]:not([disabled])')
                    var formValues = Array.from(enableInputs).reduce((values, input) => {
                        switch(input.type){
                            case 'radio':
                                values[input.name] = formElement.querySelector('input[name="' + input.name +'"]:checked').value;
                                break;
                            case 'checkbox':
                                if(!input.matches(':checked')) {
                                    values[input.name] = []
                                    return values
                                };
                                if(!Array.isArray(values[input.name])){
                                    values[input.name] = []
                                }
                                values[input.name].push(input.value)
                                break;
                            case 'file':
                                values[input.name] = input.files
                                break;
                            default:
                                values[input.name] = input.value
                        }
                        return values;
                    }, {})

                    options.onSubmit(formValues);
                }
                // Trường hợp submit với hành vi mặc định
                else {
                    formElement.submit();
                }
            } 
        }


        // Lăp qua mỗi rule và xử lý (lắng nghe event blur, input,...)
        options.rules.forEach((rule) => {
            // Lưu lại các rules cho mỗi input
            if (Array.isArray(selectorRule[rule.selector])) {
                selectorRule[rule.selector].push(rule.test)
            } else {
                selectorRule[rule.selector] = [rule.test]
            }

            var inputElements = formElement.querySelectorAll(rule.selector);

            Array.from(inputElements).forEach((inputElement) => {

                if (inputElement) {
                    // Xử lý trường hợp blur khỏi input
                    inputElement.onblur = () => {
                        validate(inputElement, rule)
                    }
    
                    //Xử lý mỗi khí người dùng nhập input
                    inputElement.oninput = () => {
                        var parentElement = getParent(inputElement, options.formGroupSelector)
                        var errorElement = parentElement.querySelector(options.errorSelectors)
                        errorElement.innerText = ''
                        parentElement.classList.remove('invalid')
                    }
                }
            });
        });
    }
}

// Định nghĩa rules

Validator.isRequired = (selector, message) => {
    return {
        selector: selector,
        // function dùng để kiểm tra
        test: (value) => {
            return value ? undefined : message || 'Vui lòng nhập trường này'
        }
    }
}
Validator.isFullname = (selector, min, message) => {
    return {
        selector: selector,
        // function dùng để kiểm tra
        test: (value) => {
            return value.length >= min ? undefined : message
        }
    }
}
Validator.isEmail = (selector, message) => {
    return {
        selector: selector,
        // function dùng để kiểm tra
        test: (value) => {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : message || 'Vui lòng nhập email'
        }
    }
}
Validator.minLength = (selector, min, message) => {
    return {
        selector: selector,
        // function dùng để kiểm tra
        test: (value) => {
            return value.length >= min ? undefined : message || `Vui lòng nhập tối thiểu ${min}`
        }
    }
}
Validator.isConfirmed = (selector, getConfirmValue, message) => {
    return {
        selector: selector,
        // function dùng để kiểm tra
        test: (value) => {
            return value === getConfirmValue() ? undefined : message || 'Giá trị nhập vào không chính xác'
        }
    }
}