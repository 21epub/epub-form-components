import RxjsStore, { RxjsStoreReducerParams } from '@21epub/react-rxjs-store'

interface State {
  styled: string
}

// 初始值
const initState: State = {
  styled: ''
}

// Reducers Types definition (Recommanded)
interface Reducers<S> extends RxjsStoreReducerParams<S> {
  updateGlobalStyled: (state: S, payload?: string) => S
}

const reducers: Reducers<State> = {
  // 设置全局样式
  updateGlobalStyled(state, payload = '') {
    return { ...state, styled: payload }
  }
}

export default new RxjsStore<State, Reducers<State>>(initState, reducers)
