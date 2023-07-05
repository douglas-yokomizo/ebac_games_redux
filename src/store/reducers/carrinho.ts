import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Game } from '../../App'

//aqui é preciso tipar o state como um array
type CarrinhoState = {
  itens: Game[]
}

//o initial state é um objeto do tipo CarrinhoState
const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  //aqui vai toda a mudança de estado
  reducers: {
    adicionar: (state, action: PayloadAction<Game>) => {
      const jogo = action.payload

      if (state.itens.find((game) => game.id === jogo.id)) {
        alert('item já adicionado')
      } else {
        state.itens.push(jogo)
      }
    }
  }
})

export const { adicionar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
