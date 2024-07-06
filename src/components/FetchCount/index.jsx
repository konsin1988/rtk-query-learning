import React from 'react'
import classes from './style.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { setLimit } from './../../redux/slices/goodsSlice'

const FetchCount = () => {
    const dispatch = useDispatch()

    const onChangeHandler = (e) => {
        dispatch(setLimit(e.target.value))
    }

  return (
    <div className={classes.main}>
        <select value={useSelector(state => state.goods.limit)} onChange={ onChangeHandler } className={classes.text}>
          <option value="">all</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
  )
}

export {FetchCount}