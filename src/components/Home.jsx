import FastTabButtons from "./FastTabButtons";

export default function Home({ state, changePage }) {
  return (
    <>
      <FastTabButtons state={state} changePage={changePage} />
    </>
  )
}