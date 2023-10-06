import { useRef, useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCredentials } from "./authSlice";
import { useLoginMutation } from "./authApi";


const Login = () => {
    const useRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setpwd] = useState('');
    const [errMsg, seterrMsg] = useState('');

    const navigate = useNavigate();

    return (
        <div>
            Login
        </div>
    );
};


export default Login;
