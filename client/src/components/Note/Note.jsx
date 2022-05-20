import './Note.css'

export function Note({note, toggleImportance}) {
	const label = note.important ? 'make not important' : 'make important';

	return (
		<li className='Note'>
			<div>
				{note.content}
			</div>
			<button onClick={toggleImportance}>{label}</button>
		</li>
	)
}
