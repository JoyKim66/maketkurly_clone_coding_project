
//공백확인함수 dataName에는 아이디를,비밀번호를 등등이 들어감
export const existCheck = (value,dataName) =>{
    if(value === "") {
        alert(dataName+"입력해주세요")
        return false;
    }
    return true;
}


//아이디 체크 함수
export const idCheckCM = (id) => {
    if(!existCheck(id,"아이디를"))
    return false;

    const idRegExp1 =/^[A-za-z0-9]{6,15}$/;
    const idRegExp2 = /^.*[0-9]+.*$/;
    const idRegExp3 = /^.*[a-zA-z]+.*$/;
    
    if (!(idRegExp1.test(id) && idRegExp2.test(id) && idRegExp3.test(id))){
        alert("6~12자의 영문과 숫자를 조합해야합니다")
        return false;
        }
        return true;    
    }

//비밀번호 체크 함수
export const pwCheckCM = (pw1,pw2) => {
    if(!existCheck(pw1,"비밀번호를"))
    return false;
    if(!existCheck(pw2,"비밀번호확인을"))
    return false;
    //영문/숫자/특수문자 조합 10~25자리
    const pwRegExp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{10,25}$/
    //비밀번호1 유효성 검사
    if(!pwRegExp.test(pw1)){
        console.log("비밀번호")
        alert("비밀번호는 영문/숫자/특수문자를 포함한 10~25자리로 입력해야합니다")
        return false
    }
    //비밀번호와 비밀번호 동일한지 확인
    if(pw1 !== pw2) {
        console.log(pw1,pw2)
        alert("비밀번호가 서로 일치하지 않습니다")
        return false
    }
        return true;
}

export const emailCheckCM = (email) => {
    if(!existCheck(email,"이메일을"))
    return false;

    const emailRegExp = /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;
    if(!emailRegExp.test(email)) {
        alert("이메일형식을 확인하세요");
        return false;
    }
    return true;
}


