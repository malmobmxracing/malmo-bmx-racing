import React from 'react'
import { styled } from "@mui/material/styles";
// import { Link } from 'gatsby'


const Footer = class extends React.Component {
  render() {
    return (
      <StyledFooter>
        <Header>
        Sammarbetspartners:
        </Header>
        <Row>
        <a href='https://www.lyft-byggmaskiner.se/kontakt/malmo/' target='_blank'><Logo src="/img/logo_lbm.png" /></a>
        <a href='https://malmo.se/' target='_blank'><Logo src="/img/logo_malmo.png" /></a>
        <a href='https://storbildsbolaget.se/' target='_blank'><Logo src="/img/logo_sbb.png" /></a>
        <a href='https://www.miljofabriken.com/' target='_blank'><Logo src="/img/miljofabriken.png" /></a>
        <a href='https://www.ahekonomi.se/' target='_blank'><Logo src="/img/Åkerblom & Hansson Ekonomi & Skattekonsult AB Horisontell.jpg" /></a>
        <a href='https://rsa-gruppen.se/' target='_blank'><Logo src="/img//RSA.jpg" /></a>
        <a href='www.grus.nu/' target='_blank'><Logo src="/img/Nordanå Grusterminal.jpg" /></a>
        <a href='https://blueandyellow.se/sv//' target='_blank'><Logo src="/img/Blue n Yellow.jpg" /></a>
        <a href='/' target='_blank'><Logo src="/img/Önnerups Schakt & Gräv copy.jpg" /></a>
        <a href='/' target='_blank'><Logo src="/img/flackarps-maskinstation-rund-650x650.png" /></a>
        <a href='https://golvbolaget.com/' target='_blank'><Logo src="/img/Outlook-ekzbcbdd (1).png" /></a>
        <a href='https://sprinklersolid.se/' target='_blank'><Logo src="/img/logga jpeg.JPG" /></a>
        <a href='https://guldkanalen.se/' target='_blank'><Logo src="/img/Guldkanalen.jpg" /></a>
        <a href='https://jonab.se/' target='_blank'><Logo src="/img/Jonab.jpg" /></a>
        </Row>
      </StyledFooter>
    )
  }
}



const StyledFooter = styled('div')(
  () => `
    border-top: 5px solid #08354e;
    margin-bottom: 40px; 
    padding: 15px 30px 25px 30px;
`)

const Logo = styled('img')(
  () => `
    max-height: 70px;
    max-width: 180px;
    object-fit: contain;
`)

const Row = styled('div')(
  () => `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 24px;
`)

const Header = styled('div')(
  () => ``)
export default Footer
