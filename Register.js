import { useState,useRef,useEffect } from "react";

let USER = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
let PWD = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

function Register(){
    let userRef = useRef();
    let errRef = useRef();

    let [user,setUser] = useState('');
    let [validname,setValidname] = useState(false);
    let [userFocus,setUserfocus] = useState(false);

    let [pwd,setpwd] = useState('');
    let [validpwd,setValidpwd] = useState(false);
    let [pwdFocus,setPwdfocus] = useState(false);

    let [matchPwd,setMatchPwd] = useState('');
    let [validmatch,setValidmatch] = useState(false);
    let [matchFocus,setMatchfocus] = useState(false);

    let [errMsg,setErrMsg] = useState('');
    let [success,setSuccess] = useState(false);
   
    useEffect(()=>{
        
        useRef.current.focus()
        
    },[])

    useEffect(()=>{
        let result = USER.test(user);
        console.log(result);
        console.log(user);
        setValidname(result);
    },[user])

    useEffect(()=>{
        let result = PWD.test(pwd);
        console.log(result);
        console.log(pwd);
        setValidpwd(result);
        let match = pwd === matchPwd;
        setValidmatch(match);
    },[pwd,matchPwd])

    useEffect(()=>{
        setErrMsg('');
    },[user, pwd, matchPwd])

    return (
        <section>
            <p ref={errRef} className={errMsg ? "errmsg" :
            "offscreen"} aria-live="assertive">{errMsg}</p>
            <h1>Register</h1>
            <form>
                <label id="username">
                    username:
                </label>
                <input 
                    type="text"
                    id="username"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    required
                    aria-invalid={validname ? "false" : "true"}
                    aria-describedby="uidnote"
                    onFocus={() => setUserfocus(true)}
                    onBlur={() => setUserfocus(false)}
                />
                <p id="uidnote" className={userFocus && user && !validname ? "instructions" : "offscreen"}>
                    4 to 24 characters.<br />
                    Must begin with a letter.<br />
                    Letters, Numbers, Underscore, Hyphens allowed.
                </p>
            </form>
        </section>
    )   
};
export default Register;
