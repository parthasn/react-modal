import React, {useState} from "react";
import styles from "./Modal.module.css";



const Modal = ({ setIsOpen }) => {
	const [ renderLogin, setRenderLogin ] = useState(true);
	const [ renderRegister, setRenderRegister ] = useState(false);

	const handleLoginRender = () => {
		setRenderLogin(!renderLogin)
		setRenderRegister(!renderRegister)
		console.log("login", renderLogin)
		console.log("register", renderRegister)
	}

	const handleRegisterRender = () => {
		setRenderRegister(!renderRegister)
		setRenderLogin(!renderLogin)
		console.log("login", renderLogin)
		console.log("register", renderRegister)
	}
  return (
    <>
		<div className={styles.darkBG} onClick={() => setIsOpen(false)} />
		<div className={renderLogin? styles.centered1 : styles.centered2}>
				<div className={styles.modal} style={renderLogin? {height: '60vh'} : {height: '70vh'}}>
					
					<div className={styles.headDiv}>
						<div onClick={handleLoginRender} 
							style={renderLogin ? {backgroundColor: '#0a6097'} : {backgroundColor: '#0f77be'}} 
							className={styles.login}>
								Login
						</div>
						<div 
							onClick={handleRegisterRender} 
							style={renderRegister ? {backgroundColor: '#0a6097'} : {backgroundColor: '#0f77be'}}
							className={styles.register}>
								Register
						</div>
					</div>
					{
						renderLogin? (
							<div className={styles.modalActions}>
								<div className={styles.modalContent}>
									<input placeholder="Your Email" type="email"/>
									<input placeholder="Your Password" type="password"/>
									<div className={styles.loginButton}>LOG IN</div>
								</div>
								<hr/>
								<div className={styles.footer}>
									<div>
										<p>Forgot <span>Password?</span></p>
									</div>
									<div>
										<div className={styles.closeButton} onClick={() => setIsOpen(false)}>CLOSE</div>
									</div>
								</div>
							</div>
						) : renderRegister ?(
							<div className={styles.modalActions}>
								<div className={styles.modalContent}>
									<input placeholder="Your Email" type="email"/>
									<input placeholder="Your Password" type="password"/>
									<input placeholder="Repeat Password" type="password"/>
									<div className={styles.loginButton}>SIGN UP</div>
								</div>
								<hr/>
								<div className={styles.footer}>
									<div>
										<p>Forgot <span>Password?</span></p>
									</div>
									<div>
										<div className={styles.closeButton}>CLOSE</div>
									</div>
								</div>
							</div>
						): null
					}
					
					
				</div>
		</div>
    </>
  );
};

export default Modal;