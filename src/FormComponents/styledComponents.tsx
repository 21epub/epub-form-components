import styled from 'styled-components'
import store from './store'

export interface StyledProps {
  styled?: string
}

// 设置全局样式保存到store中
const setGlobalStyled = (styledValue: string) => {
  store.reducers.updateGlobalStyled(styledValue)
}

// 示例，直接传less格式的style字符串
// setGlobalStyled(`
//   color: red;
//   .ant-list {
//     margin-top: 100px;
//     color:orange;
//   }
// `)

// 使用styled-componends创建样式组件
const Wrapper = styled.div((props: StyledProps) => props.styled)

export default Wrapper
export { setGlobalStyled }
