// import { CalendarIcon, MapPinIcon, UsersIcon } from '@heroicons/react/20/solid'
'use client'
import { ChangeEvent, useState } from 'react'

const todos = [
  {
    id: 1,
    name: 'Learn Next.js',
    isDone: false,
  },
  {
    id: 2,
    name: 'Learn React',
    isDone: true,
  },
  {
    id: 3,
    name: 'Start new sideproject ',
    isDone: false,
  },
]

export default function Example() {
  const [name, setName] = useState('')
  const [todoList, settodoList] = useState(todos)
  const UpdateTodo = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    settodoList((current) =>
      current.map((todo) => {
        if (todo.name === value) {
          return { ...todo, isDone: !todo.isDone }
        }

        return todo
      })
    )
  }
  const DeleteTodo = (id: number) => {
    settodoList((current) =>
      current.filter((todo) => {
        return todo.id !== id
      })
    )
  }

  const addTodo = () => {
    if (name.length > 0) {
      settodoList([
        ...todoList,
        {
          id: todoList.length + 1,
          name,
          isDone: false,
        },
      ]),
        setName('')
    }
  }
  return (
    <div className='grid h-screen place-content-center overflow-hidden shadow sm:rounded-md'>
      <h1 className='mb-5 text-center text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:tracking-tight'>
        Simple Todo App
      </h1>
      <div className='mt-1 mb-5 flex rounded-md shadow-sm'>
        <div className='relative flex flex-grow items-stretch rounded-lg border border-gray-400 focus-within:z-10'>
          <input
            type='email'
            onKeyDown={(e) => e.key === 'Enter' && addTodo()}
            name='email'
            id='email'
            className='block w-full  rounded-l-md border-gray-300 pl-5 pr-5 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
            placeholder='ENTER TODO'
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <button
          onClick={() => addTodo()}
          type='button'
          className='relative -ml-px inline-flex items-center space-x-2 rounded-r-md border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500'
        >
          <span>ADD TODO</span>
        </button>
      </div>
      <ul role='list' className='divide-y divide-gray-200'>
        {todoList.map((todo) => (
          <li key={todo.id}>
            <div className='px-4 py-4 sm:px-6'>
              <div className='flex '>
                <div>
                  <input
                    type='checkbox'
                    id={'checkBox_ID:' + todo.id}
                    name='topping'
                    checked={todo.isDone}
                    onChange={(e) => UpdateTodo(e)}
                    value={todo.name}
                    className=' text-sm font-medium text-indigo-600'
                  />
                </div>
                <label
                  className={`relative after:absolute after:left-0 after:top-[50%] after:ml-1 after:h-[2px]  ${
                    todo.isDone ? 'after:w-full' : 'after:w-[0%]'
                  } after:rounded-xl after:bg-black after:duration-300`}
                >
                  &nbsp;{todo.name}
                </label>
                <div className='ml-auto flex flex-shrink-0 pl-3'>
                  <p
                    className={`inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 ${
                      todo.isDone
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    } `}
                  >
                    {todo.isDone ? 'Completed' : 'TODO'}
                  </p>
                  <button
                    className='text-red-500'
                    onClick={() => DeleteTodo(todo.id)}
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='h-6 w-6'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
