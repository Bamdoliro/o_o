import styled from "styled-components"

export const MainContent = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 65%;
  display: flex;
  justify-content: flex-start;
  overflow: hidden;
`
export const BlueCircle = styled.div`
  position: absolute;
  right: -10%;
  width: 670px;
  height: 670px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: var(--navy, #6699ED);
  backdrop-filter: blur(4px);
`
export const Content = styled.p`
  color: var(--white, #FFF);
  font-size: 22px;
  font-weight: 500;
  padding-top: 170px;
  padding-left: 120px;
  width: 500px;
  white-space: pre-line;
`
export const MonthButtonLayout = styled.div`
  display: flex;
  height: 400px;
  width: 140px;
  margin-left: 11%;
  gap: 20px;
`
export const MonthsButton = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  height: 400px;
  gap: 10px;
  position: relative;
`
export const MonthButton = styled.button`
  width: 122px;
  height: 122px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: var(--white, #FFF);
  box-shadow: 1px 3px 5px 2px rgba(128, 124, 124, 0.20);
  border: none;
  position: relative;
`
export const Month = styled.p`
  color: var(--grey3, #3E3D3F);
  font-size: 60px;
  font-weight: 700;
`
export const CheckIcon = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
`