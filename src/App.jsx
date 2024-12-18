import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './Post';

import styles from './App.module.css';
import './global.css';

export function App() {
	return (
		<div>
			<Header />

			<div className={styles.wrapper}>
				<Sidebar />

				<main>
					<Post
						author="Victor Badaró"
						content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis reiciendis eaque a quisquam assumenda, accusamus voluptatum recusandae accusantium magni dolorum impedit excepturi laudantium id amet, provident fuga temporibus quaerat at."
					/>
					<Post
						author="John Doe"
						content="Um novo post muito legal."
					/>
				</main>
			</div>
		</div>
	);
}
