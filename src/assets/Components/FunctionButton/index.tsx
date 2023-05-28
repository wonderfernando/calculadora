import { ButtonSettings } from "../Container";
import styles from "../FunctionButton/FunctionButton.module.css";
export default function FunctionButton({children, settings} : {children:React.ReactNode, settings: ()=>void}) {
    
    return (
        <button className={styles.functionButton} onClick={settings}>{children}</button>
    )
}