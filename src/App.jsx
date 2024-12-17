import { Header } from './components/Header';
import { Post } from './Post';

import './global.css';

export function App() {
	return (
		<div>
			<Header />
			<Post
				author="Victor Badaró"
				content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis reiciendis eaque a quisquam assumenda, accusamus voluptatum recusandae accusantium magni dolorum impedit excepturi laudantium id amet, provident fuga temporibus quaerat at."
			/>
			<Post
				author="John Doe"
				content="Um novo post muito legal."
			/>
		</div>
	);
}
