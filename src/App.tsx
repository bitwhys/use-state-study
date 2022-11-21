import { useState } from 'react'
import TutorialHeader from './components/TutorialHeader'
import clsx from 'clsx'
import Alert from './components/Alert'

const Title = () => <div className="h-4 w-20 rounded bg-zinc-700"></div>
const Action = ({ onAction, intent }) => (
  <button
    title={intent === 'positive' ? 'positive action' : 'negative action'}
    className={clsx(
      'h-6 w-6 rounded ',
      intent === 'positive' ? 'bg-zinc-300' : 'bg-zinc-400'
    )}
    onClick={onAction}
  ></button>
)

const ListItem = () => (
  <li className="flex w-full items-start space-x-3">
    <span className="inline-block h-2.5 w-2.5 rounded-full border-2 border-amber-300"></span>
    <div className="flex w-full flex-col space-y-2">
      <span className="inline-block h-3 w-20 rounded-sm bg-zinc-200"></span>
      <span className="inline-block h-3 w-full rounded-sm bg-zinc-200"></span>
    </div>
  </li>
)
function App() {
  const [state, setState] = useState([1, 2, 3, 4])
  const handleAction = () => {}
  return (
    <div className="flex h-full flex-col items-center justify-center space-y-4">
      <TutorialHeader
        title="React useState study"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad cupiditate dolorum ex iusto nulla provident quis sunt unde!"
        color="text-cyan-400"
      />

      <div className="flex h-[418px] w-[612px] flex-col border border-zinc-300 bg-white px-6 pt-7 pb-8 shadow">
        <header className="flex items-center justify-between border-b border-zinc-300 pb-5">
          <Title />
          <div className="flex items-center space-x-3">
            <Action onAction={handleAction} intent="positive" />
            <Action onAction={handleAction} intent="negative" />
          </div>
        </header>
        <ol className="mt-8 flex w-full flex-col space-y-8 overflow-y-scroll">
          {state.map(item => (
            <ListItem />
          ))}
        </ol>
      </div>
      <Alert />
    </div>
  )
}

export default App
