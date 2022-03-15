marked.setOptions({
	breaks: true,
});

const renderer = new marked.Renderer();
// const editor = ({content}) => <textarea value={content} />

function App() {
	const [text, setText] = React.useState(defaultText);
	return (
		<body>
		<div className="text-center px-4">
		<h1 className="p-4">My Markdown Previewer</h1>
		<textarea
			// content={defaultText}
			name="text" 
			id="editor"
			rows="10"
			value={text}
			onChange={(e) => setText(e.target.value)}
			className="textarea">
			
		</textarea>
		<h3 className="mt-3">Output</h3>
		<Preview markdown={text}/>
		</div>
		</body>
		);
	}

function Preview({ markdown }) {
	return (
	<div
	dangerouslySetInnerHTML={{
		__html: marked(markdown, { renderer: renderer }),
	}}
	id="preview"
	></div>
	);
}


const defaultText = "# This is a markdown previewer \n## This is a smaller header. \n### Even smaller now. \nHere's what some code looks like `<div>Hey!</div>`\n``` //Here's some multi-line code. \n function anotherExample(firstLine, lastLine) {\n if (firstLine == '```' && lastLine == '```') {\n return multiLineCode;\n}\n}\n```\n**bold text is cool.**\n1. this \n2. is \n3. how \n4. we make lists \n- or unordered? \n- lists are cool \n> how about block quotes? \ndo you like dumplings? \n![dumplings](https://i3.lensdump.com/i/rFEbe3.md.jpg) \n[check out my other work](https://codepen.io/amoores)"

ReactDOM.render(<App />, document.getElementById("root"));

