import { useDispatch, useSelector } from 'react-redux'
import { useMemo } from 'react'
import { bindActionCreators } from '@reduxjs/toolkit'
import { todosSlice } from '../store/todo/todo.slice'
export const useActions = () => {
    const dispatch = useDispatch()
    const actions = todosSlice.actions

    return useMemo(() => bindActionCreators(actions, dispatch), [dispatch])
}
