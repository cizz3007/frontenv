import {isEmpty} from 'lodash';

export class Validator {

  static checkPhoneKr(value) {
    const regExp = /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})([0-9]{3,4})([0-9]{4})$/;
    return regExp.test(value);
  }

  static checkEmail(value) {
    const regExp = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
    return regExp.test(value);
  }

  static checkPassword(value) {
    const regExp = /^.*(?=.{8,20})(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[\s!@#$%^&*()_+=-`~\\\]\[{}|';:/.,?><]).*$/;
    return regExp.test(value);
  }

  static checkNumber(value) {
    const regExp = /^[0-9]*$/gi;
    return regExp.test(value);
  }

  //스페이스는 허용한다.
  static checkString(value) {
    const regExp = /^[가-힣|a-z|A-Z|\*\s]+$/;
    return regExp.test(value);
  }

  //닉네임은 한글 1~8자, 영문 1~16자
  static checkNickname(value) {
    const regExp = /^[가-힣|a-z|A-Z|0-9|\*]+$/;
    return regExp.test(value);
  }

  //파일명 (유니코드  일본어,한자,한글)체크
  static checkFilename(value) {
    const regExp = /[^\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\uff66-\uff9f\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/g;
    return regExp.test(value);
  }

  //영문,한글,한자,일본어만 허용
  static checkHashtagRule(value) {
    const regExp = /^[ㄱ-ㅎㅏ-ㅣ가-힣|a-z|A-Z|0-9|\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf|\-_[\]]+$/;
    return regExp.test(value);
  }

  //숫자 소수점 확인
  static checkFloat(value) {
    const regExp = /^([0-9]*)[\.]?([0-9])?$/;
    return regExp.test(value);
  }

  //정수 1~3자리 확인, 소수점 2자리까지 확인
  static checkFloatDoublePoint(value) {
    const regExp = /^(\d{1,3}([.]\d{0,2})?)?$/;
    return regExp.test(value);
  }

  //빈값인지 확인(boolean체크 안함)
  static isEmpty(value) {
    console.log(value)
    return typeof value === 'boolean' || !value || false || (typeof value === "object" && !Object.keys(value).length) ||  value.trim().length === 0;
  }

  //적합한 성별인지 확인
  static checkValidGender(stringValue) {
    return stringValue !== null && typeof stringValue !== "undefined" && typeof stringValue === "string" && stringValue.toLowerCase() === ('f' || 'm')
  }

  //적합한 생년월일 유형인지 확인{object}
  static checkValidBirthDay(objectValue) {
    return objectValue !== null && typeof objectValue !== "undefined" && typeof objectValue === "object" && (objectValue.year && objectValue.month && objectValue.date)
  }

  //비교대상과 생년월일이 같은 지 확인
  static isEqualBirthDay(birthday, birthday2) {
    return JSON.stringify(birthday) === JSON.stringify(birthday2)
  }

  //적합한 혈액형인지 확인
  static checkBloodType(bloodType) {
    try {
      if (this.isEmpty(bloodType)) {
        throw 'emptyBloodType';
      }
      const arr = ['a', 'o', 'b', 'ab'];
      return arr.includes(bloodType.toLowerCase());
    } catch (e) {
      console.warn(e);
    }
  }

  static handleKeyDown(e) {
    let key;
    if (window.event)
      key = window.event.keyCode; //IE
    else
      key = e.which; //firefox
    let event;
    if (key === 0 || key === 8 || key === 46 || key === 9) {
      event = e || window.event;
      if (typeof event.stopPropagation !== "undefined") {
        event.stopPropagation();
      } else {
        event.cancelBubble = true;
      }
      return;
    }
    if (key < 48 || (key > 57 && key < 96) || key > 105 || e.shiftKey) {
      e.preventDefault ? e.preventDefault() : e.returnValue = false;
    }
  }

  static handleKeyUp(e) {
    let key;
    if (window.event)
      key = window.event.keyCode; //IE
    else
      key = e.which; //firefox
    let event;
    event = e || window.event;
    if (key === 8 || key === 46 || key === 37 || key === 39) {
      return;

    } else {
      event.target.value = event.target.value.replace(/[^0-9]/g, "");

    }
  }

  static handleBlur(ele) {
    ele.value = ele.value.replace(/[^0-9]/g, "");
  }
}

