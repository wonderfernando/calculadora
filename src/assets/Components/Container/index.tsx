import styles from "./Container.module.css";
import {ArrowBendDownLeft, ArrowDown, Backspace, Calculator, Clock, Divide, Function, Horse, Icon, List, Pi, PlusMinus, Radical, Triangle, X} from "@phosphor-icons/react";
import FunctionButton from "../FunctionButton";
import { ChangeEvent, useEffect, useState } from "react";
    

export type ButtonSettings = {
    value: any
    action:(e?:string)=>void
}
export default function Container(){
    const [value, setValue] = useState<string>("0");
   
    

    const buttonValues: ButtonSettings[] = [
        {
            value: "2ND",
            action: ()=>{},
            
        },{
            
            action: ()=>{},
            value: <Pi/>
        },{
            value: "e",
            action: ()=>{},
        },{
            value: "CE",
            action: ()=>{},
        },{
            action: ()=>{ setValue(oldValue => oldValue.length > 1 ? oldValue.substring(0,oldValue.length-1): "0") },
            value: <Backspace/>
        },{
            action: ()=>{},
            value: "X"
        },{
            action: ()=>{},
            value: "X"
        },{
            action: ()=>{},
            value:"X"
        },{
            action: ()=>{},
            value:"exp"
        },{
            action: ()=>{},
            value:"mod"
        },{
            action: ()=>{},
            value:<Radical/>
        },{
            action: ()=>{},
            value:"("
        },{
            action: ()=>{},
            value:")"
        },{
            action: ()=>{},
            value:"n!"
        },{
            action: ()=>{},
            value:<Divide/>
        },{
            action: ()=>{},
            value:"xy"
        },{
            action: ()=>{
                setValue(oldValue => oldValue+"7")
            },
            value:"7"
        },{
            action: ()=>{
                setValue(oldValue => oldValue+"8")
            },
            value:"8"
        },{
            action: ()=>{
                setValue(oldValue => oldValue+"9")
            },
            value:"9"
        },{
            action: ()=>{},
            value:<X/>
        },{
            action: ()=>{},
            value:"10x"
        },{
            action: ()=>{
                setValue(oldValue => oldValue+"4")
            },
            value:"4"
        },{
            action: ()=>{
                setValue(oldValue => oldValue+"5")
            },
            value:"5"
        },{
            action: ()=>{
                setValue(oldValue => oldValue+"6")
            },
            value:"6"
        },{
            action: ()=>{},
            value:"-"
        },{
            action: ()=>{},
            value:"log"
        },{
            action: ()=>{
                setValue(oldValue => oldValue+"1")
            },
            value:"1"
        },{
            action: ()=>{
                setValue(oldValue => oldValue+"2")
            },
            value:"2"
        },{
            action: ()=>{
                setValue(oldValue => value==="0" ?"3": oldValue+"3")
            },
            value:"3"
        },{
            action: ()=>{},
            value:"+"
        },{
            action: ()=>{},
            value:"ln"
        },{
            action: ()=>{},
            value:<PlusMinus/>
        },{
            action: ()=>{
                setValue(oldValue => oldValue+"0")
            },
            value:"0"
        },{
            action: ()=>{},
            value:","
        },{
            action: ()=>{},
            value:"="
        },
        
    ]

    return <div className={styles.container}>
        <div className={`${styles.flex} ${styles.topBar}`}>
             {<Calculator  color="white"/>}
            <h3> Calculadora</h3>
        </div>
        <div className={`${styles.menuArea} ${styles.flex}`}>
            <div>
                <button className={styles.menuButton}><List/></button>
                <h1>Cientifica</h1>
            </div>
            <button className={styles.historicButton}><Clock size={20}/></button>
        </div>
        <div className={styles.output} >
            
            <span style={value.length>=16 ? {fontSize:24}:   {  fontSize:28} }  >{value}</span>
        </div>
        <div className={styles.functionGroup}>
           <button className={styles.functionButton}><Triangle/> Trignometria <ArrowDown/> </button>
           <button className={styles.functionButton}><Function/> Funções <ArrowDown/></button>
        </div>
        <div className={styles.gridButton}>
            {buttonValues.map((e)=><FunctionButton settings={e.action}>{e.value}</FunctionButton>)}
        </div>
    </div>
}