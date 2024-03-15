import { Button } from "../components/Button.jsx";
import { Inputbox } from "../components/Inputbox.jsx";
import { Heading } from "../components/Heading.jsx";
import { SubHeading } from "../components/SubHeading.jsx";
import { Warning } from "../components/Warning.jsx";
import { useState } from "react";


export const Signup = () => {
    const firstname = useState("");
    const lastname = useState("");
    const Password = useState("");
    const email = useState("");


    return<>
    <div className="bg-slate-300 h-screen flex justify-center" >
        <div className="flex flex-col justify-center">
            <div  className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">


                <Heading label={"Sign up"}/>
                <SubHeading label={"enter your details to acces your account"}/>
                <Inputbox onchange ={(e) => {firstname.SetState(e.target.value)}}  label={"First Name"} placeholder="First Name"/>
                <Inputbox onchange ={(e) => {lastname.SetState(e.target.value)}} label={"Last Name"} placeholder="Last Name"/>
                <Inputbox onchange ={(e) => {email.SetState(e.target.value)}} label={"Email"} placeholder="Email"/>
                <Inputbox onchange ={(e) => {Password.SetState(e.target.value)}} label={"Password"} placeholder="Password"/>

                <div className="p-4"> <Button onchange={(e => {})} label={"sign up"}/> </div>
                <Warning label={"Already  have an account ?"} buttonname={"sign in"} to={"/Signin"} />

            </div>
        </div>
    </div>
    </>
}


