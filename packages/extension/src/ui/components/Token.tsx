import { BigNumber } from "@ethersproject/bignumber"
import { FC } from "react"
import styled, { css, keyframes } from "styled-components"

import { TokenDetailsWithBalance } from "../states/tokens"
import { makeClickable } from "../utils/a11y"
import { toTokenView } from "../utils/tokens"
import { IconButton } from "./IconButton"
import { TokenIcon } from "./TokenIcon"

export const TokenWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 24px;
  cursor: pointer;

  transition: all 200ms ease-in-out;

  &:hover,
  &:focus {
    outline: 0;
    background: rgba(255, 255, 255, 0.05);
  }
`

export const TokenDetailsWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const TokenTextGroup = styled.div`
  display: flex;
  flex-direction: column;
`

export const TokenTitle = styled.h3`
  font-weight: 600;
  font-size: 17px;
  line-height: 22px;
  margin: 0;
`
export const TokenMetaContainer = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  /* number of lines to show */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  line-clamp: 2;
`

export const TokenMeta = styled.p`
  font-size: 13px;
  line-height: 18px;
  color: #8f8e8c;
  margin: 0;
`

const PulseAnimation = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`

export const TokenBalance = styled.p<{
  isLoading?: boolean
}>`
  font-weight: 600;
  font-size: 17px;
  line-height: 22px;
  text-align: right;
  max-width: 64px;
  min-width: 52px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  opacity: 1;
  ${({ isLoading }) =>
    isLoading &&
    css`
      animation: ${PulseAnimation} 1s ease-in-out infinite;
    `}
`

export const AddTokenIconButton = styled(IconButton)`
  &:hover,
  &:focus {
    background-color: rgba(255, 255, 255, 0.15);
    outline: 0;
  }
`

export type TokenAction =
  | { type: "MINT"; amount: BigNumber }
  | { type: "TRANSFER"; to: string; amount: BigNumber }

interface TokenListItemProps {
  token: TokenDetailsWithBalance
  isLoading?: boolean
  onClick?: () => void
}

export const TokenListItem: FC<TokenListItemProps> = ({
  token,
  isLoading = false,
  onClick,
  ...props
}) => {
  const { name, symbol, balance, image } = toTokenView(token)
  return (
    <TokenWrapper {...makeClickable(onClick)} {...props}>
      <TokenIcon url={image} name={name} />
      <TokenDetailsWrapper>
        <TokenTextGroup>
          <TokenTitle>{symbol}</TokenTitle>
          <TokenMetaContainer>
            <TokenMeta>{name}</TokenMeta>
          </TokenMetaContainer>
        </TokenTextGroup>
        <TokenBalance isLoading={isLoading}>{balance}</TokenBalance>
      </TokenDetailsWrapper>
    </TokenWrapper>
  )
}
