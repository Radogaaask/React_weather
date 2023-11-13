import React from 'react'
import s from './Home.module.scss'
import { ThisDay } from './ThisDay/ThisDay'


interface Props {

}

export const Home = (props: Props) => {
  return (
    <div className={s.home}>
      <ThisDay />
    </div>
  )
}