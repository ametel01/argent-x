import { FC } from "react"
import styled from "styled-components"

const UpdateBannerWrapper = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  padding: 16px;
  background-color: #ffffff;
  border-radius: 8px;
  margin: 16px 20px;
`

const UpdateTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
`

const UpdateBannerTitle = styled.h1`
  color: black;
  margin: 0;
  font-weight: 600;
  font-size: 17px;
  line-height: 22px;
`

const UpdateBannerDescription = styled.p`
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  color: #8f8e8c;
`

interface UpdateBannerProps {
  onClick: () => void
}

export const UpdateBanner: FC<UpdateBannerProps> = ({ onClick }) => {
  return (
    <UpdateBannerWrapper onClick={onClick}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path
            d="M12 0C9.62663 0 7.30655 0.703788 5.33316 2.02236C3.35977 3.34094 1.8217 5.21509 0.913451 7.4078C0.00519943 9.60051 -0.232441 12.0133 0.230582 14.3411C0.693605 16.6689 1.83649 18.8071 3.51472 20.4853C5.19295 22.1635 7.33115 23.3064 9.65892 23.7694C11.9867 24.2324 14.3995 23.9948 16.5922 23.0866C18.7849 22.1783 20.6591 20.6402 21.9776 18.6668C23.2962 16.6935 24 14.3734 24 12C23.9966 8.81846 22.7312 5.76821 20.4815 3.51852C18.2318 1.26883 15.1815 0.00344108 12 0V0ZM17.207 13.707L12.707 18.207C12.5195 18.3945 12.2652 18.4998 12 18.4998C11.7348 18.4998 11.4805 18.3945 11.293 18.207L6.793 13.707C6.61085 13.5184 6.51005 13.2658 6.51233 13.0036C6.51461 12.7414 6.61978 12.4906 6.80519 12.3052C6.99059 12.1198 7.24141 12.0146 7.5036 12.0123C7.7658 12.01 8.0184 12.1108 8.207 12.293L10.573 14.659C10.6081 14.6942 10.6529 14.7181 10.7016 14.7277C10.7503 14.7373 10.8008 14.7322 10.8467 14.713C10.8925 14.6938 10.9315 14.6614 10.9589 14.6199C10.9862 14.5784 11.0005 14.5297 11 14.48V6C11 5.73478 11.1054 5.48043 11.2929 5.29289C11.4804 5.10536 11.7348 5 12 5C12.2652 5 12.5196 5.10536 12.7071 5.29289C12.8946 5.48043 13 5.73478 13 6V14.48C12.9999 14.5295 13.0145 14.5779 13.042 14.6191C13.0695 14.6603 13.1085 14.6924 13.1543 14.7114C13.2 14.7304 13.2503 14.7353 13.2989 14.7256C13.3475 14.7159 13.392 14.6921 13.427 14.657L15.793 12.291C15.9816 12.1088 16.2342 12.008 16.4964 12.0103C16.7586 12.0126 17.0094 12.1178 17.1948 12.3032C17.3802 12.4886 17.4854 12.7394 17.4877 13.0016C17.49 13.2638 17.3892 13.5164 17.207 13.705V13.707Z"
            fill="#FF875B"
          />
        </g>
        <defs>
          <clipPath id="clip0_1018_10395">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>

      <UpdateTextWrapper>
        <UpdateBannerTitle>Update Available</UpdateBannerTitle>
        <UpdateBannerDescription>
          This may have breaking changes
        </UpdateBannerDescription>
      </UpdateTextWrapper>
    </UpdateBannerWrapper>
  )
}
