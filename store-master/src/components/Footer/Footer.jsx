import React from 'react';
import S from "./Footer.module.css"; //S is a variable assigned to import styles
import { CiLocationOn, CiMail, CiPhone } from 'react-icons/ci';
import { GrFacebookOption, GrInstagram, GrLinkedinOption, GrPinterest, GrTwitter } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../contexts/globalContext';

function Footer() {

    let iconSize = 28;
    let smIconSize = 23;
    let { themeState } = useGlobalContext();
    return (

        <div className={S.wrapper} style={themeState}>
            <div className={S.grid}>
                <div className={`${S.secA} ${S.listFlex}`}>
                    <img src="./assets/lo.png" alt="logo" width={250} />
                    <div className={S.align}>
                        <CiLocationOn size={iconSize} className={S.footIcons} />
                        <p className={S.noM}>Dubai kurukkuh sandhu, Dubai-623501</p>

                    </div>
                    <div className={S.align}>
                        <CiMail size={iconSize} className={S.footIcons} />
                        <p className={S.noM}>jfawaaz2004@gmail.com</p>

                    </div>
                    <div className={S.align}>
                        <CiPhone size={iconSize} className={S.footIcons} />
                        <p className={S.noM}>+917397029722</p>
                    </div>
                    <div className={S.sm}>
                        <a href="https://facebook.com" target='_blank' rel="noreferrer"><GrFacebookOption size={smIconSize} className={S.fb} /></a>
                        <a href="https://twitter.com" target='_blank' rel="noreferrer"> <GrTwitter size={smIconSize} className={S.twitter} /></a>
                        <a href="https://www.instagram.com" target='_blank' rel="noreferrer">  <GrInstagram size={smIconSize} className={S.insta} /></a>
                        <a href="https://www.linkedin.com" target='_blank' rel="noreferrer"> <GrLinkedinOption size={smIconSize} className={S.lin} /></a>
                       
                    </div>
                </div>
                <div className={`${S.secB} ${S.listFlex}`}>
                    <strong>Categories</strong>
                    <Link className={S.footerLink} to='/products/men'>Men</Link>
                    <Link className={S.footerLink} to='/products/women'>Women</Link>
                    <Link className={S.footerLink} to='/products/tech'>Tech</Link>
                    <Link className={S.footerLink} to='/products/footwear'>Footwear</Link>
                    <Link className={S.footerLink} to='/products/perfumes'>Perfumes</Link>
                </div>
                <div className={`${S.secC} ${S.listFlex}`}>
                    <strong>Useful Links</strong>
                    <Link className={S.footerLink} to='/about'>About</Link>
                    <Link className={S.footerLink} to='/contact'>Contact</Link>
                    <Link className={S.footerLink} to='/shop'>Shop</Link>
                </div>
                <div className={`${S.secD} ${S.listFlex}`}>
                    <strong>Go To Search Tab</strong>
                    <Link className={S.footerLink} to='/search'>
                        <input type="text" placeholder='Click Me' className={S.footerInput} />
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default Footer;