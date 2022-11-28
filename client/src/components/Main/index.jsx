import styles from "./styles.module.css";

const Main = () => {

	const user = localStorage.getItem("token");

	let name = "";
		if (user){
			name = "Registered User" // later we can figure out how to use actual name here instead 
		}
		else{
			name = "Guest"
		}
	

	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location = "/login";
	};

	const handleRegister = () => {
		window.location = "/signup";
	}

	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>Welcome {name}</h1>
				{ user && <button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>}
			{	!user && <button className={styles.white_btn} onClick={handleRegister}>
					Register
				</button>}
			</nav>
		</div>
	);
};

export default Main;
